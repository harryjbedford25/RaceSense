import React, { useState, useEffect } from "react";

export default function Logo() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Play animation on initial load
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <div className="font-mono text-[13px] tracking-[0.25em] uppercase">
        {isAnimating ? (
          <span className="inline-block text-[#ccff00]">
            <span className="inline-block animate-[wave_0.5s_ease-in-out]">R</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.1s]">a</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.2s]">c</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.3s]">e</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.4s]">S</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.5s]">e</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.6s]">n</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.7s]">s</span>
            <span className="inline-block animate-[wave_0.5s_ease-in-out_0.8s]">e</span>
          </span>
        ) : (
          <span className="inline-block text-[#F4F4F9] hover:text-[#ccff00] transition-colors duration-300">
            RaceSense
          </span>
        )}
      </div>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}