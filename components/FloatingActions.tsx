'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { content } from '@/content/dictionary';
import { langFromPath } from '@/content/locales';

/**
 * A quiet pair of controls pinned to the bottom right: start a conversation,
 * and back to the top (audit, 2026-09-05, 1.2 and 1.5).
 *
 * The audit asked for both, and the persistent call to action is what lets the
 * repeated CTA blocks come out of the page: a visitor always has one within
 * reach, so the same button no longer has to appear in every section.
 *
 * Hidden until you are past the hero, so the first screen stays clean.
 *
 * On a phone it says what it is (Vivien, 2026-09-08): a bare green circle
 * left people unsure how to actually join, so below md it is a pill carrying
 * the same "Start a conversation" wording every other call to action uses,
 * and it appears sooner, just under half a screen down. On a desktop the
 * header keeps its own button in view the whole time, so there it stays the
 * quiet circle it was.
 */
export default function FloatingActions() {
  const lang = langFromPath(usePathname());
  const { contact, headerCta, ui } = content(lang).site;
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setShown(window.scrollY > window.innerHeight * 0.45);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 transition-[opacity,transform] duration-500 md:bottom-8 md:right-8 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={ui.backToTop}
        title={ui.backToTop}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-linen/95 text-ink shadow-[0_6px_20px_-10px_rgba(43,32,24,0.5)] backdrop-blur transition-colors hover:bg-linen"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M12 19V5M12 5l-6 6M12 5l6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        title={headerCta.label}
        className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-forest px-4 text-linen shadow-[0_10px_28px_-12px_rgba(43,32,24,0.7)] transition-colors hover:bg-ink md:h-14 md:w-14 md:px-0"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
        {/* The label is the point of this on a phone. On a desktop the header
            carries the same button, so it collapses back to the icon. */}
        <span className="eyebrow whitespace-nowrap !tracking-[0.1em] md:sr-only">{headerCta.label}</span>
      </a>
    </div>
  );
}
