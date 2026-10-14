import Image from "next/image";

import type { getProjectBySlug } from "@/sanity/lib/data";

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;
type Metric = NonNullable<Project["metrics"]>[number];

const metricIcons = [
  "/icons/portfolio/metrics/size.svg",
  "/icons/portfolio/metrics/time.svg",
  "/icons/portfolio/metrics/location.svg",
  "/icons/portfolio/metrics/stores.svg",
] as const;

function getMetricIcon(metric: Metric, index: number) {
  const content = `${metric.value} ${metric.label}`.toLowerCase();

  if (/duration|time|week|month|day|year/.test(content)) {
    return metricIcons[1];
  }

  if (/location|site|awarded/.test(content)) {
    return metricIcons[2];
  }

  if (/store|footprint|network/.test(content)) {
    return metricIcons[3];
  }

  if (/size|square|sq\.?\s?(?:ft|m)|\bsf\b|area/.test(content)) {
    return metricIcons[0];
  }

  return metricIcons[index % metricIcons.length];
}

export function CaseStudyMetrics({ project }: { project: Project }) {
  const metrics = project.metrics || [];

  if (metrics.length === 0) return null;

  return (
    <section
      aria-labelledby="case-study-metrics-title"
      className="relative overflow-hidden border-b border-divider"
    >
      <div className="relative mx-auto w-[calc(100%_-_48px)] max-w-[1700px] pt-14 pb-16 md:w-[calc(100%_-_96px)] lg:min-h-[655px] lg:pt-[77px] lg:pb-[65px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/4 hidden w-px bg-divider/70 xl:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-divider/70 xl:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-3/4 hidden w-px bg-divider/70 xl:block"
        />
        <h2
          className="m-0 font-headline text-[clamp(44px,6vw,72px)] leading-none font-normal text-ink lg:pl-[48px]"
          id="case-study-metrics-title"
        >
          Project Metrics
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-[70px] xl:grid-cols-4 xl:gap-x-0">
          {metrics.map((metric, index) => {
            const icon = getMetricIcon(metric, index);

            return (
              <article
                className={`min-w-0 ${index === 0 ? "xl:pl-[48px]" : "xl:pl-[30px]"}`}
                key={metric._key}
              >
                <p className="m-0 font-headline text-[14px] leading-[1.23] font-normal text-brand">
                  {String(index + 1).padStart(2, "0")}.
                </p>

                <span
                  aria-hidden="true"
                  className="mt-[14px] flex h-[62px] items-center"
                >
                  <Image
                    alt=""
                    className="object-contain"
                    height={62}
                    src={icon}
                    unoptimized
                    width={62}
                  />
                </span>

                <p className="mt-[14px] mb-0 font-headline text-[clamp(36px,3.4vw,48px)] leading-[1.23] font-normal text-ink">
                  {metric.value}
                </p>
                <h3 className="m-0 font-headline text-[22px] leading-[1.23] font-normal text-ink">
                  {metric.label}
                </h3>
                <div aria-hidden="true" className="mt-[11px] h-[4px] w-[76px] bg-brand" />
                {metric.supportingText && (
                  <p className="mt-[17px] mb-0 max-w-[330px] font-body text-[15px] leading-[1.3] font-normal text-ink-strong">
                    {metric.supportingText}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
