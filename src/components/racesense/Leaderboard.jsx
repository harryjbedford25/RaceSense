import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";
import LeaderboardRow, { GRID_COLS } from "@/components/racesense/LeaderboardRow";
import { listAllResults, listDrivers } from "@/lib/driverData";
import { buildStandings } from "@/lib/driverStats";
import { cn } from "@/lib/utils";

const HEADINGS = ["#", "DRIVER", "RACES", "WINS", "PODIUMS", "WIN RATE", "PTS"];

export default function Leaderboard() {
  const [drivers, setDrivers] = useState([]);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    Promise.all([listDrivers(), listAllResults()])
      .then(([driverRows, resultRows]) => {
        if (cancelled) return;
        setDrivers(driverRows);
        setResults(resultRows);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const standings = useMemo(
    () => (status === "ready" ? buildStandings(drivers, results) : []),
    [status, drivers, results]
  );

  return (
    <section id="leaderboard" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="rs-label hidden sm:block">// 07 — LEADERBOARD</div>
            <h2 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
              Drivers on the clock.
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
              Every logged race counts towards the standings. Open any driver to see their
              results, best laps and links.
            </p>
          </div>
          <Link to="/drivers" className="rs-btn rs-btn-line w-full shrink-0 sm:w-auto">
            ALL DRIVERS <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={120} className="mt-6 sm:mt-8">
          {status === "loading" ? (
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
              LOADING STANDINGS…
            </p>
          ) : status === "error" ? (
            <p className="border border-dashed border-border px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
              STANDINGS DIDN'T LOAD — RELOAD TO TRY AGAIN
            </p>
          ) : standings.length ? (
            <>
              <div className="relative">
                <CornerTicks tone="border-border" />
                <div className={cn("grid items-center gap-3 border-b border-border px-1 pb-2.5", GRID_COLS)}>
                  {HEADINGS.map((heading, index) => (
                    <span
                      key={heading}
                      className={cn(
                        "rs-label",
                        index > 1 && index < HEADINGS.length - 1 ? "hidden sm:block" : null,
                        index === HEADINGS.length - 1 ? "text-right" : null
                      )}
                    >
                      {heading}
                    </span>
                  ))}
                </div>

                {standings.map((row, index) => (
                  <LeaderboardRow key={row.driver.id} rank={index + 1} row={row} />
                ))}
              </div>

              <p className="mt-4 max-w-xl font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
                25-18-15-12-10-8-6-4-2-1 POINTS FOR A TOP-TEN FINISH
              </p>
            </>
          ) : (
            <p className="border border-dashed border-border px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
              NO DRIVERS ON THE CLOCK YET
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}