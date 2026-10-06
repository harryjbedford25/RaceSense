import Reveal from "@/components/racesense/Reveal";

/** Titled block used by every section on a driver profile. */
export default function ProfileSection({ index, title, meta, children }) {
  return (
    <Reveal className="mt-12 border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="rs-label">
          {index} — {title}
        </div>
        {meta ? (
          <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
            {meta}
          </div>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}