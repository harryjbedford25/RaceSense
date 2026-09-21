import React from "react";

export default function SocialProof() {
  return (
    <section className="relative py-16 md:py-24">
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
        <div className="text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#F4F4F9] mb-4">
            Racers are already interested
          </h2>
          <p className="text-[15px] leading-[1.6] text-[#a9a9b0] max-w-2xl mx-auto mb-12">
            The racing community is talking about RaceSense. Here's what we've seen so far.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#ccff00] mb-2">
                5K+
              </div>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                Instagram views<br/>in the last 28 days
              </p>
            </div>
            
            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#F4F4F9] mb-2">
                Growing
              </div>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                Community<br/>interest
              </p>
            </div>
            
            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#F4F4F9] mb-2">
                Real
              </div>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                Feedback from<br/>actual racers
              </p>
            </div>
            
            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#F4F4F9] mb-2">
                Beta
              </div>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                Early access on<br/>Play Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}