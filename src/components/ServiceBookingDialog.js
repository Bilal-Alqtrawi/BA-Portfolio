import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../context/I18nContext";
import Dialog from "./ui/Dialog";

const FORM_ID = "mvkgkodg";
const initialForm = { name: "", email: "", phone: "", note: "" };

const field =
  "w-full rounded-xl border border-ink-200/90 bg-ink-50/60 px-4 py-3 text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-400";

function BookingBody({ serviceTitle, serviceKey, onClose }) {
  const { t } = useI18n();
  const [form, setForm] = useState(initialForm);
  const [state, handleSubmit] = useForm(FORM_ID);

  useEffect(() => {
    if (state.result === "error") toast.error(t("toast.errorSubmit"));
  }, [state.result, t]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      ...form,
      // Always sent in English so the inbox stays consistent.
      subject: `Service booking: ${serviceKey}`,
      service: serviceKey,
      message: form.note || `Booking request for: ${serviceKey}`,
    });
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center p-8 text-center sm:p-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-400">
          <CheckCircleIcon aria-hidden className="h-9 w-9" />
        </span>
        <h3
          id="project-dialog-title"
          className="mt-6 font-display text-2xl text-ink-950 dark:text-white"
        >
          {t("expertise.booking.successTitle")}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-700 dark:text-zinc-400">
          {t("expertise.booking.successBody")}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-brand-400"
        >
          {t("expertise.booking.close")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            id="project-dialog-title"
            className="font-display text-2xl text-ink-950 dark:text-white"
          >
            {t("expertise.booking.title")}
          </h3>
          <p className="mt-2 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-400">
            {serviceTitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("expertise.booking.close")}
          className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-zinc-400">
        {t("expertise.booking.intro")}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-zinc-300">
            {t("contact.name")}
          </span>
          <input
            className={field}
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder={t("contact.namePh")}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-zinc-300">
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
          <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-zinc-300">
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
          <span className="mb-2 block text-sm font-semibold text-ink-700 dark:text-zinc-300">
            {t("expertise.booking.note")}
          </span>
          <textarea
            className={`${field} min-h-[96px] resize-y`}
            name="note"
            value={form.note}
            onChange={onChange}
            rows={3}
            placeholder={t("expertise.booking.notePh")}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:bg-ink-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          {t("expertise.booking.cancel")}
        </button>
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70"
        >
          {state.submitting
            ? t("common.sending")
            : t("expertise.booking.confirm")}
        </button>
      </div>
    </form>
  );
}

export default function ServiceBookingDialog({ service, onClose }) {
  return (
    <Dialog isOpen={Boolean(service)} onClose={onClose}>
      {service ? (
        <BookingBody
          key={service.key}
          serviceTitle={service.title}
          serviceKey={service.key}
          onClose={onClose}
        />
      ) : null}
    </Dialog>
  );
}
