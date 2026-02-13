"use client";

import { useEffect, useState } from "react";

export default function HeroName() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const updateShrinkState = () => {
      const threshold = window.innerHeight * 0.1;
      setIsShrunk(window.scrollY >= threshold);
    };

    updateShrinkState();

    window.addEventListener("resize", updateShrinkState);
    window.addEventListener("scroll", updateShrinkState, { passive: true });

    return () => {
      window.removeEventListener("resize", updateShrinkState);
      window.removeEventListener("scroll", updateShrinkState);
    };
  }, []);

  return (
    <h1
      className="pointer-events-none fixed left-6 top-6 z-50 w-[calc(100%-3rem)] origin-top-left text-[clamp(4rem,14vw,15rem)] font-black leading-[0.86] tracking-[-0.06em] text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:left-8 lg:top-8 lg:w-[48%]"
      style={{ transform: isShrunk ? "scale(0.22)" : "scale(1)" }}
    >
      <span className="block">Aathif</span>
      <span className="block">Zahir</span>
    </h1>
  );
}
