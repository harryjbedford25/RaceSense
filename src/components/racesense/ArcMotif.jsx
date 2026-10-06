const TILE = 96;
const RADII = [32, 64, 96];

/**
 * Repeating motif of concentric quarter-circle arches, drawn in thin strokes —
 * an ornamental backdrop only, hidden from assistive tech.
 */
export default function ArcMotif({ cols = 6, rows = 5, className = "" }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${cols * TILE} ${rows * TILE}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="xMaxYMin slice"
      className={className}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <g
            key={`${r}-${c}`}
            transform={`translate(${c * TILE} ${r * TILE})${
              (r + c) % 2 ? ` scale(-1,1) translate(${-TILE} 0)` : ""
            }`}
          >
            {RADII.map((rad) => (
              <path key={rad} d={`M0,${TILE - rad} A${rad},${rad} 0 0 1 ${rad},${TILE}`} />
            ))}
          </g>
        ))
      )}
    </svg>
  );
}