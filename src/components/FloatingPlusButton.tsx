"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { CV_DOWNLOAD_URL } from "@/data/resume";

const SECTION_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function FloatingPlusButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [footerInView, setFooterInView] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonLabel = useMemo(
    () => (isOpen ? "Close section menu" : "Open section menu"),
    [isOpen],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      const target = event.target as Node;
      if (!menuRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    // `#contact` lives in a fixed full-viewport layer, so it always intersects
    // the viewport and would hide the floating CV on load. Observe the scroll
    // sentinel at the end of the document flow instead.
    const sentinel = document.getElementById("footer-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navigateTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    const targetSection = document.getElementById(id);
    if (!targetSection) return;
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <div ref={menuRef} className="fixed right-4 top-4 z-[60]">
        <div className="relative h-56 w-72">
          {SECTION_LINKS.map((link, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;
            const x = -((col + 1) * 120);
            const y = row * 56;

            return (
              <button
                key={link.id}
                type="button"
                aria-hidden={!isOpen}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => navigateTo(link.id)}
                className="fp-chip absolute top-0 rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.01em] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1"
                style={{
                  right: "48px",
                  transform: isOpen
                    ? `translate3d(${x}px, ${y}px, 0)`
                    : "translate3d(0px, 0px, 0)",
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? "auto" : "none",
                  transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                }}
              >
                {link.label}
              </button>
            );
          })}

          <div className="absolute right-0 top-0 flex items-center gap-2">
            <button
              type="button"
              aria-label={buttonLabel}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="fp-menu-btn group flex h-10 w-10 items-center justify-center border shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="sr-only">{buttonLabel}</span>
              <span
                aria-hidden
                className={`fp-plus-line absolute h-[1.5px] w-4 transition-all duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
              />
              <span
                aria-hidden
                className={`fp-plus-line absolute h-[1.5px] w-4 transition-all duration-300 ${isOpen ? "-rotate-45" : "rotate-90"}`}
              />
            </button>

            <button
              type="button"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className="fp-theme-btn flex h-10 w-10 items-center justify-center border text-xs font-medium shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-1"
            >
              <span aria-hidden>{theme === "dark" ? "L" : "D"}</span>
            </button>
          </div>
        </div>
      </div>

      {!footerInView ? (
        <a
          href={CV_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Download CV (opens in new tab)"
          className="fp-chip fixed bottom-4 right-4 z-[60] inline-flex h-10 items-center gap-2 rounded-none border px-3 text-xs font-semibold tracking-[0.02em] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1"
        >
          <HiArrowDownTray className="h-4 w-4 shrink-0" aria-hidden />
          CV
        </a>
      ) : null}
    </>
  );
}
