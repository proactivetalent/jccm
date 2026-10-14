import styles from "./ResidentialRenovationIntro.module.css";

export function ResidentialRenovationIntro() {
  return (
    <section aria-labelledby="residential-renovation-intro-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2 id="residential-renovation-intro-title" className="m-0 font-headline text-[clamp(48px,10vw,72px)] leading-none font-normal tracking-[-0.03em] text-ink">
          Introduction
        </h2>
        <div className="mt-7 font-body text-[18px] leading-[1.28] text-ink">
          <p className="m-0 font-medium">Your Vision, Executed with Precision and Care</p>
          <p className="mt-1.5 mb-0">Renovations and build-outs come with their own set of challenges. Tight schedules, building requirements, material deliveries, multiple trades, inspections, and changing site conditions can quickly become overwhelming without the right team managing the details. It requires careful planning, reliable coordination, and experienced project management.</p>
          <p className="mt-6 mb-0">JC Construction Management provides hands-on, full-service construction management for residential and commercial renovations and build-outs. We coordinate the people, materials, schedules, and site logistics needed to keep your project moving forward while maintaining the quality and standards your space demands.</p>
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[390px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="residential-renovation-intro-title-desktop" className="absolute top-[78px] left-[190px] m-0 font-headline text-[64px] leading-[1.1] font-normal tracking-[-0.03em] text-ink">
          Introduction
        </h2>
        <div className="absolute top-[168px] left-[190px] w-[1300px] font-body text-[16px] leading-[1.23] text-ink">
          <p className="m-0 font-medium">Your Vision, Executed with Precision and Care</p>
          <p className="mt-1 mb-0">Renovating your home in New York City is an exciting journey, but it comes with unique logistical challenges. Coordinating deliveries in a high-rise, working within tight building hours, and managing a team of specialized trades, requires a level of precision and experience that goes beyond standard construction.</p>
          <p className="mt-5 mb-0">JC Construction Management is your trusted partner on the ground. We provide hands-on, full-service management that removes the day-to-day stress, guiding you through a smooth process with clear timelines and budgets. We handle the complexities of the build, so you can focus on the exciting part: watching your dream home come to life.</p>
        </div>
      </div>
    </section>
  );
}
