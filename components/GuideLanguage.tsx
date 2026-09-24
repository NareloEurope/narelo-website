'use client';

import Link from 'next/link';
import { LANGS, LANG_META, localePath, type Lang } from '@/content/locales';

/**
 * The language switch for the Family Guide (Vivien, 2026-09-24).
 *
 * The guide is standalone: no Header, so the site's own LanguageSelector
 * never renders on it. It still needs the choice, because Spanish families
 * receive the same link, so it carries its own, a quiet pair of letters at
 * the top of the cover. Same letters and same behaviour as the header's, but
 * it always links to /family-guide/, since this page has no "same page in
 * another language" beyond itself.
 *
 * Deliberately small and high up: a family who reads English should barely
 * notice it, a family who does not should find it before reading a word.
 */
export default function GuideLanguage({ current }: { current: Lang }) {
  return (
    <div
      className="flex items-center justify-center"
      role="group"
      aria-label={LANG_META[current].name}
    >
      {LANGS.map((lang, i) => {
        const isCurrent = lang === current;
        return (
          <span key={lang} className="flex items-center">
            {i > 0 && <span className="mx-2.5 h-3 w-px bg-ink/20" aria-hidden="true" />}
            <Link
              href={localePath(lang, '/family-guide/')}
              hrefLang={LANG_META[lang].htmlLang}
              aria-current={isCurrent ? 'true' : undefined}
              title={LANG_META[lang].name}
              className={`text-[0.68rem] tracking-[0.12em] text-ink transition-opacity ${
                isCurrent ? 'opacity-100' : 'opacity-45 hover:opacity-80'
              }`}
            >
              {LANG_META[lang].short}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
