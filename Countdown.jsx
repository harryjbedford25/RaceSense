import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-17T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#ccff00] text-black overflow-hidden">
      <div className="absolute inset-0 flex items-center opacity-20 select-none pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap font-mono text-[14vw] uppercase tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span>Countdown · Countdown · Countdown · Countdown · </span>
          <span>Countdown · Countdown · Countdown · Countdown · </span>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <div className="text-center">
            <div className="font-jetbrains text-6xl md:text-8xl font-bold">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="font-jetbrains text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-black/70 mt-2">
              Days
            </div>
          </div>
          <div className="text-6xl md:text-8xl font-bold">:</div>
          <div className="text-center">
            <div className="font-jetbrains text-6xl md:text-8xl font-bold">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="font-jetbrains text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-black/70 mt-2">
              Hours
            </div>
          </div>
          <div className="text-6xl md:text-8xl font-bold">:</div>
          <div className="text-center">
            <div className="font-jetbrains text-6xl md:text-8xl font-bold">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="font-jetbrains text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-black/70 mt-2">
              Minutes
            </div>
          </div>
          <div className="text-6xl md:text-8xl font-bold">:</div>
          <div className="text-center">
            <div className="font-jetbrains text-6xl md:text-8xl font-bold">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="font-jetbrains text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-black/70 mt-2">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}