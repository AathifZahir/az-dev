
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imgset: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Py Scrap - Amazon Web Scraper",
    description: "A Python-based scraper using Scrapy to extract product details from Amazon, with MongoDB integration for data storage.",
    image: "/imgs/p4.png",
    imgset: ["/imgs/t4 (1).png", "/imgs/t4 (2).PNG"],
    tags: ["Python", "Scrapy", "MongoDB", "Data Mining"],
    links: {
      github: "https://github.com/AathifZahir/Py-Scrap",
      live: "",
    },
  },
  {
    id: 2,
    title: "MSR Tailor Store",
    description: "A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store.",
    image: "/imgs/p1.png",
    imgset: ["/imgs/t1 (1).png", "/imgs/t1 (2).png"],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/AathifZahir/MSR-ITP",
      live: "",
    },
  },
  {
    id: 3,
    title: "Internship Finder - ProIntern",
    description: "A React Native and Firebase app for managing internships and applications, helping students find relevant opportunities.",
    image: "/imgs/p2.png",
    imgset: ["/imgs/t2 (1).jpg", "/imgs/t2 (2).jpg"],
    tags: ["React Native", "Firebase", "Authentication", "Cloud Functions"],
    links: {
      github: "https://github.com/AathifZahir/ProIntern",
      live: ""
    },
  },
  {
    id: 4,
    title: "Minders",
    description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
    image: "/imgs/p3.png",
    imgset: ["/imgs/t3 (1).png", "/imgs/t3 (2).png"],
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://github.com/AathifZahir/Minders",
      live: "https://minders-sigma.vercel.app/",
    },
  },
];
