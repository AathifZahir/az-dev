export type ProjectItem = {
  id: string;
  imageSrc: string;
  hoverImageSrc: string;
  imageAlt: string;
  projectTitle: string;
  projectType: string;
  backdropImageClassName: string;
  previewImageClassName: string;
};

export const projects: ProjectItem[] = [
  {
    id: "scarlet-studio",
    imageSrc: "/assets/project.png",
    hoverImageSrc: "/assets/project1.png",
    imageAlt: "Scarlet studio project",
    projectTitle: "Scarlet Design Studio®",
    projectType: "Brand Site",
    backdropImageClassName: "saturate-[1.3]",
    previewImageClassName: "saturate-[1.12] contrast-[1.05]",
  },
  {
    id: "amber-studio",
    imageSrc: "/assets/project.png",
    hoverImageSrc: "/assets/project1.png",
    imageAlt: "Amber studio project",
    projectTitle: "Amber Studio",
    projectType: "Portfolio",
    backdropImageClassName: "hue-rotate-[155deg] saturate-[1.1]",
    previewImageClassName: "hue-rotate-[155deg] brightness-[0.94]",
  },
  {
    id: "keystone-studio",
    imageSrc: "/assets/project.png",
    hoverImageSrc: "/assets/project1.png",
    imageAlt: "Keystone studio project",
    projectTitle: "Keystone Studio",
    projectType: "Architecture",
    backdropImageClassName: "hue-rotate-[210deg] saturate-[0.95]",
    previewImageClassName: "hue-rotate-[210deg] brightness-[1.05]",
  },
  {
    id: "lens-studio",
    imageSrc: "/assets/project.png",
    hoverImageSrc: "/assets/project1.png",
    imageAlt: "Lens studio project",
    projectTitle: "Lens Studio",
    projectType: "Editorial",
    backdropImageClassName: "hue-rotate-[185deg] saturate-[1.05]",
    previewImageClassName: "hue-rotate-[185deg]",
  },
];
