import type { Metadata } from "next";

import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import ProcessSection from "@/components/ProcessSection";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceCTA from "@/components/ServiceCTA";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CTABar from "@/components/CTABar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildFaqSchema } from "@/lib/faqSchema";
import RelatedServices from "@/components/RelatedServices";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Shopify Development Services and Custom Design store",
  description:
    "Shopify development services to build high-converting online stores, from custom themes to Shopify Plus migrations and app integrations.",
  keywords: [
    "shopify development services",
    "shopify store development",
    "custom shopify theme development",
    "shopify plus development",
    "professional shopify developers",
    "shopify website development",
    "shopify store design",
    "shopify theme customization",
    "shopify app development",
    "shopify migration services",
    "shopify conversion optimization",
    "shopify ecommerce development",
    "shopify store setup",
    "shopify liquid development",
    "shopify checkout customization",
    "shopify plus migration",
    "shopify store optimization",
    "shopify development agency",
    "hire shopify developers",
    "shopify store redesign",
  ],
  openGraph: {
    title: "Shopify Development Services",
    description:
      "Shopify development services for custom themes, Shopify Plus migrations, and high-converting ecommerce stores.",
    url: `${siteUrl}/services/shopify-development`,
    type: "website",
    images: [
      { url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Kytwo — Shopify Development Services" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/services/shopify-development",
  },
};

export default function ShopifyDevelopmentPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
  const featuredQuestion =
    "How long does it take to develop a custom Shopify store?";
  const featuredAnswer =
    "The timeline varies based on your store's complexity and requirements. A basic Shopify store typically takes 4-6 weeks, while a custom Shopify Plus store with advanced features can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs.";
  const faqItems = [
    {
      q: "Do you provide Shopify theme customization or build from scratch?",
      a: "We offer both services! We can customize existing Shopify themes to match your brand, or build completely custom themes from scratch using Shopify Liquid. Custom themes give you more flexibility and unique design options, while theme customization is faster and more cost-effective.",
    },
    {
      q: "Can you migrate my existing store to Shopify?",
      a: "Yes! We specialize in seamless store migrations from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. We handle product data, customer information, order history, and ensure zero downtime during the migration process.",
    },
    {
      q: "What's included in your Shopify development services?",
      a: "Our Shopify development services include store setup, custom theme development, payment gateway integration, product catalog setup, shipping configuration, app integrations, SEO optimization, mobile responsiveness, and post-launch support. We'll customize the package based on your specific requirements.",
    },
    {
      q: "Do you offer Shopify Plus development?",
      a: "Absolutely! We're experienced Shopify Plus partners and can help you migrate to Shopify Plus or develop advanced features like custom checkout experiences, wholesale channels, advanced analytics, and international selling capabilities.",
    },
    {
      q: "Will my Shopify store be mobile-responsive?",
      a: "Yes, mobile responsiveness is a core requirement for all our Shopify stores. We use mobile-first design principles to ensure your store looks and functions perfectly on all devices, including smartphones, tablets, and desktops.",
    },
    {
      q: "Do you provide ongoing maintenance and support?",
      a: "Yes, we offer ongoing maintenance packages that include security updates, performance monitoring, bug fixes, content updates, and technical support. We can customize a support plan that fits your business needs.",
    },
    {
      q: "How much does Shopify development cost?",
      a: "Pricing depends on the scope of work, including store complexity, custom features, integrations, and design requirements. Basic Shopify stores start around $5,000, while custom Shopify Plus stores can range from $15,000 to $50,000+. Contact us for a detailed quote based on your specific needs.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shopify Development",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Professional Shopify development services including custom theme development, Shopify Plus migration, app integration, and conversion optimization for high-converting online stores.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Custom Shopify Theme Development",
      description:
        "Build unique, conversion-optimized Shopify themes tailored to your brand and business goals. Responsive design that works flawlessly across all devices.",
    },
    {
      title: "Shopify Plus Migration",
      description:
        "Seamlessly migrate your existing store to Shopify Plus with zero downtime. Expert handling of product data, customer information, and order history.",
    },
    {
      title: "Shopify App Integration",
      description:
        "Integrate powerful Shopify apps for inventory management, email marketing, customer reviews, and more to enhance your store's functionality.",
    },
    {
      title: "Shopify Liquid Development",
      description:
        "Custom Liquid template development and theme customization to create unique shopping experiences that match your brand identity.",
    },
    {
      title: "Checkout Customization",
      description:
        "Optimize your Shopify checkout process to reduce cart abandonment and increase conversion rates with custom checkout experiences.",
    },
    {
      title: "Performance Optimization",
      description:
        "Speed up your Shopify store with advanced optimization techniques, improving page load times and search engine rankings.",
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
          { label: "Shopify development" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceHero
        title="PROFESSIONAL SHOPIFY DEVELOPMENT SERVICES FOR"
        highlightText="HIGH-CONVERTING STORES"
        subtitle="Custom Shopify builds, migrations, and optimization for growth"
        imageSrc="/3d-fire.png"
        imageAlt="Expert Shopify development services"
      />

      <WhoWeHelpSection
        subtitle="Best for Shopify brands that need a reliable build, a safe migration, or growth-focused improvements."
        items={[
          "DTC brands that need a conversion-first Shopify or Shopify Plus build",
          "Stores migrating from Magento, WooCommerce, or custom stacks to Shopify",
          "Teams that want custom checkout flows, apps, and integrations",
          "Brands expanding internationally with multi-currency and multi-language needs",
          "Subscription and repeat-purchase models needing reliable performance and UX",
        ]}
      />

      <ServiceOverview
        title="WHY CHOOSE OUR"
        highlightText="SHOPIFY EXPERTISE"
        features={features}
      />

      <CTABar message="Want a Shopify build or migration that protects SEO and revenue from day one?" />

      <ProcessSection
        title="OUR SHOPIFY"
        highlightText="DEVELOPMENT PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Project Discovery & Planning",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "Wireframes & Concept",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "UI Design & Visual Refinement",
            gradient: "from-teal-400 to-green-500",
            mt: "100",
          },
          {
            label: "STEP #4",
            title: "Development & Integration",
            gradient: "from-green-400 to-emerald-600",
            mt: "120",
          },
          {
            label: "STEP #5",
            title: "Quality Assurance & Testing",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Launch & Post-Launch",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="COMPREHENSIVE SHOPIFY"
        highlightText="DEVELOPMENT SOLUTIONS"
        offerings={[
          {
            title: "Shopify Store Setup & Configuration",
            items: [
              "Complete Shopify store setup from scratch",
              "Product catalog organization and optimization",
              "Payment gateway integration (Stripe, PayPal, etc.)",
              "Shipping and tax configuration",
              "Domain setup and SSL configuration",
            ],
          },
          {
            title: "Custom Shopify Theme Development",
            items: [
              "Custom Shopify theme design and development",
              "Responsive mobile-first design",
              "Liquid template customization",
              "Advanced Shopify sections and blocks",
              "Brand-specific design implementation",
            ],
          },
          {
            title: "Shopify Plus Migration",
            items: [
              "Seamless migration to Shopify Plus",
              "Data migration (products, customers, orders)",
              "Zero-downtime migration process",
              "Shopify Plus features implementation",
              "Post-migration testing and optimization",
            ],
          },
          {
            title: "Shopify App Development & Integration",
            items: [
              "Custom Shopify app development",
              "Third-party app integration",
              "API integration and customization",
              "Inventory management system integration",
              "Email marketing and CRM integration",
            ],
          },
        ]}
      />
      <ServiceCTA message="Ready to build your high-converting Shopify store?" />

      <RelatedServices
        services={[
          {
            title: "Ecommerce Platform Migration",
            description:
              "Move from Magento, WooCommerce, or legacy stacks to Shopify with SEO-safe, zero-downtime migrations.",
            href: "/services/platform-migration",
          },
          {
            title: "Ecommerce Design",
            description:
              "Conversion-focused storefront design for Shopify, from product pages and navigation to checkout UX.",
            href: "/services/ecommerce-design",
          },
          {
            title: "Ecommerce Solutions",
            description:
              "Payment, SEO, and CRO improvements that layer onto your existing Shopify stack.",
            href: "/services/ecommerce-solutions",
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion={featuredQuestion}
          featuredAnswer={featuredAnswer}
          faqItems={faqItems}
        />
      </section>
      {/* Final CTA */}
      <CTA />
    </>
  );
}
