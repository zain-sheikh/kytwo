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

export const metadata: Metadata = {
  title:
    "Professional WooCommerce Development Services | Custom WooCommerce Store Design & Development",
  description:
    "Expert WooCommerce development services to build high-converting online stores. Custom WooCommerce theme development, plugin integration, payment gateway setup, and conversion optimization. Get a professional WooCommerce store that drives sales and revenue.",
  keywords: [
    "woocommerce development services",
    "woocommerce store development",
    "custom woocommerce theme development",
    "woocommerce plugin development",
    "professional woocommerce developers",
    "woocommerce website development",
    "woocommerce store design",
    "woocommerce theme customization",
    "woocommerce integration services",
    "woocommerce migration services",
    "woocommerce conversion optimization",
    "woocommerce ecommerce development",
    "woocommerce store setup",
    "woocommerce customization",
    "woocommerce development agency",
    "hire woocommerce developers",
    "woocommerce store redesign",
  ],
  openGraph: {
    title:
      "Professional WooCommerce Development Services | Custom WooCommerce Store Design",
    description:
      "Expert WooCommerce development services to build high-converting online stores. Custom themes, plugin integration, and conversion optimization.",
    url: "/services/woocommerce-development",
    type: "website",
  },
  alternates: {
    canonical: "/services/woocommerce-development",
  },
};

export default function WooCommerceDevelopmentPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "WooCommerce Development",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Professional WooCommerce development services including custom theme development, plugin integration, payment gateway setup, and conversion optimization for high-converting online stores.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Custom WooCommerce Theme Development",
      description:
        "Build unique, conversion-optimized WooCommerce themes tailored to your brand and business goals. Responsive design that works flawlessly across all devices.",
    },
    {
      title: "WooCommerce Plugin Development",
      description:
        "Custom WooCommerce plugin development to extend your store's functionality with unique features and integrations specific to your business needs.",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Integrate popular payment gateways like Stripe, PayPal, Square, and others to provide seamless checkout experiences for your customers.",
    },
    {
      title: "WooCommerce Customization",
      description:
        "Customize your WooCommerce store with advanced features, custom product types, subscription management, and membership systems.",
    },
    {
      title: "Performance Optimization",
      description:
        "Speed up your WooCommerce store with advanced optimization techniques, improving page load times and search engine rankings.",
    },
    {
      title: "WooCommerce Migration",
      description:
        "Seamlessly migrate your existing store to WooCommerce from platforms like Shopify, Magento, or custom solutions with zero downtime.",
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

      <ServiceHero
        title="PROFESSIONAL WOOCOMMERCE DEVELOPMENT SERVICES FOR"
        highlightText="HIGH-CONVERTING STORES"
        subtitle="Years of building successful WooCommerce stores"
        imageSrc="/3d-fire.png"
        imageAlt="Expert WooCommerce development services"
      />

      <WhoWeHelpSection
        subtitle="Best for WordPress teams who want WooCommerce that performs, converts, and stays maintainable."
        items={[
          "Brands in the WordPress ecosystem needing conversion-focused WooCommerce builds",
          "Stores migrating to WooCommerce from Shopify, Magento, or custom stacks",
          "Teams that need custom product types, subscriptions, memberships, or B2B rules",
          "Content-heavy sites that must keep SEO authority while adding commerce",
          "Stores requiring bespoke plugins, integrations, and performance tuning",
        ]}
      />

      <ServiceOverview
        title="WHY CHOOSE OUR"
        highlightText="WOOCOMMERCE EXPERTISE"
        features={features}
      />

      <CTABar message="Need a WooCommerce store that plays nicely with WordPress and still converts like a pro?" />

      <ProcessSection
        title="OUR WOOCOMMERCE"
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
        title="COMPREHENSIVE WOOCOMMERCE"
        highlightText="DEVELOPMENT SOLUTIONS"
        offerings={[
          {
            title: "WooCommerce Store Setup & Configuration",
            items: [
              "Complete WooCommerce store setup from scratch",
              "Product catalog organization and optimization",
              "Payment gateway integration (Stripe, PayPal, etc.)",
              "Shipping and tax configuration",
              "Domain setup and SSL configuration",
            ],
          },
          {
            title: "Custom WooCommerce Theme Development",
            items: [
              "Custom WooCommerce theme design and development",
              "Responsive mobile-first design",
              "WordPress theme customization",
              "Advanced WooCommerce templates",
              "Brand-specific design implementation",
            ],
          },
          {
            title: "WooCommerce Plugin Development",
            items: [
              "Custom WooCommerce plugin development",
              "Third-party plugin integration",
              "API integration and customization",
              "Inventory management system integration",
              "Email marketing and CRM integration",
            ],
          },
          {
            title: "WooCommerce Migration & Optimization",
            items: [
              "Seamless migration to WooCommerce",
              "Data migration (products, customers, orders)",
              "Zero-downtime migration process",
              "Performance optimization and caching",
              "Post-migration testing and optimization",
            ],
          },
        ]}
      />

      <ServiceCTA message="Ready to build your high-converting WooCommerce store?" />

      {/* FAQ Section */}
      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion="How long does it take to develop a custom WooCommerce store?"
          featuredAnswer="The timeline varies based on your store's complexity and requirements. A basic WooCommerce store typically takes 4-6 weeks, while a custom WooCommerce store with advanced features can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs."
          faqItems={[
            {
              q: "Do you provide WooCommerce theme customization or build from scratch?",
              a: "We offer both services! We can customize existing WooCommerce themes to match your brand, or build completely custom themes from scratch. Custom themes give you more flexibility and unique design options, while theme customization is faster and more cost-effective.",
            },
            {
              q: "Can you migrate my existing store to WooCommerce?",
              a: "Yes! We specialize in seamless store migrations from platforms like Shopify, Magento, BigCommerce, and others to WooCommerce. We handle product data, customer information, order history, and ensure zero downtime during the migration process.",
            },
            {
              q: "What's included in your WooCommerce development services?",
              a: "Our WooCommerce development services include store setup, custom theme development, payment gateway integration, product catalog setup, shipping configuration, plugin integrations, SEO optimization, mobile responsiveness, and post-launch support. We'll customize the package based on your specific requirements.",
            },
            {
              q: "Do you develop custom WooCommerce plugins?",
              a: "Absolutely! We're experienced in developing custom WooCommerce plugins to extend your store's functionality. Whether you need custom product types, subscription management, or unique integrations, we can build it.",
            },
            {
              q: "Will my WooCommerce store be mobile-responsive?",
              a: "Yes, mobile responsiveness is a core requirement for all our WooCommerce stores. We use mobile-first design principles to ensure your store looks and functions perfectly on all devices, including smartphones, tablets, and desktops.",
            },
            {
              q: "Do you provide ongoing maintenance and support?",
              a: "Yes, we offer ongoing maintenance packages that include security updates, performance monitoring, bug fixes, content updates, and technical support. We can customize a support plan that fits your business needs.",
            },
            {
              q: "How much does WooCommerce development cost?",
              a: "Pricing depends on the scope of work, including store complexity, custom features, integrations, and design requirements. Basic WooCommerce stores start around $5,000, while custom WooCommerce stores with advanced features can range from $15,000 to $50,000+. Contact us for a detailed quote based on your specific needs.",
            },
          ]}
        />
      </section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}
