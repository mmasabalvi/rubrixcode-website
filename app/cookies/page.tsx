import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read how RubrixCode may use cookies and similar technologies for site functionality and analytics.",
  alternates: {
    canonical: "/cookies"
  }
};

export default function CookiesPage() {
  return <LegalPage {...legalPages.cookies} />;
}
