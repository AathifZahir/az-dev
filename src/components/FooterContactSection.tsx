import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function FooterContactSection() {
  return (
    <footer
      id="contact"
      aria-label="Footer contact section"
      className="h-screen bg-black"
    >
      <section className="grid h-full grid-cols-1 overflow-hidden bg-black lg:grid-cols-[1.02fr_1fr]">
        <div className="relative min-h-[48vh] lg:h-full p-1.5">
          <img
            src="https://placehold.co/1200x1600/png?text=Portrait"
            alt="Portrait placeholder"
            className="h-full w-full object-cover grayscale"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
        </div>

        <div className="flex min-h-[52vh] flex-col justify-between bg-black px-7 pb-6 pt-7 text-white sm:px-10 sm:pt-8 lg:h-full lg:px-10 lg:pb-8 lg:pt-7">
          <div>
            <h2 className="text-9xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#f5f5f5]">
              Get in touch
            </h2>
            <p className="mt-8 max-w-[35rem] text-[clamp(1.35rem,1.45vw,2.9rem)] leading-[1.3] tracking-[-0.02em] text-[#7e7e7e]">
              Whether you&apos;re looking to collaborate, start a new project,
              or simply connect. I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-14 flex items-end justify-between gap-5">
            <div className="text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-[#f3f3f3]">
              <p>+1 (123) 456-7890</p>
              <p>lorianhans@gmail.com</p>
            </div>

            <div className="flex items-center gap-5 text-xl text-white">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-70"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-opacity hover:opacity-70"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="X"
                className="transition-opacity hover:opacity-70"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
