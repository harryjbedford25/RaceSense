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
          <Link to="/updates" className="hover:text-[#ccff00] transition-colors">Updates</Link>
        </nav>
        <a
          href="https://instagram.com/Race.sense.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-4 py-2 hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          Follow on Instagram
        </a>
      </div>
    </header>
  );
}