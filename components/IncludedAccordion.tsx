'use client';

import { useState } from 'react';
import Link from 'next/link';

type Item = {
  readonly title: string;
  /** The small line the dossier prints under a title, e.g. "Members only, year after year". */
  readonly meta?: string;
  readonly body?: string;
};
type Group = {
  readonly label: string;
  readonly items: readonly Item[];
  /** Where the things in this group are explained, when they are not here. */
  readonly linkLabel?: string;
  readonly linkHref?: string;
};

/**
 * What comes with membership, in two groups: what it already includes, and
 * what members can additionally book at member rates.
 *
 * The first group leads (Vivien, 2026-09-07). It used to be a quiet eyebrow
 * over collapsed rows, so the things a family actually gets were the faintest
 * part of the section and half of them were hidden behind a plus. It is a
 * panel of its own now, on the light ground, with every line open and a mark
 * against it. Nothing to click, nothing to miss.
 *
 * The second group stays quiet on purpose: those are extras, and they are
 * explained once, on the Experiences page, so here they are simply named and
 * the group carries a link across.
 *
 * Rows with a body in a later group still expand, one at a time, animating
 * grid-template-rows 0fr -> 1fr; instant under prefers-reduced-motion.
 */
export default function IncludedAccordion({ groups }: { groups: readonly Group[] }) {
  const [lead, ...rest] = groups;

  return (
    <div className="flex flex-col gap-14">
      {lead && <LeadGroup group={lead} />}
      {rest.length > 0 && <QuietGroups groups={rest} />}
    </div>
  );
}

/** The included group: a panel, everything visible, nothing to click. */
function LeadGroup({ group }: { group: Group }) {
  return (
    <div className="rounded-[2px] bg-linen p-8 shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-11 fade" data-reveal>
      <p className="eyebrow mb-2 text-olive">{group.label}</p>
      <div className="mb-9 h-px w-12 bg-olive/40" aria-hidden="true" />

      <ul className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {group.items.map((item) => (
          <li key={item.title} className="flex gap-4">
            {/* A small filled mark, so each line reads as something you have
                rather than something you might click. */}
            <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden="true" />
            <div>
              <h3 className="display text-xl text-ink md:text-2xl">{item.title}</h3>
              {item.meta && <p className="eyebrow mt-2 text-olive">{item.meta}</p>}
              {item.body && <p className="body-copy mt-3 text-ink-soft">{item.body}</p>}
            </div>
          </li>
        ))}
      </ul>

      {group.linkLabel && group.linkHref && (
        <Link href={group.linkHref} className="link-line eyebrow mt-9 inline-block text-ink">
          {group.linkLabel}
        </Link>
      )}
    </div>
  );
}

/** Everything after the first group: named quietly, expandable where there is more to say. */
function QuietGroups({ groups }: { groups: readonly Group[] }) {
  const [open, setOpen] = useState(-1);
  let index = -1;

  return (
    <div className="flex flex-col gap-12">
      {groups.map((group) => (
        <div key={group.label} className="fade" data-reveal>
          <p className="eyebrow mb-5 text-ink-soft">{group.label}</p>
          <ul className="border-t border-ink/12">
            {group.items.map((item) => {
              if (!item.body) {
                return (
                  <li key={item.title} className="border-b border-ink/12">
                    <p className="display py-6 text-xl text-ink-soft md:text-2xl">{item.title}</p>
                  </li>
                );
              }

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
                      {item.meta && <p className="eyebrow mb-4 text-olive">{item.meta}</p>}
                      <p className="body-copy max-w-xl pb-7 text-ink-soft">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {group.linkLabel && group.linkHref && (
            <Link href={group.linkHref} className="link-line eyebrow mt-6 inline-block text-ink">
              {group.linkLabel}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
