import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, Code, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import LazyImage from "@/components/LazyImage"; // Import our LazyImage component

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="bg-background/50">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                {/* Replace img with LazyImage */}
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  imgClassName="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex gap-2 items-center"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex gap-2 items-center"
                      asChild
                    >
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleProjects < projects.length ? (
            <Button
              variant="outline"
              onClick={showMoreProjects}
              className="group"
            >
              <span>Show More Projects</span>
              <Code
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          ) : (
            visibleProjects > 3 && (
              <Button
                variant="outline"
                onClick={showLessProjects}
                className="group"
              >
                <span>Show Less</span>
                <ChevronUp
                  size={16}
                  className="ml-2 group-hover:-translate-y-1 transition-transform"
                />
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
