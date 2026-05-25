import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import { useActiveSection } from "../hooks/useActiveSection";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

const NAV = [
  { id: "home", hash: "#home" },
  { id: "about", hash: "#about" },
  { id: "skills", hash: "#skills" },
  { id: "expertise", hash: "#expertise" },
  { id: "projects", hash: "#projects" },
  { id: "contact", hash: "#contact" },
];

export default function Header() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id) => {
    const activeNow = active === id;
    return [
      "relative rounded-lg px-3 py-2 text-sm font-medium transition",
      activeNow
        ? "text-brand-600 dark:text-brand-400"
        : "text-ink-700 hover:text-ink-950 dark:text-zinc-300 dark:hover:text-white",
    ].join(" ");
  };

  return (
    <header
      className={`sticky top-0 z-[1000] border-b backdrop-blur-xl transition-colors ${
        isDarkMode
          ? "border-zinc-800/80 bg-zinc-950/85"
          : "border-ink-100/80 bg-white/85"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-ink-950 dark:text-white"
          onClick={() => setOpen(false)}
        >
          {t("common.logo")}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.hash}
              className={linkClass(item.id)}
            >
              {t(`nav.${item.id}`)}
              {active === item.id ? (
                <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-brand-500" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <DarkModeToggle />
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-ink-800 hover:bg-ink-100 md:hidden dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="border-t border-ink-100 bg-white/95 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-4 sm:hidden">
            <LanguageToggle />
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.hash}
                className={`${linkClass(item.id)} px-2 py-3`}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.id}`)}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
