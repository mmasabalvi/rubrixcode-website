import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, GitBranch } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { getServicePage } from "@/lib/service-pages";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: `${project.objective} ${project.outcome}`,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} Case Study | RubrixCode`,
      description: project.outcome,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 760,
          alt: `${project.title} product preview`
        }
      ]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const service = getServicePage(project.serviceSlug);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title }
  ];
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.outcome,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.image),
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    keywords: project.stack.join(", "),
    about: project.tag
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), projectJsonLd]} />
      <Navbar />
      <main className="bg-white pt-20">
        <section className="relative isolate overflow-hidden bg-white pb-18 pt-12">
          <div className="cube-grid-bg absolute inset-0 -z-10 opacity-70" />
          <div className="absolute right-[-12%] top-6 -z-10 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-3xl" />
          <div className="container-shell">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <Reveal>
                <p className="label-caps text-cyan-deep">{project.tag}</p>
                <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] text-navy md:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted md:text-xl">
                  {project.objective}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-glow label-caps focus-ring inline-flex h-12 items-center gap-2 rounded-lg bg-cyan px-6 text-white transition hover:bg-[#0ab4ee]"
                  >
                    View Repository
                    <GitBranch aria-hidden="true" size={16} />
                  </Link>
                  {service ? (
                    <Link
                      href={`/services/${service.slug}`}
                      className="label-caps focus-ring inline-flex h-12 items-center gap-2 rounded-lg border border-line bg-white px-6 text-navy transition hover:border-cyan hover:text-cyan-deep"
                    >
                      Related Service
                      <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative aspect-[1.8] overflow-hidden rounded-2xl border border-line bg-surface-soft shadow-soft-blue">
                  <Image
                    src={project.image}
                    alt={`${project.title} product preview`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 720px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell grid gap-7 lg:grid-cols-3">
            {[
              ["Objective", project.objective],
              ["Strategy", project.strategy],
              ["Outcome", project.outcome]
            ].map(([label, body]) => (
              <Reveal key={label}>
                <article className="glass-card h-full rounded-xl p-7">
                  <p className="label-caps text-cyan-deep">{label}</p>
                  <p className="mt-4 text-base leading-7 text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="container-shell mt-8">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_14px_42px_rgba(13,43,78,0.08)]">
              <p className="label-caps text-cyan-deep">Stack and Signals</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-surface-soft px-4 py-2 text-sm font-bold text-cyan-deep"
                  >
                    <CheckCircle2 aria-hidden="true" size={15} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
