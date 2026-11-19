import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const blocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "Successful construction requires more than getting the work done. It requires experienced management, clear communication, reliable coordination, and proactive decision-making at every stage of the project. JC Construction Management provides hands-on construction management that keeps owners, architects, engineers, subcontractors, and suppliers working toward the same goal.",
  },
  {
    kind: "body",
    text: "With JCCM managing the construction process, you have an experienced partner on the ground protecting your interests and keeping your project moving.",
  },
];

export function ConstructionManagementIntro() {
  return (
    <ServiceNarrativeSection
      id="construction-management-intro-title"
      title="Your Project,"
      accentTitle="Managed With Precision"
      blocks={blocks}
    />
  );
}
