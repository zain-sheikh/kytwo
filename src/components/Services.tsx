import { Globe, FileText, Settings, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServicesProps {
  ctaMessage?: string;
}

export default function Services({
  ctaMessage = "Building ecommerce stores that convert visitors into customers and drive revenue.",
}: ServicesProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const ecommercePlatforms = [
    {
      name: "Shopify Development",
      href: "/services/shopify-development",
      hasArrow: true,
    },
    {
      name: "WooCommerce Development",
      href: "/services/woocommerce-development",
      hasArrow: true,
    },
    {
      name: "Custom Ecommerce Platform",
      href: "/services/custom-ecommerce-platform",
      hasArrow: true,
    },
    {
      name: "Marketplace Development",
      href: "/services/marketplace-development",
      hasArrow: true,
    },
    {
      name: "Ecommerce Design",
      href: "/services/ecommerce-design",
      hasArrow: true,
    },
  ];

  const ecommerceSolutions = [
    {
      name: "Payment Integration",
      href: null,
      hasArrow: false,
    },
    {
      name: "Inventory Management",
      href: null,
      hasArrow: false,
    },
    {
      name: "Ecommerce SEO",
      href: null,
      hasArrow: false,
    },
    {
      name: "Ecommerce Mobile App",
      href: null,
      hasArrow: false,
    },
    {
      name: "Conversion Optimization",
      href: null,
      hasArrow: false,
    },
  ];

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Development Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kytwo Ecommerce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Store Development",
            description:
              "Custom ecommerce website development and online store creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shopify Development",
            description:
              "Professional Shopify store design and development services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WooCommerce Development",
            description:
              "WooCommerce store development and customization services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketplace Development",
            description: "Multi-vendor marketplace platform development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Design",
            description:
              "Professional ecommerce UI/UX design for online stores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payment Gateway Integration",
            description:
              "Secure payment processing integration for ecommerce stores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inventory Management",
            description: "Ecommerce inventory management system development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce SEO",
            description:
              "Search engine optimization for ecommerce websites and product pages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Mobile App",
            description: "Mobile ecommerce app development for iOS and Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Conversion Optimization",
            description:
              "Conversion rate optimization services to increase ecommerce sales",
          },
        },
      ],
    },
  };

  return (
    <section className="container relative py-10 scroll-mt-20" id="services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <div>
        <div
          className="max-md:hidden absolute top-10 left-0 w-full h-full  blur-[4rem] opacity-100 z-0"
          style={{
            background:
              "linear-gradient(to bottom right,rgb(255, 252, 252) 10%,rgb(64, 0, 82) 20%,rgb(38, 36, 106) 20%)",
          }}
        ></div>
        {/* <div
          className="max-md:hidden absolute top-40 left-30 w-[80%] h-[80%]  blur-[5rem] opacity-100 z-0"
          style={{
            background:
              "linear-gradient(to bottom right,rgb(255, 252, 252) 10%,rgb(64, 0, 82) 20%,rgb(38, 36, 106) 20%)",
          }}
        ></div> */}
      </div>

      <h2 className="relative left-0 right-0  font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,7rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        BUILDING ECOMMERCE STORES THAT{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
          DRIVE REVENUE
        </span>
      </h2>
      <div className="relative z-10 bg-[#dee2ff] rounded-[0.7rem] md:rounded-[2rem] text-black">
        <div className="grid  gap-4 md:gap-10 vxs:grid-cols-2 grid-cols-1 max-sm:gap-2  py-3 max-md:p-2 md:py-6 md:gap-2 lg:py-10 px-3 md:px-6 lg:px-10 m-0">
          {/* Design Card LINK */}
          <div className=" rounded-[0.7rem] md:rounded-[1.5rem] p-3 md:p-10 pb-3 md:pb-5 bg-white ">
            <Link
              href="/services/ecommerce-platforms"
              className="group flex items-center gap-2 max-sm:gap-0 justify-between"
            >
              <h3 className="font-semibold justify-center !text-[clamp(1.1rem,3vw,3rem)]  max-xs:!text-sm">
                Ecommerce Platforms
              </h3>
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
    max-xs:w-[7vw] max-xs:h-[7vw] aspect-square
    flex items-center justify-center transition-all duration-300
    -mr-[20%] sm:mr-[-10%] max-vxs:mr-[0%]"
                  >
                    <div className="relative w-1/2 h-1/2 overflow-hidden">
                      <div className="relative overflow-hidden w-full h-full ">
                        <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full " />
                        <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 " />
                      </div>
                    </div>
                  </div>

                  <Image
                    src="/design.png"
                    alt="Ecommerce platform development services icon"
                    width={80}
                    height={80}
                    className="w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
    max-xs:w-[7vw] max-xs:h-[7vw] aspect-square
    bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full animate-gradient border border-white"
                  />
                </div>
              </div>
            </Link>
            <hr className="my-2 md:my-4 border-gray-400" />
            <ul
              className="font-semibold text-gray-800 text-[clamp(0.8rem,2vw,1.5rem)]  max-xs:text-xs"
              style={{ lineHeight: "1.5" }}
            >
              {ecommercePlatforms.map((service, index) => (
                <li
                  key={service.name}
                  className={`min-h-[75px] max-vxs:min-h-auto w-full ${
                    index > 0 ? "border-t border-gray-400 w-full" : ""
                  } flex items-center`}
                >
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="py-2 group flex items-center justify-between gap-3  block w-full"
                    >
                      <span>{service.name}</span>
                      {service.hasArrow && (
                        <div
                          className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:w-[3vw] lg:h-[3vw]
          max-xs:w-[6vw] max-xs:h-[6vw] aspect-square
    flex items-center justify-center transition-all duration-300
    "
                        >
                          <div className="relative w-1/2 h-1/2 overflow-hidden">
                            <div className="relative overflow-hidden w-full h-full ">
                              <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full " />
                              <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 " />
                            </div>
                          </div>
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div className="py-2 flex items-center gap-3">
                      <span>{service.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Development Card LINK */}

          <div className=" rounded-[0.7rem] md:rounded-[1.5rem] p-3 md:p-10 pb-3 md:pb-5 bg-white">
            <Link
              href="/services/ecommerce-solutions"
              className="group flex  items-center gap-2 max-sm:gap-0 justify-between"
            >
              <h3 className="font-semibold  justify-center !text-[clamp(1.1rem,3vw,3rem)] max-xs:!text-sm">
                Ecommerce Solutions
              </h3>

              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
          w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
          max-xs:w-[7vw] max-xs:h-[7vw] aspect-square
          flex items-center justify-center transition-all duration-300
          -mr-[20%] sm:mr-[-10%] max-vxs:mr-[0%]"
                  >
                    <div className="relative w-1/2 h-1/2 overflow-hidden">
                      <div className="relative overflow-hidden w-full h-full">
                        <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
                        <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                    </div>
                  </div>

                  <Image
                    src="/development.png"
                    alt="Ecommerce solutions and integrations services icon"
                    width={80}
                    height={80}
                    className="w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
          max-xs:w-[7vw] max-xs:h-[7vw]aspect-square
          bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full animate-gradient border border-white"
                  />
                </div>
              </div>
            </Link>

            <hr className="my-2 md:my-4 border-gray-400" />

            <ul
              className="font-semibold text-gray-800 text-[clamp(0.8rem,2vw,1.5rem)]  max-xs:text-xs"
              style={{ lineHeight: "1.5" }}
            >
              {ecommerceSolutions.map((service, index) => (
                <li
                  key={service.name}
                  className={`min-h-[75px] flex items-center max-vxs:min-h-auto ${
                    index > 0 ? "border-t border-gray-400 w-full" : ""
                  }`}
                >
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="py-3 group flex items-center justify-between gap-3 hover:text-[#3719ca] transition-colors block w-full"
                    >
                      <span>{service.name}</span>
                      {service.hasArrow && (
                        <div
                          className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
          max-xs:w-[7vw] max-xs:h-[7vw] aspect-square
    flex items-center justify-center transition-all duration-300
    "
                        >
                          <div className="relative w-1/2 h-1/2 overflow-hidden">
                            <div className="relative overflow-hidden w-full h-full ">
                              <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full " />
                              <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 " />
                            </div>
                          </div>
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div className="py-3 flex items-center gap-3 ">
                      <span>{service.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="relative flex gap-5 md:gap-3 items-center justify-between bg-[#382550cc] border border-[#a698c54d] rounded-[0.7rem] md:rounded-[2rem] text-black w-full h-[100px] mt-10 p-5 md:p-10 lg:p-15 max-sm:flex-col max-sm:h-auto max-sm:items-start"
        style={{
          boxShadow:
            "inset 1px 1px 3px #705a96,inset -8px -8px 7px #705a9640,inset -2px -2px 5px #705a96",
        }}
      >
        <div className="flex items-center gap-2 md:gap-5">
          <Image
            src="/logo/logo-white.png"
            alt="Kytwo logo - Design and technology agency"
            width={72}
            height={72}
            className=" w-14 h-auto object-contain sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 flex-shrink-0 bg-transparent"
          />
          <p
            className=" font-semibold text-white "
            style={{
              fontSize: "clamp(1rem, 2vw, 2rem)",
              lineHeight: "1",
            }}
          >
            {ctaMessage}
          </p>
        </div>
        <a
          href="/contact"
          className="flex items-center min-w-[6rem] max-sm:w-full justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-lg lg:text-2xl font-bold text-black border border-black px-2 py-3 sm:px-6 sm:py-3 text-center transition-all duration-300 relative overflow-hidden"
        >
          <span
            className="max-xs:text-[0.75rem] whitespace-nowrap"
            style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)" }}
          >
            BOOK A CALL
          </span>
        </a>
      </div>
    </section>
  );
}
