import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const TESTIMONIALS = [
  {
    name: "Alex Chen",
    role: "Kart Racer",
    content: "Finally, something that tells me what's happening without taking my eyes off the track. The context engine is exactly what I needed."
  },
  {
    name: "Sarah Mitchell",
    role: "Sim Racing Enthusiast",
    content: "The lap time callouts have completely changed how I practice. I can focus on driving while still getting real-time feedback."
  },
  {
    name: "Marcus Johnson",
    role: "Amateur Racer",
    content: "RaceSense feels like having a professional race engineer in your ear. The situational awareness it provides is invaluable."
  }
];

export default function About() {
  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Our Story
          </h1>
          
          <div className="border-t border-white/10 pt-12">
            <blockquote className="text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight text-[#F4F4F9]">
              "RaceSense started with a simple idea: knowing which lines are faster shouldn't be guesswork. I wanted a way to connect lap times with what was actually happening on track, and between us, we turned that idea into a race engineer that gives useful feedback, lap by lap."
            </blockquote>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-white/15 flex items-center justify-center text-[#ccff00] text-[12px]">SW</span>
                <span>Samuel Williams — Lead Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1A1A1E] border border-white/15 flex items-center justify-center text-[#ccff00] text-[12px]">HB</span>
                <span>Harry Bedford — Founder &amp; Creative Director</span>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-8">
              What Racers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6">
                  <p className="text-[#F4F4F9] leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9]">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93] mt-1">
                      {testimonial.role}
                    </p>
                  </div>
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