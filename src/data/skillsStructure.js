/** Skill rows: `itemKey` maps to `skills.items.<itemKey>` in locales */
export const SKILL_GROUPS = [
  {
    id: "frontend",
    categoryKey: "skills.categories.frontend",
    items: [
      { itemKey: "html", level: 95 },
      { itemKey: "js", level: 94 },
      { itemKey: "ts", level: 90 },
      { itemKey: "react", level: 94 },
      { itemKey: "next", level: 91 },
      { itemKey: "tailwind", level: 93 },
      { itemKey: "mui", level: 89 },
      { itemKey: "redux", level: 91 },
      { itemKey: "framer", level: 87 },
    ],
  },
  {
    id: "backend",
    categoryKey: "skills.categories.backend",
    items: [
      { itemKey: "rest", level: 92 },
      { itemKey: "reactQuery", level: 90 },
      { itemKey: "supabase", level: 83 },
      { itemKey: "auth", level: 84 },
      { itemKey: "i18n", level: 88 },
      { itemKey: "sql", level: 78 },
    ],
  },
  {
    id: "tools",
    categoryKey: "skills.categories.tools",
    items: [
      { itemKey: "git", level: 92 },
      { itemKey: "vercel", level: 88 },
      { itemKey: "a11y", level: 86 },
      { itemKey: "perf", level: 88 },
      { itemKey: "figma", level: 95 },
      { itemKey: "aiTools", level: 90 },
    ],
  },
];
