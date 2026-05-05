import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { LegalPageContent } from "@/lib/legal";

export default function LegalPage({
  title,
  updated,
  intro,
  sections
}: LegalPageContent) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <nav className="container-shell flex h-20 items-center justify-between">
          <Link
            href="/"
            className="focus-ring flex items-center gap-3 rounded-lg"
            aria-label="RubrixCode home"
          >
            <Image
              src="/assets/SVG/Asset 26.svg"
              alt=""
              width={170}
              height={48}
              className="h-9 w-auto"
              priority
            />
            <span className="sr-only">RubrixCode</span>
          </Link>
          <Link
            href="/#contact"
            className="focus-ring label-caps rounded-lg bg-cyan px-5 py-3 text-white shadow-[0_12px_28px_rgba(0,191,255,0.22)] transition hover:bg-[#0ab4ee]"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="bg-surface-soft">
        <section className="section-pad">
          <div className="container-shell max-w-4xl">
            <p className="label-caps text-cyan-deep">RubrixCode Legal</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-navy md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-sm font-semibold text-muted">
              Last updated: {updated}
            </p>
            <p className="mt-8 text-lg leading-8 text-muted">{intro}</p>

            <div className="mt-12 grid gap-5">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="glass-card rounded-xl p-6 md:p-8"
                >
                  <h2 className="text-2xl font-bold text-navy">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
