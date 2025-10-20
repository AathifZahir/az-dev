import Scrollspy from "react-scrollspy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "achievements",
  "contact",
];

const Index = () => {
  const navigate = useNavigate();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleHashChange = (hash) => {
      if (window.location.hash !== `#${hash}`) {
        navigate(`#${hash}`, { replace: true });
      }
    };

    const observerCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          handleHashChange(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("home");
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <ScrollProgressBar />
      <Navbar onLogoClick={handleLogoClick} />
      <Scrollspy items={sections} currentClassName="active" offset={-50}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </Scrollspy>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
