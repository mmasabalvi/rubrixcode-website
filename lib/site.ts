export const siteConfig = {
  name: "RubrixCode",
  url: "https://rubrixcode.netlify.app/",
  email: "support@rubrixcode.com",
  location: "Islamabad, Pakistan",
  logo: "/assets/SVG/Asset 26.svg",
  icon: "/favicon.svg",
  ogImage: "/opengraph-image",
  description:
    "RubrixCode helps founders turn ideas into launch-ready web, app, UI/UX, blockchain, and growth systems with one digital product team."
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
