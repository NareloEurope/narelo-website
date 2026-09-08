/**
 * Every word on the site, in every language, behind one lookup.
 *
 * The English files in `content/` stay exactly as they were and remain the
 * source of truth: they are what the Narelo team edits. This file gathers them
 * into `en`, derives the shape from it, and adds the translations, which live
 * in `content/es/` under the same shape.
 *
 * Because `Dict` is derived from the English, a translation that misses a key
 * or misspells one fails the build. A translation that says something
 * different, which is the whole point, does not.
 *
 * ⚠️ The Spanish copy has not been read by a native speaker. It needs that
 * pass before launch.
 */
import * as community from './community';
import * as experiences from './experiences';
import * as home from './home';
import * as membership from './membership';
import * as pages from './pages';
import * as site from './site';
import * as stages from './stages';

import type { Lang, Translated } from './locales';

export const en = { community, experiences, home, membership, pages, site, stages };

export type Dict = Translated<typeof en>;

import { es } from './es';

/*
 * German is switched off (Vivien, 2026-09-08), Hungarian before it
 * (2026-09-07). `content/de/index.ts` and `content/hu/index.ts` are still in
 * the repo and still type-checked against the English shape, they are simply
 * not published. Re-import one here and add its code back to LANGS and
 * LANG_META in content/locales.ts to bring it back.
 */
export const dict: Record<Lang, Dict> = { en, es };

/** Everything for one language, in one call. */
export function content(lang: Lang): Dict {
  return dict[lang];
}
