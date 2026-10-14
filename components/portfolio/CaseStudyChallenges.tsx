import { PortableText } from "@portabletext/react";
import Image from "next/image";

import type { getProjectBySlug } from "@/sanity/lib/data";

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;

const challengeIcons = [
  { src: "/icons/portfolio/challenge-building.svg", size: 100 },
  { src: "/icons/portfolio/challenge-schedule.svg", size: 106 },
  { src: "/icons/portfolio/challenge-standards.svg", size: 109 },
  { src: "/icons/portfolio/challenge-coordination.svg", size: 103 },
  { src: "/icons/portfolio/challenge-quality.svg", size: 110 },
] as const;

export function CaseStudyChallenges({ project }: { project: Project }) {
  const sections = project.challengeSections || [];
  const points = project.challengePoints || [];
  const hasIntroduction = Boolean(project.challengeIntroduction?.length);

  if (!hasIntroduction && sections.length === 0 && points.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="case-study-challenges-title"
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

      <div className="relative mx-auto w-[calc(100%_-_48px)] max-w-[1700px] pt-14 pb-16 md:w-[calc(100%_-_96px)] lg:pt-[90px] lg:pb-[99px] 2xl:min-h-[774px]">
        <div className="grid gap-7 lg:min-h-[80px] lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)] lg:items-start lg:gap-12">
          <h2
            className="m-0 font-headline text-[clamp(44px,6vw,72px)] leading-none font-normal lg:pl-[48px]"
            id="case-study-challenges-title"
          >
            {project.challengeHeading || "The Challenges"}
          </h2>
          {hasIntroduction && (
            <div className="max-w-[720px] font-body text-[18px] leading-[1.23] font-normal text-ink-strong md:text-[20px] [&_p]:m-0">
              <PortableText value={project.challengeIntroduction} />
            </div>
          )}
        </div>

        {sections.length > 0 ? (
          <div className="mt-12 grid gap-[10px] sm:grid-cols-2 lg:mt-[67px] lg:grid-cols-3 2xl:grid-cols-5">
            {sections.map((section, index) => {
              const icon = challengeIcons[index % challengeIcons.length];

              return (
                <article
                  className="flex min-h-[438px] flex-col items-center rounded-[10px] bg-white px-[18px] pt-[62px] pb-8 text-center"
                  key={section._key}
                >
                  <div className="flex h-[110px] shrink-0 items-center justify-center">
                    <span
                      className="block shrink-0"
                      style={{ width: icon.size, height: icon.size }}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full"
                        height={icon.size}
                        src={icon.src}
                        unoptimized
                        width={icon.size}
                      />
                    </span>
                  </div>
                  <h3 className="mt-[36px] mb-0 flex min-h-[72px] items-start justify-center font-headline text-[clamp(25px,1.7vw,32px)] leading-[1.109] font-medium text-brand">
                    {section.heading}
                  </h3>
                  <p className="mt-[6px] mb-0 max-w-[294px] font-body text-[16px] leading-[24px] font-medium tracking-[0.01em] text-ink-strong">
                    {section.description}
                  </p>
                </article>
              );
            })}
          </div>
        ) : points.length > 0 ? (
          <ul className="mt-12 grid gap-4 pl-0 sm:grid-cols-2 lg:mt-[67px] lg:grid-cols-3">
            {points.map((point, index) => (
              <li
                className="list-none rounded-[10px] bg-white px-8 py-9 font-body text-[18px] leading-[1.4] text-ink-strong"
                key={`${index}-${point}`}
              >
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
