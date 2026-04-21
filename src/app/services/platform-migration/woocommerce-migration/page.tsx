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
  title: "WooCommerce Migration Services - SEO Safe,Zero Downtime",
  description:
    "WooCommerce migration services for SEO-safe ecommerce migrations. Move to or from WooCommerce with complete data migration, redirects, and minimal downtime.",
  keywords: [
    "woocommerce migration services",
    "woocommerce migration agency",
    "woocommerce migration",
    "woocommerce migration services",
    "woocommerce migration agency",
    "woocommerce migration",
  ],
  alternates: {
    canonical: "/services/platform-migration/woocommerce-migration",
  },
  openGraph: {
    title: "WooCommerce Migration Services-SEO Safe,Zero Downtime",
    description:
      "WooCommerce migration services for SEO-safe ecommerce migrations. Move to or from WooCommerce with complete data migration, redirects, and minimal downtime.",
    url: `${siteUrl}/services/platform-migration/woocommerce-migration`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo — WooCommerce Migration Services",
      },
    ],
  },
};

export default function WooCommerceMigrationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const featuredQuestion =
    "Can you migrate WooCommerce to Shopify or to a custom platform?";
  const featuredAnswer =
    "Yes. We migrate WooCommerce stores to Shopify, Shopify Plus, and custom/headless platforms. We map products, customers, and orders; rebuild key integrations; and protect SEO with URL mapping, redirects, and structured data validation.";

  const faqItems = [
    {
      q: "What’s included in WooCommerce migration services?",
      a: "We handle discovery, data mapping, a test migration, storefront and checkout validation, integration setup (payments, shipping, tax, analytics), 301 redirects, launch planning, and post-launch monitoring.",
    },
    {
      q: "Do you migrate order history, customers, and subscriptions?",
      a: "Yes. We migrate products/variants, customers, order history, reviews, and content pages. For subscriptions and memberships, we map data and rebuild the subscription flow based on your target platform’s capabilities.",
    },
    {
      q: "Will a WooCommerce migration hurt SEO?",
      a: "Not if it’s planned correctly. We preserve URL structures where possible, create redirect maps, validate canonical tags and structured data, and run QA checks before and after launch to protect rankings.",
    },
    {
      q: "How long does a WooCommerce migration take?",
      a: "A focused WooCommerce migration can take 6–10 weeks. Complex stores with large catalogs, subscriptions, or deep ERP/3PL integrations can take 10–16+ weeks.",
    },
    {
      q: "Why hire a WooCommerce migration agency instead of using an automated plugin?",
      a: "Automated migrations often miss edge cases (variants, custom fields, subscriptions, SEO redirects, analytics, and integrations). A WooCommerce migration agency plans the full cutover, validates data, and protects SEO and revenue during launch.",
    },
    {
      q: "What data do you migrate from WooCommerce?",
      a: "Typically: products, variations, categories, tags, attributes, images/media, customers, orders, coupons, reviews, CMS pages/blogs, and key metadata. We also map custom fields and plugin-based data where possible (for example ACF, product add-ons, bundles, or custom taxonomies).",
    },
    {
      q: "Can you keep the same URLs when leaving WooCommerce?",
      a: "Sometimes. If the target platform supports a matching URL structure, we preserve it for priority pages. Where URLs must change, we build a redirect map and test it in staging so Google and customers land on the correct equivalent page after launch.",
    },
    {
      q: "Do you migrate WooCommerce SEO fields (titles, meta descriptions, schema)?",
      a: "We migrate and/or recreate SEO-critical fields: title tags, meta descriptions, headings, canonicals, robots rules, and structured data for key templates (PDP/PLP/blog). Plugin-specific data (Yoast/RankMath) is assessed during discovery and mapped where feasible.",
    },
    {
      q: "Can you migrate WooCommerce subscriptions, memberships, and accounts?",
      a: "Yes—with planning. Subscriptions/memberships are rarely a 1-click migration because logic differs between platforms. We export the underlying customer and order data, map subscription states where possible, and rebuild the subscription experience on the target platform with clear customer comms for any required re-authentication.",
    },
    {
      q: "What’s the biggest risk in WooCommerce migration?",
      a: "Hidden complexity from plugins and custom fields. WooCommerce stores often rely on plugin-driven data models. We mitigate this by auditing plugins, defining sources of truth, doing a test migration with reconciliation, and validating checkout + operations before cutover.",
    },
  ];

  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WooCommerce Migration Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "WooCommerce migration services including ecommerce data migration, SEO protection, URL mapping, 301 redirects, integration setup, and zero-downtime cutovers where possible.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Complete ecommerce data migration",
      description:
        "Products, variants, customers, orders, reviews, and custom fields mapped and validated so your store launches with clean, trustworthy data.",
    },
    {
      title: "SEO-safe migration planning",
      description:
        "URL mapping, 301 redirects, canonical tags, structured data validation, and post-launch monitoring to protect rankings and traffic.",
    },
    {
      title: "Integration rebuilds",
      description:
        "Payments, shipping, tax, analytics, email, and back-office systems reconnected so operations keep running after cutover.",
    },
    {
      title: "Minimal downtime cutovers",
      description:
        "Staged launches and controlled cutovers with rollback planning to reduce risk for revenue-critical stores.",
    },
    {
      title: "Theme and UX rebuild",
      description:
        "Your WooCommerce design translated into a performant Shopify / Shopify Plus theme, preserving brand identity while improving mobile experience and page speed.",
    },
    {
      title: "Post-launch support and QA",
      description:
        "Structured testing across checkout flows, integrations, and data integrity checks after go-live, with dedicated support during the critical first weeks.",
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
          { label: "WooCommerce migration" },
        ]}
      />

      <ServiceHero
        title="WOOCOMMERCE MIGRATION AGENCY FOR"
        highlightText="SEO-SAFE REPLATFORMING"
        subtitle={
          <>
            WooCommerce migration services for stores moving to{" "}
            <Link className="underline" href="/services/shopify-development">
              Shopify
            </Link>{" "}
            or a{" "}
            <Link
              className="underline"
              href="/services/custom-ecommerce-platform"
            >
              custom platform
            </Link>
            . We migrate data, protect SEO, and keep downtime minimal.
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="WooCommerce migration services"
        ctaText="PLAN MY MIGRATION"
      />

      <WhoWeHelpSection
        subtitle="Best for stores that have outgrown WooCommerce or need a safer, faster ecommerce stack without losing SEO or history."
        items={[
          "WooCommerce stores moving to Shopify or Shopify Plus",
          "WordPress teams consolidating plugins and reducing maintenance overhead",
          "Revenue-critical stores needing careful launch planning and minimal downtime",
          "SEO-dependent catalogs that need redirect mapping and structured data parity",
          "Stores with subscriptions, custom fields, or complex integrations",
        ]}
      />

      <ServiceOverview
        title="WHY WORK WITH A"
        highlightText="WOOCOMMERCE MIGRATION AGENCY"
        features={features}
      />

      <CTABar message="Migrating from WooCommerce and worried about SEO or downtime? We’ll map it out and de-risk the cutover." />

      <ServiceOfferings
        title="WOOCOMMERCE MIGRATION"
        highlightText="SCOPE"
        offerings={[
          {
            title: "Discovery & mapping",
            items: [
              "Data audit: products, customers, orders, subscriptions, custom fields",
              "Platform decision support (Shopify, Shopify Plus, custom/headless)",
              "Integration inventory (payments, shipping, tax, email, analytics, ERP/3PL)",
              "URL mapping and redirect plan",
              "Cutover plan and timeline",
            ],
          },
          {
            title: "Migration & launch",
            items: [
              "Test migration + reconciliation",
              "Content parity checks (collections/categories, pages, blogs)",
              "Checkout and key flow QA",
              "Redirect implementation + structured data validation",
              "Launch support and post-launch monitoring",
            ],
          },
        ]}
      />

      <section className="container py-10 lg:py-16">
        <div className="relative z-10  rounded-[0.9rem] md:rounded-[2.5rem] text-black overflow-hidden">
          <div className="relative px-4 py-10 md:px-8 md:py-14 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-white font-semibold">
                What we migrate
              </p>
              <h2 className="mt-3 font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05] text-white">
                WooCommerce data migration services (not just products)
              </h2>
              <p className="mt-4 text-sm md:text-base text-white">
                A WooCommerce migration succeeds when the new store launches
                with clean data, working operations, and no SEO surprises. We
                audit your WooCommerce and WordPress setup, define sources of
                truth, then migrate what matters most to revenue and customer
                experience.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Catalog + content",
                  items: [
                    "Products, variations, attributes, categories",
                    "Media, galleries, SEO-friendly image handling",
                    "Pages, blogs, FAQs, buying guides",
                    "On-page metadata and template parity checks",
                  ],
                },
                {
                  title: "Customers + orders",
                  items: [
                    "Customer accounts and addresses",
                    "Order history (as needed for ops/support)",
                    "Coupons, gift cards (strategy varies by platform)",
                    "Reviews/UGC where feasible",
                  ],
                },
                {
                  title: "Complex WooCommerce setups",
                  items: [
                    "Subscriptions/memberships (planned rebuilds)",
                    "Plugin-driven custom fields and add-ons",
                    "Bundles, kits, custom product logic",
                    "Analytics and tracking continuity",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-6 md:p-7 rounded-2xl border border-border/60 shadow-sm"
                >
                  <p className="text-lg font-semibold">{card.title}</p>
                  <ul className="mt-4 space-y-2 text-sm md:text-base text-black/80">
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
              <p className="font-semibold">Leaving WooCommerce?</p>
              <p className="mt-2 text-sm md:text-base text-black/80">
                Most WooCommerce stores migrate to{" "}
                <Link
                  className="underline"
                  href="/services/shopify-development"
                >
                  Shopify / Shopify Plus
                </Link>{" "}
                to reduce plugin maintenance and stabilize performance, or to a{" "}
                <Link
                  href="/services/custom-ecommerce-platform"
                  className="underline underline-offset-4"
                >
                  custom ecommerce platform
                </Link>{" "}
                for deeper flexibility. If you&apos;re unsure, we’ll recommend
                the safest route based on integrations, growth targets, and SEO
                risk.
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
                SEO-safe migration plan
              </p>
              <h2 className="mt-3 text-black font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05]">
                Keep rankings during a WooCommerce migration
              </h2>
              <p className="mt-4 text-black text-sm md:text-base">
                Ecommerce website migration services should protect organic
                traffic like it protects data. We don&apos;t “fix SEO later” we
                build it into discovery, staging, and cutover so Google sees a
                clean, consistent site after launch.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Baseline + URL inventory",
                  body: "Export top landing pages, PDPs/PLPs, internal links, and crawl data to define what must not break.",
                },
                {
                  step: "2",
                  title: "Redirect map + parity",
                  body: "Preserve URL structure where possible; otherwise map old → new and validate canonicals, robots, and metadata.",
                },
                {
                  step: "3",
                  title: "Template checks",
                  body: "Validate structured data, pagination, faceted navigation rules, and key content templates in staging.",
                },
                {
                  step: "4",
                  title: "Launch monitoring",
                  body: "Post-launch checks for redirects, 404s, indexing changes, and revenue flows with rapid fixes.",
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
                <p className="text-black font-semibold ">
                  Common WooCommerce migration pitfalls
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Plugin-driven custom fields not mapped (variants, add-ons, bundles)",
                    "Redirects created but not tested at scale (soft 404s)",
                    "Duplicate content from faceted filters and URL parameters",
                    "Tracking breaks (GA4, pixels, server-side events) causing false revenue drops",
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
                  What a “safe cutover” looks like
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Staging launch with controlled access for QA and crawls",
                    "Final delta migration (new orders/customers) before DNS switch",
                    "Rollback plan and monitoring checklist for the first 72 hours",
                    "Search Console + sitemap updates and indexing guardrails",
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
                Get a WooCommerce migration plan
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <ServiceCTA message="Need WooCommerce migration services? Let’s plan a safe cutover." />

      <RelatedServices
        services={[
          {
            title: "Platform Migration",
            description: "See our full ecommerce platform migration process.",
            href: "/services/platform-migration",
          },
          {
            title: "Shopify Development",
            description: "Build and optimize Shopify stores after migration.",
            href: "/services/shopify-development",
          },
          {
            title: "Ecommerce Solutions",
            description:
              "Layer SEO, CRO, and analytics improvements post-launch.",
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
