const principles = [
  {
    title: "Our Mission",
    description:
      "To deliver exceptional construction and consulting services by combining expert management, cutting-edge technology, and impeccable craftsmanship. We are dedicated to transforming our clients' visions into reality, on time and on budget, while navigating the unique challenges of the New York City landscape.",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted and respected general construction firm in New York City, recognized for setting the standard in quality, transparency, and client satisfaction.",
  },
] as const;

export function AboutMission() {
  return (
    <section
      aria-labelledby="about-mission-title"
      className="relative mx-auto w-full border-b border-divider bg-surface min-[1024px]:w-[87.2%] min-[1024px]:max-w-[1675px]"
    >
      <div className="grid gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-0 lg:py-24">
        <div>
          <h2
            className="m-0 max-w-[540px] font-headline text-[clamp(44px,5vw,60px)] leading-[1.02] font-normal tracking-[-0.03em] text-ink"
            id="about-mission-title"
          >
            Our Mission and Vision
          </h2>
          <span aria-hidden="true" className="mt-7 block h-1 w-24 bg-brand" />
        </div>

        <div className="lg:border-l lg:border-divider/70 lg:pl-16">
          {principles.map((principle, index) => (
            <div
              className={index === 0 ? "pb-8" : "border-t border-divider/70 pt-8"}
              key={principle.title}
            >
              <h3 className="m-0 font-body text-[14px] leading-[1.2] font-semibold tracking-[0.14em] text-brand uppercase">
                {principle.title}
              </h3>
              <p className="mt-4 mb-0 max-w-[760px] font-body text-[17px] leading-[1.5] text-ink-strong md:text-[18px]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
