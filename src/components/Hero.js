import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import { WHATSAPP_URL } from "../data/contact";
import en from "../locales/en";
import ar from "../locales/ar";
import profile from "../images/profile-portrait.webp";

const MSGS = { en, ar };

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

/** Hand-drawn marker stroke under a word. Pure SVG + CSS, draws itself once. */
function Scribble() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 24"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-2 start-0 h-3.5 w-full text-brand-500 sm:-bottom-3 sm:h-4"
    >
      <path
        className="scribble-draw"
        d="M3 15c38-7 92-11 140-9 27 1 51 3 74 6M18 20c46-5 104-7 158-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const { t, locale } = useI18n();
  const workedOn = MSGS[locale].hero.workedOn;

  return (
    <section id="home" className="bg-zinc-50 pb-14 pt-10 sm:pt-14 md:pb-16 lg:pt-16 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <motion.h1
            {...fadeIn(0)}
            className="font-display text-4xl font-bold leading-tight text-ink-950 sm:text-5xl lg:text-[3.4rem] dark:text-white"
          >
            {t("hero.helloPrefix")}{" "}
            <span className="relative inline-block whitespace-nowrap">
              {t("hero.firstName")}
              <Scribble />
            </span>{" "}
            {t("hero.lastName")}
          </motion.h1>

          <motion.p
            {...fadeIn(0.06)}
            className="mt-5 text-lg font-medium text-ink-600 dark:text-zinc-400"
          >
            {t("hero.role")}
          </motion.p>

          <motion.div {...fadeIn(0.1)} className="mt-7 max-w-xl space-y-4">
            <p className="text-lg leading-relaxed text-ink-800 md:text-xl dark:text-zinc-200">
              {t("hero.tagline")}
            </p>
            <p className="text-base leading-relaxed text-ink-600 md:text-lg dark:text-zinc-400">
              {t("hero.now")}
            </p>
          </motion.div>

          <motion.div {...fadeIn(0.15)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t("hero.ctaPrimary")}
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-ink-900 underline decoration-ink-300 decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand-500 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-brand-400"
            >
              {t("hero.ctaSecondary")}
            </a>
            <a
              href={t("about.resumeHref")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 transition-colors hover:text-ink-950 dark:text-zinc-400 dark:hover:text-white"
            >
              <ArrowDownTrayIcon aria-hidden className="h-4 w-4" />
              {t("hero.cv")}
            </a>
          </motion.div>

          {/* Availability, said the way a person would say it */}
          <motion.p
            {...fadeIn(0.2)}
            className="mt-6 text-sm text-ink-600 dark:text-zinc-400"
          >
            {t("hero.availability")}{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 underline decoration-emerald-600/30 underline-offset-4 transition-colors hover:decoration-emerald-600 dark:text-emerald-400 dark:decoration-emerald-400/30"
            >
              {t("hero.availabilityLink")}
            </a>
            .
          </motion.p>
        </div>

        {/* Portrait: head & shoulders in a circle, thin brand ring, dotted pattern behind */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative order-first mx-auto w-full max-w-[200px] sm:max-w-[280px] lg:order-none lg:col-span-5 lg:max-w-[360px]"
        >
          {/* dotted pattern, offset to the top-end corner */}
          <div
            aria-hidden
            className="absolute -end-6 -top-6 h-28 w-28 text-ink-300 sm:h-48 sm:w-48 dark:text-zinc-700"
            style={{
              backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.6px)",
              backgroundSize: "14px 14px",
            }}
          />
          {/* dotted pattern, bottom-start corner, brand tint */}
          <div
            aria-hidden
            className="absolute -bottom-4 -start-6 h-20 w-20 text-brand-500/40 sm:h-28 sm:w-28"
            style={{
              backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.6px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* ring: outer brand line with a gap, then the photo */}
          <div className="relative rounded-full border-2 border-brand-500/80 p-2.5 dark:border-brand-400/80">
            <div className="overflow-hidden rounded-full bg-ink-100 dark:bg-zinc-800">
              <img
                src={profile}
                alt={t("hero.name")}
                width="360"
                height="360"
                fetchpriority="high"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </motion.figure>
      </div>

      {/* Social proof: real products, plain text, no logos to load */}
      <motion.div {...fadeIn(0.25)} className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-t border-ink-200 pt-6 sm:flex-row sm:items-center sm:gap-8 dark:border-zinc-800">
          <p className="flex-none text-sm font-medium text-ink-500 dark:text-zinc-500">
            {t("hero.workedOnLabel")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {workedOn.map((name) => (
              <li key={name}>
                <a
                  href="#projects"
                  className="font-display text-base font-bold text-ink-400 transition-colors hover:text-ink-950 dark:text-zinc-500 dark:hover:text-white"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
