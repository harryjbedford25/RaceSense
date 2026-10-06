import LegalShell from "@/components/racesense/LegalShell";
import LegalDoc from "@/components/racesense/LegalDoc";

const SECTIONS = [
  {
    h: "WHO WE ARE",
    p: [
      "RaceSense (racesense.info) is an independent motorsport app that turns live timing into spoken race updates for drivers. RaceSense is not affiliated with, endorsed by, or connected to any tyre gauge manufacturer, or to any other company operating under the RaceSense name.",
    ],
  },
  {
    h: "USING THE APP",
    p: [
      "By downloading, installing or using RaceSense you agree to these terms. If you don't agree with them, please don't use the app.",
      "We grant you a personal, non-transferable licence to use RaceSense for your own, non-commercial driving. You agree not to resell the app, copy or modify it, reverse engineer it, or use it in a way that damages the service or interferes with other drivers.",
    ],
  },
  {
    h: "EARLY ACCESS",
    p: [
      "RaceSense is currently in early access. Features can change, be added or be removed without notice, and the app may be unavailable from time to time while we work on it. We may require you to update to a newer version to keep using it.",
    ],
  },
  {
    h: "DRIVING SAFETY",
    p: [
      "You are responsible for your driving at all times. RaceSense is an audio aid: it does not drive the kart, does not give coaching instructions, and must never distract you from what is happening around you.",
    ],
    bullets: [
      "Never look at or operate your phone while driving.",
      "Follow your circuit's and your series' rules about headsets and audio in the kart.",
      "If an update is unclear or a call doesn't sound right, ignore it and focus on the track.",
    ],
  },
  {
    h: "TIMING DATA",
    p: [
      "Spoken updates are built from live timing supplied for your session, including data provided by third parties we don't control. Timing can be delayed, incomplete or wrong, and we can't guarantee that every change is called or called at the exact moment it happens.",
      "RaceSense is not an official timing system. Never rely on it for official results, safety decisions, or anything beyond your own awareness during a session.",
    ],
  },
  {
    h: "WHAT YOU ENTER",
    p: [
      "You're responsible for the details you put into the app, such as your series and kart number. Make sure they're correct — the spoken updates are only as accurate as what they're set to follow.",
    ],
  },
  {
    h: "OWNERSHIP",
    p: [
      "The RaceSense app, its name, design, interface and content belong to us and remain our property. These terms give you a licence to use the app; they don't transfer any ownership to you.",
    ],
  },
  {
    h: "LIMITS ON OUR LIABILITY",
    p: [
      "RaceSense is provided 'as is' and without warranties of any kind, to the extent the law allows. We are not liable for indirect or consequential losses, lost track time, or losses arising from timing data that was delayed, missing or incorrect.",
      "Nothing in these terms limits any liability that cannot be limited by law.",
    ],
  },
  {
    h: "CHANGES TO THESE TERMS",
    p: [
      "We may update these terms as the app changes. The current version always lives on this page, with the date shown at the top. Continuing to use RaceSense after an update means you accept the updated terms.",
    ],
  },
  {
    h: "CONTACT",
    p: ["Questions about these terms? Find us at racesense.info."],
  },
];

export default function Terms() {
  return (
    <LegalShell label="// LEGAL" title="TERMS OF USE." updated="2 OCTOBER 2026">
      <LegalDoc sections={SECTIONS} />
    </LegalShell>
  );
}