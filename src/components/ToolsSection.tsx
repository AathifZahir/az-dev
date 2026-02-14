import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export default function ToolsSection() {
  return (
    <section
      id="tools"
      aria-label="Tools section"
      className="bg-[#FFFFFF] px-10 pb-45"
    >
      <div className="mx-auto w-full">
        <h2 className="text-[2rem] font-medium tracking-[-0.02em] text-[#111111]">
          Tools
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <ToolCard
                key={tool.name}
                name={tool.name}
                title={tool.title}
                proficiency={tool.proficiency}
                icon={<Icon aria-hidden className="h-10 w-10" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
