/**
 * The three languages the site is published in (Vivien, 2026-09-04).
 *
 * English is the default and keeps the plain URLs: `/`, `/membership/`.
 * The other two sit under a prefix: `/es/membership/`, `/hu/membership/`.
 * Path segments stay in English on purpose, so a link shared between
 * languages still resolves and nobody has to maintain three sets of routes.
 *
 * ⚠️ The Spanish and Hungarian copy in `content/es/` and `content/hu/` has not
 * been read by a native speaker. It needs that pass before launch.
 */
export const LANGS = ['en', 'es', 'hu'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

/** The two extra language trees that get built under a prefix. */
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

export const LANG_META: Record<Lang, { short: string; name: string; htmlLang: string; ogLocale: string }> = {
  en: { short: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
  es: { short: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
  hu: { short: 'HU', name: 'Magyar', htmlLang: 'hu', ogLocale: 'hu_HU' },
};

/**
 * Turns a language-neutral path into the one for `lang`. Every internal link
 * on the site goes through this, so switching language keeps you on the page
 * you were reading. Anchors survive: `/membership/#who` keeps its `#who`.
 */
export function localePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

/**
 * Strips a language prefix back off, so the header can work out which
 * language-neutral page it is on and offer the same page in the other two.
 */
export function neutralPath(pathname: string): string {
  for (const lang of PREFIXED_LANGS) {
    if (pathname === `/${lang}` || pathname === `/${lang}/`) return '/';
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname || '/';
}

/** Which language a pathname belongs to. */
export function langFromPath(pathname: string): Lang {
  for (const lang of PREFIXED_LANGS) {
    if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) return lang;
  }
  return DEFAULT_LANG;
}

/**
 * Widens the literal types that `as const` gives the English content, so a
 * translation file can be checked against the English shape without having to
 * repeat the English words. A missing or misspelled key is a build error; a
 * different sentence is not.
 */
export type Translated<T> = T extends string
  ? string
  : T extends number | boolean | null
    ? T
    : T extends readonly (infer U)[]
      ? readonly Translated<U>[]
      : { -readonly [K in keyof T]: Translated<T[K]> };
