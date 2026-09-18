/**
 * The Narelo Family Guide, as a page: /dossier/.
 *
 * Source: the PDF "Narelo Family Guide" Vivien supplied (2026-09-17), the same
 * document referenced in content/membership.ts as "the Narelo Family Guide"
 * and "the parent dossier". This page reproduces it in full at a link-only
 * URL: not in `site.nav`, not in the footer, excluded from sitemap.xml and
 * marked noindex, so it is reachable only by whoever has the link, the way
 * membership.joining already describes the mini dossier being offered.
 *
 * Everything the dossier says elsewhere on the site (what Narelo is, the
 * founders, the five worlds, the age journey, what membership includes) is
 * pulled from its one canonical home in content/home.ts, content/membership.ts,
 * content/experiences.ts and content/stages.ts rather than restated here, per
 * AGENTS.md's "one owner per subject". Only what exists nowhere else on the
 * site, the research citations, the pricing table and the dossier's own
 * chapter headings, lives in this file.
 *
 * Pricing is published here on the team's explicit instruction (Vivien,
 * 2026-09-17), even though the rest of the site carries none: the dossier is
 * the one place a family already deep in conversation sees figures, and this
 * page is that same document, not the public marketing pages. Do not lift
 * these figures onto Membership, Experiences or any other page.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26). The PDF's
 * spaced hyphens become commas here, matching how the rest of the site already
 * carries dossier sentences.
 */

export const hero = {
  eyebrow: 'Family Guide',
  image: '/images/img-5208.webp',
  imageAlt: 'Three children on a dune at sunset, looking out over the sea.',
} as const;

export const research = {
  eyebrow: 'Our view on childhood',
  label: 'What the research confirms',
  body: 'Critical thinking, emotional intelligence, self-regulation and cross-cultural adaptability are the competencies that will matter for Generation Beta, and they are built through real-life experience, nature, movement and community.',
  citations: ['MIT & Stanford', 'Harvard', 'OECD', 'Generation Beta research'],
} as const;

export const worldChapter = {
  heading: 'The world of Narelo',
  whatIsLabel: 'What is Narelo?',
  whoLabel: 'Who is behind it?',
} as const;

export const experienceChapter = {
  heading: 'The Narelo experience',
  whatLabel: 'What will my child actually experience?',
  journeyEyebrow: 'Where does your family’s journey begin?',
  worldsLabel: 'Five worlds to explore',
} as const;

export const membershipChapter = {
  heading: 'Becoming part of Narelo',
  receiveLabel: 'What does your family actually receive?',
  heartEyebrow: 'The heart of the membership',
  heartHeading: 'Weekly Experiences, all year round',
  heartFacts: ['Pregnancy to age eight', 'Small groups of eight', '90 minutes'],
} as const;

/**
 * Shown per month rather than as one termly or annual total (Vivien,
 * 2026-09-18): families who received the totals as a single lump figure
 * stopped replying. This is the standard subscription convention Vivien
 * asked for directly: the figure a family weighs is "how much a month",
 * the same way a yearly app subscription is sold as its monthly-equivalent
 * price even though the charge itself is once a year. Termly divides one
 * term's fee by 3, the ordinary length of a term; yearly divides the
 * discounted annual total by 12. The totals themselves are unchanged,
 * nothing here is a new price, and each sits behind PriceReveal, a tap to
 * see it, the way an app store leaves the annual charge a click away
 * rather than beside the monthly figure. `revealLabel` is what the tap
 * says before it opens.
 *
 * Four tiers per stage now (Vivien, 2026-09-18), since this dossier goes to
 * families being invited to found the community: standard termly, standard
 * yearly, founding termly, founding yearly, in that order, each cheaper
 * than the last, so the sequence itself makes the case for the last row
 * without a family having to work it out. The founding discount is a
 * further 10% off whichever of standard termly or yearly a family already
 * pays, it is a lifetime membership discount, not one tied to paying
 * annually, so it appears against both. The two discounts multiply rather
 * than add: founding pay per year is 0.95 x 0.9, 14.5% off the standard
 * termly rate, not a flat 15%, and that 14.5% is exact for every stage
 * because it falls out of the two percentages alone, not the totals
 * themselves. The last tier carries `best: true`, which the page marks
 * quietly, this is the rate the team wants a family to land on, not a
 * discount they are pressured toward.
 */
export type PricingTier = {
  readonly label: string;
  readonly perMonth: string;
  /** Crossed out before `totalAfter` in the reveal, when this tier is a discount off a total shown above it. Omitted for the first, undiscounted tier. */
  readonly totalBefore?: string;
  readonly totalAfter: string;
  readonly best?: boolean;
};

export type PricingPlan = {
  readonly name: string;
  readonly age: string;
  readonly tiers: readonly PricingTier[];
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  seasonNote: 'Shown per month: the per-term figure divides one term’s fee across its 3 months, the per-year figure divides the annual total across the year. Tap a figure to see the full price.',
  perMonthSuffix: '/month',
  revealLabel: 'See the full price',
  bestLabel: 'The rate we hope you land on',
  plans: [
    {
      name: 'Bloom',
      age: 'Pregnancy',
      tiers: [
        { label: 'Standard', perMonth: '149€', totalAfter: '595€, across the 4 months' },
        { label: 'Founding Family · a lifetime 10% off', perMonth: '134€', totalBefore: '595€', totalAfter: '536€, across the 4 months', best: true },
      ],
    },
    {
      name: 'Nurture',
      age: '0–1 year',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '148€', totalAfter: '445€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '141€', totalBefore: '1.785€', totalAfter: '1.695€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '134€', totalBefore: '445€', totalAfter: '400€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '127€', totalBefore: '1.695€', totalAfter: '1.526€ a year', best: true },
      ],
    },
    {
      name: 'The Nest',
      age: '1–2 years',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '173€', totalAfter: '520€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '165€', totalBefore: '2.085€', totalAfter: '1.980€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '156€', totalBefore: '520€', totalAfter: '468€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '148€', totalBefore: '1.980€', totalAfter: '1.782€ a year', best: true },
      ],
    },
    {
      name: 'Little Beginnings',
      age: '2–3 years',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '223€', totalAfter: '670€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '212€', totalBefore: '2.685€', totalAfter: '2.550€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '201€', totalBefore: '670€', totalAfter: '603€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '191€', totalBefore: '2.550€', totalAfter: '2.295€ a year', best: true },
      ],
    },
    {
      name: 'Builders I',
      age: '3–5 years',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '223€', totalAfter: '670€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '212€', totalBefore: '2.685€', totalAfter: '2.550€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '201€', totalBefore: '670€', totalAfter: '603€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '191€', totalBefore: '2.550€', totalAfter: '2.295€ a year', best: true },
      ],
    },
    {
      name: 'Builders II',
      age: '5–6 years',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '223€', totalAfter: '670€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '212€', totalBefore: '2.685€', totalAfter: '2.550€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '201€', totalBefore: '670€', totalAfter: '603€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '191€', totalBefore: '2.550€', totalAfter: '2.295€ a year', best: true },
      ],
    },
    {
      name: 'Navigators',
      age: '6–8 years',
      tiers: [
        { label: 'Standard · pay per term', perMonth: '237€', totalAfter: '710€ each term' },
        { label: 'Standard · pay per year · save 5%', perMonth: '225€', totalBefore: '2.835€', totalAfter: '2.695€ a year' },
        { label: 'Founding Family · pay per term · save 10%', perMonth: '213€', totalBefore: '710€', totalAfter: '639€ each term' },
        { label: 'Founding Family · pay per year · save 14.5%', perMonth: '202€', totalBefore: '2.695€', totalAfter: '2.426€ a year', best: true },
      ],
    },
  ] as readonly PricingPlan[],
  joiningFee: 'One-time joining fee of 99€ per family · 49€ for Bloom.',
  discounts: [
    { value: '15%', label: 'sibling discount' },
    { value: '5%', label: 'discount for annual payment' },
    { value: '10%', label: 'lifetime membership discount for the first 50 Founding Families' },
  ],
} as const;

export const reserve = {
  eyebrow: 'Founding memberships are limited to 50 families',
  heading: 'Reserve your family’s place',
  body: 'If Narelo feels right for your family, the next step is simple: a conversation.',
  steps: ['Message us', 'We find the fit', 'A short conversation', 'An invitation'],
  ctaLabel: 'Start a conversation',
  instagramLabel: '@narelo.europe',
} as const;
