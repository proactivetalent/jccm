import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const blocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "The final phase of construction is where details matter most. A project is not complete when the last nail is driven or the final coat of paint is applied. It is complete when every inspection has passed, every certification is secured, every punch list item is resolved, and the space is fully ready for occupancy.",
  },
  {
    kind: "body",
    text: "JC Construction Management provides expert project close-out services that ensure a smooth transition from active construction to full occupancy. With JCCM managing your close-out, you have an experienced partner securing approvals, resolving final details, and delivering a finished space that meets the highest standards of quality and compliance.",
  },
];

export function ProjectCloseOutIntro() {
  return (
    <ServiceNarrativeSection
      id="project-close-out-intro-title"
      title="Finish Strong,"
      accentTitle="Occupy with Confidence"
      blocks={blocks}
    />
  );
}
