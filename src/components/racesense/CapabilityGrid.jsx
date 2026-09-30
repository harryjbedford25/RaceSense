import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BG = "/KMR4.jpg";

const STAGES = [
  {
    n: "01",
    title: "IT LISTENS",
    body: "RaceSense joins the live timing feed for your series and your kart number, reading every lap the moment it is posted.",
  },
  {
    n: "02",
    title: "IT READS THE RACE",
    body: "Each update is measured against your last lap — a new personal best, a place gained, a gap opening or closing, a flag on track.",
  },
  {
    n: "03",
    title: "IT SPEAKS",
    body: "Only what changed gets called, in one short sentence through your headphones — so your eyes stay where the lap needs them.",
  },
];

const OUTCOMES = [
  "EYES NEVER LEAVE THE TRACK",
  "PERSONAL BESTS, THE LAP THEY HAPPEN",
  "GAPS THAT CLOSE IN REAL TIME",
  "RACE CONTROL UPDATES",
];

export default function CapabilityGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-slate-100 py-20 sm:py-28"
    >
      <Image
        src={BG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fittingType="fit"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 px-6 sm:px-10"
      >
        <motion.div variants={itemVariants} className="font-mono text-[10px] tracking-[0.3em] text-primary">
          // 02 — WHAT IT DOES
        </motion.div>
        <motion.h2 variants={itemVariants} className="mt-2 max-w-3xl font-heading text-3xl leading-[0.95] tracking-[-0.02em] sm:text-5xl">
          A RACE ENGINEER IN YOUR EAR.
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
          RaceSense isn't a dashboard to read. It watches your live timing, works
          out what just changed, and tells you in one short sentence — so you can
          drive the lap instead of studying it.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {STAGES.map((s) => (
            <motion.div
              key={s.n}
              variants={itemVariants}
              className="border-t-2 border-primary pt-5"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-primary">
                {s.n}
              </div>
              <h3 className="mt-3 font-heading text-xl tracking-[-0.02em] sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          {OUTCOMES.map((o) => (
            <span key={o}>
              <span className="text-primary">●</span> {o}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}