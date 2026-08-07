import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LangContext";

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function Testimonials() {
  const sectionRef = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 lg:py-32 section-alt"
      ref={sectionRef}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-16 scroll-reveal">
          <p className="overline"><span className="dot" />{t.testimonials.overline}</p>
          <h2
            className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="testimonials-title"
          >
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <blockquote
              key={i}
              data-testid={`testimonial-${i}`}
              className={`quote-card rounded-[14px] px-[30px] py-[34px] flex flex-col justify-between gap-6 scroll-reveal delay-${i + 1}`}
            >
              <div>
                <span className="quote-mark block mb-3.5" aria-hidden="true">&ldquo;</span>
                <p className="text-[15px] leading-[1.75] text-[var(--fg)]">{item.text}</p>
              </div>
              <footer className="flex items-center gap-3.5">
                <div className="avatar w-[38px] h-[38px] rounded-full shrink-0 flex items-center justify-center text-sm font-medium">
                  {initials(item.author)}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[var(--fg)]">{item.author}</div>
                  <div className="mono text-[9.5px] tracking-[0.13em] uppercase text-[var(--fg-dim)]">
                    {item.role}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
