import { Link } from "react-router-dom";
import CornerTicks from "@/components/racesense/CornerTicks";
import DriverAvatar from "@/components/driver/DriverAvatar";

/** Directory entry — one tappable card per public driver profile. */
export default function DriverCard({ driver }) {
  const meta = [
    driver.racing_number ? `#${driver.racing_number}` : null,
    driver.team,
    driver.country,
  ].filter(Boolean);

  return (
    <Link
      to={`/driver/${driver.username}`}
      className="relative flex items-center gap-4 border border-dashed border-border px-4 py-4 transition-colors hover:border-foreground/40 sm:px-5"
    >
      <CornerTicks />
      <DriverAvatar driver={driver} size="md" />
      <div className="min-w-0">
        <div className="truncate font-heading text-base font-semibold">{driver.name}</div>
        <div className="mt-1.5 truncate font-mono text-[10px] tracking-[0.14em] text-primary">
          @{driver.username}
        </div>
        {meta.length ? (
          <div className="mt-1 truncate font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            {meta.join(" · ")}
          </div>
        ) : null}
      </div>
    </Link>
  );
}