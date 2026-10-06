/**
 * Four thin L-shaped tick marks pinned to the corners of a positioned parent —
 * the recurring detail used across buttons, cards and frames.
 */
export default function CornerTicks({ tone = "border-foreground/25", size = "h-2 w-2" }) {
  const base = `pointer-events-none absolute ${size}`;
  return (
    <>
      <span aria-hidden className={`${base} left-0 top-0 border-l border-t ${tone}`} />
      <span aria-hidden className={`${base} right-0 top-0 border-r border-t ${tone}`} />
      <span aria-hidden className={`${base} bottom-0 left-0 border-b border-l ${tone}`} />
      <span aria-hidden className={`${base} bottom-0 right-0 border-b border-r ${tone}`} />
    </>
  );
}