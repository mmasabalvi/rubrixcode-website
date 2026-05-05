import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { blogPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights - Startup Web, App, UI/UX and Growth Guides",
  description:
    "Read RubrixCode guides on startup MVPs, web development, app development, UI/UX design, blockchain, social media, and digital growth.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "RubrixCode Insights - Startup Digital Product Guides",
    description:
      "Practical articles for founders building websites, apps, MVPs, blockchain products, and digital growth systems.",
    url: "/blog",
    type: "website"
  }
};

export default function BlogPage() {
  const categories = getAllCategories();
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <>
      <Navbar />
      <main className="bg-white pt-20">
        <section className="relative isolate overflow-hidden bg-white pb-20 pt-10 md:pt-12">
          <div className="cube-grid-bg absolute inset-0 -z-10 opacity-70" />
          <div className="absolute right-[-12%] top-10 -z-10 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-3xl" />
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal className="flex max-w-3xl flex-col gap-6">
              <p className="label-caps text-cyan-deep">RubrixCode Insights</p>
              <h1 className="text-balance text-4xl font-bold leading-[1.08] text-navy md:text-5xl">
                Playbooks for Every{" "}
                <span className="heading-accent">Digital Side</span>
              </h1>
              <p className="text-lg leading-8 text-muted md:text-xl">
                Practical thinking for founders planning websites, apps,
                interfaces, blockchain products, and growth systems with one
                digital team.
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-cyan/20 bg-white px-4 py-2 text-sm font-bold text-cyan-deep shadow-[0_8px_24px_rgba(13,43,78,0.04)]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <BlogCard post={featured} />
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-surface-soft">
          <div className="container-shell grid gap-7 lg:grid-cols-3">
            {remaining.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06}>
                <BlogCard post={post} compact />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
