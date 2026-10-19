import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type ExploreLinkProps = Readonly<{
  href: string;
  className?: string;
  label?: string;
}>;

type ExploreButtonProps = Readonly<{
  className?: string;
  label?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}>;

function ExploreCtaContent({
  centerLabel = false,
  label,
}: Readonly<{ centerLabel?: boolean; label: string }>) {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] z-[1] box-border flex h-[54px] w-[54px] items-center justify-center"
      >
        <Image
          alt=""
          className="h-[18px] w-[18px] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
          height={18}
          src="/icons/home/explore-arrow.svg"
          unoptimized
          width={18}
        />
      </span>
      <span
        className={`absolute z-[1] font-body font-normal whitespace-nowrap text-brand transition-colors duration-[320ms] ease-[ease] group-hover:text-surface group-focus-visible:text-surface motion-reduce:transition-none ${centerLabel ? "top-1/2 right-0 left-[54px] w-auto -translate-y-1/2 text-center text-[16px] leading-4" : "top-[14px] left-[72px] text-[19.646px] leading-[19.646px]"}`}
      >
        {label}
      </span>
    </>
  );
}

export function ExploreLink({
  href,
  className,
  label = "Explore",
}: ExploreLinkProps) {
  return (
    <Link
      className={`group relative box-border block h-[54px] w-[167px] overflow-hidden border-[3px] border-brand bg-transparent text-brand no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink ${className ?? ""}`}
      href={href}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] h-[54px] w-[54px] bg-brand transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
      />
      <ExploreCtaContent label={label} />
    </Link>
  );
}

export function ExploreButton({
  className,
  label = "Explore",
  type = "button",
}: ExploreButtonProps) {
  return (
    <button
      className={`group relative box-border block h-[54px] w-[220px] cursor-pointer overflow-hidden border-[3px] border-brand bg-transparent p-0 text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink ${className ?? ""}`}
      type={type}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3px] -left-[3px] h-[54px] w-[54px] bg-brand transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%+6px)] group-focus-visible:w-[calc(100%+6px)] motion-reduce:transition-none"
      />
      <ExploreCtaContent centerLabel label={label} />
    </button>
  );
}
