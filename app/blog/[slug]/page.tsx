import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import BlogCta from "@/components/BlogCta";
import BlogJsonLd from "@/components/BlogJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import {
  blogPosts,
  getBlogPost,
  getRelatedPosts
} from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 760,
          alt: `${post.title} article visual`
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const Icon = post.icon;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title }
  ];

  return (
    <>
      <BlogJsonLd post={post} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Navbar />
      <main className="bg-white pt-20">
        <article>
          <header className="relative isolate overflow-hidden bg-white pb-16 pt-10 md:pt-12">
            <div className="cube-grid-bg absolute inset-0 -z-10 opacity-70" />
            <div className="absolute right-[-10%] top-12 -z-10 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-3xl" />
            <div className="container-shell">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <div className="container-shell mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal className="flex max-w-3xl flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-white px-4 py-2 shadow-[0_10px_28px_rgba(13,59,110,0.07)]">
                    <Icon aria-hidden="true" size={16} className="text-cyan-deep" />
                    <span className="label-caps text-cyan-deep">
                      {post.category}
                    </span>
                  </span>
                  <span className="text-sm font-bold text-muted">
                    {post.readingTime}
                  </span>
                  <span className="text-sm font-bold text-muted">
                    Last updated {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <h1 className="text-balance text-4xl font-bold leading-[1.08] text-navy md:text-5xl">
                  {post.title}
                </h1>
                <p className="text-lg leading-8 text-muted md:text-xl">
                  {post.excerpt}
                </p>
                <p className="text-sm font-semibold text-cyan-deep">
                  Written and reviewed by the RubrixCode Editorial Team.
                </p>
              </Reveal>
              <Reveal
                delay={0.1}
                className="relative aspect-[1.58] overflow-hidden rounded-2xl border border-line bg-surface-soft shadow-soft-blue"
              >
                <Image
                  src={post.heroImage}
                  alt={`${post.title} article visual`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 680px"
                />
              </Reveal>
            </div>
          </header>

          <section className="section-pad bg-surface-soft">
            <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-start">
              <Reveal className="rounded-2xl border border-line bg-white p-6 shadow-[0_14px_42px_rgba(13,43,78,0.08)] md:p-10">
                <div className="blog-prose">
                  {post.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2
                        id={section.heading
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}
                      >
                        {section.heading}
                      </h2>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                      {section.takeaway ? (
                        <blockquote>{section.takeaway}</blockquote>
                      ) : null}
                    </section>
                  ))}

                  <section>
                    <h2>Common Questions</h2>
                    {post.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </section>
                </div>
              </Reveal>

              <aside className="grid gap-6 lg:sticky lg:top-28">
                <BlogCta title={post.cta.title} body={post.cta.body} />
              </aside>
            </div>
          </section>
        </article>

        {relatedPosts.length > 0 ? (
          <section className="section-pad bg-white">
            <div className="container-shell flex flex-col gap-10">
              <div className="max-w-2xl">
                <p className="label-caps text-cyan-deep">Related Reading</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-navy">
                  Keep Building the Content Cluster
                </h2>
              </div>
              <div className="grid gap-7 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} compact />
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
