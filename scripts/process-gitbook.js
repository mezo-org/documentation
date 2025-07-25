#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

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
        topics.push(this.generateUsersTopic(section));
      } else if (sectionPath === 'developers') {
        topics.push(this.generateDevelopersTopic(section));
      } else if (sectionPath === 'admins') {
        topics.push(this.generateAdminsTopic(section));
      }
    }
    
    this.topicConfig = topics;
  }

  generateUsersTopic(section) {
    return {
      label: 'User Documentation',
      id: 'users',
      link: '/docs/users/',
      icon: 'star',
      items: this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  generateDevelopersTopic(section) {
    return {
      label: 'Developer Documentation', 
      id: 'developers',
      link: '/docs/developers/',
      icon: 'seti:powershell',
      items: this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  generateAdminsTopic(section) {
    return {
      label: 'Admin Documentation',
      id: 'admins', 
      link: '/docs/admins/',
      icon: 'setting',
      items: this.convertChildrenToItems(section.children, 'docs/')
    };
  }

  convertChildrenToItems(children, prefix = '') {
    return children.map(child => {
      let cleanPath = child.path
        .replace(/\/README\.md$/, '')
        .replace(/\.mdx?$/, '');
      
      // Handle special case for index files - don't include "index" in the slug
      if (cleanPath.endsWith('/index')) {
        cleanPath = cleanPath.slice(0, -6); // remove "/index"
      }
      
      const link = `${prefix}${cleanPath}`;
      
      if (child.children && child.children.length > 0) {
        return {
          label: child.title,
          collapsed: true,
          items: this.convertChildrenToItems(child.children, prefix)
        };
      }
      
      return link;
    }).filter(item => {
      // Filter out empty links that might result from root README/index files
      return typeof item === 'object' || (typeof item === 'string' && item.length > prefix.length);
    });
  }

  async processMarkdownFiles() {
    console.log('📝 Processing markdown files...');
    
    await this.processDirectory(DOCS_DIR);
  }

  async processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
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

    // Transform Gitbook button blocks
    transformed = transformed.replace(
      /\[block:buttons\]\s*\{[^}]*"buttons":\s*\[(.*?)\]\s*\}[^[]*\[\/block:buttons\]/gs,
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

    // Handle frontmatter and topic assignment
    const relativePath = path.relative(DOCS_DIR, filePath);
    const topicId = this.inferTopicFromPath(relativePath);
    
    if (transformed.startsWith('---')) {
      // Update existing frontmatter to add topic
      const frontmatterEnd = transformed.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        const frontmatter = transformed.slice(0, frontmatterEnd);
        const rest = transformed.slice(frontmatterEnd);
        
        if (!frontmatter.includes('topic:') && topicId) {
          transformed = frontmatter + `topic: ${topicId}\n` + rest;
        }
      }
    } else {
      // Add new frontmatter
      const filename = path.basename(filePath, path.extname(filePath));
      const title = filename === 'README' || filename === 'index' 
        ? this.inferTitleFromPath(filePath)
        : filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      let frontmatter = `---\ntitle: ${title}\n`;
      if (topicId) {
        frontmatter += `topic: ${topicId}\n`;
      }
      frontmatter += `---\n\n`;
      
      transformed = frontmatter + transformed;
    }

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