import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  compact?: boolean;
};

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  const Icon = post.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_14px_42px_rgba(13,43,78,0.08)] transition hover:-translate-y-1 hover:shadow-soft-blue">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[1.9] overflow-hidden bg-surface-soft"
        aria-label={post.title}
      >
        <Image
          src={post.heroImage}
          alt={`${post.title} article visual`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          sizes="(max-width: 1024px) 92vw, 420px"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/86 px-3 py-2 shadow-[0_12px_28px_rgba(13,43,78,0.12)] backdrop-blur">
          <Icon aria-hidden="true" className="text-cyan-deep" size={16} />
          <span className="label-caps text-cyan-deep">{post.category}</span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2 text-xs font-bold text-cyan-deep">
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={`font-bold leading-tight text-navy ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="transition hover:text-cyan-deep">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-muted">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="button-glow label-caps focus-ring mt-auto inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
        >
          Read Article
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
