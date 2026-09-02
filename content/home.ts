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
  lede: 'Narelo is a members’ community built around extraordinary real-world experiences, for children from pregnancy to around the age of eight, and for the families who grow alongside them.',
  video: '/video/home-hero.mp4',
  poster: '/images/home-hero-poster.webp',
  scrollHint: 'Scroll',
} as const;

/** brand/brand-essence.md §8 — the belief, stated plainly. */
export const belief = {
  eyebrow: 'Our belief',
  heading: 'Children don’t need more activities. They need a richer childhood.',
  body: 'Between school runs, screens and busy weeks, childhood passes quietly in the background. We think it deserves the foreground: real days, real places, real people, and the time to take them in.',
  image: '/images/home-moment-to-pause.webp',
} as const;

/** The central message from Strategy/positioning.md, given its own moment. */
export const statement = {
  lines: ['Children join for the experiences.', 'Families stay for the community.'],
} as const;

/** framework/experience-rhythm-and-format.md — working format figures. */
export const shape = {
  eyebrow: 'How a Narelo day is built',
  heading: 'Small groups. Real places. Nobody rushed.',
  body: 'Every experience is built to the same shape, whether it happens in our home, on the beach or in the hills behind town.',
  facts: [
    { value: '~8', label: 'children in a group', note: 'Small enough that every child is known by name, not managed as a crowd.' },
    { value: '90', label: 'minutes together', note: 'Long enough to settle, explore properly and come back to yourself.' },
  ],
  image: '/images/home-not-to-be-rushed.webp',
} as const;

/**
 * framework/the-narelo-framework.md Part IV — canonical names and summaries.
 * Display names drop the leading "The" (Rui, 2026-08-26): World Around Us,
 * Future. Movement and Stillness flow through all five rather than being a
 * sixth. Rendered on the home page as the scroll-driven WorldsExplorer.
 * Descriptions shortened in Vivien's feedback pass (2026-08-31) and kept in
 * step with content/experiences.ts.
 */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five ways of meeting the world',
  body: 'Our experiences move through five worlds inspired by the real world around us, each opening new ways to explore, move, create and discover. Different worlds. Different experiences. Always something new to uncover.',
  items: [
    {
      name: 'Ocean',
      short: 'The sea as a living place',
      body: 'Exploring the sea through senses, movement, curiosity and real-world discovery.',
      image: '/images/gallery-01.webp',
    },
    {
      name: 'Mountain',
      short: 'Nature on its own terms',
      body: 'Exploring nature through movement, challenge, observation and adventure.',
      image: '/images/world-mountain.webp',
    },
    {
      name: 'World Around Us',
      short: 'Doors children rarely get to open',
      body: 'Discovering real life through people, places, professions, culture and everyday experiences.',
      image: '/images/home-world-built-around-childhood.webp',
    },
    {
      name: 'Expression',
      short: 'Giving form to ideas',
      body: 'Turning ideas and discoveries into art, music, stories, building and design.',
      image: '/images/gallery-02.webp',
    },
    {
      name: 'Future',
      short: 'Curiosity about what is changing',
      body: 'Exploring invention, problem-solving and new possibilities, with technology, robotics and AI as tools to create, not replace thinking.',
      image: '/images/contact-hero.webp',
    },
  ],
  linkLab: 'See how a year unfolds',
  linkHref: '/experiences',
} as const;

/**
 * framework/age-groups.md — canonical names and ages.
 * Rendered as stacked rows in the style of The Well's membership section:
 * hairline dividers, large serif name, tagline, link.
 */
export const journey = {
  eyebrow: 'From the very beginning',
  heading: 'A place that grows with your child',
  body: 'Families can join at any point. Many begin before their child is born, and stay through the years that follow.',
  stages: [
    { name: 'Bloom', age: 'Pregnancy', body: 'A gentle beginning, before your child arrives.' },
    { name: 'Nurture', age: '0–1', body: 'Sensing, connecting and discovering together.' },
    { name: 'The Nest', age: '1–2', body: 'Exploring the world through movement and growing independence.' },
    { name: 'Little Beginnings', age: '2–3', body: 'Growing confidence through curiosity, movement and discovery.' },
    { name: 'Builders I', age: '3–5', body: 'Exploring, creating and beginning to make sense of the world.' },
    { name: 'Builders II', age: '5–6', body: 'Questioning, creating and turning ideas into something real.' },
    { name: 'Navigators', age: '6–8', body: 'Growing independence, solving problems and finding their own way.' },
  ],
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not birthday.',
  linkLabel: 'Explore the age groups',
  linkHref: '/experiences/#journey',
} as const;

/** framework/mission-vision-promise.md — The Narelo Promise. */
export const promise = {
  eyebrow: 'The Narelo promise',
  heading: 'What every family can expect',
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
  heading: 'Our first Narelo home opens this autumn',
  body: 'Marbella is where Narelo begins: the sea on one side, the mountains on the other, and a community of families we are choosing carefully and slowly. It is the first home, not the last.',
  image: '/images/home-discovery.webp',
  ctaLabel: 'Start a conversation',
} as const;

/** company/team.md — Natalie and Vivien only. Christian is never a public face. */
export const founders = {
  eyebrow: 'The founders',
  heading: 'Natalie and Vivien',
  body: 'Natalie leads Narelo’s direction and the community around it. She is a mother herself, and Narelo is the kind of childhood she wanted for her own son and could never find. Vivien, our Educational Leader, designs what actually happens with the children: a special needs teacher, speech therapist and movement specialist.',
} as const;

export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership opens in small numbers ahead of our first home. If it sounds like your family, we would love to talk.',
  ctaLabel: 'Start a conversation',
} as const;
