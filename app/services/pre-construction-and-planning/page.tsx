import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { PreConstructionPlanningIntro } from "@/components/sections/services/PreConstructionPlanningIntro";
import { ServiceHero } from "@/components/sections/services/ServicesHero";

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
      </main>
      <Footer />
    </>
  );
}
