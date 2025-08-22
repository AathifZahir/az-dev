import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { Links } from "@/data/links";
import { useToast } from "@/hooks/use-toast";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

interface NavbarProps {
  onLogoClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navbar = ({ onLogoClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeUrl = Links.resume;
  const { toast } = useToast();
  const { scrollToSection } = useSmoothScroll();

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="/" onClick={onLogoClick}>
              <span className="text-xl font-bold text-primary">AZ.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href.substring(1))}
                  className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <ThemeSwitcher />
              <Button
                size="sm"
                className="ml-4"
                asChild
                onClick={handledownload}
              >
                <a href={resumeUrl} download="Aathif_Zahir_CV.pdf">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background shadow-lg rounded-b-lg mt-1 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href.substring(1))}
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="ml-3 mt-2" asChild>
              <a href={resumeUrl} download="Aathif_Zahir_CV.pdf">
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
