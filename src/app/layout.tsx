import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import SnowCanvas from "@/components/Snow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com"
  ),
  title: {
    default: "Kytwo — Design & Tech Agency Taking Brands to the Top 1%",
    template: "%s | Kytwo",
  },
  description:
    "Kytwo is a design and technology agency specializing in UI/UX design, web development, mobile apps, and custom software for B2B brands. With 7+ years of experience, we build high-performance digital products that drive growth. Services include web design, mobile app development, CMS development, ERP & CRM solutions, and conversion optimization.",
  keywords: [
    "web development agency",
    "mobile app development agency",
    "UI UX design agency",
    "B2B web development",
    "custom software development",
    "web design agency",
    "mobile app design",
    "landing page design",
    "branding agency",
    "CMS development",
    "ERP development",
    "CRM development",
    "Next.js development",
    "React development",
    "conversion rate optimization",
    "CRO services",
    "SaaS development",
    "dashboard development",
    "eCommerce development",
    "digital product studio",
    "startup development agency",
    "B2B software development",
    "web application development",
    "responsive web design",
    "SEO optimized websites",
  ],
  authors: [{ name: "Kytwo" }],
  creator: "Kytwo",
  publisher: "Kytwo",
  openGraph: {
    title: "Kytwo — Design & Tech Agency Taking Brands to the Top 1%",
    description:
      "We help ambitious B2B brands reach the top 1% through exceptional design and development. Specializing in web apps, mobile apps, SaaS products, and custom software. 7+ years of delivering high-performance digital products.",
    url: "/",
    siteName: "Kytwo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kytwo — Design & Tech Agency Taking Brands to the Top 1%",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kytwo — Design & Tech Agency for Top 1% Brands",
    description:
      "7+ years of building scalable web, mobile, and custom software products for B2B brands. UI/UX design, web development, mobile apps, and more.",
    images: ["/og.png"],
    creator: "@kytwo",
    site: "@kytwo",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kytwo",
    url: baseUrl,
    logo: `${baseUrl}/logo/logo-white.png`,
    description:
      "Design and technology agency specializing in UI/UX design, web development, mobile apps, and custom software for B2B brands.",
    email: "hello@kytwo.com",
    foundingDate: "2017",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Custom Software Development",
      "CMS Development",
      "ERP & CRM Development",
      "Branding",
      "Landing Page Design",
      "Conversion Rate Optimization",
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "B2B Software",
      "SaaS Development",
      "E-commerce Development",
    ],
    sameAs: ["https://twitter.com/kytwo", "https://linkedin.com/company/kytwo"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@kytwo.com",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kytwo",
    url: baseUrl,
    description:
      "Design and technology agency taking B2B brands to the top 1% through exceptional web, mobile, and software development.",
    publisher: {
      "@type": "Organization",
      name: "Kytwo",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/contact?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <SnowCanvas />
        <Header />
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
