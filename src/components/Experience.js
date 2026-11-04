import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const MSGS = { en, ar };

function Phases({ title, phases }) {
  return (
    <div className="mt-5">
      <p className="text-xs font-semibold text-ink-500 dark:text-zinc-400">{title}</p>
      <ol className="mt-2 grid gap-2 sm:grid-cols-2">
        {phases.map((p, i) => {
          const isLatest = i === phases.length - 1;
          return (
            <li
              key={p.label}
              className={`relative rounded-xl border px-3.5 py-2.5 ${
                isLatest
                  ? "border-brand-500/40 bg-brand-500/[0.06] dark:border-brand-400/40"
                  : "border-ink-200 bg-ink-50 dark:border-zinc-800 dark:bg-zinc-950/50"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  isLatest
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-ink-800 dark:text-zinc-200"
                }`}
              >
                <span className="me-1.5 tabular-nums opacity-60">{i + 1}.</span>
                {p.label}
              </p>
              <p className="mt-0.5 text-xs text-ink-500 dark:text-zinc-400">{p.period}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Job({ job, exp, isLast }) {
  return (
    <li className="relative ps-8 sm:ps-10">
      {/* timeline rail + dot */}
      {!isLast ? (
        <span
          aria-hidden
          className="absolute bottom-[-2rem] start-[7px] top-6 w-px bg-ink-200 dark:bg-zinc-800"
        />
      ) : null}
      <span
        aria-hidden
        className={`absolute start-0 top-[1.6rem] h-[15px] w-[15px] rounded-full border-2 ${
          job.current
            ? "border-brand-500 bg-brand-500 ring-4 ring-brand-500/15"
            : "border-ink-300 bg-white dark:border-zinc-600 dark:bg-zinc-950"
        }`}
      />

      <article className="rounded-2xl border border-ink-200/80 bg-white p-6 transition-shadow hover:shadow-card sm:p-7 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-card-dark">
        <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold leading-snug text-ink-950 sm:text-xl dark:text-white">
              {job.role}
            </h3>
            <p className="mt-1 text-sm">
              <span className="font-semibold text-brand-600 dark:text-brand-400">
                {job.company}
              </span>
              <span className="mx-2 text-ink-300 dark:text-zinc-600">·</span>
              <span className="text-ink-500 dark:text-zinc-400">{job.meta}</span>
            </p>
          </div>
          <div className="flex flex-none items-center gap-2">
            {job.current ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {exp.present}
              </span>
            ) : null}
            <span className="text-sm font-medium tabular-nums text-ink-500 dark:text-zinc-400">
              {job.period}
            </span>
          </div>
        </header>

        {job.phases ? <Phases title={exp.phasesTitle} phases={job.phases} /> : null}

        <ul className="mt-5 space-y-3">
          {job.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-700 dark:text-zinc-300"
            >
              <span
                aria-hidden
                className="mt-[0.7em] h-1 w-2.5 flex-none rounded-full bg-brand-500/70"
              />
              {point}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function Experience() {
  const { locale } = useI18n();
  const exp = MSGS[locale].experience;

  return (
    <section id="experience" className="scroll-mt-16 bg-ink-50 py-20 md:py-28 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            icon={BriefcaseIcon}
            eyebrow={exp.eyebrow}
            title={exp.title}
            subtitle={exp.subtitle}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ol className="space-y-8 lg:col-span-8">
            {exp.jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.06}>
                <Job job={job} exp={exp} isLast={i === exp.jobs.length - 1} />
              </Reveal>
            ))}
          </ol>

          <aside className="space-y-6 lg:col-span-4">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-ink-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-semibold text-ink-500 dark:text-zinc-400">
                  {exp.education.title}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-950 dark:text-white">
                  {exp.education.degree}
                </h3>
                <p className="mt-1 text-sm text-ink-600 dark:text-zinc-300">
                  {exp.education.school}
                  <span className="mx-1.5 text-ink-300 dark:text-zinc-600">·</span>
                  {exp.education.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-zinc-400">
                  {exp.education.desc}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-ink-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm font-semibold text-ink-500 dark:text-zinc-400">
                  {exp.certifications.title}
                </p>
                <ul className="mt-4 space-y-4">
                  {exp.certifications.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-ink-900 dark:text-zinc-100">
                          {item.label}
                        </p>
                        <p className="text-xs text-ink-500 dark:text-zinc-400">{item.name}</p>
                      </div>
                      {item.year ? (
                        <span className="flex-none text-xs tabular-nums text-ink-400 dark:text-zinc-500">
                          {item.year}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
