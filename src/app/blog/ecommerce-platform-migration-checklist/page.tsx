import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import CTABar from "@/components/CTABar";
import BlogPostHeader from "@/components/BlogPostHeader";

export const metadata: Metadata = {
  title: "Ecommerce Platform Migration Checklist (SEO-Safe)",
  description:
    "A practical ecommerce platform migration checklist covering SEO protection, data migration validation, redirects, and launch monitoring.",
  alternates: {
    canonical: "/blog/ecommerce-platform-migration-checklist",
  },
};

export default function EcommercePlatformMigrationChecklistPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Migration checklist" },
        ]}
      />

      <div className="bg-white">
        <BlogPostHeader
          category="Migration planning"
          title="Ecommerce platform migration checklist (SEO-safe)"
          description="A practical checklist to reduce risk during replatforming: redirects, SEO parity, data validation, and post-launch monitoring."
          dateLabel="Updated 2026"
          readingTime="8 min read"
        />

        <article className="container pb-10 lg:pb-16 text-black space-y-8 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(152,102,242,0.55),_transparent_60%)] blur-3xl opacity-70"
          aria-hidden
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8 space-y-4">
            <p className="text-xs tracking-[0.22em] uppercase text-black/60 font-semibold">
              TL;DR
            </p>
            <h2 className="text-black font-semibold text-xl md:text-2xl">
              A checklist that prevents SEO drops and broken data
            </h2>
            <p className="text-sm md:text-base text-black/70">
              This checklist is designed for teams planning an{" "}
              <Link
                href="/services/platform-migration"
                className="underline underline-offset-4"
              >
                ecommerce website migration service
              </Link>
              . It focuses on the two most common failure modes: SEO damage and
              incomplete data cutovers.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Redirect mapping",
                "Structured data",
                "Catalog QA",
                "Checkout validation",
                "Search Console monitoring",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full bg-black/5 border border-black/10 px-3 py-1 text-xs md:text-sm text-black/80"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8 space-y-3">
            <p className="text-black font-semibold text-lg">
              Want us to run this checklist?
            </p>
            <p className="text-sm md:text-base text-black/70">
              We’ll review your current URLs, catalog complexity, integrations,
              and launch risk and turn it into a migration plan.
            </p>
            <Link
              href="/services/platform-migration"
              className="underline underline-offset-4 text-black text-sm md:text-base"
            >
              Ecommerce platform migration services
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">
              1) Discovery & inventory
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Export and document product, customer, and order counts.</li>
              <li>• List apps/plugins and critical integrations (ERP/3PL/CRM).</li>
              <li>• Identify revenue-critical flows: search, PDP, cart, checkout.</li>
              <li>• Capture baseline SEO: top landing pages, queries, and traffic.</li>
            </ul>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">
              2) SEO protection plan
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Build a URL map (old → new) for all indexable pages.</li>
              <li>• Implement and test 301 redirects (not 302s).</li>
              <li>• Validate canonical tags and robots directives.</li>
              <li>• Confirm structured data on PDP/PLP and reviews.</li>
            </ul>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">
              3) Data migration validation
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Run a test migration and reconcile counts + edge cases.</li>
              <li>• Validate variants/SKUs, images, pricing, and inventory rules.</li>
              <li>• Confirm customer accounts and order history requirements.</li>
              <li>
                • Document mapping for custom fields and metadata (SEO fields).
              </li>
            </ul>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">4) Launch plan</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Choose a low-risk launch window.</li>
              <li>• Lock content changes and rerun final migrations if needed.</li>
              <li>• QA checkout and payment/shipping/tax in production settings.</li>
              <li>• Monitor Search Console and analytics for 2–4 weeks post-launch.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8 space-y-4">
          <h2 className="text-black font-semibold text-lg">
            Redirect map template (simple)
          </h2>
          <p className="text-sm md:text-base text-black/70">
            Use a simple sheet with columns: <span className="text-black font-medium">Old URL</span>,{" "}
            <span className="text-black font-medium">New URL</span>,{" "}
            <span className="text-black font-medium">Status</span> (301/410/keep),{" "}
            <span className="text-black font-medium">Notes</span>,{" "}
            <span className="text-black font-medium">Owner</span>. Start with your top landing pages and expand to the full indexable set.
          </p>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">Common pitfalls</h2>
          <ul className="space-y-2 text-sm md:text-base text-black/75">
            <li>• Redirect chains (A → B → C) instead of clean one-hop 301s</li>
            <li>• Canonicals pointing to staging or parameterized URLs</li>
            <li>• Missing structured data after theme/template changes</li>
            <li>• Analytics tracking not validated before launch</li>
            <li>• No post-launch monitoring plan (404s, indexation, revenue)</li>
          </ul>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6">
          <p className="text-black font-semibold">Need a migration team?</p>
          <p className="mt-2 text-sm md:text-base text-black/70 max-w-3xl">
            If you want an ecommerce platform migration agency to own planning,
            redirects, QA, and cutover, see{" "}
            <Link
              href="/services/platform-migration"
              className="underline underline-offset-4"
            >
              ecommerce platform migration services
            </Link>
            .
          </p>
        </div>
        </article>
      </div>

      <CTABar
        message="Want a safe migration plan with SEO and data validation built in?"
        href="/contact"
        buttonText="BOOK A MIGRATION CALL"
      />

      <CTA />
    </>
  );
}

