import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../../context/I18nContext";

/** Appears after the first screen; one tap back to the top. */
export function BackToTop() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setShow(window.scrollY > window.innerHeight * 1.2);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href="#home"
      aria-label={t("hero.backToTop")}
      title={t("hero.backToTop")}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 end-5 z-[900] flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-card-dark ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </a>
  );
}
