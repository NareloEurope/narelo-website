'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, headerCta, site } from '@/content/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-sage/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:h-[129px] md:px-12">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/narelo-logo.webp" alt={site.name} width={796} height={341} className="h-8 w-auto md:h-10" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`font-accent text-[15px] tracking-[0.035em] text-sage transition-colors hover:text-rust ${
                isActive(item.href) ? 'underline decoration-1 underline-offset-[6px]' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={headerCta.href}
            className="eyebrow rounded-full bg-forest px-7 py-3.5 !tracking-[0.12em] text-cream transition-opacity hover:opacity-90"
          >
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`block h-px w-6 bg-sage transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-sage transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-sage transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 top-20 z-40 flex flex-col gap-2 bg-cream px-6 pt-8 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`display border-b border-sage/10 py-4 text-2xl text-sage ${isActive(item.href) ? 'text-rust' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={headerCta.href}
          className="eyebrow mt-6 rounded-full bg-forest px-7 py-4 text-center !tracking-[0.12em] text-cream"
        >
          {headerCta.label}
        </Link>
      </div>
    </header>
  );
}
