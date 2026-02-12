import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolioData";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import CTA from "@/components/CTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Portfolio — Ecommerce Projects & Case Studies",
  description:
    "Explore our portfolio of successful ecommerce and marketplace platforms. See how we've helped businesses achieve 3x sales growth and serve 100,000+ users.",
  keywords: [
    "ecommerce portfolio",
    "shopify projects",
    "marketplace development portfolio",
    "saas development projects",
    "ecommerce case studies",
    "conversion optimization projects",
    "portfolio examples",
  ],
  openGraph: {
    title: "Portfolio — Ecommerce Projects & Case Studies",
    description:
      "Explore our portfolio of successful ecommerce projects, marketplace platforms, and SaaS solutions.",
    url: `${siteUrl}/portfolio`,
    type: "website",
    images: [
      { url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Kytwo — Portfolio & Case Studies" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <ServiceHero
        title="OUR PORTFOLIO OF"
        highlightText="SHOPIFY SUCCESS STORIES"
        subtitle="Discover how we've helped businesses transform their online presence, drive revenue growth, and scale to serve thousands of users"
        imageSrc="/3d-fire.png"
        imageAlt="Portfolio of successful Shopify projects"
      />

      {/* Projects Grid */}
      <section className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.industry} project`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm mb-2">
                    <span>{project.industry}</span>
                    <span>•</span>
                    <span>{project.flag}</span>
                    <span>{project.location}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#FDC448]">
                        {result.value}
                      </span>
                      <span className="text-sm text-gray-500">
                        {result.metric}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#FDC448] font-semibold group-hover:gap-4 transition-all">
                  <span>View Case Study</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-10 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#FDC448] mb-2">
              {projects.length}+
            </div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#FDC448] mb-2">
              $550k+
            </div>
            <div className="text-gray-400">Monthly Sales Generated</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#FDC448] mb-2">
              100k+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#FDC448] mb-2">
              3x
            </div>
            <div className="text-gray-400">Average Sales Growth</div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
