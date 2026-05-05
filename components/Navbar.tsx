"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setReady(true));
    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const currentPosition = window.scrollY + 140;
      const currentSection = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= currentPosition) {
          return `#${id}`;
        }

        return active;
      }, "");

      setActiveHref(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href;
    }

    return pathname === "/" ? href : `/${href}`;
  };

  const homeHref = pathname === "/" ? "#top" : "/#top";
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-xl transition ${
        scrolled ? "bg-white/82 shadow-[0_10px_30px_rgba(13,43,78,0.08)]" : "bg-white/96"
      } ${ready ? "nav-load" : ""}`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <Link
          href={homeHref}
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
          <span className="sr-only text-lg font-bold tracking-tight text-navy">
            RubrixCode
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href.startsWith("/")
                ? pathname.startsWith(item.href)
                : activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                className={`focus-ring relative rounded text-sm font-semibold transition after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-cyan after:transition-all ${
                  isActive
                    ? "text-cyan-deep after:w-full"
                    : "text-navy after:w-0 hover:text-cyan-deep hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={contactHref}
          className="focus-ring label-caps hidden h-11 items-center rounded-lg bg-cyan px-5 text-white shadow-[0_12px_28px_rgba(0,191,255,0.22)] transition hover:bg-[#0ab4ee] hover:shadow-[0_16px_38px_rgba(0,191,255,0.32)] md:inline-flex"
        >
          Get Free Consultation
        </Link>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-navy md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-white md:hidden">
          <div className="container-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const isActive =
                item.href.startsWith("/")
                  ? pathname.startsWith(item.href)
                  : activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  className={`rounded-lg px-2 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-surface-soft text-cyan-deep"
                      : "text-navy hover:bg-surface-soft hover:text-cyan-deep"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={contactHref}
              className="label-caps mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-cyan px-5 text-white"
              onClick={() => setOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
