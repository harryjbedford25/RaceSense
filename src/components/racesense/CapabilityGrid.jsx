import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const STAGES = [
  {
    n: "01",
    title: "IT LISTENS",
    body: "RaceSense joins the live timing feed for your series and your kart number, reading every lap the moment it is posted.",
  },
  {
    n: "02",
    title: "IT READS THE RACE",
    body: "Each update is measured against your last lap — a new personal best, a place gained, a gap opening or closing, a flag on track.",
  },
  {
    n: "03",
    title: "IT SPEAKS",
    body: "Only what changed gets called, in one short sentence through your headphones — so your eyes stay where the lap needs them.",
  },
];

const OUTCOMES = [
  "EYES NEVER LEAVE THE TRACK",
  "PERSONAL BESTS, THE LAP THEY HAPPEN",
  "GAPS THAT CLOSE IN REAL TIME",
  "RACE CONTROL UPDATES",
];

export default function CapabilityGrid() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="rs-label hidden sm:block">// 03 — WHAT IT DOES</div>
        <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
          A race engineer in your ear.
        </h2>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
          RaceSense isn't a dashboard to read. It watches your live timing, works
          out what just changed, and tells you in one short sentence — so you can
          drive the lap instead of studying it.
        </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {STAGES.map((s) => (
            <div
              key={s.n}
              className="relative border border-dashed border-border px-5 pb-5 pt-6 transition-colors hover:border-foreground/40 sm:pb-7 sm:pt-7"
            >
              <CornerTicks />
              <div className="font-mono text-[10px] tracking-[0.25em] text-primary">
                {s.n}
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-[-0.01em] sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={180} className="mt-10 hidden flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:flex">
          {OUTCOMES.map((o) => (
            <span key={o}>
              <span className="text-primary">●</span> {o}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}