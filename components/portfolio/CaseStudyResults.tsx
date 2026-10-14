import { PortableText } from "@portabletext/react";

import type { getProjectBySlug } from "@/sanity/lib/data";

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;

export function CaseStudyResults({ project }: { project: Project }) {
  const results = project.results || [];
  const hasClosingStatement = Boolean(project.closingStatement?.length);

  if (results.length === 0 && !hasClosingStatement) {
    return null;
  }

  return (
    <section
      aria-labelledby="case-study-results-title"
      className="border-b border-divider"
    >
      <div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1700px] gap-12 py-16 md:w-[calc(100%_-_96px)] xl:grid-cols-[minmax(0,641fr)_minmax(0,958fr)] xl:gap-[43px] xl:pt-[160px] xl:pb-[160px]">
        <div className="min-w-0 max-w-[641px]">
          <h2
            className="m-0 max-w-[770px] font-headline text-[clamp(44px,5vw,72px)] leading-none font-normal text-ink lg:pl-[48px]"
            id="case-study-results-title"
          >
            {project.resultsHeading || "Results & Value Delivered"}
          </h2>
          <div
            aria-hidden="true"
            className="mt-[21px] h-[9px] w-[116px] bg-brand lg:ml-[48px]"
          />
        </div>

        {(results.length > 0 || hasClosingStatement) && (
          <div className="min-w-0 xl:pt-[22px]">
            {results.length > 0 && (
              <div className="grid gap-x-[14px] gap-y-[17px] md:grid-cols-2">
                {results.map((result, index) => (
                  <article
                    className="min-h-[207px] min-w-0 border-t-[6px] border-t-brand bg-white px-6 pt-[29px] pb-6 md:px-[35px]"
                    key={result._key}
                  >
                    <p className="m-0 font-headline text-[15px] leading-[1.23] font-normal text-brand">
                      Result {index + 1}
                    </p>
                    {result.heading && (
                      <h3 className="mt-[9px] mb-0 font-headline text-[clamp(22px,2vw,26px)] leading-[1.23] font-normal text-ink">
                        {result.heading}
                      </h3>
                    )}
                    <p className="mt-[13px] mb-0 font-body text-[16px] leading-[1.23] font-normal text-ink-strong">
                      {result.description}
                    </p>
                  </article>
                ))}
              </div>
            )}

            {hasClosingStatement && (
              <div className="mt-[26px] flex min-h-[70px] items-center gap-[24px] bg-white px-[30px] py-3">
                <span
                  aria-hidden="true"
                  className="flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#d5e8e4]"
                >
                  <span className="size-[19px] rounded-full bg-brand" />
                </span>
                <div className="font-body text-[16px] leading-[1.23] font-normal text-ink-strong [&_p]:m-0">
                  <PortableText value={project.closingStatement} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
