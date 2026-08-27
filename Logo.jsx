import React, { useState, useEffect } from "react";

export default function Logo() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Play animation on initial load
    const timer = setTimeout(() => {
      setShowAnimation(true);
      setHasAnimated(true);
      setTimeout(() => setShowAnimation(false), 5000); // Show for 5 seconds
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 5000);
  };

  return (
    <div 
      className="relative cursor-pointer w-24 h-12"
      onMouseEnter={handleMouseEnter}
    >
      {showAnimation ? (
        <iframe
          className="w-full h-full"
          src="https://www.canva.com/design/DAHTb7H3nPE/G6J4p7cw02_iKNqdlKo_Ow/watch?embed"
          allowFullScreen
          style={{ border: 'none', borderRadius: '4px' }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-mono text-[13px] tracking-[0.25em] uppercase text-[#F4F4F9] hover:text-[#ccff00] transition-colors duration-300">
          RaceSense
        </div>
      )}
    </div>
  );
}