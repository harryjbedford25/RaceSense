export default function LegalDoc({ sections }) {
  return (
    <div className="space-y-8">
      {sections.map((s) => (
        <section
          key={s.h}
          className="border-t border-dashed border-border pt-8 first:border-t-0 first:pt-0"
        >
          <h2 className="font-heading text-lg font-semibold tracking-[-0.01em] sm:text-xl">
            {s.h}
          </h2>
          <div className="mt-3 space-y-3">
            {(s.p || []).map((para, i) => (
              <p
                key={i}
                className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {para}
              </p>
            ))}
            {s.bullets && (
              <ul className="space-y-2 pt-1">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 font-body text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span className="text-primary">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}