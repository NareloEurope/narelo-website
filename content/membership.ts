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
 *   6. What does it cost?             → cost   ⚠️ see the note there
 *   7. How do we join?                → joining
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
    { name: 'Ocean', body: 'Water, tides and everything living in them.' },
    { name: 'Mountain', body: 'Trails, weather, height and distance.' },
    { name: 'Body', body: 'Movement, yoga and physical confidence.' },
    { name: 'Expression', body: 'Art, making and ideas through the hands.' },
    { name: 'Connection to the Future', body: 'The questions shaping the world they’ll inherit.' },
  ],
  facts: [
    { value: '90 min', label: 'each experience' },
    { value: '~8', label: 'children per group' },
    { value: '2', label: 'educators' },
  ],
  note: 'Experiences happen in our Marbella home and well beyond it — beach, forest and real-world places. Younger groups often include a parent; older children come on their own.',
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
  note: 'When a term is full we keep a waitlist and contact you personally as soon as a place opens in your child’s group.',
} as const;

/** Q5 — What is included? Drawn from the current site's stated member benefits. */
export const included = {
  eyebrow: 'What’s included',
  heading: 'Everything a membership carries',
  items: [
    { title: 'Weekly experiences', body: 'Your child’s regular place in their age group, every week of term.' },
    { title: 'Signature Saturdays', body: 'Slow Saturdays built for discovery, creativity and time together as a family.' },
    { title: 'Holiday experiences', body: 'School holidays turned into adventure rather than logistics.' },
    { title: 'Community mornings', body: 'Unhurried mornings to meet the other families and settle into the community.' },
    { title: 'Expert insights', body: 'Sessions with specialists on childhood, development and family life.' },
    { title: 'Priority booking', body: 'First access to experiences, events and limited places before they open more widely.' },
    { title: 'Member pricing', body: 'Preferred rates across experiences, events and celebrations.' },
    { title: 'The wider Narelo world', body: 'Birthday experiences, private sessions and family days, available to members first.' },
  ],
} as const;

/**
 * Q6 — What does it cost?
 *
 * ⚠️ GAP — offers/membership/Sales/founding-family-presale.md states plainly:
 * "presale offer mechanics not yet defined — pricing, membership tiers, what
 * Founding Families get, capacity limits, deposit/commitment structure, timeline."
 *
 * No figures are invented here. The section explains how pricing is structured
 * and routes to the conversation, which is what the funnel does anyway (step 5,
 * "Explain the relevant membership"). Soho House's own membership page takes the
 * same approach — it carries no prices and links to a calculator instead.
 *
 * TODO: once pricing is agreed, add the figures here and revisit this section's
 * design — it is built to accept a price table without restructuring the page.
 */
export const cost = {
  eyebrow: 'What it costs',
  heading: 'Priced by age group and how often you come',
  body: 'Membership is a monthly commitment rather than a per-session fee, because the value is in continuity. What you pay depends on your child’s age group and how often they come.',
  points: [
    'We talk you through the exact figures on a short call, before any commitment.',
    'No application fee, and nothing to pay to have the conversation.',
    'Members pay preferred rates on everything beyond their weekly place.',
  ],
  founding: {
    title: 'Founding families',
    body: 'We are opening membership in small numbers ahead of the first home. Founding families join at the beginning and help shape how Narelo grows.',
    // TODO: Founding Family benefits, capacity and deposit structure are undefined
    // in the repo (see founding-family-presale.md). Nothing specific is claimed here.
  },
} as const;

/** Q7 — How do we join? sales-funnel.md steps 3–6, exactly as documented. */
export const joining = {
  eyebrow: 'How to join',
  heading: 'Four steps, and a conversation before anything else',
  steps: [
    { n: '01', title: 'Message us', body: 'Send us a WhatsApp. The first thing we’ll ask is how old your child is.' },
    { n: '02', title: 'We find the fit', body: 'We match your child to the right age group and check what places are open.' },
    { n: '03', title: 'A short conversation', body: 'Fifteen to twenty minutes with us — who your family is, what you’re hoping for, and everything you want to ask. There is no application to fill in first.' },
    { n: '04', title: 'An invitation', body: 'If it’s right on both sides, we send a personal invitation, the membership agreement and a start date.' },
  ],
  reassurance: 'We keep the community small and choose carefully — not to be exclusive, but because small groups and a settled community are the whole point.',
} as const;

export const closing = {
  headingLines: ['Come and see', 'if it fits.'],
  body: 'Start with a message. No forms, no commitment — just a conversation about your family.',
  ctaLabel: 'Talk to us on WhatsApp',
  secondaryLabel: 'Or email us',
  video: '/video/membership-closing.mp4',
  poster: '/images/membership-video-poster.webp',
} as const;
