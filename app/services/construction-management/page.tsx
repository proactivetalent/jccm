import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { ConstructionManagementIntro } from "@/components/sections/services/ConstructionManagementIntro";
import { ConstructionManagementOwnerRepresentation } from "@/components/sections/services/ConstructionManagementOwnerRepresentation";
import { ConstructionManagementReasons } from "@/components/sections/services/ConstructionManagementReasons";
import { GroundUpFaq, type FaqItem } from "@/components/sections/services/GroundUpFaq";
import { ServiceHero } from "@/components/sections/services/ServicesHero";
import {
  ResidentialRenovationServices,
  type ServiceRowItem,
} from "@/components/sections/services/ResidentialRenovationServices";
import { ServicesStandard, type StandardItem } from "@/components/sections/services/ServicesStandard";

const constructionManagementServices: readonly ServiceRowItem[] = [
  {
    title: "Owner Representation",
    description:
      "We act as your advocate throughout the project, representing your interests in communications and decisions involving architects, engineers, subcontractors, vendors, landlords, and other stakeholders.",
    image: "/images/services/construction-management/owner-representation.webp",
  },
  {
    title: "Subcontractor Scheduling & Coordination",
    description:
      "We vet, hire, schedule, and coordinate qualified trades, sequencing electricians, plumbers, carpenters, and other specialists to maintain an efficient workflow and prevent avoidable delays.",
    image: "/images/services/construction-management/subcontractor-scheduling.webp",
  },
  {
    title: "Material Procurement & Logistics",
    description:
      "We manage purchasing, lead times, delivery schedules, and on-site logistics to ensure approved materials and equipment arrive when they are needed.",
    image: "/images/services/construction-management/material-procurement.webp",
  },
  {
    title: "Budget & Cost Management",
    description:
      "We monitor project costs, review estimates and invoices, track changes, and provide clear financial visibility throughout construction.",
    image: "/images/services/construction-management/budget-cost-management.webp",
  },
  {
    title: "Quality Control & Site Supervision",
    description:
      "Our team maintains consistent oversight of workmanship, construction progress, safety, and compliance to ensure work is completed according to the approved plans and project standards.",
    image: "/images/services/construction-management/quality-control.webp",
  },
  {
    title: "Project Scheduling & Progress Management",
    description:
      "We develop and maintain detailed construction schedules, coordinate milestones, identify schedule risks, and take proactive action when issues arise.",
    image: "/images/services/construction-management/project-scheduling.webp",
  },
] as const;

const constructionManagementProcess: readonly StandardItem[] = [
  {
    id: "planning-pre-construction",
    navLabel: "Planning & Pre-Construction",
    title: "Planning & Pre-Construction",
    summary:
      "We establish the foundation for a well organized construction project before work begins.",
    features: [
      {
        title: "Project Assessment",
        description:
          "We review the project scope, existing conditions, drawings, specifications, goals, and potential construction challenges.",
      },
      {
        title: "Budget Development",
        description:
          "We establish realistic project costs and identify major cost drivers, allowances, procurement requirements, and potential risks.",
      },
      {
        title: "Construction Scheduling",
        description:
          "We develop a detailed schedule that sequences trades, materials, inspections, approvals, and key milestones.",
      },
      {
        title: "Team Coordination",
        description:
          "We establish clear responsibilities and communication between owners, architects, engineers, subcontractors, vendors, and other project stakeholders.",
      },
    ],
  },
  {
    id: "procurement-construction-preparation",
    navLabel: "Procurement & Construction Preparation",
    title: "Procurement & Construction Preparation",
    summary:
      "We prepare every part of the project so construction can begin with the right resources in place.",
    features: [
      {
        title: "Subcontractor Selection",
        description:
          "We identify and coordinate qualified subcontractors based on project requirements, experience, availability, and scope.",
      },
      {
        title: "Material Procurement",
        description:
          "Our team manages material selections, approvals, purchasing, lead times, delivery schedules, and site logistics.",
      },
      {
        title: "Schedule Coordination",
        description:
          "We align subcontractor schedules and procurement timelines to reduce conflicts and maintain project momentum.",
      },
      {
        title: "Site Preparation",
        description:
          "We coordinate site access, protection, deliveries, staging, safety requirements, and other preparations needed before construction begins.",
      },
    ],
  },
  {
    id: "construction-project-management",
    navLabel: "Construction & Project Management",
    title: "Construction & Project Management",
    summary:
      "Our hands-on management keeps the project moving efficiently throughout construction.",
    features: [
      {
        title: "Daily Site Supervision",
        description:
          "We monitor daily activities, coordinate trades, review progress, and address issues as they arise.",
      },
      {
        title: "Subcontractor Coordination",
        description:
          "We manage the workflow between trades to ensure each phase is completed before the next begins.",
      },
      {
        title: "Quality Control",
        description:
          "We inspect completed work and monitor construction quality against approved drawings, specifications, and project standards.",
      },
      {
        title: "Proactive Problem-Solving",
        description:
          "When unexpected conditions or delays occur, we identify solutions quickly and coordinate the necessary changes to keep the project moving.",
      },
    ],
  },
  {
    id: "final-completion-closeout",
    navLabel: "Final Completion & Close-Out",
    title: "Final Completion & Close-Out",
    summary:
      "We remain involved until every detail of the project has been properly completed and handed over.",
    features: [
      {
        title: "Final Inspections",
        description:
          "We coordinate final inspections and review completed work to identify any outstanding issues.",
      },
      {
        title: "Punch List & Corrections",
        description:
          "We create and manage the final punch list, coordinating subcontractors to complete remaining corrections and touch-ups.",
      },
      {
        title: "Documentation & Handover",
        description:
          "We coordinate final project documentation, warranties, manuals, approvals, and other required close-out materials.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We conduct a comprehensive walkthrough with the owner to confirm that the completed project meets the agreed scope and expectations.",
      },
    ],
  },
] as const;

const constructionManagementFaqs: readonly FaqItem[] = [
  {
    question: "What does a construction manager do?",
    answer:
      "A construction manager coordinates the people, materials, schedule, budget, and day-to-day activities required to successfully execute a construction project. We act as the connection between the owner, design team, subcontractors, vendors, and field operations.",
  },
  {
    question: "Do you provide owner representation?",
    answer:
      "Yes. We can represent the owner's interests throughout the project, managing communication, reviewing costs and schedules, coordinating stakeholders, and providing construction expertise for important project decisions.",
  },
  {
    question: "Do you manage subcontractors directly?",
    answer:
      "Yes. We coordinate qualified subcontractors and trades according to the project's scope and schedule, ensuring their work is properly sequenced and coordinated with other construction activities.",
  },
  {
    question: "Do you handle material procurement?",
    answer:
      "Yes. We can manage the procurement process from approved material selections through ordering, lead-time tracking, delivery coordination, and on-site logistics.",
  },
] as const;

export const metadata: Metadata = {
  title: "Construction Management",
  description:
    "Hands-on construction management from JC Construction Management, coordinating cost, schedule, quality, and delivery across NYC projects.",
};

export default function ConstructionManagementPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              <>
                Construction
                <br />
                Management
              </>
            ),
            tagline: (
              <>
                Construction Management Built
                <br />
                Around Your Success
              </>
            ),
            description:
              "Hands-on construction management that keeps your project coordinated, controlled, and moving forward from planning through final completion.",
            ariaLabel: "Construction management hero",
            ctas: [
              { href: "/contact", label: "Discuss Your Project", widthClass: "lg:w-[277px]" },
              { href: "/portfolio", label: "View Our Projects", widthClass: "lg:w-[245px]" },
            ],
            titleDesktopTop: "top-[123px]",
            titleDesktopClassName: "h-[180px] w-[800px] whitespace-normal",
            underlineDesktopTop: "top-[332px]",
            taglineDesktopTop: "top-[352px]",
            ctasDesktopTop: "top-[435px]",
            descriptionDesktopTop: "top-[201px]",
            headingId: "construction-management-hero-title",
          }}
        />
        <ConstructionManagementIntro />
        <ResidentialRenovationServices
          title={
            <>
              Our Construction
              <br />
              Management Services
            </>
          }
          description="We provide comprehensive management and coordination throughout the construction lifecycle:"
          desktopDescription="We provide comprehensive management and coordination throughout the construction lifecycle:"
          items={constructionManagementServices}
          sectionId="construction-management-services-title"
        />
        <ServicesStandard
          title={
            <>
              Our Comprehensive Construction
              <br />
              Management Process
            </>
          }
          items={constructionManagementProcess}
          imageSrc="/images/services/integrated-phases-image.png"
          imageAlt="Construction plans and documents reviewed by a project team"
          panelSrc="/images/services/integrated-phases-decoration.svg"
          variant="phases"
        />
        <ConstructionManagementOwnerRepresentation />
        <ConstructionManagementReasons />
        <Portfolio />
        <GroundUpFaq
          faqs={constructionManagementFaqs}
          idPrefix="construction-management-faq"
          title="Construction Management FAQ"
        />
      </main>
      <Footer />
    </>
  );
}
