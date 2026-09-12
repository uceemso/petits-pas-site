import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const articlesDir = new URL('../src/content/articles/', import.meta.url);
const files = (await readdir(articlesDir)).filter((name) => name.endsWith('.md'));

let changedFiles = 0;

for (const file of files) {
  const path = join(articlesDir.pathname, file);
  const original = await readFile(path, 'utf8');
  const frontmatterMatch = original.match(/^---\n[\s\S]*?\n---/);
  if (!frontmatterMatch) continue;

  const head = frontmatterMatch[0];
  let body = original.slice(head.length);

  // Markdown blockquotes become the site's neutral callout style.
  body = body.replace(
    /(?:^|\n)>\s*(«[^\n]+»)(?=\n|$)/g,
    (_match, quote) => `\n<div class="callout">${quote}</div>`
  );

  // A standalone French quote becomes a neutral callout.
  body = body.replace(
    /(^|\n)([ \t]*)(«[^\n<>]+»)[ \t]*(?=\n|$)/g,
    (_match, prefix, _spaces, quote) => `${prefix}<div class="callout">${quote}</div>`
  );

  // Normalize excessive blank lines without changing paragraph structure.
  body = body.replace(/\n{4,}/g, '\n\n\n');

  const normalized = head + body;
  if (normalized !== original) {
    await writeFile(path, normalized, 'utf8');
    changedFiles++;
    console.log(`✓ ${file}: formatage normalisé automatiquement.`);
  }
}

if (!changedFiles) console.log('✓ Aucun formatage automatique nécessaire.');
