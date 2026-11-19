import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { GroundUpFaq, type FaqItem } from "@/components/sections/services/GroundUpFaq";
import { PreConstructionPlanningIntro } from "@/components/sections/services/PreConstructionPlanningIntro";
import { PreConstructionFeaturedStory } from "@/components/sections/services/PreConstructionFeaturedStory";
import { PreConstructionFranchiseSectors } from "@/components/sections/services/PreConstructionFranchiseSectors";
import { ConstructionManagementReasons } from "@/components/sections/services/ConstructionManagementReasons";
import {
  ResidentialRenovationServices,
  type ServiceRowItem,
} from "@/components/sections/services/ResidentialRenovationServices";
import { ServiceHero } from "@/components/sections/services/ServicesHero";
import { ServicesStandard, type StandardItem } from "@/components/sections/services/ServicesStandard";

const preConstructionServices: readonly ServiceRowItem[] = [
  {
    title: "Budgeting & Estimating",
    description:
      "We develop transparent, data-driven budgets with granular line-item estimates that account for hard costs, soft costs, and market fluctuations. Our detailed estimates provide financial clarity from day one and eliminate surprises.",
    image: "/images/services/pre-construction/budgeting-estimating.webp",
  },
  {
    title: "Expediting & Permitting",
    description:
      "Our expert team navigates NYC’s complex DOB and agency landscape to secure necessary permits and approvals efficiently. We manage all filings, track applications in real time, and prevent costly delays before construction begins.",
    image: "/images/services/pre-construction/expediting-permitting.webp",
  },
  {
    title: "Construction Timeline & Scheduling",
    description:
      "We build realistic, phased master schedules with clear milestones for design, permitting, and construction. Our schedules anticipate challenges and build in contingencies for NYC’s unpredictable variables, ensuring predictable outcomes.",
    image: "/images/services/pre-construction/construction-timeline.webp",
  },
] as const;

const preConstructionProcess: readonly StandardItem[] = [
  {
    id: "discovery-project-assessment",
    navLabel: "Discovery & Project Assessment",
    title: "Discovery & Project Assessment",
    summary: "We establish a clear understanding of your project before any planning begins.",
    features: [
      {
        title: "Vision & Goals Review",
        description:
          "We meet with you to understand your vision, objectives, budget expectations, and success criteria for the project.",
      },
      {
        title: "Site Analysis",
        description:
          "We review existing site conditions, zoning requirements, accessibility, and potential construction challenges that may affect planning.",
      },
      {
        title: "Documentation Review",
        description:
          "We analyze available drawings, specifications, surveys, and reports to identify gaps and establish a clear project scope.",
      },
      {
        title: "Feasibility Assessment",
        description:
          "We evaluate the project's feasibility from both a construction and financial perspective, identifying opportunities and constraints.",
      },
    ],
  },
  {
    id: "budgeting-estimating",
    navLabel: "Budgeting & Estimating",
    title: "Budgeting & Estimating",
    summary: "We establish realistic financial expectations that guide every decision that follows.",
    features: [
      {
        title: "Preliminary Budgeting",
        description:
          "We develop a comprehensive budget that accounts for all anticipated costs, including materials, labor, permits, and contingencies.",
      },
      {
        title: "Detailed Estimating",
        description:
          "Our team provides granular line-item estimates that break down costs by trade and category, giving you full transparency into where your investment is going.",
      },
      {
        title: "Value Engineering",
        description:
          "We identify opportunities to achieve your desired quality and aesthetic while optimizing costs, offering alternative materials or methods without compromising design intent.",
      },
      {
        title: "Cost Risk Analysis",
        description:
          "We identify potential cost drivers and market fluctuations that could impact your budget, building in appropriate contingencies.",
      },
    ],
  },
  {
    id: "permitting-agency-coordination",
    navLabel: "Permitting & Agency Coordination",
    title: "Permitting & Agency Coordination",
    summary: "We navigate NYC's regulatory landscape efficiently to keep your project moving forward.",
    features: [
      {
        title: "Permit Strategy",
        description:
          "We determine which permits and approvals are required for your project and develop a clear path to secure them.",
      },
      {
        title: "DOB Filings",
        description:
          "Our team prepares and files all necessary Department of Buildings applications, ensuring accuracy and completeness.",
      },
      {
        title: "Agency Coordination",
        description:
          "We coordinate with FDNY, DOT, DEP, and other relevant agencies to secure all required approvals.",
      },
      {
        title: "Real-Time Tracking",
        description:
          "We monitor application status and respond quickly to any agency requests or comments to prevent delays.",
      },
    ],
  },
  {
    id: "scheduling-logistics-planning",
    navLabel: "Scheduling & Logistics Planning",
    title: "Scheduling & Logistics Planning",
    summary: "We build a detailed roadmap that keeps every phase of your project on track.",
    features: [
      {
        title: "Master Scheduling",
        description:
          "We develop a comprehensive schedule with milestones for design completion, permit approvals, procurement, construction phases, and project close-out.",
      },
      {
        title: "Trade Sequencing",
        description:
          "We sequence subcontractors and trades logically to maintain efficient workflow and prevent conflicts or downtime.",
      },
      {
        title: "Procurement Planning",
        description:
          "We identify long-lead materials and equipment, establishing timelines for ordering, approval, and delivery to avoid delays.",
      },
      {
        title: "Logistics Planning",
        description:
          "We develop plans for material staging, equipment access, deliveries, and site logistics specific to NYC's urban constraints.",
      },
    ],
  },
  {
    id: "team-assembly-coordination",
    navLabel: "Team Assembly & Coordination",
    title: "Team Assembly & Coordination",
    summary: "We align all stakeholders around a shared plan and clear responsibilities.",
    features: [
      {
        title: "Design Team Collaboration",
        description:
          "We work with architects and engineers to review plans for constructability, identify potential issues, and ensure drawings are complete and coordinated.",
      },
      {
        title: "Subcontractor Pre-Qualification",
        description:
          "We identify and vet qualified subcontractors based on project requirements, experience, availability, and scope.",
      },
      {
        title: "Communication Protocols",
        description:
          "We establish clear communication channels, reporting structures, and meeting schedules to keep all parties aligned.",
      },
      {
        title: "Risk Management Planning",
        description:
          "We develop a proactive plan for identifying and addressing potential risks before they impact the project.",
      },
    ],
  },
] as const;

const preConstructionFaqs: readonly FaqItem[] = [
  {
    question: "What is pre-construction planning?",
    answer:
      "Pre-construction planning is the phase before construction begins where we establish budgets, develop schedules, coordinate permits, and identify potential risks. It creates the foundation for a successful project.",
  },
  {
    question: "Why is budgeting and estimating important before construction?",
    answer:
      "Detailed budgeting and estimating provide financial clarity from the start, helping you make informed decisions and avoid surprise costs during construction. It also establishes realistic expectations for your investment.",
  },
  {
    question: "How do you expedite permits in NYC?",
    answer:
      "Our experienced team understands the DOB and agency processes, prepares complete and accurate filings, tracks applications in real time, and responds quickly to any requests to keep approvals moving forward.",
  },
  {
    question: "Can you help if I don't have final drawings yet?",
    answer:
      "Yes. We can begin pre-construction planning with preliminary information and refine our budgets and schedules as design progresses, ensuring alignment with your evolving project.",
  },
] as const;

export const metadata: Metadata = {
  title: "Pre-Construction & Planning",
  description:
    "Strategic pre-construction and planning services from JC Construction Management, establishing a solid foundation for project success.",
};

export default function PreConstructionAndPlanningPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              <>
                Pre-Construction
                <br />
                &amp; Planning
              </>
            ),
            tagline: (
              <>
                Pre-Construction &amp; Planning: Build
                <br />
                On A Foundation Of Certainty
              </>
            ),
            description:
              "Strategic pre-construction services that establish a solid foundation for project success through meticulous planning, accurate budgeting, and efficient permitting.",
            ariaLabel: "Pre-construction and planning hero",
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
            headingId: "pre-construction-planning-hero-title",
          }}
        />
        <PreConstructionPlanningIntro />
        <ResidentialRenovationServices
          title={
            <>
              Our Pre-Construction &amp;
              <br />
              Planning Services
            </>
          }
          description="We provide comprehensive planning and analysis throughout the pre-construction phase:"
          desktopDescription="We provide comprehensive planning and analysis throughout the pre-construction phase:"
          items={preConstructionServices}
          sectionId="pre-construction-planning-services-title"
          compact
        />
        <ServicesStandard
          title={
            <>
              Our Comprehensive Pre-
              <br />
              Construction &amp; Planning Process
            </>
          }
          items={preConstructionProcess}
          imageSrc="/images/services/integrated-phases-image.png"
          imageAlt="Construction plans and project models reviewed during pre-construction planning"
          panelSrc="/images/services/integrated-phases-decoration.svg"
          variant="phases"
        />
        <ConstructionManagementReasons
          title={
            <>
              Why Choose JCCM For Pre-
              <br />
              Construction &amp; Planning?
            </>
          }
          sectionId="pre-construction-planning-reasons-title"
          variant="pre-construction"
          reasons={[
            {
              icon: "/icons/services/preconstruction/planning.svg",
              title: "Proactive Planning",
              description: "We identify potential issues early and develop strategies to address them before they become costly problems.",
              alt: "Proactive planning icon",
              hoverImage: "/images/home/process/consult-img.webp",
            },
            {
              icon: "/icons/services/preconstruction/financial-clarity.svg",
              title: "Financial Clarity",
              description: "Our detailed budgeting and estimating provide full transparency into project costs, protecting your investment.",
              alt: "Financial clarity icon",
              hoverImage: "/images/home/process/design-img.webp",
            },
            {
              icon: "/icons/services/preconstruction/agency-expertise.svg",
              title: "NYC Agency Expertise",
              description: "Our deep knowledge of DOB, FDNY, and other agency processes streamlines approvals and prevents delays.",
              alt: "NYC agency expertise icon",
              hoverImage: "/images/home/process/execute-img.webp",
            },
            {
              icon: "/icons/services/preconstruction/scheduling.svg",
              title: "Realistic Scheduling",
              description: "We develop achievable timelines based on real-world experience, ensuring predictable outcomes.",
              alt: "Realistic scheduling icon",
              hoverImage: "/images/home/process/deliver-img.webp",
            },
            {
              icon: "/icons/services/preconstruction/collaborative-approach.svg",
              title: "Collaborative Approach",
              description: "We coordinate closely with your design team, stakeholders, and future contractors to ensure alignment from the start.",
              alt: "Collaborative approach icon",
              hoverImage: "/images/home/process/consult-img.webp",
            },
          ]}
        />
        <PreConstructionFeaturedStory />
        <PreConstructionFranchiseSectors />
        <Portfolio />
        <GroundUpFaq
          faqs={preConstructionFaqs}
          idPrefix="pre-construction-faq"
          title="Pre-Construction & Planning FAQ"
        />
      </main>
      <Footer />
    </>
  );
}
