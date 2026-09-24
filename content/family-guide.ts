/**
 * The Family Guide's own words, in every language it is published in.
 *
 * The page shares most of its copy with the rest of the site and reads that
 * from `content/dictionary.ts` like any other page. What lives here is only
 * what exists nowhere else: the guide's chapter headings, its view on
 * childhood, what makes Narelo different, and the price cards.
 *
 * Those strings are deliberately outside the site dictionary. The dictionary
 * derives its shape from the English content files and requires a
 * translation of every key in `content/es/`, `content/de/` and `content/hu/`;
 * German and Hungarian are switched off and unread, and there is no reason to
 * carry two unread translations of a page nobody can reach in those
 * languages. This file keeps the same build-time guarantee for the languages
 * the guide is actually published in: `FamilyGuide` is derived from the
 * English, so a Spanish translation that misses or misspells a key fails the
 * build, while one that says something different, which is the whole point,
 * does not.
 *
 * ⚠️ The Spanish here has not been read by a native speaker. See the note at
 * the top of `content/es/family-guide.ts`.
 */
import * as en from './dossier';
import { es } from './es/family-guide';
import type { Lang, Translated } from './locales';

export type FamilyGuide = Translated<typeof en>;

const guides: Record<Lang, FamilyGuide> = { en, es };

/** The guide's own words for one language, in one call. */
export function familyGuide(lang: Lang): FamilyGuide {
  return guides[lang];
}
