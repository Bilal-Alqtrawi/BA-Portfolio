import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../context/I18nContext";

export default function PageLoader() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const min = 500;
    const id = window.setTimeout(() => setVisible(false), min);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-zinc-950 text-zinc-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="h-12 w-12 rounded-full border-2 border-brand-500 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            />
            <p className="text-sm tracking-wide text-zinc-400">{t("common.loading")}</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
