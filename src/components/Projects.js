import { useState } from "react";
import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import { PROJECTS } from "../data/projects";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const [loaded, setLoaded] = useState({});

  return (
    <section
      id="projects"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-950" : "bg-ink-50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition hover:shadow-card ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-900/70 hover:border-brand-500/35"
                    : "border-ink-100 bg-white hover:border-brand-500/25"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  {!loaded[project.id] ? (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
                  ) : null}
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onLoad={() =>
                      setLoaded((s) => ({ ...s, [project.id]: true }))
                    }
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                      loaded[project.id] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="font-display text-2xl text-ink-950 dark:text-white">
                    {t(project.titleKey)}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-700 dark:text-zinc-400">
                    {t(project.descriptionKey)}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-ink-200/80 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.demoUrl ||
                  project.dashboardUrl ||
                  project.repoUrl ? (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-500 sm:flex-none"
                        >
                          {t("common.viewDemo")}
                        </a>
                      )}

                      {project.dashboardUrl && (
                        <a
                          href={project.dashboardUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-full border border-brand-500 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-brand-500 transition hover:bg-brand-500 hover:text-white sm:flex-none"
                        >
                          لوحة التحكم / Dashboard
                        </a>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-full border border-ink-200 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-ink-900 transition hover:border-brand-500/50 hover:text-brand-700 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-brand-400/50 dark:hover:text-brand-300 sm:flex-none"
                        >
                          {t("common.viewCode")}
                        </a>
                      )}

                      {project.authNote && (
                        <div className="rounded-xl border border-dashed border-brand-500/35 bg-brand-500/5 p-3 text-xs leading-normal text-ink-600 dark:text-zinc-400">
                          {t(project.authNote)}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
