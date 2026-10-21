"use client";

import { useEffect, useRef, type ReactNode } from "react";

import styles from "./HeroExpertiseTransition.module.css";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

export function HeroExpertiseTransition({
  hero,
  children,
}: Readonly<{ hero: ReactNode; children: ReactNode }>) {
  const sceneRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;

    const motionQuery = window.matchMedia(
      "(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)",
    );
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reducedMotionQuery.matches) {
        delete scene.dataset.motionReady;
        delete scene.dataset.mobileMotion;
        return;
      }

      if (!motionQuery.matches) {
        delete scene.dataset.motionReady;
        if (window.innerWidth >= 1024) {
          delete scene.dataset.mobileMotion;
          return;
        }

        scene.dataset.mobileMotion = "true";
        const hero = scene.querySelector<HTMLElement>("[aria-labelledby='home-hero-title']");
        const expertise = scene.querySelector<HTMLElement>("[data-transition-expertise]");
        if (!hero || !expertise) return;
        const headerHeight = window.innerWidth < 768 ? 80 : 96;
        const heroProgress = clamp(
          (headerHeight - hero.getBoundingClientRect().top) / (hero.offsetHeight * 0.8),
        );
        const revealProgress = clamp(
          (window.innerHeight - expertise.getBoundingClientRect().top) /
            (window.innerHeight * 0.85),
        );
        const heading = smooth((revealProgress - 0.08) / 0.55);
        const kicker = smooth((revealProgress - 0.23) / 0.55);
        const body = smooth((revealProgress - 0.33) / 0.55);
        const building = smooth((revealProgress - 0.14) / 0.75);

        scene.style.setProperty("--mobile-hero-shift", `${(-24 * heroProgress).toFixed(2)}px`);
        scene.style.setProperty("--mobile-image-scale", (1 + 0.05 * heroProgress).toFixed(4));
        scene.style.setProperty("--heading-y", `${((1 - heading) * 35).toFixed(2)}px`);
        scene.style.setProperty("--kicker-y", `${((1 - kicker) * 25).toFixed(2)}px`);
        scene.style.setProperty("--body-y", `${((1 - body) * 28).toFixed(2)}px`);
        scene.style.setProperty("--building-y", `${((1 - building) * 75).toFixed(2)}px`);
        scene.style.setProperty("--heading-opacity", heading.toFixed(4));
        scene.style.setProperty("--kicker-opacity", kicker.toFixed(4));
        scene.style.setProperty("--body-opacity", body.toFixed(4));
        return;
      }

      delete scene.dataset.mobileMotion;
      scene.dataset.motionReady = "true";
      const stickyTop = Number.parseFloat(window.getComputedStyle(stage).top) || 0;
      const travel = Math.max(1, scene.offsetHeight - stage.offsetHeight);
      const progress = clamp((stickyTop - scene.getBoundingClientRect().top) / travel);

      // Begin in the hero, then hand off to the next section within one viewport of scroll.
      const heroRange = clamp(progress / 0.57);
      const heroMotion = 1 - (1 - heroRange) ** 3;
      const panelMotion = smooth((progress - 0.05) / 0.79);
      const headingMotion = smooth((progress - 0.28) / 0.23);
      const kickerMotion = smooth((progress - 0.33) / 0.27);
      const bodyMotion = smooth((progress - 0.39) / 0.28);
      const buildingMotion = smooth((progress - 0.31) / 0.38);
      const heroFade = 1 - smooth((progress - 0.56) / 0.22);

      scene.style.setProperty("--hero-shift", `${(-38 * heroMotion).toFixed(2)}px`);
      scene.style.setProperty("--hero-copy-shift", `${(-21 * heroMotion).toFixed(2)}px`);
      scene.style.setProperty("--hero-metrics-shift", `${(-15 * heroMotion).toFixed(2)}px`);
      scene.style.setProperty("--hero-image-scale", (1 + 0.075 * heroMotion).toFixed(4));
      scene.style.setProperty("--hero-opacity", heroFade.toFixed(4));
      scene.style.setProperty("--panel-y", `${((1 - panelMotion) * 101).toFixed(2)}%`);
      scene.style.setProperty("--panel-radius", `${(32 * (1 - panelMotion)).toFixed(1)}px`);
      scene.style.setProperty("--heading-y", `${((1 - headingMotion) * 62).toFixed(2)}px`);
      scene.style.setProperty("--kicker-y", `${((1 - kickerMotion) * 38).toFixed(2)}px`);
      scene.style.setProperty("--body-y", `${((1 - bodyMotion) * 42).toFixed(2)}px`);
      scene.style.setProperty("--building-y", `${((1 - buildingMotion) * 100).toFixed(2)}px`);
      scene.style.setProperty("--heading-opacity", headingMotion.toFixed(4));
      scene.style.setProperty("--kicker-opacity", kickerMotion.toFixed(4));
      scene.style.setProperty("--body-opacity", bodyMotion.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motionQuery.addEventListener("change", schedule);
    reducedMotionQuery.addEventListener("change", schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motionQuery.removeEventListener("change", schedule);
      reducedMotionQuery.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section className={styles.scene} ref={sceneRef} aria-label="Introduction">
      <div className={styles.stage} ref={stageRef}>
        <div className={styles.heroLayer}>{hero}</div>
        <div className={styles.expertiseLayer}>{children}</div>
      </div>
    </section>
  );
}
