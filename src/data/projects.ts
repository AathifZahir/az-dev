export type ProjectItem = {
  id: string;
  imageSrc: string;
  hoverImageSrc: string;
  imageAlt: string;
  projectTitle: string;
  projectType: string;
  backdropImageClassName: string;
  previewImageClassName: string;
  href?: string;
};

/** Replace placehold.co URLs with /images/p1.png … when assets exist in public/images. */
export const projects: ProjectItem[] = [
  {
    id: "msr-tailor-store",
    imageSrc:
      "https://placehold.co/1200x800/1c1917/f5f5f4/png?text=MSR+Tailor+Store",
    hoverImageSrc:
      "https://placehold.co/1200x800/1c1917/f5f5f4/png?text=MSR+Tailor+Store",
    imageAlt: "MSR Tailor Store project preview",
    projectTitle: "MSR Tailor Store",
    projectType: "July 2024 · React · Node · MongoDB",
    backdropImageClassName: "saturate-[1.3]",
    previewImageClassName: "saturate-[1.12] contrast-[1.05]",
    href: "https://github.com/AathifZahir/MSR-ITP",
  },
  {
    id: "prointern",
    imageSrc:
      "https://placehold.co/1200x800/0c0a09/e7e5e4/png?text=ProIntern",
    hoverImageSrc:
      "https://placehold.co/1200x800/0c0a09/e7e5e4/png?text=ProIntern",
    imageAlt: "ProIntern internship finder app preview",
    projectTitle: "ProIntern — Internship Finder",
    projectType: "Nov 2024 · React Native · Firebase",
    backdropImageClassName: "hue-rotate-[155deg] saturate-[1.1]",
    previewImageClassName: "hue-rotate-[155deg] brightness-[0.94]",
    href: "https://github.com/AathifZahir/ProIntern",
  },
  {
    id: "minders",
    imageSrc: "https://placehold.co/1200x800/171717/d4d4d4/png?text=Minders",
    hoverImageSrc:
      "https://placehold.co/1200x800/171717/d4d4d4/png?text=Minders",
    imageAlt: "Minders creative community platform preview",
    projectTitle: "Minders — Creative Community",
    projectType: "Mar 2024 · React · Tailwind · Swiper",
    backdropImageClassName: "hue-rotate-[210deg] saturate-[0.95]",
    previewImageClassName: "hue-rotate-[210deg] brightness-[1.05]",
    href: "https://github.com/AathifZahir/Minders",
  },
  {
    id: "amazon-scraper",
    imageSrc:
      "https://placehold.co/1200x800/262626/fafafa/png?text=Amazon+Scraper",
    hoverImageSrc:
      "https://placehold.co/1200x800/262626/fafafa/png?text=Amazon+Scraper",
    imageAlt: "Amazon product scraper project preview",
    projectTitle: "Amazon Product Scraper",
    projectType: "Aug 2023 · Python · Scrapy · MongoDB",
    backdropImageClassName: "hue-rotate-[185deg] saturate-[1.05]",
    previewImageClassName: "hue-rotate-[185deg]",
    href: "https://github.com/AathifZahir/books_scraper",
  },
];
