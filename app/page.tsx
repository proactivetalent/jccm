import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/sections/home/Hero";
import { HeroExpertiseTransition } from "@/components/sections/home/HeroExpertiseTransition";
import { Portfolio } from "@/components/sections/home/Portfolio";
import { Process } from "@/components/sections/home/Process";
import { ReadyToBuild } from "@/components/sections/home/ReadyToBuild";
import { Services } from "@/components/sections/home/Services";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { TrustedExpertise } from "@/components/sections/home/TrustedExpertise";
import { Values } from "@/components/sections/home/Values";

export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Header />
      <main aria-label="Homepage content">
        <HeroExpertiseTransition hero={<Hero />}>
          <TrustedExpertise />
        </HeroExpertiseTransition>
        <Portfolio />
        <Services />
        <Process />
        <Values />
        <Testimonials />
        <ReadyToBuild />
      </main>
      <Footer />
    </>
  );
}
