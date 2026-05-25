import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useI18n } from "../context/I18nContext";
import { SKILL_GROUPS } from "../data/skillsStructure";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function SkillBar({ label, level, isDark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-ink-900 dark:text-zinc-100">{label}</span>
        <span className="tabular-nums text-ink-500 dark:text-zinc-500">{level}%</span>
      </div>
      <div
        className={`h-2 overflow-hidden rounded-full ${
          isDark ? "bg-zinc-800" : "bg-ink-100"
        }`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-rose-400"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.06}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition hover:shadow-card ${
                  isDarkMode
                    ? "border-zinc-800 bg-zinc-900/80 hover:border-brand-500/30"
                    : "border-ink-100 bg-white hover:border-brand-500/25"
                }`}
              >
                <h3 className="font-display text-xl text-ink-950 dark:text-white">
                  {t(group.categoryKey)}
                </h3>
                <div className="mt-6 flex flex-1 flex-col gap-5">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
