import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#101012]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center h-full">
          <div className="font-jetbrains text-[20px] tracking-[0.2em] uppercase text-[#F4F4F9] relative px-2 py-1">
            <span className="relative z-10">[RACESENSE]</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-[#ccff00]"></div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 font-mono text-[12px] tracking-[0.2em] uppercase text-[#8E8E93]">
          <Link to="/" className="hover:text-[#ccff00] transition-colors">Overview</Link>
          <Link to="/about" className="hover:text-[#ccff00] transition-colors">About</Link>
          <Link to="/social" className="hover:text-[#ccff00] transition-colors">Social</Link>
          <Link to="/updates" className="hover:text-[#ccff00] transition-colors">Updates</Link>
          <Link to="/contact" className="hover:text-[#ccff00] transition-colors">Contact</Link>
        </nav>
        <Link
          to="/#grid"
          className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-4 py-2 hover:bg-white transition-colors"
        >
          Join the Grid
        </Link>
      </div>
    </header>
  );
}