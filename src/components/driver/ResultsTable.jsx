import { useState } from "react";
import ProfileSection from "@/components/driver/ProfileSection";
import {
  formatDate,
  formatGap,
  formatLapTime,
  positionLabel,
  positionTone,
} from "@/lib/driverStats";

const VISIBLE = 8;

const TONE = {
  win: "text-primary",
  podium: "text-foreground",
  finish: "text-muted-foreground",
  dnf: "text-muted-foreground",
};

export default function ResultsTable({ results }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? results : results.slice(0, VISIBLE);

  return (
    <ProfileSection index="02" title="RECENT RESULTS" meta={`${results.length} LOGGED`}>
      <ul className="border-t border-border">
        {shown.map((result, index) => {
          const lap = formatLapTime(result.best_lap_seconds);
          const gap = formatGap(result.gap_to_winner_seconds);
          const context = [result.championship, result.track, formatDate(result.date)]
            .filter(Boolean)
            .join(" · ");

          return (
            <li
              key={result.id || index}
              className="border-b border-border py-4 transition-colors hover:bg-card/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-heading text-base font-semibold leading-tight">
                    {result.event || result.championship || "Race"}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                    {context}
                  </div>
                </div>
                <span
                  className={`shrink-0 font-mono text-sm font-medium tracking-[0.04em] ${TONE[positionTone(result)]}`}
                >
                  {positionLabel(result) || "—"}
                </span>
              </div>

              {lap || gap ? (
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] tracking-[0.06em]">
                  {lap ? (
                    <span>
                      <span className="text-muted-foreground">BEST </span>
                      {lap}
                    </span>
                  ) : null}
                  {gap ? (
                    <span>
                      <span className="text-muted-foreground">GAP </span>
                      {gap}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {results.length > VISIBLE ? (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="rs-btn rs-btn-line mt-5 !px-4 !py-2.5"
        >
          {expanded ? "SHOW LESS" : `SHOW ALL ${results.length}`}
        </button>
      ) : null}
    </ProfileSection>
  );
}