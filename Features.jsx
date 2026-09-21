import React from "react";

const FEATURES = [
  {
    title: "Contextual Analysis",
    description: "Elevate your progress with callouts coming, just when you need them."
  },
  {
    title: "Readout Console",
    description: "Share your races with family and friends, they can see the stats, and the callouts, all from the console."
  },
  {
    title: "Real-Time Lap Analysis",
    description: "Get instant feedback on your lap times with analysis that helps you identify where you're losing time and how to improve your racing line."
  }
];

export default function Features() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-4">
            Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9]">
            Everything you need to go faster
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
            >
              <h4 className="text-[18px] font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-3">
                {feature.title}
              </h4>
              <p className="text-[#a9a9b0] leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}