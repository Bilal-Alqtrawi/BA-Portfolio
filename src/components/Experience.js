import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const MSGS = { en, ar };

function PeriodBadge({ children }) {
  return (
    <span className="flex-none rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      {children}
    </span>
  );
}

function PresentBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-400/30 dark:text-brand-300">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
      {label}
    </span>
  );
}

function ExpCard({ job, isActive, isDark, presentLabel }) {
  const activeCard = isDark
    ? "border-brand-500/40 bg-zinc-900 shadow-card-dark"
    : "border-brand-500/30 bg-white shadow-card";
  const neutralCard = isDark
    ? "border-zinc-800 bg-zinc-900/50 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand-500/35 hover:shadow-card-dark"
    : "border-ink-100 bg-white/70 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand-500/25 hover:shadow-card";

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-2xl border p-6 sm:p-7 ${isActive ? activeCard : neutralCard}`}
    >
      {isActive ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/90 to-transparent"
        />
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink-950 dark:text-white sm:text-xl">
            {job.role}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
            {job.company}
            <span className="mx-2 text-ink-300 dark:text-zinc-600">·</span>
            <span className="text-ink-500 dark:text-zinc-400">{job.meta}</span>
          </p>
        </div>
        <div className="flex flex-none items-center gap-2">
          {isActive ? <PresentBadge label={presentLabel} /> : null}
          <PeriodBadge>{job.period}</PeriodBadge>
        </div>
      </div>

      <ul className="mt-5 space-y-3 border-t border-dashed border-ink-200/80 pt-5 dark:border-zinc-800">
        {job.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-zinc-400">
            <span className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full bg-brand-500/80" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  const { locale } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const exp = MSGS[locale].experience || en.experience;

  return (
    <section
      id="experience"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-950" : "bg-ink-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={exp.eyebrow}
            title={exp.title}
            subtitle={exp.subtitle}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Role timeline */}
          <div className="space-y-6 lg:col-span-3">
            <Reveal delay={0.04}>
              <ExpCard
                job={exp.current}
                isActive
                presentLabel={exp.present}
                isDark={isDarkMode}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ExpCard job={exp.freelance} isDark={isDarkMode} />
            </Reveal>
          </div>

          {/* Education + certifications */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.08}>
              <article
                className={`h-full rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-card ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-900/50 hover:border-brand-500/35 hover:shadow-card-dark"
                    : "border-ink-100 bg-white/70 hover:border-brand-500/25 hover:shadow-card"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-zinc-500">
                  {exp.education.title}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-950 dark:text-white">
                  {exp.education.school}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                  {exp.education.degree}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-zinc-400">
                  {exp.education.desc}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article
                className={`h-full rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-card ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-900/50 hover:border-brand-500/35 hover:shadow-card-dark"
                    : "border-ink-100 bg-white/70 hover:border-brand-500/25 hover:shadow-card"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-zinc-500">
                  {exp.certifications.title}
                </p>
                <ul className="mt-4 space-y-4">
                  {exp.certifications.items.map((item) => (
                    <li key={item.name} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-500/80" />
                      <div>
                        <p className="text-sm font-semibold text-ink-900 dark:text-zinc-100">
                          {item.name}
                        </p>
                        <p className="text-sm text-ink-600 dark:text-zinc-400">
                          {item.label}
                          {item.year ? (
                            <span className="mx-1.5 text-ink-300 dark:text-zinc-600">
                              ·
                            </span>
                          ) : null}
                          {item.year ? item.year : null}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}