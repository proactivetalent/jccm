import Image from "next/image";

import styles from "./TrustedExpertise.module.css";

export function TrustedExpertise() {
  return (
    <section
      aria-labelledby="trusted-expertise-title"
      className={`relative z-[1] overflow-x-clip bg-surface lg:h-[419.2px] lg:overflow-clip ${styles.sectionScale}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[1.672px] w-full bg-divider ${styles.bottomDividerScale}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 h-full w-full bg-[linear-gradient(83.56deg,var(--jccm-color-brand-deep)_-22.83%,var(--jccm-color-brand)_88.35%)] lg:inset-auto lg:top-6 lg:left-0 lg:h-[371.2px] lg:w-full ${styles.backgroundScale}`}
      />

      <div
        className={`relative z-[1] w-full overflow-hidden lg:absolute lg:top-[-60px] lg:left-1/2 lg:h-[455.2px] lg:w-[1536px] lg:-translate-x-1/2 ${styles.artworkViewportScale}`}
      >
        <div
          className={`relative box-border flex w-full max-w-full flex-col items-center px-5 pt-10 pb-0 md:mx-auto md:max-w-[920px] md:grid md:grid-cols-[1fr_minmax(280px,400px)] md:items-end md:gap-x-8 md:gap-y-7 md:px-6 md:pt-12 md:pb-0 lg:mx-0 lg:block lg:h-[657.89px] lg:max-w-none lg:origin-top-left lg:scale-[0.8] lg:p-0 lg:w-[1920px] ${styles.canvasScale}`}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-[-78px] z-[1] hidden h-[657.89px] w-[1951.814px] max-w-none lg:block"
            height={658}
            src="/images/home/trusted-circles.svg"
            width={1952}
          />

          <div className="relative z-[2] mb-8 w-full max-w-[560px] text-center text-surface md:mb-0 md:max-w-none md:self-center md:pb-12 md:text-left lg:absolute lg:top-[217px] lg:left-[352px] lg:mb-0 lg:w-[735px] lg:max-w-none lg:p-0 lg:text-left">
            <h2
              className="m-0 h-auto w-auto font-headline text-[clamp(32px,8.5vw,48px)] font-medium leading-[1.05] tracking-normal md:text-[clamp(40px,5.5vw,52px)] lg:h-[66px] lg:w-[595px] lg:text-[72px] lg:leading-[92%]"
              id="trusted-expertise-title"
            >
              Trusted Expertise
            </h2>
            <p className="mt-3 h-auto w-auto font-headline text-[clamp(14px,3.8vw,18px)] font-medium leading-[1.2] tracking-normal text-white uppercase whitespace-normal md:text-lg md:whitespace-nowrap lg:mt-[13px] lg:h-6 lg:w-[382px] lg:text-2xl lg:leading-[101.751%]">
              In the Heart of New York City
            </p>
            <p className="mt-4 h-auto w-auto text-center font-body text-[clamp(14px,3.8vw,16px)] font-light leading-normal tracking-normal text-surface md:text-base md:leading-6 lg:mt-[18px] lg:h-[168px] lg:w-[735px] lg:text-left lg:text-base lg:leading-6">
              JC Construction Management has been a cornerstone of New York
              City&apos;s construction landscape. We put your vision and needs
              first.
              <br />
              Our team of dedicated professionals understands that the quality
              of your building directly impacts your daily life and investment.
              We make sure that our extensive knowledge and hands-on approach
              navigate the complexities of NYC construction.
            </p>
          </div>

          <div className="relative z-[2] mt-2 aspect-square w-[min(88vw,360px)] md:mt-0 md:w-full md:max-w-[400px] md:justify-self-end md:self-end lg:absolute lg:top-[154px] lg:left-[1256px] lg:mt-0 lg:aspect-auto lg:h-[415px] lg:w-[440px] lg:overflow-hidden lg:max-w-none">
            <Image
              alt="A historic New York City building"
              className="relative top-auto left-auto block h-auto w-full max-w-none align-bottom drop-shadow-[8px_2px_14px_rgb(0_0_0_/_25%)] lg:absolute lg:top-0 lg:left-[12.32px] lg:h-[415px] lg:w-[415.36px] lg:max-w-none lg:object-cover lg:object-bottom lg:drop-shadow-[10px_0_14px_rgb(0_0_0_/_22%)]"
              height={2500}
              sizes="(max-width: 767px) min(88vw, 360px), (max-width: 1023px) min(50vw, 400px), 415px"
              src="/images/home/trusted-building.png"
              width={2500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
