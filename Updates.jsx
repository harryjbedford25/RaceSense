import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Image } from "@/image";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM } from "./config";

/* ---------- content ---------- */

const STATUS = [
  { label: "Right now", value: "Closed testing on Google Play", hex: "#ccff00" },
  { label: "Latest build", value: "v0.3.0, share your race", hex: "#F4F4F9" },
  { label: "Up next", value: "Public launch on Google Play", hex: "#8E8E93" },
];

// Newest first.
const BUILD_LOG = [
  {
    date: "September 2026",
    status: "In progress",
    title: "Closed testing on Google Play",
    body: "RaceSense is with a small group of racers who are giving us feedback before the public launch.",
  },
  {
    date: "September 2026",
    status: "Done",
    title: "Version 0.3.0: share your race",
    body: "Strava-inspired sharing. Turn a session into a card with your track, fastest lap and positions, and share it with the community.",
  },
  {
    date: "August 2026",
    status: "Done",
    title: "Internal testing",
    body: "Core features checked across multiple devices and usage scenarios.",
  },
];

const ROADMAP = [
  {
    name: "Now",
    sub: "In progress",
    hex: "#ccff00",
    items: [
      {
        title: "Community features",
        when: "Q4 2026",
        body: "Leaderboards, achievements and social features built on the share feature, with race comparisons and challenges.",
      },
      {
        title: "Tester feedback and polish",
        body: "Working through what closed testers tell us before the public launch.",
      },
    ],
  },
  {
    name: "Next",
    sub: "Coming up",
    hex: "#F4F4F9",
    items: [
      {
        title: "Public launch",
        body: "Release on Google Play once tester feedback is in and the final polish is done.",
      },
      {
        title: "Web version",
        body: "A browser version for desktop and laptop users.",
      },
      {
        title: "Building the brand",
        when: "Q4 2026",
        body: "Partnerships with drivers, teams, photographers and motorsport creators, plus our first RaceSense ambassadors.",
      },
    ],
  },
  {
    name: "Later",
    sub: "The long game",
    hex: "#8E8E93",
    items: [
      {
        title: "Smarter race engineering",
        when: "2027",
        body: "Moving beyond today's rule-based system, so RaceSense knows more about what's happening in a race and its callouts get more useful.",
      },
      {
        title: "The race engineer in your pocket",
        when: "Long term",
        body: "An intelligent race engineering platform that helps drivers understand what's happening on track and decide better, without a full race engineering team.",
      },
    ],
  },
];

const TEAM_ROLES = [
  {
    title: "Social media lead",
    type: "Social",
    body: "Build RaceSense's presence on Instagram, TikTok and beyond. Create content, grow the community and connect with racers.",
  },
  {
    title: "Content creator",
    type: "Content",
    body: "Make videos, graphics and stories that show RaceSense in action, from track day clips to explainers about race engineering.",
  },
  {
    title: "Community builder",
    type: "Community",
    body: "Connect with racing communities, influencers and tracks. Help us find our first ambassadors and build partnerships.",
  },
];

/* ---------- bits ---------- */

const NODE = {
  "In progress": "bg-[#101012] border-2 border-[#ccff00] ring-4 ring-[#ccff00]/20",
  Done: "bg-[#ccff00]",
};

const TAG = {
  "In progress": "bg-[#ccff00]/20 text-[#ccff00]",
  Done: "bg-white/10 text-[#F4F4F9]",
};

const btnPrimary =
  "font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 text-center hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const btnGhost =
  "font-mono text-[12px] tracking-[0.2em] uppercase border border-white/25 text-[#F4F4F9] px-7 py-4 text-center hover:border-[#ccff00] hover:text-[#ccff00] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ---------- page ---------- */

export default function Updates() {
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

        {/* Header */}
        <header className="relative pt-32 pb-16 overflow-hidden">
        <Image
          src="/Final_1-10.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101012]/60 via-[#101012]/80 to-[#101012]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1] text-[#F4F4F9]">
            What we've built, and what's next.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[#c9c9d0]">
            RaceSense is being built in the open. Here's where the app is today and where it's
            heading.
          </p>

          <dl className="mt-10 grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl">
            {STATUS.map((s) => (
              <div key={s.label} className="border-l-2 pl-4" style={{ borderLeftColor: s.hex }}>
                <dt className="text-[13px] text-[#8E8E93]">{s.label}</dt>
                <dd className="mt-1 text-[15px] font-medium text-[#F4F4F9]">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/#grid" className={btnPrimary}>
              Get early access
            </Link>
            <Link to="/about" className={btnGhost}>
              About
            </Link>
          </div>
        </div>
      </header>

      {/* Build log */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] gap-8 md:gap-16">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#F4F4F9]">Build log</h2>

          <ol className="border-l border-white/15 ml-1.5 max-w-2xl">
            {BUILD_LOG.map((e) => (
              <li key={e.title} className="relative pl-8 pb-10 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full ${NODE[e.status]}`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-jetbrains text-[12px] text-[#8E8E93]">{e.date}</span>
                  <span className={`text-[12px] px-2 py-0.5 rounded ${TAG[e.status]}`}>
                    {e.status}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[#F4F4F9]">{e.title}</h3>
                <p className="mt-1 text-[15px] leading-[1.6] text-[#a9a9b0]">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#F4F4F9]">Roadmap</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-10">
            {ROADMAP.map((col) => (
              <div key={col.name} className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: col.hex }} />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#F4F4F9]">{col.name}</h3>
                  <p className="text-[13px] text-[#8E8E93]">{col.sub}</p>

                  <ul className="mt-4 divide-y divide-white/10">
                    {col.items.map((it) => (
                      <li key={it.title} className="py-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="font-medium text-[#F4F4F9]">{it.title}</h4>
                          {it.when && (
                            <span className="font-jetbrains text-[12px] text-[#8E8E93] shrink-0">
                              {it.when}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[14px] leading-[1.6] text-[#a9a9b0]">{it.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#F4F4F9]">
              Help us grow RaceSense
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-[#a9a9b0]">
              We're looking for people to help build the racing community around the app. No
              experience needed, just enthusiasm for motorsport and making good content.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={`mailto:${CONTACT_EMAIL}?subject=RaceSense`} className={btnPrimary}>
                Get in touch
              </a>
              <a
                href={CONTACT_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGhost}
              >
                Instagram
              </a>
            </div>
          </div>

          <ul className="divide-y divide-white/10 border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03]">
            {TEAM_ROLES.map((r) => (
              <li key={r.title} className="py-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#F4F4F9]">{r.title}</h3>
                  <span className="text-[12px] text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded">
                    {r.type}
                  </span>
                </div>
                <p className="mt-1 text-[15px] leading-[1.6] text-[#a9a9b0]">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
