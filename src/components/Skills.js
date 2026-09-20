import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  Squares2X2Icon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import { SKILL_GROUPS } from "../data/skillsStructure";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const GROUP_ICONS = {
  languages: CodeBracketIcon,
  frameworks: Squares2X2Icon,
  databases: CircleStackIcon,
  tools: WrenchScrewdriverIcon,
};

function SkillBar({ label, level, isDark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium leading-tight text-ink-900 dark:text-zinc-100">
          {label}
        </span>
        <span className="text-xs font-semibold tabular-nums text-brand-600 dark:text-brand-400">
          {level}
          <span className="text-ink-400 dark:text-zinc-500">%</span>
        </span>
      </div>
      <div
        className={`h-3 overflow-hidden rounded-full ${
          isDark ? "bg-zinc-800" : "bg-ink-100"
        }`}
      >
        <motion.div
          className="relative h-full rounded-full bg-gradient-to-r from-brand-600 via-rose-500 to-rose-400"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden
            className="absolute end-1 top-1/2 h-[60%] w-1.5 -translate-y-1/2 rounded-full bg-white/90"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);

  return (
    <section
      id="skills"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-950" : "bg-ink-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[group.id] || Squares2X2Icon;
            return (
              <Reveal key={group.id} delay={gi * 0.06}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card ${
                    isDarkMode
                      ? "border-zinc-800 bg-zinc-900/80 hover:border-brand-500/30 hover:shadow-card-dark"
                      : "border-ink-100 bg-white hover:border-brand-500/25 hover:shadow-card"
                  }`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-brand-500/15 text-brand-400 group-hover:bg-brand-500/25"
                          : "bg-brand-500/10 text-brand-600 group-hover:bg-brand-500/20"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="min-w-0 flex-1 font-display text-lg leading-snug text-ink-950 dark:text-white">
                      {t(group.categoryKey)}
                    </h3>
                    <span
                      aria-hidden
                      className="flex-none rounded-md border border-ink-200/80 bg-ink-50 px-1.5 py-0.5 font-display text-xs font-semibold tabular-nums tracking-[0.18em] text-ink-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 border-t border-dashed border-ink-200/80 pb-4 dark:border-zinc-800" />
                  <div className="mt-4 flex-1">
                    <div
                      className={
                        group.items.length > 6
                          ? "grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2"
                          : "flex flex-col gap-5"
                      }
                    >
                      {group.items.map((item) => (
                        <SkillBar
                          key={item.itemKey}
                          label={t(`skills.items.${item.itemKey}`)}
                          level={item.level}
                          isDark={isDarkMode}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}