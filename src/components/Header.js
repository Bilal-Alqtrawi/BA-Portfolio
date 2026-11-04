import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import { useActiveSection } from "../hooks/useActiveSection";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

const NAV = ["about", "experience", "projects", "skills", "contact"];

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[1200] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t("common.skipToContent")}
      </a>

      <header
        className={`sticky top-0 z-[1000] border-b backdrop-blur-xl transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "border-ink-200/70 bg-white/85 dark:border-zinc-800/80 dark:bg-zinc-950/85"
            : "border-transparent bg-zinc-50/60 dark:bg-zinc-950/60"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink-950 dark:text-white"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950 text-sm text-white dark:bg-white dark:text-ink-950"
            >
              B
            </span>
            {t("common.logo")}
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((id) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-ink-950/[0.06] text-ink-950 dark:bg-white/10 dark:text-white"
                      : "text-ink-600 hover:text-ink-950 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <DarkModeToggle />
            <a
              href="#contact"
              className="hidden rounded-lg bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 lg:inline-flex dark:bg-white dark:text-ink-950 dark:hover:bg-brand-400"
            >
              {t("nav.cta")}
            </a>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-ink-800 hover:bg-ink-100 md:hidden dark:text-zinc-100 dark:hover:bg-zinc-800"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t("nav.close") : t("nav.menu")}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-100 bg-white px-4 pb-8 pt-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          >
            <nav className="flex flex-col" aria-label="Mobile primary">
              {NAV.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`border-b border-ink-100 py-4 text-lg font-semibold dark:border-zinc-800/80 ${
                    active === id
                      ? "text-brand-600 dark:text-brand-400"
                      : "text-ink-900 dark:text-zinc-100"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex items-center justify-between gap-4">
              <LanguageToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
