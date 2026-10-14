import Image from "next/image";

import styles from "./ResidentialDifference.module.css";

const differences = [
  {
    icon: "/icons/services/difference/building-exp.svg",
    title: "NYC Building Expertise",
    description: "We are specialists in the rules and nuances of NYC co-ops, condos, and historic districts.",
    alt: "NYC building expertise icon",
  },
  {
    icon: "/icons/services/difference/network.svg",
    title: "Vetted Trade Network",
    description: "We work with a trusted team of top-tier electricians, plumbers, and artisans, ensuring quality in every trade.",
    alt: "Vetted trade network icon",
  },
  {
    icon: "/icons/services/difference/management.svg",
    title: "Dust and Debris Management",
    description: "We implement rigorous containment protocols because we believe a renovation shouldn’t wreck your entire home.",
    alt: "Dust and debris management icon",
  },
  {
    icon: "/icons/services/difference/agreement.svg",
    title: "Fixed-Price Agreements",
    description: "We stand by our detailed estimates. The price we quote is the price you pay, barring any changes you initiate.",
    alt: "Fixed-price agreement icon",
  },
] as const;

export function ResidentialDifference() {
  return (
    <section aria-labelledby="residential-difference-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2 id="residential-difference-title" className="m-0 text-center font-headline text-[clamp(44px,9vw,72px)] leading-[1] font-normal tracking-[-0.03em] text-ink">
          The JCCM Difference in Residential Renovation
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {differences.map((difference) => (
            <article className="flex min-h-[300px] flex-col items-center rounded-card bg-white px-6 py-7 text-center" key={difference.title}>
              <Image alt={difference.alt} height={107} src={difference.icon} unoptimized width={106} />
              <h3 className="mt-2 max-w-[270px] font-headline text-[28px] leading-[1.1] font-medium text-brand">{difference.title}</h3>
              <p className="mt-3 mb-0 max-w-[280px] font-body text-base leading-[1.35] text-ink">{difference.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[700px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="residential-difference-title-desktop" className="absolute top-[70px] left-[520px] m-0 w-[880px] text-center font-headline text-[72px] leading-[72px] font-normal tracking-[-0.03em] text-ink">
          The JCCM Difference in<br />Residential Renovation
        </h2>
        <div className="absolute top-[245px] left-[205px] flex gap-[30px]">
          {differences.map((difference) => (
            <article className="flex h-[306px] w-[330px] flex-col items-center rounded-card bg-white px-5 pt-[34px] text-center" key={difference.title}>
              <Image alt={difference.alt} height={107} src={difference.icon} unoptimized width={106} />
              <h3 className="mt-1 max-w-[295px] font-headline text-[28px] leading-[31px] font-medium text-brand">{difference.title}</h3>
              <p className="mt-[13px] mb-0 max-w-[290px] font-body text-[16px] leading-[1.35] text-ink">{difference.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
