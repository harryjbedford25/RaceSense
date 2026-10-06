import { useState } from "react";
import { Play } from "lucide-react";
import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const SAMPLES = [
  {
    key: "FASTEST LAP",
    text: "New fastest lap. Lap number, 14. Lap time, 58.83.",
  },
  {
    key: "POSITION CHANGE",
    text: "Position, 3. You have gained two places this lap.",
  },
  {
    key: "GAP CLOSING",
    text: "Gap ahead, 5.06. Gap behind, 0.68. You are catching the car ahead.",
  },
  {
    key: "SESSION UPDATE",
    text: "Race control. Yellow flag, sector two. Yellow flag, sector two.",
  },
];

const META = [
  { k: "VOICE", v: "NEURAL" },
  { k: "LATENCY", v: "0.4 s" },
  { k: "AUDIO", v: "BT" },
];

export default function AudioDemo() {
  const [active, setActive] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const sample = SAMPLES[active];

  const play = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(sample.text);
    u.rate = 1.05;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  };

  return (
    <section id="audio" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="rs-label hidden sm:block">// 06 — LIVE AUDIO</div>
        <h2 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
          Hear a live update.
        </h2>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
          This is what a call sounds like mid-race. Pick an update and press
          play — RaceSense speaks it straight into your ear.
        </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-2">
          {/* controls */}
          <div>
            <div className="flex flex-wrap gap-2">
              {SAMPLES.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  className={`border px-3 py-2 font-mono text-[10px] tracking-[0.15em] transition-colors ${
                    active === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  }`}
                >
                  {s.key}
                </button>
              ))}
            </div>

            <button
              onClick={play}
              className="rs-btn rs-btn-fill mt-6 flex w-full items-center gap-4 sm:w-auto"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background/20">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="font-heading text-base font-semibold tracking-[-0.01em] sm:text-lg">
                {speaking ? "SPEAKING…" : "PLAY SPOKEN UPDATE"}
              </span>
            </button>
            <div className="mt-2 hidden font-mono text-[9px] tracking-[0.2em] text-muted-foreground sm:block">
              ● BROWSER PREVIEW // IN-APP VOICE IS TUNED FOR THE CAR
            </div>

            {/* waveform */}
            <div className="mt-6 flex h-14 items-end gap-[3px] sm:mt-8">
              {Array.from({ length: 56 }).map((_, i) => (
                <span
                  key={i}
                  className={`flex-1 ${speaking ? "bg-primary/70" : "bg-foreground/20"}`}
                  style={{
                    height: `${18 + Math.abs(Math.sin(i * 0.6)) * 78}%`,
                    transformOrigin: "bottom",
                    animation: speaking
                      ? `wave 0.9s ease-in-out ${i * 0.02}s infinite`
                      : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* transcript */}
          <div className="relative border border-dashed border-border bg-card p-5 sm:p-6">
            <CornerTicks />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                &gt; SPOKEN OUTPUT
              </span>
              <span
                className={`flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] ${
                  speaking ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    speaking ? "animate-pulse bg-primary" : "bg-muted-foreground"
                  }`}
                />
                {speaking ? "STREAM ACTIVE" : "READY"}
              </span>
            </div>
            <p className="mt-5 font-mono text-base leading-loose text-foreground">
              {sample.text}
            </p>
            <div className="mt-6 hidden grid-cols-3 gap-px border border-border bg-border sm:grid">
              {META.map((m) => (
                <div key={m.k} className="bg-card px-3 py-2">
                  <div className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
                    {m.k}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-primary">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}