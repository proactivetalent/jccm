"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./ReadyToBuild.module.css";

const CTA_BACKGROUND = "/images/home/cta-background-v2.png";
const CTA_ARROW = "/icons/home/explore-arrow-brand.svg";
const COPY_REVEAL_DELAY = 650;

type ConsultationLinkProps = Readonly<{
  onFocusChange: (focused: boolean) => void;
  onHoverChange: (hovered: boolean) => void;
}>;

function ConsultationLink({
  onFocusChange,
  onHoverChange,
}: ConsultationLinkProps) {
  return (
    <Link
      className={`${styles.consultationLink} group relative box-border flex h-14 w-full max-w-[364px] items-center overflow-hidden border-[3px] border-surface bg-transparent pl-[68px] font-body text-[clamp(16px,4.2vw,19.646px)] leading-[1.15] font-normal text-surface no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white lg:absolute lg:top-[234px] lg:left-[1385px] lg:block lg:w-[364px] lg:max-w-none lg:p-0 lg:text-[19.646px] lg:leading-[19.646px]`}
      href="/contact"
      onBlur={() => onFocusChange(false)}
      onFocus={(event) =>
        onFocusChange(event.currentTarget.matches(":focus-visible"))
      }
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] h-14 w-14 bg-surface transition-[width] duration-[1350ms] ease-[cubic-bezier(0.22,0.76,0.23,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] z-[1] box-border flex h-14 w-14 items-center justify-center"
      >
        <Image
          alt=""
          className="h-[22px] w-[22px] transition-transform duration-[1350ms] ease-[cubic-bezier(0.22,0.76,0.23,1)] group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
          height={22}
          src={CTA_ARROW}
          unoptimized
          width={22}
        />
      </span>
      <span className="relative z-[1] whitespace-nowrap transition-colors duration-[1350ms] ease-[cubic-bezier(0.22,0.76,0.23,1)] group-hover:text-brand group-focus-visible:text-brand motion-reduce:transition-none lg:absolute lg:top-[17px] lg:left-[67px]">
        Schedule a Free Consultation
      </span>
    </Link>
  );
}

export function ReadyToBuild() {
  const [isCtaActive, setIsCtaActive] = useState(false);
  const [isCopyReady, setIsCopyReady] = useState(false);
  const activeRef = useRef(false);
  const focusVisibleRef = useRef(false);
  const hoveredRef = useRef(false);
  const readyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearReadyTimer = () => {
    if (readyTimerRef.current !== null) {
      clearTimeout(readyTimerRef.current);
      readyTimerRef.current = null;
    }
  };

  const syncInteractionState = () => {
    const nextActive = hoveredRef.current || focusVisibleRef.current;

    if (nextActive === activeRef.current) {
      return;
    }

    activeRef.current = nextActive;
    setIsCtaActive(nextActive);
    clearReadyTimer();

    if (!nextActive) {
      setIsCopyReady(false);
      return;
    }

    setIsCopyReady(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsCopyReady(true);
      return;
    }

    readyTimerRef.current = setTimeout(() => {
      setIsCopyReady(true);
      readyTimerRef.current = null;
    }, COPY_REVEAL_DELAY);
  };

  const handleHoverChange = (hovered: boolean) => {
    hoveredRef.current = hovered;
    syncInteractionState();
  };

  const handleFocusChange = (focused: boolean) => {
    focusVisibleRef.current = focused;
    syncInteractionState();
  };

  useEffect(
    () => () => {
      clearReadyTimer();
    },
    [],
  );

  return (
    <section
      aria-labelledby="home-ready-to-build-title"
      className={`relative overflow-hidden bg-brand ${styles.sectionScale}`}
      data-cta-active={isCtaActive ? "true" : "false"}
      data-copy-ready={isCopyReady ? "true" : "false"}
    >
      <Image
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center ${styles.backgroundImage}`}
        fill
        sizes="100vw"
        src={CTA_BACKGROUND}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${styles.backgroundGradient}`}
      />

      <div
        className={`relative z-[1] box-border flex min-h-[500px] w-full flex-col justify-center gap-6 px-5 py-16 md:min-h-[520px] md:px-10 lg:absolute lg:top-0 lg:left-1/2 lg:block lg:h-[577px] lg:min-h-0 lg:w-[1920px] lg:origin-top lg:p-0 ${styles.canvasScale}`}
      >
        <div className="relative z-[1] flex w-full max-w-[760px] flex-col items-start gap-6 lg:contents">
          <div className="relative grid w-full max-w-[743px] lg:absolute lg:top-[146px] lg:left-[160px] lg:w-[743px]">
            <h2
              aria-hidden={isCopyReady}
              className={`col-start-1 row-start-1 m-0 font-headline text-[42px] leading-none font-medium tracking-normal text-surface md:text-[60px] lg:text-[72px] ${styles.copyLayer} ${styles.defaultHeading}`}
              id={isCopyReady ? undefined : "home-ready-to-build-title"}
            >
              Ready to build with confidence?
            </h2>

            <h2
              aria-hidden={!isCopyReady}
              className={`col-start-1 row-start-1 m-0 font-headline text-[56px] leading-[0.9] font-medium tracking-normal text-surface md:text-[84px] lg:text-[112px] ${styles.copyLayer} ${styles.readyHeading}`}
              id={isCopyReady ? "home-ready-to-build-title" : undefined}
            >
              <span className={styles.readyWord}>Let’s</span>{" "}
              <span className={styles.readyWord}>build!</span>
            </h2>

            <span
              aria-hidden="true"
              className={styles.cinematicRule}
            />
          </div>

          <div className="grid w-full max-w-[653px] lg:absolute lg:top-[320px] lg:left-[160px] lg:w-[653px]">
            <p
              aria-hidden={isCopyReady}
              className={`col-start-1 row-start-1 m-0 font-body text-[18px] leading-[1.35] font-normal tracking-normal text-surface md:text-[22px] lg:text-[24px] lg:leading-normal ${styles.copyLayer} ${styles.defaultDescription}`}
            >
              Let&apos;s discuss your project goals and how our NYC expertise can
              bring them to life, on time and on budget.
            </p>

            <p
              aria-hidden={!isCopyReady}
              className={`col-start-1 row-start-1 m-0 font-body text-[18px] leading-[1.35] font-normal tracking-normal text-surface md:text-[22px] lg:text-[24px] lg:leading-normal ${styles.copyLayer} ${styles.readyDescription}`}
            >
              Share your vision with us, and we&apos;ll turn it into a clear plan
              for building with confidence.
            </p>
          </div>

          <div className="mt-2 w-full max-w-[364px] lg:contents">
            <ConsultationLink
              onFocusChange={handleFocusChange}
              onHoverChange={handleHoverChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
