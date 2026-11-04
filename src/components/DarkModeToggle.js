import { flushSync } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { toggleDarkMode } from "../redux/modules/theme";
import { useI18n } from "../context/I18nContext";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path
        d="M20.2 14.6A8.2 8.2 0 0 1 9.4 3.8a8.2 8.2 0 1 0 10.8 10.8Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M16.5 4.5v2.4M15.3 5.7h2.4" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Theme switch. On browsers with the View Transitions API the new theme
 * spreads out in a circle from the button; elsewhere it just switches.
 */
export default function DarkModeToggle() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const { t } = useI18n();

  const onToggle = (e) => {
    const next = !isDarkMode;
    const apply = () => {
      flushSync(() => dispatch(toggleDarkMode()));
      document.documentElement.classList.toggle("dark", next);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) {
      apply();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? t("common.toLight") : t("common.toDark")}
      title={isDarkMode ? t("common.toLight") : t("common.toDark")}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-ink-200 bg-white/80 text-ink-800 transition-colors hover:border-ink-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-amber-200 dark:hover:border-zinc-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDarkMode ? "sun" : "moon"}
          initial={{ y: 14, rotate: -60, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -14, rotate: 60, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
