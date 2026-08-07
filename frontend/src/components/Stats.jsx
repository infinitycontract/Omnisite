import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LangContext";

export default function Stats() {
  const sectionRef = useScrollReveal();
  const { t } = useLang();

  return (
    <section id="stats" data-testid="stats-section" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-16 scroll-reveal">
          <p className="overline"><span className="dot" />{t.stats.overline}</p>
          <h2
            className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="stats-title"
          >
            {t.stats.title}
          </h2>
        </div>

        {/* Griglia a filo: i bordi sottili fanno il lavoro, niente card */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--line)] scroll-reveal delay-1">
          {t.stats.items.map((stat, i) => (
            <div key={i} data-testid={`stat-item-${i}`} className="stat-item px-7 py-10">
              <p className="text-[clamp(2.4rem,4.6vw,3.6rem)] font-extralight tracking-[-0.045em] text-white leading-none mb-4">
                {stat.value}
              </p>
              <p className="text-[13.5px] font-medium text-[var(--fg)] mb-1">{stat.label}</p>
              <p className="mono text-[9.5px] tracking-[0.14em] uppercase text-[var(--fg-dim)]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
