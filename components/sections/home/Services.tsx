"use client";

import Image from "next/image";
import { useId, useRef, useState, type CSSProperties } from "react";

import { ExploreLink } from "@/components/ui/ExploreLink";

import { services } from "./servicesData";
import styles from "./Services.module.css";

function ServiceChevron() {
  return (
    <svg
      aria-hidden="true"
      className="block"
      fill="none"
      height="14"
      viewBox="0 0 8 14"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ServiceFeatures({
  features,
}: Readonly<{
  features: (typeof services)[number]["features"];
}>) {
  return (
    <ul className="mt-5 flex list-none flex-col gap-5 p-0 lg:mt-0 lg:gap-7 lg:pt-1">
      {features.map((feature) => (
        <li
          className="grid grid-cols-[40px_1fr] items-start gap-[14px] lg:gap-[18px]"
          key={feature.title}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="mt-0.5 h-10 w-10"
            height={40}
            src={feature.icon}
            unoptimized
            width={40}
          />
          <div className="min-w-0">
            <p className="m-0 font-headline text-lg leading-[1.25] font-medium tracking-normal text-brand lg:text-xl">
              {feature.title}
            </p>
            <p className="mt-1.5 m-0 font-body text-[15px] leading-[1.35] font-light tracking-normal text-ink lg:text-base lg:leading-[123%]">
              {feature.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const desktopIndex = activeIndex < 0 ? 0 : activeIndex;
  const activeService = services[desktopIndex];
  const panelId = `${baseId}-panel`;

  const selectService = (index: number, focusTab = false) => {
    const previous = activeIndex < 0 ? 0 : activeIndex;
    if (index > previous) {
      setDirection("down");
    } else if (index < previous) {
      setDirection("up");
    }
    setActiveIndex(index);
    if (focusTab) {
      queueMicrotask(() => {
        tabRefs.current[index]?.focus();
      });
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  const staggerClass =
    "motion-safe:animate-[staggerIn_240ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none";


  return (
    <section
      aria-labelledby="home-services-title"
      className={`relative overflow-x-clip bg-surface lg:overflow-clip ${styles.sectionScale}`}
    >
      <div
        className={`relative box-border flex w-full max-w-full flex-col px-5 pt-10 pb-12 md:mx-auto md:max-w-[920px] md:px-6 md:pt-12 md:pb-14 lg:absolute lg:top-0 lg:left-1/2 lg:m-0 lg:block lg:h-[1075px] lg:w-[1920px] lg:max-w-none lg:origin-top lg:p-0 lg:-translate-x-1/2 ${styles.canvasScale}`}
      >
        <header className="mb-7 flex w-full flex-col items-start lg:absolute lg:top-[98px] lg:left-[123px] lg:m-0 lg:h-[89px] lg:w-[1675px] lg:flex-row lg:items-start">
          <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-2.5 lg:shrink-0 lg:flex-nowrap lg:items-start lg:gap-4">
            <h2
              className="m-0 font-headline text-[clamp(36px,9vw,52px)] leading-[1.05] font-normal tracking-normal whitespace-normal text-ink md:text-[48px] lg:text-[72px] lg:leading-none lg:whitespace-nowrap"
              id="home-services-title"
            >
              Services
            </h2>
            <p className="m-0 font-headline text-[clamp(14px,3.5vw,18px)] leading-[1.3] font-medium tracking-normal text-muted uppercase whitespace-nowrap md:text-lg lg:mt-[14px] lg:text-2xl lg:leading-8">
              We Offer
            </p>
          </div>

          <p className="mt-[14px] w-full max-w-[520px] font-body text-[clamp(14px,3.8vw,16px)] leading-[1.4] font-light tracking-normal text-ink md:text-base lg:mt-[14px] lg:ml-16 lg:w-[430px] lg:max-w-none lg:shrink-0 lg:basis-[430px] lg:text-base lg:leading-[123%]">
            Comprehensive construction solutions from initial concept to final
            certificate of occupancy.
          </p>

          <ExploreLink className="mt-[18px] lg:mt-2.5 lg:ml-auto lg:shrink-0" href="/services" />
        </header>

        <div className="flex w-full flex-col overflow-hidden rounded-card bg-white lg:hidden">
          {services.map((service, index) => {
            const open = index === activeIndex;
            const triggerId = `${baseId}-accordion-trigger-${service.id}`;
            const contentId = `${baseId}-accordion-panel-${service.id}`;

            return (
              <div
                className="group/item border-b border-divider last:border-b-0"
                data-open={open ? "true" : "false"}
                key={service.id}
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={open}
                  className="relative box-border grid w-full min-h-[52px] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-2.5 border-0 border-l-[3px] border-l-transparent bg-transparent py-[14px] pr-4 pl-[18px] text-left font-[inherit] text-ink group-data-[open=true]/item:border-l-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink md:min-h-[56px] md:py-4 md:pr-5 md:pl-[22px]"
                  id={triggerId}
                  onClick={() => toggleAccordion(index)}
                  type="button"
                >
                  <span className="font-headline text-base leading-[1.2] font-medium text-brand">
                    {index + 1}.
                  </span>
                  <span className="font-headline text-[clamp(16px,4.2vw,20px)] leading-[1.3] font-normal md:text-[22px]">
                    {service.navLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center text-subtle transition-[transform,color] duration-[250ms] ease-[ease] group-data-[open=true]/item:rotate-90 group-data-[open=true]/item:text-brand motion-reduce:transition-none"
                  >
                    <ServiceChevron />
                  </span>
                </button>

                <div
                  aria-labelledby={triggerId}
                  className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-[ease] group-data-[open=true]/item:grid-rows-[1fr] motion-reduce:transition-none"
                  id={contentId}
                  role="region"
                >
                  <div className="min-h-0 overflow-hidden px-4 opacity-0 transition-[opacity,padding] duration-[250ms] ease-[ease] group-data-[open=true]/item:pt-1 group-data-[open=true]/item:pb-6 group-data-[open=true]/item:opacity-100 md:px-5 md:group-data-[open=true]/item:pt-2 md:group-data-[open=true]/item:pb-7 motion-reduce:transition-none">
                    <div className="relative aspect-[1224/300] w-full overflow-hidden rounded-card">
                      <Image
                        alt={service.imageAlt}
                        className="h-full w-full object-cover object-center"
                        height={300}
                        sizes="(max-width: 1023px) 100vw, 1224px"
                        src={service.image}
                        width={1224}
                      />
                    </div>

                    <h3 className="mt-[18px] mb-0 font-headline text-[clamp(22px,5.5vw,28px)] leading-[1.2] font-normal text-ink md:text-[28px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 mb-0 font-body text-[15px] leading-[1.4] font-light text-ink">
                      {service.summary}
                    </p>

                    <ServiceFeatures features={service.features} />

                    <ExploreLink
                      className="mt-[22px] !w-full max-w-[280px]"
                      href={service.href}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:absolute lg:top-[232px] lg:left-[123px] lg:grid lg:h-[724px] lg:w-[1675px] lg:grid-cols-[450px_1225px] lg:overflow-hidden lg:rounded-card lg:bg-white">
          <div
            aria-label="Service categories"
            aria-orientation="vertical"
            className="flex h-full flex-col border-r border-divider/45"
            role="tablist"
          >
            {services.map((service, index) => {
              const selected = index === desktopIndex;
              const tabId = `${baseId}-tab-${service.id}`;

              return (
                <button
                  aria-controls={panelId}
                  aria-selected={selected}
                  className="group/nav relative grid h-[144.8px] w-full cursor-pointer grid-cols-[28px_1fr_24px] items-center gap-2 border-0 border-b border-divider/45 bg-transparent py-0 pr-7 pl-8 text-left font-[inherit] text-subtle last:border-b-0 data-[active=true]:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink"
                  data-active={selected ? "true" : "false"}
                  id={tabId}
                  key={service.id}
                  onClick={() => selectService(index)}
                  onMouseEnter={() => selectService(index)}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                  onKeyDown={(event) => {
                    if (
                      event.key === "ArrowDown" ||
                      event.key === "ArrowRight"
                    ) {
                      event.preventDefault();
                      selectService((index + 1) % services.length, true);
                    } else if (
                      event.key === "ArrowUp" ||
                      event.key === "ArrowLeft"
                    ) {
                      event.preventDefault();
                      selectService(
                        (index - 1 + services.length) % services.length,
                        true,
                      );
                    } else if (event.key === "Home") {
                      event.preventDefault();
                      selectService(0, true);
                    } else if (event.key === "End") {
                      event.preventDefault();
                      selectService(services.length - 1, true);
                    }
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[5px] bg-brand opacity-0 group-data-[active=true]/nav:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="font-headline text-base leading-[1.2] font-normal"
                  >
                    {index + 1}.
                  </span>
                  <span className="font-headline text-[26px] leading-[1.3] font-light group-data-[active=true]/nav:font-normal">
                    {service.navLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-end text-subtle group-data-[active=true]/nav:text-brand"
                  >
                    <ServiceChevron />
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`${baseId}-tab-${activeService.id}`}
            className="flex h-full min-w-0 flex-col"
            id={panelId}
            role="tabpanel"
          >
            <div className="relative h-[300px] w-[1225px] overflow-hidden rounded-t-card">
              <Image
                alt={activeService.imageAlt}
                className="h-[300px] w-[1225px] max-w-none object-cover object-center"
                height={300}
                key={activeService.id}
                sizes="1225px"
                src={activeService.image}
                width={1225}
              />
            </div>

            <div
              className="grid min-h-[380px] flex-auto grid-cols-[439px_1fr] gap-12 pt-9 pr-12 pb-8 pl-10"
              style={
                {
                  "--ty": direction === "down" ? "16px" : "-16px",
                } as CSSProperties
              }
            >
              <div className="contents" key={desktopIndex}>
                <div className="flex min-w-0 flex-col items-start">
                  <div
                    className={`${staggerClass} [animation-delay:0ms]`}
                  >
                    <h3 className="m-0 font-headline text-[40px] leading-[113.426%] font-normal tracking-normal text-ink">
                      <span className="text-subtle">{desktopIndex + 1}.</span>{" "}
                      {activeService.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-[14px] block h-0.5 w-[72px] bg-brand"
                    />
                  </div>

                  <div
                    className={`${staggerClass} [animation-delay:55ms]`}
                  >
                    <p className="mt-[18px] mb-7 max-w-[390px] font-body text-base leading-[123%] font-light tracking-normal text-ink">
                      {activeService.summary}
                    </p>
                    <ExploreLink href={activeService.href} />
                  </div>
                </div>

                <div className={`${staggerClass} [animation-delay:110ms]`}>
                  <ServiceFeatures features={activeService.features} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:absolute lg:top-[986px] lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:items-center lg:gap-2.5">
          {services.map((service, index) => {
            const isActive = index === desktopIndex;

            return (
              <button
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to service ${index + 1}`}
                className={`h-2 cursor-pointer rounded-[2px] border-0 p-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-90 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink ${
                  isActive ? "w-[56px] bg-brand" : "w-[18px] bg-[#d9d9d9]"
                }`}
                key={service.id}
                onClick={() => selectService(index)}
                onMouseEnter={() => selectService(index)}
                type="button"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
