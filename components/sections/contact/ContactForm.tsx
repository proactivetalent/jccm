"use client";

import { useState, type FormEvent } from "react";

import { ExploreButton } from "@/components/ui/ExploreLink";

import styles from "./ContactForm.module.css";

type ContactFieldProps = Readonly<{
  autoComplete: string;
  label: string;
  name: string;
  optional?: boolean;
  type?: "email" | "tel" | "text";
}>;

function ContactField({
  autoComplete,
  label,
  name,
  optional = false,
  type = "text",
}: ContactFieldProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {optional ? <span className={styles.optional}>Optional</span> : null}
      </span>
      <input
        autoComplete={autoComplete}
        className={styles.input}
        name={name}
        required={!optional}
        type={type}
      />
    </label>
  );
}

export function ContactForm() {
  const [submissionNote, setSubmissionNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${whatsapp || "Not provided"}`,
      "",
      message,
    ].join("\n");

    setSubmissionNote(
      "Your email app will open with this message. Send the email there to complete your inquiry.",
    );
    window.location.href = `mailto:info@jccmanagement.com?subject=${encodeURIComponent(
      `Website inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section aria-labelledby="contact-form-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <p className={styles.eyebrow}>Start a conversation</p>
          <h2 className={styles.heading} id="contact-form-title">
            Tell us about your project.
          </h2>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <ContactField autoComplete="name" label="Name" name="name" />
            <ContactField
              autoComplete="email"
              label="Email Address"
              name="email"
              type="email"
            />
            <ContactField
              autoComplete="tel"
              label="WhatsApp Number"
              name="whatsapp"
              optional
              type="tel"
            />
          </div>

          <label className={`${styles.field} ${styles.messageField}`}>
            <span className={styles.label}>Message</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              required
              rows={4}
            />
          </label>

          <div className={styles.actions}>
            <ExploreButton label="Send Message" type="submit" />
            <p aria-live="polite" className={styles.submissionNote}>
              {submissionNote}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
