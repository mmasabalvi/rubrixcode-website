import {
  Blocks,
  Globe2,
  Megaphone,
  Palette,
  Smartphone
} from "lucide-react";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  category: string;
  icon: typeof Globe2;
  proofProject?: string;
  relatedBlogSlugs: string[];
  outcomes: string[];
  deliverables: string[];
  process: {
    title: string;
    description: string;
  }[];
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "web-development-company-pakistan",
    title: "Web Development",
    shortTitle: "Web Dev",
    eyebrow: "Web Development Company in Pakistan",
    primaryKeyword: "web development company in Pakistan",
    metaTitle: "Web Development Company in Pakistan",
    metaDescription:
      "RubrixCode builds startup-ready websites, SaaS platforms, and e-commerce systems in Pakistan with strategy, UI/UX, and scalable engineering.",
    heroTitle: "Web Development Company in Pakistan for Startup-Ready Products",
    heroLead:
      "Build a website, SaaS platform, marketplace, dashboard, or e-commerce product with one team that understands design, engineering, content structure, and launch goals.",
    category: "Web Development",
    icon: Globe2,
    proofProject: "Zarooriyaat E-Commerce",
    relatedBlogSlugs: [
      "web-development-company-pakistan",
      "affordable-web-development-for-startups",
      "how-to-build-a-startup-mvp"
    ],
    outcomes: [
      "A fast, responsive web product built around the user journey.",
      "A content and component structure that can support SEO growth.",
      "A launch surface that feels credible before the first sales call."
    ],
    deliverables: [
      "Conversion-focused landing pages and service pages",
      "SaaS dashboards, admin panels, and internal portals",
      "E-commerce storefronts, cart flows, and order workflows",
      "Authentication, forms, APIs, CMS-ready content structures",
      "Performance, accessibility, responsive QA, and launch support"
    ],
    process: [
      {
        title: "Clarify",
        description:
          "We map the offer, audience, conversion goal, and core user journey before choosing sections or code."
      },
      {
        title: "Design",
        description:
          "We shape the interface, page hierarchy, and reusable components so the product feels consistent across screens."
      },
      {
        title: "Build",
        description:
          "We implement the frontend, backend integrations, forms, and responsive behavior with room for future pages."
      },
      {
        title: "Launch",
        description:
          "We test speed, mobile layouts, metadata, sitemap inclusion, internal links, and contact conversion paths."
      }
    ],
    sections: [
      {
        heading: "A website should explain the business before it shows off",
        body: [
          "Many startup websites look polished but fail because visitors still cannot understand what the company does, who it helps, and what action to take next. RubrixCode treats web development as a product and communication problem, not only a page-building task.",
          "That means the homepage, service sections, project proof, calls to action, and technical structure are planned together. The result is a website that can support sales, SEO, investor checks, and future product expansion."
        ]
      },
      {
        heading: "Built for founders who need momentum, not maintenance headaches",
        body: [
          "A startup web product has to move quickly without becoming fragile. We use modern React and Next.js patterns where they fit, keep components reusable, and make sure pages can grow into blogs, case studies, service pages, and campaign landing pages.",
          "The goal is a focused first version that feels premium now and practical later. You should not need a full rebuild just to add SEO pages, analytics, content, or a new service vertical."
        ]
      }
    ],
    faqs: [
      {
        question: "What makes RubrixCode different from a typical web development company?",
        answer:
          "RubrixCode combines product thinking, UI/UX, development, content structure, and launch strategy in one workflow, so the website is built around business outcomes instead of isolated pages."
      },
      {
        question: "Can you build e-commerce and SaaS-style websites?",
        answer:
          "Yes. RubrixCode can build e-commerce flows, dashboards, landing pages, admin interfaces, and SaaS-style web products depending on the project scope."
      },
      {
        question: "Do you include SEO foundations in web development?",
        answer:
          "Yes. We plan clean URLs, metadata, headings, sitemap inclusion, internal links, image alt text, and content hierarchy from the start."
      }
    ]
  },
  {
    slug: "app-development-company-pakistan",
    title: "App Development",
    shortTitle: "App Dev",
    eyebrow: "Mobile App Development Company Pakistan",
    primaryKeyword: "mobile app development company Pakistan",
    metaTitle: "Mobile App Development Company Pakistan",
    metaDescription:
      "RubrixCode builds startup-ready mobile app experiences with Flutter, React Native, UX planning, backend integration, and launch support.",
    heroTitle: "Mobile App Development Company Pakistan for Founders",
    heroLead:
      "Turn your mobile idea into a clear app journey with user flows, screens, backend needs, and a launch-ready roadmap before the build becomes expensive.",
    category: "App Development",
    icon: Smartphone,
    proofProject: "ShopVerse Commerce App",
    relatedBlogSlugs: [
      "mobile-app-development-company-pakistan",
      "ui-ux-design-agency-for-startups",
      "how-to-build-a-startup-mvp"
    ],
    outcomes: [
      "A mobile experience mapped around user actions, not random screens.",
      "A cross-platform build path that protects early-stage budgets.",
      "A clearer release plan for testing, iteration, and launch."
    ],
    deliverables: [
      "App flow mapping and screen architecture",
      "Flutter or React Native implementation planning",
      "Authentication, profiles, notifications, and backend wiring",
      "Admin or operations workflow support where needed",
      "Responsive QA, release preparation, and iteration roadmap"
    ],
    process: [
      {
        title: "Scope",
        description:
          "We define what the first app version must prove and which flows can wait."
      },
      {
        title: "Prototype",
        description:
          "We design the screens, states, and user journey before development locks in complexity."
      },
      {
        title: "Engineer",
        description:
          "We build the app experience with backend, data, and role-based behavior in mind."
      },
      {
        title: "Prepare",
        description:
          "We support testing, launch assets, store readiness, and feedback loops for the next version."
      }
    ],
    sections: [
      {
        heading: "Mobile apps need product clarity before code",
        body: [
          "A mobile app can become expensive quickly if every idea becomes a feature. RubrixCode starts by defining the user journey, the business assumption, and the minimum app version that can create useful feedback.",
          "This keeps the app focused. The first version should help users complete the core action, show the founder what is working, and leave space for future features after real usage data arrives."
        ]
      },
      {
        heading: "Cross-platform decisions should support the business model",
        body: [
          "Flutter and React Native are both practical choices for startups, but the best option depends on the product, team, integrations, and future roadmap. We explain those tradeoffs in plain language so founders can make a confident decision.",
          "The stack is only one part of the app. The real value comes from how the interface, backend, onboarding, analytics, and launch plan work together."
        ]
      }
    ],
    faqs: [
      {
        question: "Should a startup build in Flutter or React Native?",
        answer:
          "Both can work well. Flutter is strong for highly consistent interfaces, while React Native can be useful for teams already working in the React ecosystem. The right choice depends on scope, team, integrations, and long-term maintenance."
      },
      {
        question: "Do you help with app idea validation?",
        answer:
          "Yes. RubrixCode can help define the MVP, map user flows, and plan which features should launch first."
      },
      {
        question: "Can you build admin dashboards for mobile apps?",
        answer:
          "Yes. Many mobile products need web-based admin tools for users, content, orders, reports, or operations."
      }
    ]
  },
  {
    slug: "ui-ux-design-agency-for-startups",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    eyebrow: "UI UX Design Agency for Startups",
    primaryKeyword: "UI UX design agency for startups",
    metaTitle: "UI UX Design Agency for Startups",
    metaDescription:
      "RubrixCode designs startup product interfaces, user journeys, wireframes, prototypes, and conversion-focused digital experiences.",
    heroTitle: "UI UX Design Agency for Startups That Need Clarity",
    heroLead:
      "Design the journey before you build the product. RubrixCode helps founders turn loose ideas into flows, screens, states, and interfaces users can understand.",
    category: "UI/UX Design",
    icon: Palette,
    proofProject: "Nordvik Rentals Mockup",
    relatedBlogSlugs: [
      "ui-ux-design-agency-for-startups",
      "how-to-build-a-startup-mvp",
      "web-development-company-pakistan"
    ],
    outcomes: [
      "A product journey that explains itself without founder hand-holding.",
      "Cleaner development handoff with screens, states, and reusable components.",
      "A more premium interface that supports trust and conversion."
    ],
    deliverables: [
      "User flow mapping and information architecture",
      "Wireframes and high-fidelity interface design",
      "Clickable prototypes and interaction notes",
      "Responsive layouts, empty states, and error states",
      "Component systems for future product growth"
    ],
    process: [
      {
        title: "Understand",
        description:
          "We clarify users, goals, friction points, and the action each screen must support."
      },
      {
        title: "Map",
        description:
          "We turn the product into flows and wireframes before polishing the visual layer."
      },
      {
        title: "Design",
        description:
          "We create polished, responsive screens with consistent hierarchy and components."
      },
      {
        title: "Hand Off",
        description:
          "We prepare developers with states, notes, assets, and design logic that survives implementation."
      }
    ],
    sections: [
      {
        heading: "Good design reduces expensive rework",
        body: [
          "Startups often rush into development because code feels like progress. But if the user journey is unclear, development only makes the confusion more expensive. UI/UX design helps identify missing states, vague actions, and weak conversion moments before the build begins.",
          "RubrixCode designs with business outcomes in mind: onboarding, trust, product comprehension, lead capture, purchase paths, and repeat usage."
        ]
      },
      {
        heading: "Interfaces should feel premium and practical",
        body: [
          "A beautiful screen is not enough if users do not know what to do. We balance visual polish with practical product logic so founders can present a serious product while still moving quickly.",
          "The result is design that supports engineering, content, and growth instead of becoming a static mockup disconnected from the launch."
        ]
      }
    ],
    faqs: [
      {
        question: "Do startups need UI/UX before development?",
        answer:
          "Yes, if the product has important user flows. UI/UX reduces rework, clarifies the product, and gives developers a stronger build direction."
      },
      {
        question: "What does a startup UI/UX package include?",
        answer:
          "It can include user flows, wireframes, high-fidelity screens, prototypes, responsive layouts, core components, and notes for important states."
      },
      {
        question: "Can you redesign an existing website or app?",
        answer:
          "Yes. RubrixCode can audit the existing experience, identify friction, and redesign the journey around clearer user actions."
      }
    ]
  },
  {
    slug: "blockchain-development-services",
    title: "Blockchain Development",
    shortTitle: "Blockchain",
    eyebrow: "Blockchain Development Services",
    primaryKeyword: "blockchain development services",
    metaTitle: "Blockchain Development Services",
    metaDescription:
      "RubrixCode helps founders plan and build smart contract, DApp, NFT, wallet, and Web3 product experiences with clearer UX.",
    heroTitle: "Blockchain Development Services for Web3 Products People Understand",
    heroLead:
      "Plan and build wallet-connected interfaces, smart contract workflows, DApps, NFT platforms, and token systems with product clarity and user trust in mind.",
    category: "Blockchain",
    icon: Blocks,
    proofProject: "Lawyer Workspace",
    relatedBlogSlugs: [
      "blockchain-development-services-smart-contracts-dapps-nfts",
      "ui-ux-design-agency-for-startups",
      "digital-agency-pakistan-end-to-end-startup-partner"
    ],
    outcomes: [
      "A Web3 product journey that explains state, risk, and next action.",
      "Clearer smart contract and wallet interaction planning.",
      "A DApp or blockchain interface that feels safer for non-technical users."
    ],
    deliverables: [
      "Smart contract planning and integration flows",
      "Wallet authentication and transaction state design",
      "DApp frontend interfaces and dashboards",
      "NFT platform screens, metadata flows, and admin needs",
      "Testing, launch messaging, and risk communication support"
    ],
    process: [
      {
        title: "Define",
        description:
          "We clarify what belongs on-chain, what belongs off-chain, and what users need to understand."
      },
      {
        title: "Map",
        description:
          "We plan wallet connection, transaction states, permissions, errors, and recovery paths."
      },
      {
        title: "Build",
        description:
          "We connect the interface, contract interactions, and product logic into a usable Web3 flow."
      },
      {
        title: "Test",
        description:
          "We review transaction behavior, edge cases, user messaging, and launch readiness."
      }
    ],
    sections: [
      {
        heading: "Blockchain products still need normal product thinking",
        body: [
          "Founders often focus on the contract first, but users experience the product through screens, messages, wallet prompts, and transaction states. If those moments are confusing, the technology feels risky even when the code works.",
          "RubrixCode connects blockchain engineering with UX planning so the product feels understandable, not intimidating."
        ]
      },
      {
        heading: "Smart contract risk makes clarity essential",
        body: [
          "Smart contracts can carry real financial or ownership consequences. That means the roadmap should include permissions, upgrade paths, admin controls, transaction copy, error states, and testing from the beginning.",
          "We help founders translate Web3 ideas into product flows that normal users can trust."
        ]
      }
    ],
    faqs: [
      {
        question: "What are blockchain development services?",
        answer:
          "They include smart contract development, DApp interfaces, wallet integration, NFT platforms, token systems, testing, and launch support."
      },
      {
        question: "Can RubrixCode help with NFT platforms?",
        answer:
          "Yes. NFT products may need collection pages, metadata handling, wallet profiles, minting flows, admin controls, and community launch content."
      },
      {
        question: "Do all Web3 ideas need smart contracts?",
        answer:
          "No. Some ideas only need wallet authentication, blockchain data, or token-gated access. A discovery phase helps determine what is actually needed."
      }
    ]
  },
  {
    slug: "social-media-management-agency-pakistan",
    title: "Social Media Management",
    shortTitle: "Social Media",
    eyebrow: "Social Media Management Agency Pakistan",
    primaryKeyword: "social media management agency Pakistan",
    metaTitle: "Social Media Management Agency Pakistan",
    metaDescription:
      "RubrixCode builds startup social media systems with positioning, content pillars, launch messaging, and website-connected growth strategy.",
    heroTitle: "Social Media Management Agency Pakistan for Startup Growth",
    heroLead:
      "Turn social media into a growth system connected to your website, product proof, offer, and consultation flow instead of posting randomly.",
    category: "Social Media",
    icon: Megaphone,
    relatedBlogSlugs: [
      "social-media-management-agency-pakistan-startup-growth",
      "digital-agency-pakistan-end-to-end-startup-partner",
      "affordable-web-development-for-startups"
    ],
    outcomes: [
      "A content system connected to the website and offer.",
      "Clear content pillars for education, proof, trust, and conversion.",
      "A social presence that supports founder conversations and lead generation."
    ],
    deliverables: [
      "Positioning and content pillar strategy",
      "Launch calendars and campaign messaging",
      "Founder-led and product-led content direction",
      "Social proof, project proof, and offer posts",
      "Reporting loops tied to website clicks and consultation requests"
    ],
    process: [
      {
        title: "Position",
        description:
          "We define what the brand should be known for and which audience questions it should answer."
      },
      {
        title: "Plan",
        description:
          "We build content pillars, post formats, campaign themes, and distribution priorities."
      },
      {
        title: "Publish",
        description:
          "We turn service ideas, blog posts, project proof, and launch messages into consistent content."
      },
      {
        title: "Improve",
        description:
          "We track engagement, website clicks, consultation requests, and content topics that create conversations."
      }
    ],
    sections: [
      {
        heading: "Social media should not sit outside the product story",
        body: [
          "A startup can post consistently and still fail to create demand if the content is disconnected from the website, offer, and sales path. RubrixCode treats social media as part of the same digital system.",
          "That means blog posts, project proof, service pages, founder insights, and CTAs all reinforce one clear message."
        ]
      },
      {
        heading: "Content works better when it answers buyer questions",
        body: [
          "Strong startup content is not random inspiration. It answers what buyers are already wondering: what should we build first, how much complexity is enough, how do we choose a team, and what does a credible launch look like?",
          "We use those questions to create content pillars that support search, social distribution, and consultation requests."
        ]
      }
    ],
    faqs: [
      {
        question: "How often should a startup post on social media?",
        answer:
          "A practical starting point is three to five useful posts per week, but consistency only matters if the content supports positioning, proof, and conversion."
      },
      {
        question: "Can blog content be reused for social media?",
        answer:
          "Yes. Blog posts can become LinkedIn posts, short videos, carousels, founder notes, newsletters, and sales conversation prompts."
      },
      {
        question: "Do you connect social media with website strategy?",
        answer:
          "Yes. RubrixCode connects social content to service pages, project proof, contact CTAs, and the broader product message."
      }
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
