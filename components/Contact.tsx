"use client";

import { Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { contactMethods, contactServices } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface-soft">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          description="Tell us what you need - we'll map out the full roadmap, completely free."
        />

        <Reveal className="mx-auto mt-12 max-w-4xl" from="up">
          <form
            className="glass-card rounded-2xl p-6 md:p-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="label-caps text-ink">Name</span>
                <input
                  className="focus-ring h-12 rounded-lg border border-line bg-white px-4 text-sm text-ink transition focus:border-cyan"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label-caps text-ink">Email</span>
                <input
                  className="focus-ring h-12 rounded-lg border border-line bg-white px-4 text-sm text-ink transition focus:border-cyan"
                  placeholder="john@company.com"
                  type="email"
                  required
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2">
              <span className="label-caps text-ink">Service Needed</span>
              <select className="focus-ring h-12 rounded-lg border border-line bg-white px-4 text-sm text-ink transition focus:border-cyan">
                {contactServices.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </label>

            <label className="mt-5 flex flex-col gap-2">
              <span className="label-caps text-ink">Message</span>
              <textarea
                className="focus-ring min-h-36 rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink transition focus:border-cyan"
                placeholder="Tell us about your project..."
                required
              />
            </label>

            <button
              className="button-glow focus-ring label-caps mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-cyan bg-cyan px-6 text-white transition hover:bg-[#0ab4ee]"
              type="submit"
            >
              Send Message
              <Send aria-hidden="true" size={16} />
            </button>
          </form>
        </Reveal>

        <Reveal className="mx-auto mt-10 grid max-w-5xl gap-5 text-center md:grid-cols-3" delay={0.1}>
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-line bg-white px-5 py-4 text-sm font-semibold text-muted shadow-[0_8px_24px_rgba(13,43,78,0.04)]"
              >
                <Icon aria-hidden="true" className="text-cyan-deep" size={18} />
                <span>{method.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
