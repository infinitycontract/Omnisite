import { LineChart, PencilLine, Wallet } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LangContext";

const ICONS = [LineChart, PencilLine, Wallet];

export default function Method() {
  const sectionRef = useScrollReveal();
  const { t } = useLang();

  return (
    <section id="method" data-testid="method-section" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-[62ch] scroll-reveal">
          <p className="overline">
            <span className="dot" />
            {t.method.overline}
          </p>
          <h2
            className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="method-title"
          >
            {t.method.title}
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-[1.7] text-[var(--fg-muted)]">{t.method.lead}</p>
        </div>

        <div className="grid gap-px bg-[var(--line)] border border-[var(--line)] rounded-[14px] overflow-hidden md:grid-cols-3 scroll-reveal delay-1">
          {t.method.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={item.title}
                data-testid={`method-item-${i}`}
                className="group bg-[var(--bg-base)] hover:bg-[var(--bg-elev)] transition-colors duration-500 px-8 pt-11 pb-10"
              >
                <span className="mono block text-[10px] tracking-[0.2em] text-[var(--violet-text)] mb-6">
                  {item.num}
                </span>
                <div className="w-10 h-10 rounded-[11px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center mb-[22px] text-[var(--violet-text)] transition-all duration-500 group-hover:border-[var(--violet-accent)] group-hover:bg-[rgba(139,92,246,0.12)] group-hover:shadow-[0_0_26px_var(--violet-glow)]">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl lg:text-2xl font-normal tracking-tight text-white mb-3.5">{item.title}</h3>
                <p className="text-[14.5px] leading-[1.7] text-[var(--fg-muted)]">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
