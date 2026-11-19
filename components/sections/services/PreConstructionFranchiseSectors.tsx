import Image from "next/image";

type FranchiseSector = Readonly<{
  image: string;
  imageAlt: string;
  description: string;
}>;

const franchiseSectors: readonly FranchiseSector[] = [
  {
    image: "/images/services/pre-construction/franchise-sectors/restaurants.webp",
    imageAlt: "Restaurant dining room with indoor and outdoor seating",
    description: "Quick-service restaurants, cafes, bakeries, and specialty food establishments",
  },
  {
    image: "/images/services/pre-construction/franchise-sectors/fitness.webp",
    imageAlt: "Bright fitness studio with rows of treadmills",
    description: "Gyms, wellness centers, fitness studios, and sports facilities",
  },
  {
    image: "/images/services/pre-construction/franchise-sectors/specialty-retail.webp",
    imageAlt: "Specialty retail store interior with displays and shelving",
    description: "Specialty stores, service providers, showrooms, and branded merchandise outlets",
  },
  {
    image: "/images/services/pre-construction/franchise-sectors/professional-services.webp",
    imageAlt: "Bright professional services office interior",
    description: "Salons, spas, business service centers, and professional service providers",
  },
] as const;

export function PreConstructionFranchiseSectors() {
  return (
    <section
      aria-labelledby="pre-construction-franchise-sectors-title"
      className="relative overflow-hidden border-y border-divider bg-surface"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1900px] px-0 py-16 md:w-[calc(100%_-_96px)] md:py-20 lg:py-[93px]">
        <header className="mx-auto max-w-[1260px] text-center">
          <h2
            className="m-0 font-headline text-[clamp(48px,6vw,80px)] leading-[0.98] font-normal tracking-[-0.04em] text-ink"
            id="pre-construction-franchise-sectors-title"
          >
            Franchise Sectors We Serve
          </h2>
          <p className="mx-auto mt-5 mb-0 max-w-[1120px] font-body text-[clamp(17px,2vw,22px)] leading-[1.25] font-normal text-ink">
            Our franchise construction expertise spans multiple industry sectors, each with its own specific requirements and challenges. We understand the unique needs of different franchise types and tailor our approach accordingly.
          </p>
          <div aria-hidden="true" className="mx-auto mt-6 h-[8px] w-[258px] bg-brand" />
          <h3 className="mt-5 mb-0 font-headline text-[clamp(27px,3vw,34px)] leading-[1.1] font-normal text-ink">
            Our experience includes
          </h3>
        </header>

        <div className="mt-14 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-4 lg:gap-x-8 xl:gap-x-10">
          {franchiseSectors.map((sector) => (
            <article className="min-w-0" key={sector.description}>
              <Image
                alt={sector.imageAlt}
                className="aspect-square w-full rounded-[12px] object-cover"
                height={710}
                sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 60px), (max-width: 1535px) 22vw, 420px"
                src={sector.image}
                width={710}
              />
              <p className="mt-6 mb-0 max-w-[420px] font-body text-[clamp(17px,1.5vw,21px)] leading-[1.16] font-normal text-ink">
                {sector.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[900px] text-center md:mt-[76px]">
          <div aria-hidden="true" className="mx-auto h-[8px] w-[258px] bg-brand" />
          <p className="mt-6 mb-0 font-body text-[clamp(17px,2vw,22px)] leading-[1.25] font-normal text-ink">
            Each sector requires specific knowledge of equipment, layout, and customer flow, which we incorporate into our construction planning and execution.
          </p>
        </div>
      </div>
    </section>
  );
}
