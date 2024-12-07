import React, { useEffect, useState } from "react";
import profileimg from "../images/profile.jpg";
import { useSelector } from "react-redux";

const TITLES = ["Developer", "Software Engineer"];

function Landing() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const [titleIndex, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    let fadetimeout;
    let titleInterval = setInterval(() => {
      setFadeIn(false);

      fadetimeout = setTimeout(() => {
        const index = (titleIndex + 1) % TITLES.length;
        setIndex(index);
        setFadeIn(true);
      }, 2000);
    }, 4000);

    return function cleanup() {
      clearInterval(titleInterval);
      clearTimeout(fadetimeout);
    };
  }, [titleIndex]);

  return (
    <div
      className={`min-h-screen relative landing overflow-hidden ${
        isDarkMode && "dark"
      } `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-screen landing-content">
          <div className="basis-3/4">
            <div className="w-3/4 p-5">
              <h1
                className={`font-bold text-5xl leading-normal text-blue-950 mb-5 ${
                  isDarkMode && "text-white"
                }`}
              >
                Hello, I'm{" "}
                <span className="text-rose-500" title="Bilal Alqatrawi">
                  Bilal Alq.
                </span>
                <br />a{" "}
                <span
                  className={`${
                    fadeIn ? "fade-in" : "fade-out"
                  } text-rose-500 font-bold`}
                >
                  {TITLES[titleIndex]}.
                </span>
              </h1>
              <p
                className={`leading-7 max-w-2xl ${
                  isDarkMode ? "text-neutral-100" : "text-neutral-600"
                }`}
              >
                I’m a Front-End Developer with expertise in JavaScript, HTML,
                CSS, and modern frameworks like Bootstrap, Tailwind CSS, React,
                and Redux. I specialize in crafting responsive, interactive, and
                visually engaging web experiences, seamlessly integrating
                animations to elevate user engagement. My focus is on delivering
                clean, efficient, and accessible code, ensuring a polished and
                user-friendly front-end for any project.
              </p>
            </div>
          </div>
          <div className="basis-1/4 relative">
            <img
              className="rounded-full max-w-full profile-image relative aspect-auto"
              src={profileimg}
              alt="profile-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
