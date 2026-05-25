import { useSelector } from "react-redux";
import { useI18n } from "../context/I18nContext";
import Social from "./Social";

const FOOTER_NAV = [
  { hash: "#home", key: "nav.home" },
  { hash: "#about", key: "nav.about" },
  { hash: "#skills", key: "nav.skills" },
  { hash: "#expertise", key: "nav.expertise" },
  { hash: "#projects", key: "nav.projects" },
  { hash: "#contact", key: "nav.contact" },
];

export default function Footer() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);

  return (
    <footer
      className={`border-t py-14 ${
        isDarkMode
          ? "border-zinc-800 bg-zinc-950"
          : "border-ink-200 bg-zinc-100 text-ink-900"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`font-display text-2xl font-bold transition hover:text-brand-600 ${
            isDarkMode ? "text-white hover:text-brand-400" : "text-ink-950"
          }`}
        >
          {t("common.logo")}
        </a>
        <nav
          className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm ${
            isDarkMode ? "text-zinc-300" : "text-ink-600"
          }`}
        >
          {FOOTER_NAV.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className={`transition ${
                isDarkMode ? "hover:text-brand-400" : "hover:text-brand-600"
              }`}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        <div>
          <p
            className={`text-xs uppercase tracking-widest ${
              isDarkMode ? "text-zinc-500" : "text-ink-500"
            }`}
          >
            {t("footer.connect")}
          </p>
          <div className="mt-4 flex justify-center">
            <Social variant={isDarkMode ? "footer" : "default"} />
          </div>
        </div>
        <p
          className={`max-w-md text-sm leading-relaxed ${
            isDarkMode ? "text-zinc-400" : "text-ink-600"
          }`}
        >
          © {new Date().getFullYear()} {t("footer.builtBy")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
