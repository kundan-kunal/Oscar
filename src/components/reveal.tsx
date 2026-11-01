"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

/** useLayoutEffect warns during SSR; on the server there is nothing to measure. */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds for items revealed together. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades content up as it scrolls into view.
 *
 * The server renders it in its final, visible state, so the page is readable
 * without JavaScript and never flashes empty before hydration. The hidden
 * state is applied in a layout effect — before the browser paints — and only
 * to elements that are still below the fold.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    // Already on screen at first paint: leave it alone, no animation needed.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.dataset.reveal = "pending";
    node.style.transitionDelay = delay ? `${delay}s` : "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
