import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SnowCanvas from "@/components/Snow";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kytwo — Ecommerce Development Agency",
    template: "%s | Kytwo",
  },
  description:
    "Kytwo is an ecommerce development agency that builds high‑converting online stores and marketplace platforms using Shopify, WooCommerce, and custom ecommerce solutions.",
  keywords: [
    "ecommerce development agency",
    "online store development",
    "ecommerce website development",
    "Shopify development",
    "WooCommerce development",
    "custom ecommerce platform",
    "marketplace development",
    "ecommerce design",
    "online store design",
    "ecommerce SEO",
    "ecommerce conversion optimization",
    "payment gateway integration",
    "inventory management system",
    "B2B ecommerce development",
    "B2C ecommerce development",
    "multi-vendor marketplace",
    "ecommerce mobile app",
    "ecommerce consulting",
    "ecommerce migration",
    "ecommerce maintenance",
    "cart abandonment solutions",
    "product catalog management",
    "ecommerce analytics",
    "shopping cart development",
    "ecommerce platform integration",
  ],
  authors: [{ name: "Kytwo" }],
  creator: "Kytwo",
  publisher: "Kytwo",
  openGraph: {
    title: "Kytwo — Ecommerce Development Agency",
    description:
      "Ecommerce development agency building high-converting online stores and marketplace platforms with Shopify, WooCommerce, and custom ecommerce solutions.",
    url: siteUrl,
    siteName: "Kytwo",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo ecommerce development agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kytwo — Premium Ecommerce Development Agency",
    description:
      "7+ years of building high-converting ecommerce stores, marketplace platforms, and online shopping experiences. Shopify, WooCommerce, custom ecommerce solutions, and more.",
    images: [`${siteUrl}/og.png`],
    creator: "@kytwotech",
    site: "@kytwotech",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: `${siteUrl}/favicon.ico` }],
    apple: [{ url: `${siteUrl}/favicon.ico` }],
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
  category: "Ecommerce Development",
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
      "Leading ecommerce development agency specializing in custom online stores, marketplace platforms, Shopify development, WooCommerce stores, and ecommerce solutions that drive sales and revenue.",
    email: "hello@kytwo.com",
    foundingDate: "2017",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Ecommerce Development",
      "Online Store Development",
      "Marketplace Development",
      "Shopify Development",
      "WooCommerce Development",
      "Custom Ecommerce Platform",
      "Ecommerce Design",
      "Payment Gateway Integration",
      "Ecommerce SEO",
      "Ecommerce Conversion Optimization",
      "Inventory Management",
      "Multi-vendor Marketplace",
      "Ecommerce Mobile App",
    ],
    knowsAbout: [
      "Ecommerce Development",
      "Online Store Development",
      "Marketplace Platforms",
      "Shopify",
      "WooCommerce",
      "Ecommerce Design",
      "Payment Integration",
      "Ecommerce SEO",
      "React",
      "Next.js",
      "B2B Ecommerce",
      "B2C Ecommerce",
    ],
    sameAs: [
      "https://twitter.com/kytwotech",
      "https://linkedin.com/company/kytwo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@kytwo.com",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
  };

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Kytwo Ecommerce Development Services",
    url: baseUrl,
    description:
      "Premium ecommerce development services including custom online stores, marketplace platforms, Shopify stores, WooCommerce websites, and ecommerce solutions.",
    image: `${baseUrl}/logo/logo-white.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kytwo",
    url: baseUrl,
    description:
      "Premium ecommerce development agency building high-converting online stores and marketplace platforms. Specializing in Shopify, WooCommerce, and custom ecommerce solutions.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storeSchema),
          }}
        />
        <SnowCanvas />
        <Header />
        <main className="flex-1">{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
