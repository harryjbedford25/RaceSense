import React from "react";
import Nav from "@/Nav";
import Hero from "@/Hero";
import Features from "@/Features";
import Showcase from "@/Showcase";
import PitWall from "@/PitWall";
import Footer from "@/Footer";

export default function Home() {
  return (
    <div className="bg-[#101012] min-h-screen scroll-smooth">
      <Nav />
      <Showcase />
      <Features />
      <Hero />
      <PitWall />
      <Footer />
    </div>
  );
}
