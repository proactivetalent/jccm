import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const blocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "Renovating your home in New York City is an exciting journey, but it comes with unique logistical challenges. Coordinating deliveries in a high-rise, working within tight building hours, and managing a team of specialized trades requires a level of precision and experience that goes beyond standard construction.",
  },
  {
    kind: "body",
    text: "JC Construction Management is your trusted partner on the ground. We provide hands-on, full-service management that removes the day-to-day stress, guiding you through a smooth process with clear timelines and budgets. We handle the complexities of the build, so you can focus on the exciting part: watching your dream home come to life.",
  },
];

export function ResidentialRenovationIntro() {
  return (
    <ServiceNarrativeSection
      id="residential-renovation-intro-title"
      title="Your Vision,"
      accentTitle="Executed with Precision and Care"
      blocks={blocks}
    />
  );
}
