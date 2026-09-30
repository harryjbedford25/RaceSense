import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const APP_SHOT = "/MainFull.jpg";

const STEPS = [
{ n: "01", t: "CONNECT", d: "Pair your Bluetooth headset or plug in." },
{ n: "02", t: "START", d: "Pick your series, set your kart, hit start." },
{ n: "03", t: "RACE", d: "Hear every change as it happens." }];

export default function PhoneDemo() {
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
    <section id="app" className="relative bg-background py-20 sm:py-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* copy */}
        <motion.div variants={itemVariants}>
          <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
            // 03 — THE APP
          </div>
          <h2 className="mt-2 font-heading text-3xl leading-[0.95] tracking-[-0.02em] sm:text-5xl">
            SET UP IN SECONDS.{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            LISTEN ALL RACE.
          </h2>
          <div className="mt-5 font-mono text-sm tracking-[0.2em] text-primary sm:text-base">
            HEAR EVERY CHANGE, LAP BY LAP.
          </div>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-muted-foreground">
            Choose your series, enter your kart number, and hit start. RaceSense
            joins the live timing feed and speaks to you through your
            headphones — nothing to read on screen.
          </p>

          <div className="mt-10 space-y-px border-y border-border">
            {STEPS.map((s) =>
            <motion.div
              key={s.n}
              variants={itemVariants}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border py-4 last:border-b-0">

                <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
                  {s.n}
                </span>
                <span className="font-heading text-lg tracking-[-0.02em] sm:w-24">
                  {s.t}
                </span>
                <span className="w-full font-body text-sm text-muted-foreground sm:w-auto sm:flex-1">
                  {s.d}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* app screenshot */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[360px] border border-primary/40 p-3 bg-[hsl(var(--popover))]">
            <div className="relative aspect-[1053/2255] w-full overflow-hidden border border-border bg-black">
              <Image
                src={APP_SHOT}
                alt="RaceSense app interface — live timing and spoken race updates"
                className="absolute inset-0 h-full w-full"
                fittingType="fill" />

            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
              <span>[ RACESENSE ]</span>
              <span className="text-primary">● Screenshot from 0.4.0 </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>);

}