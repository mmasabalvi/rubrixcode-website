export type LegalSection = {
  title: string;
  body: string;
};

export type LegalPageContent = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    updated: "May 4, 2026",
    intro:
      "This page explains how RubrixCode handles basic project, contact, and communication information shared through the website or direct inquiries.",
    sections: [
      {
        title: "Information We Collect",
        body: "We may collect your name, email address, company details, project requirements, and any message you choose to send through our contact forms or direct communication channels."
      },
      {
        title: "How We Use Information",
        body: "We use submitted information to respond to inquiries, prepare project recommendations, manage client communication, and improve our service experience."
      },
      {
        title: "Data Sharing",
        body: "We do not sell personal information. Information may only be shared with trusted service providers when needed to operate the website, communicate with you, or deliver agreed project work."
      },
      {
        title: "Contact",
        body: "For privacy questions or data requests, contact support@rubrixcode.com."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    updated: "May 4, 2026",
    intro:
      "These terms outline the general conditions for using the RubrixCode website and starting a project conversation with our team.",
    sections: [
      {
        title: "Website Use",
        body: "You may browse this website for information about RubrixCode services. You agree not to misuse the website, attempt unauthorized access, or interfere with its availability."
      },
      {
        title: "Project Engagements",
        body: "Any project work, pricing, timelines, deliverables, ownership, and support commitments are confirmed separately through a written proposal, contract, or statement of work."
      },
      {
        title: "Content Accuracy",
        body: "We aim to keep website content accurate and useful, but service details, availability, and examples may change as RubrixCode evolves."
      },
      {
        title: "Liability",
        body: "The website is provided for general information. RubrixCode is not responsible for losses caused by relying on website content without a formal project agreement."
      }
    ]
  },
  cookies: {
    title: "Cookie Policy",
    updated: "May 4, 2026",
    intro:
      "This policy explains how cookies or similar technologies may be used to support website functionality, analytics, and performance.",
    sections: [
      {
        title: "Essential Cookies",
        body: "Some cookies may be required for basic website functionality, security, routing, and form behavior."
      },
      {
        title: "Analytics",
        body: "If analytics tools are enabled, they may help us understand page performance, visitor behavior, and areas where the website can be improved."
      },
      {
        title: "Managing Cookies",
        body: "You can manage or block cookies through your browser settings. Some website features may work differently if cookies are disabled."
      },
      {
        title: "Updates",
        body: "This cookie policy may be updated as the website stack, analytics setup, or service tools change."
      }
    ]
  },
  refund: {
    title: "Refund Policy",
    updated: "May 4, 2026",
    intro:
      "This policy describes the general refund approach for RubrixCode services. Final terms depend on the signed project agreement.",
    sections: [
      {
        title: "Custom Service Work",
        body: "Most RubrixCode work is custom strategy, design, development, or growth execution. Refund eligibility depends on project scope, delivered milestones, and written agreement terms."
      },
      {
        title: "Deposits",
        body: "Project deposits may be non-refundable once planning, design, development, research, or resource allocation has started."
      },
      {
        title: "Milestone Reviews",
        body: "Clients should review deliverables at each milestone. Any requested revisions or concerns should be raised promptly so they can be addressed within the project workflow."
      },
      {
        title: "Questions",
        body: "For refund or billing questions, contact support@rubrixcode.com with your project name and invoice details."
      }
    ]
  }
} satisfies Record<string, LegalPageContent>;
