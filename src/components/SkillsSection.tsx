import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="skills" className=" bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            I've worked with a range of technologies in the web development
            world, from frontend to backend and everything in between.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-card rounded-lg p-6 shadow-sm border-[1px] border-white/10 backdrop-blur-sm transition-colors"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 bg-primary/10 text-primary rounded-md"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Render the icon as a component with proper props */}
                  <category.icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm"
                    variants={skillItemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(var(--primary), 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
