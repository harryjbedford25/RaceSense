import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "INTRO", href: "#hero" },
  { label: "FEATURES", href: "#capabilities" },
  { label: "APP", href: "#app" },
  { label: "AUDIO", href: "#audio" },
];

const LEGAL_LINKS = [
  { label: "FAQ", href: "#/faq" },
  { label: "Privacy", href: "#/privacy" },
  { label: "Terms", href: "#/terms" },
];

export default function NavHUD() {
  const [active, setActive] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="font-mono text-sm tracking-[0.2em] text-primary font-bold"
          >
            RACESENSE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono text-xs tracking-[0.15em] transition-colors ${
                  active === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#finish"
              className="bg-primary px-4 py-2 font-mono text-xs font-bold tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              GET APP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-xs tracking-[0.15em] transition-colors ${
                    active === l.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#finish"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary px-4 py-2 font-mono text-xs font-bold tracking-[0.15em] text-primary-foreground text-center transition-opacity hover:opacity-90"
              >
                GET APP
              </a>
              <div className="border-t border-border pt-4 mt-2">
                {LEGAL_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-mono text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground py-2"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Legal Links */}
      <div className="hidden md:block border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-end gap-6">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}