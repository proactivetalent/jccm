"use client";

import Image from "next/image";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useMemo, useState } from "react";

import { MultiSelectFilter } from "./MultiSelectFilter";
import { SortMenu, type SortOrder } from "./SortMenu";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand";
const paginationButton =
  "cursor-pointer border-0 bg-transparent font-body text-lg text-muted disabled:cursor-not-allowed disabled:opacity-35 max-[767px]:text-[15px]";

export type ListingProject = Readonly<{
  id: string;
  title: string;
  slug: string;
  location: string;
  borough: string | null;
  city: string;
  projectType: string;
  category: string;
  categories: string[];
  service: string;
  services: string[];
  excerpt: string;
  completionDate: string | null;
  updatedAt: string;
  imageUrl: string;
  imageAlt: string;
  blurDataUrl?: string;
}>;

type PortfolioListingProps = Readonly<{
  projects: ListingProject[];
  pageSize: number;
}>;

type FilterName = "location" | "projectType" | "category";

function uniqueSorted(values: string[]) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
}

function searchText(project: ListingProject) {
  return [
    project.title,
    project.location,
    project.borough,
    project.city,
    project.projectType,
    project.excerpt,
    ...project.categories,
    ...project.services,
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase();
}

function toggleSelected(selected: string[], value: string) {
  return selected.includes(value)
    ? selected.filter((item) => item !== value)
    : [...selected, value];
}

export function PortfolioListing({ projects, pageSize }: PortfolioListingProps) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [openFilter, setOpenFilter] = useState<FilterName | null>(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [page, setPage] = useState(1);

  const locations = useMemo(
    () => uniqueSorted(projects.map((project) => project.borough || project.city)),
    [projects],
  );
  const projectTypes = useMemo(
    () => uniqueSorted(projects.map((project) => project.projectType)),
    [projects],
  );
  const categories = useMemo(
    () => uniqueSorted(projects.flatMap((project) => project.categories)),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    const matching = projects.filter(
      (project) =>
        (selectedLocations.length === 0 ||
          selectedLocations.includes(project.borough || project.city)) &&
        (selectedProjectTypes.length === 0 ||
          selectedProjectTypes.includes(project.projectType)) &&
        (selectedCategories.length === 0 ||
          project.categories.some((category) => selectedCategories.includes(category))) &&
        (!query || searchText(project).includes(query)),
    );

    if (sortOrder === "title") {
      matching.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "newest" || sortOrder === "oldest") {
      matching.sort((a, b) => {
        const first = a.completionDate || a.updatedAt;
        const second = b.completionDate || b.updatedAt;
        return sortOrder === "newest"
          ? second.localeCompare(first)
          : first.localeCompare(second);
      });
    }

    return matching;
  }, [
    projects,
    selectedLocations,
    selectedProjectTypes,
    selectedCategories,
    search,
    sortOrder,
  ]);

  const safePageSize = Math.max(1, pageSize);
  const pageCount = Math.ceil(filteredProjects.length / safePageSize);
  const currentPage = Math.min(page, Math.max(1, pageCount));
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * safePageSize,
    currentPage * safePageSize,
  );
  const hasFilters = Boolean(
    selectedLocations.length ||
      selectedProjectTypes.length ||
      selectedCategories.length ||
      search,
  );

  function resetPage() {
    setPage(1);
  }

  function clearFilters() {
    setSelectedLocations([]);
    setSelectedProjectTypes([]);
    setSelectedCategories([]);
    setSearch("");
    setPage(1);
  }

  function toggleFilterValue(
    setter: Dispatch<SetStateAction<string[]>>,
    value: string,
  ) {
    setter((selected) => toggleSelected(selected, value));
    resetPage();
  }

  const activeSelections = [
    ...selectedLocations.map((value) => ({ kind: "location" as const, label: "Location", value })),
    ...selectedProjectTypes.map((value) => ({ kind: "projectType" as const, label: "Project type", value })),
    ...selectedCategories.map((value) => ({ kind: "category" as const, label: "Category", value })),
  ];

  function removeSelection(kind: FilterName, value: string) {
    if (kind === "location") {
      setSelectedLocations((selected) => selected.filter((item) => item !== value));
    } else if (kind === "projectType") {
      setSelectedProjectTypes((selected) => selected.filter((item) => item !== value));
    } else {
      setSelectedCategories((selected) => selected.filter((item) => item !== value));
    }
    resetPage();
  }

  return (
    <section aria-label="Project case studies" className="border-b border-divider bg-surface">
      <div
        aria-label="Filter projects"
        className="relative z-[5] mx-0 flex min-h-[75px] border-y border-divider min-[768px]:mx-[31px] max-[900px]:flex-wrap"
      >
        <div className="flex min-w-0 max-[900px]:relative max-[900px]:w-full max-[900px]:border-b max-[900px]:border-divider">
          <MultiSelectFilter
            id="portfolio-location-options"
            isOpen={openFilter === "location"}
            label="Location"
            onClear={() => {
              setSelectedLocations([]);
              resetPage();
            }}
            onOpenChange={(open) => setOpenFilter(open ? "location" : null)}
            onToggle={(value) => toggleFilterValue(setSelectedLocations, value)}
            options={locations}
            selected={selectedLocations}
          />
          <MultiSelectFilter
            id="portfolio-project-type-options"
            isOpen={openFilter === "projectType"}
            label="Project type"
            onClear={() => {
              setSelectedProjectTypes([]);
              resetPage();
            }}
            onOpenChange={(open) => setOpenFilter(open ? "projectType" : null)}
            onToggle={(value) => toggleFilterValue(setSelectedProjectTypes, value)}
            options={projectTypes}
            selected={selectedProjectTypes}
            shortLabel="Type"
          />
          <MultiSelectFilter
            id="portfolio-category-options"
            isOpen={openFilter === "category"}
            label="Category"
            onClear={() => {
              setSelectedCategories([]);
              resetPage();
            }}
            onOpenChange={(open) => setOpenFilter(open ? "category" : null)}
            onToggle={(value) => toggleFilterValue(setSelectedCategories, value)}
            options={categories}
            selected={selectedCategories}
          />
        </div>

        <label className="ml-auto flex min-h-[73px] w-[424px] items-center gap-[17px] border-l border-divider px-[25px] focus-within:shadow-[inset_0_-2px_var(--jccm-color-brand)] max-[900px]:w-full max-[900px]:border-r max-[900px]:border-divider max-[767px]:min-h-[60px] max-[767px]:px-5">
          <span className="sr-only">Search projects</span>
          <Image
            alt=""
            aria-hidden="true"
            className="shrink-0 max-[767px]:h-[21px] max-[767px]:w-[21px]"
            height={27}
            src="/icons/portfolio/search.svg"
            unoptimized
            width={27}
          />
          <input
            className="h-full min-h-[71px] w-full border-0 bg-transparent p-0 font-body text-xl text-ink-strong outline-none placeholder:text-[#a9a9a9] placeholder:opacity-100 max-[767px]:min-h-[58px] max-[767px]:text-[17px]"
            onChange={(event) => {
              setSearch(event.target.value);
              resetPage();
            }}
            placeholder="Search"
            type="search"
            value={search}
          />
        </label>
      </div>

      {activeSelections.length > 0 ? (
        <div
          aria-label="Active filters"
          className="mx-auto mt-4 mb-[-10px] flex w-full flex-wrap items-center gap-[9px] px-6 min-[768px]:mt-5 min-[768px]:mb-[-16px] min-[768px]:w-[calc(100%_-_120px)] min-[768px]:px-0 min-[1401px]:w-[min(calc(100%_-_280px),1640px)]"
        >
          {activeSelections.map(({ kind, label, value }) => (
            <button
              aria-label={`Remove ${label}: ${value}`}
              className={`inline-flex min-h-[34px] cursor-pointer items-center gap-[10px] rounded-full border border-[#a6c8c2] bg-[#e1efec] py-[5px] pr-[10px] pl-[13px] font-body text-sm text-brand-deep hover:border-brand hover:bg-[#d4e9e4] ${focusRing}`}
              key={`${kind}-${value}`}
              onClick={() => removeSelection(kind, value)}
              type="button"
            >
              <span>{label}: {value}</span>
              <span aria-hidden="true" className="text-xl leading-[0.7]">×</span>
            </button>
          ))}
          <button
            className={`min-h-[34px] cursor-pointer border-0 bg-transparent px-2 py-1 font-body text-sm font-semibold text-brand hover:underline ${focusRing}`}
            onClick={clearFilters}
            type="button"
          >
            Clear all
          </button>
        </div>
      ) : null}

      <div className="mx-auto w-full px-6 pt-[34px] pb-20 min-[768px]:w-[calc(100%_-_120px)] min-[768px]:px-0 min-[768px]:pt-[54px] min-[768px]:pb-[120px] min-[1401px]:w-[min(calc(100%_-_280px),1640px)]">
        <div className="flex min-h-[35px] items-center justify-between">
          <p aria-live="polite" className="m-0 font-body text-[17px] leading-[1.35] min-[768px]:text-xl">
            <strong className="font-semibold">{filteredProjects.length}</strong>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
          <SortMenu
            onChange={(value) => {
              setSortOrder(value);
              resetPage();
            }}
            value={sortOrder}
          />
        </div>

        {visibleProjects.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-y-[55px] min-[768px]:mt-[76px] min-[768px]:grid-cols-2 min-[768px]:gap-x-[38px] min-[768px]:gap-y-[76px] min-[1401px]:gap-x-[62px]">
            {visibleProjects.map((project) => (
              <article className="group/card min-w-0" key={project.id}>
                <Link
                  aria-label={`View ${project.title}`}
                  className="block text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-brand"
                  href={`/portfolio/${project.slug}`}
                >
                  <div className="flex min-h-5 items-center gap-[13px] font-headline text-[15px] leading-5 font-normal">
                    <span>{project.service}</span>
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="shrink-0 brightness-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-focus-within/card:translate-x-1 group-focus-within/card:-translate-y-1 motion-reduce:transition-none"
                      height={14}
                      src="/icons/home/testimonials/external-arrow.svg"
                      unoptimized
                      width={14}
                    />
                  </div>
                  <div className="relative mt-5 aspect-[1.699] overflow-hidden rounded-[9px] bg-[#d9e4e3] min-[768px]:mt-[35px]">
                    <Image
                      alt={project.imageAlt}
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.025] group-focus-within/card:scale-[1.025] motion-reduce:transition-none"
                      fill
                      blurDataURL={project.blurDataUrl}
                      placeholder={project.blurDataUrl ? "blur" : "empty"}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      src={project.imageUrl}
                    />
                  </div>
                  <p className="mt-5 mb-0 font-headline text-[17px] leading-[1.38] font-normal text-brand min-[768px]:text-xl">
                    {project.location}
                  </p>
                  <h2 className="mt-[3px] mb-0 max-w-[680px] font-headline text-[clamp(26px,7vw,32px)] leading-[1.2] font-normal tracking-[-0.025em] min-[768px]:text-[clamp(28px,2.55vw,36px)] min-[1401px]:text-[36px]">
                    {project.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-[76px] min-h-[310px] border border-divider px-[30px] py-20 text-center">
            <h2 className="m-0 font-headline text-[36px] font-normal">No projects found</h2>
            <p className="mt-3 mb-0 text-lg">Try a different search or clear your filters.</p>
            {hasFilters ? (
              <button
                className={`mt-[25px] cursor-pointer border border-brand bg-brand px-5 py-3 font-body text-white ${focusRing}`}
                onClick={clearFilters}
                type="button"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        )}
      </div>

      {pageCount > 1 ? (
        <nav
          aria-label="Project pages"
          className="mx-0 grid min-h-[75px] grid-cols-2 border-t border-divider min-[768px]:mx-[31px]"
        >
          <div className="flex items-center justify-center gap-[5px] px-[10px] min-[768px]:justify-end min-[768px]:gap-3 min-[768px]:pr-[62px]">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (number) => (
                <button
                  aria-current={number === currentPage ? "page" : undefined}
                  className={`${paginationButton} ${focusRing} ${number === currentPage ? "font-semibold text-ink-strong" : ""}`}
                  key={number}
                  onClick={() => setPage(number)}
                  type="button"
                >
                  {number}
                </button>
              ),
            )}
          </div>
          <button
            className={`${paginationButton} ${focusRing} flex items-center justify-center gap-4 border-l border-divider text-ink-strong uppercase min-[768px]:justify-start min-[768px]:pl-[85px]`}
            disabled={currentPage === pageCount}
            onClick={() => setPage((previous) => previous + 1)}
            type="button"
          >
            Next page
            <span aria-hidden="true" className="text-[28px] leading-none text-brand">→</span>
          </button>
        </nav>
      ) : null}
    </section>
  );
}
