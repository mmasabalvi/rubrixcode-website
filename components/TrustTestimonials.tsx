import { BadgeCheck, GitBranch, Handshake, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/lib/content";

const trustElements = [
  {
    label: "Public Work",
    value: "GitHub-backed portfolio",
    icon: GitBranch
  },
  {
    label: "Proof Style",
    value: "Founder-ready case cards",
    icon: BadgeCheck
  },
  {
    label: "Partnership",
    value: "Long-term delivery mindset",
    icon: Handshake
  },
  {
    label: "Confidence",
    value: "Clear scope before build",
    icon: ShieldCheck
  }
];

export default function TrustTestimonials() {
  const movingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-pad overflow-hidden bg-surface-soft">
      <div className="container-shell flex flex-col gap-12">
        <SectionHeader
          eyebrow="Trust Elements"
          title="Founder Confidence, On Repeat"
          description="Portfolio signals, delivery cues, and founder-facing proof that make the next step feel lower-risk."
        />

        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustElements.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="glass-card flex items-center gap-4 rounded-xl p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan text-white shadow-[0_14px_30px_rgba(0,191,255,0.26)]">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span>
                    <span className="label-caps block text-cyan-deep">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-bold leading-5 text-navy">
                      {item.value}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {movingTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="glass-card flex min-h-[230px] w-[330px] shrink-0 flex-col justify-between rounded-xl p-6 md:w-[420px]"
                >
                  <div className="flex gap-1 text-cyan" aria-label="5 star testimonial">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star
                        key={star}
                        aria-hidden="true"
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="pt-5 text-base leading-7 text-muted">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-8 border-t border-line pt-5">
                    {testimonial.profileUrl === "#" ? (
                      <p className="font-bold text-navy">{testimonial.name}</p>
                    ) : (
                      <Link
                        href={testimonial.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex rounded font-bold text-navy transition hover:text-cyan-deep"
                      >
                        {testimonial.name}
                      </Link>
                    )}
                    <p className="pt-1 text-sm font-semibold text-cyan-deep">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
