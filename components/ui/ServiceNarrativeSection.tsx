export type ServiceNarrativeBlock = Readonly<{
  text: string;
  kind: "lead" | "statement" | "body" | "closing";
}>;

type ServiceNarrativeSectionProps = Readonly<{
  id: string;
  title: string;
  accentTitle: string;
  blocks: readonly ServiceNarrativeBlock[];
}>;

const blockClasses: Record<ServiceNarrativeBlock["kind"], string> = {
  lead: "m-0 font-body text-[18px] leading-[1.52] text-white lg:text-[19px]",
  statement: "mt-8 mb-0 font-headline text-[23px] leading-[1.22] tracking-[-0.02em] text-[#bce3d7] lg:mt-9 lg:text-[26px]",
  body: "mt-6 mb-0 font-body text-[16px] leading-[1.58] text-white/90 lg:text-[17px]",
  closing: "mt-8 mb-0 border-t border-white/20 pt-6 font-body text-[16px] leading-[1.55] text-[#c6e7df] lg:text-[17px]",
};

export function ServiceNarrativeSection({
  id,
  title,
  accentTitle,
  blocks,
}: ServiceNarrativeSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#143c3a_0%,#205351_56%,#24665f_100%)] text-white"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 hidden w-px bg-white/15 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 hidden w-px bg-white/15 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-48 right-[6%] -z-10 size-[650px] rounded-full bg-[#88cabb]/15 blur-[110px]" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-72 left-[20%] -z-10 size-[550px] rounded-full bg-[#0c2f2e]/45 blur-[100px]" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-64 -right-56 hidden size-[830px] rounded-full border border-white/10 md:block" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-20 -right-52 hidden size-[600px] rounded-full border border-white/8 md:block" />

      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[760px] gap-12 py-16 md:w-[87.2%] md:py-20 lg:max-w-[1675px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[clamp(72px,9vw,154px)] lg:py-28">
        <div className="lg:pt-1">
          <h2
            className="m-0 max-w-[580px] font-headline text-[clamp(40px,8.8vw,52px)] leading-[1.09] font-normal tracking-[-0.035em] lg:text-[clamp(44px,3.7vw,56px)]"
            id={id}
          >
            <span className="block">{title}</span>
            <span className="mt-3 block text-[#c6e7df]">{accentTitle}</span>
          </h2>
          <span aria-hidden="true" className="mt-10 block h-[3px] w-28 bg-[#a8dacc] lg:mt-14" />
        </div>

        <div className="max-w-[690px] lg:pt-1">
          {blocks.map((block, index) => (
            <p className={blockClasses[block.kind]} key={`${index}-${block.kind}`}>
              {block.text}
            </p>
          ))}
        </div>
      </div>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
    </section>
  );
}
