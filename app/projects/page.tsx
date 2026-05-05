import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Projects" }
];

export const metadata: Metadata = {
  title: "Projects - Startup Digital Product Portfolio",
  description:
    "Explore RubrixCode project proof across web development, e-commerce, app workflows, LegalTech, and UI/UX product mockups.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "RubrixCode Projects - Startup Digital Product Portfolio",
    description:
      "Selected public work and project proof for RubrixCode web, app, and UI/UX services.",
    url: "/projects",
    type: "website"
  }
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Navbar />
      <main className="bg-white pt-20">
        <section className="relative isolate overflow-hidden bg-white pb-18 pt-12">
          <div className="cube-grid-bg absolute inset-0 -z-10 opacity-70" />
          <div className="absolute right-[-12%] top-6 -z-10 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-3xl" />
          <div className="container-shell">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 max-w-3xl">
              <p className="label-caps text-cyan-deep">RubrixCode Projects</p>
              <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] text-navy md:text-6xl">
                Product proof across web, app, and UI/UX work
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted md:text-xl">
                A focused portfolio layer for founders who want to see how
                RubrixCode thinks about product structure, workflows, and launch
                credibility.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell grid gap-7 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_14px_42px_rgba(13,43,78,0.08)] transition hover:-translate-y-1 hover:shadow-soft-blue">
                  <div className="relative aspect-[2.05] overflow-hidden bg-surface-soft">
                    <Image
                      src={project.image}
                      alt={`${project.title} product preview`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.035]"
                      sizes="(max-width: 1024px) 92vw, 620px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="label-caps text-cyan-deep">{project.tag}</p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-navy">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted">
                      {project.outcome}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan/20 bg-surface-soft px-3 py-1.5 text-xs font-bold text-cyan-deep"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="button-glow label-caps focus-ring mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
                    >
                      View Case Study
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
