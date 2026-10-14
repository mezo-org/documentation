#!/usr/bin/env node
// Generates a plain-markdown representative per EN docs page for AI consumers.
// Reads src/content/docs/docs/{users,developers}/** and writes public/docs/**/*.md.
// Tabs and component content convert before general cleanup runs. Preservation
// covers every custom component, not only tabs. Run with --self-test to check
// the conversion rules against representative samples before generating.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'src/content/docs/docs');
const OUT_DIR = path.join(ROOT, 'public/docs');
const SITE = 'https://mezo.org/docs';

function parseAttrs(tag) {
  const attrs = {};
  for (const m of tag.matchAll(/(\w+)="([^"]*)"/g)) attrs[m[1]] = m[2];
  for (const m of tag.matchAll(/(\w+)=\{([^}]*)\}/g)) attrs[m[1]] = m[2];
  return attrs;
}

function convertLinkCard(tag) {
  const a = parseAttrs(tag);
  if (!a.title || !a.href) return '';
  return `- [${a.title}](${a.href})` + (a.description ? ` - ${a.description}` : '');
}

function convertYouTube(tag) {
  const a = parseAttrs(tag);
  if (!a.id) return '';
  let url = `https://www.youtube.com/watch?v=${a.id}`;
  if (a.start) url += `&t=${a.start}s`;
  return `- Video: [${a.title || 'YouTube video'}](${url})`;
}

function convertImage(tag) {
  const a = parseAttrs(tag);
  const alt = a.alt || 'image';
  if (!a.src) return `*Image: ${alt}*`;
  if (/^['"]/.test(a.src) || a.src.startsWith('http') || a.src.startsWith('/')) {
    return `![${alt}](${a.src.replace(/^['"]|['"]$/g, '')})`;
  }
  return `*Image: ${alt}*`;
}

function convertAdmonition(type, givenTitle, inner) {
  const title = givenTitle || (type.charAt(0).toUpperCase() + type.slice(1));
  const raw = inner.replace(/^\n+|\n+$/g, '').split('\n');
  const indents = raw.filter((l) => l.trim()).map((l) => l.match(/^[ \t]*/)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  const lines = raw.map((l) => (l.trim() ? `> ${l.slice(min)}` : '>'));
  return [`> **${title}:**`, `>`].concat(lines).join('\n');
}

// Convert one non-fenced segment. Tabs first, general cleanup last.
function convertSegment(seg) {
  let s = seg;
  s = s.replace(/<Tabs[^>]*>/g, '');
  s = s.replace(/<\/Tabs>/g, '');
  s = s.replace(/<TabItem[^>]*label="([^"]*)"[^>]*>/g, '### $1\n');
  s = s.replace(/<\/TabItem>/g, '');
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  s = s.replace(/^import[ \t].*$/gm, '');
  s = s.replace(/<\/?Steps>/g, '');
  s = s.replace(/<\/?CardGrid>/g, '');
  s = s.replace(/<LinkCard[\s\S]*?\/>/g, (m) => convertLinkCard(m));
  s = s.replace(/<LinkButton([^>]*)>([\s\S]*?)<\/LinkButton>/g, (m, attrs, text) => {
    const href = (attrs.match(/href="([^"]*)"/) || [])[1];
    const clean = text.replace(/\s+/g, ' ').trim();
    return href && clean ? `[${clean}](${href})` : clean;
  });
  s = s.replace(/<YouTube[^>]*\/>/g, (m) => convertYouTube(m));
  s = s.replace(/<Image[\s\S]*?\/>/g, (m) => convertImage(m));
  s = s.replace(/(^|\n)[ \t]*:{3,}([a-z]+)(?:\[([^\]]*)\])?[ \t]*\n([\s\S]*?)\n[ \t]*:{3,}[ \t]*(?=\n|$)/g,
    (m, pre, type, title, inner) => pre + convertAdmonition(type, title, inner));
  s = s.replace(/(^|\n)[ \t]*<Aside([^>]*)>([\s\S]*?)<\/Aside>/g, (m, pre, attrs, inner) => {
    const a = parseAttrs(attrs);
    return pre + convertAdmonition(a.type || 'note', a.title, inner);
  });
  // An Aside that wraps a code fence spans segments; keep its label as a line.
  s = s.replace(/<Aside([^>]*)>/g, (m, attrs) => {
    const a = parseAttrs(attrs);
    const type = a.type || 'note';
    return `**${a.title || type.charAt(0).toUpperCase() + type.slice(1)}:**\n`;
  });
  s = s.replace(/<\/Aside>/g, '');
  s = s.replace(/<details[^>]*>/g, '');
  s = s.replace(/<summary>([\s\S]*?)<\/summary>/g, '**$1**');
  s = s.replace(/<\/details>/g, '');
  s = s.replace(/<br\s*\/?>/g, ' ');
  s = s.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (m, href, text) => {
    const clean = text.replace(/<[^>]*>/g, '').trim();
    return clean ? `[${clean}](${href})` : '';
  });
  s = s.replace(/<\/?div[^>]*>/g, '');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s;
}

function isFenceLine(line) {
  const s = line.trimStart();
  return s.startsWith('```') || s.startsWith('~~~');
}

// Line-anchored fence tracking: only a fence marker at the start of a line
// (after indentation) toggles fenced state. Inline triple backticks inside
// table cells never toggle. Both markers stay inside the fenced segment.
function splitFences(body) {
  const parts = [];
  let buf = [];
  let fenced = false;
  const flush = () => {
    const text = buf.join('\n');
    if (text !== '') parts.push({ fenced, text });
    buf = [];
  };
  for (const line of body.split('\n')) {
    if (isFenceLine(line)) {
      if (!fenced) {
        flush();
        fenced = true;
        buf.push(line);
      } else {
        buf.push(line);
        flush();
        fenced = false;
      }
    } else {
      buf.push(line);
    }
  }
  flush();
  return parts.length ? parts : [{ fenced: false, text: '' }];
}

function serialize(body, base) {
  return splitFences(body)
    .map((p) => (p.fenced ? p.text : absolutizeLinks(convertSegment(p.text), base)))
    .join('\n')
    .trim() + '\n';
}

// Source links are relative to the HTML page URL, which ends in a slash. The
// .md sits one level up, so resolve relative links against the page URL.
function absolutizeLinks(s, base) {
  if (!base) return s;
  return s.replace(/(?<!!)\[([^\]]*)\]\((?![a-z][a-z0-9+.-]*:|#|\/)([^)\s]+)\)/gi, (m, text, href) => {
    const u = new URL(href, base);
    return `[${text}](${u.pathname}${u.search}${u.hash})`;
  });
}

function slugFor(rel) {
  let s = rel.replace(/\.mdx?$/i, '').toLowerCase();
  s = s.replace(/\/index$/, '');
  return s;
}

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (/\.mdx?$/i.test(e.name) && e.name !== 'SUMMARY.md') out.push(full);
  }
  return out;
}

const LEFTOVER = [
  /<[A-Z][A-Za-z]*[\s>/]/,
  /<(details|summary)[\s>/]/,
  /\{\/\*/,
  /^:{3,}[a-z]/m,
  /^[ \t]+:{3,}[a-z]+/m,
  /^import [ \t]/m,
];

function countOutsideFences(text, re) {
  let n = 0;
  for (const p of splitFences(text)) {
    if (!p.fenced) n += (p.text.match(re) || []).length;
  }
  return n;
}

async function main() {
  const files = (await walk(path.join(DOCS_DIR, 'users')))
    .concat(await walk(path.join(DOCS_DIR, 'developers')));

  const bySlug = new Map();
  const collisions = [];
  for (const f of files) {
    const rel = path.relative(DOCS_DIR, f).split(path.sep).join('/');
    const slug = slugFor(rel);
    const prev = bySlug.get(slug);
    if (prev) {
      collisions.push([slug, path.relative(DOCS_DIR, prev), rel]);
      if (/\/index\.mdx?$/i.test(rel)) bySlug.set(slug, f);
    } else {
      bySlug.set(slug, f);
    }
  }

  let written = 0;
  const problems = [];
  for (const [slug, file] of [...bySlug.entries()].sort()) {
    const raw = (await fs.readFile(file, 'utf-8')).replace(/\r\n?/g, '\n');
    const parsed = matter(raw);
    const url = slug ? `${SITE}/${slug}` : SITE;
    const head = [`# ${parsed.data.title || slug}`];
    if (parsed.data.description) head.push(`_${String(parsed.data.description).trim()}_`);
    head.push(`_Source: ${url}_`);
    const body = serialize(parsed.content, slug ? `${SITE}/${slug}/` : `${SITE}/`);
    const out = head.join('\n\n') + '\n\n' + body;

    const srcHeadings = countOutsideFences(parsed.content, /^#{1,6}\s+\S/gm);
    const outHeadings = (out.match(/^#{1,6}\s+\S/gm) || []).length;
    const srcFences = (parsed.content.match(/```/g) || []).length;
    const outFences = (out.match(/```/g) || []).length;
    const leftovers = LEFTOVER.filter((re) => {
      const parts = splitFences(out).filter((p) => !p.fenced).map((p) => p.text.replace(/`[^`\n]*`/g, '')).join('\n---\n');
      return re.test(parts);
    });
    if (outHeadings < srcHeadings || outFences !== srcFences || leftovers.length) {
      problems.push({ slug, srcHeadings, outHeadings, srcFences, outFences, leftovers: leftovers.map(String) });
    }

    const dest = slug ? path.join(OUT_DIR, slug + '.md') : path.join(ROOT, 'public/docs.md');
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, out, 'utf-8');
    written++;
  }

  console.log(`pages: ${bySlug.size}, written: ${written}`);
  if (collisions.length) {
    console.log('collisions (index preferred):');
    for (const c of collisions) console.log('  ' + c.join(' | '));
  }
  if (problems.length) {
    console.log('NEEDS REVIEW:');
    for (const p of problems) console.log('  ' + JSON.stringify(p));
    if (process.argv.includes('--strict')) process.exitCode = 1;
  } else {
    console.log('validation clean: headings and fences preserved, no JSX remnants');
  }
}

function runSelfTest() {
  const assert = (cond, name) => {
    if (!cond) {
      console.error('SELF-TEST FAIL: ' + name);
      process.exitCode = 1;
    } else {
      console.log('self-test ok: ' + name);
    }
  };
  const t = (input) => serialize(input).trim();

  assert(t('<Steps>\n\n1. **Do thing**\n\n   Details here.\n\n2. **Next**\n\n</Steps>')
    === '1. **Do thing**\n\n   Details here.\n\n2. **Next**', 'steps unwrap keeps list');
  assert(t('::::caution[Watch out]\nDo not do this.\n::::')
    === '> **Watch out:**\n>\n> Do not do this.', 'titled admonition to quote');
  assert(t(':::note\nPlain note.\n:::')
    === '> **Note:**\n>\n> Plain note.', 'untitled admonition label from type');
  assert(t('1. **Step**\n\n   :::caution\n   Be careful here.\n   :::')
    === '1. **Step**\n\n> **Caution:**\n>\n> Be careful here.', 'indented admonition in list converts');
  assert(t('<LinkCard\n  title="T"\n  href="/docs/x"\n  description="D"\n/>')
    === '- [T](/docs/x) - D', 'multiline linkcard');
  assert(t('<LinkButton href="/docs/y" icon="right-arrow">\n  Click me\n</LinkButton>')
    === '[Click me](/docs/y)', 'multiline linkbutton drops props');
  assert(t('<YouTube id="abc123" title="How to" start={51} />')
    === '- Video: [How to](https://www.youtube.com/watch?v=abc123&t=51s)', 'youtube keeps id title start');
  assert(t('<Image\n  src={someVar}\n  alt="Diagram of flows"\n/>')
    === '*Image: Diagram of flows*', 'variable image keeps alt text');
  assert(t('<Image src="/docs/img.png" alt="Alt" />')
    === '![Alt](/docs/img.png)', 'string image stays an image');
  assert(t('| a | <details><summary>Fix</summary><br/>Do X.<br/>Do Y.</details> |')
    === '| a | **Fix** Do X. Do Y. |', 'details in table cell');
  assert(t('#### Head <a href="#x" id="x"></a>')
    === '#### Head', 'empty anchor dropped');
  assert(t('- <a href="/docs/z/" target="_blank" rel="noopener">Label</a>. Tail.')
    === '- [Label](/docs/z/). Tail.', 'anchor link converted');
  assert(t('import { Steps } from "@astrojs/starlight/components";\n\nText\n\n```js\nimport x from "y";\n```')
    === 'Text\n\n```js\nimport x from "y";\n```', 'imports stripped outside fences only');
  assert(t('{/* TODO: screenshot */}\n\nText') === 'Text', 'jsx comment dropped');
  assert(t('<Tabs><TabItem label="npm">npm i x</TabItem></Tabs>')
    === '### npm\nnpm i x', 'tab content converts first');
  assert(t('<div style="overflow-x:auto;">\n\n| a |\n| - |\n\n</div>')
    === '| a |\n| - |', 'div wrapper dropped, table kept');
  assert(t('<Aside type="caution" title="Heads up">\nBe careful.\n</Aside>')
    === '> **Heads up:**\n>\n> Be careful.', 'aside to quote');
  assert(t('<Aside>\nPlain aside.\n</Aside>')
    === '> **Note:**\n>\n> Plain aside.', 'untitled aside defaults to note');
  assert(t('<Aside type="caution" title="Stale port">\nKill it:\n\n```bash\nkill 1\n```\n</Aside>')
    === '**Stale port:**\n\nKill it:\n\n```bash\nkill 1\n```', 'aside wrapping a fence keeps its label');
  assert(serialize('[Kit](./validator-kit), [Up](../), [Abs](/docs/x), [Ext](https://x.org), [Mail](mailto:a@b.c)',
    'https://mezo.org/docs/developers/mezo-nodes/').trim()
    === '[Kit](/docs/developers/mezo-nodes/validator-kit), [Up](/docs/developers/), [Abs](/docs/x), [Ext](https://x.org), [Mail](mailto:a@b.c)',
    'relative links resolve against the page URL');
}

if (process.argv.includes('--self-test')) {
  runSelfTest();
} else {
  await main();
}
