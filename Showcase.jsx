import React from "react";
import { Image } from "@/image";

const SHOTS = [
  { src: "/Screenshots/1000053943.jpg", alt: "RaceSense screenshot 1" },
  { src: "/Screenshots/1000053941.jpg", alt: "RaceSense screenshot 2" },
  { src: "/Screenshots/1000053945.jpg", alt: "RaceSense screenshot 3" },
  { src: "/Screenshots/1000053939.jpg", alt: "RaceSense screenshot 4" },
];

export default function Showcase() {
  return (
    <section className="bg-[#101012] border-t border-white/10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9]">
            The app, as it is today.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#a9a9b0]">
            Screenshots from the current closed-testing build.
          </p>
        </div>

        <ul className="mt-14 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {SHOTS.map((s, i) => (
            <li
              key={s.src}
              className={`snap-center shrink-0 w-[68%] sm:w-[42%] md:w-auto ${i % 2 ? "md:mt-16" : ""}`}
            >
              <div className="rounded-[1.75rem] border border-white/15 bg-black p-2">
                <div className="aspect-[9/19] overflow-hidden rounded-[1.25rem] bg-black">
                  <Image src={s.src} alt={s.alt} className="w-full h-full object-contain" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
