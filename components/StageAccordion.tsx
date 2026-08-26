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
              className="group grid w-full items-baseline gap-2 py-7 text-left md:grid-cols-[1.2fr_7rem_1.6fr_auto] md:gap-8 md:py-9"
            >
              <h3
                className={`display display-md transition-transform duration-700 ${
                  isOpen ? 'md:translate-x-2' : 'md:group-hover:translate-x-2'
                }`}
              >
                {stage.name}
              </h3>
              <span className="eyebrow text-olive">{stage.age}</span>
              <p className="body-copy max-w-md text-ink-soft">{stage.tagline}</p>
              {/* Plus that becomes a minus */}
              <span className="relative hidden h-4 w-4 shrink-0 self-center md:block" aria-hidden="true">
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
                <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-12">
                  <div className="overflow-hidden rounded-[2px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stage.image}
                      alt=""
                      width={800}
                      height={600}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-1000 ${
                        isOpen ? 'scale-100' : 'scale-110'
                      }`}
                      style={{ aspectRatio: '4 / 3', transitionTimingFunction: 'var(--ease-out-expo)' }}
                    />
                  </div>
                  <div className="max-w-lg self-center">
                    {stage.motto && <p className="display display-md mb-4 italic text-olive">{stage.motto}</p>}
                    <p className="body-copy text-ink-soft">{stage.summary}</p>
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
