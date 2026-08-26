'use client';

import { useState } from 'react';
import type { Stage } from '@/content/stages';

/**
 * The seven age-group stages as expandable rows. The closed row is the same
 * hairline list as before (name / age / tagline, plus affordance); opening a
 * row reveals the stage photo and a short summary of what to expect, per the
 * stage briefs. One row open at a time; none open initially so the seven-row
 * list stays scannable.
 *
 * Expansion animates grid-template-rows 0fr -> 1fr (no measured heights);
 * collapses to instant state changes under prefers-reduced-motion.
 */
export default function StageAccordion({ items }: { items: readonly Stage[] }) {
  const [open, setOpen] = useState(-1);

  return (
    <ol className="border-t border-ink/12">
      {items.map((stage, i) => {
        const isOpen = i === open;
        return (
          <li key={stage.name} className="border-b border-ink/12">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 text-left md:grid-cols-[1.2fr_7rem_1.6fr_auto] md:gap-8 md:py-9"
            >
              <h3
                className={`display display-md col-start-1 transition-transform duration-700 ${
                  isOpen ? 'md:translate-x-2' : 'md:group-hover:translate-x-2'
                }`}
              >
                {stage.name}
              </h3>
              <span className="eyebrow col-start-1 text-olive md:col-start-2">{stage.age}</span>
              <p className="body-copy col-start-1 max-w-md text-ink-soft md:col-start-3">{stage.tagline}</p>
              {/*
               * Plus that becomes a minus. Visible at every width: on mobile it
               * shares the top row with the name, since without it nothing said
               * the row could be opened.
               */}
              <span
                className="relative col-start-2 row-start-1 h-4 w-4 shrink-0 self-center md:col-start-4"
                aria-hidden="true"
              >
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
                {/*
                 * The open state is one composed panel rather than a floating
                 * photo: shell ground, copy on the left, the stage photo
                 * filling the panel's full right edge.
                 */}
                <div className="mb-10 grid overflow-hidden rounded-[2px] bg-shell md:grid-cols-[1fr_minmax(0,380px)]">
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <span className="eyebrow mb-6 text-olive">{stage.age}</span>
                    {stage.motto && <p className="display display-md mb-5 italic text-olive">{stage.motto}</p>}
                    <p className="body-copy max-w-md text-ink-soft">{stage.summary}</p>

                    {stage.whatToExpect && (
                      <div className="mt-8 border-t border-ink/12 pt-7">
                        <p className="eyebrow mb-4 text-olive">What to expect</p>
                        <ul className="flex flex-col gap-2.5">
                          {stage.whatToExpect.map((point) => (
                            <li key={point} className="body-copy flex gap-3 text-ink-soft">
                              <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="relative order-first min-h-[260px] md:order-none md:min-h-[320px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stage.image}
                      alt=""
                      width={900}
                      height={1200}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${
                        isOpen ? 'scale-100' : 'scale-110'
                      }`}
                      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
