import {
  faCode,
  faChartSimple,
  faArrowRight,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCode, faChartSimple, faGear, faArrowRight);

let i = 0;
const FEATURES = [
  {
    id: i++,
    title: "Web Development",
    desciption:
      "Develop responsive and interactive front-end websites with a focus on smooth user experience and modern design principles.",
    icon: faCode,
  },
  {
    id: i++,
    title: "Requirement Analysis",
    desciption:
      "Analyze and derive project requirements, represent them using tools or models, create detailed specifications (SRS), and ensure their validation and alignment with project goals.",
    icon: faChartSimple,
  },
  {
    id: i++,
    title: "Java Development",
    desciption:
      "Apply Object-Oriented Programming (OOP) principles to develop robust and maintainable back-end solutions using Java.",
    icon: faGear,
  },
];

export default FEATURES;
