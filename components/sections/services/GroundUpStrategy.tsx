import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const blocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "In New York City, a successful ground-up project is a symphony of precise planning, relentless execution, and navigating a maze of regulations.",
  },
  {
    kind: "statement",
    text: "JC Construction Management is the conductor.",
  },
  {
    kind: "body",
    text: "We don't just pour concrete and erect steel; we provide end-to-end strategic management, de-risking your investment and ensuring your project is delivered on time, on budget, and to the highest quality standards.",
  },
  {
    kind: "closing",
    text: "Our integrated approach covers every critical phase, each managed with expert attention to detail.",
  },
];

export function GroundUpStrategy() {
  return (
    <ServiceNarrativeSection
      id="ground-up-strategy-title"
      title="More Than Building"
      accentTitle="We're Your Strategic Partner"
      blocks={blocks}
    />
  );
}
