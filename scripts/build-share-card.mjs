/**
 * Builds public/images/share-card.jpg, the picture WhatsApp, Instagram,
 * Facebook, LinkedIn and iMessage show when someone shares a narelo.es link.
 *
 * Why this exists at all: every page used to point at a .webp for its social
 * card, and WhatsApp and Facebook do not render WebP previews. The link came
 * through with no picture. Social cards have to be JPEG or PNG.
 *
 * The site's own hero frame, darkened, with the Narelo mark in white over it,
 * at the 1200x630 every platform crops to. Run it again if the home page hero
 * poster is ever swapped:
 *
 *   npm run build-share-card
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { statSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'public/images/home-hero-poster.webp');
const LOGO = join(root, 'public/images/narelo-logo.webp');
const OUT = join(root, 'public/images/share-card.jpg');

const WIDTH = 1200;
const HEIGHT = 630;

/** The logo file is near-black ink on transparency. Keep the shape, paint it white. */
const logo = await sharp(LOGO)
  .resize({ width: 360 })
  .ensureAlpha()
  .toColourspace('b-w')
  .negate({ alpha: false })
  .toColourspace('srgb')
  .png()
  .toBuffer();

const photo = await sharp(SOURCE)
  .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
  // Dark enough for a white mark to read, light enough to still be the beach.
  .modulate({ brightness: 0.72 })
  .toBuffer();

await sharp(photo)
  .composite([{ input: logo, gravity: 'centre' }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUT);

console.log(`share-card.jpg  ${WIDTH}x${HEIGHT}  ${(statSync(OUT).size / 1024).toFixed(0)} kB`);
