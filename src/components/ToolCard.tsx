import type { ReactNode } from "react";

type ToolCardProps = {
  name: string;
  title: string;
  proficiency?: string;
  icon: ReactNode;
};

export default function ToolCard({
  name,
  title,
  proficiency,
  icon,
}: ToolCardProps) {
  const hasProficiency = proficiency != null && proficiency !== "";

  return (
    <article
      data-tool-card
      className={`grid min-h-[100px] content-center items-center gap-x-5 gap-y-1 bg-[var(--card)] px-5 py-7 sm:px-5 ${
        hasProficiency
          ? "grid-cols-[auto_1fr_auto] grid-rows-[auto_auto]"
          : "grid-cols-[auto_1fr] grid-rows-[auto_auto]"
      }`}
    >
      <div className="row-span-2 flex h-10 w-12 items-center justify-center text-[var(--muted-foreground)]">
        {icon}
      </div>

      <h3 className="col-start-2 row-start-1 text-xl font-medium leading-none tracking-[-0.02em] text-[var(--foreground)]">
        {name}
      </h3>

      {hasProficiency ? (
        <p className="col-start-3 row-start-1 text-md leading-none tracking-[-0.02em] text-[var(--muted-foreground)]">
          {proficiency}
        </p>
      ) : null}

      <p className="col-start-2 row-start-2 text-md leading-none tracking-[-0.015em] text-[var(--foreground)]">
        {title}
      </p>
    </article>
  );
}
