import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import {
  ConstructionManagementReasons,
  type ReasonCardItem,
} from "@/components/sections/services/ConstructionManagementReasons";
import { GroundUpFaq, type FaqItem } from "@/components/sections/services/GroundUpFaq";
import { ProjectCloseOutIntro } from "@/components/sections/services/ProjectCloseOutIntro";
import {
  ResidentialRenovationServices,
  type ServiceRowItem,
} from "@/components/sections/services/ResidentialRenovationServices";
import { ServiceHero } from "@/components/sections/services/ServicesHero";
import { ServicesStandard, type StandardItem } from "@/components/sections/services/ServicesStandard";

const projectCloseOutServices: readonly ServiceRowItem[] = [
  {
    title: "TCO/CO/LOC Acquisition",
    description:
      "We coordinate all final inspections with DOB, FDNY, and other city agencies, navigating the complex paperwork to secure your Temporary Certificate of Occupancy, Final Certificate of Occupancy, or Letter of Completion.",
    image: "/images/services/project-close-out/tco-co-acquisition.webp",
  },
  {
    title: "Demolition & Turnovers",
    description:
      "Our team handles everything from interior deconstruction to complete site clearing, with a focus on safety, efficiency, and responsible waste management, preparing your site for its next phase.",
    image: "/images/services/project-close-out/demolition-turnovers.webp",
  },
  {
    title: "Punch List & Final Walkthrough",
    description:
      "Our team ensures every detail meets your expectations and our quality standards before handover, guaranteeing a finished space that is truly ready for occupancy.",
    image: "/images/services/project-close-out/punch-list-walkthrough.webp",
  },
] as const;

const projectCloseOutProcess: readonly StandardItem[] = [
  {
    id: "pre-close-out-preparation",
    navLabel: "Pre-Close-Out Preparation",
    title: "Pre-Close-Out Preparation",
    summary:
      "We begin planning for close-out well before construction ends to ensure a smooth, efficient transition.",
    features: [
      {
        title: "Close-Out Planning",
        description:
          "We establish a clear timeline and checklist for all close-out activities, coordinating with all stakeholders to set expectations.",
      },
      {
        title: "Documentation Review",
        description:
          "We compile and organize all project documentation, including as-built drawings, warranties, operations manuals, and inspection reports.",
      },
      {
        title: "Inspection Preparation",
        description:
          "We conduct pre-inspection walkthroughs to identify any items that need correction before final agency inspections.",
      },
      {
        title: "Stakeholder Coordination",
        description:
          "We align with owners, tenants, facility managers, and agencies to schedule final inspections and walkthroughs.",
      },
    ],
  },
  {
    id: "final-inspections-certifications",
    navLabel: "Final Inspections & Certifications",
    title: "Final Inspections & Certifications",
    summary:
      "We coordinate all required inspections and secure the certifications needed for legal occupancy.",
    features: [
      {
        title: "DOB Inspections",
        description:
          "We schedule and coordinate all required Department of Buildings inspections, ensuring work meets code requirements.",
      },
      {
        title: "FDNY Inspections",
        description:
          "We manage Fire Department inspections for alarm systems, sprinklers, and other life safety components.",
      },
      {
        title: "Agency Coordination",
        description:
          "We coordinate with all relevant agencies to secure required sign-offs, including DOT, DEP, and others as applicable.",
      },
      {
        title: "TCO/CO/LOC Acquisition",
        description:
          "We prepare and submit all necessary paperwork to secure your Temporary Certificate of Occupancy, Final Certificate of Occupancy, or Letter of Completion.",
      },
    ],
  },
  {
    id: "punch-list-quality-verification",
    navLabel: "Punch List & Quality Verification",
    title: "Punch List & Quality Verification",
    summary:
      "We ensure every detail meets your expectations and our quality standards before final handover.",
    features: [
      {
        title: "Punch List Development",
        description:
          "We conduct a thorough walkthrough to identify any remaining items requiring correction, touch-up, or completion.",
      },
      {
        title: "Subcontractor Coordination",
        description:
          "We manage all subcontractors to ensure punch list items are addressed promptly and correctly.",
      },
      {
        title: "Quality Verification",
        description:
          "We inspect completed corrections to verify quality and adherence to project standards before sign-off.",
      },
      {
        title: "Owner Walkthrough",
        description:
          "We conduct a comprehensive walkthrough with you to confirm that every detail meets your expectations.",
      },
    ],
  },
  {
    id: "demolition-site-preparation",
    navLabel: "Demolition & Site Preparation",
    title: "Demolition & Site Preparation",
    summary:
      "When projects require demolition or turnover, we ensure safe, efficient site preparation.",
    features: [
      {
        title: "Interior Demolition",
        description:
          "We carefully remove interior elements, fixtures, and finishes while preserving structural integrity.",
      },
      {
        title: "Selective Demolition",
        description:
          "We execute targeted demolition of specific walls, floors, or systems to prepare for new construction.",
      },
      {
        title: "Site Clearing",
        description:
          "We clear debris, remove temporary structures, and prepare the site for its next phase of use.",
      },
      {
        title: "Responsible Disposal",
        description:
          "We sort and recycle materials whenever possible, adhering to NYC sustainability requirements and minimizing landfill waste.",
      },
    ],
  },
  {
    id: "documentation-final-handover",
    navLabel: "Documentation & Final Handover",
    title: "Documentation & Final Handover",
    summary:
      "We deliver a complete package of documentation and ensure a smooth transition to occupancy.",
    features: [
      {
        title: "As-Built Drawings",
        description:
          "We provide updated drawings reflecting all changes made during construction.",
      },
      {
        title: "Operations Manuals",
        description:
          "We compile manuals for all installed equipment and systems.",
      },
      {
        title: "Warranty Packages",
        description:
          "We organize all product and workmanship warranties for future reference.",
      },
      {
        title: "Final Handover",
        description:
          "We conduct a final review and formally hand over the completed space, ensuring you have everything needed to occupy and operate your new facility.",
      },
    ],
  },
] as const;

const projectCloseOutReasons: readonly ReasonCardItem[] = [
  {
    icon: "/icons/services/preconstruction/agency-expertise.svg",
    title: "Expert Agency Navigation",
    description:
      "Our deep knowledge of DOB, FDNY, and other agency processes streamlines inspections and certifications.",
    alt: "Agency expertise icon",
  },
  {
    icon: "/icons/home/values/detail-icon.svg",
    title: "Meticulous Attention to Detail",
    description:
      "We ensure every punch list item is addressed and every detail meets your expectations.",
    alt: "Attention to detail icon",
  },
  {
    icon: "/icons/services/preconstruction/planning.svg",
    title: "Proactive Planning",
    description:
      "We begin close-out planning early to prevent last-minute delays and ensure a smooth transition.",
    alt: "Planning icon",
  },
  {
    icon: "/icons/home/feature-clipboard.svg",
    title: "Comprehensive Documentation",
    description:
      "We deliver a complete package of as-built drawings, manuals, and warranties for future reference.",
    alt: "Documentation icon",
  },
  {
    icon: "/icons/services/management/quality-focused-execution.svg",
    title: "Commitment to Quality",
    description:
      "We do not consider a project complete until you are fully satisfied with the finished space.",
    alt: "Quality commitment icon",
  },
] as const;

const projectCloseOutFaqs: readonly FaqItem[] = [
  {
    question: "What is a Certificate of Occupancy?",
    answer:
      "A Certificate of Occupancy (CO) is an official document issued by the DOB confirming that a building or space complies with all applicable codes and is approved for occupancy. A Temporary Certificate of Occupancy (TCO) allows occupancy before final completion.",
  },
  {
    question: "What is a Letter of Completion?",
    answer:
      "A Letter of Completion (LOC) is issued for certain types of work where a full Certificate of Occupancy is not required. It confirms that the work has been completed in accordance with approved plans.",
  },
  {
    question: "What is a punch list?",
    answer:
      "A punch list is a document listing remaining items that need correction or completion before a project is considered finished. It is developed during the final walkthrough and resolved before handover.",
  },
  {
    question: "How long does the close-out process take?",
    answer:
      "The timeline varies based on project complexity and agency inspection schedules. We begin planning early to minimize delays and ensure a smooth, efficient close-out.",
  },
] as const;

export const metadata: Metadata = {
  title: "Project Close-Out",
  description:
    "Expert project close-out services from JC Construction Management, guiding projects seamlessly from construction to occupancy.",
};

export default function ProjectCloseOutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              "Project Close-Out"
            ),
            tagline: "Project Close-Out: From Construction to Occupancy, Seamlessly",
            description:
              "Expert project completion services that ensure a smooth transition from construction to occupancy, with all certifications secured and sites properly prepared.",
            ctas: [
              {
                href: "/contact",
                label: "Schedule a Consultation",
                fitContent: true,
              },
              { href: "/portfolio", label: "View Our Projects", widthClass: "lg:w-[245px]" },
            ],
            ariaLabel: "Project close-out hero",
            titleDesktopTop: "top-[123px]",
            titleDesktopClassName: "h-[90px] w-[700px] whitespace-nowrap",
            underlineDesktopTop: "top-[234px]",
            taglineDesktopTop: "top-[254px]",
            taglineDesktopClassName: "h-[114px] w-[850px] text-[32px] leading-[36px]",
            ctasDesktopTop: "top-[385px]",
            descriptionDesktopTop: "top-[201px]",
            headingId: "project-close-out-hero-title",
          }}
        />
        <ProjectCloseOutIntro />
        <ResidentialRenovationServices
          title={
            <>
              Our Project Close-Out
              <br />
              Services
            </>
          }
          description="We provide comprehensive close-out services that address every detail required for successful project completion:"
          desktopDescription="We provide comprehensive close-out services that address every detail required for successful project completion:"
          items={projectCloseOutServices}
          sectionId="project-close-out-services-title"
          compact
        />
        <ServicesStandard
          title={
            <>
              Our Comprehensive Project
              <br />
              Close-Out Process
            </>
          }
          items={projectCloseOutProcess}
          imageSrc="/images/services/integrated-phases-image.png"
          imageAlt="Construction plans and project models reviewed during project close-out planning"
          panelSrc="/images/services/integrated-phases-decoration.svg"
          variant="phases"
        />
        <ConstructionManagementReasons
          title="Why Choose JCCM for Project Close-Out?"
          reasons={projectCloseOutReasons}
          sectionId="project-close-out-reasons-title"
        />
        <GroundUpFaq
          title="Project Close-Out FAQ"
          description="Answers about occupancy approvals, final walkthroughs, and the close-out timeline."
          faqs={projectCloseOutFaqs}
          idPrefix="project-close-out-faq"
        />
      </main>
      <Footer />
    </>
  );
}
