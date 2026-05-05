import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins"
});

const title = "RubrixCode - Launch-ready digital products for startups";
const description =
  "RubrixCode helps founders turn ideas into launch-ready web, app, UI/UX, blockchain, and growth systems with a free consultation.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Digital Agency",
  title: {
    default: title,
    template: "%s | RubrixCode"
  },
  description,
  keywords: [
    "web development company",
    "digital agency Pakistan",
    "mobile app development company Pakistan",
    "blockchain development services",
    "UI UX design agency for startups",
    "affordable web development for startups"
  ],
  alternates: {
    canonical: "/"
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "64x64", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }]
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default"
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title,
    description:
      "Websites, apps, UI/UX, blockchain, and social media delivered under one roof for startup founders.",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "RubrixCode digital agency preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
