import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { Image } from "@/image";
import { ChevronRight, ArrowRight } from "lucide-react";

const SCREENSHOTS = [
  {
    src: "/Screenshots/1000053943.jpg",
    alt: "RaceSense screenshot 1"
  },
  {
    src: "/Screenshots/1000053941.jpg",
    alt: "RaceSense screenshot 2"
  },
  {
    src: "/Screenshots/1000053945.jpg",
    alt: "RaceSense screenshot 3"
  },
  {
    src: "/Screenshots/1000053939.jpg",
    alt: "RaceSense screenshot 4"
  }
];

const TEAM_ROLES = [
  {
    title: "Social Media Lead",
    description: "Help build RaceSense's presence across Instagram, TikTok, and other platforms. Create engaging content, grow our community, and connect with racers.",
    type: "Social Media"
  },
  {
    title: "Content Creator",
    description: "Create videos, graphics, and stories that showcase RaceSense in action. From track day content to educational pieces about race engineering.",
    type: "Content"
  },
  {
    title: "Community Builder",
    description: "Connect with racing communities, influencers, and tracks. Help us find our first RaceSense ambassadors and build partnerships.",
    type: "Community"
  }
];

const DEVELOPMENT_DIARY = [
  {
    date: "September 2026",
    title: "Closed Testing",
    description: "RaceSense is now in closed testing on Google Play with select racers providing feedback on real track conditions and race environments.",
    status: "In Progress"
  },
  {
    date: "August 2026",
    title: "Internal Testing",
    description: "Completed internal testing phase with core functionality verified across multiple devices and usage scenarios.",
    status: "Completed"
  },
  {
    date: "July 2026",
    title: "Track Testing",
    description: "Successful testing at multiple UK circuits including Brands Hatch, Donington Park, and Silverstone with real racing data.",
    status: "Completed"
  },
  {
    date: "Coming Soon",
    title: "Production Launch",
    description: "Public release on Google Play Store once closed testing feedback is incorporated and final polish is complete.",
    status: "Planned"
  },
  {
    date: "Coming Soon",
    title: "Web Version",
    description: "Browser-based version of RaceSense for desktop and laptop users, bringing the race engineer experience to more platforms.",
    status: "Planned"
  }
];

const ROADMAP = [
  {
    period: "September 2026",
    status: "In Progress",
    title: "Play Store Beta",
    description: "RaceSense is now in closed beta, with drivers testing the system in real-world racing environments. We're using feedback from early users to improve the experience and build a solid foundation for the future."
  },
  {
    period: "Q4 2026",
    status: "Planned",
    title: "Building the Brand",
    description: "Grow the RaceSense community through partnerships with drivers, teams, photographers and motorsport creators, alongside our first RaceSense ambassadors."
  },
  {
    period: "2027",
    status: "Planned",
    title: "Smarter Race Engineering",
    description: "Continue developing RaceSense beyond its current rule-based system, giving it greater awareness of what is happening during a race and making its callouts more useful and relevant."
  },
  {
    period: "Long Term",
    status: "Our Vision",
    title: "The Race Engineer in Your Pocket",
    description: "Our goal is to build RaceSense into a genuinely intelligent race engineering platform, helping drivers understand what is happening on track and make better decisions, without needing a full race engineering team."
  }
];

export default function Updates() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % SCREENSHOTS.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />

      {/* Hero Mission Statement + Join the Team with shared background */}
      <div className="relative">
        <Image
          src="/Final_1-10.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ objectPosition: 'center 100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101012]/50 via-[#101012]/70 to-[#101012]/70" />
        
        {/* Hero Mission Statement */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-6">
              The RaceSense Story
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#F4F4F9] leading-[0.95] mb-8">
              Every racer deserves a race engineer in their ear.
            </h1>
            <p className="text-xl text-[#8E8E93] leading-relaxed mb-8">
              RaceSense was born from a simple frustration: endless laps with no idea what line was one or two tenths faster. 
              We're changing that by giving every racer the kind of real-time feedback that was once reserved for professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#grid" className="font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-8 py-4 hover:bg-white transition-colors text-center">
                Join the Grid
              </a>
              <a href="/about" className="font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-8 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors text-center">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Team Roles */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93] mb-4">
                  [ 01 / Join the Team ]
                </p>
                <h2 className="text-4xl font-semibold text-[#F4F4F9] mb-4">
                  Help build the future of race engineering
                </h2>
                <p className="text-[#8E8E93] leading-relaxed mb-6">
                  We're looking for passionate people to help grow RaceSense across social media and build our racing community. No experience required—just enthusiasm for motorsport and creating great content.
                </p>
              </motion.div>

              {TEAM_ROLES.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 hover:border-[#ccff00]/30 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#F4F4F9]">
                      {role.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ccff00] bg-[#ccff00]/10 px-2 py-1 rounded">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-[#8E8E93] leading-relaxed">
                    {role.description}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://instagram.com/Race.sense.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-8 py-4 hover:bg-white transition-colors"
                >
                  Instagram
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:harryjbedford25@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-[#F4F4F9] px-8 py-4 hover:border-[#ccff00]/30 hover:text-[#ccff00] transition-colors"
                >
                  Email
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </motion.div>
            </div>

            {/* Screenshot Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative max-w-xs mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreenshot}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[9/17] rounded-lg overflow-hidden bg-black/50"
                  >
                    <Image
                      src={SCREENSHOTS[currentScreenshot].src}
                      alt={SCREENSHOTS[currentScreenshot].alt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevScreenshot}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous screenshot"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={nextScreenshot}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {SCREENSHOTS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        index === currentScreenshot ? 'bg-[#ccff00]' : 'bg-white/30'
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>

      {/* Development Diary */}
      <section className="py-20 bg-[#101012]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93] mb-4">
              [ 02 / Development Diary ]
            </p>
            <h2 className="text-4xl font-semibold text-[#F4F4F9]">
              Building RaceSense
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPMENT_DIARY.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 hover:border-[#ccff00]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                    {entry.date}
                  </span>
                  <span className={`font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded ${
                    entry.status === 'In Progress' 
                      ? 'bg-[#ccff00]/20 text-[#ccff00]' 
                      : entry.status === 'Planned'
                      ? 'bg-white/10 text-[#8E8E93]'
                      : 'bg-[#ccff00]/10 text-[#ccff00]'
                  }`}>
                    {entry.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#F4F4F9] mb-3">
                  {entry.title}
                </h3>
                <p className="text-[#8E8E93] leading-relaxed">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Roadmap */}
      <section className="py-20 bg-[#101012]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93] mb-4">
              [ 03 / What's Coming ]
            </p>
            <h2 className="text-4xl font-semibold text-[#F4F4F9]">
              The Road Ahead
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ROADMAP.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 hover:border-[#ccff00]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
                      {item.period}
                    </span>
                    <span className={`ml-2 font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded ${
                      item.status === 'In Progress' 
                        ? 'bg-[#ccff00]/20 text-[#ccff00]' 
                        : item.status === 'Our Vision'
                        ? 'bg-[#ccff00]/10 text-[#ccff00]'
                        : 'bg-white/10 text-[#8E8E93]'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8E8E93] group-hover:text-[#ccff00] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#F4F4F9] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8E8E93] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-[#8E8E93] mb-6">
              Want to influence what we build next?
            </p>
            <a href="/#grid" className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-8 py-4 hover:bg-white transition-colors">
              Join the Grid
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}