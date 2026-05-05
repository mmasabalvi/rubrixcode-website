import Image from "next/image";
import Reveal from "@/components/Reveal";

const chips = [
  "End-to-End Digital Services",
  "Startup-Friendly Pricing",
  "Long-Term Contracts",
  "Global Reach"
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface-soft">
      <Reveal
        className="container-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]"
        from="right"
      >
        <div className="about-mark-card relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 cube-grid-bg opacity-15" />
          <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/18 blur-3xl" />
          <Image
            src="/assets/SVG/Asset 31.svg"
            alt="RubrixCode cube mark"
            fill
            unoptimized
            className="-translate-y-5 object-contain px-14 pb-[120px] pt-8 drop-shadow-[0_28px_60px_rgba(0,191,255,0.36)]"
            sizes="(max-width: 768px) 90vw, 460px"
          />
          <div className="absolute inset-x-8 bottom-8 rounded-xl border border-cyan/25 bg-white/82 px-5 py-4 text-center shadow-[0_16px_45px_rgba(0,191,255,0.16)] backdrop-blur">
            <p className="label-caps text-cyan-deep">
              Every side solved. Every stack covered.
            </p>
          </div>
        </div>
        <div className="flex max-w-xl flex-col gap-6">
          <p className="label-caps text-cyan-deep">Who We Are</p>
          <h2 className="text-balance text-4xl font-bold leading-[1.08] md:text-5xl">
            Every <span className="heading-accent">Digital Side</span>, Solved
            Under One Roof.
          </h2>
          <p className="text-lg leading-8 text-muted">
            RubrixCode was built to solve a real problem - startups wasting time
            and money managing 4-5 different vendors for design, development,
            blockchain, and marketing. We bring every digital service under one
            roof, with one team, one vision, and one long-term partnership.
          </p>
          <p className="text-lg leading-8 text-muted">
            Our story comes from the Rubik&apos;s Cube philosophy: every block
            represents a core tech stack we have learned to solve with
            precision. Every side solved, every stack covered, and one team
            behind the build.
          </p>
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="label-caps rounded-full border border-cyan/20 bg-white px-4 py-3 text-center text-cyan-deep shadow-[0_8px_24px_rgba(13,43,78,0.04)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
