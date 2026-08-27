import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Countdown from "./Countdown";
import { Calendar, CheckCircle, Clock, Zap } from "lucide-react";

const PATCH_NOTES = [
  {
    version: "0.1.0",
    date: "September 2026",
    changes: [
      "Initial public release",
      "Basic lap time callouts",
      "Context-aware updates",
      "Multi-platform support"
    ]
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
  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Updates & Roadmap
          </h1>
          
          <div className="mb-16 bg-white/5 border border-white/10 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-4">
                Launch Countdown
              </h2>
              <p className="text-[#F4F4F9] text-lg mb-8">
                RaceSense launches on September 1st, 2026
              </p>
              <Countdown />
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
                    <h3 className="font-jetbrains text-[18px] font-semibold text-[#F4F4F9]">
                      {patch.version}
                    </h3>
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

          <div className="mb-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 aspect-video flex items-center justify-center">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
                  [ Screenshot coming soon ]
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 aspect-video flex items-center justify-center">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
                  [ Screenshot coming soon ]
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Future Updates
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {FUTURE_UPDATES.map((update, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6">
                  <update.icon className="w-6 h-6 text-[#ccff00] mb-4" strokeWidth={1.5} />
                  <h3 className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9] mb-2">
                    {update.title}
                  </h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed mb-4">
                    {update.description}
                  </p>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#ccff00]">
                    {update.timeline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}