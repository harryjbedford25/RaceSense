import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/image";
import { CONTACT_EMAIL } from "./config";

const KART = "/kmr4.jpg";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleGetAccess = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("RaceSense — Early Access Request");
    const body = encodeURIComponent(
      `I'd like early access to RaceSense.\n\nMy email: ${email || "(not provided)"}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 sm:pt-0">
      <Image
        src={KART}
        alt="Kart racer on the grid at golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ objectPosition: "center 35%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/80 to-[#101012]/50" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase text-[#ccff00] border border-[#ccff00]/30 px-4 py-1.5 mb-8">
            Coming Soon
          </span>

          <h1 className="text-[12vw] md:text-[5.5vw] leading-[0.95] font-semibold tracking-tight text-[#F4F4F9]">
            Lap times in<br />your ear.
          </h1>

          <p className="mt-8 mx-auto max-w-xl text-[#8E8E93] leading-[1.6] text-[15px] md:text-[17px]">
            Most racers don't realise when they're improving. RaceSense gives you a
            virtual race engineer with real-time, in-ear callouts on lap times and
            gaps — so every session counts.
          </p>
        </motion.div>

        {/* Lead capture */}
        <motion.form
          onSubmit={handleGetAccess}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 mx-auto max-w-md"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-white/5 border border-white/15 text-[#F4F4F9] placeholder-[#8E8E93] px-5 py-4 font-mono text-[13px] focus:outline-none focus:border-[#ccff00] transition-colors"
            />
            <button
              type="submit"
              className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.15em] uppercase text-[#8E8E93]/70">
            We'll email you when it's ready — no spam.
          </p>
        </motion.form>

        {/* Play Store placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-3 border border-dashed border-white/20 px-6 py-4 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#F4F4F9]">
              <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35Z" />
              <path d="M16.81 15.12 6.05 21.34l8.49-8.06 2.27 1.84Z" />
              <path d="M20.16 10.81 17.5 9.13 14.54 12l2.96 2.87 2.66-1.68c.75-.48.75-1.9 0-2.38Z" />
              <path d="M6.05 2.66l10.76 6.22-2.27 1.84-8.49-8.06Z" />
            </svg>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F4F4F9]">
              Coming to Google Play
            </span>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93] hover:text-[#ccff00] transition-colors"
          >
            or reach us directly — {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
