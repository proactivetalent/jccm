"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";

import styles from "./ServicesStandard.module.css";

export type StandardFeature = Readonly<{
  title: string;
  description: string;
}>;

export type StandardItem = Readonly<{
  id: string;
  navLabel: string;
  title: string;
  summary: string;
  features: readonly StandardFeature[];
}>;

const standardItems: readonly StandardItem[] = [
  {
    id: "strategic-project-management",
    navLabel: "Strategic Project Management",
    title: "Strategic Project Management",
    summary:
      "We approach every project with a comprehensive management philosophy that extends beyond construction. Our integrated methodology combines:",
    features: [
      {
        title: "Financial Intelligence",
        description:
          "Precise budgeting and cost control measures that protect your investment through detailed forecasting and transparent accounting.",
      },
      {
        title: "Timeline Optimization",
        description:
          "Strategic scheduling that anticipates challenges and builds in contingencies for NYC’s unpredictable variables.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Proactive problem-solving that identifies potential issues before they impact your budget or schedule.",
      },
      {
        title: "Quality Assurance",
        description:
          "Systematic quality control protocols implemented at every phase, from foundation to finishes.",
      },
    ],
  },
  {
    id: "technology-forward-solutions",
    navLabel: "Technology-Forward Solutions",
    title: "Technology-Forward Solutions",
    summary:
      "We use connected project technology to keep every stakeholder informed, every decision documented, and every phase moving with clarity.",
    features: [
      {
        title: "Real-Time Reporting",
        description:
          "Live progress tracking gives owners a clear view of schedules, budgets, milestones, and field activity.",
      },
      {
        title: "Digital Coordination",
        description:
          "Centralized drawings, submittals, and RFIs reduce communication gaps and keep the team aligned around current information.",
      },
      {
        title: "Data-Led Decisions",
        description:
          "Reliable project data helps us identify trends early and make faster, better-informed adjustments.",
      },
      {
        title: "Transparent Documentation",
        description:
          "Organized records create accountability throughout construction and support a seamless final turnover.",
      },
    ],
  },
  {
    id: "nyc-specific-expertise",
    navLabel: "NYC-Specific Expertise",
    title: "NYC-Specific Expertise",
    summary:
      "Our experience across New York City helps us navigate dense urban sites, complex approvals, and demanding logistics before they slow the work.",
    features: [
      {
        title: "Regulatory Navigation",
        description:
          "Proactive coordination with city agencies helps protect permitting, inspection, and sign-off milestones.",
      },
      {
        title: "Urban Site Logistics",
        description:
          "Detailed plans for deliveries, access, staging, and public protection keep constrained sites operating safely.",
      },
      {
        title: "Trade Coordination",
        description:
          "Disciplined sequencing keeps specialized trades productive in occupied buildings and space-limited environments.",
      },
      {
        title: "Neighborhood Awareness",
        description:
          "Careful communication and site controls minimize disruption to neighbors, tenants, and surrounding businesses.",
      },
    ],
  },
] as const;

const staggerClass =
  "motion-safe:animate-[staggerIn_240ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none";

function FeatureList({ features }: Readonly<{ features: readonly StandardFeature[] }>) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[12px] p-0">
      {features.map((feature) => (
        <li className="relative pl-[30px]" key={feature.title}>
          <span
            aria-hidden="true"
            className="absolute top-[9px] left-0 size-[4px] rounded-full bg-brand"
          />
          <h4 className="m-0 font-headline text-xl leading-[1.109] font-semibold text-brand">
            {feature.title}
          </h4>
          <p className="mt-[7px] mb-0 font-body text-base leading-[24.285px] font-normal tracking-[0.01em] text-ink-strong">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export type ServicesStandardProps = Readonly<{
  title?: ReactNode;
  description?: string;
  items?: readonly StandardItem[];
  imageSrc?: string;
  imageAlt?: string;
  panelSrc?: string;
  variant?: "standard" | "phases";
}>;

export function ServicesStandard({
  title = "The JCCM Standard",
  description,
  items = standardItems,
  imageSrc = "/images/services/jccm-standard-construction.jpeg",
  imageAlt = "Cranes above an active New York City construction site",
  panelSrc = "/images/services/jccm-standard-panel.svg",
  variant = "standard",
}: ServicesStandardProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const desktopIndex = activeIndex < 0 ? 0 : activeIndex;
  const activeItem = items[desktopIndex];
  const panelId = `${baseId}-standard-panel`;

  const selectItem = (index: number, focusTab = false) => {
    const previous = activeIndex < 0 ? 0 : activeIndex;
    setDirection(index < previous ? "up" : "down");
    setActiveIndex(index);

    if (focusTab) {
      queueMicrotask(() => tabRefs.current[index]?.focus());
    }
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      selectItem((index + 1) % items.length, true);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      selectItem((index - 1 + items.length) % items.length, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectItem(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      selectItem(items.length - 1, true);
    }
  };

  return (
    <section
      aria-labelledby="services-standard-title"
      className={`relative overflow-x-clip bg-surface lg:overflow-clip ${styles.sectionScale}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-7 z-[2] hidden w-px bg-divider/70 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-7 z-[2] hidden w-px bg-divider/70 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] hidden h-px bg-divider lg:block"
      />

      <div className="mx-auto box-border w-full max-w-[920px] px-5 pt-16 pb-20 md:px-6 md:pt-20 md:pb-24 lg:hidden">
        <h2
          className="m-0 font-headline text-[clamp(42px,10vw,58px)] leading-none font-normal text-ink"
          id="services-standard-title"
        >
          {title}
        </h2>
        {description ? <p className="mt-5 mb-0 max-w-xl font-body text-base leading-[1.23] font-medium text-ink">{description}</p> : null}

        <div className="mt-9 overflow-hidden rounded-card border border-[#d8d8d8] bg-white">
          {items.map((item, index) => {
            const open = index === activeIndex;
            const triggerId = `${baseId}-standard-trigger-${item.id}`;
            const contentId = `${baseId}-standard-content-${item.id}`;

            return (
              <div
                className="group/item border-b border-[#d8d8d8] last:border-b-0"
                data-open={open ? "true" : "false"}
                key={item.id}
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={open}
                  className="relative grid min-h-[62px] w-full cursor-pointer grid-cols-[28px_1fr] items-center gap-3 border-0 border-l-4 border-l-transparent bg-white py-4 pr-5 pl-5 text-left font-[inherit] text-subtle group-data-[open=true]/item:border-l-brand group-data-[open=true]/item:text-ink focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ink"
                  id={triggerId}
                  onClick={() => setActiveIndex((current) => (current === index ? -1 : index))}
                  type="button"
                >
                  <span className="font-body text-base leading-[1.23] font-normal group-data-[open=true]/item:text-brand">
                    {index + 1}.
                  </span>
                  <span className="font-headline text-[clamp(19px,4.8vw,24px)] leading-[1.25] font-normal">
                    {item.navLabel}
                  </span>
                </button>

                <div
                  aria-labelledby={triggerId}
                  className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-[ease] group-data-[open=true]/item:grid-rows-[1fr] motion-reduce:transition-none"
                  id={contentId}
                  role="region"
                >
                  <div className="min-h-0 overflow-hidden px-5 opacity-0 transition-[opacity,padding] duration-[250ms] ease-[ease] group-data-[open=true]/item:pt-1 group-data-[open=true]/item:pb-7 group-data-[open=true]/item:opacity-100 motion-reduce:transition-none">
                    <div className="relative aspect-[1224/300] overflow-hidden rounded-card">
                      <Image
                        alt={imageAlt}
                        className="object-cover object-center"
                        fill
                        sizes="(max-width: 1023px) 100vw, 1224px"
                        src={imageSrc}
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-6 mb-0 font-headline text-[clamp(28px,7vw,36px)] leading-[1.08] font-normal text-ink">
                      {item.title}
                    </h3>
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="mt-4 h-auto max-w-none"
                      height={2.0816}
                      src="/images/services/jccm-standard-rule.svg"
                      unoptimized
                      width={58.5058}
                    />
                    <p className="mt-4 mb-6 font-body text-base leading-[1.45] font-normal text-ink-strong">
                      {item.summary}
                    </p>
                    <FeatureList features={item.features} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`relative hidden h-[1042px] w-[1920px] lg:absolute lg:top-0 lg:left-1/2 lg:block lg:origin-top lg:-translate-x-1/2 ${styles.canvasScale}`}
      >
        <h2
          className={`absolute top-[143px] left-[197px] m-0 ${variant === "phases" ? "h-[160px] w-[1250px] leading-[72px]" : "h-[90px] w-[760px] leading-[89.297px]"} font-headline text-[72px] font-normal whitespace-nowrap text-ink`}
          id="services-standard-title-desktop"
        >
          {title}
        </h2>
        {description ? <p className="absolute top-[169px] left-[1283px] m-0 w-[473px] font-body text-base leading-[1.23] font-medium text-ink">{description}</p> : null}

        <div className={`absolute ${variant === "phases" ? "top-[350px]" : "top-[303px]"} left-[124px] h-[610px] w-[1673px]`}>
          <Image
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute top-0 ${variant === "phases" ? "left-[620px] h-[635px] w-[1053px]" : "left-[487px] h-[574px] w-[1186px]"} max-w-none`}
            height={variant === "phases" ? 635 : 574}
            src={panelSrc}
            unoptimized
            width={1186}
          />

          <div
            aria-label="JCCM standards"
            aria-orientation="vertical"
            className={`absolute top-0 left-0 ${variant === "phases" ? "h-[635px] w-[620px]" : "h-[574px] w-[488px]"} overflow-hidden rounded-l-card border border-[#d8d8d8] bg-white`}
            role="tablist"
          >
            {items.map((item, index) => {
              const selected = index === desktopIndex;
              const tabId = `${baseId}-standard-tab-${item.id}`;

              return (
                <button
                  aria-controls={panelId}
                  aria-selected={selected}
                  className={`group/tab relative grid ${variant === "phases" ? "h-[119px]" : "h-[134px]"} w-full cursor-pointer grid-cols-[22px_1fr] items-center gap-[25px] border-0 border-b border-[#d8d8d8] bg-white py-0 pr-6 pl-[29px] text-left font-[inherit] text-subtle data-[active=true]:text-ink focus-visible:z-[2] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink`}
                  data-active={selected ? "true" : "false"}
                  id={tabId}
                  key={item.id}
                  onClick={() => selectItem(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[11px] bg-brand opacity-0 transition-opacity duration-[250ms] ease-[ease] group-data-[active=true]/tab:opacity-100 motion-reduce:transition-none"
                  />
                  <span className="font-body text-[16.653px] leading-[1.23] font-normal group-data-[active=true]/tab:text-brand">
                    {index + 1}.
                  </span>
                  <span className={`font-headline text-[26px] leading-[30px] font-normal ${variant === "phases" ? "whitespace-normal" : "whitespace-nowrap"}`}>
                    {item.navLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`${baseId}-standard-tab-${activeItem.id}`}
            className={`absolute top-0 ${variant === "phases" ? "left-[620px] h-[635px] w-[1053px]" : "left-[488px] h-[574px] w-[1185px]"} overflow-hidden rounded-r-card`}
            id={panelId}
            role="tabpanel"
          >
            <div className={`relative ${variant === "phases" ? "h-[211px] w-[1053px]" : "h-[134px] w-[1185px]"} overflow-hidden rounded-tr-card`}>
              <Image
                alt={imageAlt}
                className={`${staggerClass} ${variant === "phases" ? "h-[211px] w-[1053px]" : "h-[134px] w-[1185px]"} max-w-none object-cover object-center [animation-delay:0ms]`}
                height={variant === "phases" ? 211 : 134}
                key={`image-${desktopIndex}`}
                priority={desktopIndex === 0}
                sizes="1185px"
                src={imageSrc}
                unoptimized
                width={1185}
              />
            </div>

            <div
              className={`grid ${variant === "phases" ? "h-[424px]" : "h-[440px]"} grid-cols-[440px_1fr] gap-[70px] ${variant === "phases" ? "pt-[44px]" : "pt-[44px]"} pr-[56px] pb-8 pl-[61px]`}
              style={
                {
                  "--ty": direction === "down" ? "16px" : "-16px",
                } as CSSProperties
              }
            >
              <div className="min-w-0" key={`summary-${desktopIndex}`}>
                <div className={`${staggerClass} [animation-delay:0ms]`}>
                  <p className="m-0 font-body text-[14.571px] leading-[1.23] font-normal text-brand">
                    {desktopIndex + 1}.
                  </p>
                  <h3 className="mt-[10px] mb-0 max-w-[410px] font-headline text-[40px] leading-12 font-normal text-ink">
                    {activeItem.title}
                  </h3>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="mt-[14px] h-auto max-w-none"
                    height={2.0816}
                    src="/images/services/jccm-standard-rule.svg"
                    unoptimized
                    width={58.5058}
                  />
                </div>
                <p className={`${staggerClass} mt-[18px] mb-0 max-w-[390px] font-body text-base leading-[24.285px] font-normal tracking-[0.01em] text-ink-strong [animation-delay:55ms]`}>
                  {activeItem.summary}
                </p>
              </div>

              <div
                className={`${staggerClass} min-w-0 [animation-delay:110ms]`}
                key={`features-${desktopIndex}`}
              >
                <FeatureList features={activeItem.features} />
              </div>
            </div>
          </div>

          <div className={`absolute ${variant === "phases" ? "top-[694px]" : "top-[600px]"} left-1/2 flex -translate-x-1/2 items-center gap-2.5`}>
            {items.map((item, index) => {
              const selected = index === desktopIndex;

              return (
                <button
                  aria-current={selected ? "true" : undefined}
                  aria-label={`Show ${item.navLabel}`}
                  className={`h-2 cursor-pointer rounded-[2px] border-0 p-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink motion-reduce:transition-none ${
                    selected ? "w-14 bg-brand" : "w-[18px] bg-[#d9d9d9]"
                  }`}
                  key={item.id}
                  onClick={() => selectItem(index)}
                  type="button"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
