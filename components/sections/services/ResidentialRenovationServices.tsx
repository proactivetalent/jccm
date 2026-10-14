import Image from "next/image";
import Link from "next/link";

import styles from "./ResidentialRenovationServices.module.css";

const services = [
  {
    title: "Residential Renovations",
    description: "Transform apartments, condos, townhouses, and brownstones with thoughtful planning, quality craftsmanship, and careful management of your home and building requirements.",
    image: "/images/services/ren-services/residential-renovation.avif",
  },
  {
    title: "Commercial & Retail Build-Outs",
    description: "Create functional, customer-ready environments that support your business operations, brand identity, and customer experience. Our team manages the complete build-out process from preparation through final completion.",
    image: "/images/services/ren-services/commercial.avif",
  },
  {
    title: "Franchise Build-Outs",
    description: "Deliver turnkey franchise locations that follow corporate design specifications, approved materials, and brand standards, creating consistency across every location.",
    image: "/images/services/ren-services/franchise.avif",
  },
  {
    title: "Interior Renovations",
    description: "Reconfigure and modernize existing interiors through new layouts, finishes, fixtures, millwork, lighting, flooring, and complete interior upgrades. ",
    image: "/images/services/ren-services/interior.avif",
  },
  {
    title: "Custom Milwork & Finishes",
    description: "Add character and functionality to your space with custom cabinetry, built-ins, reception areas, shelving, closets, and other detailed finish work.",
    image: "/images/services/ren-services/milwork.avif",
  },
  {
    title: "Building & Site Upgrades",
    description: "Coordinate improvements involving flooring, lighting, plumbing, electrical systems, fixtures, finishes, and other upgrades required to bring an existing space up to modern standards.",
    image: "/images/services/ren-services/building.avif",
  },
] as const;

function ServiceRow({ service }: { service: (typeof services)[number] }) {
  return (
    <Link className="group relative block overflow-hidden rounded-card bg-divider/20 text-ink no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand" href="/contact">
      <Image alt="" className="absolute inset-0 object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none" fill sizes="(max-width: 1023px) 100vw, 1640px" src={service.image} unoptimized />
      <div className="absolute inset-0 bg-gradient-to-r from-[#DAEAE8] via-[#DAEAE8]/90 to-[#DAEAE8]/10 transition-opacity duration-500 group-hover:opacity-85 motion-reduce:transition-none" />
      <div className="relative flex min-h-[164px] items-center justify-between gap-8 px-7 py-7 lg:px-[70px]">
        <div className="max-w-[850px]">
          <h3 className="m-0 font-headline text-[clamp(28px,4vw,38px)] leading-[1.06] font-normal tracking-[-0.02em]">{service.title}</h3>
          <p className="mt-2 mb-0 max-w-[780px] font-body text-[clamp(16px,2vw,20px)] leading-[1.2] font-normal">{service.description}</p>
        </div>
        <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-md bg-ink/50 text-white transition-colors duration-300 group-hover:bg-brand group-focus-visible:bg-brand motion-reduce:transition-none lg:size-[86px]">
          <span className="text-[42px] leading-none font-light transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">↗</span>
        </span>
      </div>
    </Link>
  );
}

export function ResidentialRenovationServices() {
  return (
    <section aria-labelledby="renovation-services-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <div className="flex flex-col gap-5">
          <h2 id="renovation-services-title" className="m-0 font-headline text-[clamp(48px,10vw,72px)] leading-none font-normal tracking-[-0.03em] text-ink">Our Renovation Services</h2>
          <p className="m-0 max-w-md font-body text-base leading-[1.23] font-medium text-ink">We specialize in managing projects that transform existing spaces into functional, finished environments. </p>
        </div>
        <div className="mt-10 flex flex-col gap-4">{services.map((service) => <ServiceRow key={service.title} service={service} />)}</div>
      </div>

      <div className={`absolute top-0 hidden h-[1500px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="renovation-services-title-desktop" className="absolute top-[94px] left-[190px] m-0 font-headline text-[72px] leading-[1.1] font-normal tracking-[-0.03em] text-ink">Our Renovation Services</h2>
        <p className="absolute top-[118px] left-[1240px] m-0 w-[430px] font-body text-[16px] leading-[1.23] font-medium text-ink">We specialize in bringing clarity and quality to a wide range of residential projects.</p>
        <div className="absolute top-[270px] left-[140px] flex w-[1640px] flex-col gap-4">{services.map((service) => <ServiceRow key={service.title} service={service} />)}</div>
      </div>
    </section>
  );
}
