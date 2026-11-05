export type Project = {
  id: string;
  titleKey: string;
  shortDescriptionKey: string;
  longDescriptionKey: string;
  tech: string[];
  image: string;
  /** Optional per-language preview (falls back to `image`) */
  imageByLocale?: { en?: string; ar?: string };
  /** Live site — add your URL when ready */
  demoUrl?: string;
  /** Public repo — omit for client / private work */
  repoUrl?: string;
  dashboardUrl?: string;
  authNote?: string;
};

const publicImage = (file: string) =>
  `${process.env.PUBLIC_URL || ""}/${file}`.replace(/\/+/g, "/");

export const PROJECTS: Project[] = [
  {
    id: "alalia",
    titleKey: "projects.alalia.title",
    shortDescriptionKey: "projects.alalia.shortDescription",
    longDescriptionKey: "projects.alalia.longDescription",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Motion",
      "SEO / JSON-LD",
    ],
    image: publicImage("alalia-ar.webp"),
    imageByLocale: {
      en: publicImage("alalia-en.webp"),
      ar: publicImage("alalia-ar.webp"),
    },
    demoUrl: "https://alulialaw.com/",
  },
  {
    id: "qira",
    titleKey: "projects.qira.title",
    shortDescriptionKey: "projects.qira.shortDescription",
    longDescriptionKey: "projects.qira.longDescription",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Open Graph / Media Assets",
    ],
    image: publicImage("qira.webp"),
    demoUrl: "https://www.qira.ltd",
  },
  {
    id: "nexvio",
    titleKey: "projects.nexvio.title",
    shortDescriptionKey: "projects.nexvio.shortDescription",
    longDescriptionKey: "projects.nexvio.longDescription",
    tech: [
      "React",
      "TypeScript",
      "3D Map Visualization",
      "Tailwind CSS",
      "Framer Motion",
      "Custom UI Themes",
    ],

    image: publicImage("nexvio.webp"),
    demoUrl: "https://nexvio.ae/home",
  },
  {
    id: "moawen",
    titleKey: "projects.moawen.title",
    shortDescriptionKey: "projects.moawen.shortDescription",
    longDescriptionKey: "projects.moawen.longDescription",
    tech: [
      "Next.js",
      "React",
      "React Query",
      "Redux Toolkit",
      "MUI",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "Zod",
      "React Hook Form",
      "Axios",
      "Vite",
    ],
    image: publicImage("moaawen.webp"),
    demoUrl: "https://moawen.sa",
    dashboardUrl: "http://app.moawen.sa",
    authNote: "projects.moawen.notes",
  },
  {
    id: "arsl",
    titleKey: "projects.arsl.title",
    shortDescriptionKey: "projects.arsl.shortDescription",
    longDescriptionKey: "projects.arsl.longDescription",
    tech: [
      "Next.js",
      "MUI",
      "Prisma ORM",
      "Anthropic AI",
      "Stream Video SDK",
      "Socket.io",
      "Redux Toolkit",
      "NextAuth",
    ],
    image: publicImage("arsl-project.webp"),
    dashboardUrl: "https://admin.arsl-app.com",
    // authNote removed - no specific auth notes for this project
    // repoUrl: "https://your-masa-toys-url.com",
  },
  {
    id: "masa",
    titleKey: "projects.masa.title",
    shortDescriptionKey: "projects.masa.shortDescription",
    longDescriptionKey: "projects.masa.longDescription",
    tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Framer Motion",
      "Swiper",
      "React Hook Form",
    ],
    image: publicImage("masa-1.webp"),
    demoUrl: "https://www.masatoys.com/home",
    // repoUrl: "https://github.com/Masa-Store/app-frontend",
  },
  {
    id: "alghaith",
    titleKey: "projects.alghaith.title",
    shortDescriptionKey: "projects.alghaith.shortDescription",
    longDescriptionKey: "projects.alghaith.longDescription",
    tech: ["Next.js", "Tailwind CSS", "Shadcn/UI", "SSR/SSG", "Server Actions"],
    image: publicImage("alghaith.webp"),
    demoUrl: "https://gkl.sa",
    // repoUrl: "https://your-masa-toys-url.com",
  },
  {
    id: "wsl",
    titleKey: "projects.wsl.title",
    shortDescriptionKey: "projects.wsl.shortDescription",
    longDescriptionKey: "projects.wsl.longDescription",
    tech: [
      "React",
      "Supabase",
      "Tailwind CSS v4",
      "React Hook Form",
      "Framer Motion",
      "Excel Export",
    ],
    image: publicImage("wsl.webp"),
    demoUrl: "https://wsl-driver-form-page.vercel.app/",
    dashboardUrl: "https://wsl-dashboard.netlify.app/dashboard",
    authNote: "projects.wsl.notes",
  },
];
