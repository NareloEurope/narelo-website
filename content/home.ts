/**
 * Home page copy.
 *
 * Sources (nothing here is invented):
 *  - brand/brand-essence.md — belief, philosophy, values, promise
 *  - framework/mission-vision-promise.md — the Narelo Promise
 *  - framework/the-narelo-framework.md Part IV — the Five Worlds, canonical
 *    names and descriptions ("Ocean. Mountain. The World Around Us.
 *    Expression. The Future.")
 *  - framework/age-groups.md — canonical group names and ages
 *  - framework/experience-rhythm-and-format.md — 90 minutes, ~8 children
 *  - offers/membership/Strategy/positioning.md — "first Narelo home"
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26).
 */

export const hero = {
  eyebrow: 'A private childhood membership · Marbella',
  /** Split across lines so each can rise independently out of its mask. */
  headingLines: ['Childhood,', 'deeply lived.'],
  /* "a members’ community for families ... real-world experiences" until
     2026-09-10 (Vivien): the first line a visitor reads now uses the same
     description as the Membership page, a private members’ club. */
  lede: 'Narelo is a private members’ club built around extraordinary childhood experiences. The membership journey starts from pregnancy all the way to the age of 8.',
  video: '/video/home-hero.mp4',
  poster: '/images/home-hero-poster.webp',
  scrollHint: 'Scroll',
} as const;

/** brand/brand-essence.md §8 — the belief, stated plainly. */
export const belief = {
  eyebrow: 'Our belief',
  heading: 'Children don’t need more activities. They need a richer childhood.',
  body: 'Between school runs, screens and busy weeks, childhood passes quietly in the background. We think it deserves the foreground: real days, real places, real people, and the time to take them in.',
  /**
   * The belief as the Narelo Family Guide states it (Vivien, 2026-09-04). It
   * existed only in the dossier. It sits under the photograph now, in a
   * smaller size, rather than as a third paragraph beside it (2026-09-07).
   */
  pull: 'We believe the greatest gift we can give children is a childhood that prepares them not just for school, but for a future we cannot yet imagine.',
  image: '/images/home-moment-to-pause.webp',
  imageAlt: 'A child pausing outdoors, taking something in.',
} as const;

/** The central message from Strategy/positioning.md, given its own moment. */
export const statement = {
  lines: ['Children join for the experiences.', 'Families stay for the community.'],
} as const;

/** framework/experience-rhythm-and-format.md — working format figures. */
export const shape = {
  eyebrow: 'How a Narelo day is built',
  heading: 'Small groups. Real places. No rush.',
  body: 'Every experience is built to the same shape, whether it happens in our home, on the beach or in the mountains.',
  facts: [
    { value: '8', label: 'children in a group', note: 'Small enough that every child is known by name, not managed as a crowd.' },
    { value: '90', label: 'minutes together', note: 'Long enough to settle, explore and stay centred.' },
  ],
  image: '/images/home-not-to-be-rushed.webp',
  imageAlt: 'A small group of children exploring together, unhurried.',
} as const;

/**
 * framework/the-narelo-framework.md Part IV — canonical names and summaries.
 * Display names drop the leading "The" (Rui, 2026-08-26): World Around Us,
 * Future. Movement and Stillness flow through all five rather than being a
 * sixth. Rendered on the home page as the scroll-driven WorldsExplorer.
 *
 * The descriptions themselves live once, on the Experiences page (Vivien's
 * feedback pass, 2026-08-31, supplied the wording). Here the panels carry the
 * short tagline only and the link below points at the full version, so the
 * same five things are not written up twice (2026-09-02).
 */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five ways of meeting the world',
  body: 'Our experiences move through five worlds inspired by the real life around us, each opening new ways to explore, move, create and discover. Different worlds. Different experiences. Always something new to uncover.',
  items: [
    {
      /*
       * A brightened version of gallery-01: the original is a backlit sunset,
       * so the sand and the children read almost black behind the panel's
       * scrim (2026-09-02). world-ocean lifts the shadows and leaves the sun
       * and the sky where they were. gallery-01 itself is untouched and the
       * Community gallery still uses it.
       */
      name: 'Ocean',
      short: 'The sea as a living place',
      image: '/images/world-ocean.webp',
    },
    {
      name: 'Mountain',
      short: 'Nature on its own terms',
      /*
       * The Navigators photograph, the four children running through the
       * wood, used here too (Vivien, 2026-09-08). world-mountain.webp is no
       * longer used anywhere; it stays in the repo in case it is wanted back.
       */
      image: '/images/stage-photo-navigators.webp',
    },
    {
      name: 'World Around Us',
      short: 'Doors children rarely get to open',
      image: '/images/home-world-built-around-childhood.webp',
    },
    {
      name: 'Expression',
      short: 'Giving form to ideas',
      image: '/images/gallery-02.webp',
    },
    {
      name: 'Future',
      short: 'Curiosity about what is changing',
      image: '/images/contact-hero.webp',
    },
  ],
  linkLab: 'The five worlds, in full',
  linkHref: '/experiences/#worlds',
} as const;

/**
 * framework/age-groups.md — canonical names and ages.
 * Rendered as a horizontal timeline: name and age only. The full description
 * of each stage lives on the Experiences page and is linked, not repeated
 * (Rui, 2026-09-02).
 */
export const journey = {
  eyebrow: 'From the very beginning',
  heading: 'A place that grows with your child',
  body: 'Families can join at any point. Many begin before their child is born, and stay through the years that follow.',
  stages: [
    { name: 'Bloom', age: 'Pregnancy' },
    { name: 'Nurture', age: '0–1' },
    { name: 'The Nest', age: '1–2' },
    { name: 'Little Beginnings', age: '2–3' },
    { name: 'Builders I', age: '3–5' },
    { name: 'Builders II', age: '5–6' },
    { name: 'Navigators', age: '6–8' },
  ],
  note: 'Ages are indicative: we adapt to each child’s development and interests.',
  linkLabel: 'Explore the age groups',
  linkHref: '/experiences/#journey',
} as const;

/**
 * framework/mission-vision-promise.md — The Narelo Promise, canonical.
 *
 * The dossier's three cards briefly lived here and have moved to the
 * Membership page's "What does your family actually receive?", which is where
 * the dossier puts them and where they now appear once (Vivien, 2026-09-04).
 * That also puts the Promise back to its four canonical lines under their own
 * titles: they had been re-titled to match the cards, which this file flagged
 * as needing a decision. Do not re-title them again.
 */
export const promise = {
  eyebrow: 'The Narelo promise',
  heading: 'What every family can expect',
  /** Background photograph for the band. Soft and light, not a hero. */
  image: '/images/membership-beach-background.webp',
  items: [
    { title: 'Every child is known', body: 'Not a name on a register. The educators know what your child is working on, what they find hard, and what they love.' },
    { title: 'Continuity', body: 'The same faces, the same community, year after year. Children build on what came before instead of starting over each term.' },
    { title: 'A protected environment', body: 'We keep groups small and the community carefully held. That is what makes the rest of it possible.' },
    { title: 'Belonging, not attendance', body: 'Membership is closer to a second family than a place you drop your child off. Families are part of it too.' },
  ],
} as const;

/** offers/membership/Strategy/positioning.md — "first home" wording is strategic. */
export const home = {
  eyebrow: 'Marbella',
  heading: 'Where Narelo begins',
  body: 'The sea on one side, the mountains on the other, and a community of families we are choosing carefully and slowly. Our first Narelo home opens here this autumn, and it is the first, not the last.',
  /*
   * The old home-discovery.webp was a near-empty pale sky, which on a phone
   * cropped to a flat grey panel (Vivien, 2026-09-07). This is children on a
   * dune at sunset with the sea behind them, which carries the paragraph.
   * ⚠️ It is not a photograph of Marbella; there is no confirmed Marbella
   * photograph in the project yet, so the alt text does not claim one. Worth
   * replacing with a real one before launch. It also appears in the Community
   * gallery, which is not published yet.
   */
  image: '/images/img-5208.webp',
  imageAlt: 'Three children on a dune at sunset, looking out over the sea.',
} as const;

/*
 * The founders section was removed from the home page (Vivien, 2026-09-02):
 * Natalie and Vivien appear in one place only, the "Who we are" section of
 * the Membership page. Their bios and quotes live in content/membership.ts
 * as `proof`. Do not re-add them here.
 *
 * company/team.md — Natalie and Vivien only. Christian is never a public face.
 */

export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership opens in small numbers ahead of our first home. If it sounds like your family, we would love to talk.',
  ctaLabel: 'Start a conversation',
} as const;
