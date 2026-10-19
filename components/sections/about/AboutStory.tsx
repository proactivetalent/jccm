import Image from "next/image";

const storyParagraphs = [
  "JC Construction Management (JCCM) was founded on a simple principle: construction in New York City shouldn’t be a battle against complexity, but a process managed with clarity, expertise, and unwavering dedication.",
  "For over a decade, we have been a trusted name in the heart of New York City’s construction industry. Our journey began with a focus on mastering the intricate details of ground-up development and has expanded to encompass a full suite of construction management and consulting services. With a proven track record of over 5.2 million square feet of successful development projects, we have consistently delivered spaces that not only meet but exceed the highest industry standards.",
  "We understand that the quality of your building—whether it’s your home, your office, or your investment—profoundly affects your daily life and future. That’s why we put your vision and needs at the forefront of everything we do.",
] as const;

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="relative overflow-hidden border-b border-divider bg-surface min-[1024px]:h-[411.2px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden min-[1024px]:block">
        <Image
          alt=""
          className="absolute top-[-594px] left-7 h-[1004.8px] w-[calc(100%-56px)] max-w-none object-fill"
          height="1256"
          src="/images/about/hero-dividers.svg"
          unoptimized
          width="1863"
        />
      </div>

      <div className="relative mx-auto box-border max-w-[760px] px-6 pt-16 pb-20 lg:hidden md:px-10 md:pt-20 md:pb-24">
        <h2
          className="m-0 font-headline text-[clamp(38px,8.5vw,58px)] leading-[1.03] font-normal tracking-[-0.03em] text-ink"
          id="about-story-title"
        >
          Our Story: A Decade Of Building NYC
        </h2>
        <div className="mt-8 font-body text-[18px] leading-[1.35] font-normal text-ink [&_p]:m-0 [&_p+p]:mt-5">
          {storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      <div className="absolute inset-0 hidden min-[1024px]:block">
        <div className="relative mx-auto h-full w-full max-w-[1536px]">
          <h2
            className="absolute top-[89px] left-[164px] m-0 h-[64px] w-[1030px] whitespace-nowrap font-headline text-[57.6px] leading-[64px] font-normal tracking-[-0.03em] text-ink"
            id="about-story-title-desktop"
          >
            Our Story: A Decade Of Building NYC
          </h2>
          <div className="absolute top-[181px] left-[164px] m-0 w-[1146px] font-body text-[16px] leading-[19.68px] font-normal text-ink [&_p]:m-0 [&_p+p]:mt-[13px]">
            {storyParagraphs.map((paragraph) => <p key={`${paragraph}-desktop`}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
