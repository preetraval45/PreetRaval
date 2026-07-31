/**
 * Converts the large PNG screenshots in public/ to WebP.
 * Run with: npm run images:optimize
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC = path.join(process.cwd(), 'public');
const TARGETS = ['kosh-screenshot.png', 'nexus-screenshot.png', 'vyne-screenshot.png'];

for (const file of TARGETS) {
  const src = path.join(PUBLIC, file);
  const out = src.replace(/\.png$/, '.webp');
  const before = (await stat(src)).size;
  const buf = await sharp(src).webp({ quality: 82 }).toBuffer();
  await writeFile(out, buf);
  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB -> ${(buf.length / 1024).toFixed(0)} KB webp ` +
      `(-${(100 - (buf.length / before) * 100).toFixed(0)}%)`,
  );
}

const remaining = (await readdir(PUBLIC)).filter((f) => f.endsWith('.png'));
if (remaining.length) console.log('PNGs still in public/:', remaining.join(', '));
