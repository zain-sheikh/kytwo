import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import CTABar from "@/components/CTABar";
import BlogPostHeader from "@/components/BlogPostHeader";

export const metadata: Metadata = {
  title: "Ecommerce SEO Basics for Product and Category Pages",
  description:
    "A practical ecommerce SEO guide for product and category pages: templates, internal linking, structured data, and indexation basics.",
  alternates: {
    canonical: "/blog/ecommerce-seo-basics",
  },
};

export default function EcommerceSEOBasicsPost() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Ecommerce SEO basics" },
        ]}
      />

      <BlogPostHeader
        category="SEO"
        title="Ecommerce SEO basics for product and category pages"
        description="A simple framework for ecommerce SEO: page templates, internal links, structured data, and indexation guardrails for catalogs."
        dateLabel="Updated 2026"
        readingTime="6 min read"
      />

      <div className="bg-white">
        <article className="container pb-10 lg:pb-16 text-black space-y-8 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(152,102,242,0.45),_transparent_60%)] blur-3xl opacity-70"
          aria-hidden
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">Product pages</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Unique title + description templates (avoid duplication)</li>
              <li>• Product schema (price, availability, reviews)</li>
              <li>• Clean canonical tags (no parameter canonicals)</li>
              <li>• Fast media: images, lazy loading, and LCP optimizations</li>
              <li>• Internal links from categories + related products</li>
            </ul>
          </div>
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">Category pages</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Index only the pages you want to rank (facets are risky)</li>
              <li>• Descriptive H1 + short intro copy (not keyword stuffing)</li>
              <li>• Internal links to subcategories and top products</li>
              <li>• Avoid crawl waste from infinite filter combinations</li>
              <li>• Strong pagination strategy (and test it)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">Indexation guardrails</h2>
          <ul className="space-y-2 text-sm md:text-base text-black/75">
            <li>• Don’t let filter URLs create infinite indexable pages</li>
            <li>• Keep canonical tags consistent and intentional</li>
            <li>• Make sure sitemaps include only pages you want indexed</li>
            <li>• Ensure internal links point to canonical versions of pages</li>
          </ul>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6">
          <p className="text-black font-semibold">If you’re migrating</p>
          <p className="mt-2 text-sm md:text-base text-black/70 max-w-3xl">
            SEO mistakes during replatforming are expensive. Start with{" "}
            <Link
              href="/services/platform-migration"
              className="underline underline-offset-4"
            >
              ecommerce platform migration services
            </Link>{" "}
            and the{" "}
            <Link
              href="/blog/ecommerce-platform-migration-checklist"
              className="underline underline-offset-4"
            >
              migration checklist
            </Link>
            .
          </p>
        </div>
        </article>
      </div>

      <CTABar
        message="Want technical SEO help for your ecommerce catalog?"
        href="/contact"
        buttonText="BOOK A CALL"
      />

      <CTA />
    </>
  );
}

