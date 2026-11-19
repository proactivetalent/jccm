import Image from "next/image";
import type { ReactNode } from "react";

export type ReasonCardItem = Readonly<{
  icon: string;
  title: string;
  description: string;
  alt: string;
  hoverDescription?: string;
  hoverImage?: string;
}>;

const constructionManagementReasons: readonly ReasonCardItem[] = [
  {
    icon: "/icons/services/management/hands-on-management.svg",
    title: "Hands-On Management",
    description:
      "Our team stays actively involved in the project rather than simply overseeing it from a distance.",
    alt: "Hands-on management icon",
  },
  {
    icon: "/icons/services/management/trade-coordination.svg",
    title: "Experienced Trade Coordination",
    description:
      "We understand how different trades interact and coordinate their work to maintain an efficient construction sequence.",
    alt: "Experienced trade coordination icon",
  },
  {
    icon: "/icons/services/management/proactive-problem-solving.svg",
    title: "Proactive Problem Solving",
    description:
      "We identify potential issues early and work toward practical solutions before they affect the project.",
    alt: "Proactive problem solving icon",
  },
  {
    icon: "/icons/services/management/transparent-communication.svg",
    title: "Transparent Communication",
    description:
      "Owners receive clear updates about progress, costs, schedule, decisions, and issues throughout construction.",
    alt: "Transparent communication icon",
  },
  {
    icon: "/icons/services/management/quality-focused-execution.svg",
    title: "Quality-Focused Execution",
    description:
      "We maintain consistent oversight to ensure workmanship and completed work meet the project's established standards.",
    alt: "Quality-focused execution icon",
  },
] as const;

function ReasonCard({ reason, desktop = false, preconstruction = false }: Readonly<{ reason: ReasonCardItem; desktop?: boolean; preconstruction?: boolean }>) {
  return (
    <article
      className={
        desktop
          ? preconstruction
            ? "group relative box-border flex h-[458px] w-[350px] flex-col items-start overflow-hidden rounded-card bg-surface px-[26px] pt-12 pb-10 text-left"
            : "flex h-[340px] w-[366px] flex-col items-center rounded-card bg-white px-5 pt-[37px] text-center"
          : preconstruction
            ? "group relative box-border flex min-h-[320px] flex-col items-start rounded-card bg-surface px-6 pt-9 pb-7 text-left"
            : "flex min-h-[280px] flex-col items-center rounded-card bg-white px-6 py-7 text-center"
      }
      tabIndex={preconstruction ? 0 : undefined}
    >
      {preconstruction && reason.hoverImage && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-card">
          <span className="absolute inset-0 bg-surface" />
          <Image
            alt=""
            className="absolute inset-0 scale-[1.04] object-cover opacity-0 transition-[opacity,transform] duration-[640ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 motion-reduce:transition-none"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 350px"
            src={reason.hoverImage}
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgb(16_16_16_/_8%)_0%,rgb(16_16_16_/_36%)_52%,rgb(16_16_16_/_62%)_100%)] opacity-0 transition-opacity duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none" />
        </div>
      )}
      <Image
        alt={reason.alt}
        className={preconstruction ? "relative z-[1] h-[52px] w-[52px] shrink-0 object-contain object-left transition-[filter] duration-[320ms] group-hover:brightness-0 group-hover:invert group-focus-within:brightness-0 group-focus-within:invert motion-reduce:transition-none lg:h-[63px] lg:w-[63px]" : undefined}
        height={preconstruction ? 63 : 107}
        src={reason.icon}
        unoptimized
        width={preconstruction ? 63 : 106}
      />
      <div className={preconstruction ? "relative z-[1] mt-auto w-full min-w-0" : undefined}>
        <h3
          className={
            desktop
              ? preconstruction
                ? "m-0 max-w-[298px] font-headline text-[32px] leading-[99.6%] font-medium text-brand transition-colors duration-[320ms] group-hover:text-surface group-focus-within:text-surface motion-reduce:transition-none"
                : "mt-1.5 max-w-[330px] font-headline text-[32px] leading-[35.488px] font-medium text-brand"
              : preconstruction
                ? "m-0 max-w-[300px] font-headline text-[clamp(24px,5.5vw,32px)] leading-[1.1] font-medium text-brand transition-colors duration-[320ms] group-hover:text-surface group-focus-within:text-surface motion-reduce:transition-none"
                : "mt-3 max-w-[300px] font-headline text-[28px] leading-[1.109] font-medium text-brand"
          }
        >
          {reason.title}
        </h3>
        {preconstruction ? (
          <div className="mt-3 grid w-full min-w-0">
            <p className="col-start-1 row-start-1 m-0 w-full max-w-[300px] font-body text-[15px] leading-[1.4] font-light text-ink transition-opacity duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none lg:max-w-[298px] lg:text-base lg:leading-[123%]">
              {reason.description}
            </p>
            <p className="col-start-1 row-start-1 m-0 max-h-0 w-full max-w-[300px] overflow-hidden font-body text-[15px] leading-[1.4] font-light text-surface opacity-0 transition-[opacity,max-height] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-[220px] group-hover:opacity-100 group-focus-within:max-h-[220px] group-focus-within:opacity-100 motion-reduce:transition-none lg:max-w-[298px] lg:text-base lg:leading-[123%]">
              {reason.hoverDescription ?? reason.description}
            </p>
          </div>
        ) : (
          <p className={desktop ? "mt-[10px] mb-0 max-w-[320px] font-body text-[16px] leading-[1.23] text-ink" : "mt-3 mb-0 max-w-[300px] font-body text-base leading-[1.45] text-ink"}>
            {reason.description}
          </p>
        )}
      </div>
    </article>
  );
}

export type ConstructionManagementReasonsProps = Readonly<{
  title?: ReactNode;
  reasons?: readonly ReasonCardItem[];
  sectionId?: string;
  variant?: "construction-management" | "pre-construction";
}>;

export function ConstructionManagementReasons({
  title = (
    <>
      Choose JCCM For
      <br />
      Your Commercial Build-Out?
    </>
  ),
  reasons = constructionManagementReasons,
  sectionId = "construction-management-reasons-title",
  variant = "construction-management",
}: ConstructionManagementReasonsProps = {}) {
  const isPreConstruction = variant === "pre-construction";

  return (
    <section
      aria-labelledby={sectionId}
      className={`relative overflow-hidden ${isPreConstruction ? "bg-[linear-gradient(75.0807deg,var(--jccm-color-brand-deep)_22.829%,var(--jccm-color-brand)_88.348%)] min-[1024px]:max-[1535px]:h-[42.3958333vw] min-[1536px]:h-[min(814px,42.3958333vw)]" : "bg-surface min-[1024px]:max-[1535px]:h-[52.0833333vw] min-[1536px]:h-[800px]"}`}
    >
      {!isPreConstruction && (
        <>
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 z-[1] hidden w-px bg-divider/70 lg:block" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 z-[1] hidden w-px bg-divider/70 lg:block" />
          <span aria-hidden="true" className="pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-px bg-divider" />
        </>
      )}

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center md:px-10 md:py-20 lg:hidden">
        <h2
          className={`m-0 max-w-3xl font-headline text-[clamp(42px,9vw,72px)] leading-[1] font-normal tracking-[-0.03em] ${isPreConstruction ? "text-white" : "text-ink"}`}
          id={sectionId}
        >
          {title}
        </h2>
        <div className="mt-10 grid w-full max-w-md gap-5 sm:grid-cols-2">
          {reasons.map((reason) => <ReasonCard key={reason.title} reason={reason} preconstruction={isPreConstruction} />)}
        </div>
      </div>

      <div className={`absolute top-0 hidden w-[1920px] origin-top-left min-[1024px]:block ${isPreConstruction ? "h-[814px] min-[1024px]:max-[1535px]:left-0 min-[1024px]:max-[1535px]:[scale:calc(100vw_/_1920px)] min-[1024px]:max-[1535px]:[translate:none] min-[1536px]:left-1/2 min-[1536px]:origin-top min-[1536px]:-translate-x-1/2 min-[1536px]:[scale:min(1,calc(100vw_/_1920px))]" : "h-[1000px] origin-top-left min-[1024px]:max-[1535px]:left-0 min-[1024px]:max-[1535px]:[scale:calc(100vw_/_1920px)] min-[1024px]:max-[1535px]:[translate:none] min-[1536px]:left-[calc(50%_-_768px)] min-[1536px]:[scale:0.8] min-[1536px]:[translate:none]"}`}>
        {isPreConstruction && (
          <>
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -left-[120px] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_18%)_0%,transparent_68%)]" />
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -right-[140px] h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_16%)_0%,transparent_70%)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-full">
              {[99, 531, 961, 1392, 1823].map((x) => (
                <span className="absolute top-0 bottom-0 w-px bg-white/20" key={x} style={{ left: x }} />
              ))}
            </div>
          </>
        )}
        <h2
          className={`absolute m-0 font-headline text-[72px] leading-[72px] font-normal tracking-[-0.03em] ${isPreConstruction ? "top-[107px] left-[123px] w-[1674px] text-center text-white" : "top-[84px] left-[410px] w-[1100px] text-center text-ink"}`}
          id={`${sectionId}-desktop`}
        >
          {title}
        </h2>
        {isPreConstruction ? (
          <div className="absolute top-[307px] left-1/2 flex -translate-x-1/2 gap-5">
            {reasons.map((reason) => <ReasonCard desktop key={reason.title} preconstruction reason={reason} />)}
          </div>
        ) : (
          <>
            <div className="absolute top-[275px] left-[386px] flex gap-[25px]">
              {reasons.slice(0, 3).map((reason) => <ReasonCard desktop key={reason.title} reason={reason} />)}
            </div>
            <div className="absolute top-[640px] left-[581px] flex gap-[25px]">
              {reasons.slice(3).map((reason) => <ReasonCard desktop key={reason.title} reason={reason} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
