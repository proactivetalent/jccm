import Image from "next/image";
import Link from "next/link";

type ExploreLinkProps = Readonly<{
  href: string;
  className?: string;
  label?: string;
}>;

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
      <span className="absolute top-[14px] left-[72px] z-[1] font-body text-[19.646px] leading-[19.646px] font-normal whitespace-nowrap text-brand transition-colors duration-[320ms] ease-[ease] group-hover:text-surface group-focus-visible:text-surface motion-reduce:transition-none">
        {label}
      </span>
    </Link>
  );
}
