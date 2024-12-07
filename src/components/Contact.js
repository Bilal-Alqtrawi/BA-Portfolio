import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import Social from "./Social";

library.add(faPhone, faUser, faLocationDot, faEnvelope);

function Contact() {
  const { ref: contactRef, inView: isVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    const form = document.forms[0];
    const email = form.email;

    const onInput = (e) => {
      e.target.classList.add("!border-b-green-700");

      if (e.target.value === "") {
        e.target.classList.remove("!border-b-green-700");
      }
    };
    const onSubmit = (e) => {
      e.preventDefault();
      if (!email.value) {
        toast.error("Input Required Filed");

        setTimeout(() => {
          email.focus();
          email.classList.add("!border-b-red-500");
        }, 2000);

        return false;
      }

      const mailtoUrl = `mailto:bilalQat@hotmail.com?subject=${encodeURIComponent(
        form.subject.value || "no Subject"
      )}&body=${encodeURIComponent(
        `Name: ${form.name.value}\nPhone: ${form.phoneNumber.value}\n\nMessage: \n${form.message.value}`
      )}`;

      form.reset();

      inputs.forEach((input) => {
        if (input === email) {
          email.classList.remove("!border-b-red-500");
        }
        input.classList.remove("!border-b-green-700");
      });
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
    };

    form.addEventListener("input", onInput);
    form.addEventListener("submit", onSubmit);

    return function cleanup() {
      form.removeEventListener("input", onInput);
      form.removeEventListener("submit", onSubmit);
    };
  }, []);

  return (
    <div
      className={`contact relative pt-16 pb-16 ${
        isDarkMode && "!bg-gray-900 dark"
      }
        ${
          isVisible ? "fill-animation" : "hidden-animation"
        } transition-all  duration-300`}
      id="contact"
      ref={contactRef}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-4xl text-center font-bold ${
            isDarkMode ? "text-white" : "text-blue-950"
          }`}
        >
          Contact With Me
        </h2>
        <div className="flex justify-between">
          <div
            className={`p-6 info ${isDarkMode ? "bg-blue-950" : "bg-white"}`}
          >
            <h3
              className={`text-center font-bold text-3xl  mb-5 ${
                isDarkMode ? "text-white" : "text-blue-950"
              }`}
            >
              My Info
            </h3>
            <div
              className={`text-xl flex justify-between mb-5 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <FontAwesomeIcon
                className={`bg-black rounded-full w-6 h-6 p-3 cursor-pointer transition-all duration-300  ${
                  isDarkMode
                    ? "text-white bg-gray-900 hover:text-gray-600 hover:bg-white"
                    : "text-blue-950 bg-gray-200 hover:text-gray-300 hover:bg-black"
                }`}
                icon={faUser}
              />
              <span
                className={`inline-block ml-2 font-normal italic ${
                  isDarkMode ? "text-neutral-200 " : "text-blue-950"
                }`}
              >
                Bilal Alqtrawi
              </span>
            </div>
            <div
              className={`text-xl flex justify-between mb-5 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <FontAwesomeIcon
                className={`bg-black rounded-full w-6 h-6 p-3 cursor-pointer transition-all duration-300  ${
                  isDarkMode
                    ? "text-white bg-gray-900 hover:text-gray-600 hover:bg-white"
                    : "text-blue-950 bg-gray-200 hover:text-gray-300 hover:bg-black"
                }`}
                icon={faPhone}
              />
              <span
                className={`inline-block ml-2 font-normal italic ${
                  isDarkMode ? "text-neutral-200 " : "text-blue-950"
                }`}
              >
                (+972) 59 774 6577
              </span>
            </div>
            <div
              className={`text-xl flex justify-between mb-5 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <FontAwesomeIcon
                className={`bg-black rounded-full w-6 h-6 p-3 cursor-pointer transition-all duration-300  ${
                  isDarkMode
                    ? "text-white bg-gray-900 hover:text-gray-600 hover:bg-white"
                    : "text-blue-950 bg-gray-200 hover:text-gray-300 hover:bg-black"
                }`}
                icon={faEnvelope}
              />
              <span
                className={`inline-block ml-2 font-normal italic ${
                  isDarkMode ? "text-neutral-200 " : "text-blue-950"
                }`}
              >
                bilalQat@hotmail.com
              </span>
            </div>
            <div
              className={`text-xl flex justify-between ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <FontAwesomeIcon
                className={`bg-black rounded-full w-6 h-6 p-3 cursor-pointer transition-all duration-300  ${
                  isDarkMode
                    ? "text-white bg-gray-900 hover:text-gray-600 hover:bg-white"
                    : "text-blue-950 bg-gray-200 hover:text-gray-300 hover:bg-black"
                }`}
                icon={faLocationDot}
              />
              <span
                className={`inline-block ml-2 font-normal italic ${
                  isDarkMode ? "text-neutral-200 " : "text-blue-950"
                }`}
              >
                Palestine, Gaza-strip 123
              </span>
            </div>
            <h3
              className={`text-center font-bold text-3xl mt-7 mb-6 ${
                isDarkMode ? "text-white" : "text-blue-950"
              }`}
            >
              Social Media
            </h3>
            <Social />
          </div>
          <ToastContainer className={isDarkMode && "dark"} />
          <form
            className={`p-6 relative ${
              isDarkMode ? "bg-blue-950 text-white" : "bg-white text-black"
            }`}
            target="_blank"
          >
            <div className="flex justify-between gap-5 flex-col sm:flex-row ">
              <div className="basis-full sm:basis-2/4">
                <label>
                  <span className="block w-full mb-3 uppercase">Your Name</span>
                  <input
                    className={`w-full p-3 input-field ${
                      isDarkMode
                        ? "text-white !bg-slate-900 !border-neutral-200 transition hover:!bg-opacity-55"
                        : "text-black"
                    }`}
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </label>
              </div>
              <div className="basis-full sm:basis-2/4">
                <label>
                  <span className="block mb-3 uppercase">Phone Number</span>
                  <input
                    className={`w-full p-3 input-field ${
                      isDarkMode
                        ? "text-white !bg-slate-900 !border-neutral-200 transition hover:!bg-opacity-60"
                        : "text-black"
                    }`}
                    type="text"
                    placeholder="+(000) 59 700 6000"
                    name="phoneNumber"
                  />
                </label>
              </div>
            </div>
            <div className="mt-5">
              <label>
                <span className="block mb-3 uppercase">Your Email</span>
                <input
                  className={`w-full p-3 input-field ${
                    isDarkMode
                      ? "text-white !bg-slate-900 !border-neutral-200 transition hover:!bg-opacity-60"
                      : "text-black"
                  }`}
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </label>
            </div>
            <div className="mt-5">
              <label>
                <span className="block mb-3 uppercase">Subject</span>
                <input
                  className={`w-full p-3 input-field ${
                    isDarkMode
                      ? "text-white !bg-slate-900 !border-neutral-200 transition hover:!bg-opacity-60"
                      : "text-black"
                  }`}
                  type="text"
                  placeholder="Title Subject"
                  name="subject"
                />
              </label>
            </div>
            <div className="mt-5">
              <label>
                <span className="block mb-3 uppercase">Your Message</span>
                <textarea
                  className={`w-full p-3 font-mono  input-field ${
                    isDarkMode
                      ? "text-white !bg-slate-900 !border-neutral-200 transition hover:!bg-opacity-56"
                      : "text-black"
                  }`}
                  name="message"
                  placeholder="Enter Your Message"
                />
              </label>
            </div>
            <div className="mt-5">
              <input
                className={`block w-36 mx-auto transition p-3 cursor-pointer ${
                  isDarkMode
                    ? "!bg-neutral-50 text-black hover:!bg-neutral-300"
                    : "text-white"
                }`}
                value="Submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
