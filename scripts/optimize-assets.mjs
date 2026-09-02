#!/usr/bin/env node
/**
 * Generates web-ready images in public/images from the pristine originals in
 * assets-source/.
 *
 * The originals are exactly what the Wix site holds and are kept as the
 * archive of record — never edit or delete them. This step only changes
 * encoding and pixel dimensions, never composition or content. Wix itself
 * serves resized AVIF/WebP derivatives, so this brings the clone closer to
 * what a visitor actually downloads, not further away.
 *
 * A corrected photograph is added as a NEW original next to the archived one,
 * named for where it is used, rather than by editing the archived file in
 * place. `world-ocean.jpg` is the one such file: gallery-01.jpg with its
 * shadows lifted, because the backlit sunset read almost black behind the
 * Five Worlds panel scrim (2026-09-02). gallery-01.jpg is unchanged.
 *
 *   node scripts/optimize-assets.mjs
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'assets-source');
const DEST = join(ROOT, 'public/images');

/**
 * Max rendered width per role. Doubled for retina, then capped so we never
 * upscale past the original.
 */
const WIDTHS = [
  [/^(social-|narelo-logo)/, 220],   // icons and wordmark: tiny on screen
  [/^stage-/, 400],                  // 128px leaf crops
  [/^gallery-/, 900],                // 3-up slider cells
  [/^(home-hero-poster|.*-video-poster)/, 1600],
  [/./, 1800],                       // full-bleed and section images
];

const widthFor = (name) => WIDTHS.find(([re]) => re.test(name))[1];

await mkdir(DEST, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

let before = 0;
let after = 0;

for (const file of files) {
  const { name } = parse(file);
  const srcPath = join(SRC, file);
  const outPath = join(DEST, `${name}.webp`);

  const input = sharp(srcPath, { failOn: 'none' });
  const meta = await input.metadata();
  const target = Math.min(widthFor(name), meta.width ?? Infinity);

  // The wordmark and social icons need transparency preserved losslessly-ish.
  const lossless = /^(social-|narelo-logo)/.test(name);

  await input
    .resize({ width: target, withoutEnlargement: true })
    .webp(lossless ? { quality: 92, effort: 6 } : { quality: 80, effort: 6 })
    .toFile(outPath);

  const a = (await stat(srcPath)).size;
  const b = (await stat(outPath)).size;
  before += a;
  after += b;
  console.log(
    `${name}.webp  ${meta.width}px -> ${target}px   ${(a / 1024).toFixed(0)}KB -> ${(b / 1024).toFixed(0)}KB`
  );
}

const mb = (x) => (x / 1048576).toFixed(1);
console.log(`\n${files.length} images: ${mb(before)}MB -> ${mb(after)}MB (${((1 - after / before) * 100).toFixed(0)}% smaller)`);
