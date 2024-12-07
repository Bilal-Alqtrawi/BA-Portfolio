import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3,
  faJs,
  faPhp,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

library.add(faHtml5, faCss3, faJs, faPhp, faJava, faPython);

function randomSerialNumber() {
  let characters =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let serialLength = 20;
  let serial = "";

  for (let i = 0; i < serialLength; i++) {
    let randomIndex = Math.trunc(Math.random() * characters.length);
    serial += characters[randomIndex];
  }
  return serial;
}

const SKILLS = [
  {
    id: randomSerialNumber(),
    name: "HTML",
    progress: "100%",
    icon: faHtml5,
  },
  {
    id: randomSerialNumber(),
    name: "CSS",
    progress: "97%",
    icon: faCss3,
  },
  {
    id: randomSerialNumber(),
    name: "JavaScript",
    progress: "98%",
    icon: faJs,
  },
  {
    id: randomSerialNumber(),
    name: "PHP",
    progress: "70%",
    icon: faPhp,
  },
  {
    id: randomSerialNumber(),
    name: "Java",
    progress: "85%",
    icon: faJava,
  },
  {
    id: randomSerialNumber(),
    name: "Python",
    progress: "80%",
    icon: faPython,
  },
];

export default SKILLS;
