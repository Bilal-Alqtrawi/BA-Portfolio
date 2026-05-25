import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const MSGS = { en, ar };

export default function Expertise() {
  const { t, locale } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const cards = MSGS[locale].expertise.cards;

  return (
    <section
      id="expertise"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t("expertise.title")}
            subtitle={t("expertise.subtitle")}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-950/70 hover:border-brand-500/35"
                    : "border-ink-100 bg-ink-50/50 hover:border-brand-500/30"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-rose-400 to-amber-400 opacity-0 transition group-hover:opacity-100" />
                <h3 className="font-display text-xl text-ink-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-700 dark:text-zinc-400">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
