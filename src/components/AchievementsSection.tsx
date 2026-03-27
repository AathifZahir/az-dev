"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AwardRow from "@/components/AwardRow";
import { achievements } from "@/data/achievements";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const header = section.querySelector<HTMLElement>("[data-ach-header]");
      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: 24, filter: "blur(10px)" },
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

      const rows = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-ach-row]"),
      );

      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { autoAlpha: 0, y: 22, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 60%",
              scrub: true,
            },
          },
        );
      });

      const borderRows = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-ach-border]"),
      );

      borderRows.forEach((row) => {
        gsap.fromTo(
          row,
          { borderColor: "rgba(189,189,189,0)" },
          {
            borderColor: "#bdbdbd",
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
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="achievements"
      aria-label="Achievements section"
      className="bg-[var(--background)] px-10 pb-45 text-[var(--foreground)]"
    >
      <div className="mx-auto w-full">
        <h2
          data-ach-header
          className="text-[2rem] font-semibold text-[var(--foreground)]"
        >
          Awards
        </h2>

        <div className="mt-6 sm:mt-8">
          {achievements.map((item) => (
            <AwardRow
              key={`${item.year}-${item.title}-${item.organization}`}
              award={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
