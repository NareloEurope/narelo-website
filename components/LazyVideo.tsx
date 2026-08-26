'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Background video that only downloads once it is near the viewport.
 *
 * The source autoplays every band immediately, which on the Membership page
 * alone pulls 11MB before a visitor has scrolled to it. Deferring the fetch
 * changes nothing visually — the poster frame holds the space and the clip
 * starts playing as it comes into view.
 */
export default function LazyVideo({
  src,
  poster,
  className = '',
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: keep the poster, never fetch the clip.
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
  }, []);

  useEffect(() => {
    if (load) ref.current?.play().catch(() => {});
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      src={load ? src : undefined}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      // Decorative background footage; page copy carries the meaning.
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
