import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM } from "./config";

const DEVELOPMENT_DIARY = [
  {
    date: "July 2026",
    title: "Track Testing",
    description:
      "Successful testing at multiple UK circuits including Brands Hatch, Donington Park, and Silverstone with real racing data.",
    status: "Completed",
  },
  {
    date: "August 2026",
    title: "Internal Testing",
    description:
      "Completed internal testing phase with core functionality verified across multiple devices and usage scenarios.",
    status: "Completed",
  },
  {
    date: "September 2026",
    title: "Version 0.3.0 — Share Feature",
    description:
      "Introduced Strava-inspired share functionality, allowing racers to share their race results and lap times with the community.",
    status: "Completed",
  },
  {
    date: "September 2026",
    title: "Closed Testing",
    description:
      "RaceSense is now in closed testing on Google Play with select racers providing feedback on real track conditions.",
    status: "In Progress",
  },
  {
    date: "Coming Soon",
    title: "Production Launch",
    description:
      "Public release on Google Play Store once closed testing feedback is incorporated and final polish is complete.",
    status: "Planned",
  },
  {
    date: "Coming Soon",
    title: "Web Version",
    description:
      "Browser-based version of RaceSense for desktop and laptop users, bringing the race engineer experience to more platforms.",
    status: "Planned",
  },
];

const ROADMAP = [
  {
    period: "Q4 2026",
    status: "In Progress",
    title: "Community Features",
    description:
      "Enhance the share feature with leaderboards, achievements, and social integrations. Build community-driven competitive elements and foster engagement through race comparisons and challenges.",
  },
  {
    period: "Q4 2026",
    status: "Planned",
    title: "Building the Brand",
    description:
      "Grow the RaceSense community through partnerships with drivers, teams, photographers and motorsport creators, alongside our first RaceSense ambassadors.",
  },
  {
    period: "2027",
    status: "Planned",
    title: "Smarter Race Engineering",
    description:
      "Continue developing RaceSense beyond its current rule-based system, giving it greater awareness of what is happening during a race and making its callouts more useful and relevant.",
  },
  {
    period: "Long Term",
    status: "Our Vision",
    title: "The Race Engineer in Your Pocket",
    description:
      "Our goal is to build RaceSense into a genuinely intelligent race engineering platform, helping drivers understand what is happening on track and make better decisions, without needing a full race engineering team.",
  },
];

const STATUS_STYLES = {
  Completed: "bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/20",
  "In Progress": "bg-[#ccff00] text-black border-[#ccff00]",
  Planned: "bg-white/5 text-[#8E8E93] border-white/10",
  "Our Vision": "bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/20",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border ${STATUS_STYLES[status] || STATUS_STYLES.Planned}`}
    >
      {status}
    </span>
  );
}

export default function Updates() {
  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />

      {/* Page header */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-6">
              Updates
            </p>
            <h1 className="text-[10vw] md:text-[5vw] leading-[0.95] font-semibold tracking-tight text-[#F4F4F9] max-w-3xl">
              Building RaceSense, lap by lap.
            </h1>
            <p className="mt-6 max-w-xl text-[#8E8E93] leading-[1.6] text-[15px] md:text-[17px]">
              Where we are, what we've shipped, and where we're heading next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93]">
              [ 01 / Development Diary ]
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="relative max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

            {DEVELOPMENT_DIARY.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-12 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                    entry.status === "Completed"
                      ? "bg-[#ccff00] border-[#ccff00]"
                      : entry.status === "In Progress"
                      ? "bg-[#101012] border-[#ccff00]"
                      : "bg-[#101012] border-white/20"
                  }`}
                />

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#8E8E93]">
                    {entry.date}
                  </span>
                  <StatusBadge status={entry.status} />
                </div>
                <h3 className="text-xl font-semibold text-[#F4F4F9] mb-2">
                  {entry.title}
                </h3>
                <p className="text-[#8E8E93] leading-[1.6] max-w-xl">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93]">
              [ 02 / What's Coming ]
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {ROADMAP.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#101012] p-8 hover:bg-white/[0.03] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93]">
                    {item.period}
                  </span>
                  <StatusBadge status={item.status} />
                </div>
                <h3 className="text-xl font-semibold text-[#F4F4F9] mb-3 group-hover:text-[#ccff00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#8E8E93] leading-[1.6]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team — compact CTA band */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#8E8E93]">
              [ 03 / Join the Team ]
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#F4F4F9] mb-4">
                Help build the future of race engineering
              </h2>
              <p className="text-[#8E8E93] leading-[1.6] max-w-xl mb-6">
                We're looking for passionate people to help grow RaceSense across
                social media and build our racing community. No experience
                required — just enthusiasm for motorsport and creating great
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href={CONTACT_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase border border-white/15 text-[#F4F4F9] px-7 py-4 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
                >
                  Instagram
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:max-w-xs">
              {["Social Media Lead", "Content Creator", "Community Builder"].map(
                (role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                    <span className="text-[#F4F4F9] font-medium">{role}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
