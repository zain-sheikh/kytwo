"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import type { BlogPost } from "@/lib/blogPosts";

export default function BlogHeroSlider({ posts }: { posts: BlogPost[] }) {
  const baseItems = useMemo(() => posts.slice(0, 4), [posts]);
  const items = useMemo(
    () => [...baseItems, ...baseItems, ...baseItems],
    [baseItems],
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState<number | null>(null);
  const [current, setCurrent] = useState(baseItems.length);
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 3000;
  const [firstLoad, setFirstLoad] = useState(true);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.children[0] as HTMLElement | undefined;
      if (!track || !first) return;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap || style.columnGap || "0") || 0;
      const width = first.getBoundingClientRect().width;
      setStepPx(width + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    // Reset if baseItems length changes
    setCurrent(baseItems.length);
    setActiveIndex(0);
    setFirstLoad(true);
  }, [baseItems.length]);

  const go = (dir: 1 | -1) => {
    const len = baseItems.length;
    setCurrent((c) => {
      let next = c + dir;
      // Instant wrap (no transition end event)
      if (next >= len * 2) next -= len;
      else if (next < len) next += len;
      return next;
    });
    setActiveIndex((i) => (i + dir + baseItems.length) % baseItems.length);
  };

  useEffect(() => {
    if (baseItems.length <= 1) return;
    if (firstLoad) {
      const timer = setTimeout(() => go(1), 3000);
      return () => {
        clearTimeout(timer);
        setFirstLoad(false);
      };
    }
    const timer = setTimeout(() => go(1), duration);
    return () => clearTimeout(timer);
  }, [current, baseItems.length, firstLoad, duration]);

  if (baseItems.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center bg-[#3719ca] rounded-xl p-4">
      <style jsx>{`
        @keyframes fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .progress-active {
          animation: fill 3s linear forwards;
        }
      `}</style>

      <div className="w-full rounded-xl overflow-hidden">
        <div
          ref={trackRef}
          className={`flex gap-4 will-change-transform ${
            stepPx === null ? "invisible" : "visible"
          }`}
          style={
            stepPx === null
              ? undefined
              : {
                  transform: `translate3d(${-current * stepPx}px, 0, 0)`,
                  transition: "none",
                }
          }
        >
          {items.map((post, idx) => (
            <div
              key={`${post.slug}-${idx}`}
              className="shrink-0 w-full rounded-xl flex flex-row text-black md:p-0 p-0 bg-white border border-white/10"
            >
              <div className="bg-gray-200 flex-[1.2] rounded-l-xl p-5 md:p-8">
                <div className="w-full flex gap-3 flex-col items-start justify-center">
                  <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                    <span>{post.category}</span>
                    <span>|</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3
                    className="font-bold uppercase"
                    style={{
                      fontSize: "clamp(1rem, 2.2vw, 2rem)",
                      lineHeight: "1.15",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm font-bold text-black border border-black px-5 py-2 transition-colors"
                    >
                      Read
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white text-sm font-bold text-black border border-black px-5 py-2 transition-colors"
                    >
                      All posts
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-[1] bg-[#3719ca] rounded-r-xl p-5 md:p-8 relative overflow-hidden hidden sm:block">
                <div
                  className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-60"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(253,196,72,0.85), transparent 60%)",
                  }}
                />
                <p className="text-white font-semibold uppercase tracking-[0.22em] text-xs">
                  Featured
                </p>
                <p className="mt-4 text-white text-sm md:text-base">
                  {post.dateLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row mt-4 items-center gap-5 justify-between">
        <div className="flex w-auto flex-1 gap-2 justify-center px-2">
          {baseItems.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden"
            >
              <div
                className={`h-full ${
                  i === activeIndex ? "bg-white progress-active" : "bg-white/0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => go(-1)}
            className="group border border-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center hover:bg-white transition-all duration-300 bg-transparent"
            aria-label="Previous post"
          >
            <div className="relative w-5 h-5 overflow-hidden">
              <Image
                src="/arrow.png"
                alt="Previous post"
                width={32}
                height={32}
                className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
              />
              <Image
                src="/arrow.png"
                alt="Previous post hover state"
                width={32}
                height={32}
                className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0"
              />
            </div>
          </button>

          <button
            onClick={() => go(1)}
            className="group border border-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center hover:bg-white transition-all duration-300 bg-transparent"
            aria-label="Next post"
          >
            <div className="relative w-5 h-5 overflow-hidden">
              <Image
                src="/arrow.png"
                alt="Next post"
                width={32}
                height={32}
                className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out group-hover:translate-x-full"
              />
              <Image
                src="/arrow.png"
                alt="Next post hover state"
                width={32}
                height={32}
                className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
