import { Image } from "@/components/ui/image";
import CornerTicks from "@/components/racesense/CornerTicks";
import Reveal from "@/components/racesense/Reveal";

const APP_SHOT = "/appScreen.jpg";

const STEPS = [
{ n: "01", t: "CONNECT", d: "Pair your Bluetooth headset or plug in." },
{ n: "02", t: "START", d: "Pick your series, set your kart, hit start." },
{ n: "03", t: "RACE", d: "Hear every change as it happens." }];

export default function PhoneDemo() {
  return (
    <section id="app" className="relative scroll-mt-24 py-14 sm:py-24">
      <div className="grid items-center gap-10 px-6 sm:gap-14 sm:px-10 lg:grid-cols-12 lg:gap-16">
        {/* copy */}
        <Reveal className="lg:col-span-6">
          <div className="rs-label hidden sm:block">// 04 — THE APP</div>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
            Set up in seconds.
            <br />
            Listen all race.
          </h2>
          <div className="mt-5 hidden font-mono text-[10px] tracking-[0.24em] text-primary sm:block">
            HEAR EVERY CHANGE, LAP BY LAP
          </div>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted-foreground">
            Choose your series, enter your kart number, and hit start. RaceSense
            joins the live timing feed and speaks to you through your
            headphones — nothing to read on screen.
          </p>

          <div className="mt-8 border-t border-dashed border-border sm:mt-10">
            {STEPS.map((s) =>
            <div
              key={s.n}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-dashed border-border py-4">
              
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
                  {s.n}
                </span>
                <span className="font-heading text-base font-semibold tracking-[-0.01em] sm:w-28 sm:text-lg">
                  {s.t}
                </span>
                <span className="w-full font-body text-sm text-muted-foreground sm:w-auto sm:flex-1">
                  {s.d}
                </span>
              </div>
            )}
          </div>
        </Reveal>

        {/* app screenshot */}
        <Reveal delay={120} className="flex justify-center lg:col-span-6 lg:justify-end">
          <div className="relative w-full max-w-[380px] border border-dashed border-border bg-card p-3">
            <CornerTicks />
            <div className="relative aspect-[1053/2255] w-full overflow-hidden border border-border bg-muted">
              <Image
                src={APP_SHOT}
                alt="RaceSense app interface — live timing and spoken race updates"
                className="absolute inset-0 h-full w-full"
                fittingType="fill" />
              
            </div>
            <div className="mt-3 hidden items-center justify-between font-mono text-[9px] tracking-[0.2em] text-muted-foreground sm:flex">
              <span>[ RACESENSE ]</span>
              <span className="text-primary">● Screenshot from 0.4.0</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}