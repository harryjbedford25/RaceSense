import { useState, useEffect } from "react";

// A hairline scroll-progress rule pinned to the very top of the viewport.
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

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px">
      <div className="h-px bg-primary" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}