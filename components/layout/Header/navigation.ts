export type DropdownNavigationItem = Readonly<{
  label: string;
  href: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  iconLeft: number;
  iconTop: number;
  labelLeft?: number;
  labelTop?: number;
  hoverLabelTop?: number;
  column: 0 | 1;
  row: 0 | 1 | 2;
}>;

export type FullMenuNavigationItem = Readonly<{
  label: string;
  href: string;
}>;

export const navigationRoutes = {
  home: "/",
  services: "/services",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
  blog: "/blog",
  insights: "/insights",
  locations: "/locations",
} as const;

export const servicesDropdownItems: readonly DropdownNavigationItem[] = [
  {
    label: "Ground-Up and New Construction",
    href: "/services/ground-up-and-new-construction",
    icon: "/icons/header/services-ground-up.png",
    iconWidth: 53,
    iconHeight: 53,
    iconLeft: 28,
    iconTop: 24,
    labelTop: 25,
    hoverLabelTop: 23,
    column: 0,
    row: 0,
  },
  {
    label: "Construction Management",
    href: "/services/construction-management",
    icon: "/icons/header/services-construction-management.png",
    iconWidth: 46,
    iconHeight: 45,
    iconLeft: 28,
    iconTop: 27,
    column: 1,
    row: 0,
  },
  {
    label: "Renovation and Build-Outs",
    href: "/services/renovation-and-build-outs",
    icon: "/icons/header/services-renovation.png",
    iconWidth: 46,
    iconHeight: 45,
    iconLeft: 36,
    iconTop: 28,
    column: 0,
    row: 1,
  },
  {
    label: "Residential Portfolio",
    href: "/portfolio/residential",
    icon: "/icons/header/services-residential.png",
    iconWidth: 46,
    iconHeight: 45,
    iconLeft: 34,
    iconTop: 27,
    column: 1,
    row: 1,
  },
  {
    label: "Commercial Portfolio",
    href: "/portfolio/commercial",
    icon: "/icons/header/services-commercial.png",
    iconWidth: 47,
    iconHeight: 47,
    iconLeft: 28,
    iconTop: 28,
    labelLeft: 101,
    labelTop: 28,
    hoverLabelTop: 27,
    column: 0,
    row: 2,
  },
] as const;

export const portfolioDropdownItems: readonly DropdownNavigationItem[] = [
  {
    label: "Mixed Used",
    href: "/portfolio/mixed-use",
    icon: "/icons/header/portfolio-mixed-use.png",
    iconWidth: 43,
    iconHeight: 43,
    iconLeft: 34,
    iconTop: 33,
    column: 0,
    row: 0,
  },
  {
    label: "Retail Stores",
    href: "/portfolio/retail-stores",
    icon: "/icons/header/portfolio-retail.png",
    iconWidth: 43,
    iconHeight: 43,
    iconLeft: 34,
    iconTop: 33,
    column: 1,
    row: 0,
  },
  {
    label: "Ground-Up Portfolio",
    href: "/portfolio/ground-up",
    icon: "/icons/header/portfolio-ground-up.png",
    iconWidth: 43,
    iconHeight: 43,
    iconLeft: 32,
    iconTop: 30,
    labelTop: 26,
    hoverLabelTop: 25,
    column: 0,
    row: 1,
  },
  {
    label: "Residential Portfolio",
    href: "/portfolio/residential",
    icon: "/icons/header/portfolio-residential.png",
    iconWidth: 43,
    iconHeight: 43,
    iconLeft: 34,
    iconTop: 30,
    column: 1,
    row: 1,
  },
  {
    label: "Commercial Portfolio",
    href: "/portfolio/commercial",
    icon: "/icons/header/portfolio-commercial.png",
    iconWidth: 43,
    iconHeight: 43,
    iconLeft: 37,
    iconTop: 33,
    labelLeft: 101,
    labelTop: 28,
    hoverLabelTop: 27,
    column: 0,
    row: 2,
  },
] as const;

export const servicesFullMenuItems: readonly FullMenuNavigationItem[] = [
  {
    label: "Ground-Up and New Construction",
    href: "/services/ground-up-and-new-construction",
  },
  {
    label: "Renovation and Build-Outs",
    href: "/services/renovation-and-build-outs",
  },
  {
    label: "Pre-Construction and Planning",
    href: "/services/pre-construction-and-planning",
  },
  {
    label: "Construction Management",
    href: "/services/construction-management",
  },
  {
    label: "Project Close-Out",
    href: "/services/project-close-out",
  },
] as const;

export const portfolioFullMenuItems: readonly FullMenuNavigationItem[] = [
  { label: "Mixed Use", href: "/portfolio/mixed-use" },
  { label: "Retail Stores", href: "/portfolio/retail-stores" },
  { label: "Residential Portfolio", href: "/portfolio/residential" },
  { label: "Commercial Portfolio", href: "/portfolio/commercial" },
  { label: "Ground-Up Portfolio", href: "/portfolio/ground-up" },
] as const;
