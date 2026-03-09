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
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Ecommerce Migration Services & Platform Migration Agency",
  description:
    "Ecommerce website migration services for Shopify, WooCommerce and custom platforms. SEO-safe ecommerce platform migration with data transfer and zero downtime.",
  keywords: [
    "ecommerce platform migration",
    "shopify migration services",
    "woocommerce migration",
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
    "ecommerce migration services",
    "ecommerce migration service",
    "ecommerce website migration service",
    "ecommerce migration company",
    "ecommerce data migration services",
    "ecommerce platform migration services",
    "woocommerce migration services",
    "store migration services",
  ],
  openGraph: {
    title: "Ecommerce Migration Services & Platform Migration Agency",
    description:
      "Expert ecommerce migration services between Shopify, WooCommerce,  and custom platforms with SEO protection and zero downtime.",
    url: `${siteUrl}/services/platform-migration`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo — Platform Migration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/services/platform-migration",
  },
};

export default function PlatformMigrationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
  const featuredQuestion =
    "How long does an ecommerce platform migration take?";
  const featuredAnswer =
    "Migration timelines depend on catalog size, data complexity, and integrations. Simple migrations can take 4-8 weeks; complex migrations with custom data and deep integrations typically take 8-16 weeks. We provide a detailed timeline after discovery.";
  const faqItems = [
    {
      q: "Can you migrate from Shopify, WooCommerce or custom platforms?",
      a: "Yes. We specialize in Shopify to WooCommerce, Shopify to custom platforms, WooCommerce to Shopify, WooCommerce to custom platforms, custom platforms to Shopify, custom platforms to WooCommerce, and other platform transitions. We handle product data, customer accounts, order history, and ensure SEO protection throughout.",
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
    {
      q: "Why work with an ecommerce platform migration agency instead of a freelancer?",
      a: "As an ecommerce migration company, we bring a full team across strategy, development, data migration, and SEO. That means clearer planning, dedicated QA, better risk management, and true accountability for your ecommerce platform migration services from discovery through post-launch support.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

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
      "Ecommerce platform migration services including data migration, SEO protection, zero-downtime cutovers, and post-migration optimization for Shopify, WooCommerce, and custom platforms.",
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

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Platform migration" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceHero
        title="ECOMMERCE PLATFORM MIGRATION SERVICES WITH"
        highlightText="DATA MIGRATION & SEO PROTECTION"
        subtitle={
          <>
            Seamless ecommerce website migrations between{" "}
            <Link className="underline" href="/services/shopify-development">
              Shopify
            </Link>
            ,{" "}
            <Link
              className="underline"
              href="/services/woocommerce-development"
            >
              WooCommerce
            </Link>
            , or{" "}
            <Link
              className="underline"
              href="/services/custom-ecommerce-platform"
            >
              custom platforms
            </Link>
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce platform migration services"
        ctaText="GET MIGRATED"
      />

      {/* Keyword intro section */}
      <section className="container py-10 lg:py-16">
        <div className="space-y-4">
          <h2 className="relative left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
            Ecommerce Migration Services With{" "}
            <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
              Zero Downtime & SEO Protection
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3 text-black">
            <div className="bg-white p-6 rounded-2xl border border-border/60">
              <h3 className="text-base font-semibold mb-4 border-b border-border/60 pb-4">
                Complete Ecommerce Website Migration
              </h3>
              <p>
                Our ecommerce migration services help businesses move their
                online stores between platforms like Shopify, WooCommerce and
                custom platforms without losing SEO rankings or customer data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border/60">
              <h3 className="text-base font-semibold mb-4 border-b border-border/60 pb-4">
                Secure Ecommerce Data Migration
              </h3>
              <p>
                We handle complete ecommerce website migration including product
                catalogs, customers, order history, images, and integrations.
                Our migration process protects your search rankings with
                structured URL mapping, 301 redirects, and technical SEO
                validation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border/60">
              <h3 className="text-base font-semibold mb-4 border-b border-border/60 pb-4">
                Platform Migration for Shopify, WooCommerce & Custom Platforms
              </h3>
              <p>
                Whether you are moving from Shopify to WooCommerce, WooCommerce
                to Shopify, or migrating from a custom ecommerce platform, our
                team ensures a smooth transition with minimal downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhoWeHelpSection
        subtitle="Best for SEO-sensitive and revenue-critical stores that need a safe, zero-drama platform migration."
        items={[
          "Stores moving between Shopify, WooCommerce, or custom stacks",
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

      <RelatedServices
        services={[
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
            title: "Custom Ecommerce Platform",
            description:
              "Headless, API-first ecommerce platforms tailored to complex catalogs, B2B logic, and enterprise integrations.",
            href: "/services/custom-ecommerce-platform",
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
