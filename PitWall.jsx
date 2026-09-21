import React from "react";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM } from "./config";

export default function PitWall() {
  return (
    <section id="grid" className="bg-[#ccff00] text-black">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-end">
        <div>
          <h2 className="text-[clamp(3.5rem,11vw,9rem)] font-semibold tracking-[-0.045em] leading-[0.85]">
            Join
            <br />
            the Grid.
          </h2>
        </div>

        <div className="border border-black/10 ring-1 ring-black/5 rounded-2xl bg-black/[0.03] p-8">
          <p className="text-[17px] leading-[1.55] text-black/75 max-w-sm">
            RaceSense is in closed testing on Google Play. Tell us where you race and we'll get you
            on the tester list.
          </p>
          {/* Swap the buttons for the Google Play badge on launch day. */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=RaceSense%20testing`}
              className="font-mono text-[12px] tracking-[0.2em] uppercase bg-black text-[#ccff00] px-7 py-4 text-center hover:bg-black/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Email us
            </a>
            <a
              href={CONTACT_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-[0.2em] uppercase border-2 border-black px-7 py-4 text-center hover:bg-black hover:text-[#ccff00] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
