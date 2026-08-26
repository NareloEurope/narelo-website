#!/usr/bin/env node
/**
 * Downloads every image and video listed in assets.json from the source Wix site
 * at full original resolution.
 *
 * Images land in assets-source/ (the pristine archive of the Wix media) and
 * videos in public/video. Run `npm run optimize-assets` afterwards to generate
 * the web-sized .webp files that the site actually serves from public/images.
 *
 * Re-runnable: files that already exist with a non-zero size are skipped.
 *
 *   node scripts/fetch-assets.mjs           # fetch missing
 *   node scripts/fetch-assets.mjs --force   # re-fetch everything
 */
import { mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FORCE = process.argv.includes('--force');
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';

const manifest = JSON.parse(
  await import('node:fs').then((fs) => fs.readFileSync(join(ROOT, 'scripts/assets.json'), 'utf8'))
);

const exists = async (p) => {
  try {
    return (await stat(p)).size > 0;
  } catch {
    return false;
  }
};

async function get(url, dest, label) {
  if (!FORCE && (await exists(dest))) {
    console.log(`  skip  ${label}`);
    return { skipped: true };
  }
  const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://mercedescgalera.wixsite.com/' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length === 0) throw new Error(`empty body for ${url}`);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log(`  ok    ${label}  ${(buf.length / 1024).toFixed(0)} KB`);
  return { bytes: buf.length };
}

const failures = [];
let done = 0;

console.log(`\nImages (${manifest.images.length})`);
for (const img of manifest.images) {
  // A bare id resolves against the media host; a few entries are already absolute.
  const url = img.uri.startsWith('http') ? img.uri : `https://static.wixstatic.com/media/${img.uri}`;
  try {
    await get(url, join(ROOT, 'assets-source', img.local), img.local);
    done++;
  } catch (e) {
    console.error(`  FAIL  ${img.local}: ${e.message}`);
    failures.push({ ...img, error: e.message });
  }
}

console.log(`\nVideos (${manifest.videos.length})`);
for (const v of manifest.videos) {
  // Try best quality first, then fall back down the ladder.
  const ladder = [v.best, ...v.qualities.slice().reverse()].filter((q, i, a) => a.indexOf(q) === i);
  let ok = false;
  for (const q of ladder) {
    try {
      await get(`https://video.wixstatic.com/video/${v.id}/${q}/mp4/file.mp4`, join(ROOT, 'public/video', v.local), `${v.local} (${q})`);
      ok = true;
      done++;
      break;
    } catch (e) {
      console.warn(`  retry ${v.local}: ${q} failed (${e.message})`);
    }
  }
  if (!ok) failures.push({ ...v, error: 'all qualities failed' });
}

console.log(`\n${done} asset(s) present, ${failures.length} failure(s).`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
