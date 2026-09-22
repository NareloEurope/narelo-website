/**
 * Home page copy.
 *
 * Sources (nothing here is invented):
 *  - NARELO — WEBSITE CORE (Vivien, 2026-09-22) — the eight blocks this page
 *    is now built around: hero, why, for parents, what children gain, what
 *    makes Narelo different, our approach, how families can experience
 *    Narelo, our belief. Supplied verbatim and used verbatim.
 *  - framework/the-narelo-framework.md Part IV — the Five Worlds, canonical
 *    names and descriptions ("Ocean. Mountain. The World Around Us.
 *    Expression. The Future.")
 *  - framework/age-groups.md — canonical group names and ages
 *  - offers/membership/Strategy/positioning.md — "first Narelo home"
 *
 * What the Website Core rewrite changed (2026-09-22), so it is not quietly
 * undone:
 *  - The shape of a day (8 children, 90 minutes) came off this page. Both
 *    figures still live on the Experiences page, in `format`, so nothing was
 *    lost from the site.
 *  - The Narelo Promise came off this page and moved to the Membership page,
 *    where its four canonical lines now live. It was the only copy of them on
 *    the site, so it was moved rather than deleted.
 *  - The Five Worlds teaser, the age journey and Marbella stayed.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26). The Website
 * Core document used spaced hyphens in "For parents"; those are commas here.
 */

export const hero = {
  eyebrow: 'A private childhood membership · Marbella',
  /** Split across lines so each can rise independently out of its mask. */
  headingLines: ['Childhood,', 'deeply lived.'],
  /*
   * Website Core §1 (Vivien, 2026-09-22). Two paragraphs now, where there was
   * one. The pregnancy to age 8 sentence the lede used to end on is not in
   * the new wording; the age journey further down the page carries it.
   */
  lede: 'Narelo is a private members’ club for families, built around extraordinary childhood experiences.',
  lede2: 'Through nature, creativity, movement and real-life adventures, children are given opportunities to explore, make decisions, solve problems, collaborate, build relationships and discover what they are capable of.',
  video: '/video/home-hero.mp4',
  poster: '/images/home-hero-poster.webp',
  scrollHint: 'Scroll',
} as const;

/**
 * Website Core §2, "Why Narelo" (Vivien, 2026-09-22).
 *
 * This replaced brand/brand-essence.md §8 and the Family Guide line that used
 * to sit under the photograph. The eyebrow moved from "Our belief" to "Why
 * Narelo", because the belief itself now closes the page under that name.
 */
export const belief = {
  eyebrow: 'Why Narelo',
  heading: 'Children need more than knowledge and activities. They need meaningful, real-life experiences.',
  body: 'While knowledge and education matter, children also need real experiences in which the capabilities they will need for life can be practised.',
  pull: 'We cannot know exactly what the future will ask of our children. But we can give them experiences that help prepare them for it.',
  image: '/images/home-moment-to-pause.webp',
  imageAlt: 'A child pausing outdoors, taking something in.',
} as const;

/** The central message from Strategy/positioning.md, given its own moment. */
export const statement = {
  lines: ['Children join for the experiences.', 'Families stay for the community.'],
} as const;

/**
 * Website Core §3, "For parents" (Vivien, 2026-09-22). New to the site: the
 * parent's own time had never been addressed on the home page.
 *
 * The photograph is the one the shape-of-a-day section used before this
 * rewrite, so no new picture was invented for it and its alt text is
 * unchanged and still accurate.
 */
export const parents = {
  eyebrow: 'For parents',
  heading: 'Your time matters too.',
  body: 'With Narelo’s weekly experiences, parents gain regular, trusted time while their children take part in meaningful experiences designed with intention.',
  body2: 'And whenever families need additional support, on Saturdays, during school holidays, at birthdays, private events or through individual Private Experiences, Narelo can take over the children’s experience there too.',
  body3: 'Parents can hand over responsibility knowing their child is professionally cared for, meaningfully engaged and spending their time in a valuable way.',
  pull: 'Time for you. Experiences that matter for them.',
  image: '/images/home-not-to-be-rushed.webp',
  imageAlt: 'A small group of children exploring together, unhurried.',
} as const;

/**
 * Website Core §4, "What children gain" (Vivien, 2026-09-22).
 *
 * ⚠️ The first paragraph is very close to the hero's second paragraph: both
 * open "children are given opportunities to explore, make decisions, solve
 * problems, collaborate". Flagged to Vivien on 2026-09-22 and kept as
 * supplied, because it is her wording to cut, not ours.
 */
export const gain = {
  eyebrow: 'What children gain',
  heading: 'Capabilities can be practised.',
  body: 'Through real-life experiences, children are given opportunities to explore, make decisions, solve problems, collaborate, communicate, create and discover what they are capable of.',
  body2: 'Development does not come from one activity alone. Repeated experiences give children opportunities to practise capabilities over time.',
} as const;

/**
 * Website Core §5, "What makes Narelo different" (Vivien, 2026-09-22).
 *
 * The two questions are the point of the section and are set as a pair, the
 * second answering the first, rather than run into the paragraph.
 *
 * Note the overlap with `different` in content/membership.ts, which is the
 * Family Guide's numbered version of the same subject in different words.
 */
export const different = {
  eyebrow: 'What makes Narelo different',
  heading: 'The activities are not the differentiator. The thinking behind them is.',
  body: 'What matters is the intention behind each experience, how educators interact with children, how much guidance is given, how experiences connect over time and the consistency of our philosophy.',
  notLabel: 'We do not simply ask',
  notQuestion: 'What activity should we do?',
  askLabel: 'We ask',
  askQuestion: 'What do we want the child to experience?',
} as const;

/** Website Core §6, "Our approach" (Vivien, 2026-09-22). */
export const approach = {
  eyebrow: 'Our approach',
  heading: 'We believe in real-life experience, human connection and meaningful guidance.',
  body: 'Children are given opportunities to try, decide, solve, collaborate and experience challenges with the support of trusted educators.',
  pull: 'Guidance, without taking their way away.',
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
 * Website Core §7, "How families can experience Narelo" (Vivien, 2026-09-22).
 *
 * The five names are brand names and are not translated. The section has an
 * eyebrow and no heading on purpose: the Website Core gives none, and one was
 * not invented to fill the slot. The five go straight under it.
 *
 * This is a summary. The Experiences page describes the same five in full, so
 * the link below points there rather than the copy being written out twice.
 */
export const ways = {
  eyebrow: 'How families can experience Narelo',
  items: [
    {
      name: 'Weekly Membership Experiences',
      body: 'Regular, meaningful experiences for children and trusted time for parents.',
    },
    {
      name: 'Signature Saturdays',
      body: 'Additional experiences at the weekend.',
    },
    {
      name: 'Holiday Experiences',
      body: 'Meaningful experiences during school holidays.',
    },
    {
      name: 'Birthdays',
      body: 'Narelo creates and leads the children’s experience.',
    },
    {
      name: 'Private Experiences & Events',
      body: 'Families can request Narelo for private occasions, giving children a meaningful experience while parents are free to enjoy their own event.',
    },
  ],
  linkLabel: 'The experiences, in full',
  linkHref: '/experiences/',
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
 * Natalie and Vivien appear in one place only, the "Who we are" page. Their
 * bios and quotes live in content/membership.ts as `proof`. Do not re-add
 * them here.
 *
 * company/team.md — Natalie and Vivien only. Christian is never a public face.
 */

/**
 * Website Core §8, "Our belief" (Vivien, 2026-09-22).
 *
 * ⚠️ The heading replaces the Core Belief title "Children don't need more
 * activities. They need a richer childhood.", which AGENTS.md lists as never
 * to be reworded. Vivien changed it herself on 2026-09-22 and was told
 * plainly that it was one of those lines. It is her call; do not change it
 * back, and do not reword it again.
 *
 * ⚠️ `body3` and `body4` repeat `belief.pull` at the top of the page almost
 * word for word. Flagged to Vivien on 2026-09-22 and kept as supplied.
 */
export const ourBelief = {
  eyebrow: 'Our belief',
  heading: 'Children need more than activities. They need experiences that matter.',
  body: 'We believe capabilities can be practised.',
  body2: 'We believe children benefit from real-life experiences, human connection, repeated opportunities and meaningful guidance.',
  body3: 'We cannot know exactly what the future will require from them.',
  body4: 'But we can give them experiences that help prepare them for life.',
  pull: 'Parents gain time. Children gain meaningful experience.',
} as const;

export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership opens in small numbers ahead of our first home. If it sounds like your family, we would love to talk.',
  ctaLabel: 'Start a conversation',
} as const;
