import LegalShell from "@/components/racesense/LegalShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "WHAT DOES RACESENSE ACTUALLY DO?",
    a: "It watches the live timing for your session and tells you what changed, out loud, through your headphones — a new personal best, a place gained, a gap closing, a race control message. One short call at a time.",
  },
  {
    q: "DO I HAVE TO LOOK AT MY PHONE DURING A RACE?",
    a: "No — that's the whole point. You set your series and your kart number before you head out, hit start, and put the phone away. Everything after that arrives as speech.",
  },
  {
    q: "HOW OFTEN DOES IT TALK?",
    a: "It can call every lap that matters — a new personal best, a place gained or lost, a gap opening or closing. What it won't do is read the timing screen back to you lap after lap, or interrupt you for a lap that's no different from the last one.",
  },
  {
    q: "WHAT DO I NEED TO RUN IT?",
    a: "An Android phone, a Bluetooth headset or earbuds, and a session that has live timing running. Setup takes seconds.",
  },
  {
    q: "IS IT AVAILABLE ON IPHONE?",
    a: "Not yet. RaceSense is Android only while it's in early access. An iOS version is on the roadmap — join the beta list at racesense.info to hear first.",
  },
  {
    q: "DOES IT RECORD MY AUDIO OR LISTEN TO ME?",
    a: "No. RaceSense doesn't use the microphone and doesn't record anything in the kart. It reads timing data and speaks — your headset is for listening only.",
  },
  {
    q: "WHERE DOES THE TIMING DATA COME FROM?",
    a: "From the same live timing published for your session at the circuit. If that feed pauses, RaceSense simply has nothing new to call until it comes back.",
  },
  {
    q: "HOW MUCH DOES IT COST?",
    a: "RaceSense is in early access, and availability and pricing are confirmed at racesense.info. Downloading the current build is free while the beta runs.",
  },
  {
    q: "WHO MAKES RACESENSE?",
    a: "A small independent team of karters and developers. RaceSense (racesense.info) is not affiliated with, endorsed by, or connected to any tyre gauge manufacturer or any other company operating under the RaceSense name.",
  },
  {
    q: "HOW DO I GET IT?",
    a: "Grab the Android build from Google Play, or start at racesense.info and join the beta list.",
  },
];

export default function Faq() {
  return (
    <LegalShell label="// SUPPORT" title="FREQUENTLY ASKED.">
      <Accordion type="single" collapsible className="border-t border-dashed border-border">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`} className="border-b border-dashed border-border">
            <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold tracking-[-0.02em] hover:no-underline sm:text-lg [&>svg]:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-8 font-mono text-[10px] leading-relaxed tracking-[0.1em] text-muted-foreground/70">
        Still stuck? Everything else lives at{" "}
        <a
          href="https://racesense.info"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          RACESENSE.INFO
        </a>
        .
      </p>
    </LegalShell>
  );
}