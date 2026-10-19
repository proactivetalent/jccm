import Link from "next/link";
import Image from "next/image";

function AboutHeroCta() {
  return (
    <Link
      className="group relative box-border flex min-h-14 w-full items-center border border-brand bg-brand pr-5 pl-[65px] font-body text-[19.646px] leading-[19.646px] font-normal text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-[277px] lg:absolute lg:top-[307px] lg:left-[121px] lg:block lg:h-[44.8px] lg:min-h-0 lg:w-[221.6px] lg:p-0 lg:text-[15.7168px] lg:leading-[15.7168px]"
      href="/contact"
    >
      <span
        aria-hidden="true"
        className="absolute top-[4.8px] left-[4.8px] h-[35.36px] w-[35.36px] bg-[url('/icons/home/cta-arrow.png')] bg-contain bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:rotate-45 lg:top-[4.8px] lg:left-[4.8px] lg:h-[35.36px] lg:w-[35.36px]"
      />
      <span className="lg:absolute lg:top-[13.6px] lg:left-[52px] lg:whitespace-nowrap">
        Get a Custom Quote
      </span>
    </Link>
  );
}

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden bg-surface min-[1024px]:h-[32.708333vw] min-[1536px]:h-[502.4px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden min-[1024px]:block">
        <Image
          alt=""
          className="absolute top-0 left-7 h-[1004.8px] w-[calc(100%-56px)] max-w-none object-fill"
          height="1256"
          src="/images/about/hero-dividers.svg"
          unoptimized
          width="1863"
        />
        <span className="absolute right-0 bottom-0 left-0 h-px bg-divider/60" />
      </div>

      <div className="relative mx-auto box-border flex max-w-[760px] flex-col px-6 pt-16 pb-20 lg:hidden md:px-10 md:pt-20 md:pb-24">
        <h1
          className="m-0 font-headline text-[clamp(56px,13vw,80px)] leading-[0.94] font-light tracking-[-0.03em] text-ink"
          id="about-hero-title"
        >
          About Us
        </h1>
        <span aria-hidden="true" className="mt-7 block h-1 w-[104px] bg-brand" />
        <p className="mt-5 mb-0 font-headline text-[clamp(25px,5.5vw,32px)] leading-[1.2] font-normal text-ink">
          JC Construction Management
        </p>
        <p className="mt-10 mb-0 font-body text-[clamp(22px,5vw,28px)] leading-[1.28] font-light text-ink">
          Building on a Foundation of Excellence, Integrity, and New York City Expertise.
        </p>
        <div className="relative mt-10">
          <AboutHeroCta />
        </div>
      </div>

      <div className="absolute inset-0 hidden min-[1024px]:block">
        <div className="relative mx-auto h-full w-full max-w-[1536px]">
          <h1
            className="absolute top-[147px] left-[118px] m-0 h-[72px] w-[495px] whitespace-nowrap font-headline text-[76.8px] leading-[71.438px] font-light text-ink"
            id="about-hero-title-desktop"
          >
            About Us
          </h1>
          <span aria-hidden="true" className="absolute top-[240px] left-[125px] h-[3.2px] w-[100.8px] bg-brand" />
          <p className="absolute top-[263px] left-[120px] m-0 h-8 w-[400px] font-headline text-[25.6px] leading-8 font-normal text-ink">
            JC Construction Management
          </p>
          <AboutHeroCta />
          <p className="absolute top-[165px] left-[843px] m-0 h-[105px] w-[434px] font-body text-[25.6px] leading-8 font-light text-ink">
            Building on a Foundation of Excellence, Integrity, and New York City Expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
