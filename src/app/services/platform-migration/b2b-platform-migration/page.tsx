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
  title: "B2B Platform Migration - Accounts, Pricing, Integrations",
  keywords: [
    "b2b platform migration services",
    "b2b platform migration agency",
    "b2b platform migration",
    "b2b platform migration services",
    "b2b platform migration agency",
    "b2b platform migration",
  ],
  description:
    "B2B platform migration services for ecommerce teams. Migrate accounts, roles, pricing rules, and ERP/CRM/OMS integrations with zero downtime and SEO protection.",
  alternates: {
    canonical: "/services/platform-migration/b2b-platform-migration",
  },
  openGraph: {
    title: "B2B Platform Migration Services",
    description:
      "Migrate B2B commerce platforms with account logic, pricing, and integrations handled safely.",
    url: `${siteUrl}/services/platform-migration/b2b-platform-migration`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo — B2B Platform Migration",
      },
    ],
  },
};

export default function B2BPlatformMigrationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const featuredQuestion =
    "What's different about B2B platform migration vs. DTC migration?";
  const featuredAnswer =
    "B2B platform migration typically involves account structures, roles, contract pricing, purchase orders, approvals, and deep ERP/CRM/OMS integrations. We design data models and staged launches so operations stay stable while the new platform goes live.";

  const faqItems = [
    {
      q: "Can you migrate B2B customer accounts, roles, and permissions?",
      a: "Yes. We plan account structures, user roles, permissions, and approval flows based on your target platform or custom build, then migrate the underlying data with validation.",
    },
    {
      q: "Do you support B2B pricing rules and catalogs?",
      a: "Yes. We migrate tiered pricing, negotiated price lists, customer-specific catalogs, and tax logic, and connect pricing to ERP/PIM sources of truth where needed.",
    },
    {
      q: "Can you integrate ERP/CRM/OMS for B2B operations?",
      a: "Yes. We rebuild and validate integrations for order routing, inventory availability, customer data, invoicing, and fulfillment. We can support staged cutovers to reduce operational risk.",
    },
    {
      q: "Does B2B migration affect SEO?",
      a: "Public catalog pages can and should be SEO-safe. We handle URL mapping, redirects, canonical tags, and structured data for public pages, while keeping gated account areas correctly blocked from indexing.",
    },
    {
      q: "What's a typical timeline for B2B platform migration?",
      a: "Most B2B platform migrations run 10–20+ weeks depending on catalog complexity, pricing rules, ERP/OMS integrations, and rollout approach.",
    },
    {
      q: "What B2B features do you handle during migration?",
      a: "Common B2B requirements: accounts and sub-accounts, buyer roles, approvals, quote workflows, purchase orders, invoicing, customer-specific pricing, MOQ rules, and catalog segmentation. We scope these early so the new platform matches your real buying process.",
    },
    {
      q: "Can you migrate contract pricing and customer-specific catalogs?",
      a: "Yes. We map price lists, tiers, and negotiated pricing to the target platform's model or to an ERP/PIM-driven source of truth. We also migrate customer-specific availability rules so buyers see the correct products and prices after launch.",
    },
    {
      q: "Do you support punchout, EDI, or complex procurement flows?",
      a: "If punchout/EDI is part of your operation, we scope it explicitly and design the integration path (middleware, ERP, or OMS). These flows are tested end-to-end in staging because they affect order creation, invoices, and fulfillment.",
    },
    {
      q: "How do you prevent downtime for revenue-critical B2B stores?",
      a: "We use staged cutovers: parallel run where possible, controlled access for key accounts, final delta migrations for new orders/customers, and rollback plans. The goal is operational continuity while the new platform stabilizes.",
    },
    {
      q: "How do you handle SEO if most buyers are logged in?",
      a: "We separate public and gated surfaces. Public catalog pages get URL mapping, redirects, canonical rules, and structured data. Account-only areas remain blocked from indexing via robots rules and access control, reducing index bloat and protecting sensitive content.",
    },
  ];

  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B2B Platform Migration Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "B2B platform migration services including account migration, pricing logic, ERP/CRM/OMS integrations, SEO protection for public catalog pages, and staged cutovers.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Accounts, roles, and approvals",
      description:
        "Migrate B2B account models, buyer roles, permissions, approvals, and gated experiences with data validation.",
    },
    {
      title: "Pricing and catalog complexity",
      description:
        "Tiered pricing, negotiated catalogs, MOQ rules, and tax logic mapped cleanly to the new platform.",
    },
    {
      title: "ERP/CRM/OMS integrations",
      description:
        "Deep integrations rebuilt and tested to keep operations stable—orders, fulfillment, inventory, invoicing, and customer data.",
    },
    {
      title: "Staged cutovers for stability",
      description:
        "Controlled rollouts that reduce operational risk, keep teams productive, and protect revenue during the transition.",
    },
    {
      title: "Procurement workflows supported",
      description:
        "Purchase orders, quote-to-order, invoicing flows, and procurement integrations (EDI/punchout) scoped and tested end-to-end.",
    },
    {
      title: "Public catalog SEO + gated access rules",
      description:
        "We keep SEO-safe public pages indexable while locking down account-only areas with correct robots/canonical and access controls.",
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
          { label: "B2B platform migration" },
        ]}
      />

      <ServiceHero
        title="B2B PLATFORM MIGRATION SERVICES FOR"
        highlightText="COMPLEX COMMERCE"
        subtitle={
          <>
            B2B migrations require more than moving products. We migrate
            accounts, roles, pricing rules, and integrations&mdash;often
            alongside an SEO-safe public catalog. If a custom build is on the
            table, explore{" "}
            <Link
              className="underline"
              href="/services/custom-ecommerce-platform"
            >
              custom ecommerce platforms
            </Link>
            .
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="B2B platform migration services"
        ctaText="SCOPE MY B2B MIGRATION"
      />

      <WhoWeHelpSection
        subtitle="Best for B2B ecommerce teams migrating platforms while keeping operations stable and customers supported."
        items={[
          "B2B stores with accounts, roles, and approval workflows",
          "Complex pricing: tiers, negotiated catalogs, and customer-specific terms",
          "ERP/CRM/OMS-connected operations that can't break during cutover",
          "Public catalogs that still rely on organic search traffic",
          "Teams moving from legacy stacks to modern platforms or custom commerce",
        ]}
      />

      <ServiceOverview
        title="WHAT WE PROTECT IN A"
        highlightText="B2B PLATFORM MIGRATION"
        features={features}
      />

      <CTABar message="Planning a B2B platform migration? We'll map data, pricing rules, and integrations before anything moves." />

      <ServiceOfferings
        title="B2B MIGRATION"
        highlightText="FOCUS AREAS"
        offerings={[
          {
            title: "Data & access model",
            items: [
              "Account structures, users, roles, permissions",
              "Approval flows and buying workflows",
              "Catalog segmentation and customer-specific visibility",
              "Tax logic and compliance requirements",
              "Reporting and audit trails",
            ],
          },
          {
            title: "Integrations & operations",
            items: [
              "ERP/CRM/OMS integration strategy",
              "Inventory availability and order routing",
              "Pricing and product master sources (PIM/ERP)",
              "Fulfillment and invoicing workflows",
              "Staged cutovers and rollback planning",
            ],
          },
        ]}
      />

      <section className="container py-10 lg:py-16">
        <div className="relative z-10  rounded-[0.9rem] md:rounded-[2.5rem] text-black overflow-hidden">
          <div className="relative px-4 py-10 md:px-8 md:py-14 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] uppercase text-white font-semibold">
                B2B complexity handled
              </p>
              <h2 className="mt-3 font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05] text-white">
                B2B platform migration services for accounts, pricing, and
                operations
              </h2>
              <p className="mt-4 text-sm md:text-base text-white">
                In B2B, &ldquo;data migration&rdquo; is only the beginning. The
                real work is matching how your customers buy and how your team
                fulfills: account structures, contract pricing, approvals,
                purchase orders, and the integrations that keep inventory,
                invoicing, and order routing stable.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Accounts + access model",
                  items: [
                    "Companies, locations, users, buyer roles",
                    "Permissions and approval workflows",
                    "Account segmentation and visibility rules",
                    "Audit trails and reporting requirements",
                  ],
                },
                {
                  title: "Pricing + catalogs",
                  items: [
                    "Contract price lists and tiered pricing",
                    "Customer-specific catalogs and availability",
                    "MOQ rules, pack sizes, tax logic",
                    "ERP/PIM as the source of truth (when needed)",
                  ],
                },
                {
                  title: "Integrations that cannot break",
                  items: [
                    "ERP/CRM/OMS connections and data sync",
                    "Inventory availability and order routing",
                    "Fulfillment, invoicing, and returns workflows",
                    "Punchout/EDI pathways (scoped explicitly)",
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
              <p className="font-semibold">
                Choosing the right target platform
              </p>
              <p className="mt-2 text-sm md:text-base text-black/80">
                Some B2B stacks fit best on enterprise platforms; others need a{" "}
                <Link
                  href="/services/custom-ecommerce-platform"
                  className="underline underline-offset-4"
                >
                  custom ecommerce platform
                </Link>{" "}
                to match approvals, pricing logic, or integration constraints.
                We&apos;ll recommend the lowest-risk approach based on buying
                flows, operations, and time-to-launch.
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
                Staged rollout strategy
              </p>
              <h2 className="mt-3 text-black font-semibold !text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.05]">
                Safer B2B migrations use phased launches
              </h2>
              <p className="mt-4 text-black text-sm md:text-base">
                B2B platform migration is risky because it touches operations.
                We reduce risk with staged cutovers, account-by-account pilots,
                and deep integration QA&mdash;so customer ordering and internal
                teams stay stable during the transition.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Model + mapping",
                  body: "Define account structures, pricing sources, and integration contracts before moving data.",
                },
                {
                  step: "2",
                  title: "Staging + pilots",
                  body: "Run pilots with internal users and a small set of trusted accounts to validate workflows.",
                },
                {
                  step: "3",
                  title: "Integration QA",
                  body: "Test order routing, inventory, invoicing, and fulfillment end-to-end with real scenarios.",
                },
                {
                  step: "4",
                  title: "Cutover + monitoring",
                  body: "Final delta migration and careful monitoring; rapid fixes for operations and SEO surfaces.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-black/10 p-6"
                >
                  <p className="text-[#FDC448] font-bold text-sm">
                    PHASE {s.step}
                  </p>
                  <p className="mt-2 text-black font-semibold">{s.title}</p>
                  <p className="mt-2 text-black text-sm">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-black font-semibold">
                  Operational pitfalls we plan for
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Pricing mismatches between storefront and ERP",
                    "Account permissions breaking approvals or budgets",
                    "Inventory availability delays causing oversells",
                    "Procurement flows (PO/EDI/punchout) failing silently",
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
                  SEO guardrails (public vs gated)
                </p>
                <ul className="mt-3 space-y-2 text-black text-sm md:text-base">
                  {[
                    "Public catalog: URL mapping, redirects, canonicals, schema",
                    "Gated areas: robots + access rules to prevent indexing",
                    "Duplicate content: parameters and filtered URLs controlled",
                    "Sitemap strategy to surface what should rank",
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
                Plan my B2B migration
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <ServiceCTA message="Need B2B platform migration services? Let's plan a safe rollout." />

      <RelatedServices
        services={[
          {
            title: "Platform Migration",
            description: "See the broader ecommerce migration process.",
            href: "/services/platform-migration",
          },
          {
            title: "Custom Ecommerce Platform",
            description:
              "When off-the-shelf platforms can't fit your B2B logic.",
            href: "/services/custom-ecommerce-platform",
          },
          {
            title: "Ecommerce Solutions",
            description: "Layer analytics, SEO, and CRO after the migration.",
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
