import ExperienceSection from "@/components/ExperienceSection";
import FloatingPlusButton from "@/components/FloatingPlusButton";
import FooterContactSection from "@/components/FooterContactSection";
import Hero from "@/components/Hero";
import HeroName from "@/components/HeroName";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  return (
    <>
      <FloatingPlusButton />
      <div className="relative">
        <div className="fixed inset-x-0 bottom-0 z-0 h-screen">
          <FooterContactSection />
        </div>

        <div className="relative z-10">
          <div className="bg-white">
            <div className="relative">
              <Hero />
              <HeroName />
            </div>
            <ProjectsSection />
            <ExperienceSection />
            <ToolsSection />
          </div>
          <div className="h-screen" aria-hidden />
        </div>
      </div>
    </>
  );
}
