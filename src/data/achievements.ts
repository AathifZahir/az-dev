
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "2nd Place - Algothon Codefest",
    type: "competition",
    year: "2024",
    description: "Secured second place in the competitive programming event.",
    icon: Trophy,
  },
  {
    title: "3rd Place - INTELLECT 1.0 Hackathon",
    type: "competition", 
    year: "2024",
    description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
    icon: Trophy,
  },
  {
    title: "Dean's List",
    type: "academic",
    year: "2023",
    description: "Recognized for academic excellence with placement on the Dean's List.",
    icon: Star,
  },
  {
    title: "ClickUp Novice Certificate",
    type: "certification",
    year: "2025",
    description: "Completed ClickUp Novice certification demonstrating proficiency in project management tools.",
    icon: Award,
    link: "https://verify.skilljar.com/c/wfoiw7jffkho",
  },
  {
    title: "ChatGPT Prompt Engineering Basics",
    type: "certification",
    year: "2025",
    description: "Specialized in AI prompt engineering, productivity improvement, and AI-driven content creation.",
    icon: Award,
    link: "https://www.udemy.com/certificate/UC-23a7ee26-0aaf-468f-b98a-25d94c32623b/",
  },
  {
    title: "Software Engineer Intern - HackerRank",
    type: "certification",
    year: "2025",
    description: "Demonstrated proficiency in MySQL, problem solving, and code refactoring.",
    icon: Award,
    link: "https://www.hackerrank.com/certificates/8f2f3cc718d4",
  },
  {
    title: "Explore Core Data Concepts - Microsoft",
    type: "certification",
    year: "2024",
    description: "Earned Microsoft certification in data structures and data analysis fundamentals.",
    icon: Award,
    link: "https://learn.microsoft.com/en-us/users/aathifzahir-4391/achievements/j9fvfzgt",
  },
  {
    title: "Python for Beginners - University of Moratuwa",
    type: "certification",
    year: "2024",
    description: "Comprehensive Python certification covering OOP, data structures, algorithms, and debugging.",
    icon: Award,
    link: "https://open.uom.lk/verify",
  },
  {
    title: "SQL (Basic) - HackerRank",
    type: "certification",
    year: "2024",
    description: "Earned HackerRank SQL certification demonstrating database management skills.",
    icon: Award,
    link: "https://www.hackerrank.com/certificates/722758e3e085",
  },
  {
    title: "SLIITXtreme 3.0 Participant",
    type: "competition",
    year: "2024",
    description: "Participated in competitive programming hackathon focusing on problem-solving skills.",
    icon: Trophy,
  },
];
