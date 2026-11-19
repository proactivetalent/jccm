import Image from "next/image";

type StoryPoint = Readonly<{
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}>;

const storyPoints: readonly StoryPoint[] = [
  {
    icon: "/icons/services/preconstruction/featured-target.svg",
    iconAlt: "Target icon",
    title: "Challenge",
    description:
      "Deliver identical brand experience across varying NYC real estate configurations while meeting aggressive opening timelines. Each location presented unique spatial challenges while requiring strict adherence to corporate brand standards.",
  },
  {
    icon: "/icons/services/preconstruction/featured-idea.svg",
    iconAlt: "Idea icon",
    title: "Our Solution",
    description:
      "We implemented a customized approach for each location, adapting the national prototype to local constraints while maintaining brand integrity. Through parallel processing of permits and construction, and direct coordination with the corporate brand standards team, we ensured precision implementation of all signature brand elements.",
  },
  {
    icon: "/icons/services/preconstruction/featured-select.svg",
    iconAlt: "Results icon",
    title: "Results",
    description:
      "Multiple locations opened within brand timeline requirements, achieving perfect compliance with corporate design standards and successful corporate inspections on first attempt. Each location maintained the distinctive Crumbl Cookies experience while optimizing for its specific NYC environment.",
  },
] as const;

export function PreConstructionFeaturedStory() {
  return (
    <section
      aria-labelledby="pre-construction-featured-story-title"
      className="relative overflow-hidden border-y border-divider bg-surface"
    >
      <div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1500px] items-center gap-12 px-0 py-16 md:w-[calc(100%_-_96px)] md:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-[70px] lg:py-[112px] xl:gap-[84px] xl:py-[140px]">
        <div className="flex min-w-0 items-center justify-center lg:justify-start">
          <Image
            alt="Crumbl Cookies storefront and cookie display"
            className="h-auto w-full max-w-[650px] object-contain"
            height={1442}
            priority={false}
            sizes="(max-width: 1023px) min(650px, calc(100vw - 48px)), (max-width: 1279px) 45vw, 650px"
            src="/images/services/pre-construction/featured-franchise-story.webp"
            width={1302}
          />
        </div>

        <div className="min-w-0">
          <h2
            className="m-0 max-w-[720px] font-headline text-[clamp(48px,7vw,72px)] leading-[0.94] font-normal tracking-[-0.04em] text-ink"
            id="pre-construction-featured-story-title"
          >
            Featured Franchise
            <br />
            Success Story
          </h2>
          <div aria-hidden="true" className="mt-5 h-[8px] w-[116px] bg-brand" />
          <h3 className="mt-4 mb-0 font-headline text-[clamp(30px,4vw,40px)] leading-[1.1] font-normal text-ink">
            Crumbl Cookies
          </h3>
          <p className="mt-1 mb-0 font-body text-[17px] leading-[1.25] font-medium text-ink">
            Multiple NYC Locations
          </p>

          <div className="mt-7">
            {storyPoints.map((point) => (
              <article
                className="grid min-w-0 grid-cols-[64px_minmax(0,1fr)] gap-5 border-b border-divider py-5 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[72px_minmax(0,1fr)] md:gap-7"
                key={point.title}
              >
                <div className="flex w-full items-start justify-center pt-0.5">
                  <Image
                    alt={point.iconAlt}
                    className="h-auto w-[60px] object-contain md:w-[72px]"
                    height={85}
                    src={point.icon}
                    unoptimized
                    width={85}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 font-headline text-[clamp(24px,3vw,28px)] leading-[1.1] font-normal text-ink">
                    {point.title}
                  </h4>
                  <p className="mt-3 mb-0 max-w-[680px] break-words font-body text-[15px] leading-[1.23] font-normal text-ink md:text-[16px]">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
