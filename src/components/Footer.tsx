import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" relative mt-20 pb-5">
      {/* Main Footer Container */}
      <div className="relative z-10 text-white rounded-[2rem] md:rounded-[3rem] overflow-hidden ">
        {/* Top CTA Section */}

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 p-8 md:p-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col  space-y-8">
            <div className="flex items-center gap-3">
              {/* Using your logo placeholder */}
              <Image
                src="/logo/logo-white.png"
                alt="Kytwo logo - Ecommerce development agency"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain "
              />
              <span className="font-bold text-2xl md:text-3xl tracking-tight">
                KYTWO
              </span>
            </div>

            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Premium ecommerce development agency building high-converting
              online stores and marketplace platforms that drive sales and
              revenue.
            </p>

            {/* Socials */}
            {/*<div className="flex gap-4 ">*/}
            {/*  {[Instagram, Twitter, Linkedin].map((Icon, i) => (*/}
            {/*    <a*/}
            {/*      key={i}*/}
            {/*      href="#"*/}
            {/*      className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#FDC448] hover:text-black hover:border-[#FDC448] transition-all duration-300"*/}
            {/*    >*/}
            {/*      <Icon className="w-5 h-5" />*/}
            {/*    </a>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>

          {/* Services Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-xl mb-6 ">SERVICES</h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>
                <Link
                  href="/voucher"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  $300 voucher
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shopify-development"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Shopify development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/woocommerce-development"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  WooCommerce development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-ecommerce-platform"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Custom ecommerce platform development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketplace-development"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Marketplace development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-design"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Ecommerce design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/platform-migration"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Platform migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-solutions"
                  className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                >
                  Ecommerce solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xl mb-6 ">CONTACT</h4>
            <ul className="space-y-6 text-gray-300 text-lg">
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 " />
                <a
                  href="mailto:hello@kytwo.com"
                  className="hover:text-white transition-colors"
                >
                  hello@kytwo.com
                  <br />
                  <span className="text-sm text-gray-500">
                    We reply within 24 hours
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 " />
                <span>
                  Pakistan, Lahore.
                  <br />
                  <span className="text-sm text-gray-500">
                    Serving clients worldwide
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm md:text-base">
          <p>
            &copy; {new Date().getFullYear()} KYTWO Agency. All rights reserved.
          </p>
        </div>
      </div>
      {/* Big Footer Text Background (Optional Artistic touch)
      <div className="w-full text-center mt-2 opacity-20 pointer-events-none select-none max-md:hidden">
        <h1 className="text-[12vw] font-bold text-[#3719ca] leading-none">
          KYTWO
        </h1>
      </div> */}
    </footer>
  );
}
