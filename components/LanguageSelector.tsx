'use client';

import Link from 'next/link';
import { LANGS, LANG_META, localePath, neutralPath, type Lang } from '@/content/locales';

/**
 * Three letter-pairs with hairlines between them, sitting quietly at the end
 * of the header. Not a dropdown: with only three languages a menu is more
 * chrome than the choice deserves, and a row of links keeps every language one
 * click away and crawlable.
 *
 * Each one links to the same page in that language, so switching keeps you
 * where you were reading, anchor and all.
 */
export default function LanguageSelector({
  current,
  pathname,
  light = false,
  onDark = false,
  className = '',
}: {
  current: Lang;
  pathname: string;
  /** Over a dark hero the header runs light type, and so does this. */
  light?: boolean;
  /**
   * On a solid dark ground, the inactive links need much more than the 45%
   * they use over a photograph: at 45% on forest they are well under AA
   * (audit, 2026-09-05). 75% clears it while still reading as secondary.
   */
  onDark?: boolean;
  className?: string;
}) {
  const here = neutralPath(pathname);

  return (
    <div
      className={`flex items-center ${className}`}
      role="group"
      aria-label={LANG_META[current].name}
    >
      {LANGS.map((lang, i) => {
        const isCurrent = lang === current;
        return (
          <span key={lang} className="flex items-center">
            {i > 0 && (
              <span
                className={`mx-2 h-3 w-px ${light ? 'bg-linen/35' : 'bg-ink/20'}`}
                aria-hidden="true"
              />
            )}
            <Link
              href={localePath(lang, here)}
              hrefLang={LANG_META[lang].htmlLang}
              aria-current={isCurrent ? 'true' : undefined}
              title={LANG_META[lang].name}
              className={`text-[0.68rem] tracking-[0.12em] transition-opacity ${
                isCurrent ? 'opacity-100' : onDark ? 'opacity-75 hover:opacity-100' : 'opacity-45 hover:opacity-80'
              }`}
            >
              {LANG_META[lang].short}
              <span className="sr-only"> ({LANG_META[lang].name})</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}
