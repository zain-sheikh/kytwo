import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import CTABar from "@/components/CTABar";
import BlogPostHeader from "@/components/BlogPostHeader";

export const metadata: Metadata = {
  title: "WooCommerce to Shopify Migration: What to Migrate (and What Breaks)",
  description:
    "A practical WooCommerce to Shopify migration guide covering products, customers, orders, redirects, subscriptions, and integrations.",
  alternates: {
    canonical: "/blog/woocommerce-to-shopify-migration",
  },
};

export default function WooCommerceToShopifyMigrationPost() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "WooCommerce → Shopify" },
        ]}
      />

      <BlogPostHeader
        category="Platform routes"
        title="WooCommerce to Shopify migration: what to migrate (and what breaks)"
        description="A practical migration guide covering data scope, redirects, subscriptions, integrations, and the highest-risk QA checks."
        dateLabel="Updated 2026"
        readingTime="7 min read"
      />

      <div className="bg-white">
        <article className="container pb-10 lg:pb-16 text-black space-y-8 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(253,196,72,0.35),_transparent_60%)] blur-3xl opacity-70"
          aria-hidden
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8 space-y-4">
            <p className="text-xs tracking-[0.22em] uppercase text-black/60 font-semibold">
              Summary
            </p>
            <h2 className="text-black font-semibold text-xl md:text-2xl">
              WooCommerce → Shopify migrations fail for predictable reasons
            </h2>
            <p className="text-sm md:text-base text-black/70">
              The biggest causes are missing redirects, incomplete data mapping,
              and integrations that aren&apos;t rebuilt correctly. If you want a
              scoped plan, start with{" "}
              <Link
                href="/services/platform-migration/woocommerce-migration"
                className="underline underline-offset-4"
              >
                WooCommerce migration services
              </Link>
              .
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { k: "Typical timeline", v: "6–12 weeks" },
                { k: "Highest-risk items", v: "redirects + subscriptions" },
                { k: "Must-validate", v: "checkout + tracking" },
                { k: "SEO guardrail", v: "URL mapping + 301 tests" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-[1rem] border border-black/10 bg-black/5 p-4"
                >
                  <p className="text-xs tracking-[0.22em] uppercase text-black/55 font-semibold">
                    {item.k}
                  </p>
                  <p className="mt-1 text-sm md:text-base text-black/80">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8 space-y-3">
            <p className="text-black font-semibold text-lg">
              Want this done for you?
            </p>
            <p className="text-sm md:text-base text-black/70">
              See{" "}
              <Link
                href="/services/platform-migration/shopify-migration"
                className="underline underline-offset-4"
              >
                Shopify migration services
              </Link>{" "}
              or our{" "}
              <Link
                href="/services/platform-migration"
                className="underline underline-offset-4"
              >
                platform migration agency
              </Link>{" "}
              process.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">What to migrate</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Products, variants, SKUs, pricing, and inventory rules</li>
              <li>• Customers and account history (based on ops needs)</li>
              <li>• Orders (full history vs. recent window)</li>
              <li>• Content pages and blog posts</li>
              <li>• Reviews and ratings</li>
            </ul>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">
              What usually breaks
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• URL changes without redirect maps</li>
              <li>• Subscription flows (platform differences)</li>
              <li>• Analytics and conversion tracking gaps</li>
              <li>• Shipping/tax edge cases</li>
              <li>• Faceted navigation that generates crawl waste</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">SEO-safe steps</h2>
          <ul className="space-y-2 text-sm md:text-base text-black/75">
            <li>
              • Create a URL map and test redirects before you switch DNS
            </li>
            <li>
              • Validate structured data and canonicals for PDP/PLP templates
            </li>
            <li>• Re-submit sitemaps and monitor Search Console after launch</li>
            <li>
              • Keep content parity for top landing pages (category and PDPs)
            </li>
          </ul>
          <p className="mt-4 text-sm md:text-base text-black/70">
            For end-to-end help, see{" "}
            <Link
              href="/services/platform-migration/shopify-migration"
              className="underline underline-offset-4"
            >
              Shopify migration services
            </Link>{" "}
            or the full{" "}
            <Link
              href="/services/platform-migration"
              className="underline underline-offset-4"
            >
              ecommerce platform migration services
            </Link>
            .
          </p>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">
            Pre-launch QA checklist (fast)
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-black/75">
            <li>• 50–100 top URLs redirect correctly (no chains)</li>
            <li>• PDP/PLP templates output correct canonicals and schema</li>
            <li>• Add-to-cart and checkout flow tested on mobile + desktop</li>
            <li>• GA4/GTM events fire and revenue is recorded correctly</li>
            <li>• Shipping/tax edge cases verified (regions, thresholds, VAT)</li>
          </ul>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">
            Subscription & membership note
          </h2>
          <p className="text-sm md:text-base text-black/70">
            If you run subscriptions or memberships on WooCommerce, treat this as
            a separate scope item. The data model and billing logic often
            changes on Shopify, so you’ll want explicit mapping, customer
            communication, and QA around renewals and account access.
          </p>
        </div>
        </article>
      </div>

      <CTABar
        message="Want us to plan your WooCommerce → Shopify migration with SEO and QA guardrails?"
        href="/contact"
        buttonText="BOOK A MIGRATION CALL"
      />

      <CTA />
    </>
  );
}

