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
 * The home page says the same thing under the same heading and uses this too
 * (Vivien, 2026-09-08), so both carry the growth marks.
 *
 * The marks are a plant growing from a seed to a tree and then to the hills
 * beyond it, one step per group (StageIcons). The seventh child gets the
 * seventh mark, so reordering the stages reorders the plant with them.
 *
 * Two layouts, one set of markup:
 *
 * - Phone: one continuous line you swipe along, a stage at a time. Each stage
 *   takes a little over half the screen, which is what puts the ring of the
 *   next one just inside the right edge: the peek is the thing that says the
 *   line keeps going. Scroll snapping settles each stage into the middle
 *   after a swipe; nothing moves on its own (Vivien, 2026-09-08, replacing a
 *   two-column stack that read as a grid rather than a journey).
 * - Tablet and desktop: the same items as a grid, four across then seven,
 *   unchanged.
 *
 * The rail is drawn per item, a hairline either side of each ring, so it joins
 * up along the row however wide the row is and breaks cleanly wherever the
 * grid wraps. No absolute positioning to keep in sync, and it carries straight
 * through the scroller for free.
 */
export default function StageTimeline({
  items,
  label,
}: {
  items: readonly TimelineStage[];
  /** Names the swipeable region for screen readers and keyboard users. */
  label: string;
}) {
  return (
    <ol
      /*
       * tabIndex makes the phone scroller reachable and scrollable by keyboard
       * (audit, 2026-09-05, 4.1). The negative margin lets it run to the edges
       * of the screen inside the section's padding, so a stage can sit centred
       * with its neighbours showing; scroll-p keeps the snap honest about that
       * padding. All of it switches off at md, where it is a grid again.
       */
      tabIndex={0}
      aria-label={label}
      className="reveal -mx-6 flex snap-x snap-mandatory scroll-px-6 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-y-10 md:overflow-visible md:px-0 lg:grid-cols-7 lg:gap-y-0 [&::-webkit-scrollbar]:hidden"
      data-reveal
    >
      {items.map((stage, i) => (
        <li
          key={stage.name}
          className="flex w-[52vw] shrink-0 snap-center flex-col items-center pb-2 text-center sm:w-[34vw] md:w-auto md:shrink"
        >
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
