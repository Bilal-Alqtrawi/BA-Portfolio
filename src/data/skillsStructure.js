/** Skill rows: `itemKey` maps to `skills.items.<itemKey>` in locales */
export const SKILL_GROUPS = [
  {
    id: "languages",
    categoryKey: "skills.categories.languages",
    items: [
      { itemKey: "html", level: 95 },
      { itemKey: "css", level: 93 },
      { itemKey: "js", level: 95 },
      { itemKey: "ts", level: 92 },
      { itemKey: "sass", level: 85 },
      { itemKey: "sql", level: 78 },
    ],
  },
  {
    id: "frameworks",
    categoryKey: "skills.categories.frameworks",
    items: [
      { itemKey: "react", level: 96 },
      { itemKey: "next", level: 93 },
      { itemKey: "tailwind", level: 95 },
      { itemKey: "redux", level: 92 },
      { itemKey: "reactQuery", level: 91 },
      { itemKey: "context", level: 90 },
      { itemKey: "mui", level: 90 },
      { itemKey: "framer", level: 88 },
      { itemKey: "shadcn", level: 87 },
      { itemKey: "swiper", level: 84 },
    ],
  },
  {
    id: "databases",
    categoryKey: "skills.categories.databases",
    items: [
      { itemKey: "supabase", level: 85 },
      { itemKey: "firebase", level: 80 },
      { itemKey: "mysql", level: 72 },
      { itemKey: "mongo", level: 65 },
    ],
  },
  {
    id: "tools",
    categoryKey: "skills.categories.tools",
    items: [
      { itemKey: "git", level: 93 },
      { itemKey: "rest", level: 92 },
      { itemKey: "postman", level: 90 },
      { itemKey: "vercel", level: 90 },
      { itemKey: "lighthouse", level: 88 },
      { itemKey: "netlify", level: 87 },
      { itemKey: "ghActions", level: 86 },
      { itemKey: "dns", level: 83 },
      { itemKey: "a11y", level: 86 },
      { itemKey: "perf", level: 88 },
      { itemKey: "aiTools", level: 90 },
    ],
  },
];