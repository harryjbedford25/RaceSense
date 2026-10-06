import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const STATS = [
  { value: "6K", label: "Instagram views on RaceSense posts" },
  { value: "2K+", label: "Views of the RaceSense website" },
  { value: "25", label: "Dedicated testers already running the beta" },
];

export default function StatsBand() {
  return (
    <section id="scale" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-6">
          <div>
            <div className="rs-label hidden sm:block">// 02 — PROVEN AT SCALE</div>
            <h2 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
              Proven at scale.
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
              RaceSense runs for rental karting and club race days alike — every lap
              read, every change spoken, nothing left for you to check on screen.
            </p>
          </div>
          <a href="#finish" className="rs-btn rs-btn-fill w-full shrink-0 sm:w-auto">
            START NOW <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={120} className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="relative border border-dashed border-border px-5 pb-5 pt-6 transition-colors hover:border-foreground/40 sm:pb-6 sm:pt-7"
            >
              <CornerTicks />
              <div className="font-heading text-4xl font-semibold leading-none tracking-[-0.02em] sm:text-[2.5rem]">
                {s.value}
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}