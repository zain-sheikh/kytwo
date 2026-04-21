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
  title: "Ecommerce Platform Migration Services-SEO Safe,Zero Downtime",
  description:
    "Ecommerce platform migration services for Shopify, WooCommerce, and custom platforms. Migrate without losing SEO or data with a proven migration process.",
  keywords: [
    "ecommerce platform migration services",
    "ecommerce migration agency",
    "platform migration agency",
    "shopify migration",
    "woocommerce migration",
    "ecommerce data migration",
  ],
  openGraph: {
    title: "Ecommerce Platform Migration Services (SEO-Safe, Zero Downtime)",
    description:
      "Ecommerce platform migration services for Shopify, WooCommerce, and custom platforms. Migrate without losing SEO, data, or revenue with a proven migration process.",
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
    {
      q: "Do you offer WooCommerce migration services (and act as a WooCommerce migration agency)?",
      a: "Yes. We handle WooCommerce migrations to Shopify, to custom platforms, or between WooCommerce setups. We migrate products/customers/orders, reconfigure integrations, and protect SEO with URL mapping, redirects, and structured data checks.",
    },
    {
      q: "Can you handle B2B platform migration?",
      a: "Yes. For B2B platform migration, we plan data models for accounts and roles, tiered pricing, negotiated catalogs, ERP/CRM/OMS integrations, and staged launches—so operations keep running while the new platform goes live.",
    },
    {
      q: "Do you work with UK clients?",
      a: "Yes. We work with ecommerce brands worldwide, including the UK. We plan migrations around time zones, launch windows, compliance needs, and revenue-critical periods.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ecommerce Platform Migration",
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
            Migrate your store without losing traffic, rankings, or revenue. We
            handle SEO-safe migrations between{" "}
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
            , and{" "}
            <Link
              className="underline"
              href="/services/custom-ecommerce-platform"
            >
              Custom Ecommerce Platforms
            </Link>{" "}
            with zero downtime execution.
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce platform migration services"
        ctaText="GET MIGRATED"
      />
      <section className="container py-10 lg:py-16">
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]  border border-[#a698c54d] p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start relative z-10">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.22em] uppercase text-gray-200/80 font-semibold">
                Before you migrate
              </p>
              <h2 className="font-semibold text-white !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05]">
                Most ecommerce migrations fail for one reason
              </h2>
              <p className="text-gray-200 text-sm md:text-base">
                It&apos;s not the platform. It&apos;s the migration process.
                Poor URL mapping, broken redirects, lost metadata, and
                incomplete data transfers silently kill SEO and revenue after
                launch.
              </p>
            </div>

            <div className="rounded-[1.2rem] bg-white p-6 md:p-8 border border-white/10">
              <p className="text-black font-semibold text-lg">
                What we protect during cutover
              </p>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-black">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                  <span>
                    Rankings: URL mapping, redirects, canonical + schema
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                  <span>
                    Data integrity: products, customers, orders, custom fields
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                  <span>
                    Revenue paths: PDP, cart, checkout, payments, shipping
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-base font-bold text-black border border-black px-6 py-3 transition-colors w-full"
                >
                  Book a migration call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword intro section */}
      <section className="container py-10 lg:py-16">
        <div className="relative z-10  rounded-[0.9rem] md:rounded-[2.5rem] text-black overflow-hidden">
          <div className="relative px-4 py-10 md:px-8 md:py-14 lg:px-12 lg:py-18">
            <h2 className="relative left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,4.5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[85%] max-md:mx-auto text-white">
              Ecommerce migration services with{" "}
              <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
                zero downtime & SEO protection
              </span>
            </h2>

            <div className="grid gap-4 md:gap-6 md:grid-cols-3">
              {[
                {
                  title: "Complete ecommerce website migration",
                  body: "Move stores between Shopify, WooCommerce and custom platforms without losing SEO rankings or customer data.",
                },
                {
                  title: "Secure ecommerce data migration",
                  body: "Products, customers, order history, images, and integrations—with validation, reconciliation, and launch QA.",
                },
                {
                  title: "Platform migration (Shopify, WooCommerce, custom)",
                  body: "Whether it’s Shopify ↔ WooCommerce or legacy → custom, we plan cutover for minimal downtime and stable revenue.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-6 md:p-7 rounded-2xl border border-border/60 shadow-sm"
                >
                  <h3 className="text-base font-semibold min-h-[4.5rem] md:min-h-[3.5rem] mb-4 border-b border-border/60 pb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration routes (internal links) */}
      <section className="container pb-4 lg:pb-10">
        <div className="rounded-[0.9rem] md:rounded-[2.5rem] bg-[#382550cc] border border-[#a698c54d] p-6 md:p-10 overflow-hidden relative">
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 h-64 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(253,196,72,0.25),_transparent_60%)] blur-3xl opacity-90"
            aria-hidden
          />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-gray-200/80 font-semibold">
                  Migration routes
                </p>
                <h2 className="mt-2 text-white font-semibold !text-[clamp(1.4rem,3.2vw,2.4rem)] leading-[1.1]">
                  Popular migration routes (deeper guides)
                </h2>
                <p className="mt-2 text-gray-200 text-sm md:text-base max-w-2xl">
                  If you have a specific move in mind, start here. Each guide
                  goes deeper on scope, risks, and what an SEO-safe migration
                  looks like.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white hover:bg-[#FDC448] text-sm md:text-base font-bold text-black border border-white px-6 py-3 transition-colors w-full md:w-auto"
              >
                Get a plan
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "WooCommerce migration services",
                  desc: "Scope, data mapping, redirects, and what breaks most often.",
                  href: "/services/platform-migration/woocommerce-migration",
                },
                {
                  title: "Shopify migration services",
                  desc: "SEO-safe moves to Shopify/Plus with data + integration QA.",
                  href: "/services/platform-migration/shopify-migration",
                },
                {
                  title: "B2B platform migration",
                  desc: "Accounts, roles, pricing logic, ERP/OMS integrations, staged cutovers.",
                  href: "/services/platform-migration/b2b-platform-migration",
                },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white hover:border-white transition-colors"
                >
                  <p className="text-white group-hover:text-black font-semibold text-lg">
                    {r.title}
                  </p>
                  <p className="mt-2 text-gray-200 group-hover:text-black/70 text-sm md:text-base">
                    {r.desc}
                  </p>
                  <p className="mt-4 text-gray-100 group-hover:text-black font-semibold underline underline-offset-4">
                    Read guide
                  </p>
                </Link>
              ))}
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
            mt: "120",
          },
          {
            label: "STEP #4",
            title: "Integration Setup & Configuration",
            gradient: "from-green-400 to-emerald-600",
            mt: "140",
          },
          {
            label: "STEP #5",
            title: "Phased Cutover & Launch",
            gradient: "from-lime-400 to-yellow-400",
            mt: "160",
          },
          {
            label: "STEP #6",
            title: "Post-Launch Monitoring & Optimization",
            gradient: "from-orange-400 to-red-500",
            mt: "160",
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
