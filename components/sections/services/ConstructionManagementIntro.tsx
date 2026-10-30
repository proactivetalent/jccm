export function ConstructionManagementIntro() {
  return (
    <section
      aria-labelledby="construction-management-intro-title"
      className="relative overflow-hidden bg-surface min-[1024px]:max-[1535px]:h-[29.21875vw] min-[1536px]:h-[448.8px]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-divider"
      />

      <div className="mx-auto flex max-w-3xl flex-col px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2
          className="m-0 max-w-3xl font-headline text-[clamp(44px,10vw,72px)] leading-[0.98] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-intro-title"
        >
          Introduction
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 font-body text-[20px] leading-[1.23] text-ink">
          <p className="m-0 font-medium">Your Project, Managed With Precision</p>
          <p className="m-0">
            Successful construction requires more than getting the work done. It requires experienced management, clear communication, reliable coordination, and proactive decision-making at every stage of the project. JC Construction Management provides hands-on construction management that keeps owners, architects, engineers, subcontractors, and suppliers working toward the same goal.
          </p>
          <p className="m-0">
            With JCCM managing the construction process, you have an experienced partner on the ground protecting your interests and keeping your project moving.
          </p>
        </div>
      </div>

      <div className="absolute top-0 hidden h-[561px] w-[1920px] origin-top-left min-[1024px]:block min-[1024px]:max-[1535px]:left-0 min-[1024px]:max-[1535px]:[scale:calc(100vw_/_1920px)] min-[1024px]:max-[1535px]:[translate:none] min-[1536px]:left-[calc(50%_-_768px)] min-[1536px]:[scale:0.8] min-[1536px]:[translate:none]">
        <h2
          className="absolute top-[124px] left-[197px] m-0 w-[1650px] font-headline text-[72px] leading-[80px] font-normal tracking-[-0.03em] text-ink"
          id="construction-management-intro-title-desktop"
        >
          Introduction
        </h2>
        <div className="absolute top-[234px] left-[197px] w-[1298px] font-body text-[20px] leading-[1.23] text-ink">
          <p className="m-0 font-medium">Your Project, Managed With Precision</p>
          <p className="mt-2 mb-0">
            Successful construction requires more than getting the work done. It requires experienced management, clear communication, reliable coordination, and proactive decision-making at every stage of the project. JC Construction Management provides hands-on construction management that keeps owners, architects, engineers, subcontractors, and suppliers working toward the same goal.
          </p>
          <p className="mt-5 mb-0">
            With JCCM managing the construction process, you have an experienced partner on the ground protecting your interests and keeping your project moving.
          </p>
        </div>
      </div>
    </section>
  );
}
