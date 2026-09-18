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
 * 2026-09-17), from the Narelo Price List 2026 since 2026-09-19 (see the
 * `pricing` comment), even though the rest of the site carries none: the dossier is
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
 * Pricing follows the Narelo Price List 2026 (EN), a one-page PDF Vivien
 * supplied on 2026-09-19 to replace everything the dossier PDF and this
 * page said about prices before. It is a different model, not new numbers
 * in the old one:
 *
 * - Two tiers, not seven age-group prices. Narelo Early (Bloom, Nurture,
 *   The Nest; pregnancy to 2 years) and Narelo Explore (Little Beginnings,
 *   Builders I, Builders II, Navigators; 2 to 8 years). One price per tier,
 *   including when a child moves up a group.
 * - Two ways to join. 12 months, paid monthly by direct debit (150€ or 220€
 *   a month, 1.800€ or 2.640€ a year; pay the year at the start and it is
 *   eleven months instead of twelve, 1.650€ or 2.420€). Or 3 months, one
 *   season, one single payment (595€ or 875€, which equals 198€ or 292€ a
 *   month), after which the membership ends on its own.
 * - Bloom runs four months and costs 600€ in one payment.
 * - Per child, including 21% IVA. One-off joining fee 99€ per family (the
 *   dossier's 49€ Bloom fee is gone).
 * - The price list calls itself complete: "that is the entire discount
 *   system, with no small print". So the Founding Family 10%, the 15%
 *   sibling discount and any "pay per year" percentage are gone from this
 *   page. What remains: a 25€ a month sibling discount from the second
 *   child, eleven of twelve months when the year is paid at the start, and
 *   Expert Insights at 0€, included.
 * - Included in every membership: weekly Experiences, Community Mornings,
 *   Expert Insights and four transferable sessions a year for siblings or
 *   friends. Members book Signature Saturdays, Holiday, Birthday and
 *   Private Experiences in advance at member rates. The "four transferable
 *   sessions" is new to the site and appears here only, in the price list's
 *   own sentence, not in the shared `included` list in content/membership.ts.
 *
 * Every string below is the price list's wording, with its spaced dashes
 * turned into commas or colons (house style: no em dashes) and its
 * "1,800 €" written as "1.800€", the way the rest of this page already
 * writes totals. The 12-month annual total sits behind the PriceReveal tap
 * (Vivien, 2026-09-19: "make the full price clickable"); the 3-month
 * option's "equals 198€ per month" is a comparison, not a total, so it
 * stays in view.
 *
 * `reserve.eyebrow` still says founding memberships are limited to 50
 * families. That is about places, not price, and the price list does not
 * contradict it, so it stays; flagged to Vivien all the same.
 */
export type PricingTier = {
  readonly name: string;
  readonly groups: string;
  readonly ages: string;
  /** 12 months, paid monthly. */
  readonly monthly: { readonly perMonth: string; readonly perYear: string };
  /** 3 months, one single payment. */
  readonly season: { readonly once: string; readonly equals: string };
};

export type JoinOption = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly tag: string;
  readonly points: readonly string[];
  readonly recommended?: boolean;
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Membership · Prices 2026',
  lede: 'One membership, one home',
  intro: 'Every week, all year round, from pregnancy to the age of eight.',
  tiersLabel: 'Two tiers, two prices',
  columnMonthly: '12 months · paid monthly',
  columnSeason: '3 months · one single payment',
  perMonthSuffix: ' per month',
  onceSuffix: ' once',
  revealLabel: 'See the full price',
  tiers: [
    {
      name: 'Narelo Early',
      groups: 'Bloom · Nurture · The Nest',
      ages: 'pregnancy to 2 years',
      monthly: { perMonth: '150€', perYear: '1.800€ per year' },
      season: { once: '595€', equals: 'equals 198€ per month' },
    },
    {
      name: 'Narelo Explore',
      groups: 'Little Beginnings · Builders I · Builders II · Navigators',
      ages: '2 to 8 years',
      monthly: { perMonth: '220€', perYear: '2.640€ per year' },
      season: { once: '875€', equals: 'equals 292€ per month' },
    },
  ] as readonly PricingTier[],
  finePrint: [
    'That is the complete price list. Per child, including 21% IVA.',
    '12 months: paid monthly by SEPA direct debit. Pay the year at the start and you pay eleven months instead of twelve (1.650€ or 2.420€).',
    '3 months: no monthly payments, no direct debit. The amount is paid in one sum at the start and the membership then ends automatically.',
    'Bloom (pregnancy) runs four months and costs 600€ in one payment. One-off joining fee 99€ per family.',
  ],
  joinLabel: 'Two ways to join',
  joinOptions: [
    {
      eyebrow: 'Recommended',
      heading: '12 months',
      tag: 'Monthly by direct debit',
      points: [
        'About a quarter cheaper per month: that is the entire discount system, with no small print',
        'One price for the whole tier, including when your child moves up a group',
        'A fixed place in the group for the whole year',
        'Moving up to the next age group is included, at no extra cost',
        'Monthly by direct debit, or at the start: eleven instead of twelve months',
        'Afterwards it continues monthly, cancellable with one month’s notice',
      ],
      recommended: true,
    },
    {
      eyebrow: 'To get to know us',
      heading: '3 months, one season',
      tag: 'One payment · No monthly fees',
      points: [
        'A full season of twelve Experiences',
        'The whole amount is paid once at the start. Nothing follows afterwards',
        'Upgrade any time: move to 12 months within the season and everything you paid is credited',
        'Places subject to availability; annual members are considered first',
      ],
    },
  ] as readonly JoinOption[],
  goodToKnowLabel: 'Good to know',
  goodToKnow: [
    { value: '−25€', title: 'Sibling discount', label: 'per month, from the second child' },
    { value: '11 of 12', title: 'Paid at the start', label: 'eleven instead of twelve monthly fees' },
    { value: '0€', title: 'Expert Insights', label: 'monthly, included in the membership' },
  ],
  includedNote:
    'Included in every membership: weekly Experiences, Community Mornings, Expert Insights and four transferable sessions a year for siblings or friends. Members book Signature Saturdays, Holiday, Birthday and Private Experiences in advance at member rates.',
} as const;

export const reserve = {
  eyebrow: 'Founding memberships are limited to 50 families',
  heading: 'Reserve your family’s place',
  body: 'If Narelo feels right for your family, the next step is simple: a conversation.',
  steps: ['Message us', 'We find the fit', 'A short conversation', 'An invitation'],
  ctaLabel: 'Start a conversation',
  instagramLabel: '@narelo.europe',
} as const;
