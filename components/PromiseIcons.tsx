/**
 * The three ringed marks the parent dossier prints above its promise cards,
 * in order: a centred point, a diamond, a small cluster. Drawn rather than
 * imported so they inherit the card's colour and stay crisp at any size.
 */
const MARKS = [
  <circle key="dot" cx="24" cy="24" r="4.5" fill="currentColor" stroke="none" />,
  <rect key="diamond" x="15.5" y="15.5" width="17" height="17" transform="rotate(45 24 24)" />,
  <g key="cluster" fill="currentColor" stroke="none">
    <circle cx="20" cy="21" r="3.6" />
    <circle cx="28.5" cy="22.5" r="2.6" />
    <circle cx="23.5" cy="28.5" r="2.6" />
  </g>,
];

export default function PromiseIcon({ index, className = '' }: { index: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" />
      {MARKS[index % MARKS.length]}
    </svg>
  );
}
