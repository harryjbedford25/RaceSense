import React from "react";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0A0A0C]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-[13px] tracking-[0.25em] uppercase text-[#F4F4F9]">
          RaceSense
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono text-[12px] tracking-[0.2em] uppercase text-[#8E8E93]">
          <a href="#top" className="hover:text-[#D2FF00] transition-colors">Overview</a>
          <a href="#about" className="hover:text-[#D2FF00] transition-colors">About</a>
          <a href="#grid" className="hover:text-[#D2FF00] transition-colors">Join the Grid</a>
        </nav>
        <a
          href="#grid"
          className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#D2FF00] text-black px-4 py-2 hover:bg-white transition-colors"
        >
          Coming Soon
        </a>
      </div>
    </header>
  );
}