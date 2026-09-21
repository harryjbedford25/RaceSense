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

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#ccff00] mb-6">
              // Live readout
            </p>
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.04em] text-[#F4F4F9]">
              A race engineer
              <br />
              in your ear.
            </h1>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.6] text-[#c9c9d0]">
              Most racers can't tell when they're getting quicker. RaceSense reads out your lap
              times and gaps as you drive, so you know what worked while you're still on track.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get on Play Store
              </a>
              <Link
                to="/updates"
                className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Updates
              </Link>
            </div>
          </div>

          <div className="flex lg:justify-end">
            <img src="/Screenshots/mockup.png" alt="RaceSense mockup" className="w-[80vw] max-w-[60rem] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
