"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ToolCard from "@/components/ToolCard";
import { featuredTools } from "@/data/tools";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ToolsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const header = section.querySelector<HTMLElement>("[data-tools-header]");
      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: 22, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 88%",
              end: "top 55%",
              scrub: true,
            },
          },
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-tool-card]"),
      );

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 18, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 0.95,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
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
      id="skills"
      aria-label="Skills section"
      className="bg-[var(--background)] px-10 pb-45 text-[var(--foreground)]"
    >
      <div className="mx-auto w-full">
        <h2
          data-tools-header
          className="text-[2rem] font-medium tracking-[-0.02em] text-[var(--foreground)]"
        >
          Skills
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <ToolCard
                key={tool.name}
                name={tool.name}
                title={tool.title}
                proficiency={tool.proficiency}
                icon={<Icon aria-hidden className="h-10 w-10" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
