export type ServiceFeature = Readonly<{
  title: string;
  description: string;
  icon: string;
}>;

export type ServiceItem = Readonly<{
  id: string;
  navLabel: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
  features: readonly ServiceFeature[];
}>;

export const services: readonly ServiceItem[] = [
  {
    id: "ground-up",
    navLabel: "Ground-up and New Construction",
    title: "Ground-Up and New Construction",
    summary:
      "Expert management of new construction projects from vacant lot to completed structure, ensuring flawless execution, regulatory compliance, and on-time delivery.",
    href: "/services/ground-up-and-new-construction",
    image: "/images/home/services/ground-up-service.webp",
    imageAlt:
      "High-rise building under construction against the New York City skyline",
    features: [
      {
        title: "Comprehensive Project Oversight",
        description:
          "We manage every phase of your ground-up development. Our approach ensures your vision is executed with precision, quality, and adherence to building codes.",
        icon: "/icons/home/feature-buildings.svg",
      },
      {
        title: "Budget and Timeline Certainty",
        description:
          "Our estimating and strategic scheduling eliminate guesswork. We proactively manage resources and challenges to keep your project on track and within budget.",
        icon: "/icons/home/feature-worker.svg",
      },
      {
        title: "Safety Model",
        description:
          "Our rigorous safety standards protect people, projects and timelines at every stage of construction.",
        icon: "/icons/home/feature-safety.svg",
      },
    ],
  },
  {
    id: "renovation",
    navLabel: "Renovation and Build-Outs",
    title: "Renovation and Build-Outs",
    summary:
      "Precision renovations and commercial build-outs that respect existing structures while delivering modern performance, finish quality, and efficient turnaround.",
    href: "/services/renovation-and-build-outs",
    image: "/images/home/services/renovation-service.webp",
    imageAlt: "Construction project representing renovation and build-out work",
    features: [
      {
        title: "Occupied-Space Coordination",
        description:
          "We plan phased renovations around tenants and operations so work advances without unnecessary disruption to daily use.",
        icon: "/icons/home/feature-clipboard.svg",
      },
      {
        title: "Detail-Driven Execution",
        description:
          "From demolition through final finishes, our teams protect quality standards and keep trade sequencing tight and predictable.",
        icon: "/icons/home/feature-blueprint.svg",
      },
      {
        title: "Code-Ready Delivery",
        description:
          "We align build-outs with NYC requirements early, reducing rework and keeping inspections and sign-offs on schedule.",
        icon: "/icons/home/feature-schedule.svg",
      },
    ],
  },
  {
    id: "construction-management",
    navLabel: "Construction Management",
    title: "Construction Management",
    summary:
      "Hands-on construction management that aligns owners, designers, and trades around clear schedules, cost controls, and field accountability.",
    href: "/services/construction-management",
    image: "/images/home/services/management-service.webp",
    imageAlt: "Active construction management on an urban project",
    features: [
      {
        title: "Field Leadership",
        description:
          "Dedicated site leadership keeps progress visible, issues resolved quickly, and every trade aligned to the master schedule.",
        icon: "/icons/home/feature-worker.svg",
      },
      {
        title: "Cost and Risk Control",
        description:
          "We track budgets, procurements, and contingencies in real time so decisions stay informed and financially grounded.",
        icon: "/icons/home/feature-clipboard.svg",
      },
      {
        title: "Quality Assurance",
        description:
          "Structured reviews and punch processes protect craftsmanship and ensure completed work matches approved drawings.",
        icon: "/icons/home/feature-buildings.svg",
      },
    ],
  },
  {
    id: "pre-construction",
    navLabel: "Pre-Construction and Planning",
    title: "Pre-Construction and Planning",
    summary:
      "Early planning, estimating, and constructability reviews that de-risk design decisions before work begins in the field.",
    href: "/services/pre-construction-and-planning",
    image: "/images/home/services/preconstruction-service.webp",
    imageAlt: "Pre-construction planning for an urban development",
    features: [
      {
        title: "Constructability Review",
        description:
          "We pressure-test drawings and specifications early to identify conflicts, sequencing issues, and cost drivers before mobilization.",
        icon: "/icons/home/feature-blueprint.svg",
      },
      {
        title: "Accurate Estimating",
        description:
          "Detailed takeoffs and trade input produce budgets owners can trust when comparing scope, value, and schedule options.",
        icon: "/icons/home/feature-clipboard.svg",
      },
      {
        title: "Schedule Strategy",
        description:
          "We build realistic timelines around permitting, long-lead items, and site logistics so construction starts with clarity.",
        icon: "/icons/home/feature-schedule.svg",
      },
    ],
  },
  {
    id: "close-out",
    navLabel: "Project Close-Outs and City Compliance",
    title: "Project Close-Outs and City Compliance",
    summary:
      "End-to-end close-out support that secures inspections, documentation, and certificate of occupancy with NYC agency requirements in mind.",
    href: "/services/project-close-out",
    image: "/images/home/services/closeout-service.webp",
    imageAlt: "Completed construction ready for city compliance close-out",
    features: [
      {
        title: "Inspection Readiness",
        description:
          "We prepare packages, coordinate agencies, and resolve open items so final inspections move without last-minute surprises.",
        icon: "/icons/home/feature-schedule.svg",
      },
      {
        title: "Compliance Documentation",
        description:
          "As-builts, warranties, and sign-off records are organized for owners, lenders, and building departments alike.",
        icon: "/icons/home/feature-clipboard.svg",
      },
      {
        title: "Certificate of Occupancy Support",
        description:
          "Our close-out process stays focused on the path to CO, protecting turnover dates and long-term building usability.",
        icon: "/icons/home/feature-safety.svg",
      },
    ],
  },
] as const;
