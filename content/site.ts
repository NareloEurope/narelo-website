/**
 * Global site content.
 *
 * Tone of voice: warm not childish, intelligent not academic, aspirational
 * NOT elitist, clear not promotional.
 *
 * Note on the Soho House reference: the visual restraint is the model, not the
 * social language. Narelo's curated community is NOT status-based exclusivity,
 * selection exists to protect the environment and community. No copy here
 * implies otherwise.
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
 * until they are ready. Re-add them here when they are.
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
] as const;

/**
 * The primary CTA opens a WhatsApp conversation directly (funnel step 3).
 * "Become a member" promised more than the first message actually delivers
 * this is the start of a conversation, not a signup.
 */
export const headerCta = { label: 'Start the conversation', external: true } as const;

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
   * The funnel's primary CTA (step 2 → 3). The first
   * question Narelo asks back is "How old is your child?", so the prefilled
   * message opens on exactly that.
   */
  whatsapp: 'https://wa.me/34655366888?text=Hello%20Narelo%2C%20I%27d%20like%20to%20find%20out%20about%20membership%20for%20my%20family.',
} as const;

/**
 * ⚠️ On the Wix site these four icons were dead links, and @narelo.eu appeared
 * nowhere. Instagram is @narelo.eu; the rest need real URLs before launch.
 */
export const socialIcons = [
  { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
  { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: contact.whatsapp },
  { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
  { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
] as const;
