import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const FAQS = [
  {
    question: "What is RaceSense app?",
    answer: "RaceSense is a virtual race engineer app for karting that provides real-time in-ear callouts about lap times and gaps while you're on track. It acts like having a professional race engineer coaching you during your sessions."
  },
  {
    question: "How does RaceSense improve lap times?",
    answer: "RaceSense gives you immediate feedback on your performance through real-time lap time callouts and gap analysis. This helps you identify what's working while you're still on track, allowing you to make adjustments and improve your racing lines instantly."
  },
  {
    question: "Is RaceSense available for iOS?",
    answer: "RaceSense is currently in final development for Android and will be available on Google Play soon. We're working on bringing the app to iOS in the future."
  },
  {
    question: "What devices work with RaceSense?",
    answer: "RaceSense is designed for Android devices and requires a smartphone for real-time audio callouts during racing sessions."
  },
  {
    question: "How does the in-ear coaching work?",
    answer: "RaceSense uses your phone's audio to provide real-time voice callouts about your lap times, sector splits, and gaps to other drivers. This hands-free coaching lets you focus on driving while getting professional feedback."
  },
  {
    question: "Can RaceSense track multiple laps?",
    answer: "Yes, RaceSense tracks your entire session, providing lap-by-lap analysis and historical data so you can see your progress over time and identify trends in your performance."
  },
  {
    question: "Is RaceSense free?",
    answer: "RaceSense will be available for download on Google Play. Check the app store for current pricing and availability as we approach launch."
  }
];

export default function FAQ() {
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

        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ccff00] mb-4">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] leading-[1.6] text-[#a9a9b0] mb-12">
              Everything you need to know about RaceSense, the virtual race engineer for karting.
            </p>

            <div className="space-y-6">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#a9a9b0]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}