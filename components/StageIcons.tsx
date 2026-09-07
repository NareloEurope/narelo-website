/**
 * A growing plant, one mark per age group (Vivien, 2026-09-07): a seed, then
 * a shoot, then leaves arriving one at a time, then a canopy filling out,
 * then the hills a Navigator walks into. Read left to right along the
 * timeline they say what the age groups say, without a word.
 *
 * Drawn rather than photographed so they take the surrounding colour and stay
 * crisp at any size. Each mark fills most of its 32x32 box on purpose: inside
 * a ring at timeline size they are only about 28px across, and a delicate
 * version of the same drawing simply disappears.
 */
const MARKS: readonly React.ReactNode[] = [
  // Bloom, a seed.
  <ellipse key="bloom" cx="16" cy="16" rx="5" ry="7" fill="currentColor" stroke="none" />,

  // Nurture, the first shoot out of the seed.
  <g key="nurture">
    <path d="M16 27V15" strokeWidth="1.8" />
    <path d="M16 15c0-5 3.5-8.5 8.5-8.5 0 5-3.5 8.5-8.5 8.5Z" fill="currentColor" stroke="none" />
  </g>,

  // The Nest, a second leaf, so it stands on its own.
  <g key="nest">
    <path d="M16 28V12" strokeWidth="1.8" />
    <path d="M16 14c0-4.5 3.2-7.5 8-7.5 0 4.5-3.2 7.5-8 7.5Z" fill="currentColor" stroke="none" />
    <path d="M16 20c0-4-3-6.5-7.5-6.5 0 4 3 6.5 7.5 6.5Z" fill="currentColor" stroke="none" />
  </g>,

  // Little Beginnings, a seedling with three leaves.
  <g key="little">
    <path d="M16 29V10" strokeWidth="1.8" />
    <path d="M16 12c0-4.5 3.2-7.5 8-7.5 0 4.5-3.2 7.5-8 7.5Z" fill="currentColor" stroke="none" />
    <path d="M16 18c0-4-3-6.5-7.5-6.5 0 4 3 6.5 7.5 6.5Z" fill="currentColor" stroke="none" />
    <path d="M16 24c0-3.5 2.6-6 6.5-6 0 3.5-2.6 6-6.5 6Z" fill="currentColor" stroke="none" />
  </g>,

  // Builders I, the canopy starting to form: two tiers.
  <g key="builders-i">
    <path d="M16 29v-9" strokeWidth="1.8" />
    <ellipse cx="16" cy="17" rx="9" ry="4" fill="currentColor" stroke="none" />
    <ellipse cx="16" cy="9.5" rx="6.5" ry="3.6" fill="currentColor" stroke="none" />
  </g>,

  // Builders II, three tiers, a tree in its own right.
  <g key="builders-ii">
    <path d="M16 30v-7" strokeWidth="1.8" />
    <ellipse cx="16" cy="20.5" rx="9.5" ry="3.8" fill="currentColor" stroke="none" />
    <ellipse cx="16" cy="14.5" rx="7.5" ry="3.4" fill="currentColor" stroke="none" />
    <ellipse cx="16" cy="8.5" rx="5" ry="3" fill="currentColor" stroke="none" />
  </g>,

  // Navigators, the hills beyond the tree line.
  <g key="navigators">
    <path d="M2 27 11 12l6.5 15z" fill="currentColor" stroke="none" />
    <path d="M13.5 27 20.5 15 30 27z" fill="currentColor" stroke="none" />
  </g>,
];

/**
 * The mark for the stage at `index`, in timeline order. Anything past the
 * seventh falls back to the last mark rather than rendering nothing, so
 * adding an age group cannot leave a hole in the row.
 */
export default function StageIcon({ index, className = '' }: { index: number; className?: string }) {
  const mark = MARKS[Math.min(index, MARKS.length - 1)];

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {mark}
    </svg>
  );
}
