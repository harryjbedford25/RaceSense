import { useState } from "react";
import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BG = "/DSP2.jpg";

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

export default function AudioDemo() {
  const [active, setActive] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const sample = SAMPLES[active];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
    <section
      id="audio"
      className="relative overflow-hidden bg-slate-100 py-20 sm:py-28"
    >
      <Image
        src={BG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fittingType="fit"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 px-6 sm:px-10"
      >
        <motion.div variants={itemVariants} className="font-mono text-[10px] tracking-[0.3em] text-primary">
          // 05 — LIVE AUDIO
        </motion.div>
        <motion.h2 variants={itemVariants} className="mt-2 font-heading text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl">
          HEAR A LIVE UPDATE.
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
          This is what a call sounds like mid-race. Pick an update and press
          play — RaceSense speaks it straight into your ear.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 grid gap-8 lg:grid-cols-2">
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
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {s.key}
                </button>
              ))}
            </div>

            <button
              onClick={play}
              className="mt-6 flex w-full items-center gap-4 border border-primary bg-primary/10 px-5 py-4 transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="font-heading text-lg tracking-[-0.02em]">
                {speaking ? "SPEAKING…" : "PLAY SPOKEN UPDATE"}
              </span>
            </button>
            <div className="mt-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
              ● BROWSER PREVIEW // IN-APP VOICE IS TUNED FOR THE CAR
            </div>

            {/* waveform */}
            <div className="mt-8 flex h-14 items-end gap-[3px]">
              {Array.from({ length: 56 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 bg-primary/50"
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
          <div className="border border-border bg-background/70 p-6 backdrop-blur-sm">
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
            <div className="mt-6 grid grid-cols-3 gap-px border border-border bg-border">
              {[
                { k: "VOICE", v: "NEURAL" },
                { k: "LATENCY", v: "0.4 s" },
                { k: "AUDIO", v: "BT" },
              ].map((m) => (
                <div key={m.k} className="bg-background px-3 py-2">
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
        </motion.div>
      </motion.div>
    </section>
  );
}