import type { Metadata } from "next";

import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import EcommerceSolutionDetails, {
  EcommerceSolutionDetail,
} from "@/components/EcommerceSolutionDetails";
import CTABar from "@/components/CTABar";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildFaqSchema } from "@/lib/faqSchema";
import RelatedServices from "@/components/RelatedServices";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Ecommerce Solutions for Growth-Focused Brands",
  description:
    "Ecommerce solutions that improve payments, inventory, SEO, mobile experiences, and conversion rates on Shopify, WooCommerce, and custom platforms.",
  keywords: [
    "ecommerce solutions",
    "payment integration services",
    "ecommerce inventory management",
    "ecommerce seo services",
    "ecommerce mobile app",
    "conversion rate optimization",
    "ecommerce growth services",
  ],
  openGraph: {
    title: "Ecommerce Solutions",
    description:
      "Cross-platform ecommerce solutions for payments, inventory, SEO, mobile experiences, and conversion rate optimization.",
    url: `${siteUrl}/services/ecommerce-solutions`,
    type: "website",
    images: [
      { url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Kytwo — Ecommerce Solutions" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/services/ecommerce-solutions",
  },
};

const solutionDetails: EcommerceSolutionDetail[] = [
  {
    name: "Payment Integration",
    label: "PAYMENTS & CHECKOUT",
    description:
      "Modern payment experiences that reduce friction at checkout while keeping your store secure and compliant across markets.",
    bullets: [
      "Gateway setup and optimization for Stripe, PayPal, Apple Pay, Google Pay, and local methods.",
      "Buy-now-pay-later (BNPL), subscriptions, and installment payment flows tailored to your customers.",
      "Multi-currency, tax, and fee handling tuned for your markets and products.",
      "Fraud prevention, 3D Secure, and dispute management setup to protect margins.",
      "Checkout UX improvements that consistently lift authorization and completion rates.",
    ],
  },
  {
    name: "Inventory Management",
    label: "STOCK & OPERATIONS",
    description:
      "Inventory logic that keeps products in sync across channels, locations, and systems—without overselling or manual spreadsheets.",
    bullets: [
      "Real-time stock syncing between ecommerce, marketplaces, and retail locations.",
      "Multi-location and multi-warehouse rules for routing, reservations, and safety stock.",
      "Support for backorders, preorders, bundles, and kits across your catalog.",
      "Integrations with ERP, WMS, 3PLs, and fulfillment providers.",
      "Reporting for sell-through, demand forecasting, and low-stock alerts.",
    ],
  },
  {
    name: "Ecommerce SEO",
    label: "TRAFFIC & VISIBILITY",
    description:
      "Technical and content SEO tailored for ecommerce catalogs so the right customers find the right products at the right time.",
    bullets: [
      "Technical SEO audits covering crawlability, indexation, and Core Web Vitals.",
      "Structured data, schema, and rich results for products, categories, and reviews.",
      "Collection, category, and product page content frameworks that scale.",
      "On-page optimization across titles, metadata, internal links, and filters.",
      "Content roadmaps for landing pages, blog, and evergreen search terms.",
    ],
  },
  {
    name: "Ecommerce Mobile App",
    label: "MOBILE EXPERIENCE",
    description:
      "Mobile ecommerce experiences—native or web—that feel fast, intuitive, and built for repeat purchases on the go.",
    bullets: [
      "Strategy for native apps, PWAs, or mobile-first web based on your goals.",
      "Mobile navigation, search, and discovery patterns designed for thumbs.",
      "Optimized product discovery, cart, and checkout flows on small screens.",
      "Push notifications, deep links, and retention mechanics that bring shoppers back.",
      "Performance-focused implementation with lightweight assets and caching.",
    ],
  },
  {
    name: "Conversion Optimization",
    label: "CRO & ANALYTICS",
    description:
      "A structured CRO program that turns data into experiments, experiments into learnings, and learnings into predictable revenue growth.",
    bullets: [
      "Comprehensive funnel and analytics review to find drop-offs and bottlenecks.",
      "Prioritized CRO roadmap focused on revenue, AOV, and LTV—not vanity metrics.",
      "A/B tests on PDPs, PLPs, cart, and checkout to validate changes.",
      "Implementation of heatmaps, session recordings, and event tracking.",
      "Iterative cycles of testing, measurement, and refinement with clear reporting.",
    ],
  },
  {
    name: "Analytics & Reporting",
    label: "DATA & INSIGHTS",
    description:
      "Instrumentation, dashboards, and attribution that keep your growth efforts measurable and your decisions grounded in clean data.",
    bullets: [
      "Event architecture and tagging plans across web, app, and checkout.",
      "Server-side tracking, CAPI, and first-party data pipelines.",
      "Revenue, cohort, and funnel dashboards for merch and marketing teams.",
      "Attribution setup that reflects your channels and sales cycles.",
      "Data quality checks, governance, and experiment readouts you can trust.",
    ],
  },
];

export default function EcommerceSolutionsPage() {
  const featuredQuestion =
    "Can you improve checkout, SEO, and conversion without rebuilding our ecommerce platform?";
  const featuredAnswer =
    "Yes. Most growth wins come from targeted ecommerce solutions—payment and checkout optimization, inventory workflows, technical SEO, Core Web Vitals, and CRO—layered onto your existing Shopify, WooCommerce, or custom stack.";
  const faqItems = [
    {
      q: "What do you mean by “ecommerce solutions”?",
      a: "Ecommerce solutions are focused improvements that plug into your current store: payment integrations, inventory management, ecommerce SEO, mobile UX, analytics, and conversion rate optimization (CRO). They’re designed to lift revenue and performance without a full replatform.",
    },
    {
      q: "Which platforms do you support (Shopify, WooCommerce, headless)?",
      a: "We work across Shopify and Shopify Plus, WooCommerce, and custom/headless commerce stacks. The approach is platform-agnostic—optimize the funnel, fix technical blockers, and improve performance where it matters most.",
    },
    {
      q: "Do you handle payment integrations like Stripe, PayPal, and BNPL?",
      a: "Yes. We implement and optimize gateways (Stripe, PayPal, wallets, and local methods), configure 3D Secure and fraud controls, and improve the checkout UX to reduce abandonment and increase authorization rates.",
    },
    {
      q: "Can you integrate inventory with ERP, WMS, or a 3PL?",
      a: "Yes. We build reliable integrations and rules for multi-location inventory, reservations, bundles/kits, backorders, and fulfillment workflows—keeping catalog and stock accurate across channels.",
    },
    {
      q: "How do you approach ecommerce SEO?",
      a: "We prioritize technical SEO and scalable content: crawlability and indexation fixes, structured data (product, category, reviews), internal linking, faceted navigation controls, and performance work to improve Core Web Vitals.",
    },
    {
      q: "Do you run CRO and A/B testing programs?",
      a: "Yes. We start with analytics and funnel reviews, then ship experiments across PDP/PLP, cart, and checkout. We can implement tracking (GA4/GTM) and testing workflows aligned to your stack.",
    },
    {
      q: "How long does an ecommerce solutions engagement take?",
      a: "It depends on scope. Quick wins can ship in 1–2 weeks; deeper programs (SEO + CRO + integrations) typically run 4–10+ weeks with iterative releases and reporting.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Ecommerce solutions" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceHero
        title="ECOMMERCE SOLUTIONS THAT"
        highlightText="UNLOCK GROWTH"
        subtitle="Payments, operations, SEO, mobile, and CRO services that compound ecommerce revenue on your existing platform."
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce solutions services"
      />

      <WhoWeHelpSection
        subtitle="Best for teams improving checkout, operations, SEO, or conversion without a full replatform."
        items={[
          "Brands needing faster, higher-converting checkout experiences",
          "Stores wrestling with inventory sync across warehouses, retail, and marketplaces",
          "Teams chasing organic growth via technical SEO and Core Web Vitals",
          "Mobile-heavy audiences that need native-feel shopping on small screens",
          "Growth squads wanting a structured CRO and analytics program",
        ]}
      />

      {/* <ServiceOfferings
        title="SOLUTIONS THAT"
        highlightText=""
        offerings={solutionOfferings}
      /> */}

      <EcommerceSolutionDetails
        title="SOLUTIONS THAT"
        highlightText="COMPLEMENT YOUR PLATFORM"
        solutions={solutionDetails}
      />
      <CTABar
        message="Want to tune payments, SEO, or conversion without rebuilding your entire stack? We can plug into your existing ecommerce platform."
        href="/contact"
        buttonText="BOOK A CALL"
      />

      <RelatedServices
        services={[
          {
            title: "Ecommerce Platforms",
            description:
              "Choose or upgrade the core platform your solutions will sit on—Shopify, WooCommerce, or custom.",
            href: "/services/ecommerce-platforms",
          },
          {
            title: "Ecommerce Design",
            description:
              "Refine storefront UX so your CRO and SEO improvements land even better.",
            href: "/services/ecommerce-design",
          },
          {
            title: "Custom Ecommerce Platform",
            description:
              "When incremental solutions aren’t enough, explore a custom/headless platform.",
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

      <ServiceCTA message="Want to tune payments, SEO, or conversion without rebuilding your entire stack? We can plug into your existing ecommerce platform." />

      <CTA />
    </>
  );
}
