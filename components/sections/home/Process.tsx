"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, type CSSProperties } from "react";

import { processSteps } from "./processData";
import styles from "./Process.module.css";

/** Desktop card left offsets from the 1920 canvas (Figma). */
const cardLeft = [123, 556, 984, 1414] as const;

function ExploreLink() {
  return (
    <Link
      className="group relative box-border block h-[54px] w-[167px] shrink-0 overflow-hidden border-[3px] border-surface bg-transparent text-surface no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
      href="/process"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] h-[54px] w-[54px] bg-surface transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] z-[1] box-border flex h-[54px] w-[54px] items-center justify-center"
      >
        <Image
          alt=""
          className="h-[18px] w-[18px] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
          height={18}
          src="/icons/home/explore-arrow-brand.svg"
          unoptimized
          width={18}
        />
      </span>
      <span className="absolute top-[14px] left-[72px] z-[1] font-body text-[19.646px] leading-[19.646px] font-normal whitespace-nowrap text-surface transition-colors duration-[320ms] ease-[ease] group-hover:text-brand group-focus-visible:text-brand motion-reduce:transition-none">
        Explore
      </span>
    </Link>
  );
}

export function Process() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardActivate = useCallback((id: string) => {
    if (!window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }

    setActiveCardId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      aria-labelledby="home-process-title"
      className={`relative overflow-x-clip lg:overflow-clip ${styles.sectionScale}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(75.0807deg,var(--jccm-color-brand-deep)_22.829%,var(--jccm-color-brand)_88.348%)]"
      />

      <div
        className={`relative z-[1] box-border flex w-full max-w-full flex-col px-5 pt-12 pb-14 md:mx-auto md:max-w-[920px] md:px-6 md:pt-14 md:pb-16 lg:absolute lg:top-0 lg:left-1/2 lg:m-0 lg:block lg:h-[814px] lg:w-[1920px] lg:max-w-none lg:origin-top lg:p-0 lg:-translate-x-1/2 ${styles.canvasScale}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-[120px] hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_18%)_0%,transparent_68%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -right-[140px] hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_16%)_0%,transparent_70%)] lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-full lg:block"
        >
          {[99, 531, 961, 1392, 1823].map((x) => (
            <span
              className="absolute top-0 bottom-0 w-px bg-white/20"
              key={x}
              style={{ left: x }}
            />
          ))}
        </div>

        <header className="relative z-[2] mb-8 flex w-full flex-col items-start gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-6 lg:absolute lg:top-[107px] lg:left-[123px] lg:mb-0 lg:w-[1674px] lg:flex-row lg:items-end lg:justify-between lg:gap-0">
          <div className="flex max-w-full flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-baseline md:gap-x-4 md:gap-y-2 lg:items-end lg:gap-x-5">
            <h2
              className="m-0 font-headline text-[clamp(36px,8vw,52px)] leading-[1.05] font-normal tracking-normal text-surface md:text-[48px] lg:text-[72px] lg:leading-none"
              id="home-process-title"
            >
              Our Process
            </h2>
            <p className="m-0 font-metric text-[clamp(13px,3.2vw,16px)] leading-[1.3] font-medium tracking-normal text-divider uppercase md:text-lg lg:mb-1.5 lg:text-2xl lg:leading-[31.792px]">
              Foundation of a Successful Idea
            </p>
          </div>

          <ExploreLink />
        </header>

        <ul className="relative z-[2] m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-5 lg:contents">
          {processSteps.map((step, index) => {
            const isActive = activeCardId === step.id;

            return (
              <li
                className={`${styles.processCard} group relative box-border flex h-[320px] cursor-pointer flex-col overflow-hidden rounded-card px-6 pt-9 pb-7 md:h-[360px] md:px-7 md:pt-10 md:pb-8 lg:absolute lg:top-[307px] lg:h-[458px] lg:w-[384px] lg:cursor-default lg:px-[26px] lg:pt-12 lg:pb-10`}
                data-active={isActive ? "true" : "false"}
                key={step.id}
                onClick={() => handleCardActivate(step.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardActivate(step.id);
                  }
                }}
                style={
                  {
                    "--card-left": `${cardLeft[index]}px`,
                  } as CSSProperties
                }
                tabIndex={0}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-card"
                >
                  <span className="absolute inset-0 bg-surface" />
                  <Image
                    alt=""
                    className={`object-cover ${styles.cardHoverImage}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 384px"
                    src={step.hoverImage}
                  />
                  <span className={`absolute inset-0 ${styles.cardHoverOverlay}`} />
                </div>

                <Image
                  alt=""
                  aria-hidden="true"
                  className={`relative z-[1] h-[52px] w-[52px] shrink-0 md:h-[56px] md:w-[56px] lg:h-[63px] lg:w-[63px] ${styles.cardIcon}`}
                  height={63}
                  src={step.icon}
                  unoptimized
                  width={63}
                />

                <div className={`relative z-[1] mt-auto w-full min-w-0 ${styles.cardCopy}`}>
                  <div>
                    <span
                      className={`font-headline text-xl leading-none font-semibold text-brand md:text-2xl ${styles.cardNumber}`}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`mt-1 m-0 font-headline text-[clamp(22px,5.5vw,28px)] leading-[1.1] font-medium tracking-normal text-brand md:text-[32px] lg:text-[44px] lg:leading-[99.6%] ${styles.cardTitle}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div className={styles.cardDescriptionWrap}>
                    <p
                      className={`m-0 w-full max-w-none font-body text-[15px] leading-[1.4] font-light tracking-normal text-ink md:text-base md:leading-[123%] lg:max-w-[332px] lg:text-base lg:leading-[123%] ${styles.cardDescriptionDefault}`}
                    >
                      {step.description}
                    </p>
                    <p
                      className={`m-0 w-full max-w-none font-body text-[15px] leading-[1.4] font-light tracking-normal text-ink md:text-base md:leading-[123%] lg:max-w-[332px] lg:text-base lg:leading-[123%] ${styles.cardDescriptionHover}`}
                    >
                      {step.hoverDescription}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
