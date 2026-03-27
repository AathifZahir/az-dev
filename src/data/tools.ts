import type { IconType } from "react-icons";
import { LuCode, LuGlobe, LuSquareCode } from "react-icons/lu";
import {
  SiAdobeillustrator,
  SiCss3,
  SiEclipseide,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiXampp,
} from "react-icons/si";

export type Tool = {
  icon: IconType;
  name: string;
  title: string;
  proficiency?: string;
};

const FALLBACK: IconType = LuCode;

function iconForSkill(name: string): IconType {
  switch (name) {
    case "JavaScript":
      return SiJavascript;
    case "Java":
      return SiOpenjdk;
    case "PHP":
      return SiPhp;
    case "Python":
      return SiPython;
    case "Web Scraping":
      return LuGlobe;
    case "ReactJS":
      return SiReact;
    case "React Native":
      return SiReact;
    case "HTML":
      return SiHtml5;
    case "CSS":
      return SiCss3;
    case "Tailwind CSS":
      return SiTailwindcss;
    case "Express.js":
      return SiExpress;
    case "Node.js":
      return SiNodedotjs;
    case "MySQL":
      return SiMysql;
    case "MongoDB":
      return SiMongodb;
    case "SQL":
      return SiSqlite;
    case "XAMPP":
      return SiXampp;
    case "Firebase":
      return SiFirebase;
    case "Figma":
      return SiFigma;
    case "GitHub":
      return SiGithub;
    case "Git":
      return SiGit;
    case "VS Code":
      return LuSquareCode;
    case "IntelliJ IDEA":
      return SiIntellijidea;
    case "Eclipse":
      return SiEclipseide;
    case "AI Knowledge":
      return SiOpenai;
    case "Microsoft Office":
      return FALLBACK;
    case "Adobe Illustrator":
      return SiAdobeillustrator;
    default:
      return FALLBACK;
  }
}

/** Edit this list to change which six appear in the Tools section (names must match `ALL_SKILL_NAMES`). */
export const FEATURED_TOOL_NAMES = [
  "ReactJS",
  "Node.js",
  "JavaScript",
  "MongoDB",
  "Python",
  "Tailwind CSS",
] as const;

const ALL_SKILL_NAMES = [
  "JavaScript",
  "Java",
  "PHP",
  "Python",
  "Web Scraping",
  "ReactJS",
  "React Native",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Express.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "SQL",
  "XAMPP",
  "Firebase",
  "Figma",
  "GitHub",
  "Git",
  "VS Code",
  "IntelliJ IDEA",
  "Eclipse",
  "AI Knowledge",
  "Microsoft Office",
  "Adobe Illustrator",
] as const;

export const allTools: Tool[] = ALL_SKILL_NAMES.map((name) => ({
  icon: iconForSkill(name),
  name,
  title: "Stack & tooling",
}));

export const featuredTools: Tool[] = FEATURED_TOOL_NAMES.map((name) => {
  const tool = allTools.find((t) => t.name === name);
  if (!tool) {
    throw new Error(`Featured tool not in allTools: ${name}`);
  }
  return tool;
});
