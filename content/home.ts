/**
 * Home page copy.
 *
 * Sources (nothing here is invented):
 *  - Website Structure (Vivien, 2026-09-23) — the four message blocks this
 *    page now runs on, supplied verbatim: why Narelo, what makes Narelo
 *    different, what this means for families, the invitation. They answer,
 *    in order: why does this matter, what makes Narelo different, what does
 *    my family get from it, I want to know more.
 *  - NARELO — WEBSITE CORE (Vivien, 2026-09-22) — the rewrite before it,
 *    eight blocks. The hero is still its wording.
 *  - framework/the-narelo-framework.md Part IV — the Five Worlds, canonical
 *    names and descriptions ("Ocean. Mountain. The World Around Us.
 *    Expression. The Future.")
 *  - framework/age-groups.md — canonical group names and ages
 *  - offers/membership/Strategy/positioning.md — "first Narelo home"
 *
 * What came off the page, so none of it is quietly put back:
 *  - The shape of a day (8 children, 90 minutes), 2026-09-22. Both figures
 *    still live on the Experiences page in `format`, so the site kept them.
 *  - The Narelo Promise, 2026-09-22. Moved to the Membership page, where its
 *    four canonical lines now live. It was the only copy of them on the site,
 *    so it was moved rather than deleted.
 *  - "What children gain" and "Our approach", 2026-09-23. Both said what the
 *    two surviving blocks say, in slightly different words. Their work is
 *    carried by `different` now.
 *  - The statement band, "Children join for the experiences. Families stay
 *    for the community.", 2026-09-23. `parents.pull` closes on the same
 *    thought, so the page says it once instead of twice. ⚠️ This was the only
 *    copy of that line on the site. If it is wanted back it belongs here.
 *  - "Our belief", 2026-09-23. It repeated `belief` almost word for word,
 *    which was the repetition the structure pass set out to remove.
 *
 * The Five Worlds teaser, the age journey and Marbella stayed throughout.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26). The supplied
 * copy used them; they are colons and commas here.
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
 * Block 1 of four, "Why Narelo" (Website Structure, Vivien, 2026-09-23).
 *
 * The structure pass cut the page from seven message blocks to four, because
 * several were saying the same thing: real-life experience, intention,
 * capabilities, problem solving, guidance, readiness for the future. Each of
 * the four now does one job. This one answers "why does this matter?".
 */
export const belief = {
  eyebrow: 'Why Narelo',
  heading: 'Some things are learned. Others have to be lived.',
  body: 'Children will grow into a world we cannot fully predict. We can give them opportunities to think for themselves, move, create, decide, adapt and discover what they are capable of.',
  pull: 'That is where Narelo comes in.',
  image: '/images/home-moment-to-pause.webp',
  imageAlt: 'A child pausing outdoors, taking something in.',
} as const;

/**
 * Block 3 of four, "What this means for families" (Website Structure, Vivien,
 * 2026-09-23). Answers "what does my family get from it?".
 *
 * It was "For parents" until the structure pass, and it now speaks for the
 * child and the parent in one block rather than two. Its closing line is what
 * the statement band ("Children join for the experiences. Families stay for
 * the community.") used to do, said once instead of twice.
 *
 * The photograph is the one the shape-of-a-day section used before the
 * Website Core rewrite, so no new picture was invented for it.
 */
export const parents = {
  eyebrow: 'What this means for families',
  heading: 'Time for them. Time for you.',
  body: 'Narelo creates meaningful experiences children look forward to, while giving parents trusted time they can count on.',
  body2: 'From weekly experiences to Saturdays, school holidays, birthdays, private events and individual Private Experiences, families can turn to Narelo whenever they want their child’s time to be more than simply filled.',
  pull: 'You get time back. They get experiences that give something back to them.',
  image: '/images/home-not-to-be-rushed.webp',
  imageAlt: 'A small group of children exploring together, unhurried.',
} as const;

/**
 * Block 2 of four, "What makes Narelo different" (Website Structure, Vivien,
 * 2026-09-23). Answers "what makes Narelo different?", and carries the weight
 * the removed "What children gain" and "Our approach" blocks used to share.
 *
 * The heading is two beats and is set as two lines, each wrapping on its own.
 * The pair of questions is the point of the block and is set as two tiles,
 * the second answering the first.
 *
 * House style: the supplied copy used an em dash before "to strengthen
 * something physical". It is a colon here (Rui, 2026-08-26).
 */
export const different = {
  eyebrow: 'What makes Narelo different',
  heading: 'Not another activity.',
  heading2: 'A broader way for children to grow.',
  body: 'Narelo isn’t built around one subject, sport or skill.',
  body2: 'Children move, explore, build, create, solve problems, collaborate and take on challenges through a wide variety of real-life experiences.',
  body3: 'Behind every experience is an intention: to strengthen something physical, creative, social or personal.',
  body4: 'And because children return week after week, with familiar educators and a small group, experiences build on one another over time.',
  notLabel: 'We don’t just ask',
  notQuestion: 'What activity should we do?',
  askLabel: 'We ask',
  askQuestion: 'What can this experience give the child?',
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

/** Block 4 of four, the invitation (Website Structure, Vivien, 2026-09-23). */
export const closing = {
  headingLines: ['A childhood', 'happens once.'],
  body: 'Membership is opening to a small number of families. If Narelo feels like something your family has been looking for, we would love to meet you.',
  ctaLabel: 'Start a conversation',
} as const;
