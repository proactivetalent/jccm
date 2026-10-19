import type { Metadata } from "next";

import { Header } from "@/components/layout/Header/Header";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact JC Construction Management to discuss your construction project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
