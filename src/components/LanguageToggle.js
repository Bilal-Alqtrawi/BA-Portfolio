import { LanguageIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";

/**
 * Shows the language you'll switch TO, written in that language
 * ("العربية" / "English") — the convention people recognise instantly.
 */
export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();
  const next = locale === "en" ? "ar" : "en";
  const nextLabel = next === "ar" ? "العربية" : "English";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      lang={next}
      title={t("common.language")}
      aria-label={`${t("common.language")}: ${nextLabel}`}
      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-ink-200 bg-white/80 px-3 text-sm font-semibold text-ink-800 transition hover:border-ink-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-300"
    >
      <LanguageIcon aria-hidden className="h-4 w-4" />
      {nextLabel}
    </button>
  );
}
