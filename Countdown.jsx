import React from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  return (
    <div className="relative bg-[#ccff00] text-black overflow-hidden">
      <div className="absolute inset-0 flex items-center opacity-20 select-none pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap font-mono text-[14vw] uppercase tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span>Follow Us · Follow Us · Follow Us · Follow Us · </span>
          <span>Follow Us · Follow Us · Follow Us · Follow Us · </span>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase mb-6">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-8">
          Follow the Journey
        </h2>
        <p className="mx-auto max-w-lg text-black/70 leading-[1.6] mb-12">
          Stay updated with development progress, behind-the-scenes content, and launch announcements by following us on Instagram.
        </p>
        <a
          href="https://instagram.com/Race.sense.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-[#ccff00] px-8 py-4 font-mono text-[12px] tracking-[0.2em] uppercase hover:bg-black/80 transition-colors"
        >
          @Race.sense.app
        </a>
      </div>
    </div>
  );
}