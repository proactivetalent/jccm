import Image from "next/image";

const paragraphs = [
  "The strength of JCCM lies in our people. We are a team of dedicated professionals who know the importance of creating value in a property. Our collaborative culture brings together diverse expertise under one roof, fostering innovation and problem-solving.",
  "From our project managers who meticulously oversee timelines and budgets to our superintendents who ensure precision and safety on-site, every JCCM team member is committed to one goal: your project’s success.",
] as const;

const partnershipParagraphs = [
  "JCCM is proud to partner with Proactive Building Solutions (PBS), a New York City-based consultant company. This strategic alliance provides our clients with a powerful, unmatched advantage in the pre-construction and compliance phases.",
  "PBS utilizes cutting-edge technology to monitor real-time data from over 45 city databases, covering all complaints, violations, and hearings. This proactive approach to due diligence and compliance protects your investment from unforeseen delays, liabilities, and costs, ensuring a smoother, more predictable project journey from start to finish.",
  "This partnership exemplifies our commitment to leveraging every available tool to de-risk projects and deliver certainty to our clients.",
] as const;

function CommitmentMarker() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#c5dfdc]"
    >
      <span className="relative size-7 rounded-full bg-brand">
        <span className="absolute top-1/2 right-[-2px] h-px w-2 -translate-y-1/2 rotate-[-22deg] bg-surface" />
      </span>
    </span>
  );
}

export function AboutDedicatedProfessionals() {
  return (
    <section
      aria-labelledby="about-dedicated-professionals-title"
      className="relative overflow-hidden bg-surface min-[1024px]:mx-auto min-[1024px]:w-[87.2%] min-[1024px]:max-w-[1675px]"
    >
      <div className="mx-auto w-full max-w-none px-6 py-16 md:px-10 md:py-20 lg:px-0 lg:py-[88px]">
        <h2
          className="m-0 text-center font-headline text-[clamp(48px,6vw,72px)] leading-[0.98] font-normal tracking-[-0.035em] text-ink"
          id="about-dedicated-professionals-title"
        >
          Dedicated Professionals
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-11">
          <div className="relative aspect-[1552/868] w-full overflow-hidden rounded-card">
            <Image
              alt="New York City buildings viewed from street level"
              className="rounded-card object-cover"
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              src="/images/about/dedicated-professionals.png"
            />
          </div>

          <div className="font-body text-[15px] leading-[1.32] text-ink-strong md:text-[16px]">
            <div className="space-y-6">
              {paragraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
            </div>
            <h3 className="mt-7 mb-0 font-body text-[15px] leading-[1.32] font-medium md:text-[16px]">
              Powering Projects with Proactive Building Solutions
            </h3>
            <div className="mt-6 space-y-6">
              {partnershipParagraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-card bg-white px-7 py-9 md:px-12 md:py-12 lg:mt-[126px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:items-center lg:gap-14 lg:px-14 lg:py-12">
          <div className="flex items-center gap-7">
            <CommitmentMarker />
            <h3 className="m-0 max-w-[420px] font-headline text-[clamp(36px,4vw,48px)] leading-[0.98] font-normal tracking-[-0.035em] text-ink">
              Our Commitment To
              <br />
              New York City
            </h3>
          </div>
          <p className="m-0 font-body text-[16px] leading-[1.35] text-ink-strong md:text-[18px]">
            We are not just builders in New York City; we are a part of its community and its future. We are committed to responsible construction practices, enhancing neighborhoods, and creating spaces where people can thrive—whether it&apos;s a family home, a new franchise business, or a flagship commercial office.
          </p>
        </div>
      </div>
    </section>
  );
}
