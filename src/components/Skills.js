import {
  CodeBracketIcon,
  Squares2X2Icon,
  CircleStackIcon,
  WrenchScrewdriverIcon, CommandLineIcon } from "@heroicons/react/24/outline";
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

const chipBase = "inline-flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors";
const chipCore =
  "border border-brand-500/30 bg-brand-500/[0.07] font-semibold text-ink-950 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-white";
const chipOther =
  "border border-ink-200 bg-white font-medium text-ink-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300";

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="scroll-mt-16 bg-white py-20 md:py-28 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            icon={CommandLineIcon}
            eyebrow={t("skills.kicker")}
            title={t("skills.title")}
            subtitle={t("skills.subtitle")}
          />
        </Reveal>

        <Reveal>
          <div className="-mt-4 mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className={`${chipCore} h-3.5 w-5 rounded`} />
              {t("skills.legendCore")}
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className={`${chipOther} h-3.5 w-5 rounded`} />
              {t("skills.legendOther")}
            </span>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[group.id] || Squares2X2Icon;
            return (
              <Reveal key={group.id} delay={gi * 0.05}>
                <div className="h-full rounded-2xl border border-ink-200/80 bg-ink-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/50">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-ink-200 dark:bg-zinc-900 dark:text-brand-400 dark:ring-zinc-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-950 dark:text-white">
                      {t(group.categoryKey)}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.itemKey} className={`${chipBase} ${item.core ? chipCore : chipOther}`}>
                        <span dir="auto">{t(`skills.items.${item.itemKey}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
