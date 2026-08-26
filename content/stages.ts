/**
 * Age-group stage details, shared by the Experiences journey and the
 * Membership age-groups sections (both render them as expandable rows).
 *
 * Names and ages are canonical (framework/age-groups.md). Mottos and
 * summaries for Nurture and The Nest are transcribed from Rui's stage briefs
 * (assets-source/stage-briefs/, 2026-08-26), which also supplied their photos.
 *
 * TODO: the other five stages have no briefs yet. Their summaries below are
 * provisional: modest expansions of the approved one-line descriptions, with
 * no session-level claims. Replace them (and add mottos) as each stage brief
 * arrives, the way Nurture and The Nest were done.
 *
 * House style: no em dashes in published copy.
 */

export type Stage = {
  name: string;
  age: string;
  tagline: string;
  motto?: string;
  summary: string;
  image: string;
};

export const stageDetails: readonly Stage[] = [
  {
    name: 'Bloom',
    age: 'Pregnancy',
    tagline: 'A gentle beginning, before your child arrives.',
    summary:
      'A calm space for expecting parents: time to slow down, connect with other families, and begin the Narelo journey before your child is born.',
    image: '/images/membership-hero.webp',
  },
  {
    name: 'Nurture',
    age: '0–1 year',
    tagline: 'Sensing, discovering and connecting.',
    motto: 'I sense and discover.',
    summary:
      'A safe, loving space where babies explore with their senses, move their bodies and build the foundation for connection, curiosity and confidence, together with their parent.',
    image: '/images/stage-photo-nurture.webp',
  },
  {
    name: 'The Nest',
    age: '1–2 years',
    tagline: 'Exploring the world through movement.',
    motto: 'I move and explore.',
    summary:
      'An active, joyful space where toddlers build strength, balance and confidence through movement, play and discovery, indoors and out in the world.',
    image: '/images/stage-photo-nest.webp',
  },
  {
    name: 'Little Beginnings',
    age: '2–3 years',
    tagline: 'Building confidence through discovery.',
    summary:
      'Gentle, discovery-led sessions where two-year-olds grow confident with materials, movement and first friendships, with a parent or caregiver close by.',
    image: '/images/stage-photo-little-beginnings.webp',
  },
  {
    name: 'Builders I',
    age: '3–5 years',
    tagline: 'Creating, exploring and making sense of the world.',
    summary:
      'From around three, children step into the Five Worlds: making, exploring and asking bigger questions in a small group that knows them well.',
    image: '/images/gallery-02.webp',
  },
  {
    name: 'Builders II',
    age: '5–6 years',
    tagline: 'Questioning, creating and building ideas.',
    summary:
      'Deeper projects and bigger ideas. Children question, create and build, taking on gentle challenge with growing independence.',
    image: '/images/home-not-to-be-rushed.webp',
  },
  {
    name: 'Navigators',
    age: '6–8 years',
    tagline: 'Growing independence and finding their way.',
    summary:
      'Real adventures and real responsibility. Older children explore further, lead more, and find their own way through the worlds.',
    image: '/images/world-mountain.webp',
  },
] as const;
