import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "expertise",
  "skills",
  "contact",
];

/**
 * Returns the id of the section the reader is currently in.
 * A section is "current" once its top passes ~30% of the viewport — this
 * matches where the eye actually is, unlike intersection ratios which
 * pick the wrong section for tall or short blocks.
 */
export function useActiveSection(ids = SECTION_IDS) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (atBottom) current = ids[ids.length - 1];
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return activeId;
}
