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

export type PricingPlan = {
  readonly name: string;
  readonly age: string;
  readonly oneOff?: { readonly price: string; readonly period: string };
  readonly quarterly?: { readonly label: string; readonly annualFull: string; readonly annualDiscounted: string };
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  quarterlyLabel: 'Quarterly',
  annualLabel: 'Paid annually · Save 5%',
  plans: [
    { name: 'Bloom', age: 'Pregnancy', oneOff: { price: '595€', period: '4 months' } },
    { name: 'Nurture', age: '0–1', quarterly: { label: '4 × 445€', annualFull: '1.785€', annualDiscounted: '1.695€' } },
    { name: 'The Nest', age: '1–2', quarterly: { label: '4 × 520€', annualFull: '2.085€', annualDiscounted: '1.980€' } },
    { name: 'Little Beginnings', age: '2–3', quarterly: { label: '4 × 670€', annualFull: '2.685€', annualDiscounted: '2.550€' } },
    { name: 'Builders I', age: '3–5', quarterly: { label: '4 × 670€', annualFull: '2.685€', annualDiscounted: '2.550€' } },
    { name: 'Builders II', age: '5–6', quarterly: { label: '4 × 670€', annualFull: '2.685€', annualDiscounted: '2.550€' } },
    { name: 'Navigators', age: '6–8', quarterly: { label: '4 × 710€', annualFull: '2.835€', annualDiscounted: '2.695€' } },
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
