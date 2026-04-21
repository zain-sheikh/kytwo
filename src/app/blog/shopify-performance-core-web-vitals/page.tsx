import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import CTABar from "@/components/CTABar";
import BlogPostHeader from "@/components/BlogPostHeader";

export const metadata: Metadata = {
  title: "Shopify Performance: What Actually Improves Core Web Vitals",
  description:
    "A prioritized Shopify performance guide: practical changes that move LCP, INP, and CLS on real storefronts.",
  alternates: {
    canonical: "/blog/shopify-performance-core-web-vitals",
  },
};

export default function ShopifyPerformancePost() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Shopify performance" },
        ]}
      />

      <BlogPostHeader
        category="Performance"
        title="Shopify performance: what actually improves Core Web Vitals"
        description="A short, prioritized list of changes that tend to move LCP/INP/CLS on Shopify themes (and what usually doesn’t)."
        dateLabel="Updated 2026"
        readingTime="5 min read"
      />

      <div className="bg-white">
        <article className="container pb-10 lg:pb-16 text-black space-y-8 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(152,102,242,0.45),_transparent_60%)] blur-3xl opacity-70"
          aria-hidden
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">Move LCP</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Optimize hero media (size, format, priority loading)</li>
              <li>• Reduce app/script bloat above the fold</li>
              <li>• Simplify heavy sections and sliders</li>
              <li>• Cache smartly and avoid render-blocking CSS</li>
            </ul>
          </div>
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
            <h2 className="text-black font-semibold text-lg">Move INP/CLS</h2>
            <ul className="space-y-2 text-sm md:text-base text-black/75">
              <li>• Defer non-critical JS and reduce main-thread work</li>
              <li>• Fix layout shifts (reserve space for images/banners)</li>
              <li>• Reduce reflows from dynamic carts/upsells</li>
              <li>• Validate third-party scripts (chat, reviews, tracking)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6 space-y-3">
          <h2 className="text-black font-semibold text-lg">Quick audit checklist</h2>
          <ul className="space-y-2 text-sm md:text-base text-black/75">
            <li>• Check LCP element on home + top category + top PDP</li>
            <li>• List all third-party scripts and remove duplicates</li>
            <li>• Verify image sizes and set explicit dimensions</li>
            <li>• Identify the heaviest sections and simplify them</li>
          </ul>
        </div>

        <div className="rounded-[1.4rem] border border-black/10 bg-white p-6">
          <p className="text-black font-semibold">Need help on Shopify?</p>
          <p className="mt-2 text-sm md:text-base text-black/70 max-w-3xl">
            If performance is holding back rankings or conversion, explore{" "}
            <Link
              href="/services/shopify-development"
              className="underline underline-offset-4"
            >
              Shopify development services
            </Link>{" "}
            or{" "}
            <Link
              href="/services/ecommerce-solutions"
              className="underline underline-offset-4"
            >
              ecommerce solutions
            </Link>
            .
          </p>
        </div>
        </article>
      </div>

      <CTABar
        message="Want a performance + conversion audit for your Shopify store?"
        href="/contact"
        buttonText="BOOK A CALL"
      />

      <CTA />
    </>
  );
}

