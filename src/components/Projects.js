import { useState } from "react";
import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import { PROJECTS } from "../data/projects";
import Dialog from "./ui/Dialog";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function ArrowY({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7l6 6M13 7v6H7" />
    </svg>
  );
}

function ArrowNext({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12m0 0l-5-5m5 5l-5 5" />
    </svg>
  );
}

export default function Projects() {
  const { t, isRTL } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const [loaded, setLoaded] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetails = (project) => setSelectedProject(project);

  return (
    <section
      id="projects"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-950" : "bg-ink-50"
      }`}
    >
      {/* max-w-7xl: Comfortable width for 3-column layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </Reveal>

        {/* Responsive grid: 1 column on mobile, 2 on sm/md, 3 on lg */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 active:translate-y-0 active:scale-[0.99] ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-900/70 hover:border-brand-500/40 hover:shadow-card-dark"
                    : "border-ink-100 bg-white hover:border-brand-500/25 hover:shadow-card"
                }`}
                onClick={(e) => {
                  const target = e.target;
                  if (!target.closest("a") && !target.closest("button")) {
                    openDetails(project);
                  }
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-500/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  {!loaded[project.id] ? (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
                  ) : null}

                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onLoad={() =>
                      setLoaded((s) => ({ ...s, [project.id]: true }))
                    }
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] ${
                      loaded[project.id] ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/*
                    Soft bottom scrim — blends image into the card body.
                    Static opacity that rises on hover (opacity only).
                  */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-zinc-950/5 to-transparent transition-opacity duration-300 group-hover:opacity-100 ${
                      isDarkMode ? "opacity-100" : "opacity-60"
                    } ${isDarkMode ? "" : "group-hover:opacity-100"}`}
                  />

                  {/*
                    Editorial index — a hand-numbered serial.
                  */}
                  <span className="absolute start-4 top-4 rounded-full border border-white/15 bg-zinc-950/40 px-3 py-1 font-display text-xs font-semibold tabular-nums tracking-[0.18em] text-white/90 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/*
                  Card body:
                  - flex-col + flex-1: equal-height columns across the grid
                */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Title + hover affordance */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink-950 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                      {t(project.titleKey)}
                    </h3>
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 transition duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white ${
                        isRTL
                          ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                          : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      } dark:border-zinc-700 dark:text-zinc-400`}
                    >
                      <ArrowY className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700 dark:text-zinc-400 line-clamp-2">
                    {t(project.shortDescriptionKey)}
                  </p>

                  {/*
                    Tech tags — with a small brand dot separator,
                    hover lifts the label subtly (translate only).
                  */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 6).map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink-200/80 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-800 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-500/80" />
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Actions — uniform pill row that wraps on small screens */}
                  {(project.demoUrl ||
                    project.dashboardUrl ||
                    project.repoUrl) && (
                    <div className="mt-auto pt-5">
                      <div className="flex flex-wrap gap-2 border-t border-dashed border-ink-200/90 pt-4 dark:border-zinc-800">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-600 px-3 py-1.5 text-center text-xs font-semibold text-white shadow-sm shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-brand-500/25 dark:shadow-none"
                          >
                            {t("common.viewDemo")}
                          </a>
                        )}

                        {project.dashboardUrl && (
                          <a
                            href={project.dashboardUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-brand-500/50 bg-transparent px-3 py-1.5 text-xs font-semibold text-brand-600 transition hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white dark:text-brand-400 dark:hover:text-white"
                          >
                            لوحة التحكم / Dashboard
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ink-200 bg-transparent px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-700 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
                          >
                            {t("common.viewCode")}
                          </a>
                        )}

                        {project.authNote && (
                          <div className="w-full rounded-xl border border-dashed border-brand-500/30 bg-brand-500/5 p-2.5 text-xs leading-normal text-ink-600 dark:text-zinc-400">
                            {t(project.authNote)}
                          </div>
                        )}
                      </div>

                      {/* Accessible details action — also opens the dialog */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openDetails(project);
                        }}
                        aria-label={`${t("projects.details")} — ${
                          t(project.titleKey) /* aria-label only */
                        }`}
                        className="group/det mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink-50 px-3 py-2 text-xs font-semibold text-ink-700 transition-[background-color,color] duration-300 hover:bg-brand-500/10 hover:text-brand-600 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
                      >
                        <span
                          className={`transition-transform duration-300 ${isRTL ? "rotate-180 group-hover/det:-translate-x-0.5" : "group-hover/det:translate-x-0.5"}`}
                        >
                          <ArrowNext className="h-3.5 w-3.5" />
                        </span>
                        {t("projects.details")}
                      </button>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="project-dialog-title"
      >
        {selectedProject && (
          <div className="dark:bg-zinc-900">
            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-200 sm:aspect-[21/9] dark:bg-zinc-800">
              <img
                src={selectedProject.image}
                alt={t(selectedProject.titleKey)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/20"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={t("projects.dialog.closeAria")}
                className="absolute end-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/90 backdrop-blur-sm transition hover:bg-black/60 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2
                id="project-dialog-title"
                className="font-display text-2xl font-bold text-ink-950 dark:text-white sm:text-3xl"
              >
                {t(selectedProject.titleKey)}
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-ink-700 dark:text-zinc-300">
                {t(selectedProject.longDescriptionKey)}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-dashed border-ink-200 pt-6 dark:border-zinc-800">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-500 sm:flex-none"
                  >
                    {t("projects.demo")}
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-full border border-ink-200 px-4 py-2.5 text-center text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-700 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-brand-400/50 dark:hover:text-brand-300 sm:flex-none"
                  >
                    {t("projects.code")}
                  </a>
                )}
              </div>

              {selectedProject.repoUrl &&
                selectedProject.repoUrl.includes("private") && (
                  <p className="mt-3 text-xs text-ink-500 dark:text-zinc-500">
                    {t("projects.privateRepoNote")}
                  </p>
                )}
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
