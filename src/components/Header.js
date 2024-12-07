import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faListCheck, faSliders,faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function Header({ component: Component }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const onClick = (e) => {
    e.stopPropagation();
    document.querySelector("nav ul").classList.toggle("active");
  };

  useEffect(() => {
    let toggleBtn = document.querySelector(".toggle-btn");
    let menuLinks = document.querySelector("nav ul");

    menuLinks.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    document.addEventListener("click", (e) => {
      if (e.target !== toggleBtn && e.target.parentElement !== toggleBtn) {
        if (menuLinks.classList.contains("active")) {
          menuLinks.classList.remove("active");
        }
      }
    });

    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 250) {
        header.classList.add("fixed");
        if (currentScrollY < lastScrollY) {
          header.style.opacity = Math.max(1 - currentScrollY / 300, 0.5);
        } else {
          header.style.opacity = 1;
        }
      } else {
        header.classList.remove("fixed");
        header.style.opacity = 1;
      }
      lastScrollY = currentScrollY;
    };

    header.classList.add("fixed");
    header.style.opacity = 1;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  return (
    <header
      className={`bg-neutral-50 transition duration-300  ${
        isDarkMode && "dark bg-slate-950"
      }`}
    >
      <div
        className={`container mx-auto px-4 flex relative ${
          isDarkMode && "text-white"
        }`}
      >
        <h2
          className={`font-bold logo pt-4 pb-4 ${
            isDarkMode
              ? "text-white hover:bg-white hover:text-gray-950"
              : "text-black hover:text-white hover:bg-black first-letter:text-rose-500"
          }`}
        >
          <a href="/" aria-label="bilal Name Of Logo">
            Bilal
          </a>
        </h2>
        <nav className="flex-1 sm: flex justify-end items-center">
          <ul className="flex justify-self-end">
            <li
              className={`${
                isDarkMode ? "dark hover:text-gray-950" : "hover:text-white"
              }`}
            >
              <a href="#about" aria-label="About">
                <FontAwesomeIcon className="icon" icon={faHouse} />
                About
              </a>
            </li>
            <li
              className={`${
                isDarkMode ? "dark hover:text-gray-950" : "hover:text-white"
              }`}
            >
              <a href="#skills" aria-label="Skills">
                <FontAwesomeIcon className="icon" icon={faSliders} />
                Skills
              </a>
            </li>
            <li
              className={`${
                isDarkMode ? "dark hover:text-gray-950" : "hover:text-white"
              }`}
            >
              <a href="#features" aria-label="Features">
                <FontAwesomeIcon className="icon" icon={faWandMagicSparkles} />
                Features
              </a>
            </li>
            <li
              className={`${
                isDarkMode ? "dark hover:text-gray-950" : "hover:text-white"
              }`}
            >
              <a href="#portfolios" aria-label="Portfolios">
                <FontAwesomeIcon className="icon" icon={faListCheck} />
                Portfolios
              </a>
            </li>

            <li
              className={`${
                isDarkMode ? "dark hover:text-gray-950" : "hover:text-white"
              }`}
            >
              <a href="#contact" aria-label=">Contact">
                <FontAwesomeIcon className="icon" icon={faPaperPlane} />
                Contact
              </a>
            </li>
          </ul>
          <button
            className="toggle-btn mr-4"
            onClick={onClick}
            name="toggle-menu"
            id="toggleMenu"
          >
            <span className={`${isDarkMode && "!bg-white"}`}></span>
            <span className={`${isDarkMode && "!bg-white"}`}></span>
          </button>
          <Component />
        </nav>
      </div>
    </header>
  );
}
export default Header;
