import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "../locales/en";
import ar from "../locales/ar";

const STORAGE_KEY = "portfolio_locale";

const messages = { en, ar };

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) return acc[key];
    return undefined;
  }, obj);
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
    const nav = typeof navigator !== "undefined" ? navigator.language : "en";
    return nav.toLowerCase().startsWith("ar") ? "ar" : "en";
  });

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const dict = messages[locale] || en;

  const t = useCallback(
    (path, vars) => {
      let value = getByPath(dict, path);
      if (value === undefined) value = getByPath(en, path);
      if (typeof value !== "string") return path;
      if (!vars) return value;
      return value.replace(/\{(\w+)\}/g, (_, k) =>
        vars[k] !== undefined && vars[k] !== null ? String(vars[k]) : ""
      );
    },
    [dict]
  );

  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      dir,
      t,
      isRTL: dir === "rtl",
    }),
    [locale, setLocale, dir, t]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
