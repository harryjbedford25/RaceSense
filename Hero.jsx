import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/image";
import RadioFeed from "./RadioFeed";

const KART = "/kmr4.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      <Image
        src={KART}
        alt="Kart racer on the grid at golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ objectPosition: "center 35%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/75 to-[#101012]/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-[clamp(3.25rem,13vw,5.5rem)] lg:text-[clamp(3.5rem,6.6vw,7rem)] leading-[0.88] font-semibold tracking-[-0.04em] text-[#F4F4F9]">
              Lap times
              <br />
              in your ear.
            </h1>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.6] text-[#c9c9d0]">
              Most racers can't tell when they're getting quicker. RaceSense is a virtual race
              engineer that reads out your lap times and gaps as you drive, so you know what worked
              while you're still on track.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/#grid"
                className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get early access
              </Link>
              <a
                href="#features"
                className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                What it says
              </a>
            </div>
          </div>

          <div className="flex lg:justify-end">
            <RadioFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
