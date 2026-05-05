import ButtonLink from "@/components/ButtonLink";
import HeroCube from "@/components/HeroCube";
import LoadReveal from "@/components/LoadReveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-[88px] text-ink"
    >
      <div className="cube-grid-bg absolute inset-0 -z-10 opacity-80" />
      <div className="absolute left-[-12%] top-20 -z-10 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute right-[-10%] top-28 -z-10 h-[620px] w-[620px] rounded-full bg-[#d7f4ff] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
      <div className="container-shell relative grid min-h-[590px] items-center gap-12 py-8 lg:grid-cols-[0.55fr_0.45fr]">
        <LoadReveal className="relative z-10 flex max-w-3xl flex-col gap-8">
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-normal text-navy md:text-6xl">
            Launch Every{" "}
            <span className="heading-accent">Digital Side</span> With One
            Product Team
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Websites, apps, UI/UX, blockchain, and social media delivered under
            one roof, so you do not have to manage five different vendors.
          </p>
          <div className="grid max-w-md gap-4 sm:flex sm:max-w-none sm:flex-wrap">
            <ButtonLink href="#contact">Get Free Consultation</ButtonLink>
            <ButtonLink href="#projects" variant="glass">
              See Our Work
            </ButtonLink>
          </div>
        </LoadReveal>

        <LoadReveal
          className="relative z-10 hidden justify-self-end md:block lg:-translate-x-4 xl:-translate-x-6"
          delay={0.12}
        >
          <HeroCube />
        </LoadReveal>
      </div>
    </section>
  );
}
