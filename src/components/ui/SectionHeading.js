import { useI18n } from "../../context/I18nContext";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const { isRTL } = useI18n();
  const alignClass =
    align === "start"
      ? isRTL
        ? "text-end"
        : "text-start"
      : "text-center mx-auto";

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-display-sm md:text-display-lg text-ink-950 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-ink-700 dark:text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
