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
 * Pricing follows the "Freshest price list" PDF (Membership · Prices 2026,
 * one page, Vivien, 2026-09-21), which supersedes every earlier version on
 * this page: the dossier PDF's seven age-group prices, the 3-month / annual
 * pair, the two-tier list of 2026-09-19 and the 12-Experience message of
 * 2026-09-20. It is that message made final, with the details filled in:
 *
 * - Two tiers. Narelo Early (Bloom, Nurture, The Nest, Little Beginnings;
 *   "with you, up to 3 years") at 50 € per week, 600 € in total. Narelo
 *   Explore (Builders I, Builders II, Navigators; "on their own, 3 to 8
 *   years") at 60 € per week, 720 € in total. A season is three months with
 *   twelve Experiences, holiday and closure weeks already accounted for,
 *   one payment in advance. Per child, including 21% IVA. No monthly fees,
 *   no direct debit, no annual commitment.
 * - How it works in three steps: choose the group and the day, pay for the
 *   season, carry on or not (renews automatically, stop up to 14 days
 *   before the last Experience).
 * - Included in every membership: the weekly Experience (twelve per
 *   season), Community Mornings, Expert Insights, one conversation per
 *   season with the Senior Educator, a digital development summary per
 *   season, advance booking and member rates. The two per-season items are
 *   new to the site and appear here only, in the price list's own words.
 * - Good to know: Founding Families 10% off the weekly price for life (45 €
 *   or 54 € per week, 540 € or 648 € per season, the first 50 families keep
 *   it for good), joining fee 99 € once per family, Expert Insights 0 €.
 *
 * One addition the price list does not have, asked for by Vivien
 * ("think as a sales expert", 2026-09-21) and drawn from her "Key notes &
 * ideas" sheet: `forParents`, a four-item line naming what the membership
 * gives the parent (peace of mind, guidance and support, a trusted
 * community, the tools their child needs for the future), placed above the
 * price so a family reads the value before the figure. Nothing in it is
 * new to Narelo; it is the sheet's "a solution to real parent needs" list.
 *
 * Wording is the price list's, with its spaced dashes turned into commas
 * or colons (house style: no em dashes). Prices are written "50 €" with a
 * space, as the list writes them.
 *
 * The two tier cards carry a `tone` each rather than one being "the dark
 * one" (Vivien, 2026-09-21): Explore on the page's own linen was nearly
 * invisible against the linen background, so it takes the palette's sand
 * now, the one warm mid tone the brand already has. Forest and sand read
 * as two real choices side by side; linen and linen did not.
 */
export type PricingTier = {
  readonly name: string;
  readonly groups: string;
  readonly who: string;
  readonly perWeek: string;
  readonly total: string;
  /** Which of the two card treatments this tier gets. Never both the same: the pair has to read as two choices at a glance. */
  readonly tone: 'forest' | 'sand';
};

export type HowStep = { readonly title: string; readonly body: string };

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Membership · Prices 2026',
  lede: 'One price. One payment. Twelve Experiences.',
  intro: 'Every week an afternoon your child will remember, from pregnancy to the age of eight.',
  forParents: {
    label: 'And for you',
    items: ['Peace of mind', 'Guidance and support', 'A trusted community', 'The tools your child needs for the future'],
  },
  seasonLabel: '3 months',
  perWeekSuffix: 'per week',
  totalSuffix: 'in total',
  totalNote: '12 Experiences · one payment in advance',
  tiers: [
    {
      name: 'Narelo Early',
      groups: 'Bloom · Nurture · The Nest · Little Beginnings',
      who: 'With you · up to 3 years',
      perWeek: '50 €',
      total: '600 €',
      tone: 'forest',
    },
    {
      name: 'Narelo Explore',
      groups: 'Builders I · Builders II · Navigators',
      who: 'On their own · 3 to 8 years',
      perWeek: '60 €',
      total: '720 €',
      tone: 'sand',
    },
  ] as readonly PricingTier[],
  finePrint:
    'Per child, including 21% IVA. A season is three months with twelve Experiences; holiday and closure weeks are already accounted for. There are no monthly fees, no direct debit and no annual commitment: one amount, once, in advance.',
  howItWorks: {
    label: 'How it works',
    steps: [
      { title: 'Choose the group and the day', body: 'We give your child a fixed weekday in the group that matches their age.' },
      { title: 'Pay for the season', body: '600 € or 720 €, once at the start. After that nothing follows for three months.' },
      { title: 'Carry on, or not', body: 'The season renews automatically for another three months. To stop, just tell us up to 14 days before the last Experience.' },
    ] as readonly HowStep[],
  },
  included: {
    label: 'Included in every membership',
    items: [
      'The weekly Experience in your group, twelve per season',
      'Community Mornings: time with other families, with no programme',
      'Expert Insights: monthly sessions with our own experts',
      'One conversation per season with the Senior Educator about your child’s development',
      'A digital summary of your child’s development, also once per season',
      'Advance booking and member rates for Signature Saturdays, Holiday, Birthday and Private Experiences',
    ],
  },
  goodToKnow: {
    label: 'Good to know',
    facts: [
      { value: '10 %', title: 'Founding Families', label: 'for life · the first 50 families', dark: true },
      { value: '99 €', title: 'Joining fee', label: 'once per family' },
      { value: '0 €', title: 'Expert Insights', label: 'monthly, included in the membership' },
    ],
    foundingNote:
      'Founding Families: 10% off the weekly price for as long as the membership continues without interruption, 45 € or 54 € per week, so 540 € or 648 € per season. The first 50 families keep that price for good.',
  },
} as const;

/**
 * A per-stage extra for the age-group cards, keyed by the stage name in
 * content/stages.ts. It lives here, not in content/stages.ts, because it
 * is written for this page alone: content/stages.ts is shared with the
 * Experiences page and with the Spanish, German and Hungarian stage lists,
 * and a required field there fails their build.
 *
 * Nurture first (Vivien, 2026-09-21): parents of babies ask what actually
 * happens each week, and the answer, a different prepared theme every
 * time, is the strongest thing Narelo has to say at this age. The three
 * named themes are Vivien's own examples. Any stage can take an entry.
 */
export const journeyNotes: Record<string, { readonly label: string; readonly body: string }> = {
  Nurture: {
    label: 'A new theme every week',
    body: 'Every Experience has its own world, prepared for this age: a baby spa, a sensory journey through space, a morning with farm animals. Something new to discover each week, with the same familiar faces.',
  },
};

export const reserve = {
  eyebrow: 'Founding memberships are limited to 50 families',
  heading: 'Reserve your family’s place',
  body: 'If Narelo feels right for your family, the next step is simple: a conversation.',
  steps: ['Message us', 'We find the fit', 'A short conversation', 'An invitation'],
  ctaLabel: 'Start a conversation',
  instagramLabel: '@narelo.europe',
  /**
   * The manifesto line and sign-off from Vivien's "Key notes & ideas" sheet
   * (2026-09-21), closing the guide the way the sheet closes: the one
   * sentence Narelo exists for, then the tagline.
   */
  manifesto: 'We want to strengthen human connection through real-life experiences, in nature.',
  tagline: 'Children today. A brighter tomorrow.',
} as const;
