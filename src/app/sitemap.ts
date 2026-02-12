import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/portfolioData";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

const staticPages: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/voucher", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/ecommerce-platforms", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/ecommerce-solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/ecommerce-design", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/custom-ecommerce-platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/marketplace-development", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/platform-migration", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/shopify-development", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/shopify-development-partner", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/woocommerce-development", changeFrequency: "monthly", priority: 0.9 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticUrls: MetadataRoute.Sitemap = staticPages.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${base}${path}` : base,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const portfolioUrls: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...portfolioUrls];
}


