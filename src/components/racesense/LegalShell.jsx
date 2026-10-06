import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageAura from "@/components/racesense/PageAura";
import ThemeToggle from "@/components/racesense/ThemeToggle";

const LINKS = [
  { label: "FAQ", to: "/faq" },
  { label: "TERMS", to: "/terms" },
  { label: "PRIVACY", to: "/privacy" },
];

export default function LegalShell({ label, title, updated, children }) {
  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-background text-foreground">
      <PageAura />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-6 py-4 sm:px-10">
            <Link
              to="/"
              className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              RACESENSE
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden gap-4 font-mono text-[10px] tracking-[0.2em] sm:flex">
                {LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20">
          <div className="max-w-3xl">
            <div className="rs-label">{label}</div>
            <h1 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
              {title}
            </h1>
            {updated && (
              <div className="mt-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                LAST UPDATED {updated}
              </div>
            )}
            <div className="mt-10">{children}</div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <a
              href="https://racesense.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              RACESENSE.INFO
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}