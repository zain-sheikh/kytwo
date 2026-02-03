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
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildFaqSchema } from "@/lib/faqSchema";
import RelatedServices from "@/components/RelatedServices";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Marketplace Development for Multi-Vendor Commerce",
  description:
    "Marketplace development for multi-vendor commerce, including vendor onboarding, portals, payouts, commissions, and secure transactions.",
  keywords: [
    "marketplace development services",
    "multi vendor marketplace",
    "marketplace platform development",
    "vendor onboarding",
    "marketplace payouts",
    "commission management",
    "b2b marketplace",
    "b2c marketplace",
    "headless marketplace",
    "marketplace app development",
  ],
  openGraph: {
    title: "Marketplace Development Services | Multi-Vendor Commerce Platforms",
    description:
      "Build a scalable multi-vendor marketplace with vendor onboarding, payouts, commissions, and secure transactions.",
    url: `${siteUrl}/services/marketplace-development`,
    type: "website",
  },
  alternates: {
    canonical: "/services/marketplace-development",
  },
};

export default function MarketplaceDevelopmentPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
  const featuredQuestion = "What makes a successful marketplace build?";
  const featuredAnswer =
    "Frictionless vendor onboarding, clear commission and payout flows, fast search and discovery, and reliable operations. We design for vendor trust, buyer confidence, and scalable performance.";
  const faqItems = [
    {
      q: "Can you integrate with payment providers for split payouts?",
      a: "Yes. We integrate with providers that support split payments, commissions, and scheduled payouts, along with reconciliation reporting for vendors.",
    },
    {
      q: "Do you support KYC/AML and compliance needs?",
      a: "We design onboarding flows and data handling aligned with KYC/AML requirements and can integrate verification partners to streamline compliance.",
    },
    {
      q: "How do you handle disputes and refunds?",
      a: "We implement structured dispute flows, messaging, and refund handling with clear SLAs, ensuring transparency for buyers and vendors.",
    },
    {
      q: "Is the marketplace mobile-friendly?",
      a: "Yes. We build mobile-first experiences for both buyers and vendors, ensuring speed, clarity, and trust on every device.",
    },
    {
      q: "Can you migrate an existing marketplace?",
      a: "We handle data migration (vendors, products, orders), redirect planning, and phased rollouts to minimize downtime and protect SEO.",
    },
    {
      q: "How long does it take to launch?",
      a: "Timelines vary by scope. Core marketplace builds can take 10-16 weeks; complex integrations and custom features may extend timelines. We provide a plan after discovery.",
    },
    {
      q: "What does marketplace development cost?",
      a: "Costs depend on features, integrations, and scale. Focused builds start around $30k; enterprise-grade marketplaces with complex flows are scoped after discovery.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketplace Development",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Marketplace development services including vendor onboarding, payouts, commission models, search, and secure multi-vendor transactions.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Multi-Vendor Architecture",
      description:
        "Design and build scalable multi-vendor platforms with vendor portals, product management, and operational controls.",
    },
    {
      title: "Flexible Commissions & Payouts",
      description:
        "Support commissions, fees, and revenue splits with automated payouts and detailed reconciliation for vendors.",
    },
    {
      title: "Vendor Onboarding & KYC",
      description:
        "Streamlined vendor onboarding flows with verification, KYC/AML checks, and compliance-ready data handling.",
    },
    {
      title: "Advanced Search & Discovery",
      description:
        "Faceted search, relevance tuning, and personalized recommendations to improve product discovery and conversion.",
    },
    {
      title: "Order, Dispute & Support Flows",
      description:
        "Full order lifecycle handling: returns, disputes, messaging, and SLAs to keep vendors and buyers aligned.",
    },
    {
      title: "Security & Compliance",
      description:
        "Secure identity, role-based access, PCI-aware payments, audit logging, and anti-fraud measures for marketplace safety.",
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

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Marketplace development" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceHero
        title="MARKETPLACE DEVELOPMENT FOR"
        highlightText="MULTI-VENDOR GROWTH"
        subtitle="Multi-vendor platforms with onboarding, payouts, and scalable search"
        imageSrc="/3d-fire.png"
        imageAlt="Marketplace development services"
      />

      <WhoWeHelpSection
        subtitle="Best for marketplace teams building vendor onboarding, payouts, trust, and scalable discovery."
        items={[
          "Founders launching new multi-vendor marketplaces with clear commission models",
          "Existing marketplaces scaling vendor onboarding, payouts, and compliance",
          "B2B/B2C marketplaces needing KYC/AML-ready flows and dispute handling",
          "Cross-border marketplaces requiring multi-currency, tax, and localization",
          "Operators focused on better search, discovery, and conversion for buyers",
        ]}
      />

      <ServiceOverview
        title="WHY BUILD YOUR"
        highlightText="MARKETPLACE WITH US"
        features={features}
      />

      <CTABar message="Scoping a new marketplace or scaling an existing one? Let’s design the right architecture." />

      <ProcessSection
        title="OUR MARKETPLACE"
        highlightText="DELIVERY PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Discovery & Platform Blueprint",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "Data Model & Vendor Flows",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "Frontend & Vendor Portal",
            gradient: "from-teal-400 to-green-500",
            mt: "100",
          },
          {
            label: "STEP #4",
            title: "Payments, Payouts & Compliance",
            gradient: "from-green-400 to-emerald-600",
            mt: "120",
          },
          {
            label: "STEP #5",
            title: "Search, Discovery & QA",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Launch, Support & Growth",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="MARKETPLACE"
        highlightText="CAPABILITIES"
        offerings={[
          {
            title: "Platform Architecture",
            items: [
              "Multi-vendor, multi-storefront architecture",
              "Vendor onboarding and verification flows",
              "Catalog, pricing, and inventory management",
              "Role-based access and permissions",
              "API-first and headless-friendly design",
            ],
          },
          {
            title: "Payments & Payouts",
            items: [
              "Commission and fee models",
              "Automated vendor payouts and reconciliation",
              "Tax, shipping, and invoicing integration",
              "Refunds, disputes, and escrow flows",
              "Support for split payments and compliance",
            ],
          },
          {
            title: "Search, Discovery & UX",
            items: [
              "Faceted search and relevance tuning",
              "Personalized recommendations",
              "Ratings, reviews, and trust signals",
              "Mobile-first vendor and buyer experiences",
              "Analytics and A/B testing setup",
            ],
          },
          {
            title: "Operations & Compliance",
            items: [
              "KYC/AML-ready vendor onboarding",
              "Fraud prevention and audit trails",
              "Performance and SEO optimization",
              "Monitoring, alerting, and SLAs",
              "Scalable hosting and DR strategy",
            ],
          },
        ]}
      />

      <ServiceCTA message="Ready to launch or scale your multi-vendor marketplace?" />
      <RelatedServices
        services={[
          {
            title: "Custom Ecommerce Platform",
            description:
              "Architect the underlying commerce engine that powers complex marketplaces.",
            href: "/services/custom-ecommerce-platform",
          },
          {
            title: "Ecommerce Platforms",
            description:
              "See how marketplaces fit into your broader ecommerce platform strategy.",
            href: "/services/ecommerce-platforms",
          },
          {
            title: "Ecommerce Solutions",
            description:
              "Add analytics, CRO, and operational tooling on top of your marketplace.",
            href: "/services/ecommerce-solutions",
          },
        ]}
      />
      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion={featuredQuestion}
          featuredAnswer={featuredAnswer}
          faqItems={faqItems}
        />
      </section>

      <CTA />
    </>
  );
}
