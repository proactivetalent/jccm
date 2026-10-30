import Image from "next/image";

import styles from "./ConstructionManagementReasons.module.css";

const reasons = [
  {
    icon: "/icons/services/management/hands-on-management.svg",
    title: "Hands-On Management",
    description:
      "Our team stays actively involved in the project rather than simply overseeing it from a distance.",
    alt: "Hands-on management icon",
  },
  {
    icon: "/icons/services/management/trade-coordination.svg",
    title: "Experienced Trade Coordination",
    description:
      "We understand how different trades interact and coordinate their work to maintain an efficient construction sequence.",
    alt: "Experienced trade coordination icon",
  },
  {
    icon: "/icons/services/management/proactive-problem-solving.svg",
    title: "Proactive Problem Solving",
    description:
      "We identify potential issues early and work toward practical solutions before they affect the project.",
    alt: "Proactive problem solving icon",
  },
  {
    icon: "/icons/services/management/transparent-communication.svg",
    title: "Transparent Communication",
    description:
      "Owners receive clear updates about progress, costs, schedule, decisions, and issues throughout construction.",
    alt: "Transparent communication icon",
  },
  {
    icon: "/icons/services/management/quality-focused-execution.svg",
    title: "Quality-Focused Execution",
    description:
      "We maintain consistent oversight to ensure workmanship and completed work meet the project's established standards.",
    alt: "Quality-focused execution icon",
  },
] as const;

function ReasonCard({ reason, desktop = false }: Readonly<{ reason: (typeof reasons)[number]; desktop?: boolean }>) {
  return (
    <article
      className={
        desktop
          ? "flex h-[340px] w-[366px] flex-col items-center rounded-card bg-white px-5 pt-[37px] text-center"
          : "flex min-h-[280px] flex-col items-center rounded-card bg-white px-6 py-7 text-center"
      }
    >
      <Image alt={reason.alt} height={107} src={reason.icon} unoptimized width={106} />
      <h3
        className={
          desktop
            ? "mt-1.5 max-w-[330px] font-headline text-[32px] leading-[35.488px] font-medium text-brand"
            : "mt-3 max-w-[300px] font-headline text-[28px] leading-[1.109] font-medium text-brand"
        }
      >
        {reason.title}
      </h3>
      <p
        className={
          desktop
            ? "mt-[10px] mb-0 max-w-[320px] font-body text-[16px] leading-[1.23] text-ink"
            : "mt-3 mb-0 max-w-[300px] font-body text-base leading-[1.45] text-ink"
        }
      >
        {reason.description}
      </p>
    </article>
  );
}

export function ConstructionManagementReasons() {
  return (
    <section
      aria-labelledby="construction-management-reasons-title"
      className={`relative overflow-hidden bg-surface ${styles.section}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center md:px-10 md:py-20 lg:hidden">
        <h2
          className="m-0 max-w-3xl font-headline text-[clamp(42px,9vw,72px)] leading-[1] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-reasons-title"
        >
          Choose JCCM For
          <br />
          Your Commercial Build-Out?
        </h2>
        <div className="mt-10 grid w-full max-w-md gap-5 sm:grid-cols-2">
          {reasons.map((reason) => <ReasonCard key={reason.title} reason={reason} />)}
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[1000px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2
          className="absolute top-[84px] left-[410px] m-0 w-[1100px] text-center font-headline text-[72px] leading-[72px] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-reasons-title-desktop"
        >
          Choose JCCM For
          <br />
          Your Commercial Build-Out?
        </h2>
        <div className="absolute top-[275px] left-[386px] flex gap-[25px]">
          {reasons.slice(0, 3).map((reason) => <ReasonCard desktop key={reason.title} reason={reason} />)}
        </div>
        <div className="absolute top-[640px] left-[581px] flex gap-[25px]">
          {reasons.slice(3).map((reason) => <ReasonCard desktop key={reason.title} reason={reason} />)}
        </div>
      </div>
    </section>
  );
}
