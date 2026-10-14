"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type MultiSelectFilterProps = Readonly<{
  id: string;
  label: string;
  shortLabel?: string;
  options: string[];
  selected: string[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onToggle: (option: string) => void;
  onClear: () => void;
}>;

export function MultiSelectFilter({
  id,
  label,
  shortLabel,
  options,
  selected,
  isOpen,
  onOpenChange,
  onToggle,
  onClear,
}: MultiSelectFilterProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    rootRef.current?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen, onOpenChange]);

  return (
    <div
      className={`group/filter relative min-w-0 scroll-mt-[110px] border-r border-divider first:border-l max-[900px]:w-auto max-[900px]:flex-1 max-[767px]:static ${label === "Project type" ? "w-[235px]" : "w-[199px]"} ${selected.length > 0 || isOpen ? "bg-[#e1efec]" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.stopPropagation();
          onOpenChange(false);
          triggerRef.current?.focus();
        }
      }}
      ref={rootRef}
    >
      <button
        aria-controls={id}
        aria-expanded={isOpen}
        aria-label={`${label}: ${selected.length} selected`}
        className="flex min-h-[73px] w-full cursor-pointer items-center gap-2 border-0 bg-transparent py-0 pr-6 pl-7 text-left font-body text-xl font-normal text-ink-strong hover:text-brand-deep focus-visible:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand max-[767px]:min-h-[60px] max-[767px]:gap-[5px] max-[767px]:px-[10px] max-[767px]:text-[15px]"
        onClick={() => onOpenChange(!isOpen)}
        ref={triggerRef}
        type="button"
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          <span className={shortLabel ? "max-[767px]:hidden" : undefined}>{label}</span>
          {shortLabel ? (
            <span className="hidden max-[767px]:inline">{shortLabel}</span>
          ) : null}
        </span>
        {selected.length > 0 ? (
          <span
            aria-hidden="true"
            className="grid h-[22px] min-w-[22px] shrink-0 place-items-center rounded-full bg-brand px-1 text-[13px] leading-none font-semibold text-white max-[767px]:h-[18px] max-[767px]:min-w-[18px] max-[767px]:px-[3px] max-[767px]:text-[11px]"
          >
            {selected.length}
          </span>
        ) : null}
        <Image
          alt=""
          aria-hidden="true"
          className={`ml-auto shrink-0 transition-transform duration-180 ease-in-out motion-reduce:transition-none max-[767px]:w-[9px] ${isOpen ? "rotate-0" : "rotate-180"}`}
          height={11}
          src="/icons/portfolio/chevron.svg"
          unoptimized
          width={12}
        />
      </button>

      {isOpen ? (
        <div
          aria-label={`${label} options`}
          className="absolute top-[calc(100%+1px)] left-[-1px] z-20 box-border w-[max(100%,280px)] max-w-[min(360px,calc(100vw_-_32px))] border border-t-[3px] border-divider border-t-brand bg-[#f8fcfb] p-[18px] shadow-[0_18px_32px_rgb(16_56_51_/_14%)] max-[767px]:right-0 max-[767px]:left-0 max-[767px]:w-full max-[767px]:max-w-none"
          id={id}
          role="group"
        >
          <div className="flex items-center justify-between gap-4 border-b border-[#d6e2df] px-0.5 pt-0 pb-3 text-sm text-subtle">
            <span>Select one or more</span>
            {selected.length > 0 ? (
              <button
                className="cursor-pointer border-0 bg-transparent p-0 font-body text-sm font-semibold text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand"
                onClick={onClear}
                type="button"
              >
                Clear
              </button>
            ) : null}
          </div>
          <div className="grid max-h-[260px] overflow-y-auto py-[9px]">
            {options.map((option) => (
              <label
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-[5px] px-[10px] py-2 text-base leading-[1.3] text-ink-strong hover:bg-[#e6f2ef]"
                key={option}
              >
                <input
                  className="m-0 h-[18px] w-[18px] shrink-0 cursor-pointer accent-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand"
                  checked={selected.includes(option)}
                  onChange={() => onToggle(option)}
                  type="checkbox"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
