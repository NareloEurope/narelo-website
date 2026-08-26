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

/** framework/experience-rhythm-and-format.md — the working format. */
export const format = {
  eyebrow: 'The shape of an experience',
  heading: 'Ninety minutes, a small circle, and somewhere real',
  body: 'Experiences happen in our Marbella home and well beyond it: the beach, the forest, and the places where everyday life actually happens. Nothing is rushed and nothing is filler.',
  facts: [
    { value: '90', label: 'minutes together', note: 'Long enough to settle, explore properly and come back to yourself.' },
    { value: '~8', label: 'children in a group', note: 'Small enough that every child is known by name, not managed as a crowd.' },
  ],
  note: 'Younger groups may include a parent. Older children come on their own.',
  image: '/images/img-5211.webp',
} as const;

/** framework/the-narelo-framework.md Part IV — canonical names and summaries. */
export const worlds = {
  eyebrow: 'The Five Worlds',
  heading: 'Five doors we open together',
  body: 'From around age three, every child’s year moves through five worlds. They are not subjects or programmes: they are territories, and they are designed to connect. Movement and stillness run through all of them.',
  items: [
    {
      name: 'Ocean',
      body: 'The sea experienced with senses and body. Sand, tides, rock pools and the life within them, growing into larger questions about marine environments and our responsibility towards them.',
    },
    {
      name: 'Mountain',
      body: 'Woodland, hills, trails and open landscape. Children encounter nature on its own terms: exploring it physically, observing it closely and gradually understanding their place within it.',
    },
    {
      name: 'The World Around Us',
      body: 'Much of everyday life happens behind doors children rarely get to open. This world opens them: craftsmanship, professions, food, culture and local traditions, with children participating rather than only observing.',
    },
    {
      name: 'Expression',
      body: 'Where children interpret, transform and respond to what they encounter. Art, music, storytelling, construction and design, with no expectation of twenty identical finished products.',
    },
    {
      name: 'The Future',
      body: 'Invention, experimentation and emerging possibilities, including thoughtful encounters with technology. Technology is a tool, not the thinker.',
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
    { name: 'Nurture', age: '0–1 year', body: 'Sensing, discovering and connecting.' },
    { name: 'The Nest', age: '1–2 years', body: 'Exploring the world through movement.' },
    { name: 'Little Beginnings', age: '2–3 years', body: 'Building confidence through discovery.' },
    { name: 'Builders I', age: '3–5 years', body: 'Creating, exploring and making sense of the world.' },
    { name: 'Builders II', age: '5–6 years', body: 'Questioning, creating and building ideas.' },
    { name: 'Navigators', age: '6–8 years', body: 'Growing independence and finding their way.' },
  ],
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not birthday.',
} as const;

/** Carried over from the original site's Regular Experiences. */
export const regular = {
  eyebrow: 'Through the year',
  heading: 'The rhythm every member shares',
  items: [
    { name: 'Weekly experiences', body: 'Your child’s regular place in their age group: the same educators, the same small circle, every week of term.' },
    { name: 'Signature Saturdays', body: 'Slow Saturdays designed for discovery, creativity and meaningful time together.' },
    { name: 'Holiday experiences', body: 'School holidays transformed into opportunities for adventure, discovery and connection.' },
    { name: 'Community mornings', body: 'Casual mornings to meet, connect and grow together as a community.' },
    { name: 'Member events', body: 'Exclusive events for members to connect, celebrate and be inspired.' },
    { name: 'Expert insights', body: 'Inspiring conversations with experts exploring childhood, development and family wellbeing.' },
  ],
} as const;

/** Carried over from the original site's Personalised Experiences. */
export const personalised = {
  eyebrow: 'Beyond the everyday',
  heading: 'Designed around your family',
  body: 'Alongside the shared rhythm, members can ask for experiences created for their family alone.',
  items: [
    { name: 'Birthday experiences', body: 'Thoughtfully curated celebrations inspired by your child’s interests and personality.' },
    { name: 'Private experiences', body: 'Fully personalised experiences thoughtfully created around your child and family.' },
    { name: 'Family experiences', body: 'Meaningful experiences designed for families to connect, explore and create memories together.' },
    { name: 'Signature family days', body: 'Specially curated days created around your family, from thoughtful activities to unforgettable moments.' },
    { name: 'Curated holiday experiences', body: 'Bespoke holiday programmes blending nature, creativity, adventure and meaningful experiences.' },
  ],
} as const;

export const closing = {
  headingLines: ['Some experiences', 'stay with you.'],
  body: 'The ones children remember for years to come.',
  ctaLabel: 'Become a member',
  video: '/video/experiences-closing.mp4',
  poster: '/images/experiences-video-poster.webp',
} as const;
