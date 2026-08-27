import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#101012] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-jetbrains text-[16px] tracking-[0.2em] uppercase text-[#F4F4F9] relative">
          <span className="relative z-10">[RACESENSE]</span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-[#ccff00]"></div>
        </div>
        <nav className="flex gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
          <Link to="/" className="hover:text-[#ccff00] transition-colors">Overview</Link>
          <Link to="/#about" className="hover:text-[#ccff00] transition-colors">About</Link>
          <Link to="/#contact" className="hover:text-[#ccff00] transition-colors">Contact</Link>
          <Link to="/#grid" className="hover:text-[#ccff00] transition-colors">Launch</Link>
          <Link to="/legal" className="hover:text-[#ccff00] transition-colors">Legal</Link>
        </nav>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
          Built trackside - 2026
        </span>
      </div>
    </footer>
  );
}