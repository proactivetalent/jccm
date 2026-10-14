import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { GroundUpStrategy } from "@/components/sections/services/GroundUpStrategy";
import { GroundUpAdvantage } from "@/components/sections/services/GroundUpAdvantage";
import { GroundUpFaq } from "@/components/sections/services/GroundUpFaq";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { ReadyToBuild } from "@/components/sections/home/ReadyToBuild";
import { ServiceHero } from "@/components/sections/services/ServicesHero";
import { ServicesStandard, type StandardItem } from "@/components/sections/services/ServicesStandard";

const integratedServicePhases: readonly StandardItem[] = [
  {
    id: "pre-construction",
    navLabel: "Pre-Construction",
    title: "Pre-Construction",
    summary:
      "Success is determined before groundbreaking. Our pre-construction services eliminate guesswork and set your project on a path to profitability.",
    features: [
      {
        title: "Budgeting",
        description:
          "We develop transparent, data-driven budgets that account for market fluctuations and NYC-specific costs, providing financial clarity from day one.",
      },
      {
        title: "Estimating",
        description:
          "Our detailed estimates go beyond square-foot costs. We provide granular line-item breakdowns for unparalleled cost control and avoid costly change orders later.",
      },
      {
        title: "Construction Timeline",
        description:
          "We build realistic, phased master schedules that set clear milestones for design, permitting, and construction, keeping every stakeholder aligned.",
      },
    ],
  },
  {
    id: "construction-execution",
    navLabel: "Construction Execution",
    title: "Construction Execution",
    summary:
      "With the plan set, our team drives disciplined execution from mobilization through every milestone, keeping quality, safety, and schedule aligned.",
    features: [
      { title: "Trade Coordination", description: "We coordinate every trade and delivery with clear sequencing and daily field communication." },
      { title: "Quality Control", description: "Hands-on oversight and documented inspections keep workmanship at the highest standard." },
      { title: "Schedule Management", description: "Live schedule tracking helps the project team resolve constraints before they affect completion." },
    ],
  },
  {
    id: "project-close-out",
    navLabel: "Project Close-Out",
    title: "Project Close-Out",
    summary:
      "We finish with the same rigor we bring to the start, delivering a coordinated turnover and a building ready for its next chapter.",
    features: [
      { title: "Final Documentation", description: "Complete as-builts, warranties, and close-out records are organized for a smooth handover." },
      { title: "Commissioning", description: "Systems are tested, balanced, and verified so the finished space performs as intended." },
      { title: "Owner Turnover", description: "We guide every final walkthrough and handoff detail with the owner and operating team." },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Ground Up / New Construction",
  description:
    "Ground-up and new construction services from JC Construction Management.",
};

export default async function GroundUpNewConstructionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              <>
                Ground Up/New
                <br />
                Construction
              </>
            ),
            tagline: "Your Vision, Built From The Ground Up",
            description:
              "Full-service construction management in NYC, turning complex challenges into iconic, profitable realities.",
            ariaLabel: "Ground Up and New Construction hero",
            ctas: [
              { href: "/contact", label: "Get a Custom Quote", widthClass: "lg:w-[277px]" },
            ],
            titleDesktopTop: "top-[123px]",
            titleDesktopClassName: "h-[180px] w-[800px] whitespace-normal",
            underlineDesktopTop: "top-[332px]",
            taglineDesktopTop: "top-[352px]",
            ctasDesktopTop: "top-[435px]",
            descriptionDesktopTop: "top-[201px]",
            headingId: "ground-up-hero-title",
          }}
        />
        <GroundUpStrategy />
        <ServicesStandard
          title="Our Integrated Service Phases"
          description="We break down the complexity of new construction into manageable, expertly executed phases."
          items={integratedServicePhases}
          imageSrc="/images/services/integrated-phases-image.png"
          imageAlt="Construction plans and documents reviewed on site"
          panelSrc="/images/services/integrated-phases-decoration.svg"
          variant="phases"
        />
        <GroundUpAdvantage />
        <Portfolio />
        <GroundUpFaq />
        <ReadyToBuild />
      </main>
      <Footer />
    </>
  );
}
