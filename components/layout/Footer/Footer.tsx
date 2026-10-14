import Image from "next/image";
import Link from "next/link";

import {
  companyLinks,
  footerContact,
  footerSocialLinks,
  legalLinks,
} from "./footerData";

const FOOTER_LOGO = "/images/logo-jccm-white.svg";
const FOOTER_LOGO_WIDTH = 268;
const FOOTER_LOGO_HEIGHT = 251;

/** Figma stroke — horizontal top rail: 2px solid #ECF4F3. */
const footerTopLineClass = "absolute inset-x-0 top-0 h-[2px] bg-surface";

/** Figma stroke — vertical rails: 2.13px linear #FFFFFF → #999999 @ 0%, top to bottom. */
const footerVerticalRailClass =
  "absolute top-0 bottom-0 w-[2.13px] -translate-x-1/2 bg-[linear-gradient(180deg,#FFFFFF_0%,rgb(153_153_153/0)_100%)]";

const columnHeadingClass =
  "m-0 font-headline text-[14px] font-medium leading-none tracking-[0.08em] text-footer-accent uppercase";

const footerLinkClass =
  "font-body text-[18px] font-light leading-[1.35] text-white no-underline transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white";

const socialButtonClass =
  "inline-flex size-9 items-center justify-center border border-white/70 text-white no-underline transition-[background-color,border-color] duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white";

function FooterRails() {
  return (
    <>
      <span className={footerTopLineClass} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 bottom-[4.5rem] lg:inset-x-12 lg:bottom-[11rem]"
      >
        <span className={`${footerVerticalRailClass} left-0 translate-x-0 hidden lg:block`} />
        <span className={`${footerVerticalRailClass} left-1/4 hidden lg:block`} />
        <span className={`${footerVerticalRailClass} left-1/2 hidden lg:block`} />
        <span className={`${footerVerticalRailClass} left-3/4 hidden lg:block`} />
        <span
          className={`${footerVerticalRailClass} right-0 left-auto translate-x-0 hidden lg:block`}
        />
      </div>
    </>
  );
}

function FooterNavColumn({
  heading,
  links,
}: Readonly<{
  heading: string;
  links: readonly { label: string; href: string }[];
}>) {
  return (
    <div className="flex flex-col gap-7 px-0 lg:items-start lg:gap-7 lg:px-10">
      <p className={columnHeadingClass}>{heading}</p>
      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link className={footerLinkClass} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CommunicationColumn() {
  return (
    <div className="flex flex-col gap-7 px-0 lg:items-start lg:gap-7 lg:px-10">
      <p className={columnHeadingClass}>Communication</p>
      <div className="flex flex-col gap-2.5">
        <a className={footerLinkClass} href={footerContact.phoneHref}>
          {footerContact.phone}
        </a>
        <a className={footerLinkClass} href={footerContact.emailHref}>
          {footerContact.email}
        </a>
      </div>
      <ul aria-label="Social media" className="m-0 flex list-none gap-3 p-0">
        {footerSocialLinks.map((social) => (
          <li key={social.label}>
            <a
              aria-label={social.label}
              className={socialButtonClass}
              href={social.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt=""
                aria-hidden="true"
                height={social.label === "YouTube" ? 10 : 14}
                src={social.icon}
                unoptimized
                width={48}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="relative overflow-hidden bg-[linear-gradient(90deg,var(--jccm-color-brand-deep)_0%,var(--jccm-color-brand)_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-[120px] hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_14%)_0%,transparent_68%)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[140px] hidden h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(236_244_243_/_12%)_0%,transparent_70%)] lg:block"
      />

      <FooterRails />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1920px] flex-col px-5 pt-16 md:px-6 md:pt-20 lg:px-12 lg:pt-32">
        <div className="relative">
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-11 lg:grid-cols-4 lg:items-start lg:gap-0">
            <div className="flex items-start justify-center md:col-span-2 lg:col-span-1 lg:justify-center lg:px-10">
              <Link
                aria-label="JCCM home"
                className="inline-flex shrink-0 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
                href="/"
              >
                <Image
                  alt="JC Construction Management"
                  className="h-auto w-full max-w-[200px] object-contain sm:max-w-[240px] lg:h-[251px] lg:w-[268px] lg:max-w-none"
                  height={FOOTER_LOGO_HEIGHT}
                  priority={false}
                  src={FOOTER_LOGO}
                  unoptimized
                  width={FOOTER_LOGO_WIDTH}
                />
              </Link>
            </div>

            <FooterNavColumn heading="Company" links={companyLinks} />
            <FooterNavColumn heading="Legal" links={legalLinks} />
            <CommunicationColumn />
          </div>
        </div>

        <p className="m-0 mt-14 pb-6 text-center font-body text-[14px] font-light leading-none text-white/88 lg:mt-32 lg:pb-8">
          © {currentYear} JCCM - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
