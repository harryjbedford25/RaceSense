import React from "react";

// Using phones.png for centered display

export default function Showcase() {
  const bgRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      const bg = bgRef.current;
      if (!el || !bg) return;
      const rect = el.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      bg.style.transform = `translate3d(0, ${offset * -0.15}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Parallax grid background - higher opacity for visual interest */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-1/2 -bottom-1/2 pointer-events-none will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9]">
              Lap times in your ear.
            </h2>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-6 py-3 hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get on Play Store
            </a>
          </div>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#a9a9b0]">
            Screenshots from the current closed-testing build.
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <img
            src="/Screenshots/phones.png"
            alt="RaceSense phones"
            loading="lazy"
            className="max-w-[60rem] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
