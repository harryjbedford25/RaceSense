import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TONE = { faster: "#ccff00", best: "#b56cff", slower: "#ffb020" };

const FEATURES = [
  {
    id: "laps",
    readout: "-0.214",
    hex: "#ccff00",
    title: "Lap time callouts",
    body: "Your time as you cross the line, and how it compares. No glancing at a screen.",
  },
  {
    id: "gaps",
    readout: "+1.3",
    hex: "#F4F4F9",
    title: "Gaps",
    body: "How far to the kart ahead and behind, so you know whether to push or defend.",
  },
  {
    id: "context",
    readout: "S2",
    hex: "#ffb020",
    title: "Context engine",
    body: "Short situational updates in plain language, while your eyes stay on the track.",
  },
  {
    id: "share",
    readout: "58.83",
    hex: "#b56cff",
    title: "Share your race",
    body: "Turn a session into a card with your track, fastest lap and positions.",
  },
];

/* ---------- mini visuals, one per feature ---------- */

const LAPS = [
  { lap: 8, t: 60.42, tone: "slower" },
  { lap: 9, t: 59.96, tone: "faster" },
  { lap: 10, t: 60.31, tone: "slower" },
  { lap: 11, t: 59.62, tone: "best" },
  { lap: 12, t: 59.41, tone: "best" },
  { lap: 13, t: 59.87, tone: "slower" },
  { lap: 14, t: 58.83, tone: "best" },
];

function LapBars({ reduce }) {
  const height = (t) => 22 + ((t - 58.5) / 2.2) * 70; // shorter bar = quicker lap
  return (
    <div className="w-full">
      <div className="flex items-end gap-2 sm:gap-3 h-40">
        {LAPS.map((l, i) => (
          <div key={l.lap} className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="mb-1 font-jetbrains text-[11px] text-[#a9a9b0]">{l.t.toFixed(2)}</span>
            <motion.div
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.35 }}
              style={{ height: `${height(l.t)}%`, backgroundColor: TONE[l.tone], transformOrigin: "bottom" }}
              className="w-full max-w-[2.5rem]"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2 sm:gap-3">
        {LAPS.map((l) => (
          <span key={l.lap} className="flex-1 text-center font-jetbrains text-[11px] text-[#8E8E93]">
            L{l.lap}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[12px] text-[#8E8E93]">
        Shorter is quicker. Lime beat the lap before, purple is a new best, amber lost time.
      </p>
    </div>
  );
}

function GapDiagram() {
  const pos = (x) => 8 + (x / 2.1) * 84; // behind 0, you 0.8, ahead 2.1 (seconds)
  const karts = [
    { x: 0, label: "Behind", you: false },
    { x: 0.8, label: "You", you: true },
    { x: 2.1, label: "Ahead", you: false },
  ];
  return (
    <div className="w-full">
      <div className="relative h-28">
        <div className="absolute left-[4%] right-[4%] top-1/2 h-px bg-white/25" />
        <span
          className="absolute -translate-x-1/2 top-[14%] font-jetbrains text-[13px] text-[#F4F4F9]"
          style={{ left: `${(pos(0) + pos(0.8)) / 2}%` }}
        >
          0.8
        </span>
        <span
          className="absolute -translate-x-1/2 top-[14%] font-jetbrains text-[13px] text-[#F4F4F9]"
          style={{ left: `${(pos(0.8) + pos(2.1)) / 2}%` }}
        >
          1.3
        </span>
        {karts.map((k) => (
          <React.Fragment key={k.label}>
            <div
              className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 w-7 h-3.5 rounded-sm ${
                k.you ? "bg-[#ccff00]" : "bg-[#F4F4F9]/70"
              }`}
              style={{ left: `${pos(k.x)}%` }}
            />
            <span
              className={`absolute -translate-x-1/2 top-[66%] text-[12px] ${
                k.you ? "text-[#ccff00]" : "text-[#8E8E93]"
              }`}
              style={{ left: `${pos(k.x)}%` }}
            >
              {k.label}
            </span>
          </React.Fragment>
        ))}
      </div>
      <p className="text-[12px] text-[#8E8E93] text-right">Direction of travel: right. Gaps in seconds.</p>
    </div>
  );
}

const SECTORS = [
  { s: "S1", d: "-0.05", c: "#ccff00" },
  { s: "S2", d: "+0.10", c: "#ffb020" },
  { s: "S3", d: "-0.02", c: "#ccff00" },
];

function SectorStrip() {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        {SECTORS.map((x) => (
          <div
            key={x.s}
            className="flex-1 bg-white/5 p-4 border-t-4"
            style={{ borderTopColor: x.c }}
          >
            <p className="font-jetbrains text-[12px] text-[#8E8E93]">{x.s}</p>
            <p className="mt-1 font-jetbrains text-2xl" style={{ color: x.c }}>
              {x.d}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 font-jetbrains text-[14px] text-[#ccff00]">
        &gt; Sector two is where the time went.
      </p>
    </div>
  );
}

const STATS = [
  ["Fastest lap", "58.83"],
  ["Laps", "14"],
  ["Position", "5"],
  ["Peak position", "3"],
];

function ShareCard() {
  return (
    <div className="w-full grid grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-5 items-center">
      <div className="bg-[#1a1a1e] p-2">
        <svg viewBox="0 0 150 120" className="w-full" aria-hidden="true">
          <path
            d="M25 78 C18 45 50 18 84 26 C112 33 100 56 122 66 C142 76 120 104 92 100 C70 97 62 84 46 96 C34 104 28 92 25 78Z"
            fill="none"
            stroke="#ccff00"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {STATS.map(([label, value]) => (
          <div key={label} className="bg-[#1a1a1e] px-3 py-2.5">
            <p className="text-[11px] text-[#a9a9b0]">{label}</p>
            <p className="font-jetbrains text-xl text-[#ccff00]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- section ---------- */

export default function Features() {
  const reduce = useReducedMotion();
  const [sel, setSel] = useState(0);
  const f = FEATURES[sel];

  return (
    <section id="features" className="relative overflow-hidden border-t border-white/10 py-16 md:py-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Lime accent glow */}
      <div className="absolute left-[10%] -top-20 w-[28rem] h-[28rem] rounded-full bg-[#ccff00]/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative">
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#ccff00] mb-4">
            // race data
          </p>
          <h2 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#F4F4F9]">
            Know what worked before you're back in the pits.
          </h2>
          <p className="mt-4 max-w-lg text-[17px] leading-[1.6] text-[#a9a9b0]">
            Real-time race intelligence delivered straight to your ear. No screens, no distractions—just the data that matters.
          </p>

          <div className="mt-12 grid md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] gap-6 md:gap-8">
          <ul className="flex flex-col gap-2">
            {FEATURES.map((x, i) => (
              <li key={x.id}>
                <button
                  type="button"
                  onClick={() => setSel(i)}
                  aria-pressed={sel === i}
                  aria-controls="feature-panel"
                  className={`group w-full text-left flex items-center gap-4 border border-white/10 ring-1 ring-white/5 rounded-xl bg-white/[0.03] px-5 py-4 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    sel === i
                      ? "border-[#ccff00]/30 ring-[#ccff00]/20 bg-white/[0.06] shadow-lg shadow-[#ccff00]/5"
                      : "hover:bg-white/[0.05] hover:border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      sel === i ? "bg-[#ccff00]/20" : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <span
                      className="font-jetbrains text-base font-bold"
                      style={{ color: x.hex }}
                    >
                      {x.readout}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[15px] font-medium text-[#F4F4F9] block">{x.title}</span>
                    <span className="text-[12px] text-[#8E8E93] mt-0.5 block">{x.body.substring(0, 40)}...</span>
                  </div>
                  {sel === i && (
                    <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div
            id="feature-panel"
            className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6 flex flex-col gap-6 md:min-h-[20rem]"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#F4F4F9]">{f.title}</h3>
              <p className="mt-1 text-[15px] leading-[1.55] text-[#a9a9b0] max-w-md">{f.body}</p>
            </div>
            <div className="flex-1 flex items-center" key={f.id}>
              {f.id === "laps" && <LapBars reduce={reduce} />}
              {f.id === "gaps" && <GapDiagram />}
              {f.id === "context" && <SectorStrip />}
              {f.id === "share" && <ShareCard />}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
