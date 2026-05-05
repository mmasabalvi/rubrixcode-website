import {
  Blocks,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
  Smartphone,
  WalletCards
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Web Development",
    shortTitle: "Web Dev",
    description:
      "Custom platforms, e-commerce solutions, and responsive frontend design built to perform.",
    detail:
      "For founders who need a serious online product, not a brochure. We architect the frontend, backend, admin layer, and launch surface together so the product can grow without a rebuild.",
    icon: Globe2,
    tags: ["Next.js", "APIs", "Performance"],
    deliverables: [
      "SaaS and dashboard interfaces",
      "Authentication and admin portals",
      "API integrations and CMS workflows",
      "Performance and conversion polish"
    ],
    outcome: "A launch-ready web product that feels credible on day one."
  },
  {
    title: "App Development",
    shortTitle: "App Dev",
    description:
      "iOS and Android apps built with Flutter and React Native that users love.",
    detail:
      "We turn mobile ideas into structured app experiences with the screens, states, flows, and release path needed for a confident first launch.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Launch"],
    deliverables: [
      "Clickable app flows",
      "Cross-platform implementation",
      "Push, auth, and backend wiring",
      "Store-ready launch preparation"
    ],
    outcome: "A focused mobile build that can be tested, pitched, and shipped."
  },
  {
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "User research, wireframing, prototyping, and brand-centric visuals that convert.",
    detail:
      "We design the decisions behind the interface: onboarding, conversion paths, empty states, dashboards, and the small moments that make a product feel trustworthy.",
    icon: Palette,
    tags: ["Research", "Design Systems", "Figma"],
    deliverables: [
      "Product flow mapping",
      "High-fidelity interface design",
      "Design systems and components",
      "Prototype and usability notes"
    ],
    outcome: "A product experience that users understand without being coached."
  },
  {
    title: "Blockchain",
    shortTitle: "Blockchain",
    description:
      "Smart contracts, DApps, NFT platforms, token creation, and wallet integration.",
    detail:
      "We remove the confusion from Web3 products by pairing contract-aware engineering with interaction design that explains risk, state, and next action.",
    icon: Blocks,
    tags: ["DApps", "Smart Contracts", "Web3"],
    deliverables: [
      "Wallet-connected interfaces",
      "DApp interaction flows",
      "Smart contract integration",
      "Transaction state design"
    ],
    outcome: "A Web3 product that feels safer, clearer, and more usable."
  },
  {
    title: "Social Media",
    shortTitle: "SMM",
    description:
      "Content strategy, branding, community engagement, and paid ad campaigns.",
    detail:
      "We connect launch messaging to product reality, creating content systems that help your first audience understand why your product should exist.",
    icon: Megaphone,
    tags: ["Content", "Campaigns", "Growth"],
    deliverables: [
      "Launch content calendars",
      "Campaign positioning",
      "Founder and product messaging",
      "Performance reporting loops"
    ],
    outcome: "A repeatable growth surface instead of random posting."
  }
];

export const whyUs = [
  {
    title: "All Services, One Roof",
    description:
      "Stop wasting time managing multiple vendors. Design, dev, blockchain, and marketing - one team handles it all.",
    icon: MonitorSmartphone
  },
  {
    title: "Startup-Friendly Pricing",
    description:
      "We understand runway. Our packages are built for early-stage teams who need quality without burning budget.",
    icon: WalletCards
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We don't just deliver and disappear. We embed into your team, learn your product, and grow alongside your business.",
    icon: Handshake
  }
];

export const projects = [
  {
    slug: "lawyer-workspace",
    title: "Lawyer Workspace",
    tag: "LegalTech Platform",
    objective: "Built a digital workspace concept for modernizing legal workflows in Pakistan.",
    strategy:
      "Structured the product as a web ecosystem with role-focused workflows, case context, and professional service flows.",
    outcome: "A credible LegalTech platform direction for lawyers, clients, and legal operations.",
    icon: ShieldCheck,
    repoUrl: "https://github.com/mmasabalvi/Lawyer-Workspace",
    image: "/assets/project-previews/lawyer-workspace.svg",
    stack: ["JavaScript", "LegalTech", "Web Platform"],
    serviceSlug: "web-development-company-pakistan"
  },
  {
    slug: "zarooriyaat-e-commerce",
    title: "Zarooriyaat E-Commerce",
    tag: "Web Development",
    objective: "Built a full-stack e-commerce web application for browsing products, cart flows, orders, reviews, and admin management.",
    strategy:
      "Used Java, Spring Boot, Thymeleaf, MySQL, and MVC-style architecture to connect storefront, customer, and admin workflows.",
    outcome: "A stronger e-commerce proof point that maps directly to RubrixCode's web development and platform-build services.",
    icon: Globe2,
    repoUrl: "https://github.com/mmasabalvi/Zarooriyaat-E-Commerce-Platform",
    image: "/assets/project-previews/zarooriyaat-commerce.svg",
    stack: ["Spring Boot", "MySQL", "E-Commerce"],
    serviceSlug: "web-development-company-pakistan"
  },
  {
    slug: "shopverse-commerce-app",
    title: "ShopVerse Commerce App",
    tag: "App Development",
    objective: "Built a multi-role e-commerce operations application for customers, sellers, admins, and shipping teams.",
    strategy:
      "Designed role-specific Windows Forms interfaces backed by SQL Server for inventory, orders, reports, reviews, and logistics.",
    outcome: "A service-relevant app case study showing operational workflows beyond a simple storefront.",
    icon: Smartphone,
    repoUrl: "https://github.com/mmasabalvi/ShopVerse-ECommerce-WinForms",
    image: "/assets/project-previews/shopverse-app.svg",
    stack: ["Windows Forms", "SQL Server", "Operations"],
    serviceSlug: "app-development-company-pakistan"
  },
  {
    slug: "nordvik-rentals-mockup",
    title: "Nordvik Rentals Mockup",
    tag: "UI/UX Design",
    objective: "Created a polished React and Tailwind rental website mockup with a premium property-booking direction.",
    strategy:
      "Focused on responsive page structure, visual hierarchy, property discovery, and booking-oriented interface patterns.",
    outcome: "A better UI/UX portfolio piece for showing how RubrixCode can make a service business feel premium online.",
    icon: Palette,
    repoUrl: "https://github.com/mmasabalvi/nordvik-rentals-mockup",
    image: "/assets/project-previews/nordvik-rentals.svg",
    stack: ["React", "Tailwind", "UI Mockup"],
    serviceSlug: "ui-ux-design-agency-for-startups"
  }
];

export const testimonials = [
  {
    quote:
      "RubrixCode made the product direction feel sharper by connecting engineering decisions to the actual launch goal.",
    name: "Muhammad Hashim Awan",
    role: "AI Engineer",
    profileUrl: "https://www.linkedin.com/in/muhammad-hashim-awan/"
  },
  {
    quote:
      "The strongest part was the systems thinking. The roadmap, interface, and automation opportunities all started making sense together.",
    name: "Mahad Rehman",
    role: "Agentic AI Engineer",
    profileUrl: "https://www.linkedin.com/in/mahad-rehman/"
  },
  {
    quote:
      "They understand the deployment side as well as the user-facing side, which makes the product feel much more launch-ready.",
    name: "Muhammad Masab Hammad",
    role: "Cloud Practitioner",
    profileUrl: "https://www.linkedin.com/in/muhammad-masab-hammad"
  },
  {
    quote:
      "RubrixCode brought structure to the work. Scope, priorities, and next milestones were easier to communicate after the first pass.",
    name: "Ahmed Umar",
    role: "Technical Project Manager",
    profileUrl: "https://www.linkedin.com/in/ahmed-umar/"
  },
  {
    quote:
      "The website and messaging finally made the offer feel premium without making it confusing for customers.",
    name: "Sara Malik",
    role: "Retail Founder",
    profileUrl: "#"
  }
];

export const contactMethods = [
  { label: "www.rubrixcode.com", icon: Globe2 },
  { label: "support@rubrixcode.com", icon: Mail },
  { label: "Islamabad, Pakistan", icon: MapPin }
];

export const contactServices = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Blockchain",
  "Social Media Management",
  "Full Package"
];

export const contactBudgets = [
  "Exploring options",
  "Under $1k",
  "$1k - $3k",
  "$3k - $7k",
  "$7k+"
];

export const contactTimelines = [
  "As soon as possible",
  "This month",
  "1-3 months",
  "Still validating"
];
