const storyParagraphs = [
  "JC Construction Management (JCCM) was founded on a simple principle: construction in New York City shouldn’t be a battle against complexity, but a process managed with clarity, expertise, and unwavering dedication.",
  "For over a decade, we have been a trusted name in the heart of New York City’s construction industry. Our journey began with a focus on mastering the intricate details of ground-up development and has expanded to encompass a full suite of construction management and consulting services. With a proven track record of over 5.2 million square feet of successful development projects, we have consistently delivered spaces that not only meet but exceed the highest industry standards.",
  "We understand that the quality of your building—whether it’s your home, your office, or your investment—profoundly affects your daily life and future. That’s why we put your vision and needs at the forefront of everything we do.",
] as const;

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="relative overflow-hidden border-b border-divider bg-surface min-[1024px]:max-[1535px]:h-[29.21875vw] min-[1536px]:h-[448.8px]"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto flex max-w-3xl flex-col px-6 py-16 md:px-10 md:py-20 lg:hidden">
        <h2
          className="m-0 max-w-3xl font-headline text-[clamp(44px,10vw,72px)] leading-[0.98] font-normal tracking-[-0.03em] text-ink"
          id="about-story-title"
        >
          Our Story: A Decade Of Building NYC
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 font-body text-[20px] leading-[1.23] text-ink">
          {storyParagraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      <div className="absolute top-0 hidden h-[561px] w-[1920px] origin-top-left min-[1024px]:block min-[1024px]:max-[1535px]:left-0 min-[1024px]:max-[1535px]:[scale:calc(100vw_/_1920px)] min-[1024px]:max-[1535px]:[translate:none] min-[1536px]:left-[calc(50%_-_768px)] min-[1536px]:scale-[0.8] min-[1536px]:translate-x-0">
        <h2
          className="absolute top-[124px] left-[197px] m-0 w-[1650px] font-headline text-[72px] leading-[80px] font-normal tracking-[-0.03em] text-ink"
          id="about-story-title-desktop"
        >
          Our Story: A Decade Of Building NYC
        </h2>
        <div className="absolute top-[234px] left-[197px] w-[1298px] font-body text-[20px] leading-[1.23] text-ink">
          {storyParagraphs.map((paragraph, index) => (
            <p className={index === 0 ? "m-0" : "mt-5 mb-0"} key={`${paragraph}-desktop`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
