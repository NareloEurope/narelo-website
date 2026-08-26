'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Applies the source site's gentle fade-up as elements enter the viewport.
 * Any element with class `reveal` is observed. Re-runs on route change.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!els.length) return;

    // Respect reduced-motion by showing everything immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
