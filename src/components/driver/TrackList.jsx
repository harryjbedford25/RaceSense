import ProfileSection from "@/components/driver/ProfileSection";
import { formatLapTime, trackSummary } from "@/lib/driverStats";

export default function TrackList({ results }) {
  const tracks = trackSummary(results);
  if (!tracks.length) return null;

  return (
    <ProfileSection index="04" title="TRACKS" meta={`${tracks.length} CIRCUITS`}>
      <ul className="border-t border-border">
        {tracks.map((track) => (
          <li
            key={track.track}
            className="grid grid-cols-3 gap-x-3 gap-y-2 border-b border-border py-4 sm:grid-cols-12 sm:items-center"
          >
            <div className="col-span-3 sm:col-span-6">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.02em]">
                {track.track}
              </div>
              {track.country ? (
                <div className="mt-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                  {track.country}
                </div>
              ) : null}
            </div>

            <div className="font-mono text-[11px] tracking-[0.06em] sm:col-span-2 sm:text-right">
              <span className="text-muted-foreground sm:hidden">RACES </span>
              {track.races}
            </div>

            <div className="font-mono text-[11px] tracking-[0.06em] sm:col-span-3 sm:text-right">
              <span className="text-muted-foreground sm:hidden">BEST </span>
              {formatLapTime(track.bestLapSeconds) || "—"}
            </div>

            <div className="font-mono text-[11px] tracking-[0.06em] sm:col-span-1 sm:text-right">
              <span className="text-muted-foreground sm:hidden">FINISH </span>
              {track.bestPosition ? `P${track.bestPosition}` : "—"}
            </div>
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}