import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LangContext";

export default function FAQ() {
  const sectionRef = useScrollReveal();
  const { t } = useLang();

  return (
    <section id="faq" data-testid="faq-section" className="py-24 lg:py-32 section-alt" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="mb-16 scroll-reveal">
          <p className="overline"><span className="dot" />{t.faq.overline}</p>
          <h2
            className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="faq-title"
          >
            {t.faq.title}
          </h2>
        </div>

        <div className="scroll-reveal delay-1 hairline">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[var(--line)]"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger
                  className="text-left text-base lg:text-[1.2rem] font-normal tracking-[-0.01em] text-[var(--fg)] hover:text-[var(--violet-text)] hover:no-underline py-6 min-h-[44px] font-[var(--font-heading)]"
                  data-testid={`faq-trigger-${i}`}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[14.5px] leading-[1.75] text-[var(--fg-muted)] pb-7 max-w-[80ch]"
                  data-testid={`faq-content-${i}`}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
