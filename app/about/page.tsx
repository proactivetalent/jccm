import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutDedicatedProfessionals } from "@/components/sections/about/AboutDedicatedProfessionals";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutWhyClientsChooseUs } from "@/components/sections/about/AboutWhyClientsChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JC Construction Management and our approach to construction in New York City.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutWhyClientsChooseUs />
        <AboutDedicatedProfessionals />
      </main>
      <Footer />
    </>
  );
}
