import { Link } from "react-router-dom";
import PageAura from "@/components/racesense/PageAura";
import ThemeToggle from "@/components/racesense/ThemeToggle";

/** Shared chrome for the public driver pages: logo, theme control, footer. */
export default function DriverShell({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PageAura />

      <header className="relative z-10 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6 sm:px-10">
          <Link
            to="/"
            className="font-mono text-[11px] tracking-[0.28em] text-foreground dark:text-white"
          >
            [ RACESENSE ]
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/drivers"
              className="rs-label hidden transition-colors hover:text-foreground sm:block"
            >
              ALL DRIVERS
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-9 sm:px-10 sm:pt-12">
        {children}
      </div>

      <footer className="relative z-10 border-t border-border px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-primary">
            HOME
          </Link>
          <Link to="/drivers" className="transition-colors hover:text-primary">
            DRIVERS
          </Link>
          <Link to="/faq" className="transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link to="/terms" className="transition-colors hover:text-primary">
            TERMS
          </Link>
          <Link to="/privacy" className="transition-colors hover:text-primary">
            PRIVACY
          </Link>
          <a
            href="https://racesense.info"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            RACESENSE.INFO
          </a>
        </div>
      </footer>
    </main>
  );
}