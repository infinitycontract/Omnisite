import { Mail, Instagram, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/context/LangContext";

const LOGO_URL = "/omniscent-logo.png";

export default function Footer({ variant = "landing" }) {
  const { t } = useLang();

  const quickLinks = [
    { label: t.nav.method, anchor: "#method" },
    { label: t.nav.services, anchor: "#services" },
    { label: t.nav.results, anchor: "#stats" },
    { label: t.nav.testimonials, anchor: "#testimonials" },
    { label: t.nav.about, anchor: "#about" },
    { label: t.nav.faq, anchor: "#faq" },
  ];

  /* Come nell'header: dalla pagina Piani si torna alla home e poi si scrolla,
     perché l'hash è già occupato dalla rotta. */
  const goAnchor = (anchor) => {
    if (variant === "landing") {
      document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "/";
      setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" }), 250);
    }
  };

  const planLinks = t.plans.tiers.map((tier) => ({ label: tier.name, href: "#/piani" }));

  return (
    <footer id="contact" data-testid="contact-section" className="relative">
      {/* Contatti + form */}
      <div className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
            <div>
              <p className="overline"><span className="dot" />{t.contact.overline}</p>
              <h2
                className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)] font-light tracking-[-0.03em] leading-[1.02] text-white mb-6"
                data-testid="contact-title"
              >
                {t.contact.title}
              </h2>
              <p className="text-base leading-[1.7] text-[var(--fg-muted)] mb-8 max-w-[52ch]">
                {t.contact.desc}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:support@omniscent.space"
                  data-testid="contact-email-button"
                  className="inline-flex items-center gap-3 text-sm font-medium text-[var(--violet-text)] hover:text-white transition-colors min-h-[44px]"
                >
                  <Mail size={16} /> support@omniscent.space
                </a>
                <a
                  href="https://www.instagram.com/omniscent_group"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-instagram-button"
                  className="inline-flex items-center gap-3 text-sm font-medium text-[var(--violet-text)] hover:text-white transition-colors min-h-[44px]"
                >
                  <Instagram size={16} /> @omniscent_group <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Colonne + legale */}
      <div className="hairline pt-16 pb-10 section-alt">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <a href={variant === "plans" ? "#/" : "#hero"} data-testid="footer-logo" className="inline-block">
                <img src={LOGO_URL} alt="OMNISCENT® — Finance & Education" className="footer-logo-img" />
              </a>
              <p className="text-sm leading-[1.7] text-[var(--fg-muted)] max-w-[38ch] mt-5">
                {t.footer.blurb}
              </p>
              <p className="mono text-xs text-[var(--fg-muted)] mt-5">support@omniscent.space</p>
            </div>

            <div>
              <h4 className="mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--fg-dim)] mb-5 font-medium">
                {t.footer.quickLinks}
              </h4>
              <ul className="flex flex-col gap-3.5" data-testid="footer-nav">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => goAnchor(link.anchor)}
                      className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--fg-dim)] mb-5 font-medium">
                {t.footer.plansCol}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {planLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[11.5px] leading-[1.65] text-[var(--fg-dim)] max-w-[78ch] mt-12">
            {t.footer.risk}
          </p>

          <div className="flex flex-wrap gap-4 justify-between items-center mt-10 pt-7 hairline">
            <span className="mono text-[10.5px] tracking-[0.08em] text-[var(--fg-dim)]">
              © {new Date().getFullYear()} OMNISCENT® — {t.footer.rights}
            </span>
            <span className="mono text-[10.5px] tracking-[0.08em] text-[var(--fg-dim)]">
              {t.footer.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
