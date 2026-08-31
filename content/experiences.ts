/**
 * Experiences page copy.
 *
 * Sources: framework/the-narelo-framework.md Part IV (Five Worlds, canonical),
 * framework/age-groups.md, framework/experience-rhythm-and-format.md, plus the
 * experience-card copy carried over from the original site. The internal
 * session rhythm (Wonder Seed, Atelier etc.) is explicitly not public-facing
 * and is not published here.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26).
 */

export const hero = {
  eyebrow: 'Experiences',
  headingLines: ['Experiences that', 'grow with your child'],
  lede: 'Thoughtfully created experiences that invite curiosity, creativity and connection, from before your child is born to around the age of eight.',
  image: '/images/experiences-hero.webp',
} as const;

/**
 * framework/experience-rhythm-and-format.md — the working format (90 minutes,
 * ~8 children). The season figure comes from company/business-plan.md:
 * "Autumn · Winter · Spring · Summer. 10–12 weeks, 1 session per week."
 */
export const format = {
  eyebrow: 'The shape of an experience',
  heading: 'Ninety minutes, a small circle, and somewhere real',
  body: 'Experiences happen in our Marbella home and well beyond it: the beach, the forest, and the places where everyday life actually happens. Nothing is rushed and nothing is filler.',
  facts: [
    { value: '90', label: 'minutes together', note: 'Long enough to settle, explore properly and come back to yourself.' },
    { value: '~8', label: 'children in a group', note: 'Small enough that every child is known by name, not managed as a crowd.' },
    { value: '12', label: 'experiences a season', note: 'One a week through the term, so the year builds instead of restarting.' },
  ],
  note: 'Younger groups may include a parent. Older children come on their own.',
  image: '/images/img-5211.webp',
} as const;

/** framework/the-narelo-framework.md Part IV — canonical names and summaries. */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five doors we open together',
  body: 'Our experiences move through five worlds inspired by the real world around us, each opening new ways to explore, move, create and discover. Different worlds. Different experiences. Always something new to uncover.',
  items: [
    {
      name: 'Ocean',
      body: 'Exploring the sea through senses, movement, curiosity and real-world discovery.',
    },
    {
      name: 'Mountain',
      body: 'Exploring nature through movement, challenge, observation and adventure.',
    },
    {
      name: 'World Around Us',
      body: 'Discovering real life through people, places, professions, culture and everyday experiences.',
    },
    {
      name: 'Expression',
      body: 'Turning ideas and discoveries into art, music, stories, building and design.',
    },
    {
      name: 'Future',
      body: 'Exploring invention, problem-solving and new possibilities, with technology, robotics and AI as tools to create, not replace thinking.',
    },
  ],
} as const;

/** framework/age-groups.md — canonical names and ages. */
export const stages = {
  eyebrow: 'The journey',
  heading: 'A path for every stage',
  body: 'Every child belongs to a named group that moves with them as they grow. Families can join at any point along the way.',
  items: [
    { name: 'Bloom', age: 'Pregnancy', body: 'A gentle beginning, before your child arrives.' },
    { name: 'Nurture', age: '0–1 year', body: 'Sensing, connecting and discovering together.' },
    { name: 'The Nest', age: '1–2 years', body: 'Exploring the world through movement and growing independence.' },
    { name: 'Little Beginnings', age: '2–3 years', body: 'Growing confidence through curiosity, movement and discovery.' },
    { name: 'Builders I', age: '3–5 years', body: 'Exploring, creating and beginning to make sense of the world.' },
    { name: 'Builders II', age: '5–6 years', body: 'Questioning, creating and turning ideas into something real.' },
    { name: 'Navigators', age: '6–8 years', body: 'Growing independence, solving problems and finding their own way.' },
  ],
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not birthday.',
} as const;

/**
 * Carried over from the original site's Regular Experiences, restructured
 * into two named groups (Vivien, 2026-08-31): what membership already carries,
 * and what members can additionally book through the year. "Member events" was
 * dropped in the same pass.
 */
export const regular = {
  eyebrow: 'Through the year',
  heading: 'Beyond the weekly experience',
  body: 'Membership reaches beyond your child’s regular Narelo Experiences, bringing families into a wider community and opening access to additional experiences throughout the year.',
  groups: [
    {
      label: 'Part of your Narelo world',
      items: [
        { name: 'Regular Narelo Experiences', body: 'A consistent place to explore, grow and build meaningful relationships over time.' },
        { name: 'Community Mornings', body: 'Time for families to meet, connect and grow together.' },
        { name: 'Expert Insights', body: 'Conversations with experts around childhood, development and family life.' },
      ],
    },
    {
      label: 'Additional bookable experiences',
      items: [
        { name: 'Signature Saturdays', body: 'Special Saturday experiences designed for discovery, creativity and adventure.' },
        { name: 'Holiday Experiences', body: 'Curated experiences during the school holidays.' },
      ],
    },
  ],
} as const;

/**
 * Personalised Experiences, reduced from five cards to two (Vivien,
 * 2026-08-31): Birthday and Bespoke Private cover what is actually offered.
 */
export const personalised = {
  eyebrow: 'Beyond the everyday',
  heading: 'Designed around your family',
  body: 'Beyond membership, Narelo also creates selected private experiences, thoughtfully tailored around your child and family.',
  items: [
    { name: 'Birthday Experiences', body: 'Thoughtfully curated celebrations inspired by your child’s interests and personality.' },
    { name: 'Bespoke Private Experiences', body: 'Personalised experiences thoughtfully created around your child and family.' },
  ],
} as const;

export const closing = {
  headingLines: ['Some experiences', 'stay with you.'],
  body: 'Because what children experience becomes part of who they become.',
  ctaLabel: 'Start a conversation',
  video: '/video/experiences-closing.mp4',
  poster: '/images/experiences-video-poster.webp',
} as const;
