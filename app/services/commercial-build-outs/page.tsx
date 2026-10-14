import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CommercialBuildoutIntro } from "@/components/sections/services/CommercialBuildoutIntro";
import { ServiceHero } from "@/components/sections/services/ServicesHero";

export const metadata: Metadata = {
  title: "Commercial Build Outs",
  description: "Commercial build-out and tenant improvement services from JC Construction Management.",
};

export default function CommercialBuildoutsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceHero
          config={{
            title: (
              <>
                Commercial
                <br />
                Build Outs
              </>
            ),
            tagline: (
              <>
                Commercial Spaces Built For
                <br />
                Business Success
              </>
            ),
            description: "Seamless tenant improvement and build-out services for offices, retail stores, and commercial facilities across NYC.",
            ariaLabel: "Commercial build outs hero",
            ctas: [{ href: "/contact", label: "Get a Custom Quote", widthClass: "lg:w-[277px]" }],
            titleDesktopTop: "top-[123px]",
            titleDesktopClassName: "h-[180px] w-[800px] whitespace-normal",
            underlineDesktopTop: "top-[332px]",
            taglineDesktopTop: "top-[352px]",
            ctasDesktopTop: "top-[435px]",
            descriptionDesktopTop: "top-[201px]",
            headingId: "commercial-buildout-hero-title",
          }}
        />
        <CommercialBuildoutIntro />
      </main>
      <Footer />
    </>
  );
}
