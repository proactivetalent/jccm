import { PortableText } from "@portabletext/react";

import type { getProjectBySlug } from "@/sanity/lib/data";

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;

export function CaseStudyPhases({ project }: { project: Project }) {
  const phases = project.phases || [];

  if (phases.length === 0) return null;

  return (
    <section
      aria-labelledby="case-study-phases-title"
      className="relative overflow-hidden border-b border-divider"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px bg-divider/70 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px bg-divider/70 lg:block"
      />

      <div className="relative mx-auto w-[calc(100%_-_48px)] max-w-[1700px] pt-14 pb-16 md:w-[calc(100%_-_96px)] lg:pt-[70px] lg:pb-[113px]">
        <h2
          className="m-0 font-headline text-[clamp(44px,6vw,72px)] leading-[1.24] font-normal lg:pl-[45px]"
          id="case-study-phases-title"
        >
          Project Phases
        </h2>

        <div className="mt-10 flex max-w-[1692px] flex-col gap-5 lg:mt-[67px] lg:gap-[31px]">
          {phases.map((phase, index) => {
            const hasKeyPoints = Boolean(phase.keyPoints?.length);

            return (
              <article
                aria-labelledby={`case-study-phase-${index + 1}`}
                className={`relative grid min-h-[489px] min-w-0 rounded-[10px] bg-white px-6 py-8 md:px-9 xl:grid-cols-[minmax(0,1023fr)_minmax(0,571fr)] xl:px-[49px] xl:py-[21px] ${index === 0 ? "before:absolute before:inset-y-0 before:left-0 before:w-[8px] before:rounded-l-[10px] before:bg-brand" : ""}`}
                key={phase._key}
              >
                <div className="min-w-0 xl:pr-[clamp(36px,7vw,130px)]">
                  <p className="m-0 font-headline text-[18px] leading-[1.3] font-normal text-brand md:text-[20px]">
                    {phase.label || `Phase ${index + 1}`}
                  </p>
                  <h3
                    className="mt-[17px] mb-0 max-w-[650px] font-headline text-[clamp(30px,3.1vw,40px)] leading-[1.2] font-normal text-ink"
                    id={`case-study-phase-${index + 1}`}
                  >
                    {phase.title}
                  </h3>

                  {phase.summary && (
                    <div className="mt-[22px] max-w-[893px]">
                      <h4 className="m-0 font-body text-[18px] leading-[1.3] font-medium text-ink md:text-[20px]">
                        Short Summary:
                      </h4>
                      <p className="m-0 font-body text-[18px] leading-[1.31] font-light text-ink md:text-[20px]">
                        {phase.summary}
                      </p>
                    </div>
                  )}

                  {phase.body?.length > 0 && (
                    <div className="mt-[16px] max-w-[893px]">
                      <h4 className="m-0 font-body text-[18px] leading-[1.3] font-medium text-ink md:text-[20px]">
                        Phase Description:
                      </h4>
                      <div className="font-body text-[18px] leading-[1.31] font-light text-ink md:text-[20px] [&_p]:m-0 [&_p+p]:mt-3">
                        <PortableText value={phase.body} />
                      </div>
                    </div>
                  )}
                </div>

                {hasKeyPoints && (
                  <div className="mt-8 min-w-0 border-t border-divider pt-7 xl:mt-0 xl:min-h-[358px] xl:self-center xl:border-t-0 xl:border-l xl:pt-[44px] xl:pl-[clamp(30px,3.2vw,60px)]">
                    <h4 className="m-0 font-body text-[18px] leading-[1.3] font-medium text-ink md:text-[20px]">
                      Key Points:
                    </h4>
                    <ul className="mt-4 mb-0 space-y-1 pl-0">
                      {phase.keyPoints?.map((point, pointIndex) => (
                        <li
                          className="flex min-h-[40px] items-center gap-[17px] font-body text-[18px] leading-[1.3] font-light text-ink md:text-[20px] xl:min-h-[44px]"
                          key={`${pointIndex}-${point}`}
                        >
                          <span
                            aria-hidden="true"
                            className="size-[15px] shrink-0 rounded-full bg-brand"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
