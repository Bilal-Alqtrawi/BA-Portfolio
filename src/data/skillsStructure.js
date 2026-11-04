/**
 * Skill groups. `itemKey` maps to `skills.items.<itemKey>` in locales.
 * `core: true` = tools used every day; everything else = comfortable with.
 */
export const SKILL_GROUPS = [
  {
    id: "frameworks",
    categoryKey: "skills.categories.frameworks",
    items: [
      { itemKey: "react", core: true },
      { itemKey: "next", core: true },
      { itemKey: "tailwind", core: true },
      { itemKey: "redux", core: true },
      { itemKey: "reactQuery", core: true },
      { itemKey: "mui", core: true },
      { itemKey: "context" },
      { itemKey: "framer" },
      { itemKey: "shadcn" },
      { itemKey: "swiper" },
    ],
  },
  {
    id: "languages",
    categoryKey: "skills.categories.languages",
    items: [
      { itemKey: "js", core: true },
      { itemKey: "ts", core: true },
      { itemKey: "html", core: true },
      { itemKey: "css", core: true },
      { itemKey: "sass" },
      { itemKey: "sql" },
    ],
  },
  {
    id: "tools",
    categoryKey: "skills.categories.tools",
    items: [
      { itemKey: "git", core: true },
      { itemKey: "rest", core: true },
      { itemKey: "postman", core: true },
      { itemKey: "vercel", core: true },
      { itemKey: "aiTools", core: true },
      { itemKey: "perf" },
      { itemKey: "lighthouse" },
      { itemKey: "a11y" },
      { itemKey: "netlify" },
      { itemKey: "ghActions" },
      { itemKey: "dns" },
    ],
  },
  {
    id: "databases",
    categoryKey: "skills.categories.databases",
    items: [
      { itemKey: "supabase" },
      { itemKey: "firebase" },
      { itemKey: "mysql" },
      { itemKey: "mongo" },
    ],
  },
];
