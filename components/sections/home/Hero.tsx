import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

type HeroCtaProps = Readonly<{
  href: string;
  label: string;
  variant: "projects" | "consultation";
}>;

function HeroCta({ href, label, variant }: HeroCtaProps) {
  const widthClass =
    variant === "projects" ? "lg:w-[277px]" : "lg:w-[366px]";
  const labelLeftClass =
    variant === "projects" ? "lg:left-[66px]" : "lg:left-[68px]";

  return (
    <Link
      className={`group relative box-border flex h-auto min-h-[52px] w-full items-center justify-start overflow-hidden border border-brand bg-brand px-4 py-3.5 pl-[62px] font-body text-[clamp(16px,4vw,19.646px)] font-normal leading-[1.2] text-surface no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink md:min-h-14 md:pl-[66px] lg:block lg:h-14 lg:min-h-0 lg:p-0 lg:text-[19.646px] lg:leading-[19.646px] ${widthClass}`}
      href={href}
    >
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-2 h-10 w-10 -translate-y-1/2 bg-[url('/icons/home/cta-arrow.png')] bg-contain bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:rotate-45 md:left-1.5 md:h-11 md:w-11 lg:top-1.5 lg:left-1.5 lg:h-[44.204px] lg:w-[44.204px] lg:translate-y-0"
      />
      <span
        className={`static whitespace-normal lg:absolute lg:top-[17px] lg:whitespace-nowrap ${labelLeftClass}`}
      >
        {label}
      </span>
    </Link>
  );
}

function HeroBadge() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-9 z-[2] h-[clamp(88px,22vw,120px)] w-[clamp(88px,22vw,120px)] -translate-x-1/2 -translate-y-1/2 md:left-11 md:h-[112px] md:w-[112px] lg:left-0 lg:h-[139px] lg:w-[139px]"
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible lg:h-[139px] lg:w-[139px]"
        fill="none"
        viewBox="0 0 139 139"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="69.5" cy="69.5" className="fill-surface" r="69.5" />
        <g className={styles.badgeRingSpin}>
          <defs>
            <path
              d="M69.5 9a60.5 60.5 0 1 1 0 121a60.5 60.5 0 1 1 0-121"
              id="hero-badge-text-path"
            />
          </defs>
          <text className="fill-ink font-body text-[10px] font-medium tracking-[0.06em] normal-case">
            <textPath
              href="#hero-badge-text-path"
              lengthAdjust="spacing"
              startOffset="0%"
              textLength="170"
            >
              JC Construction Management
            </textPath>
            <textPath
              href="#hero-badge-text-path"
              lengthAdjust="spacing"
              startOffset="50%"
              textLength="170"
            >
              JC Construction Management
            </textPath>
          </text>
        </g>
      </svg>
      <Image
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 h-[79%] w-[79%] -translate-x-1/2 -translate-y-1/2 lg:h-[110px] lg:w-[110px]"
        height={104}
        src="/icons/home/construction-seal.svg"
        unoptimized
        width={104}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className={`relative overflow-x-clip bg-surface lg:overflow-clip ${styles.sectionScale}`}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-7 z-0 hidden h-full w-[calc(100%-56px)] max-w-none object-fill lg:block"
        height={1199}
        src="/images/home/hero-dividers.svg"
        width={1863}
      />

      <div
        className={`relative box-border flex w-full max-w-full flex-col items-stretch px-5 pt-8 pb-12 md:mx-auto md:max-w-[920px] md:px-6 md:pt-10 md:pb-14 lg:absolute lg:top-0 lg:left-1/2 lg:mx-0 lg:block lg:h-[1085px] lg:w-[1920px] lg:max-w-none lg:origin-top lg:translate-x-[-50%] lg:p-0 ${styles.canvasScale}`}
      >
        <h1
          className="order-1 mb-7 w-full text-center font-headline text-[clamp(36px,9vw,56px)] font-medium leading-[1.05] tracking-[0.01em] text-ink md:mb-8 md:text-[clamp(44px,6.5vw,56px)] lg:absolute lg:top-[252px] lg:left-[123px] lg:z-[1] lg:order-none lg:m-0 lg:h-[216px] lg:w-[659px] lg:text-left lg:text-[72px] lg:leading-[72px]"
          id="home-hero-title"
        >
          We build New York
          <br />
          from <span className="text-brand">permit</span> to
          <br />
          <span className="text-brand">sign-off.</span>
        </h1>

        <div className="relative order-2 mb-6 box-border w-full pl-9 md:mb-7 md:pl-11 lg:absolute lg:top-[136px] lg:left-[1218px] lg:z-[1] lg:order-none lg:m-0 lg:h-[346px] lg:w-[580px] lg:pl-0">
          <div className="relative aspect-[580/346] w-full overflow-hidden rounded-card lg:absolute lg:inset-0 lg:aspect-auto">
            <Image
              alt="New York City brownstone residences"
              className="absolute inset-0 h-full w-full max-w-none object-cover object-center lg:inset-auto lg:top-0 lg:left-[-85px] lg:h-[415px] lg:w-[665px]"
              height={415}
              priority
              sizes="(max-width: 1023px) 100vw, 665px"
              src="/images/home/hero-brownstones.png"
              width={665}
            />
          </div>
          <HeroBadge />
        </div>

        <p className="order-3 mb-7 w-full text-left font-body text-[clamp(16px,4.2vw,20px)] font-light leading-[1.35] tracking-normal text-ink md:mb-8 md:text-xl md:leading-7 lg:absolute lg:top-[522px] lg:left-[1218px] lg:z-[1] lg:order-none lg:m-0 lg:w-[580px] lg:text-2xl lg:leading-[30px]">
          JC Construction Management is NYC general contractor specializing in
          complex ground-up development, precision renovations, and high-end
          residential and commercial interior renovations. We deliver
          exceptional results through expert project management, cutting-edge
          technology, and an unwavering commitment to quality.
        </p>

        <div className="order-4 mb-10 flex w-full flex-col items-stretch gap-3.5 md:mb-12 md:gap-4 lg:absolute lg:top-[500px] lg:left-[123px] lg:z-[1] lg:order-none lg:m-0 lg:w-auto lg:items-start lg:gap-[17px]">
          <HeroCta
            href="/portfolio"
            label="Explore Our Projects"
            variant="projects"
          />
          <HeroCta
            href="/contact"
            label="Schedule a Free Consultation"
            variant="consultation"
          />
        </div>

        <dl className="pointer-events-none order-5 m-0 box-border flex w-full flex-col items-stretch divide-y divide-divider rounded-2xl bg-surface px-5 py-0 lg:absolute lg:inset-0 lg:z-[1] lg:order-none lg:block lg:w-auto lg:divide-y-0 lg:rounded-none lg:bg-transparent lg:p-0">
          <div className="static box-border flex h-auto w-full max-w-none flex-col items-center px-0 py-[22px] text-center text-ink lg:absolute lg:bottom-[160px] lg:left-[123px] lg:block lg:h-[108px] lg:w-[218px] lg:p-0">
            <dt className="static m-0 h-auto w-auto font-metric text-[clamp(2.4rem,9vw,2.9rem)] font-medium leading-none lg:absolute lg:top-0.5 lg:h-[65px] lg:w-full lg:text-[64px] lg:font-semibold lg:leading-[101.751%]">
              15<span className="text-brand lg:text-inherit">+</span>
            </dt>
            <dd className="static mt-2 h-auto w-auto font-body text-sm font-normal leading-normal text-muted lg:absolute lg:top-[77px] lg:left-[18px] lg:mt-0 lg:w-[183px] lg:font-metric lg:text-2xl lg:text-ink">
              <span className="hidden lg:inline">Years in Industry</span>
              <span className="inline lg:hidden">Years in industry</span>
            </dd>
          </div>

          <div className="static box-border flex h-auto w-full max-w-none flex-col items-center px-0 py-[22px] text-center text-ink lg:absolute lg:bottom-[160px] lg:left-[851px] lg:block lg:h-[108px] lg:w-[218px] lg:p-0">
            <dt className="static m-0 h-auto w-auto font-metric text-[clamp(2.4rem,9vw,2.9rem)] font-medium leading-none lg:absolute lg:top-0.5 lg:h-[65px] lg:w-full lg:text-[64px] lg:font-semibold lg:leading-[101.751%]">
              60<span className="text-brand lg:text-inherit">+</span>
            </dt>
            <dd className="static mt-2 h-auto w-auto font-body text-sm font-normal leading-normal text-muted lg:absolute lg:top-[77px] lg:left-px lg:mt-0 lg:w-[217px] lg:font-metric lg:text-2xl lg:text-ink">
              <span className="hidden lg:inline">Projects Completed</span>
              <span className="inline lg:hidden">Projects completed</span>
            </dd>
          </div>

          <div className="static box-border flex h-auto w-full max-w-none flex-col items-center px-0 py-[22px] text-center text-ink lg:absolute lg:bottom-[160px] lg:left-[1527px] lg:block lg:h-[105px] lg:w-[271px] lg:p-0">
            <div className="static flex h-auto w-auto items-baseline justify-center gap-0 lg:absolute lg:top-0 lg:left-[18.676px] lg:block lg:h-[65px] lg:w-[213.925px]">
              <dt className="static m-0 h-auto w-auto font-metric text-[clamp(2.4rem,9vw,2.9rem)] font-medium leading-none lg:absolute lg:top-0 lg:left-0 lg:h-[65px] lg:w-[98px] lg:text-[64px] lg:font-semibold lg:leading-[101.751%]">
                5.2
              </dt>
              <dd className="static ml-2 h-auto w-auto text-left font-body text-[19px] font-normal leading-none text-muted lg:absolute lg:top-1 lg:left-[109.65px] lg:ml-0 lg:h-[53px] lg:w-[104.275px] lg:font-figtree lg:text-2xl lg:font-bold lg:leading-[30px] lg:text-ink">
                <span className="hidden lg:inline">
                  Million
                  <br />
                  SQ Feet
                </span>
                <span className="inline lg:hidden">M sq ft</span>
              </dd>
            </div>
            <dd className="static mt-2 h-auto w-auto font-body text-sm font-normal leading-normal text-muted lg:absolute lg:top-[74px] lg:left-0 lg:mt-0 lg:h-[31px] lg:w-[271px] lg:font-metric lg:text-2xl lg:text-ink">
              <span className="hidden lg:inline">Ground-up Development</span>
              <span className="inline lg:hidden">Ground-up development</span>
            </dd>
          </div>
        </dl>
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 bottom-0 left-0 z-[3] h-[1.672px] w-full ${styles.bottomDividerScale}`}
        height={3}
        src="/images/home/hero-bottom-divider.svg"
        width={1966}
      />
    </section>
  );
}
