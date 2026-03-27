export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    period: "March 2025 – Present",
    role: "Full Stack Developer Intern",
    company: "Twist Digital",
    description:
      "Internship building and supporting full stack features across web projects, collaborating with the team on implementation, APIs, and delivery.",
  },
  {
    period: "2021 - Present",
    role: "Graphic Designer",
    company: "Freelance",
    description:
      "Freelance design work for local businesses—branding, marketing collateral, and visual assets end to end, from concept through delivery.",
  },
  {
    period: "2022 – Present",
    role: "BSc in Software Engineering",
    company: "SLIIT",
    description:
      "Undergraduate software engineering covering full-stack development, software architecture, and team-based delivery; Dean’s List (2023), GPA 3.41.",
  },
];
