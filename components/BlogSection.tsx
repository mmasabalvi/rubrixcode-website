import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { featuredBlogPosts } from "@/lib/blog";

export default function BlogSection() {
  return (
    <section id="insights" className="section-pad bg-surface-soft">
      <div className="container-shell flex flex-col gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="RubrixCode Insights"
            title="Playbooks for Every Digital Side"
            description="Founder-friendly guides on websites, apps, UI/UX, blockchain, social media, and the product strategy that keeps them moving together."
          />
          <Link
            href="/blog"
            className="button-glow label-caps focus-ring inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
          >
            View All Articles
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {featuredBlogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <BlogCard post={post} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
