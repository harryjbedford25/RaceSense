import React from "react";
import { AudioLines, Radio } from "lucide-react";
import Countdown from "./Countdown";

const FEATURES = [
  { icon: AudioLines, title: "Context Engine", note: "Situational updates" },
  { icon: Radio, title: "Laptime Callouts", note: "Read out as they happen" },
];

export default function FeatureStrip() {
  return (
    <section className="border-t border-white/10 bg-[#101012]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#8E8E93] text-center">
          [ In development ]
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#101012] p-8 md:p-10 flex flex-col items-center text-center gap-3">
              <f.icon className="w-7 h-7 text-[#ccff00]" strokeWidth={1.5} />
              <h3 className="font-mono text-[13px] md:text-[15px] tracking-[0.15em] uppercase text-[#F4F4F9]">
                {f.title}
              </h3>
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
                {f.note}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
            Launching 01/09/26
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}