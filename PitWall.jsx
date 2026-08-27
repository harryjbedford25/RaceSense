import React from "react";
import { motion } from "framer-motion";

export default function PitWall() {
  return (
    <section id="grid" className="relative bg-[#ccff00] text-black overflow-hidden">
      <div className="absolute inset-0 flex items-center opacity-20 select-none pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap font-mono text-[14vw] uppercase tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span>Coming soon · Coming soon · Coming soon · Coming soon · </span>
          <span>Coming soon · Coming soon · Coming soon · Coming soon · </span>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase">[ 03 / Pit Wall ]</p>
        <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          Join the Grid.
        </h2>
        <p className="mt-6 mx-auto max-w-lg text-black/70 leading-[1.6]">
          The app is in final development and launching on Google Play. The badge lands here the day
          we go live.
        </p>
        <div className="mt-12 inline-flex items-center gap-4 border-2 border-dashed border-black/50 px-10 py-6 font-mono text-[12px] tracking-[0.25em] uppercase">
          Google Play badge · placeholder
        </div>
      </div>
    </section>
  );
}