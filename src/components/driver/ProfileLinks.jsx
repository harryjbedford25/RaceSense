import { Link2 } from "lucide-react";
import { linkLabel } from "@/lib/profileLinks";

export default function ProfileLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={`${link.url}-${link.label}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
        >
          <Link2 className="h-3.5 w-3.5" />
          {linkLabel(link).toUpperCase()}
        </a>
      ))}
    </div>
  );
}