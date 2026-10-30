import Image from "next/image";

import styles from "./ConstructionManagementOwnerRepresentation.module.css";

const representationServices = [
  {
    title: "Stakeholder Communication",
    description:
      "We manage communication between owners, architects, engineers, contractors, vendors, and other project participants.",
  },
  {
    title: "Decision Support",
    description:
      "We provide practical construction insight to help owners make informed decisions about costs, schedules, materials, and execution.",
  },
  {
    title: "Cost Oversight",
    description:
      "We review project costs, changes, invoices, and potential financial risks to maintain greater control over the budget.",
  },
  {
    title: "Schedule Oversight",
    description:
      "We monitor progress against the construction schedule and identify potential delays before they become larger problems.",
  },
] as const;

function RepresentationList({ desktop = false }: Readonly<{ desktop?: boolean }>) {
  return (
    <ol
      className={
        desktop
          ? "absolute top-[442px] left-[96px] m-0 flex h-[466px] w-[887px] list-none flex-col overflow-hidden rounded-[10px] border-2 border-[#d8d8d8] bg-white p-0"
          : "m-0 flex list-none flex-col overflow-hidden rounded-card border-2 border-[#d8d8d8] bg-white p-0"
      }
    >
      {representationServices.map((service, index) => (
        <li
          className={`flex ${desktop ? "h-[116px]" : "min-h-[116px]"} items-center border-b-2 border-[#d8d8d8] last:border-b-0 ${index === 0 ? "border-l-[10px] border-l-brand" : "border-l-[10px] border-l-transparent"}`}
          key={service.title}
        >
          <span className={`shrink-0 font-body font-normal text-ink ${desktop ? "w-[98px] pl-[52px] text-[26px]" : "w-[70px] pl-5 text-xl"}`}>
            {index + 1}.
          </span>
          <div className={`min-w-0 pr-5 ${desktop ? "py-3" : "py-4"}`}>
            <h3 className={`m-0 font-headline font-normal tracking-[-0.02em] text-ink ${desktop ? "text-[28px] leading-[1.05]" : "text-[22px] leading-[1.1]"}`}>
              {service.title}
            </h3>
            <p className={`mt-1.5 mb-0 font-body font-normal leading-[1.2] text-ink ${desktop ? "text-[16px]" : "text-[15px]"}`}>
              {service.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ConstructionManagementOwnerRepresentation() {
  return (
    <section
      aria-labelledby="construction-management-owner-representation-title"
      className={`relative overflow-hidden bg-surface ${styles.section}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2
          className="m-0 font-headline text-[clamp(44px,9vw,72px)] leading-[0.98] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-owner-representation-title"
        >
          Owner Representation:
          <br />
          Protecting Your Interest
        </h2>
        <span aria-hidden="true" className="mt-7 block h-1 w-[104px] bg-brand" />
        <p className="mt-5 mb-0 max-w-3xl font-body text-base leading-[1.28] text-ink">
          Having an experienced construction manager representing your interests gives you a knowledgeable advocate throughout the project. Our owner representation services include:
        </p>
        <div className="mt-8">
          <RepresentationList />
        </div>
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-card">
          <Image
            alt="Modern urban project with a covered pedestrian walkway"
            className="object-cover"
            fill
            sizes="(max-width: 1023px) 100vw, 722px"
            src="/images/services/construction-management/owner-representation-detail.webp"
            unoptimized
          />
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[920px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2
          className="absolute top-[124px] left-[96px] m-0 w-[900px] font-headline text-[72px] leading-[80px] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-owner-representation-title-desktop"
        >
          Owner Representation:
          <br />
          Protecting Your Interest
        </h2>
        <span aria-hidden="true" className="absolute top-[303px] left-[99px] h-1 w-[114px] bg-brand" />
        <p className="absolute top-[333px] left-[96px] m-0 w-[850px] font-body text-[20px] leading-[1.23] text-ink">
          Having an experienced construction manager representing your interests gives you a knowledgeable advocate throughout the project. Our owner representation services include:
        </p>
        <RepresentationList desktop />
        <div className="absolute top-[120px] left-[1102px] h-[779px] w-[722px] overflow-hidden rounded-[10px]">
          <Image
            alt="Modern urban project with a covered pedestrian walkway"
            className="object-cover"
            fill
            sizes="722px"
            src="/images/services/construction-management/owner-representation-detail.webp"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
