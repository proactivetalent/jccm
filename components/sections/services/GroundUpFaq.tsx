"use client";

import { useId, useState } from "react";

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

function ExpandIcon({ open }: Readonly<{ open: boolean }>) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid size-11 shrink-0 place-items-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${open ? "border-brand bg-brand text-white" : "border-brand/20 bg-white text-brand"}`}
    >
      <span className="absolute h-px w-4 bg-current" />
      <span className={`absolute h-px w-4 bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-90" : ""}`} />
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
    <section aria-labelledby={`${idPrefix}-title`} className="relative overflow-hidden bg-surface min-[1024px]:max-[1535px]:h-[43.75vw] min-[1536px]:h-[672px]">
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <p className="m-0 font-body text-xs font-semibold tracking-[0.2em] text-brand uppercase">Common questions</p>
        <h2 className="mt-5 mb-0 font-headline text-[clamp(48px,10vw,72px)] leading-[0.98] font-normal tracking-[-0.03em] text-ink" id={`${idPrefix}-title`}>
          {title}
        </h2>
        <p className="mt-6 mb-0 max-w-xl font-body text-base leading-[1.45] text-ink-strong">
          Clear answers about how we coordinate the people, decisions, and details behind a successful project.
        </p>
        <div className="mt-10 border-t border-brand/20">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-mobile-trigger-${index}`;
            const panelId = `${baseId}-mobile-panel-${index}`;

            return (
              <article className={`border-b border-brand/20 ${open ? "bg-white/60" : ""}`} key={faq.question}>
                <button aria-controls={panelId} aria-expanded={open} className="flex min-h-[88px] w-full items-center gap-4 border-0 bg-transparent px-4 py-5 text-left font-[inherit] text-ink focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand" id={triggerId} onClick={() => setOpenIndex(open ? -1 : index)} type="button">
                  <span className="w-7 shrink-0 font-body text-sm font-medium text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1 font-headline text-xl leading-[1.2] font-medium">{faq.question}</span>
                  <ExpandIcon open={open} />
                </button>
                <div aria-hidden={!open} aria-labelledby={triggerId} className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={panelId} role="region">
                  <div className="min-h-0 overflow-hidden pl-[60px] pr-16 pb-6 font-body text-base leading-[1.5] text-ink-strong">{faq.answer}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 hidden h-[840px] w-[1920px] origin-top-left min-[1024px]:block min-[1024px]:max-[1535px]:left-0 min-[1024px]:max-[1535px]:[scale:calc(100vw_/_1920px)] min-[1024px]:max-[1535px]:[translate:none] min-[1536px]:left-[calc(50%_-_768px)] min-[1536px]:[scale:0.8] min-[1536px]:[translate:none]">
        <div className="absolute top-[112px] left-[197px] w-[500px]">
          <p className="m-0 font-body text-[14px] font-semibold tracking-[0.2em] text-brand uppercase">Common questions</p>
          <h2 className="mt-[25px] mb-0 font-headline text-[72px] leading-[80px] font-normal tracking-[-0.03em] text-ink" id={`${idPrefix}-title-desktop`}>
            {title}
          </h2>
          <span aria-hidden="true" className="mt-[30px] block h-1 w-[114px] bg-brand" />
          <p className="mt-[24px] mb-0 w-[440px] font-body text-[20px] leading-[1.35] text-ink-strong">
            Clear answers about how we coordinate the people, decisions, and details behind a successful project.
          </p>
        </div>

        <div className="absolute top-[112px] left-[850px] w-[870px] border-t border-brand/25">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const triggerId = `${baseId}-desktop-trigger-${index}`;
            const panelId = `${baseId}-desktop-panel-${index}`;

            return (
              <article className={`border-b border-brand/25 ${open ? "bg-white/65" : ""}`} key={`desktop-${faq.question}`}>
                <button aria-controls={panelId} aria-expanded={open} className="flex min-h-[116px] w-full items-center gap-6 border-0 border-l-[10px] border-l-transparent bg-transparent px-[32px] py-6 text-left font-[inherit] text-ink transition-colors duration-300 data-[open=true]:border-l-brand focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand" data-open={open ? "true" : "false"} id={triggerId} onClick={() => setOpenIndex(open ? -1 : index)} type="button">
                  <span className="w-11 shrink-0 font-body text-[18px] font-medium text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1 font-headline text-[30px] leading-[1.15] font-medium">{faq.question}</span>
                  <ExpandIcon open={open} />
                </button>
                <div aria-hidden={!open} aria-labelledby={triggerId} className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={panelId} role="region">
                  <div className="min-h-0 overflow-hidden pl-[95px] pr-[94px] pb-8 font-body text-[18px] leading-[1.5] text-ink-strong">{faq.answer}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
