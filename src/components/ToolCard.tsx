import type { ReactNode } from "react";

type ToolCardProps = {
  name: string;
  title: string;
  proficiency: string;
  icon: ReactNode;
};

export default function ToolCard({
  name,
  title,
  proficiency,
  icon,
}: ToolCardProps) {
  return (
    <article
      data-tool-card
      className="grid min-h-[100px] content-center grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] items-center gap-x-5 gap-y-1 bg-[var(--card)] px-5 py-7 sm:px-5"
    >
      <div className="row-span-2 flex h-10 w-12 items-center justify-center text-[var(--muted-foreground)]">
        {icon}
      </div>

      <h3 className="text-xl font-medium leading-none tracking-[-0.02em] text-[var(--foreground)]">
        {name}
      </h3>

      <p className="text-md leading-none tracking-[-0.02em] text-[var(--muted-foreground)]">
        {proficiency}
      </p>

      <p className="text-md leading-none tracking-[-0.015em] text-[var(--foreground)]">
        {title}
      </p>
    </article>
  );
}
