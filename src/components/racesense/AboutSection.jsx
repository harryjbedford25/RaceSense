import Reveal from "@/components/racesense/Reveal";

const PEOPLE = [
  { initials: "SW", name: "Samuel Williams", role: "LEAD DEVELOPER" },
  {
    initials: "HB",
    name: "Harry Bedford",
    role: "FOUNDER & CREATIVE DIRECTOR",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <div className="rs-label hidden sm:block">// 05 — ABOUT</div>

        <div className="mt-8 grid gap-10 sm:mt-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* story */}
          <Reveal className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
              It started with a simple idea.
            </h2>
            <blockquote className="mt-8 border-l border-foreground/25 pl-5 sm:pl-7">
              <p className="font-body text-lg leading-relaxed text-foreground/90 sm:text-xl">
                “RaceSense App started with a simple idea: knowing which lines are
                faster shouldn't be guesswork. I wanted a way to connect lap times
                with what was actually happening on track, and between us, we turned
                that idea into a mobile race engineer that gives useful feedback,
                lap by lap.”
              </p>
            </blockquote>
          </Reveal>

          {/* team */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rs-label">THE TEAM</div>
            <div className="mt-4 border-t border-dashed border-border">
              {PEOPLE.map((p) => (
                <div
                  key={p.initials}
                  className="flex items-center gap-5 border-b border-dashed border-border py-6"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center border border-border font-heading text-base tracking-[0.05em] sm:h-16 sm:w-16 sm:text-lg">
                    {p.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-heading text-lg font-semibold tracking-[-0.01em] sm:text-xl">
                      {p.name}
                    </span>
                    <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      {p.role}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}