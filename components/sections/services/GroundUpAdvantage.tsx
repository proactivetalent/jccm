import Image from "next/image";

import styles from "./GroundUpAdvantage.module.css";

const advantages = [
  {
    icon: "/icons/services/advantage/capabilities.svg",
    title: "Self-Perform Capabilities",
    description: "We handle key scopes with our own crews, ensuring superior quality control and cost efficiency.",
    alt: "Self-perform capabilities icon",
  },
  {
    icon: "/icons/services/advantage/tech.svg",
    title: "Technology-Driven",
    description: "We use advanced BIM and project management software for precise planning and real-time progress tracking.",
    alt: "Technology-driven construction icon",
  },
  {
    icon: "/icons/services/advantage/expertise.svg",
    title: "Proven NYC Expertise",
    description: "With over 5.2 million square feet of experience, we know how to solve problems before they happen.",
    alt: "Proven NYC expertise icon",
  },
] as const;

export function GroundUpAdvantage() {
  return (
    <section aria-labelledby="ground-up-advantage-title" className={`relative overflow-hidden bg-surface ${styles.section}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center md:px-10 md:py-20 lg:hidden">
        <h2 id="ground-up-advantage-title" className="m-0 max-w-3xl font-headline text-[clamp(42px,9vw,72px)] leading-[1] font-normal tracking-[-0.03em] text-ink">
          The JCCM Advantage in Ground-Up Construction
        </h2>
        <div className="mt-10 grid w-full max-w-md gap-5">
          {advantages.map((advantage) => (
            <article className="flex min-h-[280px] flex-col items-center rounded-card bg-white px-6 py-7" key={advantage.title}>
              <Image alt={advantage.alt} height={107} src={advantage.icon} unoptimized width={106} />
              <h3 className="mt-3 max-w-[270px] font-headline text-[28px] leading-[1.109] font-medium text-brand">{advantage.title}</h3>
              <p className="mt-3 mb-0 max-w-[300px] font-body text-base leading-[1.45] text-ink">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={`absolute top-0 hidden h-[800px] w-[1920px] lg:block ${styles.canvas}`}>
        <h2 id="ground-up-advantage-title-desktop" className="absolute top-[138px] left-[477px] m-0 w-[966px] text-center font-headline text-[72px] leading-[72px] font-normal tracking-[-0.03em] text-ink">
          The JCCM Advantage in<br />Ground-Up Construction
        </h2>
        <div className="absolute top-[323px] left-[386px] flex gap-[25px]">
          {advantages.map((advantage) => (
            <article className="flex h-[321px] w-[366px] flex-col items-center rounded-card bg-white px-5 pt-[37px] text-center" key={advantage.title}>
              <Image alt={advantage.alt} height={107} src={advantage.icon} unoptimized width={106} />
              <h3 className="mt-1.5 max-w-[330px] font-headline text-[32px] leading-[35.488px] font-medium text-brand">{advantage.title}</h3>
              <p className="mt-[10px] mb-0 max-w-[320px] font-body text-[16px] leading-[1.23] text-ink">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
