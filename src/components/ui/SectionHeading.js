/**
 * Section heading with a small icon tag instead of a number.
 * The icon tells the reader what the section is about at a glance,
 * which scans faster than "01 / 02 / 03" (numbers carry no meaning here).
 */
export default function SectionHeading({ icon: Icon, eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`mb-12 max-w-2xl md:mb-14 ${className}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.07] py-1 pe-3.5 ps-1 text-sm font-semibold text-brand-700 dark:border-brand-400/25 dark:bg-brand-500/10 dark:text-brand-300">
          {Icon ? (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white dark:bg-brand-500">
              <Icon aria-hidden className="h-3.5 w-3.5" />
            </span>
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl md:text-[2.6rem] dark:text-zinc-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
