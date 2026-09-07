import type { Stage } from '@/content/stages';

/**
 * The seven age groups as one linear timeline: age above the rail, a mark on
 * it, the group's name below.
 *
 * This replaces the seven full-width rows the Membership page used to carry
 * (Vivien, 2026-09-07). Those rows looked like an accordion but were not one,
 * so people tried to click them, and seven of them took most of a screen to
 * say what is really just an index. Every stage is still described in full on
 * the Experiences page, and the link under this points there.
 *
 * The rail is drawn per item, a hairline either side of each mark, so it joins
 * up across the row and breaks cleanly wherever the grid wraps. No absolute
 * positioning to keep in sync.
 */
export default function StageTimeline({ items }: { items: readonly Stage[] }) {
  return (
    <ol className="reveal grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7" data-reveal>
      {items.map((stage) => (
        <li key={stage.name} className="flex flex-col items-center pb-2 text-center">
          <span className="eyebrow px-2 text-olive">{stage.age}</span>

          <span className="mt-4 flex w-full items-center" aria-hidden="true">
            <span className="h-px flex-1 bg-ink/15" />
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
            <span className="h-px flex-1 bg-ink/15" />
          </span>

          <h3 className="display mt-4 px-2 text-lg leading-snug">{stage.name}</h3>
        </li>
      ))}
    </ol>
  );
}
