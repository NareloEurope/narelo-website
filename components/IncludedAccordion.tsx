'use client';

import { useState } from 'react';

type Item = { readonly title: string; readonly body: string };

/**
 * The What's Included list as expandable rows: title lines with a plus that
 * rotates open to reveal the detail. One row open at a time, first open by
 * default so the pattern is self-explanatory.
 *
 * Expansion animates grid-template-rows 0fr -> 1fr, so no heights are measured
 * and the motion stays smooth at any content length. Collapses to instant
 * state changes under prefers-reduced-motion via the global override.
 */
export default function IncludedAccordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-ink/12">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <li key={item.title} className="border-b border-ink/12">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={`display text-xl transition-[transform,color] duration-500 md:text-2xl ${
                  isOpen ? 'translate-x-1 text-ink' : 'text-ink-soft group-hover:text-ink'
                }`}
              >
                {item.title}
              </span>
              {/* Plus that becomes a minus */}
              <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink transition-transform duration-500 ${
                    isOpen ? 'scale-y-0' : 'scale-y-100'
                  }`}
                />
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-700"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transitionTimingFunction: 'var(--ease-in-out-quint)',
              }}
            >
              <div className="overflow-hidden">
                <p className="body-copy max-w-xl pb-7 text-ink-soft">{item.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
