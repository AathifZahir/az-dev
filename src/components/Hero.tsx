export default function Hero() {
  return (
    <main className="h-screen bg-[#FFFFFF] p-1.5">
      <section className="relative flex h-full flex-col overflow-hidden  bg-[#FFFFFF] lg:flex-row">
        <div className="relative flex w-full flex-col px-4 pb-2 pt-4 sm:px-6 sm:pb-2 sm:pt-5 lg:w-1/2 lg:px-7 lg:pb-2 lg:pt-6">
          <div className="mt-auto flex items-end justify-between gap-4 pt-8 text-black">
            <p className="text-[clamp(1rem,1.25vw,2rem)] font-medium">
              Web Designer &amp; Digital Creative based in France
            </p>
            <p className="whitespace-nowrap text-[clamp(1rem,1.15vw,1.8rem)] font-regular">
              Selected Work &darr;
            </p>
          </div>
        </div>

        <div className="hero-image-panel relative min-h-[52vh] w-full overflow-hidden   lg:min-h-0 lg:w-1/2">
          <div className="hero-image-content absolute inset-0 z-10 ">
            <img
              src="https://placehold.co/1200x1600/png"
              alt="Hero placeholder"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="hero-image-wipe pointer-events-none absolute inset-0 z-30" />
        </div>
      </section>
    </main>
  );
}
