import Hero from "@/components/racesense/Hero";
import StatsBand from "@/components/racesense/StatsBand";
import CapabilityGrid from "@/components/racesense/CapabilityGrid";
import PhoneDemo from "@/components/racesense/PhoneDemo";
import AboutSection from "@/components/racesense/AboutSection";
import AudioDemo from "@/components/racesense/AudioDemo";
import Leaderboard from "@/components/racesense/Leaderboard";
import FinishLine from "@/components/racesense/FinishLine";
import NavHUD from "@/components/racesense/NavHUD";
import TelemetryRibbon from "@/components/racesense/TelemetryRibbon";
import PageAura from "@/components/racesense/PageAura";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <PageAura />
      <TelemetryRibbon />
      <NavHUD />
      <Hero />
      <StatsBand />
      <CapabilityGrid />
      <PhoneDemo />
      <AboutSection />
      <AudioDemo />
      <Leaderboard />
      <FinishLine />
    </main>
  );
}