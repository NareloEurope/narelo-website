/**
 * The languages the site is published in (Vivien, 2026-09-04).
 * The order here is the order the selector shows them in.
 *
 * English is the default and keeps the plain URLs: `/`, `/membership/`.
 * Spanish sits under a prefix: `/es/membership/`. Path segments stay in
 * English on purpose, so a link shared between languages still resolves and
 * nobody has to maintain several sets of routes.
 *
 * German is switched off (Vivien, 2026-09-08) and Hungarian before it
 * (2026-09-07). Both translations are finished and still in the repo, at
 * `content/de/index.ts` and `content/hu/index.ts`, and both are still checked
 * against the English shape at build time. Putting 'de' or 'hu' back in this
 * list, in LANG_META and in `content/dictionary.ts` publishes it again.
 *
 * ⚠️ The Spanish copy in `content/es/` has not been read by a native speaker.
 * It needs that pass before launch.
 */
export const LANGS = ['en', 'es'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

/**
 * Pages that exist only in English, with no translated counterpart: today
 * just /dossier/, whose source PDF has no Spanish version. Header and Footer
 * hide the language selector on these rather than link to a route that does
 * not exist.
 */
export const UNLOCALIZED_PATHS: readonly string[] = ['/dossier/'];

/**
 * Pages that render with none of the site's shared chrome, Header, Footer or
 * the floating WhatsApp action: today just /dossier/ (Vivien, 2026-09-18). It
 * is meant to feel like its own document, reachable only by link, rather than
 * a page stitched into the rest of the site, so it carries its own contact
 * details and its own single link back to the site at its close instead.
 *
 * Kept here rather than in content/site.ts: that file feeds the translated
 * dictionary, where every key needs a translation in `content/es/` (and the
 * switched-off `content/de/` and `content/hu/`), and this is routing, not copy.
 */
export const STANDALONE_PATHS: readonly string[] = ['/dossier/'];

/** The language trees that get built under a prefix. */
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

export const LANG_META: Record<Lang, { short: string; name: string; htmlLang: string; ogLocale: string }> = {
  en: { short: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
  es: { short: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
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
 * language-neutral page it is on and offer the same page in the others.
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
