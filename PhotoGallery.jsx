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
            Add your best monthly karting photos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img 
              src="/golden-hour.jpg" 
              alt="RaceSense in action" 
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
            <p className="text-[10px] text-[#8E8E93] mt-2 text-center">Photo: Barns Photographic</p>
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/racing-action.jpg" 
              alt="RaceSense dashboard" 
              loading="lazy"
              width="400"
              height="300"
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
            <p className="text-[10px] text-[#8E8E93] mt-2 text-center">Photo: Barns Photographic</p>
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/track-action.jpg" 
              alt="RaceSense features" 
              loading="lazy"
              width="400"
              height="300"
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/kart-session.jpg" 
              alt="RaceSense mobile" 
              loading="lazy"
              width="400"
              height="300"
              className="w-full h-full object-cover rounded-2xl border border-white/10 ring-1 ring-white/5"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img 
              src="/dashboard-view.jpg" 
              alt="RaceSense analytics" 
              loading="lazy"
              width="400"
              height="300"
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