import type { IconType } from "react-icons";
import { LuSpline } from "react-icons/lu";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiFramer,
  SiJavascript,
} from "react-icons/si";

export type Tool = {
  icon: IconType;
  name: string;
  title: string;
  proficiency: string;
};

export const tools: Tool[] = [
  {
    icon: SiFramer,
    name: "Framer",
    title: "No-code web design.",
    proficiency: "99%",
  },
  {
    icon: SiFigma,
    name: "Figma",
    title: "General Design Tool",
    proficiency: "95%",
  },
  {
    icon: SiAdobephotoshop,
    name: "Photoshop",
    title: "Image editing",
    proficiency: "90%",
  },
  {
    icon: SiAdobeillustrator,
    name: "Illustrator",
    title: "Graphic design",
    proficiency: "90%",
  },
  {
    icon: SiJavascript,
    name: "Javascript",
    title: "Front end development",
    proficiency: "85%",
  },
  {
    icon: LuSpline,
    name: "Spline",
    title: "3D design",
    proficiency: "80%",
  },
];
