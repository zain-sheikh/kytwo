"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ServicesMegaMenuProps = {
  onNavigate?: () => void;
};

const ecommercePlatforms = [
  { name: "Shopify Development", href: "/services/shopify-development" },
  {
    name: "WooCommerce Development",
    href: "/services/woocommerce-development",
  },
  {
    name: "Custom Ecommerce Platform",
    href: "/services/custom-ecommerce-platform",
  },
  {
    name: "Marketplace Development",
    href: "/services/marketplace-development",
  },
  { name: "Ecommerce Design", href: "/services/ecommerce-design" },
];

const ecommerceSolutions = [
  { name: "Payment Integration", href: "/services/ecommerce-solutions" },
  { name: "Inventory Management", href: "/services/ecommerce-solutions" },
  { name: "Ecommerce SEO", href: "/services/ecommerce-solutions" },
  { name: "Ecommerce Mobile App", href: "/services/ecommerce-solutions" },
  { name: "Conversion Optimization", href: "/services/ecommerce-solutions" },
];

export default function ServicesMegaMenu({
  onNavigate,
}: ServicesMegaMenuProps) {
  return (
    <div
      className="w-[min(980px,calc(100vw-2rem))] rounded-[1.25rem] md:bg-[#dee2ff] bg-white  p-3 md:p-4 text-black md:border border-black/10"
      role="dialog"
      aria-label="Services menu"
    >
      <div className="flex items-center justify-between px-2 pb-3">
        <div className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-black/70">
          Services
        </div>
        <Link
          href="/services"
          onClick={onNavigate}
          className="text-xs md:text-sm font-semibold underline underline-offset-4 hover:opacity-80"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-2">
        <div className="rounded-[1rem] bg-white p-4 md:p-6">
          <Link
            href="/services/ecommerce-platforms"
            onClick={onNavigate}
            className="group flex items-center justify-between gap-4"
          >
            <h3 className="font-semibold text-lg md:text-xl">
              Ecommerce Platforms
            </h3>

            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <div
                  className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
                  w-9 h-9 md:w-10 md:h-10 aspect-square
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
                  src="/design.png"
                  alt="Ecommerce platforms"
                  width={80}
                  height={80}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full border border-white"
                />
              </div>
            </div>
          </Link>

          <hr className="my-3 border-gray-300" />

          <ul className="text-sm md:text-base font-semibold text-gray-800">
            {ecommercePlatforms.map((service, idx) => (
              <li key={service.name}>
                {idx > 0 && <hr className="my-2 border-gray-200" />}
                <Link
                  href={service.href}
                  onClick={onNavigate}
                  className="py-2 group flex items-center justify-between gap-3 "
                >
                  <span>{service.name}</span>
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
                    w-8 h-8 flex items-center justify-center transition-all duration-300"
                  >
                    <div className="relative w-1/2 h-1/2 overflow-hidden">
                      <div className="relative overflow-hidden w-full h-full">
                        <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
                        <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1rem] bg-white p-4 md:p-6">
          <Link
            href="/services/ecommerce-solutions"
            onClick={onNavigate}
            className="group flex items-center justify-between gap-4"
          >
            <h3 className="font-semibold text-lg md:text-xl">
              Ecommerce Solutions
            </h3>

            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <div
                  className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
                  w-9 h-9 md:w-10 md:h-10 aspect-square
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
                  alt="Ecommerce solutions"
                  width={80}
                  height={80}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-tr from-[#12009c] to-[#1902c6] rounded-full border border-white"
                />
              </div>
            </div>
          </Link>

          <hr className="my-3 border-gray-300" />

          <ul className="text-sm md:text-base font-semibold text-gray-800">
            {ecommerceSolutions.map((service, idx) => (
              <li key={service.name}>
                {idx > 0 && <hr className="my-2 border-gray-200" />}
                <div className="py-2 group flex items-center justify-between gap-3">
                  <span>{service.name}</span>
                  <div
                    className="
                    w-8 h-8"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
