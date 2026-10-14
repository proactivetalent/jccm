import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { ReadyToBuild } from "@/components/sections/home/ReadyToBuild";
import { ClientCentricPhilosophy } from "@/components/sections/services/ClientCentricPhilosophy";
import { IndustrySpecialization } from "@/components/sections/services/IndustrySpecialization";
import { IntegratedApproach } from "@/components/sections/services/IntegratedApproach";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesStandard } from "@/components/sections/services/ServicesStandard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Explore JC Construction Management services for New York City construction, renovations, planning, and project delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServicesHero />
        <ServicesStandard />
        <IntegratedApproach />
        <IndustrySpecialization />
        <ClientCentricPhilosophy />
        <Portfolio />
        <ReadyToBuild />
      </main>
      <Footer />
    </>
  );
}
