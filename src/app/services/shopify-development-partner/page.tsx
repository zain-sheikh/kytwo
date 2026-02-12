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
import { Store } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

export const metadata: Metadata = {
  title: "Trusted Shopify Development Partner for stores",
  description:
    "Kytwo is a Shopify development partner that builds stores and sticks around. Migrations, custom themes, Shopify Plus, and ongoing support. No handoff-and-run.",
  keywords: [
    "shopify development partner",
    "shopify partner agency",
    "shopify plus partner",
    "trusted shopify developer",
    "shopify development agency",
    "shopify partner program",
    "shopify expert partner",
    "shopify store development partner",
    "certified shopify partner",
    "shopify development services",
    "shopify migration partner",
    "shopify theme development partner",
    "shopify app development partner",
    "shopify ecommerce partner",
  ],
  openGraph: {
    title: "Shopify Development Partner | Kytwo",
    description:
      "Shopify development partner that builds stores and sticks around. Migrations, Plus builds, custom themes, and ongoing support. No disappearing after launch.",
    url: `${siteUrl}/services/shopify-development-partner`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Kytwo Shopify Development Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: "/services/shopify-development-partner",
  },
};

export default function ShopifyDevelopmentPartnerPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";
  const featuredQuestion =
    "What makes Kytwo different as a Shopify development partner?";
  const featuredAnswer =
    "We don't treat projects as one-offs. Once we build or migrate your store, we stick around. You get the same people on support and iterations. No handing you off to a different team. Plus we're transparent about timelines, costs, and technical tradeoffs. No surprises.";
  const faqItems = [
    {
      q: "What does a Shopify development partner offer vs. a freelancer?",
      a: "A freelancer can be great for small fixes. A Shopify development partner gives you a team, documented processes, and someone to call when things break. We've done hundreds of Shopify projects: migrations, Plus builds, custom checkouts. You're not betting on one person's availability.",
    },
    {
      q: "Do you do one-off projects or only retainer work?",
      a: "Both. A lot of clients start with a build or migration, then move to a retainer for updates and support. We're flexible. If you only need a one-time project, that's fine. If you want ongoing help, we're set up for that too.",
    },
    {
      q: "Can you handle Shopify Plus?",
      a: "Yeah. Custom checkout, wholesale channels, Script Editor, multi-currency. We've built on Plus for years. We work across all tiers, from Starter to Plus, depending on what you need.",
    },
    {
      q: "We're on Magento/WooCommerce. Can you migrate us to Shopify?",
      a: "Yes. We've migrated stores from Magento, WooCommerce, BigCommerce, and custom platforms. We handle products, customers, orders, and redirects for SEO. Timeline depends on catalog size and complexity. We'll scope it in discovery.",
    },
    {
      q: "What if something breaks after launch?",
      a: "We're still on it. Post-launch support is core to how we work as a Shopify development partner. Bug fixes, performance tweaks, content updates. We can set up a retainer or handle issues as they come. You won't be left with a store and nobody to call.",
    },
    {
      q: "How do we actually work together?",
      a: "Slack or email for day-to-day. Weekly syncs during active projects. We use Notion or similar for specs and decisions. You talk to the people building. No endless back-and-forth through account managers. We'll match whatever communication style works for you.",
    },
  ];
  const faqSchema = buildFaqSchema(featuredQuestion, featuredAnswer, faqItems);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shopify Development Partner",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description:
      "Shopify development partner: custom builds, migrations from WooCommerce/Magento/BigCommerce, Shopify Plus, and ongoing retainer support. We stick around after launch.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const features = [
    {
      title: "We stick around after launch",
      description:
        "Launch day isn't the finish line. We do migrations, builds, and redesigns, then offer retainer support for bugs, updates, and new features. No disappearing act once the project's done.",
    },
    {
      title: "Shopify Plus when you need it",
      description:
        "Custom checkout, wholesale, Script Editor, multi-currency. We've built on Plus for years. If you're considering the move up or already there, we know the platform.",
    },
    {
      title: "Migrations that don't tank your SEO",
      description:
        "301 redirects, URL mapping, structured data. We plan migrations so Google doesn't lose track of your pages. Your rankings and traffic stay intact.",
    },
    {
      title: "Liquid, themes, and the full stack",
      description:
        "Custom themes, section customization, app integrations, headless when it makes sense. We work in the Shopify ecosystem every day. Liquid, APIs, checkout extensibility.",
    },
    {
      title: "Realistic timelines",
      description:
        "A simple store can ship in 4–6 weeks. A complex migration or Plus build might be 10–14 weeks. We'll give you a clear timeline after we look at your requirements.",
    },
    {
      title: "You talk to the people doing the work",
      description:
        "No endless account-manager chain. Designers and developers are in the loop. You get direct answers, not filtered through three layers of people who've never touched the code.",
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
          { label: "Shopify Development Partner" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceHero
        title="YOUR TRUSTED SHOPIFY DEVELOPMENT"
        highlightText="PARTNER"
        subtitle="As your Shopify development partner, we build stores and stick around. No handoff-and-run. We're here for migrations, builds, and whatever comes next."
        imageSrc="/3d-fire.png"
        imageAlt="Shopify development partner"
      />

      {/* Narrative intro - human voice, keyword in first 100 words */}
      <section className="container py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="max-w-3xl">
            <p className="text-gray-100 text-base md:text-lg leading-relaxed">
              Most agencies build your store, send you the keys, and move on. As
              a Shopify development partner, we don't work that way. We've been
              building on Shopify since 2019: themes, migrations, Plus builds,
              custom checkouts. What we've learned is that the best work happens
              when we're in it for the long haul. You need a partner who
              understands your stack, remembers why decisions were made, and
              doesn't disappear when something breaks at 2am.
            </p>
            <p className="mt-6 text-gray-100 text-base md:text-lg leading-relaxed">
              Whether you're moving off Magento, launching a new brand, or
              scaling something that's outgrown its current setup. We act like
              an extension of your team. No ticket black holes. No jargon dumps.
              Just clear communication and work that actually ships.
            </p>
          </div>
          <div className="md:col-span-1 justify-self-center">
            <div className="hidden md:flex relative w-64 h-64 flex-shrink-0 justify-center items-center">
              <div className="absolute inset-0 rounded-full bg-[#008060]/25 border border-[#008060]/40 animate-float-slow" />
              <div className="absolute inset-4 rounded-full bg-[#96BF48]/20 border border-[#96BF48]/30 animate-float-slower" />
              <div className="absolute inset-8 rounded-full bg-[#004c3f]/20 border border-[#008060]/20 animate-float-slow-delay" />
              <div className="absolute rounded-full w-16 h-16 bg-gradient-to-br from-[#008060] to-[#96BF48] opacity-60 animate-pulse-glow blur-xl" />
              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-xl bg-[#008060]/20 backdrop-blur-sm border border-[#96BF48]/30">
                <Store
                  className="w-10 h-10 text-white"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeHelpSection
        subtitle="We work best with teams who want a Shopify development partner, not a one-off vendor."
        items={[
          "You're migrating from WooCommerce, Magento, or BigCommerce and need someone who's done it before",
          "You're on Shopify already but want custom checkout, wholesale, or features your current theme can't handle",
          "You're launching a new store and want it done right the first time, not patched together",
          "You've outgrown your current dev setup and need ongoing support, not just one-off projects",
          "You care about load times, Core Web Vitals, and SEO, and want a team that does too",
        ]}
      />

      <ServiceOverview
        title="WHAT YOU GET FROM YOUR SHOPIFY"
        highlightText="DEVELOPMENT PARTNER"
        features={features}
      />

      <ServiceCTA message="Want to talk through your Shopify project? We'll give you a straight answer." />
      {/* Real scenarios - concrete situations */}
      <section className="container py-10 md:py-14">
        <h2
          className="font-semibold text-white text-center uppercase leading-none mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "0.95",
          }}
        >
          TYPICAL SITUATIONS A SHOPIFY DEVELOPMENT
          <br />
          <span className="text-[#FDC448]">PARTNER HANDLES</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1rem] p-6 md:p-8 border border-white/10 bg-white/5">
            <h3 className="font-semibold text-white text-lg mb-3">
              Migration from another platform
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              You're on Magento, WooCommerce, or BigCommerce. It's slow,
              expensive to maintain, or your team has outgrown it. We move
              products, customers, orders, and set up redirects so Google
              doesn't forget you. Usually 6–12 weeks depending on catalog size
              and integrations.
            </p>
          </div>
          <div className="rounded-[1rem] p-6 md:p-8 border border-white/10 bg-white/5">
            <h3 className="font-semibold text-white text-lg mb-3">
              New store from scratch
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              Launching a new brand or spinning up a second store. We build the
              theme, configure payments and shipping, set up collections and
              navigation, and make sure it loads fast and converts. Simple
              builds: 4–6 weeks. Custom-heavy: 8–12 weeks.
            </p>
          </div>
          <div className="rounded-[1rem] p-6 md:p-8 border border-white/10 bg-white/5">
            <h3 className="font-semibold text-white text-lg mb-3">
              Shopify → Shopify Plus
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              You're ready for Plus: custom checkout, wholesale, Script Editor,
              lower transaction fees. We handle the migration, implement the
              features you need, and make sure nothing breaks. Typical timeline:
              8–14 weeks.
            </p>
          </div>
          <div className="rounded-[1rem] p-6 md:p-8 border border-white/10 bg-white/5">
            <h3 className="font-semibold text-white text-lg mb-3">
              Ongoing support and iteration
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              Store's live but you need ongoing support from a Shopify
              development partner: updates, new features, bug fixes, performance
              work. We offer retainer arrangements: fixed hours per month,
              priority support, no scrambling to find a dev every time something
              comes up.
            </p>
          </div>
        </div>
      </section>

      {/* Honesty section - builds trust */}
      <section className="container py-10 md:py-14">
        <div className="rounded-[1.2rem] bg-white p-6 md:p-10">
          <h3 className="font-semibold text-black text-xl md:text-2xl mb-4">
            When we're not the right fit ⚠️
          </h3>
          <p className="text-black text-sm md:text-base leading-relaxed">
            We're not a fit for tiny tweaks (a button color, a single text
            change. That's usually a 15-minute job for someone on your team).
            We're also not the cheapest option. If budget is the only constraint
            and you're okay with offshore, template-heavy work, there are
            cheaper routes. As a Shopify development partner, we focus on custom
            builds, migrations, and stores that need to perform. For teams who
            want a real partner, not a commodity dev shop.
          </p>
        </div>
      </section>

      {/* How we work day-to-day */}
      <section className="container py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="font-semibold text-white text-xl md:text-2xl mb-4">
              How we work day-to-day
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              We use Slack or email, whatever you prefer. During active
              projects, we typically do a weekly sync: progress, blockers,
              what's next. Specs and decisions live in Notion or your existing
              tools. You'll talk to the developers and designers directly. No
              relay through three layers of project managers.
            </p>
            <p className="mt-4 text-gray-200 text-sm md:text-base leading-relaxed">
              We're async-friendly (we work across time zones) but we'll adapt
              to your rhythm. Some clients want daily standups; others prefer a
              weekly check-in. We'll figure it out.
            </p>
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-white/5 p-6 md:p-8">
            <h4 className="font-semibold text-white mb-3">
              What to expect from us
            </h4>
            <ul className="text-gray-200 text-sm md:text-base space-y-2">
              <li>• Clear timelines before we start. No "we'll see"</li>
              <li>
                • Honest estimates: if something's going to take longer, we'll
                say so
              </li>
              <li>
                • Written handoff docs when we deliver. So your team can
                maintain it
              </li>
              <li>
                • Access to the codebase and credentials you need (it's yours)
              </li>
              <li>
                • Response within 24–48 hours on support requests (faster on
                retainer)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABar message="Want to talk through your Shopify project? We'll give you a straight answer." />

      <ProcessSection
        title="OUR SHOPIFY"
        highlightText="PARTNER PROCESS"
        steps={[
          {
            label: "FREE STEP #1",
            title: "Discovery & Partnership Alignment",
            gradient: "from-blue-400 to-blue-600",
            free: true,
            mt: "100",
          },
          {
            label: "STEP #2",
            title: "Strategy & Scope",
            gradient: "from-cyan-400 to-teal-500",
            mt: "100",
          },
          {
            label: "STEP #3",
            title: "Design & Planning",
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
            title: "Launch & Handoff",
            gradient: "from-lime-400 to-yellow-400",
            mt: "140",
          },
          {
            label: "STEP #6",
            title: "Ongoing Partnership",
            gradient: "from-orange-400 to-red-500",
            mt: "140",
          },
        ]}
      />

      <ServiceOfferings
        title="SHOPIFY DEVELOPMENT PARTNER"
        highlightText="SERVICES"
        offerings={[
          {
            title: "Store Builds & Migrations",
            items: [
              "New Shopify stores built from scratch: theme, products, checkout, shipping",
              "Migration from WooCommerce, Magento, BigCommerce: products, customers, orders",
              "Shopify to Shopify Plus moves with custom checkout and wholesale setup",
              "301 redirect mapping and structured data so SEO doesn't suffer",
              "Data cleanup, variant mapping, and media migration",
            ],
          },
          {
            title: "Custom Theme & Checkout",
            items: [
              "Custom themes in Liquid. No reliance on bloated theme marketplaces",
              "Section and block customization for flexible content",
              "Checkout customization (Plus): fields, scripts, post-purchase flows",
              "Mobile-first, fast-loading storefronts",
              "Headless Shopify when the use case warrants it",
            ],
          },
          {
            title: "Integrations & Apps",
            items: [
              "Payment gateways: Stripe, PayPal, and platform-native options",
              "ERP, CRM, 3PL: NetSuite, Salesforce, ShipStation, and similar",
              "App selection and configuration. We'll recommend what you actually need",
              "Custom API work when apps don't cover your edge cases",
              "Inventory sync, order routing, fulfillment hooks",
            ],
          },
          {
            title: "Ongoing Support & Retainers",
            items: [
              "Bug fixes, security patches, and platform updates",
              "New features and page builds as your roadmap evolves",
              "Performance tuning: Core Web Vitals, image optimization, caching",
              "Content updates, collection changes, and seasonal tweaks",
              "Slack or email support with clear response expectations",
            ],
          },
        ]}
      />
      <ServiceCTA message="Looking for a Shopify development partner? Tell us what you're building. We'll give you a straight answer." />

      <RelatedServices
        services={[
          {
            title: "Shopify Development",
            description:
              "Detailed Shopify development services from our partner team: custom themes, migrations, and store optimization.",
            href: "/services/shopify-development",
          },
          {
            title: "Ecommerce Platform Migration",
            description:
              "Move from any platform to Shopify with SEO-safe, zero-downtime migrations.",
            href: "/services/platform-migration",
          },
          {
            title: "Ecommerce Design",
            description:
              "Conversion-focused design for Shopify storefronts, product pages, and checkout.",
            href: "/services/ecommerce-design",
          },
        ]}
      />

      <section className="container py-10 lg:py-20">
        <FAQSection
          featuredQuestion={featuredQuestion}
          featuredAnswer={featuredAnswer}
          faqItems={faqItems}
        />
      </section>
      <CTA />
    </>
  );
}
