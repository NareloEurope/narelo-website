'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Background video that only downloads once it is near the viewport.
 *
 * `eager` opts a hero out of that — an above-the-fold video should not wait for
 * an observer tick. Everything below the fold stays deferred, which is what
 * keeps the heavier pages from pulling 11MB before anyone has scrolled.
 */
export default function LazyVideo({
  src,
  poster,
  className = '',
  eager = false,
}: {
  src: string;
  poster: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(eager);

  useEffect(() => {
    if (load) return;
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: keep the poster frame, never fetch the clip.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  useEffect(() => {
    if (!load) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ref.current?.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      src={load ? src : undefined}
      poster={poster}
      preload={eager ? 'auto' : 'none'}
      muted
      loop
      playsInline
      // Decorative background footage; the page copy carries the meaning.
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
