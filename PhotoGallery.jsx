import React from "react";

export default function PhotoGallery() {
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
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-4">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#F4F4F9]">
            RaceSense in action
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img 
              src="/Final_1-10.jpg" 
              alt="RaceSense in action" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/kmr4.jpg" 
              alt="RaceSense dashboard" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/1000029638.jpg" 
              alt="RaceSense features" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/20260903_134045.jpg" 
              alt="RaceSense mobile" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/Screenshot_20260127_211125_Chrome.jpg" 
              alt="RaceSense analytics" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:harryjbedford25@gmail.com?subject=Submit%20my%20RaceSense%20photo"
            className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-6 py-3 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Submit yours!
          </a>
        </div>
      </div>
    </section>
  );
}