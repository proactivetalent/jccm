"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

import styles from "./Portfolio.module.css";

type DragState = {
  pointerId: number;
  startX: number;
  startScrollLeft: number;
  dragging: boolean;
};

export function PortfolioMarquee({
  children,
  className,
}: Readonly<{ children: ReactNode; className: string }>) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = viewport?.firstElementChild;
    const firstGroup = track?.firstElementChild as HTMLElement | null;
    const middleGroup = firstGroup?.nextElementSibling as HTMLElement | null;
    if (!viewport || !firstGroup || !middleGroup) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let stride = 0;
    let frame = 0;
    let lastTime = 0;

    const measure = () => {
      stride = middleGroup.offsetLeft - firstGroup.offsetLeft;
      viewport.scrollLeft = stride;
    };

    const wrap = () => {
      if (!stride) return;
      if (viewport.scrollLeft < stride / 2) {
        viewport.scrollLeft += stride;
        if (dragRef.current) dragRef.current.startScrollLeft += stride;
      }
      if (viewport.scrollLeft > stride * 1.5) {
        viewport.scrollLeft -= stride;
        if (dragRef.current) dragRef.current.startScrollLeft -= stride;
      }
    };

    const tick = (time: number) => {
      if (!visibleRef.current) {
        frame = 0;
        return;
      }

      const focusedElement = document.activeElement;
      const keyboardFocusInside =
        focusedElement &&
        viewport.contains(focusedElement) &&
        focusedElement.matches(":focus-visible");
      const cardHovered = viewport.querySelector("article:hover") !== null;

      if (
        lastTime &&
        !cardHovered &&
        !keyboardFocusInside &&
        !dragRef.current &&
        finePointer.matches &&
        !reducedMotion.matches
      ) {
        viewport.scrollLeft -= Math.min(time - lastTime, 50) * 0.035;
        wrap();
      }

      lastTime = time;
      frame = requestAnimationFrame(tick);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(firstGroup);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting && !frame) {
        lastTime = 0;
        frame = requestAnimationFrame(tick);
      }
    });
    intersectionObserver.observe(viewport);
    viewport.addEventListener("scroll", wrap, { passive: true });
    const finishDrag = (event: globalThis.PointerEvent) => {
      if (dragRef.current?.pointerId !== event.pointerId) return;
      dragRef.current = null;
      delete viewport.dataset.dragging;
    };
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      viewport.removeEventListener("scroll", wrap);
      window.removeEventListener("pointerup", finishDrag);
      window.removeEventListener("pointercancel", finishDrag);
    };
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    suppressClickRef.current = false;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      dragging: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;
    if (!drag.dragging && Math.abs(distance) > 5) {
      drag.dragging = true;
      viewport.setPointerCapture(event.pointerId);
      viewport.dataset.dragging = "true";
      suppressClickRef.current = true;
    }
    if (!drag.dragging) return;

    const scale = viewport.getBoundingClientRect().width / viewport.clientWidth || 1;
    viewport.scrollLeft = drag.startScrollLeft - distance / scale;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (viewportRef.current) delete viewportRef.current.dataset.dragging;
  };

  return (
    <div
      aria-label="Portfolio projects. Scroll or drag horizontally to explore."
      className={`${className} ${styles.marqueeViewport}`}
      onClickCapture={(event) => {
        if (!suppressClickRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClickRef.current = false;
      }}
      onDragStart={(event) => event.preventDefault()}
      onLostPointerCapture={endDrag}
      onPointerCancel={endDrag}
      onPointerDown={onPointerDown}
      onPointerLeave={() => {
        if (dragRef.current && !dragRef.current.dragging) dragRef.current = null;
      }}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      ref={viewportRef}
      role="region"
      tabIndex={0}
    >
      <div className={styles.marqueeTrack}>{children}</div>
    </div>
  );
}
