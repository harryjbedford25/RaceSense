import React from "react";
import Nav from "@/Nav";
import Hero from "@/Hero";
import FeatureStrip from "@/FeatureStrip";
import About from "@/About";
import PitWall from "@/PitWall";
import ContactForm from "@/ContactForm";
import Footer from "@/Footer";

export default function Home() {
  return (
    <div className="bg-[#101012] min-h-screen scroll-smooth">
      <Nav />
      <Hero />
      <FeatureStrip />
      <About />
      <PitWall />
      <ContactForm />
      <Footer />
    </div>
  );
}