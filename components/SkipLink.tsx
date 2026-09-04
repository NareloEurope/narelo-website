'use client';

import { usePathname } from 'next/navigation';
import { content } from '@/content/dictionary';
import { langFromPath } from '@/content/locales';

/** The keyboard skip link, in the language of the page it is on. */
export default function SkipLink() {
  const lang = langFromPath(usePathname());
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-linen"
    >
      {content(lang).site.ui.skipToContent}
    </a>
  );
}
