import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import CornerTicks from "@/components/racesense/CornerTicks";
import ShareButton from "@/components/driver/ShareButton";
import ProfileLinks from "@/components/driver/ProfileLinks";

const initials = (name) =>
  String(name || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export default function ProfileHeader({ driver, isOwner }) {
  const meta = [
    driver.racing_number ? `#${driver.racing_number}` : null,
    driver.team,
    driver.country,
  ].filter(Boolean);

  return (
    <header className="border-b border-border pb-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="rs-label">// DRIVER PROFILE</div>
        <div className="flex flex-wrap items-center gap-2.5">
          {isOwner ? (
            <Link to="/edit-profile" className="rs-btn rs-btn-line !px-4 !py-2.5">
              EDIT PROFILE
            </Link>
          ) : null}
          <ShareButton username={driver.username} />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
        <div className="relative h-28 w-28 shrink-0 border border-border bg-card sm:h-36 sm:w-36">
          <CornerTicks tone="border-foreground/40" size="h-3 w-3" />
          {driver.avatar_url ? (
            <Image
              src={driver.avatar_url}
              alt={`${driver.name} profile photo`}
              className="absolute inset-0 h-full w-full"
              fittingType="fill"
            />
          ) : (
            <div className="grid h-full w-full place-items-center font-mono text-3xl font-medium text-muted-foreground sm:text-4xl">
              {initials(driver.name)}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h1 className="font-heading text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.02em] sm:text-[3.25rem]">
            {driver.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
            <span className="text-primary">@{driver.username}</span>
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {driver.bio ? (
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
          {driver.bio}
        </p>
      ) : null}

      <ProfileLinks links={driver.links} />
    </header>
  );
}