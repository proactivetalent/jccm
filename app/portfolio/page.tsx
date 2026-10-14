import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioListing } from "@/components/portfolio/PortfolioListing";
import { getPortfolioProjects, getPortfolioSettings } from "@/sanity/lib/data";
import { getImageMetadata, urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Project Case Studies",
  description:
    "Explore JC Construction Management projects across New York, from residential construction to commercial renovations and build-outs.",
};

export default async function PortfolioPage() {
  const [projects, settings] = await Promise.all([
    getPortfolioProjects(),
    getPortfolioSettings(),
  ]);

  const listingProjects = projects.map((project) => {
    const imageMetadata = getImageMetadata(project.cardImage.image);

    return {
      id: project._id,
      title: project.title,
      slug: project.slug,
      location: project.location,
      borough: project.borough,
      city: project.city,
      projectType: project.projectType,
      category: project.primaryCategory.title,
      categories: [
        project.primaryCategory.title,
        ...(project.additionalCategories ?? []).map((category) => category.title),
      ],
      service: project.services[0]?.title ?? project.primaryCategory.title,
      services: project.services.map((service) => service.title),
      excerpt: project.shortExcerpt,
      completionDate: project.completionDate,
      updatedAt: project._updatedAt,
      imageUrl: urlForImage(project.cardImage.image).width(1600).quality(85).url(),
      imageAlt: project.cardImage.alt,
      blurDataUrl: imageMetadata?.blurDataURL,
    };
  });
  const introduction =
    settings?.portfolioIntroduction?.trim() ||
    "Browse through our projects to see the full range of our capabilities, including retail storefronts, franchise locations, luxury apartments, brownstone restorations, office interiors, and more.";

  return (
    <>
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="portfolio-title"
          className="relative bg-surface min-[768px]:min-h-[576px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[31px] hidden w-px bg-divider opacity-70 min-[768px]:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-[31px] hidden w-px bg-divider opacity-70 min-[768px]:block"
          />
          <div className="mx-auto box-border w-full px-6 pt-[100px] pb-[90px] min-[768px]:grid min-[768px]:min-h-[576px] min-[768px]:w-[calc(100%_-_120px)] min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,46%)] min-[768px]:items-center min-[768px]:gap-x-[60px] min-[768px]:p-0 min-[1401px]:w-[min(calc(100%_-_280px),1640px)] min-[1401px]:grid-cols-[minmax(0,1fr)_minmax(0,638px)] min-[1401px]:gap-x-[80px]">
            <h1
              className="m-0 font-headline text-[clamp(52px,12vw,76px)] leading-[0.96] font-light tracking-[-0.035em] min-[768px]:text-[clamp(64px,6.7vw,96px)] min-[768px]:leading-[0.93] min-[1401px]:text-[96px]"
              id="portfolio-title"
            >
              Project
              <br />
              Case Studies
            </h1>
            <p className="mt-10 mb-0 max-w-[620px] font-body text-[clamp(20px,5vw,26px)] leading-[1.35] font-light tracking-[-0.025em] min-[768px]:m-0 min-[768px]:max-w-none min-[768px]:text-[clamp(23px,2.25vw,32px)] min-[768px]:leading-[1.25] min-[1401px]:text-[32px]">
              {introduction}
            </p>
          </div>
        </section>

        <PortfolioListing
          pageSize={settings?.projectsPerPage || 12}
          projects={listingProjects}
        />
        <PortfolioContact />
      </main>
      <Footer />
    </>
  );
}
