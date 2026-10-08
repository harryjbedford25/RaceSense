import { Trophy } from "lucide-react";
import { Image } from "@/components/ui/image";
import ArcMotif from "@/components/racesense/ArcMotif";
import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const HERO_IMG = "/heroImage.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-24 px-6 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24">
      <ArcMotif
        cols={6}
        rows={5}
        className="pointer-events-none absolute right-0 top-32 hidden h-[520px] w-[44%] text-border lg:block" />
      

      <div className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
        {/* copy */}
        <Reveal className="lg:col-span-6">
          <div className="hidden items-center gap-3 sm:flex">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="rs-label">LIVE SPOKEN TIMING FOR RENTAL KARTING</span>
          </div>

          <h1 className="mt-6 font-heading text-[11.5vw] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-[7.5vw] lg:text-[4.1vw]">
            THE FUTURE OF
            <br />
            RENTAL KARTING.
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
            RaceSense turns live timing into spoken race updates through your
            headphones — lap times, position, gaps, fastest lap. You never look
            down.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a href="https://play.google.com/store/apps/details?id=com.racesense.racesense" target="_blank" rel="noopener noreferrer" className="rs-btn rs-btn-fill">
              GET THE APP <span aria-hidden>→</span>
            </a>
            <a href="#audio" className="rs-btn rs-btn-line">
              <span aria-hidden>▶</span> HEAR A SAMPLE
            </a>
            <a href="#leaderboard" className="rs-btn rs-btn-line">
              <Trophy className="h-3.5 w-3.5" aria-hidden /> LEADERBOARD
            </a>
          </div>
        </Reveal>

        {/* hero image, framed */}
        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative border border-border bg-card p-3">
            <CornerTicks tone="border-foreground/40" size="h-3 w-3" />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[16/11] lg:aspect-[4/5]">
              <Image
                src={HERO_IMG}
                alt="RaceSense spoken live-timing app"
                className="absolute inset-0 h-full w-full"
                fittingType="fill" />
              
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}