import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function PageNotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | RaceSense App";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "The page you're looking for doesn't exist or has been moved. Find your way back to RaceSense App - the virtual race engineer for karting."
    );
  }, []);

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
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-[-0.03em] leading-[1] text-[#ccff00] mb-6">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#F4F4F9] mb-4">
              Page Not Found
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#a9a9b0] mb-8 max-w-xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-6 py-3 hover:bg-white transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Go Home
              </Link>
              <Link
                to="/about"
                className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-6 py-3 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                About RaceSense
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}