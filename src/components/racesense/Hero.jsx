import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";

const HERO_IMG = "/HeroBG.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-background">

      {/* full-bleed image — kept clear so it stays visible */}
      <Image
        src={HERO_IMG}
        alt="RaceSense spoken live-timing app"
        className="absolute inset-0 h-full w-full"
        fittingType="fill" />

      {/* light, single-direction scrims only where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-lg px-6 pb-24 sm:px-10 lg:px-14 lg:pb-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.3em] text-primary"
          >
            // RACESENSE — LIVE SPOKEN TIMING
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-[10vw] leading-[0.88] tracking-[-0.02em] text-foreground sm:text-[8vw] lg:text-[5.5vw] [font-family:'Inter',_ui-sans-serif,_system-ui,_sans-serif] font-semibold">

            THE FUTURE OF
            <br />
            RENTAL KARTING.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-sm font-body text-base leading-relaxed text-foreground/90"
          >
            RaceSense turns live timing into spoken race updates through your
            headphones — lap times, position, gaps, fastest lap. You never look
            down.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#finish"
              className="bg-primary px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85">

              GET THE APP
            </a>
            <a
              href="#audio"
              className="border border-primary px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">

              ▶ HEAR A SAMPLE
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}