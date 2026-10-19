const missionParagraphs = [
  "Our Mission: To deliver exceptional construction and consulting services by combining expert management, cutting-edge technology, and impeccable craftsmanship. We are dedicated to transforming our clients' visions into reality, on time and on budget, while navigating the unique challenges of the New York City landscape.",
  "Our Vision: To be the most trusted and respected general construction firm in New York City, recognized for setting the standard in quality, transparency, and client satisfaction.",
] as const;

export function AboutMission() {
  return (
    <section
      aria-labelledby="about-mission-title"
      className="relative overflow-hidden bg-surface min-[1024px]:h-[379.2px]"
    >
      <div className="relative mx-auto box-border max-w-[760px] px-6 pt-16 pb-20 lg:hidden md:px-10 md:pt-20 md:pb-24">
        <h2
          className="m-0 max-w-[520px] font-headline text-[clamp(44px,9vw,58px)] leading-[1.03] font-normal tracking-[-0.03em] text-ink"
          id="about-mission-title"
        >
          Our Mission and Vision
        </h2>
        <div className="mt-10 font-body text-[16px] leading-[1.32] font-medium text-ink [&_p]:m-0 [&_p+p]:mt-6">
          {missionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      <div className="absolute inset-0 hidden min-[1024px]:block">
        <div className="relative mx-auto h-full w-full max-w-[1536px]">
          <h2
            className="absolute top-[104px] left-[158px] m-0 w-[530.4px] font-headline text-[57.6px] leading-[64px] font-normal tracking-[-0.03em] text-ink"
            id="about-mission-title-desktop"
          >
            Our Mission and Vision
          </h2>
          <div className="absolute top-[111px] left-[764px] m-0 w-[559.2px] font-body text-[12.8px] leading-[19.68px] font-medium text-ink [&_p]:m-0 [&_p+p]:mt-[13px]">
            {missionParagraphs.map((paragraph) => <p key={`${paragraph}-desktop`}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
