import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const FLAG = "/flagImage.jpg";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.racesense.racesense";

const GRID = [
{ n: "01", label: "INTRO", href: "#hero" },
{ n: "02", label: "SCALE", href: "#scale" },
{ n: "03", label: "FEATURES", href: "#capabilities" },
{ n: "04", label: "THE APP", href: "#app" },
{ n: "05", label: "ABOUT", href: "#about" },
{ n: "06", label: "AUDIO", href: "#audio" },
{ n: "07", label: "STANDINGS", href: "#leaderboard" },
{ n: "08", label: "BETA", href: "#finish" }];

export default function FinishLine() {
  return (
    <section id="finish" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="rs-label hidden sm:block">// 08 — GET RACESENSE</div>
        <h2 className="mt-3 max-w-3xl font-heading text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.02em] sm:text-[3rem]">
          The flag doesn't wait.
        </h2>
        <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-muted-foreground">
          RaceSense is available on Android only. Download it, join the beta, and
          never look down again.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-btn rs-btn-fill sm:!px-8 sm:!py-4">
            
            DOWNLOAD THE APP <span aria-hidden>▶</span>
          </a>
          <a
            href="https://racesense.info"
            target="_blank"
            rel="noopener noreferrer"
            className="rs-btn rs-btn-line sm:!px-8 sm:!py-4">
            
            JOIN THE BETA
          </a>
        </div>
        </Reveal>
      </div>

      {/* race-day band */}
      <div className="relative mt-10 h-32 w-full overflow-hidden border-y border-border sm:mt-14 sm:h-56">
        <Image
          src={FLAG}
          alt=""
          className="absolute inset-0 h-full w-full opacity-30"
          fittingType="fill" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background/70" />
      </div>

      {/* section links */}
      <div className="px-6 sm:px-10">
        <Reveal delay={120} className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 lg:grid-cols-8">
          {GRID.map((g) =>
          <a
            key={g.n}
            href={g.href}
            className="group flex flex-col justify-between border border-dashed border-border px-4 py-4 transition-colors hover:border-foreground/50">
            
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                {g.n}
              </span>
              <span className="mt-5 font-heading text-sm font-semibold tracking-[0.02em] sm:text-base">
                {g.label}
              </span>
            </a>
          )}
        </Reveal>

        <Reveal delay={180} className="relative mt-10 border-t border-border pt-5">
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">NEVER LOOK DOWN AGAIN</span>
            <Link to="/faq" className="transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link to="/drivers" className="transition-colors hover:text-primary">
              DRIVERS
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              TERMS
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-primary">
              PRIVACY
            </Link>
            <a
              href="https://instagram.com/race.sense.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary">
              
              INSTAGRAM
            </a>
            <a
              href="https://racesense.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary">
              
              RACESENSE.INFO
            </a>
          </div>
          <p className="mt-4 max-w-xl font-body text-xs leading-relaxed text-muted-foreground/80 sm:font-mono sm:text-[10px] sm:tracking-[0.06em]">
            RaceSense (racesense.info) is an independent motorsport telemetry app.
            We are not affiliated with, endorsed by, or connected to any tyre gauge
            manufacturer or any other company operating under the RaceSense name.
          </p>
          <CornerTicks tone="border-border" />
        </Reveal>
      </div>
    </section>);

}