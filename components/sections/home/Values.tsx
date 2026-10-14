"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";

import { values, valuesIntro } from "./valuesData";
import styles from "./Values.module.css";

/** Desktop content block — 1299px wide, centered on the 1920 canvas. */
const valuesContentWidth = 1299;
const valuesLeftColumnWidth = 772;

export function Values() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeValue = values[activeIndex];
  const panelId = `${baseId}-panel`;

  const isDesktopInteraction = useCallback(
    () => window.matchMedia("(min-width: 1024px)").matches,
    [],
  );

  const selectValue = useCallback((index: number, focusTab = false) => {
    setActiveIndex(index);
    if (focusTab) {
      queueMicrotask(() => {
        tabRefs.current[index]?.focus();
      });
    }
  }, []);

  const handleValueHover = useCallback(
    (index: number) => {
      if (isDesktopInteraction()) {
        setActiveIndex(index);
      }
    },
    [isDesktopInteraction],
  );

  const handleNavLeave = useCallback(() => {
    if (isDesktopInteraction()) {
      setActiveIndex(0);
    }
  }, [isDesktopInteraction]);

  const handleValueClick = useCallback(
    (index: number) => {
      if (!isDesktopInteraction()) {
        setActiveIndex(index);
      }
    },
    [isDesktopInteraction],
  );

  return (
    <section
      aria-labelledby="home-values-title"
      className={`relative overflow-x-clip bg-surface lg:overflow-clip ${styles.sectionScale}`}
    >
      <div
        className={`relative z-[1] box-border flex w-full max-w-full flex-col px-5 pt-12 pb-14 md:mx-auto md:max-w-[920px] md:px-6 md:pt-14 md:pb-16 lg:absolute lg:top-0 lg:m-0 lg:block lg:w-[1920px] lg:max-w-none lg:origin-top lg:p-0 ${styles.canvasScale}`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 hidden h-px bg-divider lg:block ${styles.valuesLineTop}`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 hidden h-px bg-divider lg:block ${styles.valuesLineBottom}`}
        />

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute hidden lg:block ${styles.valuesRails}`}
        >
          {[0, valuesLeftColumnWidth, valuesContentWidth].map((x) => (
            <span
              className="absolute top-0 bottom-0 w-px bg-divider"
              key={x}
              style={{ left: x }}
            />
          ))}
        </div>

        <div
          className={`relative z-[2] w-full border-y border-divider py-8 md:py-10 lg:border-y-0 lg:py-0 ${styles.valuesFrame} ${styles.valuesFrameMargin}`}
        >
          <div className={`relative w-full ${styles.valuesGrid}`}>
          <header
            className={`flex flex-row flex-wrap items-end gap-x-4 gap-y-2 border-b border-divider pb-6 md:gap-x-5 md:pb-7 lg:box-border lg:h-[102px] lg:gap-x-5 lg:border-b-0 lg:px-8 lg:pb-0 ${styles.valuesHeader}`}
          >
            <h2
              className="m-0 font-headline text-[clamp(36px,8vw,52px)] leading-[1.05] font-normal tracking-normal text-ink md:text-[48px] lg:text-[72px] lg:leading-none"
              id="home-values-title"
            >
              Our Values
            </h2>
            <p className="m-0 shrink-0 font-metric text-[clamp(12px,3vw,14px)] leading-[1.3] font-medium tracking-normal text-muted uppercase md:text-base lg:mb-1.5 lg:text-2xl lg:leading-[31.792px]">
              <span className="block whitespace-nowrap">Clarity, Quality,</span>
              <span className="block whitespace-nowrap">Certainty</span>
            </p>
          </header>

          <div
            aria-label="Our values"
            aria-orientation="vertical"
            className={`mt-8 flex flex-col lg:mt-0 ${styles.valuesNav}`}
            onMouseLeave={handleNavLeave}
            role="tablist"
          >
            {values.map((value, index) => {
              const selected = index === activeIndex;
              const tabId = `${baseId}-tab-${value.id}`;
              const isLast = index === values.length - 1;

              return (
                <button
                  aria-controls={panelId}
                  aria-selected={selected}
                  className={`group/value relative grid w-full flex-1 cursor-pointer grid-cols-[56px_1fr] items-center gap-4 border-0 bg-transparent px-0 py-6 text-left font-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink md:gap-5 md:py-7 lg:box-border lg:gap-6 lg:px-8 lg:py-0 ${isLast ? "" : "border-b border-divider"} ${styles.valueTab}`}
                  data-active={selected ? "true" : "false"}
                  id={tabId}
                  key={value.id}
                  onClick={() => handleValueClick(index)}
                  onMouseEnter={() => handleValueHover(index)}
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
                      selectValue((index + 1) % values.length, true);
                    } else if (
                      event.key === "ArrowUp" ||
                      event.key === "ArrowLeft"
                    ) {
                      event.preventDefault();
                      selectValue(
                        (index - 1 + values.length) % values.length,
                        true,
                      );
                    } else if (event.key === "Home") {
                      event.preventDefault();
                      selectValue(0, true);
                    } else if (event.key === "End") {
                      event.preventDefault();
                      selectValue(values.length - 1, true);
                    }
                  }}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center transition-opacity duration-300 ${styles.valueIcon}`}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-14"
                      height={56}
                      src={value.icon}
                      unoptimized
                      width={56}
                    />
                  </span>
                  <span className="font-headline text-[clamp(18px,4.5vw,22px)] leading-[1.25] font-normal tracking-normal text-muted transition-colors duration-300 group-data-[active=true]/value:text-ink lg:text-[28px] lg:leading-[1.2]">
                    {value.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`${baseId}-tab-${activeValue.id}`}
            className={`flex min-h-[240px] flex-col border-t border-divider px-0 py-8 md:py-10 lg:box-border lg:h-full lg:min-h-0 lg:border-t-0 lg:px-12 lg:py-10 ${styles.valuesDetail}`}
            id={panelId}
            role="tabpanel"
          >
            <p
              className={`m-0 max-w-none font-body text-[15px] leading-[1.4] font-light tracking-normal text-muted md:text-base md:leading-[123%] lg:max-w-[560px] ${styles.valuesIntro}`}
            >
              {valuesIntro}
            </p>

            <div className={`mt-8 md:mt-10 lg:mt-0 ${styles.valuesDescriptionGrid}`}>
              {values.map((value, index) => {
                const selected = index === activeIndex;

                return (
                  <div
                    className={`flex items-start lg:min-h-0 ${selected ? "" : "hidden lg:flex"}`}
                    key={value.id}
                  >
                    {selected ? (
                      <p
                        className={`m-0 max-w-none font-body text-[15px] leading-[1.4] font-light tracking-normal text-ink motion-safe:animate-[staggerIn_240ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none md:text-base md:leading-[123%] lg:max-w-[640px] ${styles.valueDescription}`}
                        key={value.id}
                      >
                        {value.description}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
