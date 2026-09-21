import React from "react";

const SHOTS = [
  { src: "/Screenshots/MainFull.jpg", alt: "RaceSense main screen" },
  { src: "/Screenshots/SettingsFull.jpg", alt: "RaceSense settings" },
  { src: "/Screenshots/ShareFull.jpg", alt: "RaceSense share feature" },
  { src: "/Screenshots/FilterFull.jpg", alt: "RaceSense filter" },
];

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

        <ul className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {SHOTS.map((s, i) => (
            <li
              key={s.src}
              className="phone-item snap-center shrink-0 w-[70%] sm:w-[44%] md:w-auto"
            >
              <div className="phone-frame relative rounded-[2.25rem] bg-[#1a1a1e] p-[3px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] border border-white/10 ring-1 ring-white/5">
                {/* Side buttons */}
                <div className="absolute left-0 top-1/3 w-0.5 h-8 bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-l-sm" />
                <div className="absolute right-0 top-1/3 w-0.5 h-12 bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-r-sm" />
                <div className="absolute right-0 top-2/3 w-0.5 h-8 bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] rounded-r-sm" />
                {/* Notch */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[32%] h-6 bg-[#0d0d0f] rounded-b-[18px] z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2e]" />
                </div>
                {/* Screen — uniform aspect ratio, cropped */}
                <div className="aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-[#0d0d0f]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
