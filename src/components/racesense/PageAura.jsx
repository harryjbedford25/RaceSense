// One continuous backdrop behind every section, so the page reads as a single
// surface instead of stacked blocks.
export default function PageAura() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="rs-wash absolute inset-0" />
      <div className="rs-rules absolute inset-0 opacity-60" />
    </div>
  );
}