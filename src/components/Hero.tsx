export default function Hero() {
  return (
    <main className="min-h-screen bg-[#ececec] p-2">
      <section className="relative flex min-h-[calc(100vh-0.5rem)] flex-col overflow-hidden  bg-[#ececec] lg:flex-row">
        <div className="relative flex w-full flex-col px-4 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5 lg:w-1/2 lg:px-7 lg:pb-8 lg:pt-6">
          <div className="mt-auto flex items-end justify-between gap-4 pt-8 text-black">
            <p className="text-[clamp(1rem,1.25vw,2rem)] font-medium leading-tight">
              Web Designer &amp; Digital Creative based in France
            </p>
            <p className="whitespace-nowrap text-[clamp(1rem,1.15vw,1.8rem)] font-medium">
              Selected Work &darr;
            </p>
          </div>
        </div>

        <div className="hero-image-panel relative min-h-[52vh] w-full overflow-hidden  bg-[radial-gradient(circle_at_20%_35%,#d9d9d9_0%,#cfcfcf_32%,#c4c4c4_62%,#b7b7b7_100%)] lg:min-h-0 lg:w-1/2">
          <button
            type="button"
            aria-label="Open menu"
            className="absolute right-4 top-4 z-40 h-9 w-9  bg-[#f5f5f5] text-3xl font-extralight leading-none text-black"
          >
            +
          </button>

          <div className="hero-image-content absolute inset-0 z-10">
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
