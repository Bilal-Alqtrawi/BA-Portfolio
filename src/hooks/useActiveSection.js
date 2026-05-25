import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "expertise",
  "projects",
  "contact",
];

export function useActiveSection() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) setActiveId(top.target.id);
      },
      { root: null, rootMargin: "-12% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
