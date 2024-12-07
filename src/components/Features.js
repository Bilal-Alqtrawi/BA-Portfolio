import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React FontAwesome component
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import FEATURES from "../data/features";

const Features = () => {
  const { ref: featuresRef, inView: isVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <Fragment>
      <div
        className={`pt-16 pb-16 transition-all duration-300 ${
          isDarkMode && "bg-gray-900"
        } ${isVisible ? "fill-animation" : "hidden-animation"}  features`}
        id="features"
        ref={featuresRef}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`mb-12 text-4xl text-center font-bold ${
              isDarkMode ? "text-white" : "text-blue-950"
            } `}
          >
            Features
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {FEATURES.map((FEATURE, index) => {
              return (
                <Feature
                  key={FEATURE.id}
                  feature={FEATURE}
                  isDarkMode={isDarkMode}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
function Feature({ feature: { title, desciption, icon }, isDarkMode }) {
  return (
    <div
      className={`p-5 shadow-md feature duration-300 ease-linear ${
        isDarkMode
          ? "shadow-black bg-blue-950 text-white hover:bg-rose-500 hover:text-neutral-50"
          : "shadow-zinc-400 bg-white hover:bg-slate-700 hover:text-white"
      }`}
    >
      <span className="block text-2xl mb-5">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h3 className="mb-5 font-bold">{title}</h3>
      <p className="leading-relaxed">{desciption}</p>
      <a href="/" className="block text-2xl mt-5">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </a>
    </div>
  );
}
export default Features;
