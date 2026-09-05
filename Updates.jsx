import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Countdown from "./Countdown";
import { CheckCircle, Clock, X, Zap, Play, Tag } from "lucide-react";

const PATCH_NOTES = [
  {
    version: "0.2.1",
    date: "September 2026",
    subtitle: "Early Access",
    changes: [
      "Full settings page implementation",
      "Customizable callout options",
      "User preference system",
      "Enhanced configuration controls"
    ]
  },
  {
    version: "0.1.2",
    date: "September 2026",
    subtitle: "Early Access",
    changes: [
      "Play Store closed testing phase",
      "Alpha Timing API integration",
      "Real-time lap time callouts",
      "Context-aware race updates"
    ]
  },
  {
    version: "0.1.0",
    date: "September 2026",
    changes: [
      "Initial public release",
      "Basic lap time callouts",
      "Context-aware updates"
    ]
  }
];

const SCREENSHOTS = [
  {
    src: "/Screenshots/1000053941.jpg",
    alt: "RaceSense screenshot 1"
  },
  {
    src: "/Screenshots/1000053943.jpg",
    alt: "RaceSense screenshot 2"
  },
  {
    src: "/Screenshots/1000053945.jpg",
    alt: "RaceSense screenshot 3"
  },
  {
    src: "/Screenshots/1000053939.jpg",
    alt: "RaceSense screenshot 4"
  }
];

const FUTURE_UPDATES = [
  {
    icon: CheckCircle,
    title: "Ewan Voice Pack",
    description: "Professional race engineer voice pack featuring authentic motorsport commentary style.",
    timeline: "Coming Soon"
  },
  {
    icon: Clock,
    title: "Callout Log & Dashboard",
    description: "Comprehensive logging system with visual dashboard for analyzing your race data and callout history.",
    timeline: "Coming Soon"
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Advanced AI-powered analysis for personalized race strategy recommendations and performance insights.",
    timeline: "Coming Soon"
  }
];

export default function Updates() {
  const [activeShot, setActiveShot] = useState(null);
  const [canScroll, setCanScroll] = useState(false);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => setCanScroll(el.scrollWidth > el.clientWidth + 2);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!activeShot) return;
    const onKey = (event) => {
      if (event.key === "Escape") setActiveShot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeShot]);

  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Updates & Roadmap
          </h1>
          
          <div className="mb-16">
            <div className="text-center mb-4">
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-2">
                Milestone Countdown
              </h2>
              <p className="text-[#F4F4F9] text-lg mb-6">
                1st Production Application submission opens
              </p>
            </div>
            <Countdown />
          </div>

          <div className="mb-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Screenshots
            </h2>
            <div className="relative -mx-6">
              <div
                ref={scrollerRef}
                className="overflow-x-auto overflow-y-hidden px-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:rgba(204,255,0,0.28)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#ccff00]/30"
              >
                <div className="flex justify-start gap-3 pb-3 w-max">
                  {SCREENSHOTS.map((shot) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setActiveShot(shot)}
                      className="group relative shrink-0 snap-start h-[280px] sm:h-[320px] md:h-[360px] bg-white/[0.04] border border-white/10 overflow-hidden text-left transition-colors hover:border-[#ccff00]/40 focus-visible:outline-none focus-visible:border-[#ccff00]"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="h-full w-auto max-w-none object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
              {canScroll && (
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#101012] to-transparent" />
              )}
            </div>
          </div>

          <div className="mb-16 bg-white/5 border border-white/10 p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#ccff00]" strokeWidth={1.5} />
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ccff00]">
                Something's Coming
              </h2>
            </div>
            <div className="text-center space-y-4">
              <p className="text-[#F4F4F9] text-2xl font-bold">
                <span className="text-[#ccff00]">Big Things</span> To Come
              </p>
              <p className="text-[#8E8E93]">
                Stay tuned. Something exciting is on the horizon.
              </p>
              <div className="bg-[#ccff00]/10 border border-[#ccff00]/30 p-4 max-w-md mx-auto">
                <p className="text-[#ccff00] font-mono text-sm">
                  Announcement coming soon
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Patch Notes
            </h2>
            <div className="space-y-6">
              {PATCH_NOTES.map((patch) => (
                <div key={patch.version} className="bg-white/5 border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-jetbrains text-[18px] font-semibold text-[#F4F4F9]">
                        {patch.version}
                      </h3>
                      {patch.subtitle && (
                        <p className="text-[#ccff00] text-sm font-mono mt-1">
                          {patch.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                      {patch.date}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {patch.changes.map((change, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#8E8E93] text-sm">
                        <span className="text-[#ccff00] mt-1">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {activeShot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setActiveShot(null)}
        >
          <button
            type="button"
            onClick={() => setActiveShot(null)}
            className="absolute top-5 right-5 text-[#F4F4F9]/70 hover:text-[#ccff00] transition-colors"
            aria-label="Close screenshot"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <img
            src={activeShot.src}
            alt={activeShot.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain border border-white/10"
          />
        </div>
      )}
    </div>
  );
}