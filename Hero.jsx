import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/image";
import Countdown from "./Countdown";

const KART = "/kmr4.jpg";

export default function Hero() {

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden pb-8">
      <Image
        src={KART}
        alt="Kart racer on the grid at golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ objectPosition: 'center 35%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/70 to-[#101012]/40" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-[#ccff00]"
        >
          [ Your race engineer. In your ear. ]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[13vw] md:text-[7vw] leading-[0.9] font-semibold tracking-tight text-[#F4F4F9] max-w-4xl"
        >
          Live race<br />callouts.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-xl text-[#8E8E93] leading-[1.6]"
        >
          RaceSense is a passion project, we decided to build it in 2026. It's a text to speech race engineer that uses third party data, and reads out the data in a contextual way, via headhones or any bluetooth device.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#grid" className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors">
            Join the Grid
          </a>
          <a href="#about" className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors">
            About
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}