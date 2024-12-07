import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFacebook, faGithub, faInstagram, faLinkedinIn);
export default function Social() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ul className={`flex gap-7 social ${isDarkMode && "dark"}`}>
      <li>
        <a
          href="https://www.facebook.com/bilal.alqtrawi"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="fa-2x fa-fx facebook" icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Bilal-Alqtrawi/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="fa-2x fa-fx github" icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/bilal.7lqtrawi/" rel="noreferrer">
          <FontAwesomeIcon
            className="fa-2x fa-fx instagram"
            icon={faInstagram}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bilal-alqtrawi-00ba8b18a/"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="fa-2x fa-fx linkedin"
            icon={faLinkedinIn}
          />
        </a>
      </li>
    </ul>
  );
}
