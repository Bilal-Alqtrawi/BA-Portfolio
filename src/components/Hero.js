import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import en from "../locales/en";
import ar from "../locales/ar";

import profile from "../images/profile-2.jpeg";

const MSGS = { en, ar };

export default function Hero() {
  const { t, locale } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const roles = MSGS[locale].hero.roles;
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % roles.length);
        setFade(true);
      }, 320);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className={`relative isolate min-h-screen overflow-hidden pt-24 pb-16 md:pt-28 ${
        isDarkMode ? "bg-zinc-950 bg-hero-glow-dark" : "bg-zinc-50 bg-hero-glow"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 dark:hidden bg-gradient-to-b from-white/80 to-zinc-50" />
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-gradient-to-b from-zinc-950/90 to-zinc-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        <div className="max-w-2xl flex-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-brand-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            {t("hero.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-display-sm sm:text-display md:text-display-lg text-ink-950 dark:text-white"
          >
            <span className="block text-ink-600 dark:text-zinc-400 text-2xl sm:text-3xl font-sans font-medium tracking-tight">
              {t("hero.greeting")}
            </span>
            <span className="mt-2 pb-3 block bg-gradient-to-r from-brand-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 text-xl font-medium text-ink-800 dark:text-zinc-200 md:text-2xl"
          >
            {t("hero.rolePrefix")}{" "}
            <span
              className={`inline-block text-brand-600 dark:text-brand-400 transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {roles[idx]}.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700 dark:text-zinc-400"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 hover:shadow-brand-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white/80 px-8 py-3 text-sm font-semibold text-ink-900 backdrop-blur transition hover:border-brand-500/40 hover:text-brand-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-brand-400/40 dark:hover:text-brand-300"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>

          <p className="mt-14 text-xs font-medium uppercase tracking-[0.2em] text-ink-500 dark:text-zinc-500">
            {t("hero.scroll")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-sm flex-1 items-center justify-center lg:max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-transparent to-amber-400/20 blur-2xl" />
          <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[380px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 to-transparent" />
            <img
              src={profile}
              alt={t("hero.name")}
              className="relative z-10 h-full w-full rounded-[2rem] object-cover shadow-card ring-1 ring-black/5 dark:shadow-card-dark dark:ring-white/10"
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -end-6 z-20 hidden h-28 w-28 rounded-2xl border border-white/20 bg-zinc-900/90 shadow-xl sm:block dark:bg-zinc-800/90"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
