import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useI18n } from "../context/I18nContext";
import { WHATSAPP_URL } from "../data/contact";

library.add(faFacebook, faGithub, faInstagram, faLinkedinIn, faWhatsapp);

export default function Social({ variant = "default" }) {
  const { t } = useI18n();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const isFooter = variant === "footer";

  return (
    <ul
      className={`flex flex-wrap gap-6 ${
        isFooter
          ? "text-zinc-300"
          : isDarkMode
            ? "text-zinc-200"
            : "text-ink-800"
      }`}
    >
      <li>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#25D366]"
          aria-label={t("contact.whatsapp")}
        >
          <FontAwesomeIcon className="fa-2x" icon={faWhatsapp} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/bilal.alqtrawi"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#1877f2]"
          aria-label="Facebook"
        >
          <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Bilal-Alqtrawi/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#6e5494]"
          aria-label="GitHub"
        >
          <FontAwesomeIcon className="fa-2x" icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/bilal.qatrawi/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#fd1d1d]"
          aria-label="Instagram"
        >
          <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bilalalqatrawi"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#0a66c2]"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon className="fa-2x" icon={faLinkedinIn} />
        </a>
      </li>
    </ul>
  );
}
