"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const wipeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const panel = panelRef.current;
      const content = contentRef.current;
      const image = imageRef.current;
      const wipe = wipeRef.current;
      if (!panel || !content || !image || !wipe) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([content, image], {
          clearProps: "all",
          opacity: 1,
          xPercent: 0,
          scale: 1,
        });
        gsap.set(wipe, { xPercent: -102 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(content, {
          xPercent: 8,
          autoAlpha: 0.45,
          willChange: "transform,opacity",
          force3D: true,
        });
        gsap.set(image, {
          scale: 1.03,
          willChange: "transform",
          force3D: true,
        });
        gsap.set(wipe, {
          xPercent: 0,
          willChange: "transform",
          force3D: true,
        });

        const tl = gsap.timeline({
          defaults: { ease: "power4.inOut" },
        });

        tl.to(wipe, {
          xPercent: -102,
          duration: 1.2,
        })
          .to(
            content,
            {
              xPercent: 0,
              autoAlpha: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            0,
          )
          .to(
            image,
            {
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            0,
          )
          .set([content, image, wipe], { clearProps: "willChange" });
      });

      return () => mm.revert();
    },
    { scope: panelRef },
  );

  return (
    <main className="h-screen bg-[#FFFFFF] p-1.5">
      <section className="relative flex h-full flex-col overflow-hidden  bg-[#FFFFFF] lg:flex-row">
        <div className="relative flex w-full flex-col px-4 pb-0 pt-4 sm:px-6 sm:pb-0 sm:pt-5 lg:w-1/2 lg:px-7 lg:pb-0 lg:pt-6">
          <div className="mt-auto flex justify-between gap-4 pt-8 text-black">
            <p className="text-lg font-medium">
              Web Designer &amp; Digital Creative based in France
            </p>
            <p className="whitespace-nowrap text-md font-regular">
              Selected Work &darr;
            </p>
          </div>
        </div>

        <div
          ref={panelRef}
          className="hero-image-panel relative min-h-[52vh] w-full overflow-hidden lg:min-h-0 lg:w-1/2"
        >
          <div ref={contentRef} className="absolute inset-0 z-10">
            <img
              ref={imageRef}
              src="/assets/me.png"
              alt="Hero placeholder"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            ref={wipeRef}
            className="pointer-events-none absolute inset-0 z-30 bg-white"
          />
        </div>
      </section>
    </main>
  );
}
