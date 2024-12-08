import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRepo, getSpecificRepo } from "../redux/modules/repos";
import { connect } from "react-redux";
import tawasolImg from "../images/tawasol.png";
import specialImg from "../images/special.png";
import kasperImg from "../images/kasper.png";
import dashboardImg from "../images/dashboard.png";
import huddleImg from "../images/huddle.png";
import DoobImg from "../images/Doob.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

library.add(faLocationArrow);

const repoImages = {
  tawasol: tawasolImg,
  special: specialImg,
  kasper: kasperImg,
  dashboard: dashboardImg,
  "huddle-page-with-curve": huddleImg,
  doob: DoobImg,
};

function Portfolio({ getRepo, getSpecificRepo, repos, specificRepo }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    getRepo("Bilal-Alqtrawi");
    getSpecificRepo("Bilal-Alqtrawi/tawasol-client");
  }, [getRepo, getSpecificRepo]);

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
              repo.id.toString() === "598411642" ||
              repo.id.toString() === "559664033" ||
              repo.id.toString() === "880745184" ||
              repo.id.toString() === "895047659" ||
              repo.id.toString() === "840821371"
            ) {
              return <Repo key={repo.id} repo={repo} isDarkMode={isDarkMode} />;
            }
            return null;
          })}

          {specificRepo && (
            <Repo
              key={specificRepo.id}
              repo={specificRepo}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}
const Repo = ({ repo: { name, description, html_url }, isDarkMode }) => {
  const getRepoImage = (repoName) => {
    const lowerCaseName = repoName.toLowerCase();
    return (
      Object.keys(repoImages).find((key) => lowerCaseName.includes(key)) &&
      repoImages[
        Object.keys(repoImages).find((key) => lowerCaseName.includes(key))
      ]
    );
  };
  return (
    <div
      className={`p-5 duration-300 ease-linear rounded-2xl shadow-xl portfolio ${
        isDarkMode
          ? "!bg-blue-950 text-white shadow-gray-900 "
          : "shadow-neutral-300"
      }`}
    >
      <div className="overflow-hidden rounded-2xl">
        <Popup
          trigger={
            <img
              src={getRepoImage(name) || "default-image-path.png"}
              alt="repo_image"
            />
          }
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
      </div>
      <div
        className={`hover:text-gray-700 mt-5 transition ${
          isDarkMode && "hover:text-zinc-200"
        }`}
      >
        <h3 className="font-bold text-2xl mb-4 capitalize">{name}</h3>
        <p
          className={`${isDarkMode ? "text-neutral-200" : "text-neutral-500"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  repos: state.repos.repos,
  specificRepo: state.repos.specificRepo,
});

export default connect(mapStateToProps, { getRepo, getSpecificRepo })(
  Portfolio
);
