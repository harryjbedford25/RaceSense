import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Square } from "lucide-react";

// Colour is data here, the way it is on a timing screen:
// lime = faster, purple = best of the session, amber = slower.
const TONES = {
  faster: { bar: "border-[#ccff00]", text: "text-[#ccff00]" },
  best: { bar: "border-[#b56cff]", text: "text-[#b56cff]" },
  slower: { bar: "border-[#ffb020]", text: "text-[#ffb020]" },
};

// Example callouts only. `text` is what's shown, `say` is what's spoken.
const CALLOUTS = [
  {
    lap: 5,
    time: "1:04.212",
    delta: "-0.214",
    tone: "faster",
    text: "Two tenths up on your best.",
    say: "Lap five. One oh four point two one two. Two tenths up on your best.",
  },
  {
    lap: 6,
    time: "1:04.530",
    delta: "+0.104",
    tone: "slower",
    text: "Sector two is where the time went.",
    say: "Lap six. One oh four point five three oh. Sector two is where the time went.",
  },
  {
    lap: 7,
    time: "1:03.988",
    delta: "-0.224",
    tone: "best",
    text: "Purple lap. Quickest of the session.",
    say: "Lap seven. One oh three point nine eight eight. Purple lap. Quickest of the session.",
  },
  {
    lap: 8,
    time: "1:04.101",
    delta: "+0.113",
    tone: "slower",
    text: "Gap ahead 1.3. Gap behind 0.8.",
    say: "Lap eight. One oh four point one oh one. Gap ahead one point three. Gap behind point eight.",
  },
];

export default function RadioFeed() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(-1);
  const [speaking, setSpeaking] = useState(false);
  const session = useRef(0);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  const stop = () => {
    session.current += 1;
    if (canSpeak) window.speechSynthesis.cancel();
    setActive(-1);
    setSpeaking(false);
  };

  useEffect(() => () => {
    if (canSpeak) window.speechSynthesis.cancel();
  }, [canSpeak]);

  const play = () => {
    if (speaking) return stop();
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const voice =
      voices.find((v) => v.lang === "en-GB") ||
      voices.find((v) => v.lang.startsWith("en"));
    const id = ++session.current;
    setSpeaking(true);

    const run = (i) => {
      if (session.current !== id) return;
      if (i >= CALLOUTS.length) {
        setActive(-1);
        setSpeaking(false);
        return;
      }
      setActive(i);
      const u = new SpeechSynthesisUtterance(CALLOUTS[i].say);
      if (voice) u.voice = voice;
      u.lang = voice?.lang || "en-GB";
      u.rate = 1.05;
      u.onend = () => run(i + 1);
      u.onerror = () => {
        if (session.current === id) stop();
      };
      synth.speak(u);
    };
    run(0);
  };

  return (
    <div className="w-full max-w-md bg-[#101012]/85 backdrop-blur-md border border-white/15">
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
        <div>
          <p className="text-[15px] font-semibold text-[#F4F4F9]">Your race engineer</p>
          <p className="text-[13px] text-[#8E8E93]">Example callouts</p>
        </div>
        {canSpeak && (
          <button
            type="button"
            onClick={play}
            aria-pressed={speaking}
            className="inline-flex items-center gap-2 bg-[#ccff00] text-black px-4 py-2 text-[13px] font-semibold hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {speaking ? (
              <Square className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" />
            ) : (
              <Play className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" />
            )}
            {speaking ? "Stop" : "Hear it"}
          </button>
        )}
      </div>

      <ol aria-live="off">
        {CALLOUTS.map((c, i) => {
          const tone = TONES[c.tone];
          return (
            <motion.li
              key={c.lap}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.5 + i * 0.8, duration: 0.4 }}
              className={`grid grid-cols-[2rem_1fr_auto] items-center gap-4 px-5 py-4 border-l-2 border-b border-b-white/5 transition-colors ${tone.bar} ${
                active === i ? "bg-white/10" : ""
              }`}
            >
              <span className="font-jetbrains text-[12px] text-[#8E8E93]">L{c.lap}</span>
              <p className="text-[15px] leading-snug text-[#F4F4F9]">{c.text}</p>
              <div className="text-right font-jetbrains leading-tight">
                <div className="text-[13px] text-[#F4F4F9]">{c.time}</div>
                <div className={`text-[12px] ${tone.text}`}>{c.delta}</div>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <p className="px-5 py-3 text-[12px] text-[#8E8E93]">
        Lime is faster, purple is your best, amber is slower.
      </p>
    </div>
  );
}
