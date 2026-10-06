import { Link } from "react-router-dom";
import DriverAvatar from "@/components/driver/DriverAvatar";
import { cn } from "@/lib/utils";

/** Shared column template so the header and the rows stay aligned. */
export const GRID_COLS =
  "grid-cols-[2.25rem_minmax(0,1fr)_3.5rem] sm:grid-cols-[2.5rem_minmax(0,1fr)_3.5rem_3.5rem_3.5rem_5rem_4rem]";

/** One standings entry, linking through to the driver's public profile. */
export default function LeaderboardRow({ rank, row }) {
  return (
    <Link
      to={`/driver/${row.driver.username}`}
      className={cn(
        "grid items-center gap-3 border-b border-border px-1 py-3.5 transition-colors hover:bg-card/60",
        GRID_COLS
      )}
    >
      <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
        {rank}
      </span>

      <span className="flex min-w-0 items-center gap-3">
        <DriverAvatar driver={row.driver} size="sm" />
        <span className="min-w-0">
          <span className="block truncate font-heading text-sm font-semibold">{row.driver.name}</span>
          <span className="block truncate font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            @{row.driver.username}
            {row.driver.team ? ` · ${row.driver.team}` : ""}
          </span>
        </span>
      </span>

      <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:block">
        {row.races}
      </span>
      <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:block">
        {row.wins}
      </span>
      <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:block">
        {row.podiums}
      </span>
      <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:block">
        {row.winRate === null ? "—" : `${row.winRate}%`}
      </span>

      <span className="text-right font-mono text-sm font-medium text-primary">{row.points}</span>
    </Link>
  );
}