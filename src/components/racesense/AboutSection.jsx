import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PEOPLE = [
  { initials: "SW", name: "Samuel Williams", role: "LEAD DEVELOPER" },
  {
    initials: "HB",
    name: "Harry Bedford",
    role: "FOUNDER & CREATIVE DIRECTOR",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="about" className="relative bg-background py-20 sm:py-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 sm:px-10"
      >
        <motion.div variants={itemVariants} className="font-mono text-[10px] tracking-[0.3em] text-primary">
          // 04 — ABOUT
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* story */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl leading-[0.95] tracking-[-0.02em] sm:text-5xl">
              IT STARTED WITH A SIMPLE IDEA.
            </h2>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 sm:pl-7">
              <p className="font-body text-lg leading-relaxed text-foreground/90 sm:text-xl">
                "RaceSense App started with a simple idea: knowing which lines are
                faster shouldn't be guesswork. I wanted a way to connect lap times
                with what was actually happening on track, and between us, we turned
                that idea into a mobile race engineer that gives useful feedback,
                lap by lap."
              </p>
            </blockquote>
          </div>

          {/* team */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              THE TEAM
            </div>
            <div className="mt-4 border-t border-border">
              {PEOPLE.map((p) => (
                <motion.div
                  key={p.initials}
                  variants={itemVariants}
                  className="flex items-center gap-5 border-b border-border py-6"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center border border-primary font-heading text-base tracking-[0.05em] text-primary sm:h-16 sm:w-16 sm:text-lg">
                    {p.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-heading text-lg tracking-[-0.02em] sm:text-xl">
                      {p.name}
                    </span>
                    <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      {p.role}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
