"use client";

import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
      className={`${roboto.className} pointer-events-none fixed left-4 top-4 z-50 origin-top-left text-[clamp(4rem,14vw,15rem)] font-semibold leading-[0.86] text-white mix-blend-difference transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:left-4 lg:top-4 lg:w-[48%]`}
      style={{ transform: isShrunk ? "scale(0.12)" : "scale(1)" }}
    >
      <span className="block ">Aathif</span>
      <span className="block ">Zahir</span>
    </h1>
  );
}
