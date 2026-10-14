import Image from "next/image";
import Link from "next/link";

import { ExploreLink } from "@/components/ui/ExploreLink";
import { getPortfolioProjects } from "@/sanity/lib/data";
import { getImageMetadata, urlForImage } from "@/sanity/lib/image";

import styles from "./Portfolio.module.css";

const MAX_HOMEPAGE_PROJECTS = 4;

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function visibleLocation(title: string, location: string) {
  const normalizedTitle = normalize(title);
  const normalizedLocation = normalize(location);

  return normalizedLocation && !normalizedTitle.includes(normalizedLocation)
    ? location
    : null;
}

export async function Portfolio() {
  const projects = (await getPortfolioProjects()).slice(
    0,
    MAX_HOMEPAGE_PROJECTS,
  );

  if (projects.length === 0) return null;

  return (
    <section
      aria-labelledby="home-portfolio-title"
      className={`relative overflow-x-clip border-b border-divider bg-surface lg:overflow-clip ${styles.sectionScale}`}
      id="portfolio"
    >
      <div
        className={`relative box-border flex w-full max-w-full flex-col px-5 pt-24 pb-12 md:mx-auto md:max-w-[920px] md:px-6 md:pt-24 md:pb-16 lg:absolute lg:top-0 lg:left-1/2 lg:m-0 lg:block lg:h-[994px] lg:w-[1920px] lg:max-w-none lg:origin-top lg:p-0 lg:-translate-x-1/2 ${styles.canvasScale}`}
      >
        <header className="mb-9 flex w-full flex-col items-start gap-5 md:mb-11 md:flex-row md:items-center md:justify-between lg:absolute lg:top-[98px] lg:left-[200px] lg:m-0 lg:block lg:h-[90px] lg:w-[1520px]">
          <div className="flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-baseline md:gap-x-4 md:gap-y-2 lg:contents">
            <h2
              className="m-0 font-headline text-[clamp(42px,10vw,56px)] leading-none font-normal tracking-normal text-ink lg:absolute lg:top-0 lg:left-0 lg:text-[72px]"
              id="home-portfolio-title"
            >
              Portfolio
            </h2>
            <p className="m-0 font-headline text-[clamp(14px,3.5vw,18px)] leading-[1.3] font-medium tracking-normal text-muted uppercase md:text-lg lg:absolute lg:top-[33px] lg:left-[312px] lg:text-2xl lg:leading-8 lg:whitespace-nowrap">
              Of Excellence in New York City
            </p>
          </div>

          <ExploreLink
            className="md:shrink-0 lg:absolute lg:top-[16px] lg:right-0"
            href="/portfolio"
          />
        </header>

        <div
          className={`grid w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 md:items-start md:gap-x-6 md:gap-y-12 lg:absolute lg:top-[227px] lg:left-[21px] lg:h-[670px] lg:w-[1888px] lg:gap-x-[27px] lg:gap-y-0 lg:pl-[9px] ${styles.projectsGrid}`}
        >
          {projects.map((project, index) => {
            const image = project.cardImage.image;
            const metadata = getImageMetadata(image);
            const location = visibleLocation(project.title, project.location);
            const label =
              project.services[0]?.title ?? project.primaryCategory.title;
            const imageUrl = urlForImage(image).width(1400).quality(88).url();

            return (
              <article
                className={`group/card min-w-0 ${index % 2 === 0 ? styles.tallCard : styles.shortCard}`}
                key={project._id}
              >
                <Link
                  aria-label={`View ${project.title}`}
                  className="block text-ink no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  href={`/portfolio/${project.slug}`}
                >
                  <div className="flex h-[43px] items-start gap-[15px] pt-2 font-headline text-base leading-5 font-normal tracking-normal">
                    <span>{label}</span>
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="mt-[2px] h-3.5 w-3.5 shrink-0 brightness-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-focus-within/card:translate-x-1 group-focus-within/card:-translate-y-1 motion-reduce:transition-none"
                      height={14}
                      src="/icons/home/testimonials/external-arrow.svg"
                      unoptimized
                      width={14}
                    />
                  </div>

                  <div className={`relative w-full overflow-hidden rounded-card bg-divider/20 ${styles.projectImage}`}>
                    <Image
                      alt={project.cardImage.alt}
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.025] group-focus-within/card:scale-[1.025] motion-reduce:transition-none"
                      fill
                      placeholder={metadata?.blurDataURL ? "blur" : "empty"}
                      blurDataURL={metadata?.blurDataURL}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                      src={imageUrl}
                    />
                  </div>

                  <h3 className="mt-[18px] mb-0 flex min-w-0 flex-col items-start gap-y-1 font-headline text-[clamp(24px,5.5vw,28px)] leading-[1.15] font-normal tracking-normal text-ink lg:text-[28px]">
                    <span className="w-full [overflow-wrap:anywhere]">{project.title}</span>
                    {location ? (
                      <span className="w-full text-[0.714em] leading-[1.25] [overflow-wrap:anywhere]">
                        {location}
                      </span>
                    ) : null}
                  </h3>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
