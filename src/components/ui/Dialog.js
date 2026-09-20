import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Dialog({ isOpen, onClose, children }) {
  const lastOpen = useRef(null);
  if (isOpen && children) lastOpen.current = children;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    // Lock scrolling both at the page and root level so the dialog
    // owns the scroll while open (covers iOS Safari quirks too).
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/70 p-2 overscroll-contain sm:p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="app-dialog-scroll max-h-[90vh] w-full max-w-3xl overflow-hidden overflow-y-auto overscroll-contain rounded-2xl border border-ink-100 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
          >
            {isOpen ? children : lastOpen.current}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}