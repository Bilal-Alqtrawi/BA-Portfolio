import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  RectangleStackIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import { PROJECTS } from "../data/projects";
import Dialog from "./ui/Dialog";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const PER_PAGE = 4;
const TAGS_ON_CARD = 3;

function LiveBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink-900 shadow-sm dark:bg-zinc-900/95 dark:text-zinc-100">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      {label}
    </span>
  );
}

function ProjectCard({ project, wide, onOpen }) {
  const { t } = useI18n();
  const title = t(project.titleKey);
  const extra = project.tech.length - TAGS_ON_CARD;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/80 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-ink-300 hover:shadow-card dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-card-dark ${
        wide ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-ink-100 dark:bg-zinc-800 ${
          wide ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {project.demoUrl ? (
          <span className="absolute start-3 top-3">
            <LiveBadge label={t("projects.live")} />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-ink-950 dark:text-white">
          {/* stretched button: the whole card opens the details */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-start after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand-500"
          >
            {title}
          </button>
        </h3>

        <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-ink-600 dark:text-zinc-400">
          {t(project.shortDescriptionKey)}
        </p>

        <p className="mt-4 text-sm text-ink-500 dark:text-zinc-500">
          <bdi>{project.tech.slice(0, TAGS_ON_CARD).join(" · ")}</bdi>
          {extra > 0 ? <span className="text-ink-400 dark:text-zinc-600"> · +{extra}</span> : null}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-ink-100 pt-4 dark:border-zinc-800">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-600 dark:text-zinc-100 dark:group-hover:text-brand-400">
              {t("projects.more")}
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              >
                →
              </span>
            </span>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                {t("projects.visit")}
                <ArrowUpRightIcon aria-hidden className="h-3.5 w-3.5 rtl:-scale-x-100" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function Pagination({ page, pages, total, onChange }) {
  const { t } = useI18n();
  const from = (page - 1) * PER_PAGE + 1;
  const to = Math.min(page * PER_PAGE, total);
  const btn =
    "inline-flex h-10 items-center justify-center gap-1 rounded-lg border text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-40";
  const idle =
    "border-ink-200 bg-white text-ink-800 hover:border-ink-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-300";

  return (
    <nav
      aria-label={t("projects.pagination")}
      className="mt-10 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row"
    >
      <p className="text-sm text-ink-500 dark:text-zinc-400" aria-live="polite">
        {t("projects.showing", { from, to, total })}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className={`${btn} ${idle} px-3`}
        >
          <ChevronLeftIcon aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
          <span className="hidden sm:inline">{t("projects.prev")}</span>
        </button>

        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-current={n === page ? "page" : undefined}
            aria-label={t("projects.page", { n })}
            className={`${btn} w-10 tabular-nums ${
              n === page
                ? "border-ink-950 bg-ink-950 text-white dark:border-white dark:bg-white dark:text-ink-950"
                : idle
            }`}
          >
            {n}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onChange(page + 1)}
          disabled={page === pages}
          className={`${btn} ${idle} px-3`}
        >
          <span className="hidden sm:inline">{t("projects.next")}</span>
          <ChevronRightIcon aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
        </button>
      </div>
    </nav>
  );
}

const linkBtn =
  "inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-300";

export default function Projects() {
  const { t } = useI18n();
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);
  const firstRender = useRef(true);

  const pages = Math.ceil(PROJECTS.length / PER_PAGE);
  const visible = PROJECTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const oddCount = visible.length % 2 === 1;

  // Keep the grid in view when switching pages (skip the first render).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = sectionRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  const goTo = (n) => setPage(Math.min(Math.max(n, 1), pages));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-16 bg-white py-20 md:py-28 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            icon={RectangleStackIcon}
            eyebrow={t("projects.kicker")}
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </Reveal>

        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {visible.map((project, i) => {
              // odd count on a page: the last card becomes a full-width wide card
              const wide = oddCount && i === visible.length - 1;
              return (
                <li key={project.id} className={wide ? "md:col-span-2" : ""}>
                  <ProjectCard project={project} wide={wide} onOpen={setSelected} />
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>

        {pages > 1 ? (
          <Pagination page={page} pages={pages} total={PROJECTS.length} onChange={goTo} />
        ) : null}
      </div>

      <Dialog isOpen={Boolean(selected)} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="relative aspect-[16/9] overflow-hidden bg-ink-100 dark:bg-zinc-800">
              <img
                src={selected.image}
                alt={t(selected.titleKey)}
                decoding="async"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={t("projects.dialog.closeAria")}
                className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-sm transition hover:bg-white dark:bg-zinc-900/95 dark:text-zinc-100"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2
                id="project-dialog-title"
                className="font-display text-2xl font-bold text-ink-950 sm:text-3xl dark:text-white"
              >
                {t(selected.titleKey)}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-zinc-300">
                {t(selected.longDescriptionKey)}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {selected.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {selected.authNote ? (
                <div className="mt-6 flex gap-3 rounded-xl border border-ink-200 bg-ink-50 p-4 text-sm text-ink-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
                  <KeyIcon aria-hidden className="mt-0.5 h-4 w-4 flex-none text-ink-500" />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink-900 dark:text-zinc-100">
                      {t("projects.guestAccess")}
                    </p>
                    <p className="mt-0.5 break-words">
                      {t(selected.authNote).replace(/^💡\s*/u, "")}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                {selected.demoUrl && (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                  >
                    {t("projects.visit")}
                    <ArrowUpRightIcon aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                )}
                {selected.dashboardUrl && (
                  <a href={selected.dashboardUrl} target="_blank" rel="noreferrer" className={linkBtn}>
                    {t("common.dashboard")}
                    <ArrowUpRightIcon aria-hidden className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                )}
                {selected.repoUrl && (
                  <a href={selected.repoUrl} target="_blank" rel="noreferrer" className={linkBtn}>
                    {t("projects.code")}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
