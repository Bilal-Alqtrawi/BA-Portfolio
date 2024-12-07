import { useSelector } from "react-redux";
import Social from "./Social";

function Footer() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className={`footer overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-gray-800"}`}>
      <div className="footer-content p-7 mx-auto text-center border-none">
        <h2 className="text-gray-100 text-3xl w-fit mx-auto font-serif font-bold hover:text-rose-500 duration-300 -tracking-tighter">
          <a href="/" className="logo" aria-label="logo">
            Bilal
          </a>
        </h2>
        <nav className="mt-5 mb-6 flex flex-wrap justify-center items-start text-neutral-200 gap-5">
          <a
            href="#about"
            className="-tracking-tighter transition-all hover:text-rose-500 hover:pb-5 inline-flex h-8 items-center"
          >
            About
          </a>
          <a
            href="#skills"
            className="-tracking-tighter transition-all hover:text-rose-500 hover:pb-5 inline-flex h-8 items-center"
          >
            Skills
          </a>
          <a
            href="#features"
            className="-tracking-tighter transition-all hover:text-rose-500 hover:pb-5 inline-flex h-8 items-center"
          >
            Features
          </a>
          <a
            href="#portfolios"
            className="-tracking-tighter transition-all hover:text-rose-500 hover:pb-5 inline-flex h-8 items-center"
          >
            Portfolios
          </a>
          <a
            href="#contact"
            className="-tracking-tighter transition-all hover:text-rose-500 hover:pb-5 inline-flex h-8 items-center"
          >
            Contact
          </a>
        </nav>
        <div className="social-media">
          <h3 className={`mb-7 text-2xl text-gray-100 w-fit mx-auto relative`}>
            Social Media
          </h3>
          <Social />
        </div>

        <p className="mt-9 leading-5 text-gray-200 transition-colors duration-300 hover:text-rose-50 hover:animate-none text-xs md:text-base animate-pulse">
          &copy; Best regards and was Created with love by{" "}
          <b className="block sm:inline-block">Bilal Al-Qatrawi</b>
        </p>
      </div>
    </div>
  );
}

export default Footer;
