"use client";

import { useId, useState } from "react";

import styles from "./GroundUpFaq.module.css";

export type FaqItem = Readonly<{
  question: string;
  answer: string;
}>;

const defaultFaqs: readonly FaqItem[] = [
  {
    question: "What's included in your initial budget and estimate?",
    answer:
      "Our budgets are comprehensive, including hard costs (materials, labor), soft costs (permitting, fees), and a contingency for unforeseen NYC site conditions. We provide transparent line-item estimates for your review.",
  },
  {
    question: "How do you handle delays from material shortages?",
    answer:
      "We proactively source materials, maintain approved alternatives, and adjust sequencing to keep your project moving without compromising quality or budget.",
  },
  {
    question: "Why is General Contractor Important?",
    answer:
      "A general contractor coordinates the full construction process, managing trades, schedule, budget, safety, and quality so the project is delivered as planned.",
  },
] as const;

function ExpandIcon({ open, size }: Readonly<{ open: boolean; size: "mobile" | "desktop" }>) {
  return (
    <span aria-hidden="true" className={`relative grid shrink-0 place-items-center rounded-full transition-colors duration-300 ${size === "mobile" ? "size-10" : "size-[46px]"} ${open ? "bg-brand text-white" : "bg-[#f0f1f8] text-[#74749b]"}`}>
      <span className="absolute h-[2px] w-3 bg-current transition-transform duration-300" />
      <span className={`absolute h-[2px] w-3 bg-current transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
    </span>
  );
}

export type GroundUpFaqProps = Readonly<{
  faqs?: readonly FaqItem[];
  title?: string;
  idPrefix?: string;
}>;

export function GroundUpFaq({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  idPrefix = "ground-up-faq",
}: GroundUpFaqProps = {}) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section aria-labelledby={`${idPrefix}-title`} className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2 id={`${idPrefix}-title`} className="m-0 text-center font-headline text-[clamp(42px,9vw,72px)] leading-none font-normal tracking-[-0.03em] text-ink">
          {title}
        </h2>
        <div className="mt-12 flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <article className={`overflow-hidden rounded-card border bg-white shadow-[0_3px_8px_rgba(38,48,88,0.07)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(38,48,88,0.1)] ${open ? "border-brand/50 shadow-[0_6px_18px_rgba(43,127,115,0.12)]" : "border-[#d8dce9]"}`} key={faq.question}>
                <button aria-controls={panelId} aria-expanded={open} className="flex min-h-[92px] w-full items-center justify-between gap-6 border-0 bg-transparent px-6 py-5 text-left font-headline text-[22px] leading-[1.2] font-semibold text-[#18144e] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand" id={triggerId} onClick={() => setOpenIndex(open ? -1 : index)} type="button">
                  {faq.question}
                  <ExpandIcon open={open} size="mobile" />
                </button>
                <div aria-hidden={!open} aria-labelledby={triggerId} className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`} id={panelId} role="region">
                  <div className="border-t border-brand/10 px-6 pt-4 pb-6 font-body text-[18px] leading-[1.55] text-[#74749b]">{faq.answer}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[800px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id={`${idPrefix}-title-desktop`} className="absolute top-[88px] left-[260px] m-0 w-[1400px] text-center font-headline text-[64px] leading-[1.1] font-normal tracking-[-0.03em] text-ink">
          {title}
        </h2>
        <div className="absolute top-[232px] left-[280px] flex w-[1440px] flex-col gap-[25px]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-desktop-trigger-${index}`;
            const panelId = `${baseId}-desktop-panel-${index}`;
            return (
              <article className={`overflow-hidden rounded-card border bg-white shadow-[0_3px_8px_rgba(38,48,88,0.07)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(38,48,88,0.1)] ${open ? "border-brand/50 shadow-[0_8px_24px_rgba(43,127,115,0.12)]" : "border-[#d8dce9]"}`} key={`desktop-${faq.question}`}>
                <button aria-controls={panelId} aria-expanded={open} className="flex min-h-[115px] w-full items-center justify-between gap-8 border-0 bg-transparent px-[42px] py-6 text-left font-headline text-[26px] leading-[1.2] font-semibold text-[#18144e] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand" id={triggerId} onClick={() => setOpenIndex(open ? -1 : index)} type="button">
                  <span>{faq.question}</span>
                  <ExpandIcon open={open} size="desktop" />
                </button>
                <div aria-hidden={!open} aria-labelledby={triggerId} className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${open ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`} id={panelId} role="region">
                  <div className="border-t border-brand/10 px-[42px] pt-5 pb-[38px] font-body text-[20px] leading-[1.55] text-[#74749b]">{faq.answer}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
