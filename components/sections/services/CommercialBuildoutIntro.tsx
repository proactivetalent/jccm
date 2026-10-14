import styles from "./CommercialBuildoutIntro.module.css";

export function CommercialBuildoutIntro() {
  return (
    <section aria-labelledby="commercial-buildout-intro-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2 id="commercial-buildout-intro-title" className="m-0 font-headline text-[clamp(48px,10vw,72px)] leading-none font-normal tracking-[-0.03em] text-ink">Introduction</h2>
        <div className="mt-7 font-body text-[18px] leading-[1.28] text-ink">
          <p className="m-0 font-medium">Your Business Space, Optimized for Performance</p>
          <p className="mt-1.5 mb-0">A commercial build-out in New York City demands precision, compliance, and minimal disruption to your operations. JC Construction Management delivers turnkey commercial construction solutions that align with your brand, budget, and timeline requirements. We handle the complete process—from initial space planning and permits to final inspections—ensuring your new commercial space supports your business objectives from day one.</p>
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[390px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="commercial-buildout-intro-title-desktop" className="absolute top-[78px] left-[190px] m-0 font-headline text-[64px] leading-[1.1] font-normal tracking-[-0.03em] text-ink">Introduction</h2>
        <div className="absolute top-[168px] left-[190px] w-[1370px] font-body text-[20px] leading-[1.23] text-ink">
          <p className="m-0 font-medium">Your Business Space, Optimized for Performance</p>
          <p className="mt-2 mb-0">A commercial build-out in New York City demands precision, compliance, and minimal disruption to your operations. JC Construction Management delivers turnkey commercial construction solutions that align with your brand, budget, and timeline requirements. We handle the complete process—from initial space planning and permits to final inspections—ensuring your new commercial space supports your business objectives from day one.</p>
        </div>
      </div>
    </section>
  );
}
