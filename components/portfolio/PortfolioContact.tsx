"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const benefits = [
  "Single-source accountability that eliminates finger-pointing and simplifies project governance",
  "Integrated expertise that combines architectural sensitivity with construction practicality",
  "Proven NYC experience demonstrated through hundreds of successful projects across all boroughs",
  "Cutting-edge technology that enhances precision, communication, and project outcomes",
  "Unwavering commitment to quality evident in every detail of our finished work",
];

const fieldClassName =
  "box-border h-[67px] w-full min-w-0 rounded-none border-0 bg-white px-[35px] font-body text-base text-ink outline-none placeholder:text-[#85849e] focus-visible:ring-[3px] focus-visible:ring-footer-accent";

function ContactField({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: Readonly<{
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
}>) {
  return (
    <label className="flex min-w-0 flex-col gap-4 font-headline text-[20px] leading-[24px] text-white">
      <span>{label}</span>
      <input
        autoComplete={name}
        className={fieldClassName}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

export function PortfolioContact() {
  const [submissionNote, setSubmissionNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("given-name") ?? "").trim();
    const lastName = String(data.get("family-name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("tel") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      message,
    ].join("\n");

    // Until a form delivery service is configured, open a prefilled email instead
    // of displaying a misleading success message for an unsent inquiry.
    setSubmissionNote("Your email app will open with your message. Please send the email to complete your inquiry.");
    window.location.href = `mailto:info@jccmanagement.com?subject=${encodeURIComponent(
      `Project inquiry from ${firstName} ${lastName}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      aria-labelledby="portfolio-contact-title"
      className="relative bg-[linear-gradient(63deg,#205351_7%,#2b7f73_86%)] text-white"
    >
      <div className="mx-auto grid w-full max-w-[1920px] gap-14 py-16 pr-[clamp(24px,5.5vw,105px)] pl-[clamp(24px,6.3vw,121px)] min-[1280px]:min-h-[727px] min-[1280px]:grid-cols-[minmax(0,1fr)_minmax(0,min(45%,755px))] min-[1280px]:items-center min-[1280px]:gap-[5vw] min-[1280px]:py-[72px]">
        <div className="max-w-[880px]">
          <h2
            className="m-0 max-w-[900px] font-headline text-[clamp(44px,5vw,72px)] leading-[1.1] font-normal tracking-[-0.025em]"
            id="portfolio-contact-title"
          >
            Ready To Build With Confidence?
          </h2>

          <div className="mt-8 max-w-[820px] font-body text-[16px] leading-[1.23] tracking-[0.01em] sm:mt-9">
            <p className="m-0 max-w-[740px]">
              Whether you&apos;re planning a ground-up development, a complex
              renovation, or a commercial build-out, our comprehensive service
              approach ensures your project benefits from:
            </p>
            <ul className="mt-5 mb-0 list-disc pl-6 min-[1600px]:w-[900px]">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <a
            className="group relative mt-9 inline-flex h-[58px] items-center overflow-hidden border-[3px] border-white pr-4 pl-[73px] font-headline text-[20px] leading-none text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="#portfolio-contact-form"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[3px] -left-[3px] h-[58px] w-[62px] bg-white transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[3px] -left-[3px] z-[1] flex h-[58px] w-[62px] items-center justify-center"
            >
              <Image
                alt=""
                className="transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
                height={22}
                src="/icons/home/explore-arrow-brand.svg"
                unoptimized
                width={22}
              />
            </span>
            <span className="relative z-[1] transition-colors duration-[320ms] group-hover:text-brand group-focus-visible:text-brand motion-reduce:transition-none">
              Contact Us
            </span>
          </a>
        </div>

        <form
          className="grid min-w-0 grid-cols-1 gap-x-[31px] gap-y-[18px] rounded-[16px] border border-white/80 bg-white/[0.07] px-6 py-8 sm:grid-cols-2 lg:px-[45px] lg:py-[26px]"
          id="portfolio-contact-form"
          onSubmit={handleSubmit}
        >
          <ContactField label="First Name" name="given-name" placeholder="First Name" required />
          <ContactField label="Last Name" name="family-name" placeholder="Last Name" required />
          <ContactField label="Email" name="email" placeholder="jon@gmail.com" required type="email" />
          <ContactField label="Phone Number" name="tel" placeholder="+1 000 0000 000" type="tel" />
          <label className="col-span-full flex min-w-0 flex-col gap-4 font-headline text-[20px] leading-[24px] text-white">
            <span>Message</span>
            <textarea
              className={`${fieldClassName} h-[132px] resize-y py-[20px]`}
              name="message"
              placeholder="Message"
              required
            />
          </label>
          <button
            className="col-span-full mt-[6px] min-h-[57px] cursor-pointer bg-[#23c7af] px-6 font-headline text-[18px] font-medium text-white transition-colors duration-200 hover:bg-[#17ae9d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            type="submit"
          >
            Submit
          </button>
          {submissionNote && (
            <p aria-live="polite" className="col-span-full m-0 font-body text-sm text-white">
              {submissionNote}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
