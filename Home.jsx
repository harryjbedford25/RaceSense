import React, { useEffect, useRef, useState } from "react";
import Nav from "@/Nav";
import Hero from "@/Hero";
import Features from "@/Features";
import Showcase from "@/Showcase";
import PitWall from "@/PitWall";
import Footer from "@/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const isMobileRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    // Random movement for mobile
    const animateRandom = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const newX = 20 + Math.random() * 60;
        const newY = 20 + Math.random() * 60;
        setMousePosition({ x: newX, y: newY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    intervalRef.current = setInterval(animateRandom, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bg-[#101012] min-h-screen scroll-smooth relative overflow-hidden">
      {/* Subtle yellow glow that follows mouse on desktop, moves randomly on mobile */}
      <div
        className="fixed pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(204, 255, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <Nav />
        {/* Google Play Badge Placeholder */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
          <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] px-6 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#F4F4F9]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Get it on</p>
              <p className="text-sm font-semibold text-[#F4F4F9]">Google Play</p>
            </div>
          </div>
        </div>
        <Showcase />
        <Features />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
