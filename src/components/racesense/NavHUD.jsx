import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import ThemeToggle from "@/components/racesense/ThemeToggle";

const LINKS = [
  { label: "INTRO", href: "#hero" },
  { label: "FEATURES", href: "#capabilities" },
  { label: "APP", href: "#app" },
  { label: "ABOUT", href: "#about" },
  { label: "AUDIO", href: "#audio" },
  { label: "STANDINGS", href: "#leaderboard" },
];

function useActiveSection() {
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

  return active;
}

export default function NavHUD() {
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:gap-6 sm:px-10">
        <a href="#hero" className="shrink-0 whitespace-nowrap font-mono text-[10px] tracking-[0.16em] text-foreground dark:text-white sm:text-[11px] sm:tracking-[0.28em]">
          [ RACESENSE ]
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className={`relative py-1 font-mono text-[10px] tracking-[0.2em] transition-colors ${
            active === l.href ?
            "text-foreground" :
            "text-muted-foreground hover:text-foreground"}`
            }>
            
              {l.label}
              {active === l.href &&
            <span aria-hidden className="absolute inset-x-0 -bottom-px h-px bg-primary" />
            }
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://instagram.com/race.sense.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RaceSense on Instagram"
            title="Instagram"
            className="grid h-8 w-8 shrink-0 place-items-center border border-border text-foreground transition-colors hover:border-foreground/60 sm:h-9 sm:w-9">
            
            <Instagram className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <a href="#finish" className="rs-btn rs-btn-fill whitespace-nowrap !px-3 !py-2.5 !text-[10px] sm:!px-4 sm:!text-[11px]">
            GET APP
          </a>
        </div>
      </div>

    </header>);

}