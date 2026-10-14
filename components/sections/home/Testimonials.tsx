"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useId, useState, useSyncExternalStore } from "react";

import { testimonials } from "./testimonialsData";
import styles from "./Testimonials.module.css";

const DESKTOP_VISIBLE_COUNT = 3;
const TESTIMONIAL_CARD_WIDTH = 384;
const TESTIMONIAL_CARD_GAP = 32;
const TESTIMONIAL_SLIDE_STEP = TESTIMONIAL_CARD_WIDTH + TESTIMONIAL_CARD_GAP;
const INVERTED_COMMAS_ICON = "/images/home/testimonial/inverted-commas.svg";
const CAROUSEL_ARROW_ICON = "/images/home/testimonial/carousel-arrow.svg";

function InvertedCommasIcon({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={49}
      src={INVERTED_COMMAS_ICON}
      unoptimized
      width={60}
    />
  );
}

function subscribeToDesktopMediaQuery(onStoreChange: () => void) {
  const media = window.matchMedia("(min-width: 1024px)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getDesktopMediaQuerySnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getDesktopMediaQueryServerSnapshot() {
  return false;
}

function useIsDesktopViewport() {
  return useSyncExternalStore(
    subscribeToDesktopMediaQuery,
    getDesktopMediaQuerySnapshot,
    getDesktopMediaQueryServerSnapshot,
  );
}

function CarouselArrow({
  direction,
  onClick,
}: Readonly<{
  direction: "prev" | "next";
  onClick: () => void;
}>) {
  return (
    <button
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={`${styles.carouselArrow} ${
        direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
      }`}
      onClick={onClick}
      type="button"
    >
      <Image
        alt=""
        aria-hidden="true"
        className={`${styles.carouselArrowIcon} ${
          direction === "prev" ? styles.carouselArrowIconPrev : ""
        }`}
        height={54}
        src={CAROUSEL_ARROW_ICON}
        unoptimized
        width={54}
      />
    </button>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktopViewport();
  const visibleCount = isDesktop ? DESKTOP_VISIBLE_COUNT : 1;
  const baseId = useId();

  const pageCount = Math.max(1, testimonials.length - visibleCount + 1);
  const activePage = Math.min(activeIndex, pageCount - 1);
  const slideOffset = activePage * TESTIMONIAL_SLIDE_STEP;

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => {
      const page = Math.min(current, pageCount - 1);
      return (page - 1 + pageCount) % pageCount;
    });
  }, [pageCount]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => {
      const page = Math.min(current, pageCount - 1);
      return (page + 1) % pageCount;
    });
  }, [pageCount]);

  const goToPage = useCallback((page: number) => {
    setActiveIndex(page);
  }, []);

  return (
    <section
      aria-labelledby="home-testimonials-title"
      className={`relative overflow-x-clip bg-surface lg:overflow-clip ${styles.sectionScale}`}
    >
      <div
        className={`relative z-[1] box-border flex w-full max-w-full flex-col px-5 py-12 md:mx-auto md:max-w-[920px] md:px-6 md:py-14 lg:absolute lg:top-0 lg:m-0 lg:block lg:w-[1920px] lg:max-w-none lg:origin-top lg:p-0 ${styles.canvasScale}`}
      >
        <div className={styles.content}>
          <header
            className={`mb-12 flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mb-14 md:gap-x-5 lg:mb-0 ${styles.header}`}
          >
            <h2
              className="m-0 font-headline text-[clamp(36px,8vw,52px)] leading-[1.05] font-normal tracking-normal text-ink md:text-[48px] lg:text-[72px] lg:leading-none"
              id="home-testimonials-title"
            >
              Testimonials
            </h2>
            <div className={`flex items-center gap-4 ${styles.headerAside}`}>
              <p
                className={`${styles.headerSubtitle} m-0 font-headline text-[clamp(20px,5vw,32px)] leading-[1.2] tracking-normal text-ink md:text-[36px] lg:text-[44px] lg:leading-[1.15]`}
              >
                <span className="block whitespace-nowrap">What our clients</span>
                <span className="block whitespace-nowrap">say about us</span>
              </p>
              <InvertedCommasIcon className="hidden h-[40px] w-auto shrink-0 md:block lg:h-[49px] lg:w-[60px]" />
            </div>
          </header>

          <div className={`flex items-start gap-4 lg:gap-6 ${styles.carousel}`}>
            <CarouselArrow direction="prev" onClick={goToPrevious} />

            <div className={styles.carouselViewport}>
              <div
                className={styles.carouselTrack}
                style={{
                  transform:
                    visibleCount === 1
                      ? `translateX(calc(-${activePage} * (100% + var(--testimonials-card-gap))))`
                      : `translateX(-${slideOffset}px)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <article
                    className={`${styles.carouselSlide}`}
                    key={testimonial.id}
                  >
                    <Link
                      className={`${styles.locationLink} group/location inline-flex items-center gap-2 font-headline text-[16px] leading-[1.2] font-light text-ink no-underline transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`}
                      href={testimonial.href}
                    >
                      <span>{testimonial.location}</span>
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/location:translate-x-0.5 group-hover/location:-translate-y-0.5"
                        height={14}
                        src="/icons/home/testimonials/external-arrow.svg"
                        unoptimized
                        width={14}
                      />
                    </Link>

                    <div
                      className={`px-6 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8 ${styles.testimonialCard}`}
                    >
                      <InvertedCommasIcon
                        className={`${styles.cardQuoteIcon} mb-4 h-[40px] w-auto md:mb-5 lg:mb-6 lg:h-[49px] lg:w-[60px]`}
                      />
                      <p className="m-0 font-body text-[clamp(16px,4vw,20px)] leading-[1.4] font-light tracking-normal text-ink lg:text-[20px]">
                        {testimonial.quote}
                      </p>
                    </div>

                    <p className="m-0 mt-4 font-headline text-[clamp(18px,4vw,24px)] leading-[1.3] font-normal tracking-normal text-ink md:mt-5 lg:text-[24px]">
                      {testimonial.author}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <CarouselArrow direction="next" onClick={goToNext} />
          </div>

          <div
            aria-label="Testimonial pagination"
            className={`mt-10 lg:mt-0 ${styles.pagination}`}
          >
            {Array.from({ length: pageCount }, (_, index) => {
              const selected = index === activePage;

              return (
                <button
                  aria-current={selected ? "true" : undefined}
                  aria-label={`Go to testimonial page ${index + 1}`}
                  className={`${styles.paginationButton} ${
                    selected ? styles.paginationButtonActive : ""
                  }`}
                  key={`${baseId}-dot-${index}`}
                  onClick={() => goToPage(index)}
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
