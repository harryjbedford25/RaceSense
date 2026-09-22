import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Disambiguation() {
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
              Important Notice
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-[#F4F4F9] mb-6">
              RaceSense App vs RaceSense Tyre Gauge
            </h1>
            <p className="text-[16px] leading-[1.6] text-[#a9a9b0] mb-12">
              There are two different products with similar names. This page clarifies the difference between RaceSense App (this website) and RaceSense tyre gauges.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-[#ccff00]/20 ring-1 ring-[#ccff00]/10 rounded-2xl bg-[#ccff00]/5 p-6">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#ccff00] mb-4">
                  RaceSense App (This Website)
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.6] text-[#F4F4F9]">
                  <li>• Mobile software application for Android</li>
                  <li>• Provides real-time lap analysis and coaching</li>
                  <li>• In-ear callouts about lap times and gaps</li>
                  <li>• Virtual race engineer for karting</li>
                  <li>• Available at racesense.info</li>
                  <li>• Coming soon to Google Play</li>
                </ul>
              </div>

              <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#8E8E93] mb-4">
                  RaceSense Tyre Gauge
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.6] text-[#a9a9b0]">
                  <li>• Physical hardware device for measuring tyre pressure</li>
                  <li>• Sold by Fastmate Racing and Swimovate Limited</li>
                  <li>• Not a mobile application</li>
                  <li>• Different product and company</li>
                  <li>• Available at fastmateracing.com</li>
                  <li>• Not affiliated with RaceSense App</li>
                </ul>
              </div>
            </div>

            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6 mb-12">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#8E8E93] mb-4">
                Paddiq
              </h2>
              <ul className="space-y-3 text-[15px] leading-[1.6] text-[#a9a9b0]">
                <li>• Separate karting application</li>
                <li>• Different company and product</li>
                <li>• Not affiliated with RaceSense App</li>
                <li>• RaceSense App is independent from Paddiq</li>
              </ul>
            </div>

            <div className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-4">
                No Affiliation
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#a9a9b0]">
                RaceSense App is completely independent and not affiliated with, connected to, or related to RaceSense tyre gauges, Fastmate Racing, Swimovate Limited, or Paddiq. We are separate companies with different products. RaceSense App is a mobile software application for karting lap analysis, while RaceSense tyre gauges are physical devices for measuring tyre pressure and Paddiq is a separate karting application.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}