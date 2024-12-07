import { useEffect } from "react";
import { useSelector } from "react-redux";
import SKILLS from "../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const handleScroll = () => {
      const mySkills = document.querySelector(".skills");
      const spansProg = document.querySelectorAll(".skills .progress span");
      const scrollY = window.scrollY;

      if (scrollY > mySkills.offsetTop) {
        spansProg.forEach((span) => {
          span.style.transition = "0.5s";
          span.style.width = span.dataset.progress;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`skills pt-16 pb-16 duration-300 ${isDarkMode && "dark !bg-slate-950"}`}
      id="skills"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-4xl  text-center font-bold ${
            isDarkMode ? "text-white" : "text-blue-950"
          }`}
        >
          My Skills
        </h2>
        <div
          className={`p-5 mx-auto skills-content max-w-full shadow-xl rounded-lg ${
            isDarkMode ? "bg-blue-950 shadow-black" : "bg-white"
          }`}
        >
          {SKILLS.map((skill) => {
            return (
              <Skill key={skill.id} skill={skill} isDarkMode={isDarkMode} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Skill = ({ skill: { name, progress, icon }, isDarkMode }) => {
  return (
    <div className="skill mb-6">
      <div className="flex justify-between">
        <h3
          className={`font-semibold text-xl mb-4 ${
            isDarkMode ? "text-neutral-100" : "text-blue-950"
          }`}
        >
          {name}
        </h3>
        <FontAwesomeIcon
          icon={icon}
          className={`${
            isDarkMode ? "text-neutral-100" : "text-blue-950"
          } fa-fw fa-2x icon`}
        />
      </div>
      <div
        className={`${
          isDarkMode ? "bg-slate-200" : "bg-slate-100"
        } h-6 rounded-lg overflow-hidden progress`}
      >
        <span
          className="block bg-rose-500 h-full rounded-lg w-0"
          data-progress={progress}
        ></span>
      </div>
    </div>
  );
};
export default Skills;
