export type FooterLink = Readonly<{
  label: string;
  href: string;
}>;

export const companyLinks: readonly FooterLink[] = [
  { label: "Projects", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Ongoing Projects", href: "/portfolio/ongoing" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
] as const;

export const legalLinks: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "FAQs", href: "/faqs" },
] as const;

export const footerContact = {
  phone: "212-271-6837",
  phoneHref: "tel:+12122716837",
  email: "info@jccmanagement.com",
  emailHref: "mailto:info@jccmanagement.com",
} as const;

export const footerSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "/icons/footer/linkedin.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: "/icons/footer/youtube.svg",
  },
] as const;
