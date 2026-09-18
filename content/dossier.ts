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
 * stopped replying, and a monthly figure is the honest, familiar way most
 * memberships and subscriptions are actually compared.
 *
 * The totals themselves are unchanged, nothing here is a new price. Each
 * monthly figure is the real total divided by the actual weeks the 2026/27
 * season runs, not a blind divide-by-12: the season is 37 weeks, the last
 * week of October (26 Oct 2026, the calendar Vivien supplied treats the
 * first three weeks of October as before the season starts) to the second
 * week of July 2027 (11 Jul, the last week before the summer closure),
 * which is 8.51 months. Termly divides one term's fee by a quarter of that,
 * 2.13 months; yearly divides the discounted annual total by the full 8.51.
 * That is also why the yearly monthly figure comes out lower than the
 * termly one, the 5% saving, not a rounding artefact.
 */
export type PricingPlan = {
  readonly name: string;
  readonly age: string;
  readonly oneOff?: { readonly perMonth: string; readonly price: string; readonly period: string };
  readonly quarterly?: {
    readonly termlyPerMonth: string;
    readonly termlyTotal: string;
    readonly yearlyPerMonth: string;
    readonly annualFull: string;
    readonly annualDiscounted: string;
  };
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  seasonNote: 'Shown per month, based on the 2026/27 season: the last week of October to the second week of July, about 8.5 months. The termly and yearly totals are unchanged, and appear underneath.',
  termlyLabel: 'Paid termly',
  yearlyLabel: 'Paid yearly · save 5%',
  perMonthSuffix: '/month',
  plans: [
    { name: 'Bloom', age: 'Pregnancy', oneOff: { perMonth: '149€', price: '595€', period: '4 months' } },
    {
      name: 'Nurture',
      age: '0–1',
      quarterly: { termlyPerMonth: '209€', termlyTotal: '445€ each term', yearlyPerMonth: '199€', annualFull: '1.785€', annualDiscounted: '1.695€' },
    },
    {
      name: 'The Nest',
      age: '1–2',
      quarterly: { termlyPerMonth: '244€', termlyTotal: '520€ each term', yearlyPerMonth: '233€', annualFull: '2.085€', annualDiscounted: '1.980€' },
    },
    {
      name: 'Little Beginnings',
      age: '2–3',
      quarterly: { termlyPerMonth: '315€', termlyTotal: '670€ each term', yearlyPerMonth: '300€', annualFull: '2.685€', annualDiscounted: '2.550€' },
    },
    {
      name: 'Builders I',
      age: '3–5',
      quarterly: { termlyPerMonth: '315€', termlyTotal: '670€ each term', yearlyPerMonth: '300€', annualFull: '2.685€', annualDiscounted: '2.550€' },
    },
    {
      name: 'Builders II',
      age: '5–6',
      quarterly: { termlyPerMonth: '315€', termlyTotal: '670€ each term', yearlyPerMonth: '300€', annualFull: '2.685€', annualDiscounted: '2.550€' },
    },
    {
      name: 'Navigators',
      age: '6–8',
      quarterly: { termlyPerMonth: '334€', termlyTotal: '710€ each term', yearlyPerMonth: '317€', annualFull: '2.835€', annualDiscounted: '2.695€' },
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
