import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kytwo",
  description:
    "Contact Kytwo to discuss your ecommerce project. We typically respond within one business day with expert guidance on next steps.",
  keywords: [
    "contact web development agency",
    "hire web developers",
    "mobile app development consultation",
    "web design agency contact",
    "B2B development services",
    "eCommerce development consultation",
    "project inquiry",
    "get quote",
    "web development quote",
    "software development consultation",
  ],
  openGraph: {
    title: "Contact Kytwo",
    description:
      "Get in touch with Kytwo. We respond within 24 hours with expert ecommerce advice and next steps.",
    url: "/contact",
    siteName: "Kytwo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Kytwo — Let's Build Your Next Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kytwo",
    description:
      "Get in touch with our team. We respond within 24 hours with expert ecommerce consultation.",
    images: ["/og.png"],
    creator: "@kytwotech",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kytwo",
    description:
      "Get in touch with Kytwo for web development, mobile app development, and eCommerce solutions. We respond within 24 hours.",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Kytwo",
      email: "hello@kytwo.com",
      url: baseUrl,
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@kytwo.com",
        contactType: "Customer Service",
        availableLanguage: "English",
        areaServed: "Worldwide",
      },
      sameAs: [
        "https://twitter.com/kytwotech",
        "https://linkedin.com/company/kytwo",
      ],
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens after I submit the form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within one business day, our team will review your details and reach out with next steps—usually to schedule a quick discovery call so we can understand your goals, timelines, and whether we're a good fit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work under NDAs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If required, we'll sign your NDA before we dive into any sensitive details about your product or roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of projects do you take on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We partner with startups and growing brands on web apps, SaaS products, dashboards, and marketing sites that need both design and development.",
        },
      },
      {
        "@type": "Question",
        name: "What's your typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most engagements start with a short discovery phase. From there, timelines depend on scope, but we'll always give you clear milestones and updates.",
        },
      },
      {
        "@type": "Question",
        name: "Can we start small and expand later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Many clients start with a smaller scope—like an MVP or a single product area—and then continue working with us as they scale.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  );
}
