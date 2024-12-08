import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const { ref: aboutRef, inView: isVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY;
      const aboutLine = document.querySelector(".about-content");
      let windowHeight = window.innerHeight;
      if (
        scrollY >
        aboutLine.offsetTop + aboutLine.offsetHeight - windowHeight
      ) {
        aboutLine.classList.add("fill");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`pt-16 pb-16 about-me ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white"
      } ${isVisible ? "fill-animation" : "hidden-animation"}`}
      id="about"
      ref={aboutRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl text-center font-bold">About Me</h2>
        <h3 className="font-bold text-5xl mb-7">
          {/* So, who <span className="text-rose-500">am I?</span> */}
          My Journey <span className="text-rose-500">in Tech</span>
        </h3>
        <div className={`flex justify-between relative about-content`}>
          <div className="left">
            <div
              className={`p-5 mb-5 overflow-hidden relative  ${
                isDarkMode
                  ? "!bg-blue-950 text-neutral-200"
                  : "text-neutral-600 hover:text-white"
              }`}
            >
              <p>
                My journey began in late 2020 when I enrolled in the College of
                Software Engineering. During this time, I started learning the
                fundamentals of programming, beginning with{" "}
                <span className="font-semibold">C</span> and{" "}
                <span className="font-semibold">C++</span>. By early 2021, I
                expanded my knowledge to Java through an in-depth course, which
                deepened my understanding of programming concepts and introduced
                me to{" "}
                <span className="font-semibold">
                  Object-Oriented Programming (OOP)
                </span>
                . I spent significant time applying what I learned by solving a
                variety of programming challenges, which helped strengthen my
                problem-solving skills.
              </p>
            </div>
            <div
              className={`p-5 mb-5 overflow-hidden relative ${
                isDarkMode
                  ? "!bg-blue-950 text-neutral-200"
                  : "text-neutral-600 hover:text-white"
              }`}
            >
              <p>
                In mid-2021, I ventured into web development with a
                comprehensive{" "}
                <span className="font-semibold">full-stack training</span>{" "}
                course that covered both front-end and back-end development.
                After completing the course, I decided to focus on{" "}
                <span className="font-semibold">front-end development</span>,
                where I have continued to grow and specialize. Over the past
                year, I have honed my skills by building projects and converting
                PSD designs into interactive, responsive user interfaces.
              </p>
            </div>
          </div>
          <div className="right">
            <div
              className={`p-5 overflow-hidden relative ${
                isDarkMode
                  ? "!bg-blue-950 text-neutral-200"
                  : "text-neutral-600 hover:text-white"
              }`}
            >
              <p>
                Today, I am a proficient{" "}
                <span className="font-semibold">React developer</span> with
                experience in
                <span className="font-semibold">Redux</span> for state
                management. One of my most significant professional and training
                projects was building a fully{" "}
                <span className="font-semibold">
                  responsive social networking site
                </span>{" "}
                with attractive animations and effects. Below, you will find a
                showcase of some of my most notable work.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8 resume-file justify-center md:justify-normal ">
              <h4 className={`text-2xl`}>Resume.pdf</h4>
              <a
                href="https://bilal-alqtrawi.github.io/BA-Portfolio/Resume.pdf"
                className={`px-5 py-2 flex justify-between items-center gap-6 bg-rose-500 hover:bg-rose-700 text-white rounded-md transition font-medium`}
                download="MyResume.pdf"
              >
                <span>Download</span>
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
