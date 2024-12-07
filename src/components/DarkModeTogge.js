import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/modules/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMoon);

const DarkModeToggle = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // قراءة حالة الوضع الليلي
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode()); // عكس الحالة عند الضغط
  };

  return (
    <button
      id="toggleDarkMode"
      className={`
        flex items-center justify-center p-2 w-11 h-11 rounded-full transition duration-500  darkModeBtn
        ${
          isDarkMode
            ? "text-gray-50 hover:bg-neutral-50 hover:text-black"
            : "hover:bg-black hover:text-white"
        }
        `}
      onClick={handleToggle}
    >
      <FontAwesomeIcon className="text-2xl" icon={faMoon} id="darkModeIcon" />
    </button>
  );
};

export default DarkModeToggle;
