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
 *
 * These three figures are stated here and nowhere else in full (Rui,
 * 2026-09-02): the Membership page used to repeat the same trio as a second
 * stat block and now links to this section instead.
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

/**
 * framework/the-narelo-framework.md Part IV — canonical names and summaries.
 * This is the one full write-up of the five worlds on the site (Rui,
 * 2026-09-02). The home page and the Membership page carry the short forms
 * and link here, rather than explaining them a second time.
 */
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

/**
 * framework/age-groups.md — canonical names and ages. This section is the one
 * place where each stage is described in full (Rui, 2026-09-02); the home page
 * and the Membership page list the names and link here.
 */
export const stages = {
  eyebrow: 'The journey',
  heading: 'A path for every stage',
  body: 'Every child belongs to a named group that moves with them as they grow. Families can join at any point along the way.',
  /* The rows themselves come from content/stages.ts, rendered in full by the
     StageAccordion. This is the canonical place for the stage descriptions,
     so they are not restated here. */
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not birthday.',
} as const;

/**
 * Carried over from the original site's Regular Experiences, restructured
 * into two named groups (Vivien, 2026-08-31): what membership already carries,
 * and what members can additionally book through the year. "Member events" was
 * dropped in the same pass.
 *
 * Aligned with the parent dossier (Vivien, 2026-09-04): the opening paragraph,
 * the pull quote beside it, the second group's label and its "and more to
 * come" aside, and the note about the experts are the dossier's own sentences.
 * The dossier's em dashes are commas here, per house style.
 *
 * ⚠️ "Every month" is a frequency the site has not stated before and is not
 * backed by a document in the repo. Confirm before launch.
 */
export const regular = {
  eyebrow: 'Through the year',
  heading: 'Beyond the weekly experience',
  quote: 'A small moment can become the starting point for something much bigger.',
  body: 'Membership reaches beyond your child’s weekly experiences. We come together regularly as a community, parents and children alike, and you have continuous access to our own experts. A place to keep learning about parenthood and about yourselves as a family.',
  note: 'Every month, our own experts open a session to you: yours, as part of the membership. When we invite specialists from outside, members are always seated at member rates.',
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
      label: 'Also bookable for members',
      aside: 'and more to come',
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
