'use client';

import { useState } from 'react';

type World = {
  readonly name: string;
  readonly short: string;
  readonly body: string;
  readonly image: string;
};

/**
 * The Five Worlds as an expanding gallery (home page only; the membership
 * flyer keeps its plain list).
 *
 * Desktop: five image panels in a row; the active one grows and reveals its
 * copy while the others narrow to a spine with a vertical label. Mobile: the
 * same idea stacked vertically. Hover previews on desktop; click/tap and
 * keyboard both set the active panel, with aria-expanded carrying the state.
 *
 * All motion is flex-grow/height/opacity transitions from globals.css easing
 * tokens. No libraries. Under prefers-reduced-motion the transitions collapse
 * to instant state changes and everything stays operable.
 */
export default function WorldsExplorer({ items }: { items: readonly World[] }) {
  const [active, setActive] = useState(0);

  return (
    <ul
      className="flex flex-col gap-2 md:h-[560px] md:flex-row md:gap-3"
      onMouseLeave={() => {
        /* keep the last active panel; a closing snap on mouse-out feels cheap */
      }}
    >
      {items.map((world, i) => {
        const isActive = i === active;
        return (
          <li
            key={world.name}
            className="relative isolate overflow-hidden rounded-[2px] max-md:transition-[height] md:transition-[flex-grow]"
            style={{
              flexGrow: isActive ? 4 : 1,
              flexBasis: 0,
              height: undefined,
              transitionDuration: '1s',
              transitionTimingFunction: 'var(--ease-in-out-quint)',
            }}
          >
            <button
              type="button"
              aria-expanded={isActive}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group block w-full overflow-hidden text-left transition-[height] duration-1000 md:h-full ${
                isActive ? 'h-[420px]' : 'h-[76px]'
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
                  isActive
                    ? 'bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10'
                    : 'bg-ink/55'
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
  );
}
