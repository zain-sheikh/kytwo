export type BlogCategory =
  | "All"
  | "Insights"
  | "Development"
  | "Design"
  | "SEO"
  | "News";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  dateLabel: string; // e.g. "16 Apr"
  readingTime: string; // e.g. "8 min read"
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ecommerce-platform-migration-checklist",
    title: "Ecommerce platform migration checklist (SEO-safe)",
    excerpt:
      "A practical checklist to reduce risk during replatforming: redirects, SEO parity, data validation, and post-launch monitoring.",
    category: "SEO",
    dateLabel: "Apr 2026",
    readingTime: "8 min read",
  },
  {
    slug: "woocommerce-to-shopify-migration",
    title: "WooCommerce to Shopify migration: what to migrate (and what breaks)",
    excerpt:
      "A practical migration guide covering data scope, redirects, subscriptions, integrations, and the highest-risk QA checks.",
    category: "Development",
    dateLabel: "Apr 2026",
    readingTime: "7 min read",
  },
  {
    slug: "ecommerce-data-migration-validation",
    title: "Ecommerce data migration validation: how to QA a clean cutover",
    excerpt:
      "How to validate ecommerce data migration with reconciliation, edge-case testing, and sampling—so the new store launches with trustworthy catalog and history.",
    category: "Insights",
    dateLabel: "Apr 2026",
    readingTime: "6 min read",
  },
  {
    slug: "ecommerce-seo-basics",
    title: "Ecommerce SEO basics for product and category pages",
    excerpt:
      "A simple framework for ecommerce SEO: page templates, internal links, structured data, and indexation guardrails for catalogs.",
    category: "SEO",
    dateLabel: "Apr 2026",
    readingTime: "6 min read",
  },
  {
    slug: "ecommerce-cro-quick-wins",
    title: "CRO quick wins: a practical checklist for conversion lift",
    excerpt:
      "A prioritized checklist for improving conversion on product pages, category pages, cart, and checkout—focused on clarity, trust, and speed.",
    category: "Design",
    dateLabel: "Apr 2026",
    readingTime: "6 min read",
  },
  {
    slug: "shopify-performance-core-web-vitals",
    title: "Shopify performance: what actually improves Core Web Vitals",
    excerpt:
      "A short, prioritized list of changes that tend to move LCP/INP/CLS on Shopify themes (and what usually doesn’t).",
    category: "Development",
    dateLabel: "Apr 2026",
    readingTime: "5 min read",
  },
];

