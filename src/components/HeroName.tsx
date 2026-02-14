"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BlurText from "./BlurText";

gsap.registerPlugin(useGSAP);

export default function HeroName() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isShrunkRef = useRef(false);

  useGSAP(() => {
    const heading = headingRef.current;
    if (!heading) return;

    let animationFrameId: number | null = null;
    const hysteresisPx = 12;

    gsap.set(heading, {
      scale: 1,
      transformOrigin: "top left",
      force3D: true,
    });

    const updateShrinkState = () => {
      const threshold = window.innerHeight * 0.1;
      const scrollY = window.scrollY;
      const nextIsShrunk = isShrunkRef.current
        ? scrollY >= threshold - hysteresisPx
        : scrollY >= threshold + hysteresisPx;

      if (nextIsShrunk === isShrunkRef.current) return;
      isShrunkRef.current = nextIsShrunk;

      gsap.to(heading, {
        scale: nextIsShrunk ? 0.11 : 1,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const scheduleShrinkUpdate = () => {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;
        updateShrinkState();
      });
    };

    updateShrinkState();
    window.addEventListener("resize", scheduleShrinkUpdate);
    window.addEventListener("scroll", scheduleShrinkUpdate, { passive: true });

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      gsap.killTweensOf(heading);
      window.removeEventListener("resize", scheduleShrinkUpdate);
      window.removeEventListener("scroll", scheduleShrinkUpdate);
    };
  }, { scope: headingRef });

  return (
    <h1
      ref={headingRef}
      className={`pointer-events-none fixed left-4 top-4 z-100 origin-top-left text-white mix-blend-difference [backface-visibility:hidden] [transform:translateZ(0)] lg:left-4 lg:top-4`}
    >
      <div
        className={`text-[14rem] leading-[0.95] tracking-tighter font-medium`}
      >
        <BlurText
          text="Aathif"
          delay={80}
          animateBy="letters"
          direction="bottom"
          className="block"
        />
        <BlurText
          text="Zahir"
          delay={80}
          animateBy="letters"
          direction="bottom"
          className="block"
        />
      </div>
    </h1>
  );
}
