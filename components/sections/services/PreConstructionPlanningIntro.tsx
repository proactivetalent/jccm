import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const blocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "A successful construction project is not defined by what happens on the job site. It is defined by the quality of the planning that takes place long before the first shovel hits the ground. Pre-construction is where budgets are established, schedules are built, risks are identified, and the entire path to completion is mapped out.",
  },
  {
    kind: "body",
    text: "JC Construction Management provides strategic pre-construction services that eliminate guesswork and set your project on a path to profitability. With JCCM managing the pre-construction process, you have an experienced partner establishing clarity, controlling costs, and anticipating challenges before they can impact your budget or timeline.",
  },
];

export function PreConstructionPlanningIntro() {
  return (
    <ServiceNarrativeSection
      id="pre-construction-planning-intro-title"
      title="Plan With Precision,"
      accentTitle="Build With Confidence"
      blocks={blocks}
    />
  );
}
