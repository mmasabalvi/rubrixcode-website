import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the general RubrixCode refund approach for custom strategy, design, development, and growth services.",
  alternates: {
    canonical: "/refund-policy"
  }
};

export default function RefundPolicyPage() {
  return <LegalPage {...legalPages.refund} />;
}
