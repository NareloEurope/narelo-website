import StageIcon from '@/components/StageIcons';

/** All this needs of a stage. The home page passes a shorter object than
 *  content/stages.ts does, so it is typed to the two fields it reads. */
type TimelineStage = { readonly name: string; readonly age: string };

/**
 * The seven age groups as one linear timeline: a ringed mark on the rail, the
 * group's name below it, the age under that.
 *
 * This replaces the seven full-width rows the Membership page used to carry
 * (Vivien, 2026-09-07). Those rows looked like an accordion but were not one,
 * so people tried to click them, and seven of them took most of a screen to
 * say what is really just an index. Every stage is still described in full on
 * the Experiences page, and the link under this points there.
 *
 * The home page says the same thing under the same heading and had its own
 * timeline: plain hollow dots on a rail 880px wide, which on a phone became a
 * sideways scroll. It uses this one now (Vivien, 2026-09-08), so both carry
 * the growth marks and neither scrolls sideways.
 *
 * The marks are a plant growing from a seed to a tree and then to the hills
 * beyond it, one step per group (StageIcons). The seventh child gets the
 * seventh mark, so reordering the stages reorders the plant with them.
 *
 * The rail is drawn per item, a hairline either side of each ring, so it
 * joins up across the row and breaks cleanly wherever the grid wraps. No
 * absolute positioning to keep in sync.
 */
export default function StageTimeline({ items }: { items: readonly TimelineStage[] }) {
  return (
    <ol className="reveal grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0" data-reveal>
      {items.map((stage, i) => (
        <li key={stage.name} className="flex flex-col items-center pb-2 text-center">
          <span className="flex w-full items-center">
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-olive/45 text-olive">
              <StageIcon index={i} className="h-7 w-7" />
            </span>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
          </span>

          <h3 className="display mt-4 px-2 text-lg leading-snug">{stage.name}</h3>
          <span className="eyebrow mt-2 px-2 text-olive">{stage.age}</span>
        </li>
      ))}
    </ol>
  );
}
