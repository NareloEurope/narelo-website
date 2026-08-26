'use client';

import { useCallback, useEffect, useState } from 'react';

type Slide = { readonly src: string; readonly n: string };

/**
 * Three-up slider with Previous/Next and an "01 / 06" counter, matching the
 * source. Clicking a slide opens a lightbox with Close / Previous / Next.
 */
export default function Gallery({ items }: { items: readonly Slide[] }) {
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((prev) => (prev === null ? prev : (prev + delta + items.length) % items.length)),
    [items.length]
  );
  const slide = (delta: number) => setStart((prev) => (prev + delta + items.length) % items.length);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  // Three consecutive slides, wrapping round.
  const visible = [0, 1, 2].map((o) => (start + o) % items.length);

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-8">
        {visible.map((idx) => (
          <li key={items[idx].src}>
            <button
              type="button"
              onClick={() => setOpen(idx)}
              className="group block w-full overflow-hidden rounded-sm"
              aria-label={`Open image ${items[idx].n} of ${items.length}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={items[idx].src}
                alt=""
                width={1536}
                height={2048}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-8">
        <button type="button" onClick={() => slide(-1)} aria-label="Previous images" className="eyebrow text-sage transition-colors hover:text-rust">
          Previous
        </button>
        <span className="eyebrow text-warm-grey" aria-live="polite">
          {items[start].n} / {String(items.length).padStart(2, '0')}
        </span>
        <button type="button" onClick={() => slide(1)} aria-label="Next images" className="eyebrow text-sage transition-colors hover:text-rust">
          Next
        </button>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt="" className="max-h-[80vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="eyebrow mt-6 text-cream/80">
            {items[open].n} / {String(items.length).padStart(2, '0')}
          </p>
          <button type="button" onClick={close} aria-label="Close" className="eyebrow absolute right-5 top-5 text-cream transition-opacity hover:opacity-70">
            Close
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous image"
            className="eyebrow absolute left-4 top-1/2 -translate-y-1/2 p-4 text-cream transition-opacity hover:opacity-70"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next image"
            className="eyebrow absolute right-4 top-1/2 -translate-y-1/2 p-4 text-cream transition-opacity hover:opacity-70"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
