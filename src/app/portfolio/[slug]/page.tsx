import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
} from "@/lib/portfolioData";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import CTA from "@/components/CTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.shortDescription,
    keywords: [
      project.industry.toLowerCase(),
      "ecommerce case study",
      "portfolio project",
      project.title.toLowerCase(),
    ],
    openGraph: {
      title: `${project.title} — Portfolio Case Study`,
      description: project.shortDescription,
      url: `${siteUrl}/portfolio/${slug}`,
      type: "website",
      images: [
        {
          url: project.image
            ? (project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`)
            : `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
      project.image
        ? (project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`)
        : `${siteUrl}/og.png`,
    ],
    },
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find related projects (exclude current project)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="container py-10 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
            <span>{project.industry}</span>
            <span>•</span>
            <span>{project.flag}</span>
            <span>{project.location}</span>
          </div>

          <h1 className="font-semibold !text-[clamp(2rem,8vw,4.5rem)] mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            {project.shortDescription}
          </p>

          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="container py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-6 border border-gray-800"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FDC448] mb-2">
                  {result.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 mb-1">
                  {result.metric}
                </div>
                {result.description && (
                  <div className="text-xs text-gray-500">
                    {result.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container py-10 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#FDC448]">
                  Timeline
                </h3>
                <p className="text-gray-300">{project.timeline}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#FDC448]">
                  Client
                </h3>
                <p className="text-gray-300">{project.clientName}</p>
              </div>

              {project.liveUrl && (
                <div>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FDC448] hover:text-white transition-colors"
                  >
                    <span>View Live Site</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="container py-10 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Challenge
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.challenge}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Solution
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.solution}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="container py-10 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FDC448] mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="container py-10 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="text-4xl text-[#FDC448] mb-4">"</div>
              <p className="text-xl md:text-2xl text-black mb-6 italic">
                {project.testimonial.text}
              </p>
              <div>
                <div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src="/star.png"
                      alt="5-star client rating"
                      width={16}
                      height={16}
                      className="inline-block align-middle star-anim"
                      style={{
                        animationDelay: `${i * 0.15}s`,
                        height: "0.7em",
                        width: "0.7em",
                        position: "relative",
                        top: "-0.1em",
                        marginLeft: "0.1em",
                      }}
                    />
                  ))}
                </div>
                <div className="font-bold text-black">
                  {project.testimonial.author}
                </div>
                {project.testimonial.role && (
                  <div className="text-black">{project.testimonial.role}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="container py-10 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group bg-white/5 border border-gray-800 rounded-xl overflow-hidden hover:border-[#FDC448] transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#FDC448] transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceCTA message="Explore other Shopify Plus services that often pair well with this engagement." />
      <CTA />
    </>
  );
}
