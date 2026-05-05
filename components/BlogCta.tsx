import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BlogCtaProps = {
  title: string;
  body: string;
};

export default function BlogCta({ title, body }: BlogCtaProps) {
  return (
    <aside className="relative overflow-hidden rounded-xl border border-cyan/25 bg-navy p-7 text-white shadow-soft-blue">
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan/20 blur-3xl" />
      <div className="relative flex flex-col gap-4">
        <p className="label-caps text-cyan">Next Step</p>
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <p className="text-base leading-7 text-white/72">{body}</p>
        <Link
          href="/#contact"
          className="button-glow label-caps focus-ring mt-2 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
        >
          Get Free Consultation
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </aside>
  );
}
