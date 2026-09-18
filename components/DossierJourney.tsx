'use client';

import { useState } from 'react';
import StageIcon from '@/components/StageIcons';
import type { Stage } from '@/content/stages';

/**
 * The age-group list as the dossier draws it, made tappable (Vivien,
 * 2026-09-19): a ringed mark and a connecting line down the left, name and
 * age on each row, and now a small card that opens under a row on tap,
 * carrying the same summary, motto and "what to expect" bullets already on
 * the Experiences page's StageAccordion, plus the membership-includes
 * bullets from further down this page, so a family sees both what a
 * session for that age actually holds and what membership itself includes
 * without leaving the row (Vivien, 2026-09-19). Nothing here is written
 * twice by hand: `includedItems` is passed down from the same
 * `included.groups[0].items` the "Becoming part of Narelo" section already
 * renders in full via IncludedPanels.
 *
 * One row open at a time, the same as StageAccordion. Bloom has no motto or
 * "what to expect" list in content/stages.ts (it has no brief yet, AGENTS.md),
 * so its card carries the summary and the membership bullets only, exactly
 * as StageAccordion already handles the missing fields elsewhere.
 */
export default function DossierJourney({
  stages,
  whatToExpectLabel,
  includedLabel,
  includedItems,
}: {
  stages: readonly Stage[];
  whatToExpectLabel: string;
  includedLabel: string;
  includedItems: readonly { readonly title: string }[];
}) {
  const [open, setOpen] = useState(-1);

  return (
    <ol className="relative mx-auto max-w-md">
      <div className="absolute left-6 top-6 bottom-6 w-px bg-olive/25" aria-hidden="true" />
      {stages.map((stage, i) => {
        const isOpen = i === open;
        return (
          <li key={stage.name}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="relative flex w-full items-center gap-5 py-3 text-left"
            >
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-linen transition-colors ${
                  isOpen ? 'border-olive text-olive' : 'border-olive/45 text-olive'
                }`}
              >
                <StageIcon index={i} className="h-6 w-6" />
              </span>
              <span className="display display-md flex-1 leading-snug">{stage.name}</span>
              {/* "0–1 year", "1–2 years", as content/stages.ts spells it. A first
                  pass dropped the word to match the PDF's compact list, but a
                  bare "0–1" did not read clearly as an age (Vivien, 2026-09-19). */}
              <span className="eyebrow text-ink-soft">{stage.age}</span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-500"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', transitionTimingFunction: 'var(--ease-in-out-quint)' }}
            >
              <div className="overflow-hidden">
                {/* Denser than a first pass (Vivien, 2026-09-19, twice over):
                    the motto is a small italic line now, well below body
                    size, not a heading competing with the stage name above
                    it, and the summary is `shortSummary`, a genuinely
                    shorter rewrite for this card rather than the Experiences
                    page's fuller paragraph, kept at the same facts. */}
                <div className="mb-4 ml-[4.25rem] rounded-[2px] bg-shell p-5">
                  {stage.motto && <p className="mb-2 text-sm italic leading-snug text-olive">{stage.motto}</p>}
                  <p className="body-copy text-sm text-ink-soft">{stage.shortSummary ?? stage.summary}</p>
                  {stage.whatToExpect && (
                    <div className="mt-4 border-t border-ink/12 pt-4">
                      <p className="eyebrow mb-2 text-olive">{whatToExpectLabel}</p>
                      <ul className="flex flex-col gap-1.5">
                        {stage.whatToExpect.map((point) => (
                          <li key={point} className="body-copy flex gap-3 text-sm text-ink-soft">
                            <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 border-t border-ink/12 pt-4">
                    <p className="eyebrow mb-2 text-olive">{includedLabel}</p>
                    <ul className="flex flex-col gap-1.5">
                      {includedItems.map((item) => (
                        <li key={item.title} className="body-copy flex gap-3 text-sm text-ink-soft">
                          <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                          <span>{item.title}</span>
                        </li>
                      ))}
                    </ul>
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
