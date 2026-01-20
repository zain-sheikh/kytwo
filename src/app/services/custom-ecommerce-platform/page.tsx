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
  title: "Custom Ecommerce Platform Development | Scalable Commerce Solutions",
  description:
    "Custom ecommerce platform development tailored to complex business needs. Multi-storefront, headless commerce, integrations, and performance engineering to scale revenue.",
  keywords: [
    "custom ecommerce platform development",
    "headless ecommerce",
    "multi storefront ecommerce",
    "enterprise ecommerce solutions",
    "custom commerce architecture",
    "api first commerce",
    "b2b ecommerce platform",
    "marketplace ready platform",
    "ecommerce integrations",
    "high performance ecommerce",
  ],
  openGraph: {
    title:
      "Custom Ecommerce Platform Development | Scalable Commerce Solutions",
    description:
      "Build a custom ecommerce platform with headless architecture, robust integrations, and performance engineering to scale revenue.",
    url: "/services/custom-ecommerce-platform",
    type: "website",
  },
  alternates: {
    canonical: "/services/custom-ecommerce-platform",
  },
};

export default function CustomEcommercePlatformPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Ecommerce Platform Development",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Custom ecommerce platform development including headless commerce, API-first architecture, integrations, and scalable performance for complex catalogs and multi-storefronts.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Headless & API-First Architecture",
      description:
        "Decouple frontend and backend to deliver blazing-fast storefronts on web and mobile, powered by flexible APIs and modern frameworks.",
    },
    {
      title: "Multi-Storefront & Internationalization",
      description:
        "Manage multiple brands, regions, currencies, and languages from a single platform with localized experiences that boost conversion.",
    },
    {
      title: "Complex Catalog & Pricing Logic",
      description:
        "Handle large catalogs, variant-heavy SKUs, tiered pricing, B2B rules, and negotiated contracts without performance bottlenecks.",
    },
    {
      title: "Enterprise-Grade Integrations",
      description:
        "Integrate with ERPs, CRMs, OMS, PIM, WMS, payments, tax, and shipping to keep operations synchronized and automated.",
    },
    {
      title: "Performance & SEO Engineering",
      description:
        "Core Web Vitals optimization, structured data, edge caching, and CDN strategy to improve search rankings and conversion rates.",
    },
    {
      title: "Security & Compliance",
      description:
        "Hardened authentication, PCI-ready payment flows, audit logging, and compliance-minded architecture for enterprise needs.",
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
        title="CUSTOM ECOMMERCE PLATFORM DEVELOPMENT FOR"
        highlightText="SCALABLE REVENUE"
        subtitle="Headless, API-first commerce engineered for performance and growth"
        imageSrc="/3d-fire.png"
        imageAlt="Custom ecommerce platform development"
      />

      <WhoWeHelpSection
        subtitle="Best for businesses that have outgrown off-the-shelf platforms and need custom commerce architecture."
        items={[
          "Brands with complex catalogs, variants, or B2B pricing and account rules",
          "Multi-storefront or multi-region businesses needing localization at scale",
          "Enterprises requiring deep ERP/CRM/OMS/PIM integrations and automation",
          "Teams that demand headless flexibility across web, app, and marketplaces",
          "Revenue-critical stores where performance, SEO, security, and compliance matter",
        ]}
      />

      <ServiceOverview
        title="WHY BUILD A"
        highlightText="CUSTOM ECOMMERCE PLATFORM"
        features={features}
      />

      <CTABar message="Outgrowing Shopify or WooCommerce and thinking about a custom commerce platform?" />

      <ProcessSection
        title="OUR CUSTOM COMMERCE"
        highlightText="DELIVERY PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Discovery & Architecture",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "Solution Design & Data Modeling",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "Headless Frontend Build",
            gradient: "from-teal-400 to-green-500",
            mt: "100",
          },
          {
            label: "STEP #4",
            title: "Integrations & Automation",
            gradient: "from-green-400 to-emerald-600",
            mt: "120",
          },
          {
            label: "STEP #5",
            title: "Performance, Security & QA",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Launch, Training & Support",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="CUSTOM ECOMMERCE"
        highlightText="PLATFORM SOLUTIONS"
        offerings={[
          {
            title: "Architecture & Engineering",
            items: [
              "Headless and composable commerce architecture",
              "API-first development with GraphQL/REST",
              "Microservices and event-driven patterns",
              "Scalable hosting, CDN, and edge caching strategy",
              "CI/CD, observability, and SRE practices",
            ],
          },
          {
            title: "Integrations & Data Flow",
            items: [
              "ERP, CRM, PIM, OMS, WMS integrations",
              "Payment, tax, and shipping providers",
              "Inventory, pricing, and catalog sync",
              "Marketing stack (ESP, CDP, analytics)",
              "Data pipelines and reporting dashboards",
            ],
          },
          {
            title: "Storefront & Experience",
            items: [
              "Headless web and mobile storefronts",
              "Personalization and merchandising tools",
              "Advanced search and filtering",
              "Multi-currency, multi-language experiences",
              "A/B testing and experimentation setup",
            ],
          },
          {
            title: "Reliability & Compliance",
            items: [
              "Security hardening and role-based access",
              "PCI-aware payment flows",
              "Audit logging and monitoring",
              "Disaster recovery and backup strategy",
              "Performance tuning for Core Web Vitals",
            ],
          },
        ]}
      />

      <ServiceCTA message="Ready to build a custom ecommerce platform that scales?" />

      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion="When is a custom ecommerce platform the right choice?"
          featuredAnswer="When off-the-shelf platforms limit your growth: complex catalogs, multi-storefront needs, B2B pricing rules, or deep integrations. A custom platform gives you performance, flexibility, and control to scale revenue."
          faqItems={[
            {
              q: "Do you support headless architectures?",
              a: "Yes. We build headless, API-first solutions that power fast web and mobile experiences using modern frameworks and composable services.",
            },
            {
              q: "Can you integrate with our ERP/CRM/OMS?",
              a: "Absolutely. We design robust data flows and integrations with ERP, CRM, OMS, PIM, WMS, payments, tax, and shipping providers to keep operations in sync.",
            },
            {
              q: "How do you ensure performance and SEO?",
              a: "We engineer for Core Web Vitals, use CDN/edge caching, optimize media, implement structured data, and monitor performance continuously.",
            },
            {
              q: "Do you handle security and compliance?",
              a: "Yes. We implement secure authentication, role-based access, audit logging, and PCI-aware payment flows, aligned with your compliance requirements.",
            },
            {
              q: "What’s the typical timeline?",
              a: "Timelines depend on scope. Architecture and MVP can run 8-12 weeks; full rollouts with complex integrations typically run 12-20+ weeks. We provide a tailored plan after discovery.",
            },
            {
              q: "Can you migrate from our current platform?",
              a: "Yes. We plan data migration (products, customers, orders), redirect strategies, and phased cutovers to minimize downtime and protect SEO.",
            },
            {
              q: "What does a custom platform cost?",
              a: "Pricing depends on integrations, feature depth, and performance targets. Typical engagements range from $30k+ for focused builds to enterprise programs with phased delivery. We’ll scope and estimate after discovery.",
            },
          ]}
        />
      </section>

      <CTA />
    </>
  );
}
