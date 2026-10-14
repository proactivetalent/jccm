import { stegaClean } from "@sanity/client/stega";
import Image from "next/image";
import type { ReactNode } from "react";

import type { getProjectBySlug } from "@/sanity/lib/data";

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;

type InfoRow = {
  label: string;
  value: ReactNode;
  multiline?: boolean;
};

type InfoCardProps = {
  title: string;
  icon: string;
  iconSize: number;
  iconClassName: string;
  rows: InfoRow[];
};

function StackedValues({ values }: { values: string[] }) {
  if (values.length === 0) return "—";

  return (
    <span className="flex flex-col">
      {values.map((value, index) => (
        <span key={`${index}-${value}`}>{value}</span>
      ))}
    </span>
  );
}

function InfoCard({ title, icon, iconSize, iconClassName, rows }: InfoCardProps) {
  return (
    <article className="min-h-[557px] border border-[#c4c9cb] border-t-[8px] border-t-brand bg-[#fefefe]/[0.53] px-6 md:px-8 min-[1600px]:px-[44px]">
      <div className="flex h-[138px] items-center justify-center gap-6 border-b border-[#c4c9cb] min-[1600px]:justify-start min-[1600px]:gap-[28px] min-[1600px]:pl-[42px]">
        <span className={`block shrink-0 ${iconClassName}`}>
          <Image
            alt=""
            aria-hidden="true"
            className="h-full w-full"
            height={iconSize}
            src={icon}
            unoptimized
            width={iconSize}
          />
        </span>
        <h3 className="m-0 font-headline text-[clamp(21px,2.2vw,32px)] leading-[1.134] font-normal text-muted uppercase min-[1600px]:whitespace-nowrap">
          {title}
        </h3>
      </div>

      <dl className="m-0">
        {rows.map((row) => (
          <div
            className={`grid min-h-[72px] grid-cols-[45%_55%] items-center border-b border-[#c4c9cb] ${row.multiline ? "py-[15px]" : "py-[9px]"}`}
            key={row.label}
          >
            <dt className="m-0 pr-2 font-body text-[16px] leading-[1.3] font-medium text-ink min-[1600px]:text-[20px]">
              {row.label}
            </dt>
            <dd className="m-0 min-w-0 break-words font-body text-[16px] leading-[1.2] font-light text-ink min-[1600px]:text-[20px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function CaseStudyInfoCards({ project }: { project: Project }) {
  const status = stegaClean(project.status);
  const statusLabel = status === "on-hold"
    ? "On Hold"
    : `${status.charAt(0).toUpperCase()}${status.slice(1)}`;
  const state = stegaClean(project.location.state);
  const cityState = `${project.location.city}, ${state === "New York" ? "NY" : state}`;
  const streetAddress = project.location.publicStreetAddress;
  const address = streetAddress
    ? stegaClean(streetAddress).toLowerCase().includes(
        stegaClean(project.location.city).toLowerCase(),
      )
      ? streetAddress
      : `${streetAddress}, ${cityState}`
    : "—";
  const additionalServices = (project.services || []).slice(1).map((service) => service.title);
  const additionalCategories = (project.additionalCategories || []).map(
    (category) => category.title,
  );

  const identityRows: InfoRow[] = [
    {
      label: "Status",
      value: (
        <span className="inline-flex items-center gap-[14px] text-brand">
          <span aria-hidden="true" className="size-[12px] shrink-0 rounded-full bg-brand" />
          {statusLabel}
        </span>
      ),
    },
    { label: "Primary Category", value: project.primaryCategory?.title || "—" },
    { label: "Project Type", value: project.projectType || "—" },
    { label: "Building Use", value: project.buildingUse || "—" },
    {
      label: "Units",
      value: project.numberOfUnits == null
        ? "—"
        : new Intl.NumberFormat("en-US").format(project.numberOfUnits),
    },
  ];
  const serviceRows: InfoRow[] = [
    { label: "Primary Service", value: project.services?.[0]?.title || "—" },
    {
      label: "Additional Service",
      value: <StackedValues values={additionalServices} />,
      multiline: additionalServices.length > 1,
    },
    {
      label: "Additional Categories",
      value: <StackedValues values={additionalCategories} />,
      multiline: additionalCategories.length > 2,
    },
  ];
  const locationRows: InfoRow[] = [
    { label: "Client", value: project.client.name },
    { label: "Address", value: address },
    { label: "Neighborhood", value: project.location.neighborhood || "—" },
    { label: "Borough", value: project.location.borough || "—" },
    { label: "City / State", value: cityState },
  ];

  return (
    <section aria-label="Project details" className="border-b border-divider">
      <div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1700px] grid-cols-1 gap-[17px] py-12 lg:w-[calc(100%_-_96px)] min-[1024px]:max-[1599px]:grid-cols-2 min-[1600px]:w-[calc(100%_-_134px)] min-[1600px]:grid-cols-3 min-[1600px]:pt-[73px] min-[1600px]:pb-[109px]">
        <InfoCard
          icon="/icons/portfolio/identity.svg"
          iconClassName="size-[56px] min-[1600px]:size-[66px]"
          iconSize={66}
          rows={identityRows}
          title="Project Identity"
        />
        <InfoCard
          icon="/icons/portfolio/services.svg"
          iconClassName="size-[56px] min-[1600px]:size-[74px]"
          iconSize={74}
          rows={serviceRows}
          title="Services Provided"
        />
        <InfoCard
          icon="/icons/portfolio/location.svg"
          iconClassName="size-[56px] min-[1600px]:size-[68px]"
          iconSize={68}
          rows={locationRows}
          title="Client & Location"
        />
      </div>
    </section>
  );
}
