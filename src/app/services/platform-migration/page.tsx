import type { Metadata } from "next";

import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceOverview from "@/components/ServiceOverview";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CTABar from "@/components/CTABar";

export const metadata: Metadata = {
  title:
    "Ecommerce Platform Migration Services | Shopify, WooCommerce, Magento Migration",
  description:
    "Expert ecommerce platform migration services. Seamless migrations between Shopify, WooCommerce, Magento, BigCommerce, and custom platforms with zero downtime and SEO protection.",
  keywords: [
    "ecommerce platform migration",
    "shopify migration services",
    "woocommerce migration",
    "magento migration",
    "bigcommerce migration",
    "platform migration services",
    "ecommerce replatforming",
    "store migration",
    "seo safe migration",
    "zero downtime migration",
    "data migration services",
    "ecommerce platform transfer",
    "shopify plus migration",
    "migration planning",
    "platform migration agency",
  ],
  openGraph: {
    title: "Ecommerce Platform Migration Services | Zero-Downtime Migrations",
    description:
      "Expert ecommerce platform migrations between Shopify, WooCommerce, Magento, and custom platforms with SEO protection and zero downtime.",
    url: "/services/platform-migration",
    type: "website",
  },
  alternates: {
    canonical: "/services/platform-migration",
  },
};

export default function PlatformMigrationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Platform Migration",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Ecommerce platform migration services including data migration, SEO protection, zero-downtime cutovers, and post-migration optimization for Shopify, WooCommerce, Magento, and custom platforms.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Zero-Downtime Migrations",
      description:
        "Plan and execute migrations with minimal disruption. Phased cutovers, parallel testing, and rollback strategies keep your store running during the transition.",
    },
    {
      title: "SEO Protection & Preservation",
      description:
        "Maintain search rankings with strategic URL mapping, 301 redirects, canonical tags, and structured data validation to protect organic traffic.",
    },
    {
      title: "Complete Data Migration",
      description:
        "Migrate products, variants, customers, orders, reviews, and custom data with validation, mapping, and reconciliation to ensure accuracy.",
    },
    {
      title: "Integration & Workflow Setup",
      description:
        "Reconfigure payment gateways, shipping providers, tax systems, ERP/CRM connections, and marketing tools on the new platform.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing of functionality, performance, checkout flows, and integrations before and after launch to ensure everything works.",
    },
    {
      title: "Post-Migration Support",
      description:
        "Monitor performance, fix issues, optimize speed, and provide training so your team can operate confidently on the new platform.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <ServiceHero
        title="ECOMMERCE PLATFORM MIGRATION WITH"
        highlightText="ZERO DOWNTIME & SEO PROTECTION"
        subtitle="Seamless migrations between Shopify, WooCommerce, Magento, and custom platforms"
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce platform migration services"
      />

      <WhoWeHelpSection
        subtitle="Best for SEO-sensitive and revenue-critical stores that need a safe, zero-drama platform migration."
        items={[
          "Stores moving between Shopify, WooCommerce, Magento, BigCommerce, or custom stacks",
          "High-traffic brands that cannot afford downtime during cutover",
          "SEO-dependent stores needing careful URL mapping and structured data preservation",
          "Teams with complex data, subscriptions, or order history that must stay intact",
          "International stores requiring multi-currency, tax, and compliance-ready setups",
        ]}
      />

      <ServiceOverview
        title="WHY CHOOSE OUR"
        highlightText="MIGRATION EXPERTISE"
        features={features}
      />

      <CTABar message="Planning a replatform and worried about SEO or downtime? We can de-risk the migration." />

      <ProcessSection
        title="OUR PLATFORM"
        highlightText="MIGRATION PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Discovery & Migration Planning",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "Data Mapping & URL Strategy",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "Test Migration & Validation",
            gradient: "from-teal-400 to-green-500",
            mt: "100",
          },
          {
            label: "STEP #4",
            title: "Integration Setup & Configuration",
            gradient: "from-green-400 to-emerald-600",
            mt: "120",
          },
          {
            label: "STEP #5",
            title: "Phased Cutover & Launch",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Post-Launch Monitoring & Optimization",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="COMPREHENSIVE MIGRATION"
        highlightText="SERVICES"
        offerings={[
          {
            title: "Pre-Migration Planning",
            items: [
              "Platform comparison and selection guidance",
              "Data audit and inventory assessment",
              "URL mapping and redirect strategy",
              "Integration dependency analysis",
              "Timeline and risk assessment",
            ],
          },
          {
            title: "Data Migration",
            items: [
              "Product catalog and variant migration",
              "Customer and order history transfer",
              "Reviews, ratings, and content migration",
              "Custom fields and metadata preservation",
              "Data validation and reconciliation",
            ],
          },
          {
            title: "SEO & Performance Protection",
            items: [
              "301 redirect implementation and testing",
              "Canonical tags and structured data setup",
              "Sitemap generation and submission",
              "Core Web Vitals optimization",
              "Search console monitoring and fixes",
            ],
          },
          {
            title: "Integration & Configuration",
            items: [
              "Payment gateway reconfiguration",
              "Shipping and tax provider setup",
              "ERP, CRM, and OMS reconnection",
              "Email marketing and analytics integration",
              "Third-party app and plugin migration",
            ],
          },
        ]}
      />

      <ServiceCTA message="Ready to migrate to a better ecommerce platform? Let's plan a seamless transition." />

      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion="How long does an ecommerce platform migration take?"
          featuredAnswer="Migration timelines depend on catalog size, data complexity, and integrations. Simple migrations can take 4-8 weeks; complex migrations with custom data and deep integrations typically take 8-16 weeks. We provide a detailed timeline after discovery."
          faqItems={[
            {
              q: "Can you migrate from Magento to Shopify or WooCommerce?",
              a: "Yes. We specialize in Magento to Shopify, Magento to WooCommerce, and other platform transitions. We handle product data, customer accounts, order history, and ensure SEO protection throughout.",
            },
            {
              q: "Will my SEO rankings be affected during migration?",
              a: "We prioritize SEO protection. We implement 301 redirects, preserve URL structures where possible, set up canonical tags, validate structured data, and monitor search performance to minimize ranking impact.",
            },
            {
              q: "Can you migrate without downtime?",
              a: "Yes. We use phased cutovers, parallel testing environments, and strategic launch windows to minimize downtime. Most migrations have minimal or zero downtime during the transition.",
            },
            {
              q: "What data can you migrate?",
              a: "We migrate products, variants, SKUs, customers, orders, reviews, ratings, categories, content pages, blog posts, and custom fields. We also handle product images, media, and metadata.",
            },
            {
              q: "Do you handle payment and shipping integrations?",
              a: "Yes. We reconfigure payment gateways (Stripe, PayPal, etc.), shipping providers, tax systems, and ensure all integrations work correctly on the new platform.",
            },
            {
              q: "What happens to my existing URLs?",
              a: "We create a comprehensive URL mapping strategy. Where possible, we preserve URLs; when changes are needed, we implement 301 redirects to maintain SEO value and user experience.",
            },
            {
              q: "Do you provide post-migration support?",
              a: "Yes. We offer post-launch monitoring, bug fixes, performance optimization, team training, and ongoing support to ensure a smooth transition and successful operation.",
            },
            {
              q: "How much does platform migration cost?",
              a: "Pricing depends on catalog size, data complexity, integrations, and platform complexity. Simple migrations start around $5k-$10k; complex enterprise migrations range from $15k-$50k+. We provide detailed estimates after discovery.",
            },
          ]}
        />
      </section>

      <CTA />
    </>
  );
}
