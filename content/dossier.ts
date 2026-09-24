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

/**
 * "Our view on childhood", transcribed from the Premium Family Membership
 * Dossier (updated, Vivien, 2026-09-23). It replaces the older "What the
 * research confirms" paragraph the page carried, which the updated document
 * no longer has: the citations are now framed as what Narelo is informed by,
 * not as a claim about competencies. "That is where Narelo comes in" moves
 * here too, from the world chapter, where the document puts it.
 */
export const research = {
  eyebrow: 'Our view on childhood',
  headline: ['We don’t create a world for children.', 'We open the real world to them.'],
  label: 'Why Narelo',
  lede: ['Some things are learned.', 'Others have to be lived.'],
  body: 'Children are growing into a world we cannot fully predict. Alongside everything they learn at school, through hobbies and from the people around them, they also need opportunities to experience things for themselves.',
  capability:
    'To move, create, explore, make decisions, solve problems, collaborate, adapt and discover what they are capable of.',
  close: 'That is where Narelo comes in.',
  citationsLabel: 'Informed by',
  citations: ['MIT & Stanford', 'Harvard', 'OECD', 'Generation Beta research'],
} as const;

/**
 * "The world of Narelo", from the updated dossier (2026-09-23). The two
 * paragraphs and the pull quote are the document's, kept here rather than in
 * content/membership.ts because that file feeds the Membership page and the
 * translated dictionary; this page is the document, the Membership page is
 * not.
 */
export const worldChapter = {
  heading: 'The world of Narelo',
  whatIsLabel: 'What is Narelo?',
  whatIs:
    'A private members’ club built around extraordinary childhood experiences that help children grow through nature, creativity, movement and real-life adventures.',
  pull: 'We believe the greatest gift we can give children is a childhood that prepares them not just for school, but for a future we cannot yet imagine.',
  more:
    'More than a children’s programme, Narelo is a membership community where children build confidence, independence and meaningful connections, parents continue learning through expert insights, and like-minded families grow together, preparing children to flourish in a world that is constantly changing.',
  whoLabel: 'Who is behind it?',
} as const;

/**
 * "What makes Narelo different", from the updated dossier (2026-09-23). The
 * page used to show `different` from content/membership.ts here, three
 * numbered lines that the document has replaced entirely. That file is
 * untouched: the Membership page still shows its own three.
 *
 * The document's contrast is the heart of it: not "what activity should we
 * do?" but "what can this experience give the child?". Its spaced hyphens
 * are commas here (house style: no em dashes).
 */
export const differentChapter = {
  heading: 'What makes Narelo different',
  lede: 'Not another activity. A broader way for children to grow.',
  columns: [
    [
      'Narelo is not built around one subject, sport or skill.',
      'Through a wide variety of real-life experiences, children are challenged physically, creatively, socially and personally.',
      'Children return week after week, in small groups and with familiar educators, allowing experiences, relationships and capabilities to build over time.',
    ],
    [
      'Behind every experience is an intention. We think about what the experience can give the child, whether that is confidence, independence, creativity, resilience, collaboration, problem-solving or simply the courage to try something new.',
    ],
  ],
  contrast: {
    fromLabel: 'We don’t just ask',
    from: 'What activity should we do?',
    toLabel: 'We ask',
    to: 'What can this experience give the child?',
  },
  why: {
    label: 'Why it matters',
    body: [
      'We cannot prepare children for every situation they will face in the future.',
      'But we can give them repeated opportunities to think for themselves, navigate something unfamiliar, try, adjust and find their own way forward.',
    ],
    pull: 'Because knowing something is one thing. Knowing what to do when there is no obvious answer is another.',
  },
  families: {
    label: 'For families',
    heading: ['Time for them.', 'Time for you.'],
    body: [
      'Narelo creates experiences children genuinely look forward to, while giving parents trusted time they can count on.',
      'From weekly experiences to Saturdays, school holidays, birthdays, private events and individual Private Experiences, families can turn to Narelo whenever they want their child’s time to be more than simply filled.',
    ],
    pull: 'You get time back. They get experiences that give something back to them.',
  },
} as const;

export const experienceChapter = {
  heading: 'The Narelo experience',
  whatLabel: 'What will my child actually experience?',
  /* The document's opening paragraph for this chapter (2026-09-23). It is
     not in content/experiences.ts, which the rest of this chapter draws on,
     because the Experiences page tells the same thing its own way. */
  intro:
    'Narelo Experiences are 90-minute sessions in small, age-based groups of around eight children, twelve experiences a season, one for every week of term. Each experience is different, but they all follow the same Narelo principle.',
  journeyEyebrow: 'Where does your family’s journey begin?',
  worldsLabel: 'Five worlds to explore',
} as const;

export const membershipChapter = {
  heading: 'Becoming part of Narelo',
  receiveLabel: 'What does your family actually receive?',
  heartEyebrow: 'The heart of the membership',
  heartHeading: 'Weekly Experiences, all year round',
  heartFacts: ['Pregnancy to age eight', 'Small groups of eight', '90 minutes'],
  includesLabel: 'Membership includes',
  /**
   * "Members also enjoy", in the updated dossier's own names and wording
   * (2026-09-23). It replaces two blocks that stood here for two days: the
   * "And for you" line from Vivien's Key notes sheet and a six-item
   * "Included in every membership" list taken from the September price list.
   * The document carries neither, and what it does carry says the same
   * things in fewer words.
   *
   * ⚠️ The document names these "Celebration Experiences" and "Private
   * Experiences" where the rest of the site says "Birthday Experiences" and
   * "Bespoke Private Experiences" (content/membership.ts). The document wins
   * on this page, because this page is the document; flagged to Vivien
   * rather than quietly reconciled.
   */
  alsoEnjoy: {
    label: 'Members also enjoy',
    items: [
      'Signature Saturdays',
      'Expert Insights',
      'Celebration Experiences',
      'Holiday Experiences',
      'Private Experiences',
    ],
    note: 'Members book first, at special rates, ahead of anyone outside the club.',
    experts:
      'Every month, our own experts open a session to you, yours, as part of the membership. When we invite specialists from outside, members always receive preferred rates.',
  },
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
 * The card is laid out as Vivien drew it on 2026-09-23, after four
 * attempts here missed it. The two tiers stack full width rather than
 * sitting side by side, each centred: who it is for above the tier name,
 * the age groups in italic under it, a short rule, then the weekly figure
 * large, "Per week" beneath it, and one line carrying everything a family
 * needs to know about paying, "600 € per season · twelve Experiences · one
 * payment in advance".
 *
 * The order matters and was arrived at the hard way. The weekly figure
 * leads because it is the number a parent recognises and weighs, and
 * burying it under the season total lost the one number that sells. But
 * nothing that looks like a count may sit above it: "12 Experiences" over
 * a large "50 €" reads as the price of all twelve. So the line above names
 * only who the tier is for, and the single line below does the honest
 * work, in one sentence rather than a second panel.
 *
 * The tagline moved below the cards, as in the drawing, so the price is
 * the first thing under the headline. The colours are ours, not the
 * drawing's, which was black on white.
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
  /** The weekly figure, the largest thing on the card. */
  readonly price: string;
  /** The one line under it that says what is actually paid, and when. */
  readonly summary: string;
  /** Which of the two card treatments this tier gets. Never both the same: the pair has to read as two choices at a glance. */
  readonly tone: 'forest' | 'sand';
};

export type Promise = { readonly title: string; readonly body: string };

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Membership · 2026',
  lede: 'One price. One payment. Twelve Experiences.',
  intro: 'Every week an afternoon your child will remember, from pregnancy to the age of eight',
  perWeekLabel: 'Per week',
  tiers: [
    {
      name: 'Narelo Early',
      groups: 'Bloom · Nurture · The Nest · Little Beginnings',
      who: 'With you · up to 3 years',
      price: '50 €',
      summary: '600 € per season · twelve Experiences · one payment in advance',
      tone: 'forest',
    },
    {
      name: 'Narelo Explore',
      groups: 'Builders I · Builders II · Navigators',
      who: 'Their own adventure · 3 to 8 years',
      price: '60 €',
      summary: '720 € per season · twelve Experiences · one payment in advance',
      tone: 'sand',
    },
  ] as readonly PricingTier[],
  /**
   * Under the prices, as Vivien drew it (2026-09-23): three short promises
   * under "Simple, by design", then three facts in a row, then one
   * footnote. It replaces the numbered "How it works" steps, the "Good to
   * know" cards and the two paragraphs of small print, which together were
   * saying the same few things three times. The six inclusions and the
   * parent-value line moved up to `membershipChapter`.
   */
  simple: {
    label: 'Simple, by design',
    promises: [
      { title: 'A fixed weekday', body: 'in the group that matches your child’s age' },
      { title: 'One payment per season', body: '600 € or 720 €, nothing more until it is done' },
      { title: 'Stay as long as it feels right', body: 'renews automatically, stop up to 14 days before the last Experience' },
    ] as readonly Promise[],
  },
  facts: [
    { label: 'Founding families', value: '10 % for life' },
    { label: 'Joining fee', value: '99 €' },
    { label: 'Expert Insights', value: 'Included' },
  ],
  footnote:
    'Founding price for the first 50 families: 45 € / 54 € per week, for as long as the membership continues. Per child, incl. 21 % IVA. No monthly fees, no direct debit, no annual commitment.',
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
