"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let targetX = 0.5;
    let targetY = 0.35;
    let currentX = 0.5;
    let currentY = 0.35;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = clamp01(event.clientX / Math.max(1, window.innerWidth));
      targetY = clamp01(event.clientY / Math.max(1, window.innerHeight));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      root.dataset.reducedMotion = "true";
      return () => window.removeEventListener("pointermove", onPointerMove);
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      root.style.setProperty("--mx", `${currentX}`);
      root.style.setProperty("--my", `${currentY}`);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

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
      el.classList.remove("is-in");
      observer.observe(el);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
