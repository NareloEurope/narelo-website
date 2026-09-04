/**
 * Membership page — the funnel's "Instant Digital Flyer"
 * (offers/membership/Strategy/sales-funnel.md, step 2).
 *
 * It answers, in this order, the questions that document specifies:
 *   1. What is Narelo?            → whatItIs
 *   2. What does my child experience? → childExperience
 *   3. Which age group is relevant?   → ageGroups
 *   4. How does the membership work, and what's included? → howItWorks, included
 *   5. Who is actually behind this?   → proof
 *   6. How do we join?                → joining
 *
 * "In practice," "How membership works" and "What's included" used to be
 * three separate sections saying much the same thing (Rui, 2026-08-29):
 * combined into one, with the concrete inclusions still carried by the
 * IncludedAccordion so nothing is lost, just said once.
 *
 * "What does it cost?" is deliberately absent for now (Rui, 2026-08-26):
 * pricing is undefined in the repo (founding-family-presale.md) and the
 * section was removed rather than shown without figures. Restore it once
 * pricing is agreed.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26).
 *
 * Designed to be readable in 60–90 seconds on a phone, per the same document.
 * Primary CTA throughout is WhatsApp: the Funnel Process document (2026-08-31)
 * makes WhatsApp the concierge entry point for every path, under one wording,
 * "Start a conversation".
 */

export const hero = {
  eyebrow: 'Membership',
  headingLines: ['Belonging,', 'not booking.'],
  lede: 'A private membership for families who want childhood to be something their children actually remember.',
  image: '/images/membership-hero.webp',
} as const;

/** Q1 — What is Narelo? positioning.md, stated without jargon. */
export const whatItIs = {
  eyebrow: 'What Narelo is',
  heading: 'A members’ community built around extraordinary experiences',
  body: 'Narelo is a private members’ club built around extraordinary childhood experiences that help children grow through nature, creativity, movement and real-life adventures, within a membership community where like-minded families grow together.',
  /** Second paragraph from the Narelo Family Guide (Vivien, 2026-09-04). */
  body2: 'More than a children’s programme, Narelo is a membership community where children build confidence, independence and meaningful connections, parents continue learning through expert insights, and like-minded families grow together, preparing children to flourish in a world that is constantly changing.',
  pull: 'Children join for the experiences. Families stay for the community.',
  image: '/images/img-1667.webp',
} as const;

/**
 * What Narelo is NOT, given its own moment (Rui, 2026-08-26: the negation was
 * buried in body copy). Grounded in positioning.md: "Deliberately not
 * positioned as another children's activity, class, nursery, play centre, or
 * collection of disconnected sessions."
 */
export const isNot = {
  eyebrow: 'And what it is not',
  items: ['A class', 'A nursery', 'A play centre', 'Another activity'],
  line: 'Narelo is a membership your family belongs to.',
} as const;

/**
 * "What makes Narelo different?" from the Narelo Family Guide (Vivien,
 * 2026-09-04). It existed only in the dossier and now sits here, closing the
 * trio the page already opens with: what Narelo is, what it is not, and what
 * makes it different. Numbered because the dossier numbers them.
 *
 * Note the overlap with the Narelo Promise on the home page: "A rhythm that
 * grows with you" and "Known, not just attending" cover the same ground as
 * "Continuity" and the promise cards, in different words.
 */
export const different = {
  eyebrow: 'What makes Narelo different',
  items: [
    {
      n: '01',
      title: 'A place to return to',
      body: 'Not a one-off activity, but a constant across the year: experiences, relationships and shared moments your child comes back to.',
    },
    {
      n: '02',
      title: 'A rhythm that grows with you',
      body: 'From one stage to the next, with real continuity, not a new programme to find every year.',
    },
    {
      n: '03',
      title: 'Known, not just attending',
      body: 'In small, consistent groups, every child is seen as an individual, not one of many.',
    },
  ],
} as const;

/**
 * Q2 — What does my child experience? The five worlds as a short index only.
 *
 * The one-line taglines are deliberate (Rui, 2026-09-02): the full write-up of
 * the five worlds lives once, on the Experiences page, and this section links
 * to it. The 90 minutes / ~8 children / 12 a season trio used to appear here
 * as a second stat block and is now stated once, on the Experiences page.
 */
export const childExperience = {
  eyebrow: 'What your child experiences',
  heading: 'Real places, small groups, and the time to go deep',
  body: 'From around age three, the year moves through five worlds. Younger children begin with movement, senses and connection, and grow into them.',
  worlds: [
    { name: 'Ocean', body: 'The sea as a living place, met with senses and body.' },
    { name: 'Mountain', body: 'Woodland, hills and trails, on nature’s own terms.' },
    { name: 'World Around Us', body: 'The people and craft behind everyday life.' },
    { name: 'Expression', body: 'Art, making and giving form to their own ideas.' },
    { name: 'Future', body: 'Invention, experimentation and what might be possible.' },
  ],
  worldsLinkLabel: 'The five worlds, in full',
  worldsLinkHref: '/experiences/#worlds',
  note: 'Experiences happen in our Marbella home and well beyond it: beach, forest and real-world places. Younger groups may include a parent; older children come on their own.',
  formatLinkLabel: 'How an experience is built',
  formatLinkHref: '/experiences/#format',
} as const;

/** Q3 — Which age group is relevant? framework/age-groups.md, canonical. */
export const ageGroups = {
  eyebrow: 'From the very beginning',
  heading: 'A place that grows with your child',
  body: 'Every child belongs to a named group that moves with them as they grow. Families can join at any point, and many begin before their child is born.',
  /** Rows come from content/stages.ts: name and age only (Rui, 2026-09-02).
   *  Every description of a stage, the one-liner included, lives on the
   *  Experiences page, and the link below points there instead. */
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not their birthday.',
  linkLabel: 'See what each stage includes',
  linkHref: '/experiences/#journey',
} as const;

/**
 * Q4 — How does the membership work, and what's included? Merges what used
 * to be three sections ("In practice," "How membership works," "What's
 * included") into one: a short shared rhythm, then the concrete list.
 */
export const howItWorks = {
  eyebrow: 'How membership works',
  heading: 'One membership, an ongoing place',
  body: 'Your child holds a place in their age group, not a slot in a schedule: one experience a week, out in the real world, with the same educators and the same small circle of friends.',
  items: [
    {
      n: '01',
      title: 'Real places, not four walls',
      body: 'An experience might take the group to the beach, into the forest, or to the people and craft behind everyday life. We call them experiences rather than lessons, because that is what we are building: time your child feels, not content they sit through.',
    },
    {
      n: '02',
      title: 'It grows with them',
      body: 'As your child moves into the next age group, their membership moves with them. Nothing restarts.',
    },
    {
      n: '03',
      title: 'Families are members too',
      body: 'Community mornings, expert sessions and events are for the parents as much as the children.',
    },
  ],
  note: 'Places are limited by design. Groups stay small, so each age group only ever holds a small number of families.',
} as const;

/**
 * Q5 — What is included? Split honestly (Rui, 2026-08-26): the weekly place
 * and member benefits come with membership; Signature Saturdays, holiday
 * experiences, community mornings and the wider Narelo world are available to
 * members at member rates but are not included in it. The group labels carry
 * that distinction; "Member pricing" is no longer listed as an inclusion.
 *
 * The second group is a plain list of names (Rui, 2026-09-02): what each of
 * those things actually is, is explained once on the Experiences page, so the
 * rows here just name them and link across. Only the things that exist
 * nowhere else, the weekly place, guidance and priority booking, carry copy.
 *
 * Aligned with the parent dossier (Vivien, 2026-09-04). The section heading,
 * the eyebrow and three of the rows now use the dossier's own sentences, so a
 * family reading both hears one voice. `meta` is the small line the dossier
 * puts under each title. Two rows the dossier does not restate, the weekly
 * place and priority booking, are kept: the dossier covers the weekly place
 * elsewhere, and neither is contradicted.
 *
 * ⚠️ Two of the dossier sentences are new to the site and are not backed by a
 * document in the repo: the digital reflection at the end of each term, and
 * describing it as "exclusive". Confirm the term reflection is committed to
 * before launch.
 */
export const included = {
  eyebrow: 'Membership includes',
  heading: 'What does your family actually receive?',
  groups: [
    {
      label: 'Included in your membership',
      items: [
        { title: 'Weekly experiences', body: 'Your child’s regular place in their age group, every week of term.' },
        {
          title: 'Your child’s own educator, in dialogue with you',
          meta: 'Regular one-to-one conversations',
          body: 'We get to know what draws your child in, what challenges them and how they grow, and share that journey through regular one-to-one conversations.',
        },
        {
          title: 'Their season, documented and kept',
          meta: 'An exclusive digital reflection each term',
          body: 'A beautifully curated, modern digital reflection at the end of each term, capturing meaningful experiences and discoveries to revisit.',
        },
        {
          title: 'A private circle of like-minded families',
          meta: 'Members only, year after year',
          body: 'A like-minded member community where children and parents can build meaningful connections over time.',
        },
        { title: 'Priority booking', body: 'First access to experiences, events and limited places before they open more widely.' },
      ],
    },
    {
      label: 'For members, at member rates',
      items: [
        { title: 'Signature Saturdays' },
        { title: 'Expert insights' },
        { title: 'Holiday experiences' },
        { title: 'Community mornings' },
        { title: 'The wider Narelo world' },
      ],
      linkLabel: 'What each of these is',
      linkHref: '/experiences/',
    },
  ],
} as const;

/**
 * Q5.5 — Who is actually behind this? Added before "How to join" (Rui,
 * 2026-08-29): the page made the case for Narelo without showing a single
 * sign of the people or families behind it. The placeholder section photo is
 * gone: Natalie and Vivien now have their own portraits (Vivien, 2026-08-31),
 * so the section is a block each, matching the home page.
 */
export const proof = {
  eyebrow: 'Who is behind this',
  heading: 'Natalie and Vivien',
  /**
   * The only place on the site where the founders appear (Vivien, 2026-09-02):
   * the home page's founders section was removed so there is one place, and
   * their own words moved here with the bios. Quotes supplied verbatim
   * (Vivien, 2026-08-31).
   *
   * Names, roles and both biographies now come from the Narelo Family Guide
   * (Vivien, 2026-09-04), replacing the shorter versions the site carried.
   * The dossier's spaced hyphen in Natalie's last sentence is a comma here.
   *
   * ⚠️ Natalie's quote opens on "that question" and nothing above it asks
   * one. The line it referred to was not supplied, so it has not been
   * invented: needs either the missing opening line or a reworded first
   * sentence.
   */
  people: [
    {
      /*
       * Full name, from the Narelo Family Guide (Vivien, 2026-09-04): the site
       * said "Natalie" while Vivien carried a surname, and the dossier prints
       * both in full. Her role there reads "Founder & CEO"; that is a separate
       * decision and is left as "Founder" until it is made.
       */
      name: 'Natalie Curavic',
      role: 'Founder & CEO',
      image: '/images/founder-natalie.webp',
      body: 'Natalie holds an M.A. in Cultural Geography and an MBA from FOM University of Applied Sciences. For more than 15 years, her work in Human Resources has focused on people and what helps them grow and thrive. She is also trained in prenatal yoga. Her own journey into motherhood deepened her understanding of how much belonging, connection and community matter, not only for children, but for parents too.',
      quote: 'Becoming a mother made me ask that question much earlier. In a world shaped by rapid technological change, I wanted children to have real experiences that build curiosity, confidence, independence and connection to the world around them. That idea became Narelo.',
    },
    {
      name: 'Vivien Vörös',
      role: 'Co-founder & Head of Education',
      image: '/images/founder-vivien.webp',
      body: 'Vivien trained in Special Needs Education at Eötvös Loránd University, with further qualifications in Speech and Language Therapy and Complex Movement Therapy. For more than seven years, she has worked across schools, therapy settings and nurseries, always with the same focus: really getting to know each child.',
      quote: 'Some children get noticed. I want Narelo to be the place where every child does.',
    },
  ],
} as const;

/**
 * Q6 — How do we join? Funnel Process, 2026-08-31: CONNECT → MATCH → CHOOSE
 * → MEET → JOIN, condensed into the four steps a family actually takes.
 * WhatsApp is the only entry point and there is no application form before
 * the family conversation. The deeper written information (the mini dossier)
 * is offered on request inside step 03, never as a gate: a family who is
 * ready to speak goes straight to the conversation.
 */
export const joining = {
  eyebrow: 'How to join',
  heading: 'Four steps, and a conversation before anything else',
  steps: [
    { n: '01', title: 'Start a conversation', body: 'Message us on WhatsApp. No form to fill in, and no application before we have spoken.', whatsapp: true },
    { n: '02', title: 'We find the fit', body: 'We ask how old your child is, then tell you which age group they belong to and what places are open.' },
    { n: '03', title: 'A family conversation', body: 'Fifteen to twenty minutes together: who your family is, what you’re hoping for, and everything you want to ask. If you would rather read about it properly first, we send you the fuller picture in writing and follow up after.' },
    { n: '04', title: 'An invitation', body: 'If it’s right on both sides, a personal invitation, the membership agreement and a start date. Then a welcome, and your child’s first experience.' },
  ],
  reassurance: 'We keep the community small and choose carefully. Not to be exclusive, but because small groups and a settled community are the whole point. If there is no place in your child’s age group when we speak, we can hold your family on our waitlist and come back to you personally as soon as one opens.',
  /** The WhatsApp link inside step 01. Kept here with the rest of the copy so
   *  it stays in step with the other calls to action: the page used to hard
   *  code "Start on WhatsApp", which was a sixth wording on a site that now
   *  says the same thing everywhere (Vivien, 2026-09-02). */
  whatsappLabel: 'Message us on WhatsApp',
} as const;

export const closing = {
  headingLines: ['Come and see', 'if it fits.'],
  body: 'Start with a message, no commitment. Just a conversation about your family.',
  ctaLabel: 'Start a conversation',
  secondaryLabel: 'Or email us',
  video: '/video/membership-closing.mp4',
  poster: '/images/membership-video-poster.webp',
} as const;
