import styles from "./GroundUpStrategy.module.css";

export function GroundUpStrategy() {
  return (
    <section aria-labelledby="ground-up-strategy-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto flex max-w-3xl flex-col px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2 id="ground-up-strategy-title" className="m-0 max-w-3xl font-headline text-[clamp(44px,10vw,72px)] leading-[0.98] font-normal tracking-[-0.03em] text-ink">
          More Than Building<br />We&apos;re Your Strategic Partner
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 font-body text-[20px] leading-[1.23] text-ink">
          <p className="m-0">In New York City, a successful ground-up project is a symphony of precise planning, relentless execution, and navigating a maze of regulations. JC Construction Management is the conductor. We don&apos;t just pour concrete and erect steel; we provide end-to-end strategic management, de-risking your investment and ensuring your project is delivered on time, on budget, and to the highest quality standards.</p>
          <p className="m-0">Our integrated approach covers every critical phase, each managed with expert attention to detail.</p>
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[561px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="ground-up-strategy-title-desktop" className="absolute top-[124px] left-[197px] m-0 w-[1650px] font-headline text-[72px] leading-[80px] font-normal tracking-[-0.03em] text-ink">
          More Than Building<br />We&apos;re Your Strategic Partner
        </h2>
        <div className="absolute top-[314px] left-[197px] w-[1298px] font-body text-[20px] leading-[1.23] text-ink">
          <p className="m-0">In New York City, a successful ground-up project is a symphony of precise planning, relentless execution, and navigating a maze of regulations. JC Construction Management is the conductor. We don&apos;t just pour concrete and erect steel; we provide end-to-end strategic management, de-risking your investment and ensuring your project is delivered on time, on budget, and to the highest quality standards.</p>
          <p className="mt-6 mb-0">Our integrated approach covers every critical phase, each managed with expert attention to detail.</p>
        </div>
      </div>
    </section>
  );
}
