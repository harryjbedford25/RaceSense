import { useEffect, useState } from "react";
import DriverShell from "@/components/driver/DriverShell";
import ProfileForm from "@/components/driver/ProfileForm";
import CornerTicks from "@/components/racesense/CornerTicks";

import { getDriverByOwner, getViewer } from "@/lib/driverData";

export default function EditProfile() {
  const [phase, setPhase] = useState("checking");
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const viewer = await getViewer();
      if (cancelled) return;
      if (!viewer) {
        setPhase("signed-out");
        return;
      }
      const mine = await getDriverByOwner(viewer.id);
      if (cancelled) return;
      setDriver(mine);
      setPhase("ready");
    })().catch(() => {
      if (!cancelled) setPhase("signed-out");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "checking") {
    return (
      <DriverShell>
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          CHECKING ACCESS…
        </p>
      </DriverShell>
    );
  }

  if (phase === "signed-out") {
    return (
      <DriverShell>
        <section className="relative max-w-xl border border-dashed border-border px-6 py-10">
          <CornerTicks />
          <div className="rs-label">// DRIVER PROFILES</div>
          <h1 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.05]">
            Sign in to edit your profile.
          </h1>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
            Profiles are free to create. Sign in first, then set your name, handle,
            photo and race details.
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = "/login")}
            className="rs-btn rs-btn-fill mt-7"
          >
            SIGN IN
          </button>
        </section>
      </DriverShell>
    );
  }

  return (
    <DriverShell>
      <div className="rs-label">// DRIVER PROFILE</div>
      <h1 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.05] sm:text-[2.75rem]">
        {driver ? "Edit your profile." : "Create your profile."}
      </h1>
      <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-muted-foreground">
        {driver
          ? "Changes go live on your public profile the moment you save."
          : "Set your handle now — your public profile is live at /driver/your-username."}
      </p>
      <ProfileForm driver={driver} />
    </DriverShell>
  );
}