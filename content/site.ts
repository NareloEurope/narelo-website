/**
 * Global site content.
 *
 * Copy follows brand/brand-essence.md §6 Tone of Voice: warm not childish,
 * intelligent not academic, aspirational NOT elitist, clear not promotional.
 *
 * Note on the Soho House reference: the visual restraint is the model, not the
 * social language. framework/mission-vision-promise.md is explicit that Narelo's
 * curated community "is NOT status-based exclusivity" — selection exists to
 * protect the environment and community. No copy here implies otherwise.
 */

export const site = {
  name: 'Narelo',
  tagline: 'A private childhood membership',
  locale: 'en',
  location: 'Marbella, Spain',
  copyright: '© 2026 Narelo. All rights reserved.',
} as const;

/**
 * Community, Journal and Contact exist as routes but are hidden from the menu
 * until they are ready (Rui, 2026-08-26). Re-add them here when they are.
 */
export const nav = [
  /*
   * Relative, not the absolute vercel.app URL: this has to keep working on
   * localhost and on the real domain later, and a same-origin link scrolls
   * instead of triggering a full page load. Trailing slash matches
   * next.config trailingSlash: true, so the anchor resolves without a redirect.
   */
  { label: 'What is Narelo', href: '/membership/#what' },
  { label: 'Experiences', href: '/experiences/' },
  { label: 'Membership', href: '/membership/' },
  /*
   * Points at the "Who we are" section of the Membership page (Vivien,
   * 2026-09-02): the founders now appear in one place only, and this is it.
   */
  { label: 'Who we are', href: '/membership/#who' },
] as const;

/**
 * The primary CTA opens a WhatsApp conversation directly (Funnel Process,
 * 2026-08-31: WhatsApp is the concierge entry point and the website's only
 * call to action). The document sets the wording as "Start a conversation":
 * this is the start of a conversation, not a signup, and there is no
 * application form before the family conversation.
 */
export const headerCta = { label: 'Start a conversation', external: true } as const;

/**
 * The closing band above the footer, shown on every page. Previously
 * hardcoded in components/Footer.tsx; lifted here so the team can edit it
 * (Vivien, 2026-08-31), along with the expansion line and the CTA label.
 *
 * "Our first Narelo home" is the approved public wording for the opening.
 * ⚠️ The Madrid and Mallorca line is new public copy supplied in the same
 * feedback pass. It is not backed by a document in the repo: confirm before
 * launch.
 */
export const footerCta = {
  heading: 'Our first Narelo home opens in Marbella this autumn.',
  subheading: 'Beginning in Marbella. Madrid and Mallorca on the horizon.',
  ctaLabel: 'Start a conversation',
  /** Sits under the logo in the footer. Longer than `site.tagline`, which
   *  stays short because it is also the browser title. */
  blurb: 'A private members’ club built around extraordinary childhood experiences.',
} as const;

/**
 * Interface labels that are not page copy: the menu button, the skip link, the
 * footer's two column headings. They used to be hardcoded in the components,
 * which meant they stayed English when the rest of the page did not
 * (Vivien, 2026-09-04).
 */
export const ui = {
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  skipToContent: 'Skip to main content',
  footerContact: 'Contact',
  languageLabel: 'Language',
  homeLabel: 'home',
  /** Used to describe the community gallery photographs, numbered after it. */
  galleryAlt: 'A moment from a Narelo experience',
  /** The heading above each stage's list, on the Experiences page. */
  whatToExpect: 'What to expect',
  backToTop: 'Back to top',
} as const;

export const contact = {
  visitLabel: 'Visit',
  visitName: 'Narelo, Marbella',
  visitNote: 'By appointment only. We would love to welcome you.',
  emailLabel: 'Email',
  email: 'hello@narelo.es',
  emailHref: 'mailto:hello@narelo.es',
  phoneLabel: 'Call or WhatsApp',
  phone: '+34 655 366 888',
  phoneHref: 'tel:+34655366888',
  /**
   * The funnel's primary CTA (Funnel Process, 2026-08-31, PATH 1 step 2).
   * The prefilled wording is taken from that document verbatim. Narelo's
   * first reply asks how old the child is, so the prefill does not.
   */
  whatsapp: 'https://wa.me/34655366888?text=Hi%20Narelo%2C%20I%27d%20love%20to%20learn%20more%20about%20membership%20for%20my%20family.',
} as const;

/**
 * ⚠️ On the Wix site these four icons were dead links, and @narelo.eu appeared
 * nowhere. Instagram is set from CLAUDE.md; the rest need real URLs before launch.
 */
export const socialIcons = [
  { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
  { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: contact.whatsapp },
  { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
  { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
] as const;
