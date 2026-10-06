import CornerTicks from "@/components/racesense/CornerTicks";
import ProfileSection from "@/components/driver/ProfileSection";
import { performanceStats, recentForm } from "@/lib/driverStats";

const TONE = {
  win: "border-primary text-primary",
  podium: "border-foreground/40 text-foreground",
  finish: "border-border text-muted-foreground",
  dnf: "border-border text-muted-foreground",
};

export default function PerformancePanel({ results }) {
  const rows = performanceStats(results);
  const form = recentForm(results);

  if (!rows.length && !form.length) return null;

  return (
    <ProfileSection index="03" title="PERFORMANCE">
      {rows.length ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="relative border border-dashed border-border px-4 py-5"
            >
              <CornerTicks />
              <div className="font-mono text-xl font-medium leading-none tracking-[-0.01em]">
                {row.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {row.label}
              </div>
              {row.note ? (
                <div className="mt-2 font-body text-xs leading-relaxed text-muted-foreground/80">
                  {row.note}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {form.length ? (
        <div className="mt-5 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Recent form
          </span>
          <div className="flex flex-wrap gap-1.5">
            {form.map((entry, index) => (
              <span
                key={`${entry.label}-${index}`}
                className={`border px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] ${TONE[entry.tone]}`}
              >
                {entry.label}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </ProfileSection>
  );
}