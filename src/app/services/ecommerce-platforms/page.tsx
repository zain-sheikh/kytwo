import type { Metadata } from "next";

import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ServiceHero from "@/components/ServiceHero";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceCTA from "@/components/ServiceCTA";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CTABar from "@/components/CTABar";

export const metadata: Metadata = {
  title: "Ecommerce Platform Services for brands",
  description:
    "Ecommerce platform services for Shopify, WooCommerce, custom platforms, and marketplaces, covering strategy, builds, migrations, and optimization.",
  keywords: [
    "ecommerce platforms",
    "shopify development services",
    "woocommerce development services",
    "custom ecommerce platform",
    "marketplace development",
    "ecommerce design services",
    "ecommerce platform migration",
  ],
  openGraph: {
    title: "Ecommerce Platform Services",
    description:
      "Shopify, WooCommerce, custom ecommerce platforms, and marketplace development for growth-focused brands.",
    url: "/services/ecommerce-platforms",
    type: "website",
  },
  alternates: {
    canonical: "/services/ecommerce-platforms",
  },
};

const platformFeatures = [
  {
    title: "Shopify Development",
    description:
      "Custom Shopify themes, Shopify Plus builds, app integrations, and conversion optimization for growth-focused DTC brands.",
    href: "/services/shopify-development",
  },
  {
    title: "WooCommerce Development",
    description:
      "High-performance WooCommerce stores with custom themes, plugins, and payment integrations for WordPress ecosystems.",
    href: "/services/woocommerce-development",
  },
  {
    title: "Custom Ecommerce Platforms",
    description:
      "Headless, API-first ecommerce platforms tailored to complex catalogs, B2B logic, and enterprise integrations.",
    href: "/services/custom-ecommerce-platform",
  },
  {
    title: "Marketplace Development",
    description:
      "Multi-vendor marketplaces with vendor onboarding, payouts, commissions, and scalable search and discovery.",
    href: "/services/marketplace-development",
  },
  {
    title: "Ecommerce Design",
    description:
      "Conversion-focused ecommerce UI/UX, product page design, and checkout optimization that lift revenue across platforms.",
    href: "/services/ecommerce-design",
  },
  {
    title: "Platform Migrations",
    description:
      "Safe migrations between Magento, Shopify, WooCommerce, and custom stacks with SEO and data integrity in mind.",
    href: "/services/platform-migration",
  },
];

const platformOfferings = [
  {
    title: "Platform Strategy & Selection",
    items: [
      "Evaluate Shopify, WooCommerce, headless, and custom options",
      "Total cost of ownership and migration planning",
      "Architecture recommendations for current and future scale",
      "Roadmaps for phased replatforming",
      "Risk assessment and rollout planning",
    ],
  },
  {
    title: "Design & Build",
    items: [
      "Platform-specific theme and UI/UX design",
      "Custom app and plugin development",
      "Checkout and cart optimization",
      "Performance tuning and Core Web Vitals",
      "SEO-friendly builds with structured data",
    ],
  },
  {
    title: "Integrations & Data",
    items: [
      "ERP, CRM, PIM, OMS, and analytics integrations",
      "Payment, tax, and shipping providers",
      "Inventory and pricing synchronization",
      "Data migration from legacy platforms",
      "Monitoring, logging, and alerts",
    ],
  },
  {
    title: "Ongoing Optimization",
    items: [
      "Experimentation and A/B testing",
      "UX audits and CRO roadmaps",
      "Feature iteration based on analytics",
      "Platform upgrades and refactors",
      "Technical SEO and performance reviews",
    ],
  },
];

export default function EcommercePlatformsPage() {
  return (
    <>
      <ServiceHero
        title="ECOMMERCE PLATFORMS WE"
        highlightText="DESIGN, BUILD & SCALE"
        subtitle="From Shopify and WooCommerce to custom platforms and marketplaces, we shape the stack around your growth goals."
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce platforms services"
      />

      <WhoWeHelpSection
        subtitle="Best for brands choosing, building, or replatforming their ecommerce stack with performance and SEO in mind."
        items={[
          "DTC brands launching or replatforming Shopify/WooCommerce stores",
          "Teams migrating from Magento/legacy stacks without risking SEO",
          "B2B catalogs that need custom pricing, accounts, and workflows",
          "Multi-region or multi-brand rollouts that require localized storefronts",
          "Growth teams focused on faster performance, CRO, and SEO wins",
        ]}
      />

      <ServiceOverview
        title="PLATFORMS WE"
        highlightText="SPECIALIZE IN"
        features={platformFeatures}
        showArrow={true}
      />

      <CTABar message="Not sure which ecommerce platform is right for your stack? Let’s map it out together." />

      <ServiceOfferings
        title="HOW WE APPROACH"
        highlightText="ECOMMERCE PLATFORMS"
        offerings={platformOfferings}
      />

      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion="How do I choose between Shopify, WooCommerce, and a custom ecommerce platform?"
          featuredAnswer="It comes down to your catalog complexity, integrations, and growth goals. Shopify is fast to launch and strong for DTC; WooCommerce is ideal in WordPress ecosystems; custom/headless platforms fit complex B2B rules, multi-storefront needs, or deep ERP/OMS integrations."
          faqItems={[
            {
              q: "Do you build on Shopify and Shopify Plus?",
              a: "Yes. We build custom themes, Shopify Plus storefronts, app integrations, and performance/CRO improvements with a focus on conversion and maintainability.",
            },
            {
              q: "Do you develop WooCommerce stores and custom plugins?",
              a: "Yes. We build and optimize WooCommerce stores, develop custom WordPress/WooCommerce functionality, and integrate payments, shipping, tax, and third-party tools.",
            },
            {
              q: "When does headless or custom commerce make sense?",
              a: "Headless or custom commerce is a good fit when you need advanced catalog logic, B2B pricing, multi-region storefronts, unique checkout flows, or enterprise integrations that off-the-shelf platforms can’t support cleanly.",
            },
            {
              q: "Can you migrate from Magento, Shopify, or WooCommerce?",
              a: "Yes. We plan migrations end-to-end: data mapping for products/customers/orders, redirect strategy, SEO protection, QA, and phased cutovers to minimize downtime.",
            },
            {
              q: "Will you preserve SEO during a platform migration?",
              a: "Yes. We prioritize SEO-safe replatforming: maintain URL structures where possible, implement 301 redirects, validate canonical tags, and ensure structured data is correct on PDPs/PLPs.",
            },
            {
              q: "Do you optimize performance and Core Web Vitals?",
              a: "Yes. We improve LCP/INP/CLS through code and asset optimization, caching/CDN strategy, image handling, and platform-specific best practices.",
            },
            {
              q: "How long does it take to launch a new ecommerce platform?",
              a: "Timelines depend on scope and integrations. A focused Shopify/WooCommerce build can take 4–8 weeks; migrations and custom/headless programs typically run 10–20+ weeks.",
            },
          ]}
        />
      </section>

      <ServiceCTA message="Need help choosing between Shopify, WooCommerce, or a custom platform? Let’s map the right path for your ecommerce stack." />

      <CTA />
    </>
  );
}
