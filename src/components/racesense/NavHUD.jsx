import { useState, useEffect } from "react";

const LINKS = [
  { label: "INTRO", href: "#hero" },
  { label: "FEATURES", href: "#capabilities" },
  { label: "APP", href: "#app" },
  { label: "AUDIO", href: "#audio" },
];

export default function NavHUD() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 sm:pb-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-none border border-primary/30 bg-background/80 px-1.5 py-2 backdrop-blur-md sm:gap-2 sm:px-3">
        <a
          href="https://racesense.info"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden px-2 font-mono text-[10px] tracking-[0.2em] text-primary transition-opacity hover:opacity-70 sm:inline"
        >
          RACESENSE
        </a>
        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`relative px-2 py-1.5 font-mono text-[9px] tracking-[0.12em] transition-colors duration-150 sm:px-3 sm:text-[11px] sm:tracking-[0.2em] ${
              active === l.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === l.href && (
              <span className="absolute left-0 top-0 h-px w-full bg-primary" />
            )}
            {l.label}
          </a>
        ))}
        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
        <a
          href="#finish"
          className="bg-primary px-2.5 py-1.5 font-mono text-[9px] font-bold tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-80 sm:px-3 sm:text-[11px] sm:tracking-[0.2em]"
        >
          GET APP
        </a>
      </div>
    </nav>
  );
}