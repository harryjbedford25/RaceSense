import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Lime accent glow behind the console */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#ccff00]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto px-4 py-12 md:px-6 md:py-16 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ccff00] mb-4">
              // Live readout
            </p>
            <h1 className="text-[clamp(2.25rem,9vw,4rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-[#F4F4F9]">
              A race engineer
              <br />
              in your ear.
            </h1>
            <div className="mt-6 border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-5">
              <p className="text-[15px] leading-[1.5] text-[#c9c9d0]">
                Kart racer on the grid at golden hour. Our virtual race engineer gives real-time in ear callouts about laptimes and gaps. The app is in final development and coming soon to Google Play. RaceSense App is a mobile application for karting lap analysis and is not affiliated with RaceSense tyre gauges or Fastmate Racing.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-5 py-3 hover:bg-white transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get on Play Store
              </a>
              <Link
                to="/updates"
                className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-5 py-3 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Updates
              </Link>
            </div>
          </div>

          <div className="flex lg:justify-end">
            <img src="/Screenshots/Mockup.png" alt="RaceSense mockup" className="w-[90vw] max-w-[50rem] lg:w-[70vw] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
