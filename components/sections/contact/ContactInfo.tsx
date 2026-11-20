import { footerContact } from "@/components/layout/Footer/footerData";

const channels = [
  {
    number: "01",
    label: "Email our team",
    value: footerContact.email,
    href: footerContact.emailHref,
  },
  {
    number: "02",
    label: "Call our team",
    value: footerContact.phone,
    href: footerContact.phoneHref,
  },
] as const;

export function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="relative isolate overflow-hidden border-t border-divider/70 bg-surface"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-7 hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-7 hidden w-px bg-divider/70 lg:block" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-48 right-[12%] -z-10 size-[560px] rounded-full bg-brand/10 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-[1536px] gap-12 px-6 py-16 md:px-[60px] md:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-[clamp(64px,8vw,128px)] lg:px-[159px] lg:py-[112px]">
        <div className="max-w-[500px]">
          <h2
            className="m-0 font-headline text-[clamp(42px,7vw,64px)] leading-[1.02] font-normal tracking-[-0.04em] text-ink"
            id="contact-info-title"
          >
            We’re always happy to assist you.
          </h2>
          <p className="mt-6 mb-0 max-w-[390px] font-body text-[17px] leading-[1.55] text-ink/70">
            Reach out directly to the JCCM team. We’re here to help move your project forward.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-card border border-white/10 bg-[linear-gradient(132deg,#173f3d_0%,#205b55_62%,#28766b_100%)] p-7 text-white shadow-[0_22px_60px_rgb(32_83_81_/_12%)] sm:p-9 lg:p-11">
          <span aria-hidden="true" className="pointer-events-none absolute -top-28 -right-20 size-72 rounded-full border border-white/10" />
          <span aria-hidden="true" className="pointer-events-none absolute -top-12 -right-4 size-40 rounded-full border border-white/10" />

          <div className="relative grid gap-8 sm:grid-cols-2 sm:gap-7">
            {channels.map((channel) => (
              <div className="min-w-0" key={channel.number}>
                <p className="m-0 flex items-center gap-3 font-body text-[12px] font-medium tracking-[0.14em] text-[#bce3d7] uppercase">
                  <span className="font-metric text-[13px] tracking-normal text-white/55">{channel.number}</span>
                  {channel.label}
                </p>
                <a
                  className="group mt-5 inline-flex max-w-full items-center gap-3 font-headline text-[clamp(19px,3vw,25px)] leading-[1.2] font-medium text-white no-underline transition-colors duration-300 hover:text-[#c6e7df] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6e7df]"
                  href={channel.href}
                >
                  <span className="break-all">{channel.value}</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.25 12.75 12.5 3.5M4.5 3.5h8v8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="relative mt-9 flex flex-col gap-2 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 flex items-center gap-2.5 font-body text-[12px] font-medium tracking-[0.13em] text-white/65 uppercase">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#92d7c8] shadow-[0_0_12px_rgb(146_215_200_/_65%)]" />
              Assistance hours
            </p>
            <p className="m-0 font-body text-[15px] leading-[1.4] text-white/90">
              Monday–Friday <span className="px-1 text-white/45">/</span> 6 am–8 pm EST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
