import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono text-[13px] tracking-[0.25em] uppercase text-[#F4F4F9]">
          RaceSense
        </span>
        <nav className="flex gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
          <a href="#top" className="hover:text-[#D2FF00] transition-colors">Overview</a>
          <a href="#about" className="hover:text-[#D2FF00] transition-colors">About</a>
          <a href="#grid" className="hover:text-[#D2FF00] transition-colors">Launch</a>
          <a href="/legal" className="hover:text-[#D2FF00] transition-colors">Legal</a>
        </nav>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
          Built trackside - 2026
        </span>
      </div>
    </footer>
  );
}