import { useState, useEffect } from "react";

// A thin animated line pinned to the top of the viewport that tracks scroll,
// spiking into "data peaks" near section anchors.
export default function TelemetryRibbon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // build a jagged peak path across the width
  const peaks = [0.18, 0.34, 0.52, 0.7, 0.86];
  const W = 100;
  const pts = peaks
    .map((p) => `${p * W},${progress > p ? 4 : 14}`)
    .join(" ");
  const path = `M0,12 L${pts} L${W},12`;

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-4">
      <svg
        viewBox="0 0 100 16"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path d={path} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="12" x2="100" y2="12" stroke="hsl(var(--border))" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
      </svg>
      <div
        className="absolute top-0 h-px bg-primary"
        style={{ left: 0, width: `${progress * 100}%` }}
      />
    </div>
  );
}