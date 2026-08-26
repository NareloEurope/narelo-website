/**
 * Home page copy.
 *
 * Sources (nothing here is invented):
 *  - brand/brand-essence.md — belief, philosophy, values, promise
 *  - framework/mission-vision-promise.md — the Narelo Promise
 *  - framework/five-worlds.md — canonical World names
 *  - framework/age-groups.md — canonical group names and ages
 *  - framework/experience-rhythm-and-format.md — 90 minutes, ~8 children, ~2 educators
 *  - offers/membership/Strategy/positioning.md — "first Narelo home", central message
 */

export const hero = {
  eyebrow: 'A private childhood membership · Marbella',
  /** Split across lines so each can rise independently out of its mask. */
  headingLines: ['Childhood,', 'deeply lived.'],
  lede: 'Narelo is a members’ community built around extraordinary real-world experiences — for children from pregnancy to around the age of eight, and for the families who grow alongside them.',
  video: '/video/home-hero.mp4',
  poster: '/images/home-hero-poster.webp',
  scrollHint: 'Scroll',
} as const;

/** brand/brand-essence.md §8 — the belief, stated plainly. */
export const belief = {
  eyebrow: 'Our belief',
  heading: 'Children don’t need more activities. They need a richer childhood.',
  body: 'Between school runs, screens and busy weeks, childhood passes quietly in the background. We think it deserves the foreground — real days, real places, real people, and the time to take them in.',
  image: '/images/home-moment-to-pause.webp',
} as const;

/** The central message from Strategy/positioning.md, given its own moment. */
export const statement = {
  lines: ['Children join for the experiences.', 'Families stay for the community.'],
} as const;

/**
 * framework/experience-rhythm-and-format.md. These are the working format
 * figures — "around" is used deliberately because the source says ~.
 */
export const shape = {
  eyebrow: 'How a Narelo day is built',
  heading: 'Small groups. Real places. Nobody rushed.',
  body: 'Every experience is built to the same shape, whether it happens in our home, on the beach or in the hills behind town.',
  facts: [
    { value: '8', label: 'children in a group', note: 'Small enough that every child is known by name, not managed as a crowd.' },
    { value: '2', label: 'educators with them', note: 'Enough adults to follow a child’s curiosity instead of keeping order.' },
    { value: '90', label: 'minutes together', note: 'Long enough to settle, explore properly and come back to yourself.' },
  ],
  image: '/images/home-not-to-be-rushed.webp',
} as const;

/**
 * framework/five-worlds.md — canonical names. "Connection to the Future" was
 * renamed from "AI" deliberately; do not shorten it back.
 * Stillness runs across the Worlds rather than being a sixth.
 */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five ways of meeting the world',
  body: 'From around age three, every child’s year moves through five worlds. Stillness runs through all of them.',
  items: [
    { name: 'Ocean', body: 'Water, tides, salt air and everything that lives in them. The sea as a place to know, not just visit.' },
    { name: 'Mountain', body: 'Trails, weather, height and distance. Learning what your own legs and nerve can do.' },
    { name: 'Body', body: 'Movement, yoga and physical development — how it feels to be strong, balanced and at home in yourself.' },
    { name: 'Expression', body: 'Art and making. Ideas that arrive through the hands before they arrive in words.' },
    { name: 'Connection to the Future', body: 'The tools, questions and ideas shaping the world our children will inherit.' },
  ],
  linkLab: 'See how a year unfolds',
  linkHref: '/experiences',
} as const;

/** framework/age-groups.md — canonical names and ages, unchanged. */
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
  linkHref: '/experiences',
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
  body: 'Marbella is where Narelo begins — the sea on one side, the mountains on the other, and a community of families we are choosing carefully and slowly. It is the first home, not the last.',
  image: '/images/home-discovery.webp',
  ctaLabel: 'Become a member',
  ctaHref: '/membership',
} as const;

/** company/team.md — Natalie and Vivien only. Christian is never a public face. */
export const founders = {
  eyebrow: 'The founders',
  heading: 'Built by two people who kept looking for this and never found it',
  body: 'Natalie leads Narelo’s direction and the community around it. Vivien, our Educational Leader, designs what actually happens with the children — a special needs teacher, speech therapist and movement specialist who has worked with children since 2019.',
} as const;

export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership opens in small numbers ahead of our first home. If it sounds like your family, we would love to talk.',
  ctaLabel: 'Become a member',
  ctaHref: '/membership',
} as const;
