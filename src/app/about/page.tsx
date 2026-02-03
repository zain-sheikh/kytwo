import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CTABar from "@/components/CTABar";
import ProcessSection from "@/components/ProcessSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "About Kytwo — Premium Ecommerce Development & Design Agency",
  description:
    "Kytwo is an ecommerce development agency with 6+ years of experience building high-converting online stores, marketplace platforms, and custom ecommerce solutions using Shopify, WooCommerce, and custom platforms.",
  keywords: [
    "ecommerce development agency",
    "about kytwo",
    "ecommerce developers",
    "shopify development agency",
    "woocommerce development agency",
    "custom ecommerce platform developers",
    "marketplace development agency",
    "ecommerce design agency",
    "online store development company",
    "ecommerce consulting agency",
    "ecommerce development team",
    "professional ecommerce developers",
    "ecommerce agency experience",
    "ecommerce development services",
  ],
  openGraph: {
    title: "About Kytwo — Premium Ecommerce Development & Design Agency",
    description:
      "Learn about Kytwo, an ecommerce development agency with 6+ years of experience building high-converting online stores and marketplace platforms.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const whatWeDoFeatures = [
    {
      title: "Ecommerce Development",
      description:
        "Custom online stores using Shopify, WooCommerce, and custom platforms. From setup to advanced customizations, we handle every aspect of your store development.",
      href: "/services/custom-ecommerce-platform",
    },
    {
      title: "Marketplace Development",
      description:
        "Multi-vendor marketplace platforms that enable businesses to scale by connecting buyers and sellers in a seamless, secure environment.",
      href: "/services/marketplace-development",
    },
    {
      title: "Ecommerce Design",
      description:
        "User experiences that convert. We focus on UX/UI design that guides visitors through your store and turns them into customers.",
      href: "/services/ecommerce-design",
    },
    {
      title: "Platform Migration",
      description: (
        <>
          Zero-downtime migrations between{" "}
          <Link
            href="/services/shopify-development"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            Shopify
          </Link>
          ,{" "}
          <Link
            href="/services/woocommerce-development"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            WooCommerce
          </Link>
          , Magento, BigCommerce, Square, and{" "}
          <Link
            href="/services/custom-ecommerce-platform"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            custom platforms
          </Link>
          . We protect your SEO and ensure seamless transitions with zero
          downtime.
        </>
      ),
    },
    {
      title: "Conversion Optimization",
      description:
        "Performance optimization and conversion rate improvements that help your store convert visitors into customers and drive revenue.",
      href: "/services/ecommerce-solutions",
    },
    {
      title: "Ecommerce Consulting",
      description:
        "Strategic guidance on platform selection, feature planning, and growth strategies to help your business scale online.",
      href: "/services/ecommerce-solutions",
    },
  ];

  const ourApproachFeatures = [
    {
      title: "Results-Driven Development",
      description:
        "Every store we build is optimized for conversions. We focus on performance, user experience, and revenue-driving features that help your business grow.",
    },
    {
      title: "Technical Excellence",
      description: (
        <>
          We stay current with the latest ecommerce technologies and best
          practices. Our developers are experts in{" "}
          <Link
            href="/services/shopify-development"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            Shopify
          </Link>
          ,{" "}
          <Link
            href="/services/woocommerce-development"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            WooCommerce
          </Link>
          , and{" "}
          <Link
            href="/services/custom-ecommerce-platform"
            className="text-white underline hover:text-[#FDC448] transition-colors"
          >
            custom platform
          </Link>{" "}
          development.
        </>
      ),
    },
    {
      title: "Client-Focused Partnership",
      description:
        "We work closely with our clients throughout the development process. Your success is our success, and we're committed to delivering solutions that exceed expectations.",
    },
  ];

  const whoWeHelpItems = [
    "DTC brands launching their first online store or scaling existing operations",
    <>
      Businesses{" "}
      <Link
        href="/services/platform-migration"
        className="text-white underline hover:text-[#FDC448] transition-colors"
      >
        migrating between ecommerce platforms
      </Link>{" "}
      without losing SEO or revenue
    </>,
    <>
      Companies building{" "}
      <Link
        href="/services/marketplace-development"
        className="text-white underline hover:text-[#FDC448] transition-colors"
      >
        custom marketplace platforms
      </Link>{" "}
      for multi-vendor operations
    </>,
    <>
      Brands needing{" "}
      <Link
        href="/services/ecommerce-design"
        className="text-white underline hover:text-[#FDC448] transition-colors"
      >
        conversion-optimized designs
      </Link>{" "}
      and user experiences
    </>,
    "Teams requiring ongoing maintenance, support, and optimization services",
  ];

  const processSteps = [
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
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <ServiceHero
        title="KYTWO —"
        highlightText="PREMIUM ECOMMERCE DEVELOPMENT & DESIGN AGENCY"
        subtitle={
          <>
            6+ years of building high-converting B2B and DTC ecommerce stores,{" "}
            <Link
              href="/services/marketplace-development"
              className="text-black underline hover:text-[#3b27cf] transition-colors"
            >
              marketplace platforms
            </Link>
            , and{" "}
            <Link
              href="/services/custom-ecommerce-platform"
              className="text-black underline hover:text-[#3b27cf] transition-colors"
            >
              custom ecommerce solutions
            </Link>
          </>
        }
        imageSrc="/3d-fire.png"
        imageAlt="About Kytwo ecommerce development agency"
        backgroundColor="white"
        highlightColor="#3b27cf"
      />

      <WhoWeHelpSection
        title="WHO WE ARE"
        subtitle="An ecommerce development agency helping businesses turn their products into sales by building high-performing online stores."
        items={whoWeHelpItems}
      />

      <ServiceOverview
        title="WHAT WE"
        highlightText="DO"
        features={whatWeDoFeatures}
        showArrow={true}
      />

      <CTABar message="Ready to build a high-converting ecommerce store? Let's discuss your project." />

      <ServiceOverview
        title="OUR"
        highlightText="APPROACH"
        features={ourApproachFeatures}
      />
      <ProcessSection
        title="OUR"
        highlightText="DEVELOPMENT PROCESS"
        steps={processSteps}
      />

      {/* Why Choose Us Section */}
      <section className="container py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white">
            <h2
              className="font-semibold text-white uppercase leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              WHY CHOOSE
              <br />
              KYTWO
            </h2>
            <p
              className="mt-4 text-gray-200"
              style={{
                fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              }}
            >
              What sets us apart as your ecommerce development partner.
            </p>
          </div>

          <div className="w-full lg:w-2/3 space-y-3">
            <div className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <div>
                <strong className="text-white">6+ Years of Experience:</strong>{" "}
                We've been building ecommerce stores since 2019, working with
                businesses of all sizes across industries.
              </div>
            </div>
            <div className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <div>
                <strong className="text-white">Platform Expertise:</strong> Deep
                knowledge of{" "}
                <Link
                  href="/services/shopify-development"
                  className="text-white underline hover:text-[#FDC448] transition-colors"
                >
                  Shopify
                </Link>
                ,{" "}
                <Link
                  href="/services/woocommerce-development"
                  className="text-white underline hover:text-[#FDC448] transition-colors"
                >
                  WooCommerce
                </Link>
                , and{" "}
                <Link
                  href="/services/custom-ecommerce-platform"
                  className="text-white underline hover:text-[#FDC448] transition-colors"
                >
                  custom ecommerce platform
                </Link>{" "}
                development.
              </div>
            </div>
            <div className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <div>
                <strong className="text-white">Conversion-Focused:</strong>{" "}
                Every store we build is optimized to convert visitors into
                customers and drive revenue.
              </div>
            </div>
            <div className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <div>
                <strong className="text-white">End-to-End Services:</strong>{" "}
                From strategy and design to development and optimization, we
                handle every aspect of your ecommerce project.
              </div>
            </div>
            <div className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <div>
                <strong className="text-white">Proven Track Record:</strong>{" "}
                We've helped numerous businesses launch successful online stores
                and scale their ecommerce operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
