import { ServiceNarrativeSection, type ServiceNarrativeBlock } from "@/components/ui/ServiceNarrativeSection";

const storyBlocks: readonly ServiceNarrativeBlock[] = [
  {
    kind: "lead",
    text: "JC Construction Management (JCCM) was founded on a simple principle: construction in New York City shouldn’t be a battle against complexity, but a process managed with clarity, expertise, and unwavering dedication.",
  },
  {
    kind: "body",
    text: "For over a decade, we have been a trusted name in the heart of New York City’s construction industry. Our journey began with a focus on mastering the intricate details of ground-up development and has expanded to encompass a full suite of construction management and consulting services. With a proven track record of over 5.2 million square feet of successful development projects, we have consistently delivered spaces that not only meet but exceed the highest industry standards.",
  },
  {
    kind: "closing",
    text: "We understand that the quality of your building—whether it’s your home, your office, or your investment—profoundly affects your daily life and future. That’s why we put your vision and needs at the forefront of everything we do.",
  },
];

export function AboutStory() {
  return (
    <ServiceNarrativeSection
      id="about-story-title"
      title="Our Story:"
      accentTitle="A Decade Of Building NYC"
      blocks={storyBlocks}
    />
  );
}
