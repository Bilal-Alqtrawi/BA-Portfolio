import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "../context/I18nContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);

  const highlights = [
    { title: t("about.highlights.0.title"), desc: t("about.highlights.0.desc") },
    { title: t("about.highlights.1.title"), desc: t("about.highlights.1.desc") },
    { title: t("about.highlights.2.title"), desc: t("about.highlights.2.desc") },
  ];

  return (
    <section
      id="about"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("about.kicker")}
            title={t("about.title")}
            subtitle={t("about.headline")}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-ink-700 dark:text-zinc-300">
              {t("about.p1")}
            </p>
            <p className="text-lg leading-relaxed text-ink-700 dark:text-zinc-300">
              {t("about.p2")}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                {t("about.resumeLabel")}
              </span>
              <a
                href={t("about.resumeHref")}
                download
                className="inline-flex items-center gap-3 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-brand-400 dark:hover:text-zinc-950"
              >
                {t("about.resumeCta")}
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div
                  className={`rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-card ${
                    isDarkMode
                      ? "border-zinc-700/80 bg-zinc-950/60 hover:border-brand-500/40"
                      : "border-ink-100 bg-ink-50/80 hover:border-brand-500/30"
                  }`}
                >
                  <p className="font-display text-2xl text-brand-600 dark:text-brand-400">
                    {h.title}
                  </p>
                  <p className="mt-2 text-sm text-ink-600 dark:text-zinc-400">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
