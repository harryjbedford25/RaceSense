import CornerTicks from "@/components/racesense/CornerTicks";
import ProfileSection from "@/components/driver/ProfileSection";
import { statCards } from "@/lib/driverStats";

export default function StatGrid({ results }) {
  const cards = statCards(results);

  return (
    <ProfileSection
      index="01"
      title="STATS"
      meta={cards.length ? `${cards.length} tracked` : null}
    >
      {cards.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="relative border border-dashed border-border px-4 py-5 transition-colors hover:border-foreground/40"
            >
              <CornerTicks />
              <div className="font-mono text-2xl font-medium leading-none tracking-[-0.01em] sm:text-[2rem]">
                {card.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="border border-dashed border-border px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
          NO RACE RESULTS LOGGED YET
        </p>
      )}
    </ProfileSection>
  );
}