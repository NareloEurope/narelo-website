'use client';

import { useEffect, useState } from 'react';

/**
 * A person's portrait, tappable to see it larger (Vivien, 2026-09-07). The
 * photographs on the Membership page are deliberately small so the writing
 * leads, which left no way to actually look at the person; this gives one
 * back without making the page a gallery again.
 *
 * The larger view is a plain overlay: click anywhere or press Escape to close,
 * and the page behind it stops scrolling while it is open. Focus returns to
 * the portrait on close, so keyboard users are not dropped at the top of the
 * page.
 */
export default function Portrait({
  src,
  name,
  closeLabel,
  className = '',
}: {
  src: string;
  name: string;
  /** Translated label for the close control, from content/site.ts `ui`. */
  closeLabel: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`img-settle group block shrink-0 overflow-hidden rounded-[2px] ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          width={1086}
          height={1448}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-6 backdrop-blur-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={name}
            width={1086}
            height={1448}
            className="max-h-[86svh] w-auto max-w-[min(90vw,30rem)] rounded-[2px] object-contain shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
          />
          <button
            type="button"
            autoFocus
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-linen/30 text-linen transition-colors hover:bg-linen/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
