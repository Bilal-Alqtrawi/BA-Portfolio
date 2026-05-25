import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/modules/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMoon, faSun);

export default function DarkModeToggle() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id="toggleDarkMode"
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-transparent transition ${
        isDarkMode
          ? "text-amber-200 hover:border-amber-400/40 hover:bg-white/5"
          : "text-ink-900 hover:border-ink-200 hover:bg-ink-50"
      }`}
      onClick={() => dispatch(toggleDarkMode())}
      aria-pressed={isDarkMode}
      aria-label="Toggle color theme"
    >
      <FontAwesomeIcon
        className="text-xl"
        icon={isDarkMode ? faSun : faMoon}
        id="darkModeIcon"
      />
    </button>
  );
}
