"use client";

import { useEffect } from "react";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;

    const onPointerMove = (event: PointerEvent) => {
      const x = clamp01(event.clientX / Math.max(1, window.innerWidth));
      const y = clamp01(event.clientY / Math.max(1, window.innerHeight));
      root.style.setProperty("--mx", `${x}`);
      root.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      root.dataset.reducedMotion = "true";
      return () => window.removeEventListener("pointermove", onPointerMove);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of document.querySelectorAll<HTMLElement>(".reveal")) {
      observer.observe(el);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, []);

  return null;
}

