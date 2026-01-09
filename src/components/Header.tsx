"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#showcase" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 backdrop-blur-md z-50 bg-background/50">
        <div className="mx-auto container border-animate px-4 py-8 mt-2 md:mt-2 flex items-center justify-between uppercase">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo/logo-white.png"
              alt="Kytwo"
              width={80}
              height={30}
              className="w-15 h-auto -translate-y-2"
              priority
            />
            <span className="font-bold text-2xl text-white">KYTWO</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-xl hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="text-lg font-bold bg-white text-black px-4 py-2 rounded-full hidden md:block"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black md:hidden"
          onClick={() => setIsMenuOpen(false)} // click outside closes menu
        >
          <div
            className="absolute top-30 left-4 right-4 animate-rise-up bg-white px-6 py-10 flex flex-col items-center gap-6 rounded-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking menu
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-2xl font-semibold"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-[#3719ca] text-white px-6 py-2 rounded-full font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
