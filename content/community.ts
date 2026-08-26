/**
 * Community page copy — from https://mercedescgalera.wixsite.com/narelo/blank-2
 * Deviations marked `MIGRATION FIX`, logged in MIGRATION-AUDIT.md §11.
 */

export const hero = {
  headingLine1: 'A community that grows',
  headingLine2: 'with you',
  image: '/images/community-hero.webp',
} as const;

export const testimonials = [
  { quote: '“The kids had an amazing time and were completely engaged throughout the whole celebration”', attribution: '- MARÍA · NARELO FAMILY' },
  { quote: '“It’s more than the activities. It’s the feeling of being part of something.”', attribution: '- CARLOS · NARELO FAMILY' },
  { quote: '“My daughter looks forward to every experience. And so do I.”', attribution: '- TESSA · NARELO FAMILY' },
] as const;

/** Six slides, numbered 01–06 on the live site, with a click-to-open lightbox. */
export const gallery = [
  { src: '/images/gallery-01.webp', n: '01' },
  { src: '/images/gallery-02.webp', n: '02' },
  { src: '/images/family-whatsapp-091957.webp', n: '03' },
  { src: '/images/gallery-04.webp', n: '04' },
  { src: '/images/gallery-05.webp', n: '05' },
  { src: '/images/img-5208.webp', n: '06' },
] as const;

export const belong = {
  heading: 'A place to belong',
  body: 'Where children grow, families connect, and memories are made together.',
} as const;

export const events = {
  /** MIGRATION FIX (audit §7A #7): Wix read "Moments to conect and grow together". */
  heading: 'Moments to connect and grow together',
  body: 'Community experiences created to bring families together, to learn, share and create meaningful moments.',
  ctaLabel: 'SEE ALL EVENTS',
  ctaHref: '/events',
  /** MIGRATION FIX (audit §7B #12): Wix Events rendered "No hay eventos en este momento". */
  emptyState: 'There are no events at this time',
  video: '/video/community-band.mp4',
  poster: '/images/community-video-poster.webp',
} as const;

export const journalTeaser = {
  heading: 'Knowledge to guide you',
  body: 'Thoughtful insights and expert perspectives to support modern family life.',
  ctaLabel: 'JOURNAL',
  ctaHref: '/journal',
} as const;
