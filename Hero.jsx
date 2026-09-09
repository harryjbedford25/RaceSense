import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/image";
import { CONTACT_INSTAGRAM } from "./config";

const KART = "/kmr4.jpg";

const SCREENSHOTS = [
  {
    src: "/Screenshots/1000053943.jpg",
    alt: "RaceSense screenshot 1"
  },
  {
    src: "/Screenshots/1000053941.jpg",
    alt: "RaceSense screenshot 2"
  },
  {
    src: "/Screenshots/1000053945.jpg",
    alt: "RaceSense screenshot 3"
  },
  {
    src: "/Screenshots/1000053939.jpg",
    alt: "RaceSense screenshot 4"
  }
];

export default function Hero() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % SCREENSHOTS.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 sm:pt-0">
      <Image
        src={KART}
        alt="Kart racer on the grid at golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ objectPosition: 'center 35%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/70 to-[#101012]/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[13vw] md:text-[7vw] leading-[0.9] font-semibold tracking-tight text-[#F4F4F9] max-w-4xl"
            >
              Lap times in<br />your ear.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 max-w-xl text-[#8E8E93] leading-[1.6]"
            >
              Most racers don't realise when they're improving. Endless laps with no idea what line was one, or two tenths faster. Racesense aims to change this. Our virtual race engineer gives real-time in ear callouts about laptimes and gaps. 
            </motion.p>
            <div className="mt-10 flex flex-col sm:flex-wrap sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a href="/#grid" className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors text-center sm:text-left">
                Join the Grid
              </a>
              <a href="/about" className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center sm:text-left">
                About
              </a>
              <a href="/updates" className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center sm:text-left">
                Updates
              </a>
              <a
                href={CONTACT_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center sm:text-left"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right side - Screenshots */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreenshot}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[9/17] rounded-xl overflow-hidden bg-black/50"
                  >
                    <Image
                      src={SCREENSHOTS[currentScreenshot].src}
                      alt={SCREENSHOTS[currentScreenshot].alt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <button
                  onClick={prevScreenshot}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous screenshot"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={nextScreenshot}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Next screenshot"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {SCREENSHOTS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentScreenshot ? 'bg-[#ccff00]' : 'bg-white/30'
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}