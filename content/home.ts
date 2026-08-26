/**
 * Home page copy — transcribed from https://mercedescgalera.wixsite.com/narelo
 * Deviations marked `MIGRATION FIX`, logged in MIGRATION-AUDIT.md §11.
 *
 * Section order and layout verified against the live DOM by element geometry.
 */

export const hero = {
  /** Left-aligned in the lower third of the hero on the source, eyebrows beneath. */
  heading: 'A childhood full of things worth remembering.',
  eyebrowLeft: 'EXTRAORDINARY CHILDHOOD EXPERIENCES',
  eyebrowRight: 'A PRIVATE MEMBERSHIP',
  video: '/video/home-hero.mp4',
  poster: '/images/home-hero-poster.webp',
  videoLabel: 'Kids running',
} as const;

/** Text column left; two overlapping portrait images right. */
export const pause = {
  eyebrow: 'A MOMENT TO PAUSE',
  heading: 'They are growing, right before our eyes.',
  body: 'Between routines, screens and busy days, childhood is quietly unfolding all around us.',
  imageBack: '/images/home-moment-to-pause.webp',
  imageFront: '/images/home-not-to-be-rushed.webp',
} as const;

/** Full-bleed landscape image with the copy set over its right-hand side. */
export const rushed = {
  /** MIGRATION FIX (audit §7A #3): Wix read "Childhood is not to be rushed. Is to be lived." */
  heading: 'Childhood is not to be rushed. It is to be lived.',
  /** MIGRATION FIX (audit §7A #1): Wix read "Moments od curiosity." */
  body: 'Moments of curiosity. Real connection. Freedom to explore. Space to be themselves.',
  image: '/images/home-world-built-around-childhood.webp',
} as const;

/** Centred type on cream. Eyebrow sits above the display heading. */
export const world = {
  eyebrow: 'MORE THAN A PLACE TO GO',
  heading: 'A world built around childhood',
  body: 'Narelo brings together extraordinary experiences, trusted people and a community of families, creating a place where childhood can unfold in many different ways.',
  closing: 'Not just something to do. A world to grow into.',
} as const;

/**
 * MIGRATION FIX (audit §7C): Wix's Home page gave Builders I 3-4, Builders II 4-5
 * and Navigators +5 — contradicting both its own Experiences page and the canonical
 * framework/age-groups.md. Ages below now match the framework. Names left as the
 * site had them (the framework calls the third group "The Nest").
 *
 * Rendered as a horizontal timeline: a rule with a dot per stage, names above,
 * ages below.
 */
export const journey = {
  eyebrow: 'THE JOURNEY',
  heading: 'For every chapter of childhood',
  linkLabel: 'DISCOVER THEIR JOURNEY →',
  linkHref: '/experiences',
  stages: [
    { name: 'BLOOM', age: 'Pregnancy' },
    { name: 'NURTURE', age: '0 - 1 year' },
    { name: 'NEST', age: '1 - 2 years' },
    /** MIGRATION FIX (audit §7A #2): Wix read "LITTLE BEGGININGS". */
    { name: 'LITTLE BEGINNINGS', age: '2 - 3 years' },
    { name: 'BUILDERS I', age: '3 - 5 years' },
    { name: 'BUILDERS II', age: '5 - 6 years' },
    { name: 'NAVIGATORS', age: '6 - 8 years' },
  ],
} as const;

/**
 * Full-bleed background image. Copy column on the left, the four worlds in a
 * 2 × 2 grid on the right — order on the source is DISCOVER, CONNECT, CREATE, MOVE.
 */
export const discovery = {
  eyebrow: 'experiences',
  heading: 'A world of discovery',
  body: 'Designed to spark curiosity, inspire exploration and create lasting memories.',
  linkLabel: 'EXPLORE ALL EXPERIENCES →',
  linkHref: '/experiences',
  background: '/images/home-discovery.webp',
  worlds: [
    { name: 'DISCOVER', body: 'Nature, exploration & the world around them.' },
    { name: 'CONNECT', body: 'People, community & shared experiences.' },
    { name: 'CREATE', body: 'Art, imagination & making.' },
    { name: 'MOVE', body: 'Movement, play & expression.' },
  ],
} as const;

/** Solid tan band, cream type, centred. No image on the source. */
export const closing = {
  heading: 'Familiar faces. New friendships. Shared mornings. Little traditions.',
} as const;

/** Empty solid tan band between `world` and `journey` on the source (741px tall). */
export const tanBand = true;
