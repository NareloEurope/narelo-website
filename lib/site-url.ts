/** The production origin. Set NEXT_PUBLIC_SITE_URL once the domain is chosen. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://narelo.es').replace(/\/$/, '');
