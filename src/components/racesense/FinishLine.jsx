import { Image } from "@/components/ui/image";

const FLAG = "/DSP.jpg";

// Generic Play Store link while in early access — swap for the live RaceSense listing.
const PLAY_STORE_URL = "https://play.google.com/store/apps";

const GRID = [
{ n: "01", label: "INTRO", href: "#hero" },
{ n: "02", label: "FEATURES", href: "#capabilities" },
{ n: "03", label: "THE APP", href: "#app" },
{ n: "04", label: "ABOUT", href: "#about" },
{ n: "05", label: "AUDIO", href: "#audio" },
{ n: "06", label: "BETA", href: "#finish" }];

export default function FinishLine() {
  return (
    <section
      id="finish"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-slate-100 pt-20">
      <Image
        src={FLAG}
        alt="Checkered flag finish line"
        className="absolute inset-0 h-full w-full object-cover"
        fittingType="fit"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

      <div className="relative z-10 px-6 sm:px-10">
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
          // 06 — GET RACESENSE
        </div>
        <h2 className="mt-3 max-w-3xl font-heading text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
          THE FLAG DOESN'T WAIT.
        </h2>
        <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-muted-foreground">RaceSense is available on Android only. Download it, join the beta, and never look down again.

        </p>
      </div>

      {/* starting grid links */}
      <div className="relative z-10 grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {GRID.map((g) =>
        <a
          key={g.n}
          href={g.href}
          className="group flex flex-col justify-between bg-background px-5 py-4 transition-colors hover:bg-primary hover:text-primary-foreground">
          
            <span className="font-mono text-[10px] tracking-[0.2em] opacity-60">
              {g.n}
            </span>
            <span className="mt-5 font-heading text-lg tracking-[-0.02em]">
              {g.label}
            </span>
          </a>
        )}
      </div>

      {/* final CTA */}
      <div className="relative z-10 px-6 pb-28 pt-12 sm:px-10 sm:pb-32">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-6 py-4 text-center font-heading text-lg tracking-[-0.02em] text-primary-foreground transition-opacity hover:opacity-90 sm:px-10 sm:py-5 sm:text-2xl">
            
            DOWNLOAD THE APP ▶
          </a>
          <a
            href="https://racesense.info"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary px-6 py-4 text-center font-heading text-lg tracking-[-0.02em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-10 sm:py-5 sm:text-2xl">
            
            JOIN THE BETA
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">NEVER LOOK DOWN AGAIN</span>
          <a
            href="https://racesense.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary">
            
            RACESENSE.INFO
          </a>
        </div>
        <p className="mt-4 max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.06em] text-muted-foreground/60">
          RaceSense (racesense.info) is an independent motorsport telemetry app.
          We are not affiliated with, endorsed by, or connected to any tyre gauge
          manufacturer or any other company operating under the RaceSense name.
        </p>
      </div>
    </section>);

}