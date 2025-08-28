#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../src/content/docs/docs');
const SUMMARY_FILE = path.join(DOCS_DIR, 'SUMMARY.md');
const CONFIG_FILE = path.join(__dirname, '../astro.config.mjs');
const ASSETS_SOURCE = path.join(__dirname, '../public/docs/gitbook');
const ASSETS_TARGET = path.join(__dirname, '../src/assets/gitbook');

class GitbookProcessor {
  constructor() {
    this.summaryStructure = null;
    this.topicConfig = [];
  }

  async process() {
    console.log('🔄 Processing Gitbook content for Starlight...');
    
    try {
      // Step 1: Parse SUMMARY.md to understand structure
      await this.parseSummary();
      
      // Step 2: Generate topic configuration
      await this.generateTopicConfig();
      
      // Step 3: Process markdown files
      await this.processMarkdownFiles();
      
      // Step 4: Move and process assets
      await this.processAssets();
      
      // Step 5: Update Astro config
      await this.updateAstroConfig();
      
      console.log('✅ Gitbook processing complete!');
    } catch (error) {
      console.error('❌ Error processing Gitbook content:', error);
      process.exit(1);
    }
  }

  async parseSummary() {
    console.log('📖 Parsing SUMMARY.md...');
    
    const summaryContent = await fs.readFile(SUMMARY_FILE, 'utf-8');
    this.summaryStructure = this.parseSummaryContent(summaryContent);
  }

  parseSummaryContent(content) {
    const lines = content.split('\n').filter(line => line.trim());
    const structure = [];
    const stack = [{ children: structure, level: -1 }];

    for (const line of lines) {
      if (line.startsWith('#') || !line.includes('](')) continue;

      const level = (line.match(/^ */)[0].length) / 2;
      const match = line.match(/\* \[([^\]]+)\]\(([^)]+)\)/);
      
      if (!match) continue;

      const [, title, path] = match;
      const item = { title, path, children: [] };

      // Find the correct parent
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      parent.children.push(item);
      stack.push({ ...item, level });
    }

    return structure;
  }

  async generateTopicConfig() {
    console.log('🏗️  Generating topic configuration...');
    
    const topics = [];
    
    for (const section of this.summaryStructure) {
      if (section.path === 'README.md' || section.path === 'index.md') continue;
      
      const sectionPath = section.path.replace(/\/README\.md$/, '').replace(/\.md$/, '');
      
      if (sectionPath === 'users') {
        topics.push(await this.generateUsersTopic(section));
      } else if (sectionPath === 'developers') {
        topics.push(await this.generateDevelopersTopic(section));
      } else if (sectionPath === 'admins') {
        topics.push(await this.generateAdminsTopic(section));
      }
    }
    
    this.topicConfig = topics;
  }

  async generateUsersTopic(section) {
    return {
      label: 'User Documentation',
      id: 'users',
      link: '/docs/users/',
      icon: 'star',
      items: await this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  async generateDevelopersTopic(section) {
    return {
      label: 'Developer Documentation', 
      id: 'developers',
      link: '/docs/developers/',
      icon: 'seti:powershell',
      items: await this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  async generateAdminsTopic(section) {
    return {
      label: 'Admin Documentation',
      id: 'admins', 
      link: '/docs/admins/',
      icon: 'setting',
      items: await this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  async convertChildrenToItems(children, prefix = '') {
    const items = [];
    
    for (const child of children) {
      let cleanPath = child.path
        .replace(/\/README\.md$/, '')
        .replace(/\.mdx?$/, '')
        .toLowerCase(); // Normalize to lowercase to match Astro's slug generation
      
      // Handle special case for index files - don't include "index" in the slug
      if (cleanPath.endsWith('/index')) {
        cleanPath = cleanPath.slice(0, -6); // remove "/index"
      }
      
      const link = `${prefix}${cleanPath}`;
      
      // Check if this page is hidden by reading its frontmatter
      const isHidden = await this.isPageHidden(child.path);
      
      if (child.children && child.children.length > 0) {
        const childItems = await this.convertChildrenToItems(child.children, prefix);
        
        // Only include the group if it has visible children or is not hidden itself
        if (childItems.length > 0 || !isHidden) {
          items.push({
            label: this.humanizeTitle(child.title),
            collapsed: true,
            items: childItems
          });
        }
      } else if (!isHidden) {
        // Only include non-hidden pages
        if (typeof link === 'string' && link.length > prefix.length) {
          items.push(link);
        }
      }
    }
    
    return items;
  }

  async processMarkdownFiles() {
    console.log('📝 Processing markdown files...');
    
    await this.processDirectory(DOCS_DIR);
  }

  async processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    // Check if there's a README.md but no index.md in this directory
    const hasReadme = entries.some(entry => entry.name === 'README.md');
    const hasIndex = entries.some(entry => entry.name === 'index.md');
    
    if (hasReadme && !hasIndex) {
      // Copy README.md to index.md
      const readmePath = path.join(dir, 'README.md');
      const indexPath = path.join(dir, 'index.md');
      const readmeContent = await fs.readFile(readmePath, 'utf-8');
      await fs.writeFile(indexPath, readmeContent, 'utf-8');
      console.log(`  📄 Created index.md from README.md in ${path.relative(path.join(__dirname, '../src/content/docs'), dir)}`);
    }
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await this.processDirectory(fullPath);
      } else if (entry.name.match(/\.mdx?$/)) {
        await this.processMarkdownFile(fullPath);
      }
    }
  }

  async processMarkdownFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const processed = this.transformMarkdownContent(content, filePath);
    
    if (processed !== content) {
      await fs.writeFile(filePath, processed, 'utf-8');
      console.log(`  ✏️  Processed: ${path.relative(DOCS_DIR, filePath)}`);
    }
  }

  transformMarkdownContent(content, filePath) {
    let transformed = content;
    const relativePath = path.relative(DOCS_DIR, filePath);

    // Special handling for the main docs index page
    if (relativePath === 'README.md' || relativePath === 'index.md') {
      return this.transformDocsIndexPage(content, filePath);
    }

    // Transform Gitbook button blocks
    transformed = transformed.replace(
      /\\?\[block:buttons\]\\?\s*\{[^}]*"buttons":\s*\\?\[(.*?)\\?\]\s*\}[^\\]*\\?\[\/block:buttons\]\\?/gs,
      (match, buttonsJson) => {
        try {
          const buttons = JSON.parse(`[${buttonsJson}]`);
          return buttons.map(btn => 
            `[${btn.text}](${btn.link})`
          ).join(' • ');
        } catch (e) {
          console.warn(`Failed to parse buttons in ${filePath}`);
          return match;
        }
      }
    );

    // Transform Gitbook image references to asset references
    transformed = transformed.replace(
      /!\[([^\]]*)\]\(\.\.\/\.\.\/\.\.\/docs\/gitbook\/([^)]+)\)/g,
      '![](~/assets/gitbook/$2)'
    );

    // Handle frontmatter and topic assignment using gray-matter
    const parsed = matter(transformed);
    const topicId = this.inferTopicFromPath(relativePath);
    
    // Update frontmatter data
    if (!parsed.data.title) {
      const filename = path.basename(filePath, path.extname(filePath));
      parsed.data.title = filename === 'README' || filename === 'index' 
        ? this.inferTitleFromPath(filePath)
        : filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    if (topicId && !parsed.data.topic) {
      parsed.data.topic = topicId;
    }
    
    // Preserve hidden status - don't modify if it already exists
    // (This ensures Gitbook's hidden: true setting is maintained)
    
    // Regenerate the content with updated frontmatter
    transformed = matter.stringify(parsed.content, parsed.data);

    // Clean up any remaining Gitbook syntax
    transformed = transformed.replace(/\[block:[^\]]+\][^[]*\[\/block:[^\]]+\]/gs, '');

    return transformed;
  }

  inferTitleFromPath(filePath) {
    const relativePath = path.relative(DOCS_DIR, filePath);
    const parts = relativePath.split('/').filter(part => part !== 'README.md' && part !== 'index.md');
    return parts[parts.length - 1] || 'Documentation';
  }

  inferTopicFromPath(relativePath) {
    // Determine topic based on file path
    if (relativePath.startsWith('users/')) {
      return 'users';
    } else if (relativePath.startsWith('developers/')) {
      return 'developers';
    } else if (relativePath.startsWith('admins/')) {
      return 'admins';
    } else if (relativePath === 'README.md' || relativePath === 'index.md' || relativePath === 'SUMMARY.md') {
      return 'users'; // Default root files to users topic
    }
    return null;
  }

  transformDocsIndexPage(content, filePath) {
    // Parse existing frontmatter and content using gray-matter
    const parsed = matter(content);
    
    // Extract title and tagline from content
    let title = parsed.data.title || 'Welcome to Mezo Docs';
    let tagline = 'Turn your Bitcoin into an active, yield-generating asset with BitcoinFi.';
    
    // Try to extract tagline from content body
    let bodyContent = parsed.content;
    
    // Extract action buttons directly from GitBook button blocks BEFORE transforming them
    const actions = [];
    const gitbookButtonPattern = /\\?\[block:buttons\]\\?\s*\{[^}]*"buttons":\s*\\?\[(.*?)\\?\]\s*\}[^\\]*\\?\[\/block:buttons\]\\?/gs;
    let buttonMatch;
    
    while ((buttonMatch = gitbookButtonPattern.exec(bodyContent)) !== null) {
      try {
        const [, buttonsJson] = buttonMatch;
        const buttons = JSON.parse(`[${buttonsJson}]`);
        
        buttons.forEach((btn, index) => {
          const action = {
            text: btn.text,
            link: btn.link,
            icon: 'right-arrow'
          };
          
          // Make the second button secondary variant  
          if (index === 1) {
            action.variant = 'secondary';
          }
          
          actions.push(action);
        });
      } catch (e) {
        console.warn(`Failed to parse buttons in ${filePath}:`, e.message);
      }
    }
    
    // Now transform Gitbook button blocks to simple links for tagline extraction
    bodyContent = bodyContent.replace(
      /\\?\[block:buttons\]\\?\s*\{[^}]*"buttons":\s*\\?\[(.*?)\\?\]\s*\}[^\\]*\\?\[\/block:buttons\]\\?/gs,
      (match, buttonsJson) => {
        try {
          const buttons = JSON.parse(`[${buttonsJson}]`);
          return buttons.map(btn => 
            `[${btn.text}](${btn.link})`
          ).join(' • ');
        } catch (e) {
          console.warn(`Failed to parse buttons in ${filePath}`);
          return match;
        }
      }
    );
    
    const lines = bodyContent.split('\n').filter(line => line.trim());
    
    // Look for a paragraph that might be the tagline
    for (const line of lines) {
      if (line.startsWith('#')) continue; // Skip headers
      if (line.includes('[') && line.includes(']')) continue; // Skip links
      if (line.trim() && !line.startsWith('*') && !line.startsWith('-')) {
        tagline = line.trim();
        break;
      }
    }
    
    // Generate the splash page frontmatter
    const frontmatterData = {
      title: title,
      topic: 'users',
      template: 'splash',
      hero: {
        tagline: tagline,
        image: {
          file: '../../../assets/Mezo-Mark-Red.svg'
        },
        actions: actions
      }
    };
    
    // Convert to YAML format using proper library
    const yamlContent = yaml.dump(frontmatterData, {
      indent: 2,
      lineWidth: -1, // No line wrapping
      noRefs: true,  // Don't use references
      sortKeys: false // Preserve key order
    });
    
    return `---\n${yamlContent}---\n`;
  }

  humanizeTitle(title) {
    // Convert slug-like titles to human-readable format
    return title
      .replace(/[-_]/g, ' ')                    // Replace dashes and underscores with spaces
      .replace(/\b\w/g, l => l.toUpperCase())   // Capitalize first letter of each word
      .replace(/\bmusd\b/gi, 'MUSD')            // Special case for MUSD
      .replace(/\bbtc\b/gi, 'BTC')              // Special case for BTC
      .replace(/\bstbtc\b/gi, 'stBTC')          // Special case for stBTC
      .replace(/\btbtc\b/gi, 'tBTC')            // Special case for tBTC
      .replace(/\berc\b/gi, 'ERC')              // Special case for ERC
      .replace(/\bapi\b/gi, 'API')              // Special case for API
      .replace(/\bfaq\b/gi, 'FAQ');             // Special case for FAQ
  }

  async isPageHidden(relativePath) {
    try {
      const fullPath = path.join(DOCS_DIR, relativePath);
      
      // Check if file exists
      try {
        await fs.access(fullPath);
      } catch {
        return false; // File doesn't exist, not hidden
      }
      
      const content = await fs.readFile(fullPath, 'utf-8');
      const parsed = matter(content);
      
      // Check if the page has hidden: true in frontmatter
      return parsed.data.hidden === true;
    } catch (error) {
      console.warn(`  ⚠️  Could not check hidden status for ${relativePath}:`, error.message);
      return false; // Default to not hidden if we can't determine
    }
  }

  async processAssets() {
    console.log('🖼️  Processing assets...');
    
    try {
      // Create target directory
      await fs.mkdir(ASSETS_TARGET, { recursive: true });
      
      // Check if source exists
      try {
        await fs.access(ASSETS_SOURCE);
      } catch {
        console.log('  ℹ️  No gitbook assets found, skipping...');
        return;
      }
      
      // Copy assets
      await this.copyDirectory(ASSETS_SOURCE, ASSETS_TARGET);
      console.log('  ✅ Assets copied to src/assets/gitbook/');
    } catch (error) {
      console.warn('  ⚠️  Could not process assets:', error.message);
    }
  }

  async copyDirectory(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  async updateAstroConfig() {
    console.log('⚙️  Updating Astro configuration...');
    
    const configContent = await fs.readFile(CONFIG_FILE, 'utf-8');
    
    // Generate the new topics configuration
    const topicsConfig = this.generateTopicsConfigString();
    
    // Replace the existing starlightSidebarTopics configuration with a more robust pattern
    const updatedConfig = configContent.replace(
      /starlightSidebarTopics\(\s*\[[\s\S]*?\]\s*\)/,
      `starlightSidebarTopics(${topicsConfig})`
    );
    
    if (updatedConfig !== configContent) {
      await fs.writeFile(CONFIG_FILE, updatedConfig, 'utf-8');
      console.log('  ✅ Astro config updated with generated topics');
    } else {
      console.log('  ℹ️  No changes needed to Astro config');
    }
  }

  generateTopicsConfigString() {
    return JSON.stringify(this.topicConfig, null, 6)
      .replace(/"(\w+)":/g, '$1:')  // Remove quotes from object keys
      .replace(/"/g, "'");          // Use single quotes for strings
  }
}

// Run the processor
const processor = new GitbookProcessor();
processor.process();