import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users
} from "lucide-react";
import { servicePages } from "@/lib/service-pages";

const quickLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refund-policy" }
];

const socials = [
  { label: "LinkedIn", icon: Users },
  { label: "Instagram", icon: Camera },
  { label: "Facebook", icon: Send },
  { label: "WhatsApp", icon: MessageCircle }
];

export default function Footer() {
  return (
    <footer className="bg-navy px-5 pt-18 text-white">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-cyan/35 pb-12 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.95fr]">
          <div>
            <Link
              href="/#top"
              className="focus-ring mb-5 flex w-fit items-center gap-3 rounded-lg"
            >
              <Image
                src="/assets/SVG/Asset 24.svg"
                alt=""
                width={170}
                height={48}
                className="h-9 w-auto"
              />
              <span className="sr-only">RubrixCode</span>
            </Link>
            <p className="text-xl font-semibold text-white">
              Your Vision, Our Code
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/66">
              A full-service digital agency for founders who need web, mobile,
              UI/UX, blockchain, and growth execution from one focused team.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <span className="flex items-center gap-3">
                <Globe2 aria-hidden="true" className="text-cyan" size={17} />
                www.rubrixcode.com
              </span>
              <span className="flex items-center gap-3">
                <Mail aria-hidden="true" className="text-cyan" size={17} />
                support@rubrixcode.com
              </span>
              <span className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="text-cyan" size={17} />
                Islamabad, Pakistan
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Services</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {servicePages.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="focus-ring w-fit rounded transition hover:text-cyan"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Company</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring w-fit rounded transition hover:text-cyan"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Launch With Clarity</h3>
            <p className="mt-5 text-sm leading-7 text-white/66">
              Tell us what you are building and we will map the right service
              mix, launch path, and next milestone.
            </p>
            <Link
              href="/#contact"
              className="button-glow focus-ring label-caps mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-cyan px-5 text-white transition hover:bg-[#0ab4ee]"
            >
              Get Consultation
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
            <div className="mt-7 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    type="button"
                    aria-label={social.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-navy transition hover:-translate-y-1 hover:bg-[#7ad0ff]"
                  >
                    <Icon aria-hidden="true" size={18} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p>(c) 2026 RubrixCode. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded transition hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
