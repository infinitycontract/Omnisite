import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LangContext";

export default function About() {
  const sectionRef = useScrollReveal();
  const { t } = useLang();

  return (
    <section id="about" data-testid="about-section" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 grid gap-16 lg:gap-24 lg:grid-cols-[0.85fr_1.15fr] items-start">
        {/* sticky: il titolo segue la colonna lunga invece di lasciare un vuoto alto */}
        <div className="lg:sticky lg:top-[150px] scroll-reveal">
          <p className="overline"><span className="dot" />{t.about.overline}</p>
          <h2
            className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="about-title"
          >
            {t.about.title}
          </h2>
        </div>

        <div className="scroll-reveal delay-1">
          <p className="text-base lg:text-lg leading-[1.7] text-[var(--fg-muted)]">{t.about.p1}</p>
          <p className="mt-5 text-base lg:text-lg leading-[1.7] text-[var(--fg-muted)]">{t.about.p2}</p>
          <p className="mt-8 text-2xl font-light tracking-tight leading-[1.35] text-[var(--fg)]">
            {t.about.p3}{" "}
            <span className="font-medium text-[var(--violet-text)]">{t.about.p3Accent}</span>.
          </p>

          <div className="mt-10 rounded-[14px] border border-[var(--line)] bg-[var(--surface)] px-[30px] py-[34px]">
            {t.about.panel.map((row, i) => (
              <div
                key={row.k}
                className={`flex flex-col sm:flex-row gap-2 sm:gap-4 py-[18px] ${
                  i === 0 ? "pt-0" : ""
                } ${i === t.about.panel.length - 1 ? "pb-0" : "border-b border-[var(--line)]"}`}
              >
                <span className="mono text-[9.5px] tracking-[0.15em] uppercase text-[var(--fg-dim)] sm:w-24 shrink-0 sm:pt-1">
                  {row.k}
                </span>
                <span className="text-sm leading-[1.65] text-[var(--fg-muted)]">{row.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
