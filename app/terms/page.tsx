import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the general website and project engagement terms for RubrixCode.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return <LegalPage {...legalPages.terms} />;
}
