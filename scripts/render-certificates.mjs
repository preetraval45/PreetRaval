/**
 * Renders page 1 of every PDF in public/certificates to a PNG in
 * public/certificates/previews.
 *
 * Rendering happens in a real Chrome via pdf.js rather than in Node: the
 * Node canvas backends silently drop text drawn in some embedded fonts (the
 * Coursera certificates come out with a blank holder name), because pdf.js
 * needs a DOM FontFace loader to install those fonts.
 *
 * Run with: node scripts/render-certificates.mjs
 */
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { createReadStream } from 'node:fs';
import puppeteer from 'puppeteer-core';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'public', 'certificates');
const OUT = path.join(SRC, 'previews');
const SCALE = 2;

const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].find((p) => existsSync(p));

if (!CHROME) throw new Error('No Chrome or Edge binary found');

const slug = (name) =>
  name
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const MIME = { '.mjs': 'text/javascript', '.js': 'text/javascript', '.pdf': 'application/pdf', '.html': 'text/html' };

/* Serve the repo so the page can load pdf.js and the PDFs over http. */
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith('.pdf'));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--disable-gpu'] });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('page error:', e.message));
await page.goto(`${origin}/scripts/pdf-render.html`, { waitUntil: 'load' });

for (const file of files) {
  const dataUrl = await page.evaluate(
    (url, scale) => window.renderFirstPage(url, scale),
    `${origin}/public/certificates/${encodeURIComponent(file)}`,
    SCALE,
  );
  const img = Buffer.from(dataUrl.split(',')[1], 'base64');
  const out = path.join(OUT, `${slug(file)}.webp`);
  await writeFile(out, img);
  console.log(`${file} -> previews/${slug(file)}.webp (${(img.length / 1024).toFixed(0)} KB)`);
}

await browser.close();
server.close();
