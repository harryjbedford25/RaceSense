import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Image } from "@/image";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM } from "./config";

/* ---------- content ---------- */

const STATUS = [
  { label: "Right now", value: "Closed testing on Google Play", hex: "#ccff00" },
  { label: "Latest build", value: "v0.4.0, enhanced UI", hex: "#F4F4F9" },
  { label: "Up next", value: "Public launch on Google Play", hex: "#8E8E93" },
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
        body: "Leaderboards, achievements, and social features built on the share feature with race comparisons.",
      },
      {
        title: "Tester feedback",
        body: "Working through closed tester feedback before public launch.",
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
        body: "Release on Google Play after tester feedback and final polish.",
      },
      {
        title: "Web version",
        body: "Browser version for desktop and laptop users.",
      },
      {
        title: "Brand partnerships",
        when: "Q4 2026",
        body: "Partnerships with drivers, teams, and motorsport creators.",
      },
    ],
  },
  {
    name: "Later",
    sub: "The long game",
    hex: "#8E8E93",
    items: [
      {
        title: "AI race engineering",
        when: "2027",
        body: "Beyond rule-based systems for smarter race insights and callouts.",
      },
      {
        title: "Pocket engineer",
        when: "Long term",
        body: "Full race engineering platform accessible without a full team.",
      },
    ],
  },
];

const TEAM_ROLES = [
  {
    title: "Social media lead",
    type: "Social",
    body: "Build presence on Instagram, TikTok and beyond. Create content and grow the racing community.",
  },
  {
    title: "Content creator",
    type: "Content",
    body: "Create videos and graphics showing RaceSense in action, from track clips to race engineering explainers.",
  },
  {
    title: "Community builder",
    type: "Community",
    body: "Connect with racing communities and influencers. Find ambassadors and build partnerships.",
  },
];

/* ---------- bits ---------- */

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

      {/* Roadmap */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#F4F4F9]">Roadmap</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {ROADMAP.map((col) => (
              <div key={col.name} className="border border-white/10 ring-1 ring-white/5 rounded-2xl bg-white/[0.03] overflow-hidden flex flex-col">
                <div className="h-1.5 shrink-0" style={{ backgroundColor: col.hex }} />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#F4F4F9]">{col.name}</h3>
                  <p className="text-[12px] text-[#8E8E93]">{col.sub}</p>

                  <ul className="mt-4 divide-y divide-white/10 flex-1">
                    {col.items.map((it) => (
                      <li key={it.title} className="py-3">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-medium text-[#F4F4F9] text-sm">{it.title}</h4>
                          {it.when && (
                            <span className="font-jetbrains text-[11px] text-[#8E8E93] shrink-0">
                              {it.when}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] leading-[1.5] text-[#a9a9b0]">{it.body}</p>
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
              <li key={r.title} className="py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#F4F4F9]">{r.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.5] text-[#a9a9b0]">{r.body}</p>
                  </div>
                  <span className="text-[11px] text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded shrink-0">
                    {r.type}
                  </span>
                </div>
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
