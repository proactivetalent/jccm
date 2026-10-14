"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./Header.module.css";
import {
  type DropdownNavigationItem,
  navigationRoutes,
  portfolioDropdownItems,
  portfolioFullMenuItems,
  servicesDropdownItems,
  servicesFullMenuItems,
} from "./navigation";

type DropdownName = "services" | "portfolio";
type FullMenuState = "main" | "services" | "projects";
type FullMenuPhase = "entering" | "open" | "closing";

const resetButtonClass =
  "m-0 cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit";

const focusRingClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

const headerSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "/icons/footer/linkedin-nav.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: "/icons/footer/youtube-nav.svg",
  },
] as const;

type DropdownMenuProps = Readonly<{
  id: string;
  items: readonly DropdownNavigationItem[];
  variant: DropdownName;
  onNavigate: () => void;
}>;

function DropdownMenu({ id, items, variant, onNavigate }: DropdownMenuProps) {
  const positionClass =
    variant === "services"
      ? "top-[53px] left-[-479px]"
      : "top-[54px] left-[-624px]";

  return (
    <div
      aria-label={`${variant === "services" ? "Services" : "Portfolio"} navigation`}
      className={`absolute z-[60] h-[351px] w-[927px] bg-surface shadow-[0_3.231654644px_37.244819641px_rgb(0_0_0_/_10%)] ${positionClass}`}
      id={id}
      role="menu"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[17px] left-px z-[2] block h-[1.688539505px] w-[926px] bg-[rgb(181_185_187_/_50%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[124px] left-px z-[2] block h-[1.688539505px] w-[926px] bg-[rgb(181_185_187_/_50%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[231px] left-px z-[2] block h-[1.688539505px] w-[926px] bg-[rgb(181_185_187_/_50%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[338px] left-px z-[2] block h-[1.688539505px] w-[926px] bg-[rgb(181_185_187_/_50%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[17px] left-[463px] z-[2] block h-[334px] w-[1.688539505px] bg-[rgb(181_185_187_/_50%)]"
      />

      {items.map((item) => {
        const itemStyle = {
          "--dropdown-column": item.column,
          "--dropdown-row": item.row,
          "--icon-left": `${item.iconLeft}px`,
          "--icon-top": `${item.iconTop}px`,
          "--label-left": `${item.labelLeft ?? 100}px`,
          "--label-top": `${item.labelTop ?? 27}px`,
          "--label-hover-top": `${item.hoverLabelTop ?? 25}px`,
        } as CSSProperties;

        return (
          <Link
            className={styles.dropdownItem}
            data-row={item.row}
            href={item.href}
            key={`${variant}-${item.label}`}
            onClick={onNavigate}
            role="menuitem"
            style={itemStyle}
          >
            <Image
              alt=""
              aria-hidden="true"
              className={styles.dropdownIcon}
              height={item.iconHeight}
              src={item.icon}
              unoptimized
              width={item.iconWidth}
            />
            <span className={styles.dropdownLabel}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

type HeaderDropdownTriggerProps = Readonly<{
  label: "Services" | "Portfolio";
  menu: DropdownName;
  isOpen: boolean;
  onToggle: (menu: DropdownName) => void;
  onNavigate: () => void;
}>;

function HeaderDropdownTrigger({
  label,
  menu,
  isOpen,
  onToggle,
  onNavigate,
}: HeaderDropdownTriggerProps) {
  const menuId = `desktop-${menu}-menu`;
  const items = menu === "services" ? servicesDropdownItems : portfolioDropdownItems;
  const widthClass = menu === "services" ? "w-[102px]" : "ml-[42px] w-[99px]";

  return (
    <li
      className={`relative hidden h-[26px] shrink-0 items-center font-headline text-xl leading-normal font-normal tracking-normal lg:flex ${widthClass}`}
    >
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        className={`group grid h-[26px] w-full grid-cols-[1fr_13px] items-center gap-x-1.5 text-left text-ink ${resetButtonClass} ${focusRingClass} hover:text-brand focus-visible:text-brand ${isOpen ? "text-brand" : ""}`}
        onClick={() => onToggle(menu)}
        type="button"
      >
        <span>{label}</span>
        <span
          aria-hidden="true"
          className={`relative block h-2 w-[13px] ${
            isOpen ? "origin-center translate-x-px -rotate-90" : ""
          }`}
        >
          <Image
            alt=""
            className={`absolute inset-0 h-2 w-[13px] ${
              isOpen
                ? "opacity-0"
                : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0"
            }`}
            height={8}
            src="/icons/header/nav-arrow-default.png"
            unoptimized
            width={13}
          />
          <Image
            alt=""
            className={`absolute inset-0 h-2 w-[13px] ${
              isOpen
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            }`}
            height={8}
            src="/icons/header/nav-arrow-hover.png"
            unoptimized
            width={13}
          />
        </span>
      </button>

      {isOpen ? (
        <DropdownMenu
          id={menuId}
          items={items}
          onNavigate={onNavigate}
          variant={menu}
        />
      ) : null}
    </li>
  );
}

type FullScreenMenuProps = Readonly<{
  state: FullMenuState;
  menuPhase: FullMenuPhase;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onMenuTransitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => void;
  onStateChange: (state: FullMenuState) => void;
}>;

function FullScreenMenu({
  state,
  menuPhase,
  closeButtonRef,
  onClose,
  onMenuTransitionEnd,
  onStateChange,
}: FullScreenMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const submenuItems =
    state === "services"
      ? servicesFullMenuItems
      : state === "projects"
        ? portfolioFullMenuItems
        : null;

  const mobileSubmenuOpen = state === "services" || state === "projects";

  function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !overlayRef.current) {
      return;
    }

    const focusable = Array.from(
      overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function primaryItemVisibility(slot: "home" | "services" | "projects" | "about" | "contact") {
    if (!mobileSubmenuOpen) {
      return "";
    }
    if (state === "services" && slot === "services") {
      return "";
    }
    if (state === "projects" && slot === "projects") {
      return "";
    }
    return "max-md:hidden";
  }

  const servicesMarginClass =
    state === "services"
      ? "mt-0 md:mt-6 lg:mt-[34.7075px]"
      : "mt-[18px] md:mt-6 lg:mt-[34.7075px]";
  const projectsMarginClass =
    state === "projects"
      ? "mt-0 md:mt-6 lg:mt-[34.7075px]"
      : "mt-[18px] md:mt-6 lg:mt-[34.7075px]";

  return (
    <div
      aria-label="Site navigation"
      aria-modal="true"
      className={`fixed top-0 left-0 z-[100] h-dvh w-full overflow-x-hidden overflow-y-auto overscroll-contain bg-surface ${styles.fullMenuViewport} ${styles.fullMenuSlide}`}
      data-menu-phase={menuPhase}
      onKeyDown={handleDialogKeyDown}
      onTransitionEnd={onMenuTransitionEnd}
      ref={overlayRef}
      role="dialog"
    >
      <div
        className={`relative left-0 h-[max(100dvh,760px)] w-full overflow-hidden bg-surface text-brand md:h-[max(100dvh,820px)] lg:absolute lg:top-0 ${styles.fullMenu}`}
        data-state={state}
      >
        <div
          aria-hidden="true"
          className={`absolute top-0 left-0 z-0 hidden h-full w-[32.2395833333%] overflow-hidden bg-brand after:absolute after:inset-[0_3px_-3px_0] after:bg-[linear-gradient(to_bottom,rgb(43_127_115_/_0%)_0%,var(--jccm-color-brand)_100%)] after:content-[''] lg:block ${styles.cityImagePanel}`}
        >
          <Image
            alt=""
            className="object-cover object-top opacity-[0.24] mix-blend-luminosity"
            fill
            priority
            sizes="619px"
            src="/images/header/menu-city.jpeg"
            unoptimized
          />
        </div>

        <div
          aria-hidden="true"
          className={`absolute top-0 left-0 z-0 h-full w-full overflow-hidden bg-surface after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,rgb(236_244_243_/_0%)_51.585%,var(--jccm-color-surface)_100%)] after:content-[''] md:right-0 md:left-auto md:w-[58%] lg:left-[57.96875%] lg:w-[42.03125%] ${styles.craneImagePanel}`}
        >
          <Image
            alt=""
            className="object-cover object-top opacity-[0.12] mix-blend-luminosity"
            fill
            priority
            sizes="807px"
            src="/images/header/menu-crane.jpeg"
            unoptimized
          />
        </div>

        <span
          aria-hidden="true"
          className={`absolute top-0 left-[32.2395833333%] z-[2] hidden h-full w-[1.983790159px] bg-divider lg:block ${styles.dividerLeft}`}
        />
        <span
          aria-hidden="true"
          className={`absolute top-0 left-[42%] z-[2] hidden h-full w-[1.983790159px] bg-divider md:block lg:left-[58.1770833333%] ${styles.dividerRight}`}
        />
        <span
          aria-hidden="true"
          className={`absolute bottom-[200px] left-0 z-[2] hidden h-[1.983790159px] w-full bg-divider md:block lg:top-[748px] lg:bottom-auto lg:left-px ${styles.dividerHorizontal}`}
        />

        <button
          aria-label="Close navigation menu"
          className={`absolute top-[18px] right-4 left-auto z-[5] h-11 w-11 md:top-[26px] md:right-8 lg:top-[28px] lg:origin-top-right lg:scale-[0.8] ${resetButtonClass} ${focusRingClass} ${styles.closeButton}`}
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <Image
            alt=""
            className="m-[5.5px] block h-[33px] w-[33px]"
            height={33}
            src="/icons/header/close.png"
            unoptimized
            width={33}
          />
        </button>

        <nav
          aria-label="Expanded desktop navigation"
          className={`absolute top-[94px] left-6 z-[4] flex w-[calc(100%-48px)] flex-col items-start md:top-[146px] md:left-12 md:w-[calc(42%-80px)] lg:top-[261.940577343px] lg:left-[35.4825083415%] lg:w-[315px] ${styles.fullMenuPrimaryNav}`}
        >
          <Link
            className={`inline-flex h-[43px] items-start font-body text-[clamp(34px,10.25vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] whitespace-nowrap text-brand no-underline hover:underline hover:decoration-from-font focus-visible:underline focus-visible:decoration-from-font md:h-[51px] md:text-[42px] lg:h-[57.741092682px] lg:text-[47.805934906px] ${focusRingClass} ${styles.fullMenuPrimaryLink} ${primaryItemVisibility("home")}`}
            href={navigationRoutes.home}
            onClick={onClose}
          >
            Home
          </Link>
          <button
            aria-controls="full-menu-services"
            aria-expanded={state === "services"}
            className={`${servicesMarginClass} inline-flex h-[43px] items-start gap-3.5 font-body text-[clamp(34px,10.25vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] whitespace-nowrap text-brand hover:underline hover:decoration-from-font focus-visible:underline focus-visible:decoration-from-font md:h-[51px] md:gap-[18px] md:text-[42px] lg:h-[57.741092682px] lg:gap-7 lg:text-[47.805934906px] ${resetButtonClass} ${focusRingClass} ${styles.fullMenuPrimaryButton} ${primaryItemVisibility("services")}`}
            onClick={() => onStateChange(state === "services" ? "main" : "services")}
            type="button"
          >
            <span>Services</span>
            <Image
              alt=""
              aria-hidden="true"
              className={"mt-2 shrink-0 md:mt-[13px] lg:mt-[15px] lg:h-[20px] lg:w-[20px]"}
              height={8}
              src="/icons/header/nav-arrow-hover.svg"
              unoptimized
              width={13}
            />
          </button>
          <button
            aria-controls="full-menu-projects"
            aria-expanded={state === "projects"}
            className={`${projectsMarginClass} inline-flex h-[43px] items-start gap-3.5 font-body text-[clamp(34px,10.25vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] whitespace-nowrap text-brand hover:underline hover:decoration-from-font focus-visible:underline focus-visible:decoration-from-font md:h-[51px] md:gap-[18px] md:text-[42px] lg:h-[57.741092682px] lg:gap-[27px] lg:text-[47.805934906px] ${resetButtonClass} ${focusRingClass} ${styles.fullMenuPrimaryButton} ${primaryItemVisibility("projects")}`}
            onClick={() => onStateChange(state === "projects" ? "main" : "projects")}
            type="button"
          >
            <span>Projects</span>
            <Image
              alt=""
              aria-hidden="true"
              className={"mt-2 shrink-0 md:mt-[13px] lg:mt-[15px] lg:h-[20px] lg:w-[20px]"}
              height={8}
              src="/icons/header/nav-arrow-hover.svg"
              unoptimized
              width={13}
            />
          </button>
          <Link
            className={`mt-[18px] inline-flex h-[43px] items-start font-body text-[clamp(34px,10.25vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] whitespace-nowrap text-brand no-underline hover:underline hover:decoration-from-font focus-visible:underline focus-visible:decoration-from-font md:mt-6 md:h-[51px] md:text-[42px] lg:mt-[34.441px] lg:h-[67.898269653px] lg:text-[47.805934906px] lg:leading-[1.4] lg:tracking-normal ${focusRingClass} ${styles.fullMenuPrimaryLink} ${primaryItemVisibility("about")}`}
            href={navigationRoutes.about}
            onClick={onClose}
          >
            About us
          </Link>
          <Link
            className={`mt-[18px] inline-flex h-[43px] items-start font-body text-[clamp(34px,10.25vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] whitespace-nowrap text-brand no-underline hover:underline hover:decoration-from-font focus-visible:underline focus-visible:decoration-from-font md:mt-6 md:h-[51px] md:text-[42px] lg:mt-[34.456px] lg:h-[57.741092682px] lg:text-[48.10956955px] ${focusRingClass} ${styles.fullMenuPrimaryLink} ${styles.fullMenuPrimaryContact} ${primaryItemVisibility("contact")}`}
            href={navigationRoutes.contact}
            onClick={onClose}
          >
            Contact us
          </Link>
        </nav>

        {submenuItems ? (
          <nav
            aria-label={`${state === "services" ? "Services" : "Projects"} submenu`}
            className={`absolute top-[166px] right-6 left-6 z-[4] flex w-auto flex-col items-start md:top-[146px] md:right-10 md:left-[calc(42%+40px)] lg:top-[261px] lg:right-[2.5%] lg:left-[62.1354166667%] ${
              state === "services"
                ? styles.servicesFullMenuSubnav
                : `lg:top-[263px] lg:left-[62.1875%] ${styles.projectsFullMenuSubnav}`
            } ${styles.fullMenuSubnav} ${styles.fullMenuSubnavSlide}`}
            id={`full-menu-${state}`}
            key={`full-menu-${state}`}
          >
            {submenuItems.map((item, index) => {
              const servicesSpacing =
                state === "services"
                  ? index === 0
                    ? ""
                    : index === 3
                      ? "mt-5 md:mt-7 lg:mt-[55px]"
                      : index === 4
                        ? "mt-5 md:mt-7 lg:mt-12"
                        : "mt-5 md:mt-7 lg:mt-[51px]"
                  : index === 0
                    ? ""
                    : index === 3 || index === 4
                      ? "mt-5 md:mt-7 lg:mt-[54px]"
                      : "mt-5 md:mt-7 lg:mt-12";

              return (
                <Link
                  className={`block h-auto max-w-full font-headline text-[clamp(24px,7vw,28px)] leading-[1.15] font-normal tracking-normal whitespace-normal text-brand no-underline md:text-[clamp(26px,3.2vw,36px)] lg:h-[50px] lg:text-[40px] lg:leading-[36.156700134px] lg:whitespace-nowrap ${focusRingClass} ${servicesSpacing}`}
                  href={item.href}
                  key={item.label}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}

        <div
          className={`absolute right-6 bottom-[151px] left-6 z-[4] flex h-auto w-auto items-center gap-3 font-figtree text-base leading-normal font-semibold md:right-auto md:bottom-[142px] md:left-12 md:gap-[15px] md:text-[17px] lg:top-[788.021632031px] lg:right-auto lg:bottom-auto lg:left-[35.4825083415%] lg:block lg:h-[23px] lg:w-[298px] lg:gap-0 lg:text-[18.980546951px] ${styles.fullMenuUtilityNav}`}
        >
          <Link
            className={`text-brand no-underline lg:absolute lg:top-0 lg:left-0 ${focusRingClass}`}
            href={navigationRoutes.blog}
            onClick={onClose}
          >
            Blogs
          </Link>
          <span
            aria-hidden="true"
            className="h-[5px] w-[5px] rounded-full bg-brand lg:absolute lg:top-[12.105px] lg:left-[69.336914063px] lg:h-[5.502938747px] lg:w-[5.502938747px]"
          />
          <Link
            className={`text-brand no-underline lg:absolute lg:top-0 lg:left-[95.750488281px] ${focusRingClass}`}
            href={navigationRoutes.insights}
            onClick={onClose}
          >
            Insights
          </Link>
          <span
            aria-hidden="true"
            className="h-[5px] w-[5px] rounded-full bg-brand lg:absolute lg:top-[12.105px] lg:left-[186.263671875px] lg:h-[5.502938747px] lg:w-[5.502938747px]"
          />
          <Link
            className={`text-brand no-underline lg:absolute lg:top-0 lg:left-[212.412597656px] ${focusRingClass}`}
            href={navigationRoutes.locations}
            onClick={onClose}
          >
            Locations
          </Link>
        </div>

        <p
          className={`absolute top-[759.406160311px] left-[5.3309726715%] z-[4] m-0 hidden w-[106.110534668px] border-t-[1.649161935px] border-surface pt-[4.402459px] font-headline text-[18.234886169px] leading-[1.2] font-normal tracking-[-0.01em] text-white lg:block ${styles.fullMenuTagline}`}
        >
          BUILDING
          <br />
          TOGETHER,
          <br />
          TOMORROW
        </p>

        <address
          className={`absolute right-6 bottom-7 left-6 z-[4] flex flex-col items-start font-body text-base leading-[1.2] font-normal tracking-[-0.01em] text-brand not-italic md:right-auto md:bottom-[45px] md:left-[calc(42%+40px)] md:text-[17px] lg:top-[814px] lg:right-[2.5%] lg:bottom-auto lg:left-[77.5520833333%] lg:text-[18.234886169px] ${styles.fullMenuContact}`}
        >
          <a className="text-inherit no-underline" href="tel:+12122716837">
            212-271-6837
          </a>
          <a
            className="mt-[10.216318px] text-inherit no-underline"
            href="mailto:info@jccmanagement.com"
          >
            info@jccmanagement.com
          </a>
          <span className="mt-4 flex items-center gap-2 lg:mt-[21.738px]">
            {headerSocialLinks.map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                className={`inline-flex ${focusRingClass}`}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="block size-[39px]"
                  height={39}
                  src={social.icon}
                  unoptimized
                  width={39}
                />
              </a>
            ))}
          </span>
        </address>
      </div>
    </div>
  );
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [fullMenuState, setFullMenuState] = useState<FullMenuState | null>(null);
  const [menuPhase, setMenuPhase] = useState<FullMenuPhase | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasFullMenuOpen = useRef(false);
  const isMenuMounted = fullMenuState !== null;
  const isFullMenuOpen = isMenuMounted || menuPhase === "closing";

  useEffect(() => {
    if (menuPhase !== "entering") {
      return;
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuPhase("open");
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [menuPhase]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        openDropdown &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openDropdown]);

  const closeFullMenu = useCallback(() => {
    if (fullMenuState === null) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFullMenuState(null);
      setMenuPhase(null);
      return;
    }

    setMenuPhase("closing");
  }, [fullMenuState]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (isFullMenuOpen) {
        closeFullMenu();
      } else if (openDropdown) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeFullMenu, isFullMenuOpen, openDropdown]);

  useEffect(() => {
    if (isFullMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      wasFullMenuOpen.current = true;

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    if (wasFullMenuOpen.current) {
      hamburgerRef.current?.focus();
      wasFullMenuOpen.current = false;
    }
  }, [isFullMenuOpen]);

  useEffect(() => {
    if (menuPhase === "open") {
      closeButtonRef.current?.focus();
    }
  }, [menuPhase]);

  function toggleDropdown(menu: DropdownName) {
    setOpenDropdown((current) => (current === menu ? null : menu));
  }

  function openFullMenu() {
    setOpenDropdown(null);
    setFullMenuState("main");
    setMenuPhase(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "open"
        : "entering",
    );
  }

  function handleMenuTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== "transform" || event.target !== event.currentTarget) {
      return;
    }

    if (menuPhase === "closing") {
      setFullMenuState(null);
      setMenuPhase(null);
    }
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 h-20 w-full bg-white/80 md:h-24 lg:h-[91.2px]"
        ref={headerRef}
      >
        <div className="relative mx-auto h-20 w-[calc(100%-32px)] md:h-24 md:w-[calc(100%-64px)] lg:absolute lg:top-0 lg:left-1/2 lg:mx-0 lg:h-[114px] lg:w-[min(109.0494791667%,2093.75px)] lg:origin-top lg:-translate-x-1/2 lg:scale-[0.8]">
          <Link
            aria-label="JCCM home"
            className={`absolute top-2 left-0 flex h-16 w-56 text-ink no-underline max-[374px]:w-[108px] md:h-20 md:w-[300px] lg:top-[9px] lg:h-[97px] lg:w-[350px] ${focusRingClass}`}
            href={navigationRoutes.home}
          >
            <Image
              alt="JCCM"
              className="h-16 w-[107.55px] shrink-0 md:h-20 md:w-[134.43px] lg:h-[97px] lg:w-[163px]"
              height={97}
              priority
              src="/images/header/jccm-logo.png"
              unoptimized
              width={163}
            />
            <span className="mt-4 ml-2 font-headline text-base leading-4 font-light tracking-normal whitespace-nowrap max-[374px]:hidden md:mt-[23px] md:ml-2.5 md:text-xl md:leading-5 lg:mt-[29px] lg:ml-[11px] lg:text-2xl lg:leading-6">
              JC Construction
              <br />
              Management
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="absolute top-[18px] right-0 h-11 w-11 md:top-[26px] lg:top-[44px] lg:h-[26px] lg:w-[451px]"
          >
            <ul className="m-0 flex h-11 w-11 list-none items-start p-0 lg:h-[26px] lg:w-[451px] lg:items-center">
              <HeaderDropdownTrigger
                isOpen={openDropdown === "services"}
                label="Services"
                menu="services"
                onNavigate={() => setOpenDropdown(null)}
                onToggle={toggleDropdown}
              />
              <HeaderDropdownTrigger
                isOpen={openDropdown === "portfolio"}
                label="Portfolio"
                menu="portfolio"
                onNavigate={() => setOpenDropdown(null)}
                onToggle={toggleDropdown}
              />
              <li className="relative ml-[42px] hidden h-[26px] w-[102px] shrink-0 items-center font-headline text-xl leading-normal font-normal tracking-normal lg:flex">
                <Link
                  className={`flex h-[26px] w-[102px] items-center text-ink no-underline hover:text-brand focus-visible:text-brand ${focusRingClass}`}
                  href={navigationRoutes.contact}
                >
                  Contact us
                </Link>
              </li>
              <li className="relative mt-0 h-11 w-11 lg:ml-[50px] lg:flex lg:h-[26px] lg:w-3.5 lg:items-center">
                <button
                  aria-controls="full-screen-navigation"
                  aria-expanded={isMenuMounted}
                  aria-label="Open navigation menu"
                  className={`relative block h-11 w-11 lg:h-[26px] lg:w-3.5 ${resetButtonClass} ${focusRingClass}`}
                  id="desktop-menu-trigger"
                  onClick={openFullMenu}
                  ref={hamburgerRef}
                  type="button"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 h-3 w-3.5 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0"
                    height={12}
                    src="/icons/header/hamburger.png"
                    unoptimized
                    width={14}
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMenuMounted && menuPhase ? (
        <div id="full-screen-navigation">
          <FullScreenMenu
            closeButtonRef={closeButtonRef}
            menuPhase={menuPhase}
            onClose={closeFullMenu}
            onMenuTransitionEnd={handleMenuTransitionEnd}
            onStateChange={setFullMenuState}
            state={fullMenuState}
          />
        </div>
      ) : null}
    </>
  );
}
