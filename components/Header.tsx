'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, headerCta, site, contact } from '@/content/site';

/**
 * Sits transparently over a page's hero and resolves into a solid bar once you
 * scroll past it. A page with a dark photographic hero marks it `data-hero-dark`,
 * which flips this to light type for as long as it sits over that hero.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  /**
   * Pages whose hero is a dark image render `data-hero-dark`, which flips the
   * header to light type while it sits over that hero. Without this the nav is
   * unreadable on a bright photograph.
   */
  const [overDarkHero, setOverDarkHero] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOverDarkHero(Boolean(document.querySelector('[data-hero-dark]')));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 40);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);
  // Light type only while transparent over a dark hero and not in the drawer.
  const light = overDarkHero && !scrolled && !open;

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding,color] duration-700 ${
        scrolled || open
          ? 'border-b border-ink/10 bg-linen/92 py-3 text-ink backdrop-blur-md'
          : 'border-b border-transparent py-6'
      } ${light ? 'text-linen' : 'text-ink'}`}
    >
      {/* Scrim so the bar always has something to sit on over a photograph. */}
      {light && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/55 to-transparent"
          aria-hidden="true"
        />
      )}
      <div className="mx-auto flex max-w-[1560px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label={`${site.name}, home`} className="relative z-10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/narelo-logo.webp"
            alt={site.name}
            width={796}
            height={341}
            className={`h-7 w-auto transition-[filter] duration-700 md:h-8 ${
              light ? '[filter:invert(1)_brightness(2)]' : ''
            }`}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className="group relative text-[0.82rem] font-light tracking-[0.06em] transition-opacity hover:opacity-70"
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                aria-hidden="true"
              />
            </Link>
          ))}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className={`btn !px-7 !py-3 !text-[0.68rem] ${light ? 'btn-ghost text-linen' : 'btn-solid'}`}
          >
            {headerCta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-10 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      </header>

      {/*
       * Rendered as a sibling of <header>, not inside it: the header carries
       * backdrop-blur when open, and a backdrop-filter makes an element a
       * containing block for fixed descendants, which collapsed this drawer
       * to the header's own height. z-45 sits above the page's sticky chapter
       * nav (z-40) but under the header bar (z-50), so the logo and close button
       * stay on top.
       */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-[45] flex flex-col justify-center bg-linen px-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display display-md border-b border-ink/10 py-5 text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid mt-10 w-full">
          {headerCta.label}
        </a>
      </div>
    </>
  );
}
