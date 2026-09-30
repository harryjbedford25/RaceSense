import Hero from "@/components/racesense/Hero";
import CapabilityGrid from "@/components/racesense/CapabilityGrid";
import PhoneDemo from "@/components/racesense/PhoneDemo";
import AboutSection from "@/components/racesense/AboutSection";
import AudioDemo from "@/components/racesense/AudioDemo";
import FinishLine from "@/components/racesense/FinishLine";
import NavHUD from "@/components/racesense/NavHUD";
import TelemetryRibbon from "@/components/racesense/TelemetryRibbon";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground pt-16">
      <TelemetryRibbon />
      <Hero />
      <CapabilityGrid />
      <PhoneDemo />
      <AboutSection />
      <AudioDemo />
      <FinishLine />
      <NavHUD />
    </main>
  );
}