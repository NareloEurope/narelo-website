'use client';

import { useState } from 'react';

/**
 * Hides a total behind a tap, the way an app's yearly plan shows "X€/month"
 * and leaves the actual annual charge a click away rather than beside it
 * (Vivien, 2026-09-18): the monthly figure is what a family weighs, and nothing
 * here is concealed for good, it just is not the first thing on the screen.
 */
export default function PriceReveal({
  label,
  children,
  light = false,
}: {
  label: string;
  children: React.ReactNode;
  /** For a tier set on a dark (forest) background rather than the card's own linen. */
  light?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`link-line eyebrow !tracking-normal ${light ? 'text-linen/80' : 'text-ink-soft'}`}
      >
        {open ? 'Hide the full price' : label}
      </button>
      {open && <p className={`body-copy mt-2 ${light ? 'text-linen/90' : 'text-ink-soft'}`}>{children}</p>}
    </div>
  );
}
