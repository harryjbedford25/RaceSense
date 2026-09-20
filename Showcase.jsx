import React from "react";
import { Image } from "@/image";

const SHOTS = [
  { src: "/Screenshots/1000053943.jpg", alt: "RaceSense screenshot 1" },
  { src: "/Screenshots/1000053941.jpg", alt: "RaceSense screenshot 2" },
  { src: "/Screenshots/1000053945.jpg", alt: "RaceSense screenshot 3" },
  { src: "/Screenshots/1000053939.jpg", alt: "RaceSense screenshot 4" },
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
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 bg-[#101012]">
      {/* Parallax grid background */}
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
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9]">
            The app, as it is today.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#a9a9b0]">
            Screenshots from the current closed-testing build.
          </p>
        </div>

        <ul className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {SHOTS.map((s, i) => (
            <li
              key={s.src}
              className={`phone-item snap-center shrink-0 w-[70%] sm:w-[44%] md:w-auto ${i % 2 ? "md:mt-10" : ""}`}
            >
              <div className="phone-frame relative rounded-[2.25rem] bg-black p-[6px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                {/* Notch */}
                <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[28%] h-5 bg-black rounded-b-[14px] z-20" />
                {/* Screen — uniform aspect ratio, cropped */}
                <div className="aspect-[9/19.5] overflow-hidden rounded-[1.75rem] bg-black">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fittingType="fill"
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
