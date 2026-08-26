/**
 * Global site content: navigation, header, footer, contact details.
 *
 * All copy is transcribed from the live Wix site
 * (https://mercedescgalera.wixsite.com/narelo, crawled 2026-08-26).
 * Deviations from the source are marked `MIGRATION FIX` and logged in
 * MIGRATION-AUDIT.md §11.
 */

export const site = {
  name: 'Narelo',
  /** Wix served every page as lang="es" despite 100% English copy. */
  locale: 'en',
  location: 'Marbella, Spain',
  /** MIGRATION FIX (audit §7B #8): Wix footer read "Todos los derechos reservados." */
  copyright: '© 2026 Narelo. All rights reserved.',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Membership', href: '/membership' },
  { label: 'Community', href: '/community' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
] as const;

export const headerCta = {
  label: 'BECOME A MEMBER',
  /** MIGRATION FIX (audit §7E #20): inert <button> on Wix. Approved to point at /contact. */
  href: '/contact',
} as const;

export const contact = {
  visitLabel: 'Visit Us',
  visitName: 'Narelo, Marbella',
  visitNote: 'By appointment only. We’d love to welcome you.',
  emailLabel: 'Email us',
  email: 'hello@narelo.es',
  phoneLabel: 'call or whatsapp',
  phone: '+34 655 366 888',
  /** Wix rendered these as plain text. Linked here so mobile can act on them. */
  phoneHref: 'tel:+34655366888',
  emailHref: 'mailto:hello@narelo.es',
} as const;

/**
 * Footer social icons, in source order, rendered ~55px on the live site.
 *
 * ⚠️ On Wix these are plain images with NO links (verified — every one has a
 * null href), so all four are dead. Reproduced unlinked to match the source;
 * see MIGRATION-AUDIT.md §7E #29. Supply the real profile URLs and set `href`
 * to make them work — Narelo's Instagram is @narelo.eu.
 */
export const socialIcons = [
  { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: null },
  { src: '/images/social-instagram.webp', label: 'Instagram', href: null },
  { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
  { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
] as const;
