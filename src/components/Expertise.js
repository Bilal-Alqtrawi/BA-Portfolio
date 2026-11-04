import {
  WrenchScrewdriverIcon,
  ChartBarSquareIcon,
  ShoppingBagIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const MSGS = { en, ar };
const CARD_ICONS = [ChartBarSquareIcon, ShoppingBagIcon, BoltIcon];

export default function Expertise() {
  const { t, locale } = useI18n();
  const cards = MSGS[locale].expertise.cards;

  return (
    <section id="expertise" className="scroll-mt-16 bg-ink-50 py-20 md:py-28 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            icon={WrenchScrewdriverIcon}
            eyebrow={t("expertise.kicker")}
            title={t("expertise.title")}
            subtitle={t("expertise.subtitle")}
          />
        </Reveal>

        <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/80 md:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
          {cards.map((card, i) => {
            const Icon = CARD_ICONS[i] || BoltIcon;
            return (
            <article key={card.title} className="group bg-white p-7 transition-colors hover:bg-ink-50/60 sm:p-8 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 dark:bg-brand-500/15 dark:text-brand-400">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-950 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-zinc-400">{card.body}</p>
            </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
