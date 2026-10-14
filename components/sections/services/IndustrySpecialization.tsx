import Image from "next/image";
import Link from "next/link";

import styles from "./IndustrySpecialization.module.css";

type Industry = Readonly<{
  title: string;
  points: readonly string[];
  href: string;
}>;

const industries: readonly Industry[] = [
  {
    title: "Residential Expertise",
    points: [
      "Luxury condominium and apartment renovations with custom millwork and high-end finishes.",
      "Brownstone and townhouse restorations that preserve historical character while modernizing systems.",
      "High-rise residential developments from foundation to rooftop amenities.",
      "Affordable housing projects that meet strict regulatory requirements while maintaining quality.",
    ],
    href: "/portfolio",
  },
  {
    title: "Commercial and Retail",
    points: [
      "Office build-outs and corporate interiors that enhance workplace functionality and brand identity.",
      "Retail storefronts and shopping centers optimized for customer experience and operational efficiency.",
      "Restaurant and hospitality venues with specialized mechanical systems and custom culinary layouts.",
      "Medical and healthcare facilities requiring precise compliance with health codes and specialized infrastructure.",
    ],
    href: "/portfolio",
  },
  {
    title: "Institutional and Mixed-Use",
    points: [
      "Educational facilities designed for modern learning environments and community use.",
      "Community centers that serve diverse neighborhood needs while maintaining operational efficiency.",
      "Mixed-use developments that seamlessly integrate residential, commercial, and public spaces.",
      "Adaptive reuse projects that transform existing structures for new purposes while preserving character.",
    ],
    href: "/portfolio",
  },
] as const;

const desktopButtonPositions = ["left-[66px]", "left-[76px]", "left-[70px]"] as const;

function IndustryExploreLink({
  href,
  desktopPosition,
}: Readonly<{ href: string; desktopPosition?: string }>) {
  return (
    <Link
      className={`group relative box-border block h-9 w-[131px] overflow-hidden border-[3px] border-white text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
        desktopPosition
          ? `absolute top-[427px] ${desktopPosition}`
          : "mt-auto"
      }`}
      href={href}
    >
      <span
        aria-hidden="true"
        className="absolute -top-[3px] -left-[3px] h-9 w-9 bg-white transition-[width] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute -top-[3px] -left-[3px] z-[1] flex h-9 w-9 items-center justify-center"
      >
        <Image
          alt=""
          className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
          height={18}
          src="/icons/home/explore-arrow-brand.svg"
          unoptimized
          width={18}
        />
      </span>
      <span className="absolute top-[5px] left-[48px] z-[1] font-body text-base leading-[19.646px] font-normal whitespace-nowrap transition-colors duration-300 group-hover:text-brand group-focus-visible:text-brand motion-reduce:transition-none">
        Explore
      </span>
    </Link>
  );
}

function IndustryCard({
  industry,
  index,
  desktop = false,
}: Readonly<{ industry: Industry; index: number; desktop?: boolean }>) {
  return (
    <article
      className={
        desktop
          ? "relative h-[518px] w-[537px] rounded-card bg-brand text-white"
          : "flex min-h-[430px] flex-col rounded-card bg-brand px-7 pt-9 pb-8 text-white sm:px-9"
      }
    >
      <h3
        className={
          desktop
            ? "absolute top-[57px] left-12 m-0 max-w-[430px] font-headline text-[32px] leading-[1.109] font-medium"
            : "m-0 font-headline text-[clamp(27px,7vw,32px)] leading-[1.109] font-medium"
        }
      >
        {industry.title}
      </h3>

      <ul
        className={
          desktop
            ? "absolute top-[118px] left-10 m-0 w-[439px] list-disc pl-6 font-body text-base leading-[1.23] font-normal"
            : "mt-7 mb-9 list-disc pl-5 font-body text-base leading-[1.3] font-normal"
        }
      >
        {industry.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <IndustryExploreLink
        desktopPosition={desktop ? desktopButtonPositions[index] : undefined}
        href={industry.href}
      />
    </article>
  );
}

export function IndustrySpecialization() {
  return (
    <section
      aria-labelledby="industry-specialization-title"
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

      <div className="mx-auto box-border w-full max-w-[920px] px-5 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:hidden">
        <h2
          className="m-0 font-headline text-[clamp(42px,10vw,58px)] leading-none font-normal text-ink"
          id="industry-specialization-title"
        >
          Industry Specialization
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => (
            <IndustryCard industry={industry} index={index} key={industry.title} />
          ))}
        </div>
      </div>

      <div
        className={`absolute top-0 hidden h-[854px] w-[1920px] lg:block ${styles.canvasScale}`}
      >
        <h2
          className="absolute top-[89px] left-[197px] m-0 h-[90px] w-[754px] font-headline text-[72px] leading-[89.297px] font-normal whitespace-nowrap text-ink"
          id="industry-specialization-title-desktop"
        >
          Industry Specialization
        </h2>

        <div className="absolute top-[241px] left-[108px] grid grid-cols-[repeat(3,537px)] gap-[46px]">
          {industries.map((industry, index) => (
            <IndustryCard
              desktop
              industry={industry}
              index={index}
              key={industry.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
