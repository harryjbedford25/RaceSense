import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DriverShell from "@/components/driver/DriverShell";
import ProfileHeader from "@/components/driver/ProfileHeader";
import StatGrid from "@/components/driver/StatGrid";
import ResultsTable from "@/components/driver/ResultsTable";
import PerformancePanel from "@/components/driver/PerformancePanel";
import TrackList from "@/components/driver/TrackList";
import CornerTicks from "@/components/racesense/CornerTicks";
import {
  getDriverByUsername,
  getViewer,
  listDriverResults,
} from "@/lib/driverData";

export default function DriverProfile() {
  const { username } = useParams();
  const [status, setStatus] = useState("loading");
  const [driver, setDriver] = useState(null);
  const [results, setResults] = useState([]);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    (async () => {
      const found = await getDriverByUsername(username);
      if (cancelled) return;
      if (!found) {
        setStatus("missing");
        return;
      }

      const [rows, viewer] = await Promise.all([
        listDriverResults(found.id),
        getViewer(),
      ]);
      if (cancelled) return;

      setDriver(found);
      setResults(rows);
      setIsOwner(Boolean(viewer) && found.created_by_id === viewer.id);
      setStatus("ready");
    })().catch(() => {
      if (!cancelled) setStatus("error");
    });

    return () => {
      cancelled = true;
    };
  }, [username]);

  if (status === "loading") {
    return (
      <DriverShell>
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          LOADING DRIVER…
        </p>
      </DriverShell>
    );
  }

  if (status !== "ready") {
    return (
      <DriverShell>
        <section className="relative max-w-xl border border-dashed border-border px-6 py-10">
          <CornerTicks />
          <div className="rs-label">// DRIVER PROFILE</div>
          <h1 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.05]">
            {status === "missing" ? "No driver here yet." : "Couldn't load this profile."}
          </h1>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
            {status === "missing"
              ? `Nothing is registered under @${username}. Driver profiles are free — claim the handle and publish your results.`
              : "The profile data didn't come back. Reload the page to try again."}
          </p>
        </section>
      </DriverShell>
    );
  }

  return (
    <DriverShell>
      <ProfileHeader driver={driver} isOwner={isOwner} />
      <StatGrid results={results} />
      {results.length ? <ResultsTable results={results} /> : null}
      <PerformancePanel results={results} />
      <TrackList results={results} />
    </DriverShell>
  );
}