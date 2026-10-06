import LegalShell from "@/components/racesense/LegalShell";
import LegalDoc from "@/components/racesense/LegalDoc";

const SECTIONS = [
  {
    h: "THE SHORT VERSION",
    p: [
      "RaceSense needs a little information to speak your race: what you're driving, and what your live timing says. That's about it. We don't record your audio, we don't use your microphone, and we don't sell your data.",
    ],
  },
  {
    h: "WHAT WE COLLECT",
    bullets: [
      "What you enter: the series and kart number you set up in the app, plus any preferences you choose.",
      "Session data: lap times, positions and gaps from the live timing for your session, so we can work out what changed and say it.",
      "App basics: app version, device type and crash reports, so we can keep RaceSense running on your phone.",
    ],
  },
  {
    h: "AUDIO AND THE MICROPHONE",
    p: [
      "RaceSense does not access your microphone and does not record anything in the kart. Spoken updates are generated from timing data and played to your headphones — we never capture or store what you hear or say.",
    ],
  },
  {
    h: "HOW WE USE IT",
    bullets: [
      "To produce the spoken updates you hear during a session.",
      "To keep the app working, fix crashes and improve reliability.",
      "To understand which parts of the app drivers actually use, so we can make them better.",
    ],
  },
  {
    h: "WHEN WE SHARE IT",
    p: [
      "We share data only where it's needed to run the service, or where the law requires it:",
    ],
    bullets: [
      "With the timing and infrastructure providers that deliver live timing and run the service.",
      "With authorities, if we're legally required to.",
      "We do not sell your personal information, and we don't share it for advertising.",
    ],
  },
  {
    h: "HOW LONG WE KEEP IT",
    p: [
      "We keep information only for as long as it's needed for the purposes above, then delete it or turn it into anonymous statistics that can't be linked back to you.",
    ],
  },
  {
    h: "YOUR CHOICES",
    p: [
      "You're in control of what you enter in the app, and you can clear it at any time. If you'd like a copy of your information or want it deleted, get in touch at racesense.info and we'll sort it.",
    ],
  },
  {
    h: "CHILDREN",
    p: [
      "RaceSense is not intended for children. If you are below the age at which you can consent to data processing in your country, please use the app only with a parent or guardian.",
    ],
  },
  {
    h: "CHANGES TO THIS POLICY",
    p: [
      "If what we do with your information changes, this page changes with it. The date at the top always shows the current version.",
    ],
  },
  {
    h: "CONTACT",
    p: ["Any privacy questions? Find us at racesense.info."],
  },
];

export default function Privacy() {
  return (
    <LegalShell label="// LEGAL" title="PRIVACY POLICY." updated="2 OCTOBER 2026">
      <LegalDoc sections={SECTIONS} />
    </LegalShell>
  );
}