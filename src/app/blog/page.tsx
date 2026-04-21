import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import BlogIndexClient from "@/app/blog/BlogIndexClient";
import { blogPosts } from "@/lib/blogPosts";
import Image from "next/image";
import BlogHeroSlider from "@/app/blog/BlogHeroSlider";

export const metadata: Metadata = {
  title: "Ecommerce Blog: Strategy, SEO, CRO & Migrations",
  description:
    "Practical ecommerce articles on strategy, SEO, CRO, performance, integrations, and platform migrations.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <div>
        <section className="container py-10 lg:py-15">
          <div className="grid gap-6 grid-cols-2 items-stretch">
            <div className="flex flex-col sm:flex-row items-stretch gap-8">
              {/* Left Content */}
              <div className=" flex flex-col sm:w-auto border border-white/50 md:p-10 p-4 rounded-xl animate-rise-up">
                <h1 className="md:font-semibold text-white uppercase">
                  Useful articles
                </h1>
                <p className="mt-5 text-sm md:text-base text-white">
                  Stay in the loop and keep up with all our news and updates!
                </p>

                <hr className="my-4 border-gray-400" />

                <div className="w-full">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-full border border-black/10 bg-white pl-5 pr-32 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#9866f2]/40"
                    />
                    <button
                      type="button"
                      className="absolute right-1 top-1 bottom-1 rounded-full bg-black text-white px-5 text-sm font-bold border border-black hover:bg-white hover:text-black transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <BlogHeroSlider posts={blogPosts} />
          </div>
        </section>

        <BlogIndexClient posts={blogPosts} />

        <section className="container pb-10 lg:pb-16">
          <div className="rounded-[1.6rem] border border-black/10 bg-gradient-to-br from-white to-[#f6f0ff] p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
              <div>
                <p className="text-black font-semibold text-xl md:text-2xl">
                  Stay in the loop
                </p>
                <p className="mt-2 text-black/70 text-sm md:text-base max-w-2xl">
                  Subscribe to get occasional updates. No spam—just useful
                  ecommerce articles and migration playbooks.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#9866f2]/40"
                />
                <button
                  type="button"
                  className="rounded-full bg-black text-white px-6 py-3 text-sm font-bold border border-black hover:bg-white hover:text-black transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <p className="mt-5 text-xs text-black/50">
              By subscribing you agree to receive emails from KYTWO.
            </p>
          </div>
        </section>
      </div>

      <CTA />
    </>
  );
}
