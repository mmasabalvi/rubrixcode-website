import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "glass";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary:
      "button-glow bg-cyan text-white hover:bg-[#0ab4ee] border-cyan",
    secondary:
      "bg-white text-navy border-navy hover:border-cyan hover:bg-surface-soft",
    dark: "bg-navy text-white border-navy hover:bg-navy-bright",
    glass:
      "bg-white text-navy border-line hover:border-cyan hover:bg-surface-soft backdrop-blur"
  };

  return (
    <Link
      href={href}
      className={`focus-ring label-caps inline-flex h-12 items-center justify-center gap-2 rounded-lg border px-6 transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.2} />
    </Link>
  );
}
