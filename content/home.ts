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
 *
 * These are the short forms on purpose (Rui, 2026-09-02): the full write-up
 * of the five worlds lives once, on the Experiences page, and the link below
 * points at it rather than saying it all a second time.
 */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five ways of meeting the world',
  body: 'From around age three, every child’s year moves through five worlds. Movement and stillness run through all of them.',
  items: [
    {
      name: 'Ocean',
      short: 'The sea as a living place',
      body: 'The sea experienced with senses and body: sand, tides, rock pools and the life within them.',
      image: '/images/gallery-01.webp',
    },
    {
      name: 'Mountain',
      short: 'Nature on its own terms',
      body: 'Woodland, hills and trails. Uneven ground, changing seasons and natural challenge.',
      image: '/images/world-mountain.webp',
    },
    {
      name: 'World Around Us',
      short: 'Doors children rarely get to open',
      body: 'The people, knowledge and craft behind everyday life. Children take part, not just watch.',
      image: '/images/home-world-built-around-childhood.webp',
    },
    {
      name: 'Expression',
      short: 'Giving form to ideas',
      body: 'Art, music, storytelling, building and making. Space to take an idea somewhere of their own.',
      image: '/images/gallery-02.webp',
    },
    {
      name: 'Future',
      short: 'Curiosity about what is changing',
      body: 'Invention, experimentation and thoughtful encounters with new tools and ideas.',
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
  heading: 'Where Narelo begins',
  body: 'The sea on one side, the mountains on the other, and a community of families we are choosing carefully and slowly. Our first Narelo home opens here this autumn, and it is the first, not the last.',
  image: '/images/home-discovery.webp',
  ctaLabel: 'Start a conversation',
} as const;

/**
 * company/team.md — Natalie and Vivien only. Christian is never a public face.
 *
 * Rewritten from one shared paragraph into a block each, with role and a
 * quote in their own words (Vivien, 2026-08-31, supplied verbatim). Vivien's
 * title is now Co-founder & Head of Education.
 *
 * ⚠️ Natalie's quote opens on "that question" and nothing on the page asks
 * one before it. The line it referred to was not supplied, so it has not been
 * invented: needs either the missing opening line or a reworded first sentence.
 */
export const founders = {
  eyebrow: 'The founders',
  heading: 'Natalie and Vivien',
  people: [
    {
      name: 'Natalie',
      role: 'Founder',
      image: '/images/founder-natalie.webp',
      body: 'Natalie leads Narelo’s direction and the community around it. She is a mother herself, and Narelo is the kind of childhood she wanted for her own son and could never find.',
      quote: 'Becoming a mother made me ask that question much earlier. In a world shaped by rapid technological change, I wanted children to have real experiences that build curiosity, confidence, independence and connection to the world around them. That idea became Narelo.',
    },
    {
      name: 'Vivien Vörös',
      role: 'Co-founder & Head of Education',
      image: '/images/founder-vivien.webp',
      body: 'For more than seven years, Vivien has worked as a Special Needs Educator and Therapist, specialising in behavioural disorders and learning disabilities, and later trained as a Speech and Language Therapist. Across nurseries, therapy rooms and one-on-one sessions, her work has always centred on one question: is this child actually being seen?',
      quote: 'Some children get noticed. I want Narelo to be the place where every child does.',
    },
  ],
} as const;

export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership opens in small numbers ahead of our first home. If it sounds like your family, we would love to talk.',
  ctaLabel: 'Start a conversation',
} as const;
