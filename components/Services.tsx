import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { servicePages } from "@/lib/service-pages";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-shell flex flex-col gap-14">
        <SectionHeader
          eyebrow="What We Do"
          title="Everything Your Business Needs"
          description="Five core digital services under one roof, designed for startups that need speed, consistency, and a partner who understands the full launch picture."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {servicePages.map((service, index) => {
            const Icon = service.icon;
            const placement =
              index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : index === 4
                  ? "lg:col-span-2 lg:col-start-4"
                  : "lg:col-span-2";

            return (
              <Reveal
                key={service.title}
                className={placement}
                delay={index * 0.08}
              >
                <article className="premium-card group glass-card relative flex min-h-[310px] flex-col overflow-hidden rounded-xl p-7 transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-[0_22px_70px_rgba(13,43,78,0.14)]">
                  <div className="absolute inset-y-0 left-0 w-1 bg-cyan transition group-hover:shadow-[0_0_18px_rgba(0,191,255,0.85)]" />
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-white shadow-[0_14px_30px_rgba(0,191,255,0.28)]">
                    <Icon aria-hidden="true" size={25} />
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-muted">
                    {service.heroLead}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="label-caps focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded text-cyan-deep transition hover:text-navy"
                  >
                    Learn More
                    <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
