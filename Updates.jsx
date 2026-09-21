import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const UPDATES = [
  {
    date: "September 2026",
    title: "Closed Testing",
    description: "RaceSense is now in closed testing on Google Play. We're working with a select group of racers to refine the experience.",
    status: "Current"
  },
  {
    date: "Coming Soon",
    title: "Public Launch",
    description: "After incorporating tester feedback, we'll be opening RaceSense to everyone on Google Play.",
    status: "Upcoming"
  },
  {
    date: "Q4 2026",
    title: "Community Features",
    description: "Leaderboards, achievements, and social features to connect racers and share performance data.",
    status: "Planned"
  }
];

const ROADMAP = [
  {
    phase: "Now",
    items: [
      "Closed testing with select racers",
      "UI refinements based on feedback",
      "Performance optimization"
    ]
  },
  {
    phase: "Next",
    items: [
      "Public launch on Google Play",
      "Web version for desktop users",
      "Enhanced readout console features"
    ]
  },
  {
    phase: "Future",
    items: [
      "AI-powered race engineering",
      "Advanced telemetry analysis",
      "Team collaboration features"
    ]
  }
];

export default function Updates() {
  return (
    <div className="bg-[#101012] min-h-screen relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative">
        <Nav />

        {/* Header */}
        <section className="pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ccff00] mb-4">
              Updates
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9]">
              What's happening with RaceSense
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-[#a9a9b0]">
              Track our progress from closed testing to public launch. Here's what we're working on and what's coming next.
            </p>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-8">
              Latest Updates
            </h2>
            <div className="space-y-6">
              {UPDATES.map((update, index) => (
                <div 
                  key={index} 
                  className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                      {update.date}
                    </span>
                    <span className={`font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full ${
                      update.status === 'Current' 
                        ? 'bg-[#ccff00]/10 text-[#ccff00]' 
                        : update.status === 'Upcoming'
                        ? 'bg-white/10 text-[#F4F4F9]'
                        : 'bg-white/5 text-[#8E8E93]'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-2">
                    {update.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#a9a9b0]">
                    {update.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-8">
              Roadmap
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ROADMAP.map((phase, index) => (
                <div 
                  key={index} 
                  className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-4">
                    {phase.phase}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-[#ccff00] mt-1">›</span>
                        <span className="text-[15px] leading-[1.5] text-[#a9a9b0]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#F4F4F9] mb-4">
              Want to try RaceSense?
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#a9a9b0] mb-8">
              Join our closed testing program and be among the first to experience real-time race coaching.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-8 py-4 hover:bg-white transition-colors inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Early Access
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
