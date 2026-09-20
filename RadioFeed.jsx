import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Play, Square } from "lucide-react";

// Mirrors the console in the app: a status line, then one "spoken:" line per callout.
// Example laps only. Swap the numbers for real ones if you like.
const LINES = [
  { kind: "status", text: "Waiting for live timing to load..." },
  {
    kind: "spoken",
    text: "New fastest lap.. Lap number, 12. Lap time, 59.41. Position, 5. Gap ahead, 6.20. Gap behind, 1.12.",
  },
  {
    kind: "spoken",
    text: "Lap number, 13. Lap time, 59.87. Position, 4. Gap ahead, 5.48. Gap behind, 0.71.",
  },
  {
    kind: "spoken",
    text: "New fastest lap.. Lap number, 14. Lap time, 58.83. Position, 3. Gap ahead, 5.06. Gap behind, 0.40.",
  },
];

const display = (l) => (l.kind === "spoken" ? `spoken: ${l.text}` : l.text);

export default function RadioFeed() {
  const reduce = useReducedMotion();
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  // progress = which line is being typed and how many characters are showing
  const [progress, setProgress] = useState(
    reduce ? { line: LINES.length, chars: 0 } : { line: 0, chars: 0 }
  );
  const [active, setActive] = useState(-1);
  const [speaking, setSpeaking] = useState(false);
  const session = useRef(0);

  // Typewriter: the one orchestrated moment on the page.
  useEffect(() => {
    const { line, chars } = progress;
    if (line >= LINES.length) return;
    const len = display(LINES[line]).length;
    const t = setTimeout(
      () => {
        if (chars < len) setProgress({ line, chars: chars + 1 });
        else setProgress({ line: line + 1, chars: 0 });
      },
      chars === 0 ? (line === 0 ? 500 : 650) : chars < len ? 20 : 450
    );
    return () => clearTimeout(t);
  }, [progress]);

  useEffect(() => () => {
    if (canSpeak) window.speechSynthesis.cancel();
  }, [canSpeak]);

  const stop = () => {
    session.current += 1;
    if (canSpeak) window.speechSynthesis.cancel();
    setActive(-1);
    setSpeaking(false);
  };

  const play = () => {
    if (speaking) return stop();
    setProgress({ line: LINES.length, chars: 0 }); // skip straight to the full console
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const voice =
      voices.find((v) => v.lang === "en-GB") || voices.find((v) => v.lang.startsWith("en"));
    const id = ++session.current;
    setSpeaking(true);

    const run = (i) => {
      if (session.current !== id) return;
      if (i >= LINES.length) {
        setActive(-1);
        setSpeaking(false);
        return;
      }
      if (LINES[i].kind !== "spoken") return run(i + 1);
      setActive(i);
      const u = new SpeechSynthesisUtterance(LINES[i].text.replace("..", "."));
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

  const textFor = (i) => {
    const full = display(LINES[i]);
    if (progress.line > i) return full;
    if (progress.line === i) return full.slice(0, progress.chars);
    return "";
  };

  return (
    <div className="w-full max-w-lg">
      {canSpeak && (
        <div className="mb-4">
          <button
            type="button"
            onClick={play}
            aria-pressed={speaking}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-8 py-4 text-[17px] font-medium hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {speaking ? (
              <Square className="w-4 h-4" fill="currentColor" aria-hidden="true" />
            ) : (
              <Play className="w-4 h-4" fill="currentColor" aria-hidden="true" />
            )}
            {speaking ? "Stop" : "Hear it"}
          </button>
        </div>
      )}

      <div
        className="border border-[#ccff00] bg-[#101012]/90 backdrop-blur-md p-5 font-jetbrains text-[14px] sm:text-[15px] leading-[1.9] text-[#ccff00] min-h-[17rem]"
        role="log"
        aria-label="Example RaceSense console output"
      >
        {LINES.map((l, i) => {
          const shown = textFor(i);
          if (!shown) return null;
          return (
            <p
              key={i}
              className={`flex gap-3 transition-colors ${
                active === i ? "bg-[#ccff00]/15" : ""
              }`}
            >
              <span aria-hidden="true">&gt;</span>
              <span>{shown}</span>
            </p>
          );
        })}
      </div>

      <p className="mt-3 text-[13px] text-[#8E8E93]">
        Example laps, worded the way the app says them. The voice here is your browser's, so it
        sounds different from the voice in the app.
      </p>
    </div>
  );
}
