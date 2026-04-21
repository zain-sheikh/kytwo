"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { BlogCategory, BlogPost } from "@/lib/blogPosts";

const categories: BlogCategory[] = [
  "All",
  "Insights",
  "Development",
  "Design",
  "SEO",
  "News",
];

function classNames(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<BlogCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const categoryOk = active === "All" ? true : p.category === active;
      const queryOk = q
        ? (p.title + " " + p.excerpt).toLowerCase().includes(q)
        : true;
      return categoryOk && queryOk;
    });
  }, [posts, active, query]);

  return (
    <section className="container pb-14 lg:pb-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={classNames(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors border",
                active === c
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/10 hover:bg-black hover:text-white hover:border-black"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="w-full md:w-[360px]">
          <label className="sr-only" htmlFor="blog-search">
            Search posts
          </label>
          <input
            id="blog-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#9866f2]/40"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="rounded-[1.4rem] border border-black/10 bg-white p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-black/60">
                {p.category}
              </span>
              <span className="text-xs text-black/50">{p.dateLabel}</span>
            </div>
            <h2 className="mt-3 text-black font-semibold !text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.15]">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 text-black/70 text-sm md:text-base max-w-3xl">
              {p.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="text-xs text-black/50">{p.readingTime}</span>
              <Link
                href={`/blog/${p.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm font-bold text-black border border-black px-5 py-2 transition-colors"
              >
                Read article
              </Link>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-[1.4rem] border border-black/10 bg-white p-8">
            <p className="text-black font-semibold">No posts found.</p>
            <p className="mt-2 text-black/70 text-sm md:text-base">
              Try a different search term or switch categories.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

