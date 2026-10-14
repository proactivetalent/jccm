import Image from "next/image";

import styles from "./IntegratedApproach.module.css";

type ServiceApproach = Readonly<{
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}>;

const serviceApproaches: readonly ServiceApproach[] = [
  {
    title: "Pre-Construction Excellence",
    description:
      "Before breaking ground, we establish a solid foundation for success through meticulous planning, accurate budgeting, and comprehensive risk assessment. Our team conducts thorough site analysis, develops detailed project phasing, and creates comprehensive logistics plans that address NYC's unique challenges including sidewalk sheds, crane permits, and material delivery sequencing.",
    icon: "/icons/services/preconstruction.svg",
    iconAlt: "Pre-construction plan",
  },
  {
    title: "Construction Management Mastery",
    description:
      "Our hands-on approach ensures seamless execution from groundbreaking to final completion. We maintain daily onsite supervision, implement rigorous safety protocols exceeding OSHA standards, and conduct weekly coordination meetings with all trades to ensure perfect alignment between design intent and construction execution.",
    icon: "/icons/services/construction.svg",
    iconAlt: "Construction structure",
  },
  {
    title: "Specialized Urban Solutions",
    description:
      "We offer targeted expertise for NYC's unique challenges, including occupied building renovations that require careful phasing and tenant relations, tight site logistics that demand innovative material handling solutions, and complex mechanical systems integration in space-constrained environments.",
    icon: "/icons/services/urban.svg",
    iconAlt: "Urban solutions idea",
  },
] as const;

const desktopDescriptionClasses = [
  "left-[35px] w-[342px]",
  "left-[37px] w-[338px]",
  "left-[45px] w-[321px]",
] as const;

function ApproachCards({ desktop = false }: Readonly<{ desktop?: boolean }>) {
  return (
    <div
      className={
        desktop
          ? "absolute top-[272px] left-[309px] grid grid-cols-[repeat(3,412px)] gap-[33px]"
          : "mt-10 grid gap-5 sm:grid-cols-2"
      }
    >
      {serviceApproaches.map((service, index) => (
        <article
          className={
            desktop
              ? "relative h-[493px] w-[412px] rounded-card bg-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(32_83_81_/_9%)] motion-reduce:transition-none"
              : "flex min-h-[430px] flex-col items-center rounded-card bg-white px-[26px] pt-[30px] pb-[34px] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(32_83_81_/_9%)] motion-reduce:transition-none"
          }
          key={service.title}
        >
          <Image
            alt={service.iconAlt}
            className={
              desktop
                ? "absolute top-8 left-[141px] h-[107px] w-[106px] max-w-none"
                : "block h-[107px] w-[106px] max-w-none"
            }
            height={107}
            src={service.icon}
            unoptimized
            width={106}
          />
          <h3
            className={
              desktop
                ? `absolute ${index === 2 ? "top-[170px]" : "top-[164px]"} left-[15px] m-0 h-[70px] w-[362px] font-headline text-[32px] leading-[1.109] font-medium text-center text-brand`
                : "mt-6 mb-0 font-headline text-[28px] leading-[1.109] font-medium text-center text-brand"
            }
          >
            {service.title}
          </h3>
          <p
            className={
              desktop
                ? `absolute top-[265px] m-0 font-body text-base leading-[1.23] font-normal text-justify text-ink-strong ${desktopDescriptionClasses[index]}`
                : "mt-[22px] mb-0 font-body text-base leading-[1.23] font-normal text-justify text-ink-strong"
            }
          >
            {service.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function IntegratedApproach() {
  return (
    <section
      aria-labelledby="integrated-approach-title"
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
          className="m-0 font-headline text-[clamp(42px,10vw,58px)] leading-[1.04] font-normal text-center text-ink"
          id="integrated-approach-title"
        >
          Our Integrated <span className="text-brand">Service</span> Approach
        </h2>
        <ApproachCards />
      </div>

      <div
        className={`absolute top-0 hidden h-[906px] w-[1920px] lg:block ${styles.canvasScale}`}
      >
        <h2
          className="absolute top-[139px] left-[402px] m-0 h-[72px] w-[1116px] font-headline text-[72px] leading-[72px] font-normal text-center whitespace-nowrap text-ink"
          id="integrated-approach-title-desktop"
        >
          Our Integrated <span className="text-brand">Service</span> Approach
        </h2>
        <ApproachCards desktop />
      </div>
    </section>
  );
}
