import AwardRow from "@/components/AwardRow";
import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      aria-label="Achievements section"
      className="bg-white px-10 pb-45"
    >
      <div className="mx-auto w-full">
        <h2 className="text-[2rem] font-semibold text-[#1f1f1f]">Awards</h2>

        <div className="mt-6 sm:mt-8">
          {achievements.map((item) => (
            <AwardRow
              key={`${item.year}-${item.title}-${item.organization}`}
              award={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
