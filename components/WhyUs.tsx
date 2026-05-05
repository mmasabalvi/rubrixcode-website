import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-surface-soft">
      <div className="container-shell flex flex-col gap-14">
        <SectionHeader
          eyebrow="Our Edge"
          title="Why Startups Choose Us"
          description="RubrixCode gives founders one accountable partner for product design, engineering, blockchain, and growth without the vendor maze."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {whyUs.map((item, index) => {
            const Icon = item.icon;
            const from = index === 0 ? "left" : index === 2 ? "right" : "up";

            return (
              <Reveal key={item.title} from={from} delay={index * 0.08}>
                <article className="premium-card group glass-card relative flex min-h-[290px] flex-col items-center gap-5 overflow-hidden rounded-xl border-t-4 border-t-cyan px-7 py-9 text-center transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-soft-blue">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-white shadow-[0_14px_30px_rgba(0,191,255,0.28)] transition group-hover:scale-105">
                    <Icon aria-hidden="true" size={27} />
                  </span>
                  <h3 className="text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
