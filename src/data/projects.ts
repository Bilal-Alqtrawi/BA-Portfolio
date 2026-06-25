export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
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
    id: "moawen",
    titleKey: "projects.moawen.title",
    descriptionKey: "projects.moawen.description",
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
    image: publicImage("moaawen.jpeg"),
    demoUrl: "https://moawen.sa",
    dashboardUrl: "http://app.moawen.sa",
    authNote: "projects.moawen.notes",
  },
  {
    id: "arsl",
    titleKey: "projects.arsl.title",
    descriptionKey: "projects.arsl.description",
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
    image: publicImage("arsl-project.png"),
    dashboardUrl: "https://admin.arsl-app.com",
    authNote: "projects.wsl.notes",
    // repoUrl: "https://your-masa-toys-url.com",
  },
  {
    id: "masa",
    titleKey: "projects.masa.title",
    descriptionKey: "projects.masa.description",
    tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Framer Motion",
      "Swiper",
      "React Hook Form",
    ],
    image: publicImage("masa.png"),
    demoUrl: "https://www.masatoys.com/home",
    // repoUrl: "https://github.com/Masa-Store/app-frontend",
  },
  {
    id: "alghaith",
    titleKey: "projects.alghaith.title",
    descriptionKey: "projects.alghaith.description",
    tech: ["Next.js", "Tailwind CSS", "Shadcn/UI", "SSR/SSG", "Server Actions"],
    image: publicImage("alghaith.jpeg"),
    demoUrl: "https://gkl.sa",
    // repoUrl: "https://your-masa-toys-url.com",
  },
  {
    id: "wsl",
    titleKey: "projects.wsl.title",
    descriptionKey: "projects.wsl.description",
    tech: [
      "React",
      "Supabase",
      "Tailwind CSS v4",
      "React Hook Form",
      "Framer Motion",
      "Excel Export",
    ],
    image: publicImage("wsl.png"),
    demoUrl: "https://wsl.co.il",
    dashboardUrl: "https://wsl-dashboard.netlify.app/dashboard",
    authNote: "projects.wsl.notes",
  },
];
