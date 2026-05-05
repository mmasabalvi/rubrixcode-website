import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how RubrixCode handles project, contact, and communication information.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return <LegalPage {...legalPages.privacy} />;
}
