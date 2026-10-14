export type ProcessStep = Readonly<{
  id: string;
  number: string;
  title: string;
  description: string;
  hoverDescription: string;
  icon: string;
  hoverImage: string;
}>;

export const processSteps: readonly ProcessStep[] = [
  {
    id: "consult-and-plan",
    number: "1.",
    title: "Consult and Plan",
    description:
      "We listen to your vision and develop a detailed plan with a clear budget and timeline.",
    hoverDescription:
      "We transform your vision into a strategic, detailed project plan—carefully aligned with your budget, objectives, and timeline. From initial planning through execution, we provide the expertise and coordination needed to keep your project on track, on budget, and built to the highest standards.",
    icon: "/images/home/process/consulting-icon.svg",
    hoverImage: "/images/home/process/consult-img.webp",
  },
  {
    id: "design-and-permit",
    number: "2.",
    title: "Design and Permit",
    description:
      "Our experts coordinate with architects and expedite the permitting process.",
    hoverDescription:
      "Our experts collaborate closely with architects and streamline the permitting process to keep your project moving forward. We manage every detail with precision, ensuring compliance, efficiency, and timely approvals.",
    icon: "/images/home/process/design-icon.svg",
    hoverImage: "/images/home/process/design-img.webp",
  },
  {
    id: "execute-and-manage",
    number: "3.",
    title: "Execute and Manage",
    description:
      "Our licensed team manages every detail, from subcontractor scheduling to quality control.",
    hoverDescription:
      "Our licensed team oversees every aspect of your project, from subcontractor coordination and scheduling to rigorous quality control. We ensure that every phase of construction is executed efficiently, professionally, and to the highest standards.",
    icon: "/images/home/process/engineering-icon.svg",
    hoverImage: "/images/home/process/execute-img.webp",
  },
  {
    id: "close-and-deliver",
    number: "4.",
    title: "Close and Deliver",
    description:
      "We secure all necessary certifications and deliver your finished project, ready for occupancy.",
    hoverDescription:
      "We secure all required certifications and approvals, ensuring your project is fully compliant and delivered complete, polished, and ready for occupancy.",
    icon: "/images/home/process/building-icon.svg",
    hoverImage: "/images/home/process/deliver-img.webp",
  },
] as const;
