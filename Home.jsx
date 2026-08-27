import React from "react";
import Nav from "@/Nav";
import Hero from "@/Hero";
import PitWall from "@/PitWall";
import Footer from "@/Footer";

export default function Home() {
  return (
    <div className="bg-[#101012] min-h-screen scroll-smooth">
      <Nav />
      <Hero />
      <PitWall />
      <Footer />
    </div>
  );
}