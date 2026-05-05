import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { breadcrumbSchema } from "@/lib/schema";
import { servicePages } from "@/lib/service-pages";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services" }
];

export const metadata: Metadata = {
  title: "Services - Web, App, UI/UX, Blockchain and Growth",
  description:
    "Explore RubrixCode services for startups: web development, app development, UI/UX design, blockchain development, and social media management.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "RubrixCode Services - Every Digital Side Under One Roof",
    description:
      "One product team for startup websites, apps, UI/UX, blockchain, and social media growth.",
    url: "/services",
    type: "website"
  }
};

export default function ServicesPage() {
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
              <p className="label-caps text-cyan-deep">RubrixCode Services</p>
              <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] text-navy md:text-6xl">
                Every <span className="heading-accent">Digital Side</span>,
                planned and built together
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted md:text-xl">
                Choose the service your startup needs now, or combine web, app,
                UI/UX, blockchain, and growth into one aligned product roadmap.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell flex flex-col gap-12">
            <SectionHeader
              eyebrow="Service Pages"
              title="Focused pages for focused search intent"
              description="Each service has its own roadmap, deliverables, FAQs, related insights, and consultation path."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicePages.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.slug} delay={index * 0.06}>
                    <article className="premium-card group glass-card relative flex min-h-[330px] flex-col overflow-hidden rounded-xl p-7 transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-soft-blue">
                      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-white shadow-[0_14px_30px_rgba(0,191,255,0.28)]">
                        <Icon aria-hidden="true" size={25} />
                      </span>
                      <p className="label-caps text-cyan-deep">
                        {service.eyebrow}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold leading-tight text-navy">
                        {service.title}
                      </h2>
                      <p className="mt-4 flex-1 text-base leading-7 text-muted">
                        {service.heroLead}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="button-glow label-caps focus-ring mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
                      >
                        Explore Service
                        <ArrowRight aria-hidden="true" size={15} />
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
