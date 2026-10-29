import React, { useEffect, useState, useMemo } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function LenisGlobalBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    window.__lenis = lenis;
    if (typeof window.lenis === "object" && window.lenis !== null) {
      window.lenis.scrollTo = (...args) => lenis.scrollTo(...args);
    }

    return () => {
      if (window.__lenis === lenis) {
        window.__lenis = undefined;
      }
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const lenisOptions = useMemo(
    () => ({
      duration: prefersReducedMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      autoRaf: true,
      autoResize: true,
      allowNestedScroll: true,
      respectReducedMotion: true,
    }),
    [prefersReducedMotion]
  );

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisGlobalBridge />
      {children}
    </ReactLenis>
  );
}

export { useLenis };
export default SmoothScroll;
