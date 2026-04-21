import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import CTABar from "@/components/CTABar";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceOverview from "@/components/ServiceOverview";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import { buildFaqSchema } from "@/lib/faqSchema";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Shopify Migration Services - SEO Safe,Zero Downtime",
  description:
    "Shopify migration services for SEO-safe ecommerce replatforming. Migrate to or from Shopify with complete data migration, redirects, and minimal downtime.",
  keywords: [
    "shopify migration services",
    "shopify migration agency",
    "shopify migration",
    "shopify migration services",
    "shopify migration agency",
    "shopify migration",
  ],
  alternates: {
    canonical: "/services/platform-migration/shopify-migration",
  },
  openGraph: {
    title: "Shopify Migration Services",
    description:
      "Migrate to Shopify or Shopify Plus with SEO protection, data migration, and safe cutovers.",
    url: `${siteUrl}/services/platform-migration/shopify-migration`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo — Shopify Migration Services",
      },
    ],
  },
};

export default function ShopifyMigrationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const featuredQuestion =
    "Can you migrate to Shopify Plus without losing SEO?";
  const featuredAnswer =
    "Yes. We plan Shopify and Shopify Plus migrations to preserve organic rankings: URL mapping, 301 redirects, canonical tags, structured data checks, and post-launch monitoring—alongside full ecommerce data migration.";

  const faqItems = [
    {
      q: "What platforms can you migrate to Shopify from?",
      a: "We migrate to Shopify from WooCommerce, Magento, BigCommerce, and custom platforms. We map data and rebuild key integrations so the store runs cleanly after cutover.",
    },
    {
      q: "What's included in Shopify migration services?",
      a: "Discovery, data mapping, test migration, storefront build, integration setup, redirect implementation, QA of checkout and key flows, launch planning, and post-launch monitoring.",
    },
    {
      q: "Do you migrate customers and order history to Shopify?",
      a: "Yes. We migrate products, customers, and order history where feasible and aligned with your operational needs, plus reviews/content and custom fields where applicable.",
    },
    {
      q: "How do you protect SEO during a Shopify migration?",
      a: "We create a URL map, implement and test 301 redirects, validate canonicals and structured data, ensure content parity for key pages, and monitor Search Console and analytics after launch.",
    },
    {
      q: "How long does a Shopify migration take?",
      a: "Most Shopify migrations run 6–12 weeks depending on catalog size, theme scope, integrations, and data complexity. Shopify Plus programs with custom checkout or complex workflows can run 10–16+ weeks.",
    },
    {
      q: "Can you migrate to Shopify Plus and keep international SEO (hreflang, markets)?",
      a: "Yes. We plan Shopify Markets and international storefront setup early: URL structure, currency/language strategy, hreflang rules (where applicable), canonical logic, and country-specific content parity. The goal is to preserve rankings while simplifying operations.",
    },
    {
      q: "What data do you migrate to Shopify?",
      a: "Typically: products/variants, collections, customers, orders (as needed), content pages/blogs, redirects, images/media, and key metadata. We also map custom fields into Shopify metafields so merchandising and SEO fields remain editable post-launch.",
    },
    {
      q: "Do you rebuild apps and integrations as part of Shopify migration services?",
      a: "Yes. Migrations fail when the store launches without operations connected. We rebuild payments, shipping, tax, analytics, email, subscriptions, reviews, and ERP/3PL/OMS links, then validate end-to-end flows in staging.",
    },
    {
      q: "What are the biggest Shopify migration risks?",
      a: "Redirect gaps, broken tracking, and mismatched product/collection templates. We mitigate by doing a test migration with reconciliation, validating SEO templates (PDP/PLP/blog), and running checkout and analytics QA before DNS cutover.",
    },
  ];

  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify Migration Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Shopify migration services including ecommerce data migration, SEO protection, URL mapping, 301 redirects, integration setup, and safe cutovers for revenue-critical stores.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Shopify-ready data migration",
      description:
        "Clean mapping for products, variants, customers, orders, media, and custom fields, validated before launch.",
    },
    {
      title: "SEO protection baked in",
      description:
        "Redirects, canonical tags, structured data parity, and post-launch monitoring to keep traffic stable.",
    },
    {
      title: "Checkout & conversion QA",
      description:
        "We validate cart and checkout flows end-to-end so revenue doesn't dip after cutover.",
    },
    {
      title: "Integration rebuilds",
      description:
        "Payments, shipping, tax, analytics, email, and ERP/3PL connections reconfigured for the new stack.",
    },
    {
      title: "Theme and UX rebuild",
      description:
        "Your existing storefront translated into a fast Shopify / Shopify Plus theme, preserving brand while improving mobile experience and Core Web Vitals.",
    },
    {
      title: "Post-launch support and monitoring",
      description:
        "We stay close after cutover: redirect/404 checks, tracking validation, and performance tuning to stabilize rankings and revenue.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Platform migration", href: "/services/platform-migration" },
          { label: "Shopify migration" },
        ]}
      />

      <ServiceHero
        title="SHOPIFY MIGRATION SERVICES FOR"
        highlightText="SEO-SAFE REPLATFORMING"
        subtitle={
          <>
            Migrate to{" "}
            <Link className="underline" href="/services/shopify-development">
              Shopify
            </Link>{" "}
            or Shopify Plus with data migration, redirects, and minimal
            downtime. If you&apos;re moving from WooCommerce, start with our{" "}
            <Link
              className="underline"
              href="/services/platform-migration/woocommerce-migration"
            >
              WooCommerce migration
            </Link>{" "}
            guide.
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="Shopify migration services"
        ctaText="MIGRATE TO SHOPIFY"
      />

      <WhoWeHelpSection
        subtitle="Best for brands moving to Shopify or Shopify Plus and needing SEO protection, reliable data, and a safe launch."
        items={[
          "Stores moving from WooCommerce, Magento, BigCommerce, or custom stacks",
          "Brands that can't risk downtime during a revenue-critical cutover",
          "SEO-dependent catalogs that need URL mapping and redirect testing",
          "Teams consolidating apps and simplifying operational overhead",
          "Plus programs needing stronger performance, workflows, or integrations",
        ]}
      />

      <ServiceOverview
        title="WHAT MAKES OUR"
        highlightText="SHOPIFY MIGRATIONS SAFER"
        features={features}
      />

      <CTABar message="Want a Shopify migration that protects SEO and revenue? We'll map out the safest path and timeline." />

      <ServiceOfferings
        title="SHOPIFY MIGRATION"
        highlightText="CHECKLIST"
        offerings={[
          {
            title: "Before migration",
            items: [
              "Data audit + integration inventory",
              "Theme scope + UX requirements",
              "URL map + redirect plan",
              "SEO baseline and tracking setup",
              "Test migration environment",
            ],
          },
          {
            title: "Launch & after",
            items: [
              "Checkout and conversion QA",
              "Redirect + canonical validation",
              "Structured data checks (PDP/PLP)",
              "Search Console monitoring + fixes",
              "Post-launch performance tuning",
            ],
          },
        ]}
      />

      <section className="container py-10 lg:py-16">
        <div className="relative z-10  rounded-[0.9rem] md:rounded-[2.5rem] text-black overflow-hidden">
          <div className="relative px-4 py-10 md:px-8 md:py-14 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-white font-semibold">
                Shopify-ready foundation
              </p>
              <h2 className="mt-3 font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05] text-white">
                Shopify migration services that don&apos;t stop at &ldquo;data
                moved&rdquo;
              </h2>
              <p className="mt-4 text-sm md:text-base text-white">
                A Shopify migration is a business systems migration. We migrate
                catalog and customers, but we also rebuild the operational stack
                (apps, workflows, tracking, fulfillment) so the store launches
                with stable revenue and clean reporting, without sacrificing
                SEO.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Data + merchandising",
                  items: [
                    "Products, variants, images, collections",
                    "Shopify metafields for custom attributes",
                    "Content pages/blogs + template parity checks",
                    "Discounts/coupons strategy (platform-dependent)",
                  ],
                },
                {
                  title: "Apps + integrations",
                  items: [
                    "Payments, shipping, tax configuration",
                    "Email/SMS, reviews/UGC, subscriptions",
                    "Analytics (GA4/pixels) continuity",
                    "ERP/3PL/OMS connections and order routing",
                  ],
                },
                {
                  title: "Shopify Plus readiness",
                  items: [
                    "Shopify Markets + international setup",
                    "B2B features and customer segmentation",
                    "Workflow automation and operational controls",
                    "Performance tuning and launch QA",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-6 md:p-7 rounded-2xl border border-border/60 shadow-sm"
                >
                  <p className="text-lg font-semibold text-black">
                    {card.title}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm md:text-base text-black">
                    {card.items.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-border/60 p-6 md:p-7">
              <p className="font-semibold">Migrating from WooCommerce?</p>
              <p className="mt-2 text-sm md:text-base text-black/80">
                If you&apos;re moving from WordPress and plugins into Shopify,
                the biggest wins come from reducing maintenance and tightening
                performance. Start with our{" "}
                <Link
                  className="underline underline-offset-4"
                  href="/services/platform-migration/woocommerce-migration"
                >
                  WooCommerce migration agency
                </Link>{" "}
                guide and we&apos;ll map the cleanest path to{" "}
                <Link
                  className="underline"
                  href="/services/shopify-development"
                >
                  Shopify / Shopify Plus
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 lg:py-16">
        <div className="rounded-[0.9rem] md:rounded-[2.5rem] bg-white border border-[#a698c54d] p-6 md:p-10 overflow-hidden relative">
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 h-64 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(152,102,242,0.45),_transparent_60%)] blur-3xl opacity-90"
            aria-hidden
          />
          <div className="relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-black font-semibold">
                SEO + launch safety
              </p>
              <h2 className="mt-3 text-black font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05]">
                Shopify Plus migration with SEO protection
              </h2>
              <p className="mt-4 text-black text-sm md:text-base">
                Shopify migrations can be SEO-safe when URL changes are planned,
                redirects are tested, and templates preserve content intent. Our
                Shopify migration agency process is built to maintain rankings
                while improving performance and conversion reliability.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Crawl + priorities",
                  body: "Identify your highest-value landing pages, PDPs/PLPs, and content routes to preserve.",
                },
                {
                  step: "2",
                  title: "URL map + redirects",
                  body: "Map old → new, handle edge cases, and test redirects at scale to avoid soft 404s.",
                },
                {
                  step: "3",
                  title: "Template parity",
                  body: "Validate meta, canonicals, structured data, and faceted navigation rules for Shopify templates.",
                },
                {
                  step: "4",
                  title: "Post-launch guardrails",
                  body: "Monitor Search Console + analytics; fix 404s, indexing shifts, and tracking gaps quickly.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-black/10 p-6"
                >
                  <p className="text-[#FDC448] font-bold text-sm">
                    STEP {s.step}
                  </p>
                  <p className="mt-2 text-black font-semibold">{s.title}</p>
                  <p className="mt-2 text-black text-sm">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-black font-semibold">
                  Common Shopify migration pitfalls
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Redirect gaps on long-tail PDPs and legacy content routes",
                    "Collection filtering creating duplicate URLs (needs rules)",
                    "App swaps changing checkout/analytics behavior",
                    "International URL structure changes without SEO planning",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-black font-semibold">
                  What we validate before cutover
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Checkout QA: cart → payment → confirmation across devices",
                    "Tracking QA: GA4, pixels, server-side events (if used)",
                    "Operational QA: fulfillment, refunds, tax, shipping rules",
                    "SEO QA: canonicals, schema, sitemaps, and redirect testing",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-base font-bold text-black border border-black px-8 py-3 transition-colors w-full md:w-auto"
              >
                Scope my Shopify migration
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <ServiceCTA message="Planning Shopify migration services? Let's scope it and protect rankings from day one." />

      <RelatedServices
        services={[
          {
            title: "Platform Migration",
            description: "See our full migration approach across platforms.",
            href: "/services/platform-migration",
          },
          {
            title: "Shopify Development",
            description:
              "Theme, apps, and performance improvements post-migration.",
            href: "/services/shopify-development",
          },
          {
            title: "Ecommerce Design",
            description:
              "Refresh UX during replatforming for better conversion.",
            href: "/services/ecommerce-design",
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
