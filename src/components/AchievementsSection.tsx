import { ChevronLeft, ChevronRight, Grip, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";
import { useMomentumScroll } from "@/hooks/use-momentum-scroll";
import SpotlightCard from "@/components/SpotlightCard";
import { useState, useEffect } from "react";

const AchievementsSection = () => {
  const {
    scrollRef: scrollContainerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useMomentumScroll({
    damping: 0.95,
    velocityMultiplier: 20,
    minVelocity: 0.1,
  });

  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtStart = scrollLeft <= 10; // Small threshold for smooth transition
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;

      setShowLeftGradient(!isAtStart);
      setShowRightGradient(!isAtEnd);
    };

    // Check initial position
    checkScrollPosition();

    // Listen to scroll events
    container.addEventListener("scroll", checkScrollPosition);

    // Listen to resize events to recalculate
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [scrollContainerRef]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      // Check position after scroll animation
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;
          const isAtStart = scrollLeft <= 10;
          const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;
          setShowLeftGradient(!isAtStart);
          setShowRightGradient(!isAtEnd);
        }
      }, 100);
    }
  };

  return (
    <section id="achievements" className=" bg-background/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A collection of my professional accomplishments, awards, and
            certifications earned throughout my journey.
          </p>
        </motion.div>

        <div className="flex justify-between mb-6 space-x-2">
          <div className="flex items-center text-muted-foreground">
            <Grip className="h-4 w-4 mr-2" />
            <span className="text-sm hidden md:inline">Drag to explore</span>
            <span className="text-sm md:hidden">Swipe to explore</span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Left gradient fade - 100% → 50% → 0% */}
          {showLeftGradient && (
            <div
              className="absolute left-0 top-0 bottom-6 w-32 pointer-events-none z-10 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--background) / 1) 0%, hsl(var(--background) / 0.5) 50%, transparent 100%)",
              }}
            />
          )}

          {/* Right gradient fade - 100% → 50% → 0% */}
          {showRightGradient && (
            <div
              className="absolute right-0 top-0 bottom-6 w-32 pointer-events-none z-10 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to left, hsl(var(--background) / 1) 0%, hsl(var(--background) / 0.5) 50%, transparent 100%)",
              }}
            />
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hidden cursor-grab active:cursor-grabbing px-1"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                style={{ transformOrigin: "center", boxSizing: "border-box" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1], // Custom easing curve
                  },
                }}
              >
                <SpotlightCard className="min-w-[350px] max-w-[350px] bg-card p-6 rounded-lg shadow-sm border-[1px] border-white/10 backdrop-blur-sm select-none m-0.5">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        achievement.type === "competition"
                          ? "bg-yellow-100/80 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
                          : achievement.type === "academic"
                          ? "bg-blue-100/80 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                          : "bg-green-100/80 text-green-600 dark:bg-green-950 dark:text-green-300"
                      }`}
                    >
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-normal text-muted-foreground">
                        {achievement.year}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base font-normal text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        achievement.type === "competition"
                          ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                          : achievement.type === "academic"
                          ? "bg-blue-100/80 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                          : "bg-green-100/80 text-green-800 dark:bg-green-950 dark:text-green-300"
                      }`}
                    >
                      {achievement.type.charAt(0).toUpperCase() +
                        achievement.type.slice(1)}
                    </span>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1 p-3"
                      >
                        View Certificate
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
