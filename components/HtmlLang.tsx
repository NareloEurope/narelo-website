'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { langFromPath, LANG_META } from '@/content/locales';

/**
 * Keeps `<html lang>` in step with the page you are on.
 *
 * The site is one static export with a single root layout, so the served HTML
 * always ships `lang="en"`. This corrects it in the browser, which is what
 * screen readers and the browser's own translation prompt read. Search engines
 * are told the truth a second way, through the hreflang set in lib/metadata.
 *
 * ⚠️ Getting it right in the served HTML too would mean giving each language
 * its own root layout, which is a bigger change than this one. Worth doing
 * before launch if the site is going to be indexed in three languages.
 */
export default function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = LANG_META[langFromPath(pathname)].htmlLang;
  }, [pathname]);

  return null;
}
