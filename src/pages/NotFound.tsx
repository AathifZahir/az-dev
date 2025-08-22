import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search, AlertTriangle, ArrowLeft } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const NotFound = () => {
  const location = useLocation();
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    scrollToTop();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Fun 404 Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Floating Elements Animation */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            {/* Main 404 Circle */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center"
            >
              <motion.h1
                className="text-8xl font-bold text-primary"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                404
              </motion.h1>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 text-primary/60"
            >
              <Search size={32} />
            </motion.div>

            <motion.div
              animate={{
                x: [0, -15, 0],
                y: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 text-primary/60"
            >
              <AlertTriangle size={32} />
            </motion.div>

            {/* Small floating dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>

          {/* Current Path Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-muted/50 rounded-lg p-4 mb-6 max-w-sm mx-auto"
          >
            <p className="text-sm text-muted-foreground mb-2">
              Attempted to access:
            </p>
            <code className="text-primary font-mono text-sm break-all">
              {location.pathname}
            </code>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleGoHome}
            size="lg"
            className="min-w-[160px] group"
          >
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Go Home
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="min-w-[160px] group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Go Back
          </Button>
        </motion.div>

        {/* Fun Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground mt-8"
        >
          💡 Pro tip: Check the URL or use the navigation menu above!
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
