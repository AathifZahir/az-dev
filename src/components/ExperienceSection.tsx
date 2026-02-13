import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience section"
      className="bg-[#FFFFFF] px-3 py-20 sm:px-4 lg:px-6 pt-35"
    >
      <div className="mx-auto w-full">
        <p className=" text-6xl font-medium text-black tracking-tighter">
          I'm Aathif Zahir, a Software Developer with over a decade of
          experience building clean, user-focused products,{" "}
          <span className="text-[#7a7a7a]">
            turning complex ideas into intuitive, scalable web experiences.
          </span>
        </p>

        <div className="mt-24 flex items-end justify-between">
          <h2 className="text-[2rem] font-semibold text-[#1f1f1f]">
            Experience
          </h2>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3a3a3a] transition-opacity hover:opacity-70"
          >
            <span aria-hidden>↳</span>
            <span>Download CV</span>
          </button>
        </div>

        <div className="mt-6">
          {experiences.map((item) => (
            <article key={`${item.period}-${item.role}`} className="py-6">
              <div className="grid items-end gap-4 border-b-1 border-[#d2d2d2] pb-2 lg:grid-cols-[36rem_1fr_16rem] lg:gap-8">
                <p className="text-md text-[#8a8a8a]">{item.period}</p>
                <h3 className="text-left text-[1.5rem] font-medium text-black">
                  {item.role}
                </h3>
                <p className="text-md text-black lg:text-right">
                  {item.company}
                </p>
              </div>
              <div className="mt-2 grid gap-4 lg:grid-cols-[36rem_1fr_14rem] lg:gap-8">
                <div />
                <p className="max-w-[52rem] text-left text-md text-black">
                  {item.description}
                </p>
                <div />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
