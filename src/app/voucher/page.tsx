import type { Metadata } from "next";
import VoucherPageClient from "./VoucherPageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Claim Your $300 Ecommerce Development Voucher",
  description:
    "Get a $300 voucher toward your next ecommerce strategy, design, or development project with Kytwo. One voucher per person/project, valid for 3 months.",
  openGraph: {
    title: "Claim Your $300 Ecommerce Development Voucher | Kytwo",
    description:
      "Get a $300 voucher toward your next ecommerce strategy, design, or development project with Kytwo. One voucher per person/project, valid for 3 months.",
    url: `${siteUrl}/voucher`,
    type: "website",
    images: [
      { url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Kytwo — $300 Ecommerce Development Voucher" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/voucher",
  },
};

export default function VoucherPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
  const url = `${baseUrl}/voucher`;

  const voucherSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "$300 Kytwo Voucher",
    description:
      "A $300 voucher toward strategy, UX/UI design, or development work with Kytwo. One voucher per person and per project, valid for 3 months from issue.",
    url,
    category: "Ecommerce Development",
    eligibleRegion: "Worldwide",
    eligibleCustomerType: "Business",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: 300,
      priceCurrency: "USD",
    },
    seller: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voucherSchema) }}
      />
      <VoucherPageClient />
    </>
  );
}
