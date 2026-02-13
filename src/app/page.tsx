import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FaqSection from "@/components/FaqSection";
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
        <Hero />
        <HeroName />
      </div>
      <ProjectsSection />
      <ExperienceSection />
      <ToolsSection />
      <AchievementsSection />
      <FaqSection />
      <FooterContactSection />
    </>
  );
}
