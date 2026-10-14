import Image from "next/image";

import styles from "./ClientCentricPhilosophy.module.css";

type Principle = Readonly<{
  title: string;
  points: readonly string[];
}>;

const principles: readonly Principle[] = [
  {
    title: "Transparent Communication",
    points: [
      "Regular progress reporting with photographic documentation and budget updates",
      "Dedicated project management team accessible through multiple communication channels",
      "Accessible leadership with direct owner involvement in key project decisions",
      "Clear documentation of all project communications, decisions, and change orders",
    ],
  },
  {
    title: "Collaborative Approach",
    points: [
      "Integrated team environment that fosters cooperation between designers, engineers, and trades",
      "Open-book policy that provides complete visibility into project costs and accounting",
      "Flexible problem-solving that adapts to unexpected conditions while protecting project goals",
      "Continuous improvement mindset that incorporates lessons learned into ongoing operations",
    ],
  },
  {
    title: "Quality Commitment",
    points: [
      "Meticulous craftsmanship enforced through daily superintendent inspections and quality control checklists",
      "Premium materials sourcing through established relationships with top-tier suppliers and manufacturers",
      "Rigorous quality control protocols that verify workmanship meets or exceeds industry standards",
    ],
  },
] as const;

const desktopHeadingTops = ["top-[439px]", "top-[586px]", "top-[729px]"] as const;
const desktopBodyLayouts = [
  "top-[480px] left-[139px] w-[757px]",
  "top-[628px] left-[141px] w-[819px]",
  "top-[773px] left-[141px] w-[781px]",
] as const;

function PrincipleList({
  principle,
  index,
  desktop = false,
}: Readonly<{ principle: Principle; index: number; desktop?: boolean }>) {
  return (
    <article className={desktop ? "contents" : "grid grid-cols-[30px_1fr] gap-x-3"}>
      <div
        className={
          desktop
            ? `absolute left-[113px] flex items-baseline gap-1 ${desktopHeadingTops[index]}`
            : "contents"
        }
      >
        <span
          className={
            desktop
              ? "w-[34px] font-body text-[27px] leading-[1.23] font-normal text-brand"
              : "font-body text-[25px] leading-[1.23] font-normal text-brand"
          }
        >
          {index + 1}.
        </span>
        <h3
          className={
            desktop
              ? "m-0 font-headline text-[26px] leading-[1.23] font-normal text-ink"
              : "m-0 font-headline text-[25px] leading-[1.23] font-normal text-ink"
          }
        >
          {principle.title}
        </h3>
      </div>

      <ul
        className={
          desktop
            ? `absolute m-0 list-disc pl-6 font-body text-base leading-[1.23] font-normal text-ink-strong ${desktopBodyLayouts[index]}`
            : "col-start-2 mt-3 mb-0 list-disc pl-5 font-body text-[15px] leading-[1.35] font-normal text-ink-strong"
        }
      >
        {principle.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function ClientCentricPhilosophy() {
  return (
    <section
      aria-labelledby="client-philosophy-title"
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
          className="m-0 max-w-[690px] font-headline text-[clamp(45px,11vw,64px)] leading-none font-normal text-ink"
          id="client-philosophy-title"
        >
          Our Client-Centric Philosophy
        </h2>
        <span aria-hidden="true" className="mt-6 block h-0.5 w-[108px] bg-brand" />
        <p className="mt-5 mb-0 max-w-[648px] font-body text-base leading-[1.23] font-normal text-ink-strong">
          We build more then structure- we build lasting partnerships. Our client-centric
          philosophy guides every decision, every day, on every project.
        </p>

        <div className="relative mt-9 aspect-[633/750] w-full overflow-hidden rounded-card sm:max-w-[633px]">
          <Image
            alt="Two construction professionals reviewing plans on an active project site"
            className="object-cover"
            fill
            sizes="(max-width: 1023px) 100vw, 633px"
            src="/images/services/client-centric-philosophy.avif"
          />
        </div>

        <div className="mt-10 flex flex-col gap-9">
          {principles.map((principle, index) => (
            <PrincipleList index={index} key={principle.title} principle={principle} />
          ))}
        </div>
      </div>

      <div
        className={`absolute top-0 hidden h-[1000px] w-[1920px] lg:block ${styles.canvasScale}`}
      >
        <h2
          className="absolute top-[181px] left-[154px] m-0 h-[181px] w-[690px] font-headline text-[72px] leading-[72px] font-normal text-ink"
          id="client-philosophy-title-desktop"
        >
          Our Client-Centric Philosophy
        </h2>
        <span
          aria-hidden="true"
          className="absolute top-[343px] left-[157px] h-0.5 w-[108px] bg-brand"
        />
        <p className="absolute top-[362px] left-[154px] m-0 w-[648px] font-body text-base leading-[1.23] font-normal text-ink-strong">
          We build more then structure- we build lasting partnerships. Our client-centric
          philosophy guides every decision, every day, on every project.
        </p>

        {principles.map((principle, index) => (
          <PrincipleList
            desktop
            index={index}
            key={principle.title}
            principle={principle}
          />
        ))}

        <div className="absolute top-[180px] left-[1126px] h-[750px] w-[633px] overflow-hidden rounded-card">
          <Image
            alt="Two construction professionals reviewing plans on an active project site"
            className="object-cover"
            fill
            priority
            sizes="633px"
            src="/images/services/client-centric-philosophy.avif"
          />
        </div>
      </div>
    </section>
  );
}
