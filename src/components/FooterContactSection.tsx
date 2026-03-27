"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CV_DOWNLOAD_URL } from "@/data/resume";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FooterContactSection() {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      if (!footer) return;

      gsap.fromTo(
        footer,
        {
          y: 96,
        },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "top 60%",
            scrub: 1.1,
          },
        },
      );

      const revealItems = gsap.utils.toArray<HTMLElement>(
        footer.querySelectorAll("[data-footer-reveal]"),
      );

      gsap.fromTo(
        revealItems,
        {
          y: 24,
        },
        {
          y: 0,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: footer,
            start: "top 88%",
            end: "top 52%",
            scrub: 0.9,
          },
        },
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      aria-label="Footer contact section"
      className="h-full bg-[var(--footer-background)] text-[var(--footer-foreground)] will-change-transform"
    >
      <section className="grid h-full grid-cols-1 overflow-hidden bg-[var(--footer-background)] lg:grid-cols-[1.02fr_1fr]">
        <div
          data-footer-reveal
          className="relative min-h-[48vh] p-1.5 lg:h-full"
        >
          <img
            src="https://placehold.co/1200x1600/png?text=Portrait"
            alt="Portrait placeholder"
            className="h-full w-full object-cover grayscale"
          />
          <div className="pointer-events-none absolute inset-0 bg-[var(--footer-image-overlay)]" />
        </div>

        <div
          data-footer-reveal
          className="flex min-h-[52vh] flex-col justify-between bg-[var(--footer-background)] px-7 pb-6 pt-7 text-[var(--footer-foreground)] sm:px-10 sm:pt-8 lg:h-full lg:px-10 lg:pb-8 lg:pt-7"
        >
          <div data-footer-reveal>
            <h2 className="text-9xl font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--footer-foreground)]">
              Get in touch
            </h2>
            <p className="mt-8 max-w-[35rem] text-[clamp(1.35rem,1.45vw,2.9rem)] leading-[1.3] tracking-[-0.02em] text-[var(--footer-muted)]">
              Whether you&apos;re looking to collaborate, start a new project,
              or simply connect. I&apos;d love to hear from you.
            </p>
          </div>

          <div
            data-footer-reveal
            className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5"
          >
            <div className="text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-[var(--footer-foreground)]">
              <p>+1 (123) 456-7890</p>
              <p>lorianhans@gmail.com</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xl text-[var(--footer-foreground)]">
              <a
                href={CV_DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-[var(--footer-muted)] underline decoration-[var(--footer-muted)] underline-offset-[0.28em] transition-colors hover:text-[var(--footer-foreground)] hover:decoration-[var(--footer-foreground)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--footer-foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-background)]"
              >
                <span aria-hidden className="text-[var(--footer-foreground)]">
                  ↳
                </span>
                Download CV
              </a>
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-70"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-opacity hover:opacity-70"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="transition-opacity hover:opacity-70"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
