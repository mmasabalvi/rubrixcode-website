import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  getBlogPost,
  type BlogPost
} from "@/lib/blog";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema
} from "@/lib/schema";
import {
  getServicePage,
  servicePages
} from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.primaryKeyword,
      service.category,
      "digital agency Pakistan",
      "RubrixCode"
    ],
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: `${service.metaTitle} | RubrixCode`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website"
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title }
  ];
  const relatedPosts = service.relatedBlogSlugs
    .map((postSlug) => getBlogPost(postSlug))
    .filter((post): post is BlogPost => Boolean(post));
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema(service),
          faqSchema(service.faqs)
        ]}
      />
      <Navbar />
      <main className="bg-white pt-20">
        <section className="relative isolate overflow-hidden bg-white pb-18 pt-12">
          <div className="cube-grid-bg absolute inset-0 -z-10 opacity-70" />
          <div className="absolute right-[-12%] top-8 -z-10 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-3xl" />
          <div className="container-shell">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
              <Reveal className="max-w-4xl">
                <p className="label-caps text-cyan-deep">{service.eyebrow}</p>
                <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] text-navy md:text-6xl">
                  {service.heroTitle}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
                  {service.heroLead}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#contact"
                    className="button-glow label-caps focus-ring inline-flex h-12 items-center gap-2 rounded-lg bg-cyan px-6 text-white transition hover:bg-[#0ab4ee]"
                  >
                    Get Free Consultation
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                  <Link
                    href="/projects"
                    className="label-caps focus-ring inline-flex h-12 items-center gap-2 rounded-lg border border-line bg-white px-6 text-navy transition hover:border-cyan hover:text-cyan-deep"
                  >
                    See Project Proof
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="glass-card relative overflow-hidden rounded-2xl p-7">
                  <div className="absolute right-[-18%] top-[-18%] h-56 w-56 rounded-full bg-cyan/14 blur-3xl" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-white shadow-[0_14px_30px_rgba(0,191,255,0.28)]">
                    <Icon aria-hidden="true" size={30} />
                  </span>
                  <h2 className="relative mt-7 text-2xl font-bold text-navy">
                    What this service helps you achieve
                  </h2>
                  <div className="relative mt-6 grid gap-4">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-cyan-deep"
                          size={19}
                        />
                        <p className="text-base leading-7 text-muted">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <div className="grid gap-7">
              {service.sections.map((section, index) => (
                <Reveal key={section.heading} delay={index * 0.06}>
                  <article className="rounded-2xl border border-line bg-white p-7 shadow-[0_14px_42px_rgba(13,43,78,0.08)] md:p-9">
                    <h2 className="text-2xl font-bold leading-tight text-navy md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 grid gap-5 text-base leading-8 text-muted md:text-lg">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <aside className="grid gap-6 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_14px_42px_rgba(13,43,78,0.08)]">
                <p className="label-caps text-cyan-deep">Deliverables</p>
                <ul className="mt-5 grid gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-cyan-deep"
                        size={16}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan/25 bg-navy p-6 text-white shadow-soft-blue">
                <p className="label-caps text-cyan">Next Step</p>
                <h2 className="mt-4 text-2xl font-bold leading-tight">
                  Want this mapped for your startup?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Book a free consultation and we will map the service mix,
                  launch path, and first practical milestone.
                </p>
                <Link
                  href="/#contact"
                  className="button-glow label-caps focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
                >
                  Get Consultation
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell">
            <SectionHeader
              eyebrow="How We Work"
              title="A simple path from idea to launch"
              description="The exact details change by service, but the rhythm stays the same: clarity first, then design, build, and measured improvement."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <article className="glass-card h-full rounded-xl p-6">
                    <span className="label-caps text-cyan-deep">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="label-caps text-cyan-deep">Common Questions</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
                Questions founders ask before choosing {service.shortTitle}
              </h2>
            </div>
            <div className="grid gap-4">
              {service.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(13,43,78,0.06)]"
                >
                  <h3 className="text-lg font-bold text-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="section-pad bg-white">
            <div className="container-shell flex flex-col gap-10">
              <SectionHeader
                eyebrow="Related Reading"
                title="Keep building the content cluster"
                description="These guides connect the service page to useful founder questions and long-tail search intent."
              />
              <div className="grid gap-7 lg:grid-cols-3">
                {relatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} compact />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
