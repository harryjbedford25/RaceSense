import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DriverShell from "@/components/driver/DriverShell";
import DriverCard from "@/components/driver/DriverCard";
import Reveal from "@/components/racesense/Reveal";
import { listDrivers } from "@/lib/driverData";

const byName = (a, b) => String(a.name).localeCompare(String(b.name));

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    listDrivers()
      .then((rows) => {
        if (cancelled) return;
        setDrivers([...rows].sort(byName));
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <DriverShell>
      <header className="border-b border-border pb-8">
        <div className="rs-label">// DRIVER DIRECTORY</div>
        <h1 className="mt-3 font-heading text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.02em] sm:text-[3.25rem]">
          Every driver.
        </h1>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
          RaceSense profiles are free — pick a driver to open their standings, results and links.
        </p>
        <Link to="/edit-profile" className="rs-btn rs-btn-fill mt-7 !px-5 !py-3">
          CREATE YOUR PROFILE
        </Link>
      </header>

      {status === "loading" ? (
        <p className="mt-10 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          LOADING DRIVERS…
        </p>
      ) : status === "error" ? (
        <p className="mt-10 border border-dashed border-border px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
          DRIVERS DIDN'T LOAD — RELOAD TO TRY AGAIN
        </p>
      ) : drivers.length ? (
        <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </Reveal>
      ) : (
        <p className="mt-10 border border-dashed border-border px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
          NO PROFILES PUBLISHED YET
        </p>
      )}
    </DriverShell>
  );
}