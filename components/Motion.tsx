'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * The site's motion runtime. Two jobs:
 *
 *  1. Add `.is-in` to anything marked `[data-reveal]` as it enters the viewport,
 *     which triggers the CSS transitions in globals.css.
 *  2. Drive `.parallax` elements from a single rAF-throttled scroll listener.
 *
 * Deliberately dependency-free. A scroll library would cost more than every
 * image on the page now does, and none of this needs one.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reduced) {
      revealEls.forEach((el) => el.classList.add('is-in'));
      return;
    }

    // Stagger index for children, so one wrapper animates its items in sequence.
    revealEls.forEach((el) => {
      if (el.classList.contains('reveal') || el.dataset.reveal === 'stagger') {
        Array.from(el.children).forEach((child, i) =>
          (child as HTMLElement).style.setProperty('--i', String(i))
        );
      }
      el.querySelectorAll<HTMLElement>('.mask-line > span').forEach((span, i) =>
        span.style.setProperty('--i', String(i))
      );
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      // Fire slightly before the element is fully on screen so motion feels
      // like it belongs to the scroll rather than lagging behind it.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    // ---- Parallax ----
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('.parallax'));
    let frame = 0;

    const apply = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const speed = Number(el.dataset.speed ?? 0.12);
        // -1 above the fold, 0 centred, 1 below — keeps drift symmetrical.
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(progress * speed * 100).toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    if (parallaxEls.length) {
      apply();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
    }

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
