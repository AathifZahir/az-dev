import type { AchievementItem } from "@/data/achievements";
import Link from "next/link";

type AwardRowProps = {
  award: AchievementItem;
};

export default function AwardRow({ award }: AwardRowProps) {
  const rowClasses =
    "grid items-end gap-4 border-b border-[var(--muted-border)] py-5 transition-colors duration-200 hover:border-[var(--foreground)] lg:grid-cols-[35rem_1fr_20rem] lg:gap-8";

  const content = (
    <>
      <p className="text-md text-[var(--muted-foreground)]">{award.year}</p>
      <h3 className="text-left text-[1.5rem] font-medium text-[var(--foreground)]">
        {award.title}
      </h3>
      <p className="text-lg text-[var(--foreground)] lg:text-right">
        {award.organization}
      </p>
    </>
  );

  if (award.link) {
    return (
      <Link
        href={award.link}
        target="_blank"
        rel="noreferrer"
        className={rowClasses}
        data-ach-row
        data-ach-border
      >
        {content}
      </Link>
    );
  }

  return (
    <article className={rowClasses} data-ach-row data-ach-border>
      {content}
    </article>
  );
}
