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
      name: 'World Around Us',
      body: 'Much of everyday life happens behind doors children rarely get to open. This world opens them: craftsmanship, professions, food, culture and local traditions, with children participating rather than only observing.',
    },
    {
      name: 'Expression',
      body: 'Where children interpret, transform and respond to what they encounter. Art, music, storytelling, construction and design, with no expectation of twenty identical finished products.',
    },
    {
      name: 'Future',
      body: 'Invention, experimentation and emerging possibilities, including thoughtful encounters with technology. Technology is a tool, not the thinker.',
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
     StageAccordion. This is the canonical place for the stage descriptions. */
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
  ctaLabel: 'Start a conversation',
  video: '/video/experiences-closing.mp4',
  poster: '/images/experiences-video-poster.webp',
} as const;
