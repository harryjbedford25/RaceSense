import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const FAQS = [
  {
    question: "What is RaceSense app?",
    answer: "RaceSense App is a mobile application for karting that provides real-time lap analysis and voice coaching. It is a software app for Android devices that gives in-ear callouts about lap times and gaps while you're on track."
  },
  {
    question: "Is RaceSense App related to RaceSense tyre gauges?",
    answer: "No. RaceSense App is a completely independent mobile software application for karting lap analysis. It is not related to, affiliated with, or connected to RaceSense tyre gauges, Fastmate Racing, or Swimovate Limited. We are a separate company focused on mobile apps for motorsport coaching."
  },
  {
    question: "Is RaceSense App related to Paddiq?",
    answer: "No. RaceSense App is not affiliated with, connected to, or related to Paddiq. RaceSense App is an independent mobile application for karting lap analysis and coaching. We are separate products from different companies."
  },
  {
    question: "How does RaceSense improve lap times?",
    answer: "RaceSense App gives you immediate feedback on your performance through real-time lap time callouts and gap analysis. This helps you identify what's working while you're still on track, allowing you to make adjustments and improve your racing lines instantly through your smartphone."
  },
  {
    question: "Is RaceSense available for iOS?",
    answer: "RaceSense App is currently in final development for Android and will be available on Google Play soon. We're working on bringing the app to iOS in the future."
  },
  {
    question: "What devices work with RaceSense?",
    answer: "RaceSense App is designed for Android devices and requires a smartphone for real-time audio callouts during racing sessions. It is a mobile application, not hardware."
  },
  {
    question: "How does the in-ear coaching work?",
    answer: "RaceSense App uses your phone's audio to provide real-time voice callouts about your lap times, sector splits, and gaps to other drivers. This hands-free coaching lets you focus on driving while getting professional feedback through your smartphone."
  },
  {
    question: "Can RaceSense track multiple laps?",
    answer: "Yes, RaceSense App tracks your entire session, providing lap-by-lap analysis and historical data so you can see your progress over time and identify trends in your performance."
  },
  {
    question: "Is RaceSense free?",
    answer: "RaceSense App will be available for download on Google Play. Check the app store for current pricing and availability as we approach launch."
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

            <div className="mt-12 border border-[#ccff00]/20 ring-1 ring-[#ccff00]/10 rounded-2xl bg-[#ccff00]/5 p-6">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#ccff00] mb-3">
                Important Note
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#F4F4F9] mb-4">
                RaceSense App is a mobile software application and is not affiliated with RaceSense tyre gauges, Fastmate Racing, Swimovate Limited, or Paddiq.
              </p>
              <Link
                to="/disambiguation"
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ccff00] hover:text-white transition-colors"
              >
                Learn more about the difference →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}