'use client';

import { useEffect, useRef, useState } from 'react';

type World = {
  readonly name: string;
  readonly short: string;
  readonly body: string;
  readonly image: string;
};

/**
 * The Five Worlds as a scroll-driven gallery (home page only; the membership
 * flyer keeps its plain list).
 *
 * Desktop: the panel row pins to the viewport while its tall wrapper scrolls,
 * and scroll progress advances the active world one by one, so the reader
 * walks through all five on the way down the page. Clicking a panel still
 * jumps to it.
 *
 * Mobile: no pinning. A tall pinned block would fight the thumb on a phone,
 * so panels become a tap-to-expand stack instead, which is the natural touch
 * equivalent of the same motion.
 *
 * All transitions are flex-grow/height/opacity from globals.css easing tokens;
 * the scroll listener is rAF-throttled. Under prefers-reduced-motion the
 * transitions collapse to instant state changes and everything stays operable.
 */
export default function WorldsExplorer({ items }: { items: readonly World[] }) {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Scroll-driving only where the panel actually pins (md and up).
    const mq = window.matchMedia('(min-width: 768px)');
    let frame = 0;

    const onScroll = () => {
      if (frame || !mq.matches) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = wrap.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
        // Hold each world for an equal slice of the scroll.
        setActive(Math.min(items.length - 1, Math.floor(progress * items.length)));
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <div ref={wrapRef} className="md:h-[320vh]">
      <div className="md:sticky md:top-[calc(50vh-280px)]">
        <ul className="flex flex-col gap-2 md:h-[560px] md:flex-row md:gap-3">
          {items.map((world, i) => {
            const isActive = i === active;
            return (
              <li
                key={world.name}
                className="relative isolate overflow-hidden rounded-[2px] md:transition-[flex-grow]"
                style={{
                  flexGrow: isActive ? 4 : 1,
                  flexBasis: 0,
                  transitionDuration: '1s',
                  transitionTimingFunction: 'var(--ease-in-out-quint)',
                }}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActive(i)}
                  className={`group block w-full overflow-hidden text-left transition-[height] duration-1000 md:h-full ${
                    isActive ? 'h-[400px]' : 'h-[68px]'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-in-out-quint)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={world.image}
                    alt=""
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={`absolute inset-0 -z-10 h-full w-full object-cover transition-[transform,filter,opacity] duration-1000 ${
                      isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-70 grayscale-[35%]'
                    }`}
                    style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
                  />
                  <div
                    className={`absolute inset-0 -z-10 transition-opacity duration-700 ${
                      isActive ? 'bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10' : 'bg-ink/55'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Collapsed spine label: horizontal on mobile, vertical on desktop. */}
                  <span
                    className={`absolute inset-0 flex items-center px-6 transition-opacity duration-500 md:items-end md:px-0 md:pb-8 ${
                      isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                  >
                    <span className="flex w-full items-center justify-between md:justify-center">
                      <span className="display text-xl text-linen md:hidden">{world.name}</span>
                      <span className="eyebrow text-linen/80 md:hidden">{world.short}</span>
                      <span className="display hidden whitespace-nowrap text-2xl text-linen md:block md:[writing-mode:vertical-rl] md:rotate-180">
                        {world.name}
                      </span>
                    </span>
                  </span>

                  {/* Expanded content */}
                  <span
                    className={`absolute inset-x-0 bottom-0 block p-7 transition-[opacity,transform] duration-700 md:p-9 ${
                      isActive ? 'translate-y-0 opacity-100 delay-300' : 'pointer-events-none translate-y-4 opacity-0'
                    }`}
                    style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
                  >
                    <span className="eyebrow mb-3 block text-linen/70">{`0${i + 1}`}</span>
                    <span className="display display-md block text-linen">{world.name}</span>
                    <span className="body-copy mt-4 block max-w-md text-linen/85">{world.body}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Progress dots, desktop only: which of the five the scroll is on. */}
        <div className="mt-6 hidden justify-center gap-2.5 md:flex" aria-hidden="true">
          {items.map((world, i) => (
            <span
              key={world.name}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-linen' : 'w-1.5 bg-linen/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
