export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    period: "2020 - Now",
    role: "Senior Software Developer",
    company: "Freelance",
    description:
      "Built and shipped 100+ web products for clients across tech, e-commerce, and creative industries. Led end-to-end delivery from architecture and API design to implementation, optimization, and deployment.",
  },
  {
    period: "2018 - 2020",
    role: "Lead Frontend Developer",
    company: "Nova Digital Agency",
    description:
      "Led the frontend team on client web projects, from discovery to launch. Oversaw code quality, component architecture, and performance across all deliverables.",
  },
  {
    period: "2015 - 2018",
    role: "Full Stack Developer",
    company: "Creative Pixel Studio",
    description:
      "Developed custom web applications and landing experiences for small-to-mid-size businesses. Delivered responsive, production-ready systems with a strong focus on reliability and usability.",
  },
  {
    period: "2013 - 2015",
    role: "Junior Web Developer",
    company: "DesignHive Agency",
    description:
      "Supported senior developers on web projects, handling UI implementation, bug fixing, and technical refinements. Converted product mockups into pixel-accurate, maintainable frontend code.",
  },
];
