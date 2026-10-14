export type ValueItem = Readonly<{
  id: string;
  title: string;
  description: string;
  icon: string;
}>;

export const valuesIntro =
  "What sets us apart is our integrated approach and commitment to excellence at every stage.";

export const values: readonly ValueItem[] = [
  {
    id: "clear-communication",
    title: "Clear Communication",
    description:
      "We believe transparency is the cornerstone of trust. Our team provides regular progress updates, detailed reporting, and open dialogue throughout your project. You'll never be left wondering about timelines, budgets, or next steps—we keep you informed at every stage, ensuring you feel confident, connected, and in control from start to finish.",
    icon: "/images/home/values/communication-icon.svg",
  },
  {
    id: "licensed-professionals",
    title: "Licensed and Certified Professionals",
    description:
      "Our work is led by licensed, certified professionals who bring deep expertise across every discipline of construction management. From structural oversight to regulatory compliance, our qualifications ensure your project meets the highest industry standards and New York City building codes at every phase.",
    icon: "/images/home/values/license-icon.svg",
  },
  {
    id: "attention-to-detail",
    title: "Attention to Detail",
    description:
      "We approach every project with meticulous care—from material selections and workmanship standards to final finishes and inspections. Our rigorous quality-control processes catch issues early, prevent costly revisions, and deliver results that reflect the precision and craftsmanship your vision deserves.",
    icon: "/images/home/values/attention-icon.svg",
  },
] as const;
