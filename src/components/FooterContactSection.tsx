"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CV_DOWNLOAD_URL } from "@/data/resume";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

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

  const linkInteractive =
    "pointer-events-auto transition-[color,opacity,transform] duration-200 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--footer-foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--footer-background)]";

  /** Smooth draw-in underline (::after scales on X); respects reduced motion. */
  const footerLineReveal =
    "relative pb-[3px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:opacity-90 after:content-[''] after:transition-[transform] after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:scale-x-100 motion-reduce:after:transition-none";

  return (
    <footer
      ref={footerRef}
      id="contact"
      aria-label="Footer contact section"
      className="pointer-events-auto h-full bg-[var(--footer-background)] text-[var(--footer-foreground)] will-change-transform"
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
          <p
            data-footer-reveal
            className="pointer-events-none absolute bottom-4 left-4 z-10 max-w-[18rem] text-xs leading-snug tracking-[-0.01em] text-[var(--footer-foreground)] [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] sm:bottom-5 sm:left-5 sm:text-sm"
          >
            © 2026 Aathif Zahir. All rights reserved.
          </p>
        </div>

        <div
          data-footer-reveal
          className="pointer-events-auto flex min-h-[52vh] flex-col justify-between bg-[var(--footer-background)] px-7 pb-6 pt-7 text-[var(--footer-foreground)] sm:px-10 sm:pt-8 lg:h-full lg:px-10 lg:pb-8 lg:pt-7"
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

          <div data-footer-reveal className="mt-14 flex flex-col gap-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
              <div className="text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-[var(--footer-foreground)]">
                <p>
                  <a
                    href="tel:+94765271411"
                    className={`${linkInteractive} ${footerLineReveal} inline-block text-[var(--footer-foreground)] opacity-90 hover:opacity-100`}
                  >
                    +94 765 271 411
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:aathifzahir12@gmail.com"
                    className={`${linkInteractive} ${footerLineReveal} inline-block text-[var(--footer-foreground)] opacity-90 hover:opacity-100`}
                  >
                    aathifzahir12@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xl text-[var(--footer-foreground)]">
                <a
                  href={CV_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkInteractive} ${footerLineReveal} inline-flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-[var(--footer-muted)] transition-colors duration-300 ease-out hover:text-[var(--footer-foreground)]`}
                >
                  <span aria-hidden className="text-[var(--footer-foreground)]">
                    ↳
                  </span>
                  Download CV
                </a>
                <div className="flex items-center gap-5">
                  <a
                    href="https://linkedin.com/in/aathifzahir"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn (opens in a new tab)"
                    className={`${linkInteractive} inline-flex opacity-85 hover:opacity-100`}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/aathifzahir"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub (opens in a new tab)"
                    className={`${linkInteractive} inline-flex opacity-85 hover:opacity-100`}
                  >
                    <SiGithub className="h-[1.15em] w-[1.15em]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
