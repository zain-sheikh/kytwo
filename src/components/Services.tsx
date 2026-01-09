import { Globe, FileText, Settings, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Design and Technology Agency Services",
    provider: {
      "@type": "Organization",
      name: "Kytwo",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kytwo Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Professional user interface and user experience design services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design",
            description: "Custom web design services for businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Design",
            description: "Mobile application design services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Design",
            description: "High-converting landing page design services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding",
            description: "Complete branding and identity design services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web development and web application services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native and cross-platform mobile application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CMS Development",
            description:
              "Content management system development and customization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development",
            description: "Custom software development services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP & CRM Development",
            description:
              "Enterprise resource planning and customer relationship management system development",
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
        WE TAKE BRANDS{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
          TO THE TOP 1%
        </span>
      </h2>
      <div className="relative z-10 bg-[#dee2ff] rounded-[0.7rem] md:rounded-[2rem] text-black">
        <div className="grid  gap-4 md:gap-10 grid-cols-1 xs:grid-cols-2  py-3 md:py-6 md:gap-2 lg:py-10 px-3 md:px-6 lg:px-10 m-0">
          {/* Design Card LINK */}
          <div className="group rounded-[0.7rem] md:rounded-[1.5rem] p-3 md:p-10 pb-3 md:pb-5 bg-white ">
            <div className="flex items-center gap-2 justify-between">
              <h3 className="font-semibold text-center justify-center !text-[clamp(1.1rem,3vw,3rem)] max-xs:!text-[1.5rem]">
                Design
              </h3>
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
    max-xs:w-[10vw] max-xs:h-[10vw]
    flex items-center justify-center transition-all duration-300
    -mr-[10%]"
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
                    alt="UI/UX design and web design services icon"
                    width={80}
                    height={80}
                    className="w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
    max-xs:w-[10vw] max-xs:h-[10vw]
    bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full animate-gradient border border-white"
                  />
                </div>
              </div>
            </div>
            <hr className="my-2 md:my-4 border-gray-400" />
            <ul
              className="font-semibold text-gray-800 text-[clamp(0.8rem,2vw,1.5rem)] max-xs:font-normal max-xs:text-[1rem]"
              style={{ lineHeight: "1.5" }}
            >
              <li className="py-3 flex items-center gap-3">UI/UX Design</li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">Web Design</li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">
                Mobile App Design
              </li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">
                Landing Page Design
              </li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">Branding</li>
            </ul>
          </div>

          {/* Development Card LINK */}

          <div className="group rounded-[0.7rem] md:rounded-[1.5rem] p-3 md:p-10 pb-3 md:pb-5 bg-white">
            <div className="flex  items-center gap-2 justify-between">
              <h3 className="font-semibold text-center justify-center !text-[clamp(1.1rem,3vw,3rem)] max-xs:!text-[1.5rem]">
                Development
              </h3>

              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
          w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
          max-xs:w-[10vw] max-xs:h-[10vw]
          flex items-center justify-center transition-all duration-300
          -mr-[10%]"
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
                    alt="Web development and mobile app development services icon"
                    width={80}
                    height={80}
                    className="w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw]
          max-xs:w-[10vw] max-xs:h-[10vw]
          bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full animate-gradient border border-white"
                  />
                </div>
              </div>
            </div>

            <hr className="my-2 md:my-4 border-gray-400" />

            <ul
              className="font-semibold text-gray-800 text-[clamp(0.8rem,2vw,1.5rem)] max-xs:font-normal max-xs:text-[1rem]"
              style={{ lineHeight: "1.5" }}
            >
              <li className="py-3 flex items-center gap-3">Web Development</li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">
                Mobile App Development
              </li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">CMS Development</li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">
                Software Development
              </li>
              <hr className="my-2 md:my-4 border-gray-400" />
              <li className="py-3 flex items-center gap-3">
                ERP & CRM Development
              </li>
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
            Want bold design or rock-solid code? You’ll get both here.
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
