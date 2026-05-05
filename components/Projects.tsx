import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-shell flex flex-col gap-14">
        <SectionHeader
          eyebrow="Our Work"
          title="Built Like Real Products"
          description="Selected public work from the founder's GitHub, reframed as the kind of product thinking RubrixCode brings to startup builds."
        />

        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.title}
                className="h-full"
                from="scale"
                delay={index * 0.12}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_14px_42px_rgba(13,43,78,0.08)] transition hover:-translate-y-1 hover:shadow-soft-blue">
                  <div className="relative overflow-hidden bg-surface-soft p-3 md:p-4">
                    <div className="relative aspect-[2.08] overflow-hidden rounded-lg border border-line bg-white shadow-[0_12px_32px_rgba(13,43,78,0.08)]">
                      <Image
                        src={project.image}
                        alt={`${project.title} product preview`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.035]"
                        sizes="(max-width: 1024px) 92vw, 560px"
                      />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/82 px-3 py-2 shadow-[0_12px_28px_rgba(13,43,78,0.12)] backdrop-blur">
                        <Icon
                          aria-hidden="true"
                          className="text-cyan-deep"
                          size={16}
                        />
                        <span className="label-caps text-cyan-deep">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3.5 p-6 md:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-2xl font-bold leading-tight text-navy">
                        {project.title}
                      </h3>
                      <span className="label-caps rounded-full border border-cyan/25 bg-surface-soft px-3 py-2 text-cyan-deep">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-[15px] leading-6 text-muted">
                      <strong className="font-semibold text-ink">Objective:</strong>{" "}
                      {project.objective}
                    </p>
                    <p className="text-[15px] leading-6 text-muted">
                      <strong className="font-semibold text-ink">Strategy:</strong>{" "}
                      {project.strategy}
                    </p>
                    <p className="text-[15px] leading-6 text-muted">
                      <strong className="font-semibold text-ink">Outcome:</strong>{" "}
                      {project.outcome}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan/20 bg-surface-soft px-3 py-1.5 text-xs font-bold text-cyan-deep"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="button-glow label-caps focus-ring inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
                      >
                        View Case Study
                        <ArrowRight aria-hidden="true" size={15} />
                      </Link>
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="label-caps focus-ring inline-flex h-11 w-fit items-center gap-2 rounded-lg border border-line bg-white px-5 text-navy transition hover:border-cyan hover:text-cyan-deep"
                      >
                        Repository
                        <ArrowRight aria-hidden="true" size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
