const en = {
  meta: {
    title: "Portfolio — Bilal Alqatrawi",
    description:
      "Front-End Developer specializing in React.js and Next.js — SaaS platforms, dashboards, and e-commerce with Tailwind CSS, MUI, and production-ready API integration.",
  },
  common: {
    logo: "Bilal",
    loading: "Loading experience…",
    viewDemo: "Live demo",
    viewCode: "Source",
    submit: "Send message",
    sending: "Sending…",
    language: "Language",
    theme: "Theme",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    expertise: "Expertise",
    projects: "Projects",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    badge: "Freelance Front-End Developer · Gaza, Palestine",
    greeting: "Hi, I'm",
    name: "Bilal Alqatrawi",
    rolePrefix: "I build",
    roles: [
      "SaaS platforms & dashboards",
      "e-commerce experiences",
      "high-performance React & Next.js UIs",
    ],
    subtitle:
      "Front-End Developer specializing in React.js and Next.js. I ship scalable SaaS platforms, dashboards, and e-commerce apps with Tailwind CSS and MUI — clean architecture, strong state management, and seamless REST API integration.",
    ctaPrimary: "View projects",
    ctaSecondary: "Contact me",
    scroll: "Scroll",
  },
  about: {
    title: "About",
    kicker: "Background & focus",
    headline: "Production-ready front-ends for real products.",
    p1: "I'm a Software Engineering graduate from Al-Azhar Gaza University with hands-on training in Java (Top-tech Center, 2021), full-stack web development (Kuwaiti Training Center, 2021), and advanced front-end study through Udemy and Elzero Web School (React.js, Next.js, Redux, React Query, Tailwind CSS, and REST APIs, 2022–2025).",
    p2: "Since 2025 I've worked as a freelance Front-End Developer in Gaza, delivering landing pages, SaaS platforms, dashboards, and e-commerce systems for clients. I translate requirements into scalable UI with React and Next.js, optimize rendering and state management, integrate APIs with Axios, and deploy responsive apps on Vercel.",
    highlights: [
      { title: "2025 – Present", desc: "Freelance Front-End Developer" },
      {
        title: "B.Sc.",
        desc: "Software Engineering · Al-Azhar Gaza University",
      },
      {
        title: "React & Next.js",
        desc: "SaaS · dashboards · e-commerce · healthcare",
      },
    ],
    resumeLabel: "Résumé",
    resumeCta: "Download PDF",
    resumeHref: "https://bilal-alqtrawi.github.io/BA-Portfolio/Bilal-CV.pdf",
  },
  skills: {
    title: "Skills",
    subtitle: "Grouped by how I work across the stack",
    categories: {
      frontend: "Front-end",
      backend: "Back-end & APIs",
      tools: "Tooling & delivery",
    },
    items: {
      html: "HTML5 & CSS3",
      js: "JavaScript (ES6+)",
      ts: "TypeScript",
      react: "React.js",
      next: "Next.js",
      tailwind: "Tailwind CSS",
      mui: "Material UI (MUI)",
      redux: "Redux & Context API",
      framer: "Framer Motion",
      rest: "REST APIs & Axios",
      reactQuery: "React Query",
      supabase: "Supabase / Firebase",
      sql: "SQL / MySQL",
      git: "Git & GitHub",
      vercel: "Vercel / Netlify",
      a11y: "Accessibility (WCAG)",
      perf: "Performance & SEO",
      auth: "Authentication & RBAC",
      i18n: "Internationalization (i18n)",
      figma: "Figma to Code",
      aiTools: "AI-Assisted Development",
    },
  },
  expertise: {
    title: "Expertise",
    subtitle: "What I deliver on client and product work",
    cards: [
      {
        title: "SaaS & dashboards",
        body: "Role-based dashboards, data-heavy UIs, and reusable component libraries with design tokens — built with React, React Query, Redux, and Tailwind or MUI for maintainable scale.",
      },
      {
        title: "E-commerce & marketing sites",
        body: "Product filtering, carts, multi-step checkout, animated heroes, and skeleton loaders — optimized state with Redux, smooth motion with Framer Motion, and reliable API flows.",
      },
      {
        title: "Performance & integration",
        body: "Responsive layouts, Lighthouse-friendly builds, SEO-focused Next.js SSR/SSG, JWT auth patterns, and REST integration deployed on Vercel with cross-browser quality.",
      },
    ],
  },
  projects: {
    title: "Selected work",
    subtitle:
      "Production front-ends — e-commerce, SaaS dashboards, healthcare, and corporate sites.",
    moawen: {
      title: "Moawen Platform",
      description:
        "Multi-role freelance platform connecting clients and freelancers through a mobile app and advanced admin dashboard. Contributed to building the landing page and dashboard using Next.js, React, MUI, and Tailwind CSS with multilingual support, role permissions, analytics, chats, projects, services, notifications, and dynamic system settings.",
      notes: "💡 Guest account for the control panel: g@g.com | guest@123456",
    },
    masa: {
      title: "Masa Toys Store",
      description:
        "A full-featured e-commerce platform for a kids' toy store, built with React and Vite focused on speed and premium UX. Features advanced product filtering and sorting, a dynamic shopping cart, and a multi-step checkout flow powered by Redux Toolkit and React Hook Form. Integrated with seamless Framer Motion animations, Swiper carousels, performance-optimized image lazy loading, and intelligent skeleton loaders connected with backend inventory REST APIs.",
    },
    wsl: {
      title: "WSL Logistics Platform",
      description:
        "A production-ready landing page and interactive dashboard for managing driver registrations, built with React, Tailwind v4, and Supabase. The live dashboard features dynamic search and filtering, light/dark mode toggling, and direct Excel data exporting.",
      notes:
        "💡 Guest account for the control panel: guest@guest.com | 12345678",
    },
    arsl: {
      title: "Arsl Integrated Healthcare Ecosystem",
      description:
        "An enterprise-grade Telehealth and Electronic Health Records (EHR) platform developed within 'Fikratak' team, connecting administration portals, doctor dashboards, and mobile patient apps. Built with Next.js, MUI, and Redux Toolkit under a strict role-based access control (RBAC) system. Features real-time video/voice consultations powered by Stream SDK, live chat via Socket.io, emergency request tracking using interactive maps (Google Maps/Mapbox), and comprehensive modules for pharmacy management and digital wallets. Integrated with Anthropic AI for intelligent clinical assistance, and securely backed by NextAuth, JWT sessions, and Prisma ORM.",
    },
    alghaith: {
      title: "Al-Ghaith & Al-Kharif",
      description:
        'A comprehensive introductory website for the law firm "Al-Ghaith & Al-Kharif." Built using Next.js and fully reliant on SSR and ISR to ensure optimal SEO and exceptional responsiveness to cases and articles. The interface features a modern and elegant design reflecting a strong legal identity, utilizing Tailwind CSS and Shadcn/UI, with seamless data management via Server Actions to deliver a seamless user experience and the highest performance standards (Core Web Vitals).',
    },
  },
  contact: {
    title: "Contact",
    subtitle: "Tell me about your product, timeline, and goals.",
    infoTitle: "Direct",
    formTitle: "Message",
    fullName: "Bilal Alqatrawi",
    phoneValue: "059 309 4894",
    emailValue: "bbill4552@gmail.com",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    phone: "Phone / WhatsApp",
    phonePh: "Optional",
    whatsapp: "WhatsApp",
    subject: "Subject",
    subjectPh: "Project / role / collaboration",
    message: "Message",
    messagePh: "What are we building?",
    success: "Opening your mail client…",
    errorRequired: "Email is required.",
    social: "Social",
    location: "Gaza, Palestine",
  },
  footer: {
    rights: "Crafted with care.",
    builtBy: "Bilal Alqatrawi",
    connect: "Stay connected",
  },
  toast: {
    sent: "Thanks — your draft is ready to send.",
    needEmail: "Please add a valid email.",
  },
};

export default en;
