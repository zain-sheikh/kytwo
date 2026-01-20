"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesMenuCloseTimer = useRef<number | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isServicesMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isServicesMenuOpen]);

  const navLinks = [{ name: "Portfolio", href: "/#showcase" }];

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();

    let ro: ResizeObserver | null = null;
    const w = globalThis as unknown as Window;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
    } else {
      w.addEventListener("resize", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else w.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!isServicesMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesMenuOpen(false);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(e.target as Node)
      ) {
        setIsServicesMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [isServicesMenuOpen]);

  const openServicesMenu = () => {
    if (servicesMenuCloseTimer.current) {
      window.clearTimeout(servicesMenuCloseTimer.current);
      servicesMenuCloseTimer.current = null;
    }
    setIsServicesMenuOpen(true);
  };

  const closeServicesMenuSoon = () => {
    if (servicesMenuCloseTimer.current) {
      window.clearTimeout(servicesMenuCloseTimer.current);
    }
    servicesMenuCloseTimer.current = window.setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 120);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 backdrop-blur-md z-50 bg-background/50"
      >
        <div className="mx-auto container border-animate px-4 py-8 mt-2 md:mt-2 flex items-center justify-between uppercase relative">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo/logo-white.png"
              alt="Kytwo ecommerce development agency logo"
              width={80}
              height={30}
              className="w-15 h-auto -translate-y-2"
              priority
            />
            <span className="font-bold text-2xl text-white">KYTWO</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <div
              ref={servicesMenuRef}
              className="relative"
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenuSoon}
              onFocus={openServicesMenu}
              onBlurCapture={(e) => {
                const next = e.relatedTarget as Node | null;
                if (next && servicesMenuRef.current?.contains(next)) return;
                setIsServicesMenuOpen(false);
              }}
            >
              <Link
                href="/services"
                className="text-white text-xl hover:underline h-full py-2"
                aria-haspopup="dialog"
                aria-expanded={isServicesMenuOpen}
              >
                Services
              </Link>

              {isServicesMenuOpen && (
                <>
                  {/* Desktop modal behaves like mobile: overlay + animate-rise-up panel */}
                  <div
                    className="fixed left-0 right-0 bottom-0 z-40 bg-black/70 backdrop-blur-md h-[100vh]"
                    style={{ top: headerHeight }}
                    onClick={() => setIsServicesMenuOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    className="fixed left-0 right-0 bottom-0 z-50"
                    style={{ top: headerHeight }}
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={closeServicesMenuSoon}
                  >
                    <div
                      className="absolute top-6 left-4 right-4 mx-auto max-w-5xl animate-rise-up"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ServicesMegaMenu
                        onNavigate={() => setIsServicesMenuOpen(false)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-xl hover:underline"
                onMouseEnter={() => setIsMenuOpen(false)}
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
          onClick={() => {
            setIsMenuOpen(false);
            setIsServicesMenuOpen(false);
          }} // click outside closes menu
        >
          <div
            className="absolute top-30 left-4 right-4 animate-rise-up bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking menu
          >
            <div className="relative min-h-[60vh]">
              {/* Primary mobile menu */}
              <div
                className={`px-0 py-10 flex flex-col items-center gap-6 transition-transform duration-300 ${
                  isServicesMenuOpen ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <button
                  onClick={() => setIsServicesMenuOpen(true)}
                  className="text-black text-2xl font-semibold"
                >
                  Services
                </button>
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

              {/* Services slide-in (mobile) */}
              <div
                className={`absolute inset-0  transition-transform duration-300 ${
                  isServicesMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <button
                    onClick={() => setIsServicesMenuOpen(false)}
                    className="text-sm font-semibold text-gray-700"
                  >
                    ← Back
                  </button>
                </div>
                <div className="pb-6 overflow-y-auto max-h-[70vh]">
                  <ServicesMegaMenu
                    onNavigate={() => {
                      setIsMenuOpen(false);
                      setIsServicesMenuOpen(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
