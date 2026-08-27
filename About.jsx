import React from "react";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#101012]">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00]">About</p>
        <blockquote className="mt-8 text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight text-[#F4F4F9]">
          "RaceSense started with a simple idea: knowing which lines are faster shouldn’t be guesswork. I wanted a way to connect lap times with what was actually happening on track, and between us, we turned that idea into a race engineer that gives useful feedback, lap by lap.
"

        </blockquote>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-white/15 flex items-center justify-center text-[#ccff00] text-[12px]">SW</span>
            <span>Samuel Williams — Lead Developer</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-white/15 flex items-center justify-center text-[#ccff00] text-[12px]">HB</span>
            <span>Harry Bedford — Founder &amp; Creative Director</span>
          </div>
        </div>
      </div>
    </section>
  );
}