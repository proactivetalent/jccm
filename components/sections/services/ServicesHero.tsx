import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./ServicesHero.module.css";

type ServicesHeroCtaProps = Readonly<{
  href: string;
  label: string;
  widthClass: string;
}>;

export type ServiceHeroConfig = Readonly<{
  title: ReactNode;
  tagline: ReactNode;
  description: ReactNode;
  ctas: readonly ServicesHeroCtaProps[];
  ariaLabel?: string;
  titleDesktopTop?: string;
  titleDesktopClassName?: string;
  underlineDesktopTop?: string;
  taglineDesktopTop?: string;
  ctasDesktopTop?: string;
  descriptionDesktopTop?: string;
  headingId?: string;
}>;

function ServicesHeroCta({ href, label, widthClass }: ServicesHeroCtaProps) {
  return (
    <Link
      className={`group relative box-border flex min-h-14 w-full items-center border border-brand bg-brand pr-5 pl-[65px] font-body text-[19.646px] leading-[19.646px] font-normal text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:w-auto lg:block lg:h-14 lg:min-h-0 lg:p-0 ${widthClass}`}
      href={href}
    >
      <span aria-hidden="true" className="absolute top-1.5 left-1.5 h-[44.204px] w-[44.204px] bg-[url('/icons/home/cta-arrow.png')] bg-contain bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:rotate-45" />
      <span className="lg:absolute lg:top-[17px] lg:left-[65px] lg:whitespace-nowrap">{label}</span>
    </Link>
  );
}

const servicesHeroConfig: ServiceHeroConfig = {
  title: "Our Services",
  tagline: "We Don’t Just Build, We Deliver Certainty",
  description: "JC Construction Management has been a cornerstone of New York City's construction landscape. We put your vision and needs first.",
  ctas: [
    { href: "/portfolio", label: "View our Portfolio", widthClass: "lg:w-[277px]" },
    { href: "/contact", label: "Discuss your Projects", widthClass: "lg:w-[300px]" },
  ],
};

export function ServiceHero({ config = servicesHeroConfig }: Readonly<{ config?: ServiceHeroConfig }>) {
  const {
    title,
    tagline,
    description,
    ctas,
    titleDesktopTop = "top-[174px]",
    titleDesktopClassName = "h-[90px] w-[573px] whitespace-nowrap",
    underlineDesktopTop = "top-[282px]",
    taglineDesktopTop = "top-[302px]",
    ctasDesktopTop = "top-[385px]",
    descriptionDesktopTop = "top-[201px]",
    headingId = "services-hero-title",
    ariaLabel = "Services overview",
  } = config;

  return (
    <section aria-label={ariaLabel} className={`relative overflow-hidden bg-surface lg:h-[502.4px] ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] hidden h-px bg-divider lg:block" />

      <div className="relative mx-auto box-border flex max-w-[760px] flex-col px-6 pt-16 pb-20 md:px-10 md:pt-20 md:pb-24 lg:hidden">
        <h1 className="m-0 font-headline text-[clamp(56px,13vw,80px)] leading-[0.94] font-light tracking-[-0.03em] text-ink" id={headingId}>{title}</h1>
        <span aria-hidden="true" className="mt-7 block h-1 w-[104px] bg-brand" />
        <p className="mt-5 mb-0 font-headline text-[clamp(25px,5.5vw,32px)] leading-[1.2] font-normal text-ink">{tagline}</p>
        <p className="mt-10 mb-0 font-body text-[clamp(22px,5vw,28px)] leading-[1.28] font-light text-ink">{description}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">{ctas.map((cta) => <ServicesHeroCta key={`${cta.href}-${cta.label}`} {...cta} />)}</div>
      </div>

      <div className={`absolute top-0 hidden h-[628px] w-[1920px] lg:block ${styles.canvas}`}>
        <h1 className={`absolute ${titleDesktopTop} left-[150px] m-0 font-headline text-[96px] leading-[89.297px] font-light text-ink ${titleDesktopClassName}`} id={`${headingId}-desktop`}>{title}</h1>
        <span aria-hidden="true" className={`absolute ${underlineDesktopTop} left-[156px] h-1 w-[126px] bg-brand`} />
        <p className={`absolute ${taglineDesktopTop} left-[150px] m-0 h-10 w-[606px] font-headline text-[32px] leading-10 font-normal text-ink`}>{tagline}</p>
        <div className={`absolute ${ctasDesktopTop} left-[153px] flex gap-[17px]`}>{ctas.map((cta) => <ServicesHeroCta key={`${cta.href}-${cta.label}-desktop`} {...cta} />)}</div>
        <p className={`absolute ${descriptionDesktopTop} left-[1100px] m-0 h-[202px] w-[542px] font-body text-[32px] leading-10 font-light text-ink`}>{description}</p>
      </div>
    </section>
  );
}

export function ServicesHero() {
  return <ServiceHero />;
}
