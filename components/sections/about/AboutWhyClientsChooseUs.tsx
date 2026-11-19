"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Reason = Readonly<{
  title: string;
  description: string;
}>;

const reasons: readonly Reason[] = [
  {
    title: "Licensed Expertise",
    description:
      "Our team is composed of certified professionals, including Licensed General Contractors, Licensed Superintendents, and Registered Filing Representatives. This ensures every phase of your project is handled with authoritative knowledge and compliance.",
  },
  {
    title: "Owner-Centric Approach",
    description:
      "We act as an extension of your team. Our clear communication and dedicated owner representation mean your interests are protected, and you are always informed and in control.",
  },
  {
    title: "Mastery of NYC's Complexity",
    description:
      "There is no substitute for local experience. We possess an intimate understanding of NYC's building codes, Department of Buildings (DOB) protocols, and agency workflows, which allows us to anticipate challenges and navigate permits and approvals efficiently.",
  },
  {
    title: "Uncompromising Quality",
    description:
      "We are recognized for our meticulous attention to detail and a relentless focus on craftsmanship. From the foundation to the finishes, we ensure every element meets our strict standards of excellence.",
  },
] as const;

function ExpandIcon({ open }: Readonly<{ open: boolean }>) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${open ? "border-brand bg-brand text-white" : "border-brand/25 bg-transparent text-brand"}`}
    >
      <span className="absolute h-px w-3.5 bg-current" />
      <span
        className={`absolute h-px w-3.5 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-90" : ""}`}
      />
    </span>
  );
}

export function AboutWhyClientsChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  return (
    <section
      aria-labelledby="about-why-clients-title"
      className="relative overflow-hidden border-t border-divider bg-surface min-[1024px]:mx-auto min-[1024px]:w-[87.2%] min-[1024px]:max-w-[1675px]"
    >
      <div className="mx-auto grid w-full max-w-none gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(520px,0.62fr)] lg:gap-10 lg:px-0 lg:py-[72px]"
      >
        <div className="min-w-0">
          <h2
            className="m-0 max-w-[850px] font-headline text-[clamp(42px,6vw,60px)] leading-[0.98] font-normal tracking-[-0.035em] text-ink"
            id="about-why-clients-title"
          >
            Why Clients Choose Us
          </h2>
          <p className="mt-6 mb-0 max-w-[790px] font-body text-[17px] leading-[1.28] text-ink-strong md:text-[18px]">
            What truly sets JCCM apart is our integrated approach and our team&apos;s deep-seated commitment to every project&apos;s success.
          </p>

          <div className="mt-9 overflow-hidden rounded-card border-2 border-[#d8d8d8] bg-white">
            {reasons.map((reason, index) => {
              const open = activeIndex === index;
              const triggerId = `${baseId}-trigger-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              return (
                <article
                  className={`border-b border-[#d8d8d8] transition-colors duration-200 last:border-b-0 hover:bg-surface/55 ${open ? "border-l-[10px] border-l-brand" : "border-l-[10px] border-l-transparent"}`}
                  key={reason.title}
                >
                  <button
                    aria-controls={panelId}
                    aria-expanded={open}
                    className={`flex min-h-[108px] w-full items-center gap-5 border-0 bg-transparent px-7 py-6 text-left font-[inherit] text-ink transition-transform duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand md:gap-8 md:px-11 lg:h-[96px] lg:min-h-0 lg:py-0 ${open ? "lg:translate-y-5" : ""}`}
                    id={triggerId}
                    onClick={() => setActiveIndex(open ? -1 : index)}
                    type="button"
                  >
                    <span className="w-7 shrink-0 font-body text-[22px] leading-none font-normal text-ink-strong md:w-12 md:text-[24px]">
                      {index + 1}.
                    </span>
                    <span className="min-w-0 flex-1 font-headline text-[22px] leading-[1.15] font-medium md:text-[24px]">
                      {reason.title}
                    </span>
                    <ExpandIcon open={open} />
                  </button>
                  <div
                    aria-hidden={!open}
                    aria-labelledby={triggerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    id={panelId}
                    role="region"
                  >
                    <div className="min-h-0 overflow-hidden pl-[68px] pr-8 pb-7 font-body text-[15px] leading-[1.4] text-ink-strong md:pl-[108px] md:pr-14 md:text-[16px] lg:pb-6">
                      {reason.description}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative order-first aspect-[1214/1462] w-full overflow-hidden rounded-card lg:order-none lg:mt-1 lg:h-full lg:aspect-auto">
          <Image
            alt="Construction professionals reviewing architectural plans on an active New York City project site"
            className="rounded-card object-cover"
            fill
            sizes="(max-width: 1023px) 100vw, 40vw"
            src="/images/about/why-clients-choose-us.webp"
          />
        </div>
      </div>
    </section>
  );
}
