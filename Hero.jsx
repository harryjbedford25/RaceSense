import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/image";

const KART = "/kmr4.jpg";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        console.log('Attempting signup for:', email);
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        const text = await response.text();
        console.log('Response text:', text);
        
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.error('Failed to parse JSON:', e);
          throw new Error('Invalid JSON response: ' + text);
        }
        
        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
          setEmail("");
        } else {
          console.error('Signup failed:', data.error);
          alert('Signup failed: ' + (data.error || 'Unknown error'));
        }
      } catch (error) {
        console.error('Signup error:', error);
        alert('Signup error: ' + error.message);
      }
    }
  };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src={KART}
        alt="Kart racer on the grid at golden hour"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        focalPointY={0.35}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-[#0A0A0C]/40" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-[#D2FF00]"
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
          <a href="#grid" className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#D2FF00] text-black px-7 py-4 hover:bg-white transition-colors">
            Join the Grid
          </a>
          <a href="#about" className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 hover:border-[#D2FF00] hover:text-[#D2FF00] transition-colors">
            About
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-md"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-3">
            Get updates
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/20 text-[#F4F4F9] px-4 py-3 font-mono text-[12px] tracking-[0.1em] uppercase placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#D2FF00] transition-colors"
              required
            />
            <button
              type="submit"
              className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#D2FF00] text-black px-6 py-3 hover:bg-white transition-colors"
            >
              {isSubmitted ? "Joined!" : "Sign Up"}
            </button>
          </form>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-[#D2FF00] font-mono text-[11px] tracking-[0.1em] uppercase"
            >
              Thanks for joining the grid!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}