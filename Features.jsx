import React from "react";

// Each feature leads with the readout it produces, like a row on a timing screen.
const ROWS = [
  {
    readout: "-0.214",
    color: "text-[#ccff00]",
    bar: "border-[#ccff00]",
    title: "Lap time callouts",
    body: "Your time as you cross the line, and how it compares, read out in your ear. No glancing at a screen.",
  },
  {
    readout: "+1.3",
    color: "text-[#F4F4F9]",
    bar: "border-[#F4F4F9]",
    title: "Gaps",
    body: "How far to the kart ahead and behind, so you know whether to push or defend.",
  },
  {
    readout: "S2",
    color: "text-[#ffb020]",
    bar: "border-[#ffb020]",
    title: "Context engine",
    body: "Short situational updates in plain language, so you know what's changing while your eyes stay on the track.",
  },
  {
    readout: "1:03.988",
    color: "text-[#b56cff]",
    bar: "border-[#b56cff]",
    title: "Share your results",
    body: "Post your best laps and race results to the community and see how you compare.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#101012] border-t border-white/10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="max-w-2xl text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[0.98] text-[#F4F4F9]">
          Know what worked before you're back in the pits.
        </h2>

        <ul className="mt-14 md:mt-20 border-t border-white/10">
          {ROWS.map((r) => (
            <li
              key={r.title}
              className={`grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 md:gap-12 items-center py-8 md:py-10 border-b border-white/10 border-l-2 pl-5 md:pl-8 ${r.bar}`}
            >
              <p
                className={`font-jetbrains text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-tight ${r.color}`}
              >
                {r.readout}
              </p>
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-[#F4F4F9]">{r.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#a9a9b0]">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
