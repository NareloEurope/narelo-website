'use client';

import { useState } from 'react';

type Item = { readonly title: string; readonly body: string };
type Group = { readonly label: string; readonly items: readonly Item[] };

/**
 * The What's Included list as expandable rows, grouped so it stays honest:
 * a group of things membership includes, and a group available to members at
 * member rates. The group labels carry that distinction quietly; the rows
 * themselves stay identical in weight.
 *
 * One row open at a time across both groups; the very first is open by
 * default so the pattern explains itself. Expansion animates
 * grid-template-rows 0fr -> 1fr; instant under prefers-reduced-motion.
 */
export default function IncludedAccordion({ groups }: { groups: readonly Group[] }) {
  const [open, setOpen] = useState(0);
  let index = -1;

  return (
    <div className="flex flex-col gap-12">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="eyebrow mb-5 text-ink-soft">{group.label}</p>
          <ul className="border-t border-ink/12">
            {group.items.map((item) => {
              index += 1;
              const i = index;
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
        </div>
      ))}
    </div>
  );
}
