"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type SortOrder = "featured" | "newest" | "oldest" | "title";

const sortOptions: ReadonlyArray<{ value: SortOrder; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title", label: "Title A–Z" },
];

type SortMenuProps = Readonly<{
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}>;

export function SortMenu({ value, onChange }: SortMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const currentLabel = sortOptions.find((option) => option.value === value)?.label;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <div
      className="relative font-body text-lg whitespace-nowrap max-[767px]:text-[15px]"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.stopPropagation();
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      }}
      ref={rootRef}
    >
      <button
        aria-controls="portfolio-sort-options"
        aria-expanded={isOpen}
        aria-label={`Sort by ${currentLabel}`}
        className="inline-flex min-h-[38px] cursor-pointer items-center gap-[9px] border-0 bg-transparent px-1 font-body text-lg text-ink-strong hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand max-[767px]:gap-1.5 max-[767px]:text-[15px]"
        onClick={() => setIsOpen((open) => !open)}
        ref={triggerRef}
        type="button"
      >
        <span>Sort by</span>
        <span aria-hidden="true" className="relative block h-5 w-5">
          <Image
            alt=""
            className="absolute top-0 left-0 h-[10px] w-[10px]"
            height={10}
            src="/icons/portfolio/sort-up.svg"
            unoptimized
            width={10}
          />
          <Image
            alt=""
            className="absolute right-0 bottom-0 h-[10px] w-[10px] rotate-180"
            height={10}
            src="/icons/portfolio/sort-down.svg"
            unoptimized
            width={10}
          />
        </span>
      </button>
      {isOpen ? (
        <div
          aria-label="Sort projects"
          className="absolute top-[calc(100%+7px)] right-0 z-[6] min-w-[205px] border border-t-[3px] border-divider border-t-brand bg-[#f8fcfb] p-[7px] shadow-[0_18px_32px_rgb(16_56_51_/_14%)]"
          id="portfolio-sort-options"
          role="group"
        >
          {sortOptions.map((option) => (
            <button
              aria-current={value === option.value ? "true" : undefined}
              className={`flex min-h-[42px] w-full cursor-pointer items-center justify-between gap-[15px] rounded-sm border-0 px-[11px] py-[9px] text-left font-body text-base text-ink-strong hover:bg-[#e6f2ef] hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand ${value === option.value ? "bg-[#e6f2ef] text-brand-deep" : "bg-transparent"}`}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
                triggerRef.current?.focus();
              }}
              type="button"
            >
              {option.label}
              {value === option.value ? (
                <span aria-hidden="true" className="text-lg leading-none text-brand">✓</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
