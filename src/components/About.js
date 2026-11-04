import { ArrowDownTrayIcon, UserIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const MSGS = { en, ar };

export default function About() {
  const { t, locale } = useI18n();
  const highlights = MSGS[locale].about.highlights;

  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 md:py-28 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            icon={UserIcon}
            eyebrow={t("about.kicker")}
            title={t("about.title")}
            subtitle={t("about.headline")}
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-7">
            <p className="text-lg leading-[1.85] text-ink-700 dark:text-zinc-300">
              {t("about.p1")}
            </p>
            <p className="text-lg leading-[1.85] text-ink-700 dark:text-zinc-300">
              {t("about.p2")}
            </p>
            <a
              href={t("about.resumeHref")}
              target="_blank"
              rel="noopener noreferrer"
              className="!mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-brand-400"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              {t("about.resumeCta")}
            </a>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-200/80 bg-ink-50 p-6 sm:p-7 dark:border-zinc-800 dark:bg-zinc-950/60">
              <p className="text-sm font-semibold text-ink-500 dark:text-zinc-400">
                {t("about.factsTitle")}
              </p>
              <dl className="mt-4 divide-y divide-ink-200/80 dark:divide-zinc-800">
                {highlights.map((h) => (
                  <div key={h.title} className="py-4 first:pt-2 last:pb-0">
                    <dt className="font-display text-lg font-bold text-ink-950 dark:text-white">
                      {h.title}
                    </dt>
                    <dd className="mt-0.5 text-sm text-ink-600 dark:text-zinc-400">{h.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
