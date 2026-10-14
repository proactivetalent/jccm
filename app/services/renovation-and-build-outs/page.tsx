import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { ReadyToBuild } from "@/components/sections/home/ReadyToBuild";
import { ResidentialRenovationIntro } from "@/components/sections/services/ResidentialRenovationIntro";
import { ResidentialRenovationServices } from "@/components/sections/services/ResidentialRenovationServices";
import { ResidentialDifference } from "@/components/sections/services/ResidentialDifference";
import { GroundUpFaq, type FaqItem } from "@/components/sections/services/GroundUpFaq";
import { ServiceHero } from "@/components/sections/services/ServicesHero";
import { ServicesStandard, type StandardItem } from "@/components/sections/services/ServicesStandard";

const renovationProcess: readonly StandardItem[] = [
  {
    id: "consultation-planning-blueprint",
    navLabel: "Consultation and Planning Blueprint",
    title: "Consultation and Planning Blueprint",
    summary: "We believe successful construction begins with understanding the space, the goals, and the requirements of the project.",
    features: [
      { title: "Project Consultation", description: "We meet with you to understand your vision, project objectives, operational needs, and expectations." },
      { title: "Existing-Space Assessment", description: "We evaluate the existing conditions, building requirements, and potential challenges that may affect the scope and schedule." },
      { title: "Initial Estimating", description: "We develop a detailed preliminary estimate based on the defined scope, materials, finishes, and project requirements." },
      { title: "Project Roadmap", description: "We establish the major phases, milestones, responsibilities, and anticipated completion timeline so everyone begins with a clear understanding of the project." },
    ],
  },
  {
    id: "detailed-planning-preconstruction",
    navLabel: "Detailed Planning & Pre Construction",
    title: "Detailed Planning & Pre Construction",
    summary: "We turn the initial concept into a coordinated construction plan before work begins.",
    features: [
      { title: "Budgeting", description: "We establish a realistic project budget based on your priorities and scope. Costs are tracked throughout construction to maintain financial clarity." },
      { title: "Estimating", description: "You'll receive a detailed, itemized estimate covering anticipated labor, materials, subcontractors, and other project costs." },
      { title: "Construction Scheduling", description: "We develop a detailed schedule that coordinates trades, deliveries, inspections, approvals, and key project milestones." },
      { title: "Material Procurement", description: "Our team manages the sourcing and procurement of approved finishes, fixtures, equipment, and construction materials, coordinating deliveries so materials arrive when they are needed." },
    ],
  },
  {
    id: "construction-buildout-execution",
    navLabel: "Construction & Build-out execution",
    title: "Construction & Build-out execution",
    summary: "Our on-site management team keeps the project organized, coordinated, and moving forward. ",
    features: [
      { title: "Protected Workspace", description: "We establish appropriate protection and containment measures to safeguard existing areas, neighboring spaces, merchandise, furniture, and finished surfaces." },
      { title: "Daily Site Management", description: "Our project team coordinates trades, monitors progress, reviews workmanship, and addresses site conditions throughout construction." },
      { title: "Trade Coordination", description: "Electricians, plumbers, carpenters, painters, flooring specialists, and other trades are coordinated according to the construction schedule to reduce delays and conflicts." },
      { title: "Clear Communication", description: "You receive regular project updates through your preferred method, keeping you informed about progress, upcoming milestones, decisions, and any issues requiring attention." },
      { title: "Quality & Compliance", description: "We monitor construction to ensure completed work follows the approved plans, specifications, applicable requirements, and the quality standards established for the project." },
    ],
  },
  {
    id: "project-closeout-walkthrough",
    navLabel: "Project Close-Out and Final Walkthrough",
    title: "Project Close-Out and Final Walkthrough",
    summary: "We finish every project with the same attention to detail that goes into the planning and construction.",
    features: [
      { title: "Final Punch List", description: "We conduct a detailed walkthrough to identify remaining touch-ups, adjustments, or corrective work before final completion." },
      { title: "Quality Review", description: "Our team reviews the completed work across the project to ensure the agreed scope has been properly executed." },
      { title: "Project Handover", description: "We hand over the completed space along with relevant warranties, manuals, documentation, and other project information." },
      { title: "Final Clean-Up", description: "The space is thoroughly prepared for occupancy, opening, move-in, or the next stage of your business operations." },
    ],
  },
] as const;

const renovationFaqs: readonly FaqItem[] = [
  {
    question: "How long does a typical kitchen renovation take?",
    answer: "From planning to completion, a typical NYC kitchen renovation takes 8-12 weeks. This includes a 2-3 week period for expediting permits and a 4-6 week construction timeline. We provide a customized schedule during our initial estimating phase.",
  },
  {
    question: "Do I need to hire an architect separately?",
    answer: "Our team can coordinate with your architect or help connect you with the right design professional for your renovation scope, so the design and construction process stay aligned from the start.",
  },
] as const;

export const metadata: Metadata = {
  title: "Residential Renovations",
  description: "Residential renovation management from JC Construction Management.",
};

export default function ResidentialRenovationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              <>
                Residential
                <br />
                Renovations
              </>
            ),
            tagline: (
              <>
                Seamless NYC Renovations,
                <br />
                Meticulously Managed
              </>
            ),
            description: "From initial concept to final take off, we handle every detail of your apartment, condo, or brownstone renovation.",
            ariaLabel: "Residential renovations hero",
            ctas: [{ href: "/contact", label: "Get a Custom Quote", widthClass: "lg:w-[277px]" }],
            titleDesktopTop: "top-[123px]",
            titleDesktopClassName: "h-[180px] w-[800px] whitespace-normal",
            underlineDesktopTop: "top-[332px]",
            taglineDesktopTop: "top-[352px]",
            ctasDesktopTop: "top-[475px]",
            descriptionDesktopTop: "top-[201px]",
            headingId: "residential-renovation-hero-title",
          }}
        />
        <ResidentialRenovationIntro />
        <ResidentialRenovationServices />
        <ServicesStandard
          title={
            <>
              Our Comprehensive
              <br />
              Renovation Process
            </>
          }
          items={renovationProcess}
          imageSrc="/images/services/integrated-phases-image.png"
          imageAlt="Home renovation plans being reviewed by a project team"
          panelSrc="/images/services/integrated-phases-decoration.svg"
          variant="phases"
        />
        <ResidentialDifference />
        <Portfolio />
        <GroundUpFaq faqs={renovationFaqs} idPrefix="residential-faq" />
        <ReadyToBuild />
      </main>
      <Footer />
    </>
  );
}
