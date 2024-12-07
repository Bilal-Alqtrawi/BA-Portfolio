import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRepo } from "../redux/modules/repos";
import { connect } from "react-redux";
import tawasolImg from "../images/tawasol.png";
import specialImg from "../images/special.png";
import kasperImg from "../images/kasper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

library.add(faLocationArrow);

function Portfolio({ getRepo, repos }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    getRepo("Bilal-Alqtrawi");
  }, [getRepo]);

  return (
    <div
      className={`portfolios transition-all duration-300 pt-16 pb-16 ${
        isDarkMode && "bg-slate-950 dark"
      } `}
      id="portfolios"
    >
      <div className="container mx-auto px-4 ">
        <h2
          className={`mb-16 text-4xl  text-center font-bold ${
            isDarkMode ? "text-white" : "text-blue-950"
          }`}
        >
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 portfolios-content">
          {repos.map((repo) => {
            if (
              repo.id.toString() === "880745184" ||
              repo.id.toString() === "895047659" ||
              repo.id.toString() === "891408330"
            ) {
              return <Repo key={repo.id} repo={repo} isDarkMode={isDarkMode} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
const Repo = ({ repo: { name, description, html_url }, isDarkMode }) => {
  return (
    <div
      className={`p-5 duration-300 ease-linear rounded-2xl shadow-xl portfolio ${
        isDarkMode
          ? "!bg-blue-950 text-white shadow-gray-900 "
          : "shadow-neutral-300"
      }`}
    >
      <div className="overflow-hidden rounded-2xl">
        {name.toLowerCase().includes("tawasol") ? (
          <Popup
            trigger={<img src={tawasolImg} alt="repo_image" />}
            position="top center"
            className={`popup-content popup-arrow ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <a
              className="flex justify-between items-center"
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Project <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
            </a>
          </Popup>
        ) : name.toLowerCase().includes("special") ? (
          <Popup
            trigger={<img src={specialImg} alt="repo_image" />}
            position="top center"
            className={`popup-content popup-arrow ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <a
              className="flex justify-between items-center"
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Project <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
            </a>
          </Popup>
        ) : name.toLowerCase().includes("kasper") ? (
          <Popup
            trigger={<img src={kasperImg} alt="repo_image" />}
            position="top center"
            className={`popup-content popup-arrow ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <a
              className="flex justify-between items-center"
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Project <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
            </a>
          </Popup>
        ) : (
          console.error("Img Undefiend")
        )}
      </div>
      <div
        className={`hover:text-gray-700 mt-5 transition ${
          isDarkMode && "hover:text-zinc-200"
        }`}
      >
        <h3 className="font-bold text-2xl mb-4">{name}</h3>
        <p className="flex justify-between ">{description}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  repos: state.repos.repos, // Access to repos in state
});

export default connect(mapStateToProps, { getRepo })(Portfolio);
