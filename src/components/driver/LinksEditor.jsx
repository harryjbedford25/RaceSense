import { Plus, X } from "lucide-react";
import { MAX_LINKS } from "@/lib/profileLinks";

const FIELD =
  "w-full border border-border bg-card px-3.5 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/60";

export default function LinksEditor({ links, onChange }) {
  const update = (index, key) => (event) =>
    onChange(
      links.map((link, i) => (i === index ? { ...link, [key]: event.target.value } : link))
    );

  const add = () => onChange([...links, { label: "", url: "" }]);

  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Links
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
        Socials, team page, onboard videos — up to {MAX_LINKS}.
      </p>

      {links.length ? (
        <div className="mt-3 space-y-3">
          {links.map((link, index) => (
            <div key={index} className="border border-border bg-card/60 p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  LINK {String(index + 1).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label={`Remove link ${index + 1}`}
                  onClick={() => onChange(links.filter((_, i) => i !== index))}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-destructive"
                >
                  <X className="h-3.5 w-3.5" />
                  REMOVE
                </button>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[11rem_1fr]">
                <input
                  className={FIELD}
                  value={link.label}
                  onChange={update(index, "label")}
                  placeholder="Instagram"
                  aria-label={`Link ${index + 1} label`}
                />
                <input
                  className={FIELD}
                  value={link.url}
                  onChange={update(index, "url")}
                  placeholder="instagram.com/yourhandle"
                  aria-label={`Link ${index + 1} URL`}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {links.length < MAX_LINKS ? (
        <button
          type="button"
          onClick={add}
          className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          <Plus className="h-3.5 w-3.5" />
          ADD LINK
        </button>
      ) : null}
    </div>
  );
}