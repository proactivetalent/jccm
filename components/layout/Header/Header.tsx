"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./Header.module.css";
import {
  type FullMenuNavigationItem,
  navigationRoutes,
  portfolioFullMenuItems,
  servicesFullMenuItems,
} from "./navigation";

type DropdownName = "services" | "portfolio";
type FullMenuState = "main" | "services" | "projects";
type FullMenuPhase = "entering" | "open" | "closing";
type MenuButtonPosition = Readonly<{ top: number; left: number; width: number; height: number }>;

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
  items: readonly FullMenuNavigationItem[];
  allHref: string;
  allLabel: string;
  variant: DropdownName;
  onNavigate: () => void;
}>;

function DropdownMenu({ id, items, allHref, allLabel, variant, onNavigate }: DropdownMenuProps) {
  return (
    <div
      aria-label={`${variant === "services" ? "Services" : "Portfolio"} navigation`}
      className={styles.navDropdown}
      id={id}
    >
      <span className={styles.dropdownEyebrow}>
        {variant === "services" ? "WHAT WE DO" : "SELECTED WORK"}
      </span>
      <Link className={styles.navDropdownAll} href={allHref} onClick={onNavigate}>
        {allLabel}<span aria-hidden="true">↗</span>
      </Link>
      {items.map((item, index) => (
        <Link
          className={styles.navDropdownItem}
          href={item.href}
          key={`${variant}-${item.label}`}
          onClick={onNavigate}
        >
          <span className={styles.dropdownIndex}>{String(index + 1).padStart(2, "0")}</span>
          <span>{item.label}</span>
          <span className={styles.dropdownArrow} aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  );
}

type HeaderDropdownTriggerProps = Readonly<{
  label: "Services" | "Projects";
  menu: DropdownName;
  isOpen: boolean;
  onOpen: (menu: DropdownName) => void;
  onClose: () => void;
  onNavigate: () => void;
}>;

function HeaderDropdownTrigger({
  label,
  menu,
  isOpen,
  onOpen,
  onClose,
  onNavigate,
}: HeaderDropdownTriggerProps) {
  const menuId = `desktop-${menu}-menu`;
  const items = menu === "services" ? servicesFullMenuItems : portfolioFullMenuItems;

  return (
    <li className={styles.navDropdownHost} onMouseEnter={() => onOpen(menu)} onMouseLeave={onClose}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        className={`${styles.navLink} ${styles.navButton} ${focusRingClass}`}
        onClick={() => onOpen(menu)}
        type="button"
      >
        <span>{label}</span>
        <span className={styles.navChevron} aria-hidden="true" data-open={isOpen}>⌄</span>
      </button>

      {isOpen ? (
        <DropdownMenu
          id={menuId}
          items={items}
          allHref={menu === "services" ? navigationRoutes.services : navigationRoutes.portfolio}
          allLabel={menu === "services" ? "All services" : "All projects"}
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
  menuButtonPosition: MenuButtonPosition | null;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onMenuTransitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => void;
  onStateChange: (state: FullMenuState) => void;
}>;

function FullScreenMenu({
  state,
  menuPhase,
  menuButtonPosition,
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
      <button
        aria-label="Close navigation menu"
        className={`${styles.closeButton} ${focusRingClass}`}
        onClick={onClose}
        ref={closeButtonRef}
        style={menuButtonPosition ? { ...menuButtonPosition, right: "auto" } : undefined}
        type="button"
      >
        <span className={styles.closeGlyph} aria-hidden="true"><span /><span /></span>
      </button>
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
  const [menuButtonPosition, setMenuButtonPosition] = useState<MenuButtonPosition | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasFullMenuOpen = useRef(false);
  const isMenuMounted = fullMenuState !== null;
  const isFullMenuOpen = isMenuMounted || menuPhase === "closing";

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        headerRef.current.dataset.scrolled = String(window.scrollY > 36);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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

  useEffect(() => {
    if (!isFullMenuOpen) {
      return;
    }

    function updateMenuButtonPosition() {
      const bounds = hamburgerRef.current?.getBoundingClientRect();
      if (bounds) {
        setMenuButtonPosition({
          top: bounds.top,
          left: bounds.left,
          width: bounds.width,
          height: bounds.height,
        });
      }
    }

    window.addEventListener("resize", updateMenuButtonPosition);
    return () => window.removeEventListener("resize", updateMenuButtonPosition);
  }, [isFullMenuOpen]);

  function openFullMenu() {
    const bounds = hamburgerRef.current?.getBoundingClientRect();
    if (bounds) {
      setMenuButtonPosition({
        top: bounds.top,
        left: bounds.left,
        width: bounds.width,
        height: bounds.height,
      });
    }
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
      <header className={styles.siteHeader} ref={headerRef}>
        <div className={styles.headerInner}>
          <Link
            aria-label="JCCM home"
            className={`${styles.brand} ${focusRingClass}`}
            href={navigationRoutes.home}
          >
            <Image
              alt="JCCM"
              className={styles.brandMark}
              height={97}
              priority
              src="/images/header/jccm-logo.png"
              unoptimized
              width={163}
            />
            <span className={styles.brandText}>
              JC Construction
              <br />
              Management
            </span>
          </Link>

          <nav aria-label="Primary navigation" className={styles.primaryNav}>
            <ul className={styles.navList}>
              <HeaderDropdownTrigger
                isOpen={openDropdown === "services"}
                label="Services"
                menu="services"
                onNavigate={() => setOpenDropdown(null)}
                onOpen={setOpenDropdown}
                onClose={() => setOpenDropdown(null)}
              />
              <HeaderDropdownTrigger
                isOpen={openDropdown === "portfolio"}
                label="Projects"
                menu="portfolio"
                onNavigate={() => setOpenDropdown(null)}
                onOpen={setOpenDropdown}
                onClose={() => setOpenDropdown(null)}
              />
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} ${focusRingClass}`}
                  href={navigationRoutes.about}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <Link className={`${styles.projectCta} ${focusRingClass}`} href={navigationRoutes.contact}>
              Start a Project <span aria-hidden="true">↗</span>
            </Link>
            <button
              aria-label="Open navigation menu"
              aria-controls="full-screen-navigation"
              aria-expanded={isMenuMounted}
              className={`${styles.mobileMenuButton} ${focusRingClass}`}
              onClick={openFullMenu}
              ref={hamburgerRef}
              type="button"
            >
              <span className={styles.menuGlyph} aria-hidden="true"><span /><span /><span /></span>
            </button>
          </div>
        </div>
      </header>

      {isMenuMounted && menuPhase ? (
        <div id="full-screen-navigation">
          <FullScreenMenu
            closeButtonRef={closeButtonRef}
            menuButtonPosition={menuButtonPosition}
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
