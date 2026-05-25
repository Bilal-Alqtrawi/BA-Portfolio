import { useI18n } from "../context/I18nContext";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();
  const next = locale === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-800 shadow-sm backdrop-blur-sm transition hover:border-brand-500/40 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-brand-400/50 dark:hover:text-brand-400"
      aria-label={t("common.language")}
    >
      <span className="opacity-60">{locale === "en" ? "EN" : "AR"}</span>
      <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
        /
      </span>
      <span>{next === "en" ? "EN" : "AR"}</span>
    </button>
  );
}
