import ProjectPreview from "@/components/ProjectPreview";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects section"
      className="bg-[#FFFFFF] px-1.5 pb-1"
    >
      <div className="grid min-h-screen grid-cols-1 gap-1.5 bg-white lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectPreview
            key={project.id}
            className="h-[67vh] min-h-[35rem] lg:h-full"
            frameClassName="rounded-none"
            imageSrc={project.imageSrc}
            hoverImageSrc={project.hoverImageSrc}
            imageAlt={project.imageAlt}
            projectTitle={project.projectTitle}
            projectType={project.projectType}
            backdropImageClassName={project.backdropImageClassName}
            previewImageClassName={project.previewImageClassName}
          />
        ))}
      </div>
    </section>
  );
}
