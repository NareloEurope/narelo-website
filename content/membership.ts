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
  body: 'Narelo is an ongoing membership: small groups of children exploring the real world with the same educators and the same friends, week after week.',
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

/** Q2 — What does my child experience? Five Worlds + the session shape. */
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
  facts: [
    { value: '90 min', label: 'each experience' },
    { value: '~8', label: 'children per group' },
    /* business-plan.md: Autumn/Winter/Spring/Summer, 10-12 weeks, 1 a week. */
    { value: '12', label: 'experiences a season' },
  ],
  note: 'Experiences happen in our Marbella home and well beyond it: beach, forest and real-world places. Younger groups may include a parent; older children come on their own.',
} as const;

/** Q3 — Which age group is relevant? framework/age-groups.md, canonical. */
export const ageGroups = {
  eyebrow: 'From the very beginning',
  heading: 'A place that grows with your child',
  body: 'Every child belongs to a named group that moves with them as they grow. Families can join at any point, and many begin before their child is born.',
  /** Rows come from content/stages.ts: name, age and one-line tagline only. The
   *  full breakdown of each stage lives on the Experiences page, not repeated
   *  here (Rui, 2026-08-29). */
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
 */
export const included = {
  eyebrow: 'Membership',
  heading: 'What comes with membership',
  groups: [
    {
      label: 'Included in your membership',
      items: [
        { title: 'Weekly experiences', body: 'Your child’s regular place in their age group, every week of term.' },
        { title: 'Personalised guidance', body: 'One-to-one support and personal guidance on your child’s development, from educators who know them well.' },
        { title: 'Priority booking', body: 'First access to experiences, events and limited places before they open more widely.' },
      ],
    },
    {
      label: 'For members, at member rates',
      items: [
        { title: 'Signature Saturdays', body: 'Slow Saturdays built for discovery, creativity and time together as a family, twice a month.' },
        { title: 'Expert insights', body: 'Sessions with specialists on childhood, development and family life.' },
        { title: 'Holiday experiences', body: 'School holidays turned into adventure rather than logistics.' },
        { title: 'Community mornings', body: 'Unhurried mornings to meet the other families and settle into the community.' },
        { title: 'The wider Narelo world', body: 'Birthday experiences, private sessions and family days, created around your family.' },
      ],
    },
  ],
} as const;

/**
 * Q5.5 — Who is actually behind this? Added before "How to join" (Rui,
 * 2026-08-29): the page made the case for Narelo without showing a single
 * sign of the people or families behind it. Photo is a placeholder — company/team.md
 * gives Natalie and Vivien as the founders, but a real photo of them hasn't
 * been taken yet; swap `image` for it once it exists. Quote is carried over
 * from a real family, content/community.ts.
 */
export const proof = {
  eyebrow: 'Who is behind this',
  heading: 'Natalie and Vivien',
  body: 'Natalie leads Narelo’s direction and the community around it. She is a mother herself, and Narelo is the kind of childhood she wanted for her own son and could never find. Vivien, our Educational Leader, designs what actually happens with the children: a special needs teacher, speech therapist and movement specialist.',
  /** TODO(Rui): placeholder until a real photo of Natalie and Vivien exists. */
  image: '/images/membership-beach-background.webp',
  quote: 'It’s more than the activities. It’s the feeling of being part of something.',
  attribution: 'Carlos · Narelo family',
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
} as const;

export const closing = {
  headingLines: ['Come and see', 'if it fits.'],
  body: 'Start with a message, no commitment. Just a conversation about your family.',
  ctaLabel: 'Start a conversation',
  secondaryLabel: 'Or email us',
  video: '/video/membership-closing.mp4',
  poster: '/images/membership-video-poster.webp',
} as const;
