import { stegaClean } from "@sanity/client/stega";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { CaseStudyChallenges } from "@/components/portfolio/CaseStudyChallenges";
import { CaseStudyInfoCards } from "@/components/portfolio/CaseStudyInfoCards";
import { CaseStudyMetrics } from "@/components/portfolio/CaseStudyMetrics";
import { CaseStudyPhases } from "@/components/portfolio/CaseStudyPhases";
import { CaseStudyResults } from "@/components/portfolio/CaseStudyResults";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { getProjectBySlug } from "@/sanity/lib/data";
import { getImageMetadata, urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

type Project = NonNullable<Awaited<ReturnType<typeof getProjectBySlug>>>;
type ProjectImage = Project["heroImage"];

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatProjectSize(project: Project) {
  if (project.projectSize == null) return "—";

  const size = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  }).format(project.projectSize);

  const unit = stegaClean(project.sizeUnit);
  return `${size}${unit === "sq-m" ? " m²" : unit === "sq-ft" ? " SF" : ""}`;
}

function formatDuration(project: Project) {
  const duration = project.constructionDuration;
  if (!duration?.value || !duration.unit) return "—";

  const cleanUnit = stegaClean(duration.unit);
  const unit = duration.value === 1 ? cleanUnit.slice(0, -1) : cleanUnit;
  return `${duration.value} ${unit[0].toUpperCase()}${unit.slice(1)}`;
}

function CaseStudyImage({
  image,
  priority = false,
  sizes,
  width,
}: {
  image: ProjectImage;
  priority?: boolean;
  sizes: string;
  width: number;
}) {
  const metadata = getImageMetadata(image.image);

  return (
    <Image
      alt={image.alt || "Project photograph"}
      className="object-cover"
      fill
      placeholder={metadata?.blurDataURL ? "blur" : "empty"}
      blurDataURL={metadata?.blurDataURL}
      priority={priority}
      sizes={sizes}
      src={urlForImage(image.image).width(width).quality(85).url()}
    />
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  const title = stegaClean(project.seo.title || project.title);
  const description = stegaClean(project.seo.description || project.shortExcerpt);
  const socialImageSource = project.seo.social.image?.asset
    ? project.seo.social.image
    : project.heroImage.image;
  const socialImage = socialImageSource?.asset
    ? urlForImage(socialImageSource).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: stegaClean(project.seo.canonicalUrl) || `/portfolio/${slug}` },
    robots: project.seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: stegaClean(project.seo.social.title || title),
      description: stegaClean(project.seo.social.description || description),
      images: socialImage ? [{ url: socialImage, alt: project.heroImage.alt }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const mainImage = project.heroImage.image.asset
    ? project.heroImage
    : project.cardImage;
  const sideImages = [project.heroSideImageOne, project.heroSideImageTwo].filter(
    (image): image is NonNullable<typeof image> => Boolean(image?.image?.asset),
  );
  const facts = [
    { label: "Client", value: project.client.name },
    { label: "Location", value: project.location.displayLocation },
    { label: "Project Size", value: formatProjectSize(project) },
    { label: "Duration", value: formatDuration(project) },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="relative bg-surface text-ink">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[31px] hidden w-px bg-divider/70 md:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[31px] hidden w-px bg-divider/70 md:block"
        />

        <section
          aria-labelledby="case-study-title"
          className="border-b border-divider"
        >
          <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1675px] py-20 md:w-[calc(100%_-_120px)] lg:grid lg:min-h-[590px] lg:w-[87.2395833333%] lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)] lg:items-start lg:gap-x-[70px] lg:py-0 min-[1700px]:grid-cols-[720px_550px] min-[1700px]:justify-between min-[1700px]:gap-0 min-[1700px]:pr-[74px]">
            <div className="lg:pt-[173px]">
              <p className="m-0 font-headline text-lg leading-8 font-normal md:text-[20px]">
                {project.primaryCategory?.title || "Project"}
              </p>
              <h1
                className="mt-3 mb-0 max-w-[720px] font-headline text-[clamp(45px,8vw,73px)] leading-[1.095] font-normal"
                id="case-study-title"
              >
                {project.title}
              </h1>
              <div aria-hidden="true" className="mt-6 h-1 w-[126px] bg-brand" />
              <p className="mt-4 mb-0 max-w-[720px] font-headline text-[clamp(22px,3vw,32px)] leading-[1.25] font-normal">
                {project.projectType}
              </p>
            </div>

            <p className="mt-12 mb-0 max-w-[550px] font-body text-[clamp(22px,3vw,32px)] leading-[1.25] font-light lg:mt-0 lg:pt-[232px]">
              {project.shortExcerpt}
            </p>
          </div>
        </section>

        <section aria-label={`${project.title} photographs`} className="border-b border-divider">
          <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1675px] py-12 md:w-[calc(100%_-_120px)] lg:w-[87.2395833333%] lg:py-[74px] lg:pb-[82px]">
            <div
              className={
                sideImages.length
                  ? "grid gap-5 lg:grid-cols-[minmax(0,1069fr)_minmax(0,511fr)] lg:gap-[31px]"
                  : "grid"
              }
            >
              <div className="relative aspect-[1069/676] overflow-hidden rounded-card">
                <CaseStudyImage
                  image={mainImage}
                  priority
                  sizes={sideImages.length ? "(min-width: 1024px) 67vw, 100vw" : "100vw"}
                  width={2000}
                />
              </div>
              {sideImages.length > 0 && (
                <div
                  className={
                    sideImages.length === 1
                      ? "grid gap-5 lg:min-h-0 lg:grid-rows-1"
                      : "grid grid-cols-2 gap-5 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-2 lg:gap-[33px]"
                  }
                >
                  {sideImages.map((image) => (
                    <div
                      className="relative aspect-[511/321] overflow-hidden rounded-card lg:aspect-auto lg:min-h-0"
                      key={image.image.asset?._id || image.alt}
                    >
                      <CaseStudyImage
                        image={image}
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        width={1000}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section aria-label="Project facts" className="border-b border-divider">
          <dl className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1675px] grid-cols-2 border-r border-divider md:w-[calc(100%_-_120px)] lg:min-h-[213px] lg:w-[87.2395833333%] lg:grid-cols-4">
            {facts.map((fact) => (
              <div
                className="flex min-h-[154px] flex-col items-center justify-center border-l border-divider px-4 py-8 text-center lg:min-h-0 lg:py-6"
                key={fact.label}
              >
                <dt className="font-body text-[16px] leading-[1.3] font-light text-muted uppercase md:text-[20px]">
                  {fact.label}
                </dt>
                <dd className="mt-3 mb-0 max-w-[340px] font-body text-[18px] leading-[1.12] font-light md:text-[24px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {project.overview?.length > 0 && (
          <section
            aria-labelledby="project-overview-title"
            className="relative border-b border-divider"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[33.85%] hidden w-px bg-divider/70 lg:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[66.15%] hidden w-px bg-divider/70 lg:block"
            />
            <div className="relative z-10 mx-auto w-[calc(100%_-_48px)] max-w-[1700px] px-4 py-14 md:w-[calc(100%_-_120px)] md:px-8 lg:min-h-[466px] lg:px-[64px] lg:pt-[70px] lg:pb-[100px]">
              <h2
                className="m-0 font-headline text-[clamp(44px,7vw,72px)] leading-[1.24] font-normal"
                id="project-overview-title"
              >
                {project.overviewHeading || "Project Overview"}
              </h2>
              <div className="mt-[23px] max-w-[1418px] font-body text-[18px] leading-[1.23] font-normal text-ink-strong md:text-[20px] [&_p]:m-0">
                <PortableText value={project.overview} />
              </div>
            </div>
          </section>
        )}

        <CaseStudyInfoCards project={project} />
        <CaseStudyChallenges project={project} />
        <CaseStudyPhases project={project} />
        <CaseStudyResults project={project} />
        <CaseStudyMetrics project={project} />
        <Portfolio />
        <PortfolioContact />
      </main>
      <Footer />
    </>
  );
}
