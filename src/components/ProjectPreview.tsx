import Image from "next/image";

type ProjectPreviewProps = {
  imageSrc?: string;
  hoverImageSrc?: string;
  imageAlt?: string;
  projectTitle?: string;
  projectType?: string;
  className?: string;
  backdropTintClassName?: string;
  backdropImageClassName?: string;
  previewImageClassName?: string;
  frameClassName?: string;
};

export default function ProjectPreview({
  imageSrc = "/assets/project.png",
  hoverImageSrc = "/assets/project1.png",
  imageAlt = "Project preview",
  projectTitle = "Project Title",
  projectType = "Project Type",
  className = "",
  backdropTintClassName = "",
  backdropImageClassName = "",
  previewImageClassName = "",
  frameClassName = "",
}: ProjectPreviewProps) {
  return (
    <article
      className={`group relative isolate overflow-hidden bg-[#d9d9d9] ${className}`}
    >
      <div className="absolute inset-0 scale-110">
        <Image
          src={imageSrc}
          alt=""
          fill
          aria-hidden
          className={`object-cover blur-xl transition-opacity duration-500 ease-out ${backdropImageClassName}`}
          sizes="100vw"
        />
        <Image
          src={hoverImageSrc}
          alt=""
          fill
          aria-hidden
          className={`object-cover blur-xl opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 ${backdropImageClassName}`}
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 bg-white/12 backdrop-blur-xl saturate-150 ${backdropTintClassName}`}
        />
      </div>

      <div
        className={`absolute inset-0 z-10 scale-[0.7] overflow-hidden ${frameClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`scale-[1.01] object-cover transition-opacity duration-500 ease-out ${previewImageClassName}`}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <Image
          src={hoverImageSrc}
          alt=""
          fill
          aria-hidden
          className={`scale-[1.01] object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 ${previewImageClassName}`}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <div className="h-28 bg-gradient-to-t from-black/65 to-transparent sm:h-32" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-4 text-white sm:px-6 sm:pb-5">
          <p className="text-base font-medium sm:text-lg">{projectTitle}</p>
          <p className="text-xs font-medium uppercase text-white/90 sm:text-sm">
            {projectType}
          </p>
        </div>
      </div>
    </article>
  );
}
