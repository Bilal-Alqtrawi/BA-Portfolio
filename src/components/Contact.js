import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faLocationDot,
  faEnvelope,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Social from "./Social";
import { WHATSAPP_URL } from "../data/contact";
import { useI18n } from "../context/I18nContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

library.add(faPhone, faUser, faLocationDot, faEnvelope, faCircleCheck);

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { t } = useI18n();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const [form, setForm] = useState(initialForm);
  const [state, handleSubmit, resetForm] = useForm("mvkgkodg");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  useEffect(() => {
    if (state.result === "error") {
      toast.error(t("toast.errorSubmit"));
    }
  }, [state.result, t]);

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className={`scroll-mt-24 py-20 md:py-28 ${
          isDarkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
            />
          </Reveal>

          <Reveal className="max-w-md mx-auto">
            <div
              className={`flex flex-col items-center rounded-2xl border p-10 text-center shadow-sm ${
                isDarkMode
                  ? "border-zinc-800 bg-zinc-950/60"
                  : "border-ink-100 bg-ink-50/60"
              }`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <FontAwesomeIcon icon={faCircleCheck} className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-ink-950 dark:text-white">
                {t("contact.successTitle")}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700 dark:text-zinc-400">
                {t("contact.successBody")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  resetForm();
                }}
                className="mt-8 rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-brand-400"
              >
                {t("contact.successCta")}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const field =
    "w-full rounded-xl border border-ink-200/90 bg-white px-4 py-3 text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-400";

  return (
    <section
      id="contact"
      className={`scroll-mt-24 py-20 md:py-28 ${
        isDarkMode ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div
              className={`h-full rounded-2xl border p-8 shadow-sm ${
                isDarkMode
                  ? "border-zinc-800 bg-zinc-950/60"
                  : "border-ink-100 bg-ink-50/60"
              }`}
            >
              <h3 className="font-display text-2xl text-ink-950 dark:text-white">
                {t("contact.infoTitle")}
              </h3>
              <ul className="mt-8 space-y-5 text-ink-800 dark:text-zinc-200">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-zinc-800">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                      {t("contact.name")}
                    </p>
                    <p className="mt-1">{t("contact.fullName")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-zinc-800">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                      {t("contact.phone")}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-medium text-brand-600 hover:underline dark:text-brand-400"
                      dir="ltr"
                      aria-label={t("contact.whatsapp")}
                    >
                      {t("contact.phoneValue")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-zinc-800">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                      {t("contact.email")}
                    </p>
                    <a
                      className="mt-1 inline-block text-brand-600 hover:underline dark:text-brand-400"
                      href={`mailto:${t("contact.emailValue")}`}
                    >
                      {t("contact.emailValue")}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white dark:bg-zinc-800">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <div>
                    <p className="text-sm leading-relaxed text-ink-800 dark:text-zinc-200">
                      {t("contact.location")}
                    </p>
                  </div>
                </li>
              </ul>

              <h4 className="mt-10 font-display text-lg text-ink-950 dark:text-white">
                {t("contact.social")}
              </h4>
              <div className="mt-4 justify-start">
                <Social />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl border p-8 shadow-sm ${
                isDarkMode
                  ? "border-zinc-800 bg-zinc-950/60"
                  : "border-ink-100 bg-white"
              }`}
            >
              <h3 className="font-display text-2xl text-ink-950 dark:text-white">
                {t("contact.formTitle")}
              </h3>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                    {t("contact.name")}
                  </span>
                  <input
                    className={field}
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={t("contact.namePh")}
                    autoComplete="name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                    {t("contact.phone")}
                  </span>
                  <input
                    className={field}
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={t("contact.phonePh")}
                    autoComplete="tel"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                    {t("contact.email")}
                  </span>
                  <input
                    className={field}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder={t("contact.emailPh")}
                    autoComplete="email"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                    {t("contact.subject")}
                  </span>
                  <input
                    className={field}
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder={t("contact.subjectPh")}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-zinc-500">
                    {t("contact.message")}
                  </span>
                  <textarea
                    className={`${field} min-h-[140px] resize-y`}
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder={t("contact.messagePh")}
                    rows={5}
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="mt-8 w-full rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:min-w-[200px] sm:px-10"
              >
                {state.submitting ? t("common.sending") : t("common.submit")}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
