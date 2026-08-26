/**
 * Membership page — the funnel's "Instant Digital Flyer"
 * (offers/membership/Strategy/sales-funnel.md, step 2).
 *
 * It answers, in this order, the seven questions that document specifies:
 *   1. What is Narelo?            → whatItIs
 *   2. What does my child experience? → childExperience
 *   3. Which age group is relevant?   → ageGroups
 *   4. How does the membership work?  → howItWorks
 *   5. What is included?              → included
 *   6. How do we join?                → joining
 *
 * "What does it cost?" is deliberately absent for now (Rui, 2026-08-26):
 * pricing is undefined in the repo (founding-family-presale.md) and the
 * section was removed rather than shown without figures. Restore it once
 * pricing is agreed.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26).
 *
 * Designed to be readable in 60–90 seconds on a phone, per the same document.
 * Primary CTA throughout is WhatsApp, which is the funnel's step 3.
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
  body: 'Not a class, a nursery or a play centre. Narelo is an ongoing membership: small groups of children exploring the real world with the same educators and the same friends, week after week, for years rather than terms.',
  pull: 'Children join for the experiences. Families stay for the community.',
  image: '/images/img-1667.webp',
} as const;

/** Q2 — What does my child experience? Five Worlds + the session shape. */
export const childExperience = {
  eyebrow: 'What your child experiences',
  heading: 'Real places, small groups, and the time to go deep',
  body: 'From around age three, the year moves through five worlds. Younger children begin with movement, senses and connection, and grow into them.',
  worlds: [
    { name: 'Ocean', body: 'The sea as a living place, met with senses and body.' },
    { name: 'Mountain', body: 'Woodland, hills and trails, on nature’s own terms.' },
    { name: 'The World Around Us', body: 'The people and craft behind everyday life.' },
    { name: 'Expression', body: 'Art, making and giving form to their own ideas.' },
    { name: 'The Future', body: 'Invention, experimentation and what might be possible.' },
  ],
  facts: [
    { value: '90 min', label: 'each experience' },
    { value: '~8', label: 'children per group' },
  ],
  note: 'Experiences happen in our Marbella home and well beyond it: beach, forest and real-world places. Younger groups may include a parent; older children come on their own.',
} as const;

/** Q3 — Which age group is relevant? framework/age-groups.md, canonical. */
export const ageGroups = {
  eyebrow: 'Which group is right',
  heading: 'Find your child’s stage',
  body: 'Every child belongs to a named group that moves with them as they grow.',
  groups: [
    { name: 'Bloom', age: 'Pregnancy', body: 'A gentle beginning, before your child arrives.' },
    { name: 'Nurture', age: '0–1 year', body: 'Sensing, discovering and connecting.' },
    { name: 'The Nest', age: '1–2 years', body: 'Exploring the world through movement.' },
    { name: 'Little Beginnings', age: '2–3 years', body: 'Building confidence through discovery.' },
    { name: 'Builders I', age: '3–5 years', body: 'Creating, exploring and making sense of things.' },
    { name: 'Builders II', age: '5–6 years', body: 'Questioning, creating and building ideas.' },
    { name: 'Navigators', age: '6–8 years', body: 'Growing independence and finding their way.' },
  ],
  note: 'Five-year-olds are placed between Builders I and Builders II depending on readiness, not their birthday.',
} as const;

/** Q4 — How does the membership work? */
export const howItWorks = {
  eyebrow: 'How membership works',
  heading: 'One membership, an ongoing place',
  items: [
    { n: '01', title: 'A place that is yours', body: 'Your child holds a place in their age group, with the same educators and the same small circle of friends each week.' },
    { n: '02', title: 'A weekly rhythm', body: 'Experiences run through the term, with holiday programmes and Signature Saturdays alongside them.' },
    { n: '03', title: 'It grows with them', body: 'As your child moves into the next age group, their membership moves with them. Nothing restarts.' },
    { n: '04', title: 'Families are members too', body: 'Community mornings, expert sessions and events are for the parents as much as the children.' },
  ],
  note: 'Places are limited by design. Groups stay small, so each age group only ever holds a small number of families.',
} as const;

/** Q5 — What is included? Drawn from the current site's stated member benefits. */
export const included = {
  eyebrow: 'What’s included',
  heading: 'Everything a membership carries',
  items: [
    { title: 'Weekly experiences', body: 'Your child’s regular place in their age group, every week of term.' },
    { title: 'Signature Saturdays', body: 'Slow Saturdays built for discovery, creativity and time together as a family, bookable at member rates.' },
    { title: 'Holiday experiences', body: 'School holidays turned into adventure rather than logistics.' },
    { title: 'Community mornings', body: 'Unhurried mornings to meet the other families and settle into the community.' },
    { title: 'Expert insights', body: 'Sessions with specialists on childhood, development and family life.' },
    { title: 'Priority booking', body: 'First access to experiences, events and limited places before they open more widely.' },
    { title: 'Member pricing', body: 'Preferred rates across experiences, events and celebrations.' },
    { title: 'The wider Narelo world', body: 'Birthday experiences, private sessions and family days, available to members first.' },
  ],
} as const;

/** Q6 — How do we join? sales-funnel.md steps 3–6, exactly as documented. */
export const joining = {
  eyebrow: 'How to join',
  heading: 'Four steps, and a conversation before anything else',
  steps: [
    { n: '01', title: 'Message us', body: 'Send us a WhatsApp and we’ll take it from there.', whatsapp: true },
    { n: '02', title: 'We find the fit', body: 'We match your child to the right age group and check what places are open.' },
    { n: '03', title: 'A short conversation', body: 'Fifteen to twenty minutes with us: who your family is, what you’re hoping for, and everything you want to ask.' },
    { n: '04', title: 'An invitation', body: 'If it’s right on both sides, we send a personal invitation, the membership agreement and a start date.' },
  ],
  reassurance: 'We keep the community small and choose carefully. Not to be exclusive, but because small groups and a settled community are the whole point.',
} as const;

export const closing = {
  headingLines: ['Come and see', 'if it fits.'],
  body: 'Start with a message, no commitment. Just a conversation about your family.',
  ctaLabel: 'Talk to us on WhatsApp',
  secondaryLabel: 'Or email us',
  video: '/video/membership-closing.mp4',
  poster: '/images/membership-video-poster.webp',
} as const;
