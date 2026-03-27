"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { experiences } from "@/data/experiences";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const revealBlocks = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-exp-reveal]"),
      );

      revealBlocks.forEach((block, index) => {
        gsap.fromTo(
          block,
          {
            autoAlpha: 0,
            y: 24,
            filter: "blur(10px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 88%",
              end: "top 55%",
              scrub: true,
            },
            delay: index * 0.02,
          },
        );
      });

      const borderRows = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-exp-border]"),
      );

      borderRows.forEach((row) => {
        gsap.fromTo(
          row,
          { borderColor: "rgba(210,210,210,0)" },
          {
            borderColor: "#d2d2d2",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              end: "top 55%",
              scrub: true,
            },
          },
        );
      });

      const textBlocks = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-exp-text]"),
      );

      textBlocks.forEach((textBlock) => {
        gsap.fromTo(
          textBlock,
          {
            autoAlpha: 0.15,
            filter: "blur(8px)",
          },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: textBlock,
              start: "top 90%",
              end: "top 58%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="Experience section"
      className="bg-[var(--background)] px-10 py-45 text-[var(--foreground)]"
    >
      <div className="mx-auto w-full">
        <p
          data-exp-reveal
          data-exp-text
          className="text-6xl font-medium tracking-tighter text-[var(--foreground)]"
        >
          I&apos;m Aathif Zahir, a Software Developer with over a decade of
          experience building clean, user-focused products, turning complex
          ideas into intuitive, scalable web experiences.
        </p>

        <div data-exp-reveal className="mt-24 flex items-end justify-between">
          <h2
            data-exp-text
            className="text-[2rem] font-semibold text-[var(--foreground)]"
          >
            Experience
          </h2>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-opacity hover:opacity-70"
          >
            <span aria-hidden>↳</span>
            <span data-exp-text>Download CV</span>
          </button>
        </div>

        <div className="mt-6">
          {experiences.map((item) => (
            <article key={`${item.period}-${item.role}`} className="py-6">
              <div
                data-exp-reveal
                data-exp-border
                className="grid items-end gap-4 border-b-1 border-[var(--muted-border)] pb-2 lg:grid-cols-[36rem_1fr_16rem] lg:gap-8"
              >
                <p data-exp-text className="text-md text-[var(--muted-foreground)]">
                  {item.period}
                </p>
                <h3
                  data-exp-text
                  className="text-left text-[1.5rem] font-medium text-[var(--foreground)]"
                >
                  {item.role}
                </h3>
                <p data-exp-text className="text-md text-[var(--foreground)] lg:text-right">
                  {item.company}
                </p>
              </div>
              <div
                data-exp-reveal
                className="mt-2 grid gap-4 lg:grid-cols-[36rem_1fr_14rem] lg:gap-8"
              >
                <div />
                <p
                  data-exp-text
                  className="max-w-[52rem] text-left text-md text-[var(--foreground)]"
                >
                  {item.description}
                </p>
                <div />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
