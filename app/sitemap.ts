import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
    "/refund-policy"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-05-05"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.95 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const serviceRoutes = servicePages.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date("2026-05-05"),
    changeFrequency: "monthly",
    priority: 0.9
  })) satisfies MetadataRoute.Sitemap;

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date("2026-05-05"),
    changeFrequency: "monthly",
    priority: 0.78
  })) satisfies MetadataRoute.Sitemap;

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: post.priority === "High" ? 0.9 : 0.75
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
