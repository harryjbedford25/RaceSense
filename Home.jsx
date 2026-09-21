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
        <Hero />
        <Showcase />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
