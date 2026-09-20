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
 * Pricing model of 2026-09-20 (Vivien, ahead of the final pricing flyer),
 * replacing every earlier version on this page: the dossier PDF's seven
 * age-group prices, the 3-month / annual pair, the Founding Family rate
 * and the one-page price list of 2026-09-19. The team's own words for the
 * change: a lower commitment barrier and more flexibility, without turning
 * Narelo into pay-as-you-go.
 *
 * - The membership cycle is 12 Experiences, about a quarter or a term,
 *   instead of an annual commitment. No 12-month lock-in.
 * - One upfront payment per cycle: €600 for Narelo Early (Bloom, Nurture,
 *   The Nest, Little Beginnings), €720 for Narelo Explore (Builders I,
 *   Builders II, Navigators). Two price levels, €50 or €60 per Experience,
 *   in place of annual prices and discount combinations.
 * - Automatic continuation every 12 Experiences, with the option to stop by
 *   giving notice 14 days before the final Experience.
 * - Still a real membership, not a course package: a weekly fixed group,
 *   Community Mornings, Expert Insights, priority booking and member rates
 *   remain part of the model.
 *
 * Not in the new model, so not on the page: the joining fee, the sibling
 * and Founding Family discounts, the annual option, per-month figures and
 * the "See the full price" tap (the price is the price now). Little
 * Beginnings sits in Early here, where the 2026-09-19 price list had it in
 * Explore; the 2026-09-20 message is the later word. Age spans for the two
 * tiers ("pregnancy to 3 years", "3 to 8 years") are read off the age
 * groups in content/stages.ts, not stated in the message.
 *
 * `reserve.eyebrow` still says founding memberships are limited to 50
 * families. That is about places, not price, and nothing in the new model
 * contradicts it, so it stays; flagged to Vivien.
 */
export type PricingTier = {
  readonly name: string;
  readonly groups: string;
  readonly ages: string;
  readonly price: string;
  readonly perExperience: string;
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  intro: 'Membership runs in cycles of 12 weekly Experiences, with one simple payment at the start of each. No annual commitment.',
  tiersLabel: 'Two clear price levels',
  cycleLabel: '12 Experiences',
  priceNote: 'one upfront payment',
  tiers: [
    {
      name: 'Narelo Early',
      groups: 'Bloom · Nurture · The Nest · Little Beginnings',
      ages: 'Pregnancy to 3 years',
      price: '€600',
      perExperience: '€50 per Experience',
    },
    {
      name: 'Narelo Explore',
      groups: 'Builders I · Builders II · Navigators',
      ages: '3 to 8 years',
      price: '€720',
      perExperience: '€60 per Experience',
    },
  ] as readonly PricingTier[],
  howItWorks: {
    label: 'How it works',
    points: [
      'Your membership runs in cycles of 12 weekly Experiences, about a term.',
      'One upfront payment at the start of each cycle. No monthly fees, no 12-month lock-in.',
      'It continues automatically every 12 Experiences, so your child keeps their place in the group.',
      'To stop, let us know 14 days before the final Experience of the cycle.',
    ],
  },
  membershipNote: {
    label: 'A membership, not a course package',
    body: 'Your child keeps a fixed place in a weekly group, and Community Mornings, Expert Insights, priority booking and member rates remain part of every membership.',
  },
} as const;

export const reserve = {
  eyebrow: 'Founding memberships are limited to 50 families',
  heading: 'Reserve your family’s place',
  body: 'If Narelo feels right for your family, the next step is simple: a conversation.',
  steps: ['Message us', 'We find the fit', 'A short conversation', 'An invitation'],
  ctaLabel: 'Start a conversation',
  instagramLabel: '@narelo.europe',
} as const;
