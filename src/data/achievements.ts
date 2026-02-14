export type AchievementItem = {
  year: string;
  title: string;
  organization: string;
  link?: string;
};

export const achievements: AchievementItem[] = [
  {
    year: "2024",
    title: "Site of the day x2",
    organization: "Awwwards",
  },
  {
    year: "2024",
    title: "Site of the month",
    organization: "CSS Design Awards",
  },
  {
    year: "2023",
    title: "Site of the month",
    organization: "Framer",
  },
  {
    year: "2023",
    title: "Site of the day",
    organization: "CSS Design Awards",
  },
];
