import type { Metadata } from "next";

import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceOverview from "@/components/ServiceOverview";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CTABar from "@/components/CTABar";

export const metadata: Metadata = {
  title: "Ecommerce Design Services | High-Converting UI/UX for Online Stores",
  description:
    "Ecommerce design agency crafting conversion-focused storefronts. Custom UI/UX, mobile-first layouts, product page design, and checkout optimization to increase sales and customer retention.",
  keywords: [
    "ecommerce design services",
    "ecommerce ui ux design",
    "online store design",
    "conversion focused ecommerce design",
    "shopify design",
    "woocommerce design",
    "product page design",
    "checkout optimization",
    "mobile first ecommerce",
    "ecommerce redesign",
    "ecommerce design agency",
    "hire ecommerce designers",
  ],
  openGraph: {
    title: "Ecommerce Design Services | High-Converting Storefronts",
    description:
      "Conversion-focused ecommerce design: custom UI/UX, mobile-first layouts, product page design, and optimized checkouts that lift revenue.",
    url: "/services/ecommerce-design",
    type: "website",
  },
  alternates: {
    canonical: "/services/ecommerce-design",
  },
};

export default function EcommerceDesignPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Design",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Ecommerce design services including conversion-focused UI/UX, mobile-first layouts, product page design, and checkout optimization for online stores.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "Conversion-Focused UI/UX",
      description:
        "Design storefronts that guide shoppers seamlessly from landing to checkout with clear CTAs, intuitive navigation, and persuasive layouts.",
    },
    {
      title: "Mobile-First Experience",
      description:
        "Responsive, touch-friendly designs that load fast and feel native on phones and tablets, improving mobile conversion rates.",
    },
    {
      title: "High-Impact Product Pages",
      description:
        "Rich imagery, trust signals, reviews, and structured content that increase add-to-cart and average order value.",
    },
    {
      title: "Checkout & Cart Optimization",
      description:
        "Reduce abandonment with simplified steps, clear progress, upfront fees, and frictionless payment flows.",
    },
    {
      title: "Brand-Consistent Visuals",
      description:
        "Design systems, typography, and color palettes that reinforce your brand and keep experiences consistent across channels.",
    },
    {
      title: "Data-Backed Iteration",
      description:
        "A/B testing, heatmaps, and analytics to validate design decisions and continually lift conversion performance.",
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
        title="PREMIUM ECOMMERCE DESIGN FOR"
        highlightText="HIGH-CONVERTING STORES"
        subtitle="Conversion-optimized UI/UX that turns visitors into customers"
        imageSrc="/3d-fire.png"
        imageAlt="Ecommerce design services"
      />

      <WhoWeHelpSection
        subtitle="Best for brands redesigning their storefront to improve clarity, trust, and conversion—especially on mobile."
        items={[
          "DTC brands redesigning Shopify or WooCommerce stores for higher conversion",
          "Mobile-first audiences that need fast, thumb-friendly shopping experiences",
          "High-AOV or considered purchases that rely on trust signals and rich PDPs",
          "Teams running CRO and experimentation who need design systems to move faster",
          "Brands seeking accessible, on-brand UI that still respects performance budgets",
        ]}
      />

      <ServiceOverview
        title="WHY CHOOSE OUR"
        highlightText="ECOMMERCE DESIGN EXPERTISE"
        features={features}
      />

      <CTABar message="Want ecommerce design that actually lifts conversion instead of just looking pretty?" />

      <ProcessSection
        title="OUR ECOMMERCE"
        highlightText="DESIGN PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Discovery & Research",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "User Flows & Wireframes",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "Visual Design System",
            gradient: "from-teal-400 to-green-500",
            mt: "100",
          },
          {
            label: "STEP #4",
            title: "Prototyping & UX Testing",
            gradient: "from-green-400 to-emerald-600",
            mt: "120",
          },
          {
            label: "STEP #5",
            title: "Conversion Optimization",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Handoff & Support",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="COMPREHENSIVE ECOMMERCE"
        highlightText="DESIGN SOLUTIONS"
        offerings={[
          {
            title: "UI/UX Design & Research",
            items: [
              "Customer journey mapping & user flows",
              "Wireframes and interactive prototypes",
              "Usability testing and heuristic reviews",
              "Information architecture & navigation",
              "Accessibility-first design",
            ],
          },
          {
            title: "Visual Design & Branding",
            items: [
              "Design systems, typography, and color palettes",
              "Iconography, illustration, and motion cues",
              "Product imagery direction and guidelines",
              "Brand-consistent landing pages",
              "Multi-channel consistency (web, mobile, email)",
            ],
          },
          {
            title: "Conversion Optimization",
            items: [
              "Product page design (PDP/PLP) with trust signals",
              "Cart and checkout UX optimization",
              "A/B testing and experiment strategy",
              "Speed and performance-aware design",
              "Email capture and retention flows",
            ],
          },
          {
            title: "Mobile-First Ecommerce",
            items: [
              "Responsive and adaptive layouts",
              "Touch-friendly controls and microinteractions",
              "Optimized above-the-fold experiences",
              "Native-feel mobile navigation patterns",
              "Performance-focused asset strategy",
            ],
          },
        ]}
      />

      <ServiceCTA message="Ready to design a high-converting ecommerce experience?" />

      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion="How long does it take to design a custom ecommerce store?"
          featuredAnswer="Timelines depend on scope. A focused design engagement typically takes 3-5 weeks; larger redesigns with testing and iteration can take 6-10 weeks. We share a detailed plan after discovery."
          faqItems={[
            {
              q: "Do you handle design-only or design + development?",
              a: "Both. We can deliver production-ready design systems and assets for your engineering team, or handle end-to-end design and development with our Shopify and WooCommerce specialists.",
            },
            {
              q: "Can you redesign my existing store without hurting SEO?",
              a: "Yes. We plan redirects, maintain URL structures where needed, and design with Core Web Vitals and structured data in mind to protect and improve organic performance.",
            },
            {
              q: "How do you improve conversion rates?",
              a: "We focus on clarity, trust, and speed: strong hierarchy, social proof, optimized media, simplified cart/checkout, and analytics-driven A/B testing to validate improvements.",
            },
            {
              q: "Will the design be mobile-optimized?",
              a: "Absolutely. We use mobile-first layouts, touch-friendly controls, compressed assets, and clear CTAs to ensure a fast, frictionless mobile buying experience.",
            },
            {
              q: "Do you provide ongoing optimization?",
              a: "Yes. We offer ongoing CRO support, experiment roadmaps, UX audits, and iterative design updates to keep performance improving over time.",
            },
            {
              q: "Which tools do you use?",
              a: "We design in Figma with component libraries and prototypes. For testing and analytics we align with your stack—GA4, GTM, Hotjar, Optimizely, or similar.",
            },
            {
              q: "What does ecommerce design cost?",
              a: "Pricing depends on scope, pages, and testing depth. Target ranges: focused design sprints from ~$3k; comprehensive redesigns with CRO and testing from ~$10k-$30k+. We’ll tailor a proposal to your needs.",
            },
          ]}
        />
      </section>

      <CTA />
    </>
  );
}
