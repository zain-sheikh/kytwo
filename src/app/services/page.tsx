import type { Metadata } from "next";

import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import CTA from "@/components/CTA";
import Link from "next/link";
import Services from "@/components/Services";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildFaqSchema } from "@/lib/faqSchema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Ecommerce Services",
  description:
    "Ecommerce services across Shopify, WooCommerce, custom platforms, marketplaces, design, and growth-focused ecommerce solutions.",
  keywords: [
    "ecommerce development services",
    "shopify services",
    "woocommerce services",
    "custom ecommerce platform",
    "marketplace development",
    "ecommerce design services",
    "ecommerce solutions",
    "payment integration",
    "ecommerce seo",
    "conversion optimization",
  ],
  openGraph: {
    title: "Ecommerce Services",
    description:
      "End-to-end ecommerce services across platforms, marketplaces, design, and cross-platform solutions.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      { url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Kytwo — Ecommerce Services" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/services",
  },
};

type ServiceLink = {
  name: string;
  href?: string;
};

const services: {
  category: string;
  description: string;
  href?: string;
  items: ServiceLink[];
}[] = [
  {
    category: "Ecommerce Platforms",
    description:
      "Platform-specific ecommerce services for Shopify, WooCommerce, custom platforms, and multi-vendor marketplaces.",
    href: "/services/ecommerce-platforms",
    items: [
      { name: "Shopify Development Partner", href: "/services/shopify-development-partner" },
      { name: "Shopify Development", href: "/services/shopify-development" },
      {
        name: "WooCommerce Development",
        href: "/services/woocommerce-development",
      },
      {
        name: "Custom Ecommerce Platform",
        href: "/services/custom-ecommerce-platform",
      },
      {
        name: "Marketplace Development",
        href: "/services/marketplace-development",
      },
      { name: "Ecommerce Design", href: "/services/ecommerce-design" },
    ],
  },
  {
    category: "Ecommerce Solutions",
    description:
      "Cross-platform ecommerce solutions to improve payments, operations, SEO, mobile experience, and conversion rates.",
    href: "/services/ecommerce-solutions",
    items: [
      { name: "Payment Integration" },
      { name: "Inventory Management" },
      { name: "Ecommerce SEO" },
      { name: "Ecommerce Mobile App" },
      { name: "Conversion Optimization" },
    ],
  },
];

export default function ServicesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Full-stack ecommerce services across Shopify, WooCommerce, custom/headless platforms, marketplaces, ecommerce design, integrations, SEO, performance, and conversion optimization.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.flatMap((category) =>
      category.items.map((service, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: service.name,
        url: service.href ? `${baseUrl}${service.href}` : baseUrl,
      }))
    ),
  };
  const featuredQuestion = "What ecommerce services does Kytwo offer?";
  const featuredAnswer =
    "We provide full-stack ecommerce services across Shopify, WooCommerce, custom/headless platforms, and marketplaces—covering strategy, UI/UX design, development, integrations, ecommerce SEO, performance, and conversion optimization.";
  const faqItems = [
    {
      q: "Can you help us choose the right ecommerce platform?",
      a: "Yes. We compare Shopify, WooCommerce, and custom/headless options based on your catalog complexity, integrations, growth targets, and total cost of ownership—then map a practical rollout plan.",
    },
    {
      q: "Do you handle ecommerce redesigns and CRO?",
      a: "Yes. We redesign storefronts and improve conversion with UX audits, analytics reviews, experiment roadmaps, and iterative improvements across PDP/PLP, cart, and checkout.",
    },
    {
      q: "Do you build integrations (payments, shipping, tax, ERP/CRM)?",
      a: "Yes. We integrate payment gateways, shipping and tax providers, analytics, and back-office systems like ERP, CRM, OMS, PIM, and WMS—so data stays consistent and operations stay efficient.",
    },
    {
      q: "Can you migrate from a legacy platform without losing SEO?",
      a: "Yes. We plan data migration and SEO protection: URL mapping, 301 redirects, canonical tags, structured data validation, and phased launches to reduce risk and downtime.",
    },
    {
      q: "Do you improve Core Web Vitals and site performance?",
      a: "Yes. We optimize assets, rendering, caching, and platform-specific performance to improve LCP/INP/CLS and create faster shopping experiences that convert better.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes. We can provide ongoing optimization, feature iteration, technical maintenance, and performance/SEO monitoring as your store grows.",
    },
    {
      q: "How do we get started?",
      a: "Start with a discovery call. We’ll review your goals, current platform, analytics, and constraints, then propose a clear scope and next steps.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <ServiceHero
        title="FULL-STACK ECOMMERCE SERVICES FOR"
        highlightText="GROWTH-FOCUSED BRANDS"
        subtitle="Strategy, design, development, migrations, and optimization for modern ecommerce stores."
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce services"
      />

      <section className="container py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-stretch">
          <div className="space-y-5 h-full flex flex-col">
            <h2 className="font-semibold !text-[clamp(1.8rem,4vw,3rem)] leading-[1.1]">
              A services hub built for modern ecommerce growth
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              We help brands build, migrate, and optimize ecommerce experiences
              across Shopify, WooCommerce, custom/headless platforms, and
              marketplaces—without sacrificing performance, SEO, or conversion.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Shopify & Shopify Plus",
                "WooCommerce",
                "Custom & headless",
                "Marketplaces",
                "UX/UI design",
                "Integrations",
                "SEO & Core Web Vitals",
                "CRO & analytics",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-gray-100"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-white/10 bg-white p-6 md:p-7 h-full flex flex-col">
            <p className="text-lg font-semibold tracking-[0.14em] uppercase text-black">
              Best for
            </p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-black flex-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                <span>Launching a new store with a conversion-first build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                <span>
                  Migrating platforms while protecting SEO and revenue
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                <span>
                  Improving checkout, performance, and conversion rates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
                <span>Integrating ERP/CRM/3PL and scaling operations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="relative left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[80%] max-md:mx-auto">
          HOW WE{" "}
          <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
            WORK
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Audit & clarity",
              desc: "We review your stack, funnel, analytics, and constraints to find the real blockers—not just symptoms.",
            },
            {
              title: "Ship in iterations",
              desc: "Fast, staged releases with QA and tracking so improvements land safely and show measurable impact.",
            },
            {
              title: "Protect revenue",
              desc: "SEO-safe migrations, performance work, and conversion guardrails that keep growth compounding.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.1rem] bg-[#382550cc] border border-[#a698c54d] p-6 md:p-8 "
            >
              <h3 className="font-semibold text-xl md:text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-200/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Services ctaMessage="Not sure which ecommerce service you need? Let’s talk through your goals and recommend the right path." />

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
