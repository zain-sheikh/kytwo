"use client";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    industry: "Market Place",
    flag: "🇺🇸",
    details:
      "An 18% increase in overall conversions and 3x sales, after we did CRO (conversion rate optimization) ",
    // text: "Great experience working with Zain! The project was delivered on time.",
    name: "John jjj",
    image: "/portfolio/fatty15.png",
  },
  {
    id: 2,
    industry: "AI Powered Dashboard",
    flag: "🇬🇧",
    details:
      "AI Powered Dashboard used in-house for managing $14M worth of stocks and assets. Uses 14 public API to get data.",
    // text: "Amazing communication and clean code. Highly recommended!",
    name: "Sarah Lee",
    image: "/portfolio/tracker.png",
  },
  {
    id: 3,
    industry: "Saas",
    flag: "🇩🇪",
    details:
      "Comprehensive B2B platform serving 10,000+ users with real-time collaboration features and advanced analytics.",

    // text: "Professional and detail-oriented developer. Loved the final result!",
    name: "Michael Smith",
    image: "/portfolio/Saas.png",
  },
  {
    id: 4,
    industry: "Market Place",
    flag: "🇺🇸",
    details:
      "True sea make $550k+ sales each month with around 100,000 active subscriptions",

    // text: "Professional and detail-oriented developer. Loved the final result!",
    name: "Michael Smith",
    image: "/portfolio/truesea.png",
  },
];

const baseItems = [...reviews];
const items = [...baseItems, ...baseItems, ...baseItems];

export default function Showcase() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState<number | null>(null);
  const [current, setCurrent] = useState(baseItems.length);
  const [withTransition, setWithTransition] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 2500; // 3 seconds per slide
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

  const go = (dir: 1 | -1) => {
    if (withTransition) return;
    setWithTransition(true);
    setCurrent((c) => c + dir);
    setActiveIndex((i) => (i + dir + baseItems.length) % baseItems.length);
  };

  const onTransitionEnd = () => {
    const len = baseItems.length;
    setWithTransition(false);
    if (current >= len * 2) setCurrent((c) => c - len);
    else if (current < len) setCurrent((c) => c + len);
  };

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      const timer = setTimeout(() => go(1), 3000);
      return () => clearTimeout(timer);
      return;
    }
    if (withTransition) return;
    const timer = setTimeout(() => go(1), duration);
    return () => clearTimeout(timer);
  }, [current, withTransition]);

  return (
    <section
      className="container flex flex-col items-center py-10 scroll-mt-20"
      id="showcase"
    >
      <h2 className="relative left-0 right-0 z-10 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        ECOMMERCE STORES THAT{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
          DRIVE REAL RESULTS
        </span>
      </h2>
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

      <div className=" w-full flex flex-col md:flex-row gap-6">
        <div className="w-full flex flex-col items-center">
          <div className="w-full rounded-2xl md:rounded-4xl  overflow-hidden">
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
                      transition: withTransition
                        ? "transform 500ms ease-in-out"
                        : "none",
                    }
              }
              onTransitionEnd={onTransitionEnd}
            >
              {items.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="shrink-0 w-full items-stretch rounded-2xl md:rounded-4xl flex flex-row  text-black  md:p-12 p-3 bg-white"
                >
                  <div className="bg-gray-200 flex-3 rounded-l-2xl p-5 md:p-10 ">
                    <div className="w-full flex gap-3 flex-col items-start justify-center ">
                      <div className="flex items-center gap-1 md:gap-3 text-gray-500 text-xs md:text-lg">
                        <span>{review.industry}</span>
                        <span>|</span>
                        <span>{review.flag}</span>
                      </div>

                      <h3
                        className="font-bold uppercase "
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 3rem)",
                          lineHeight: "1.2",
                        }}
                      >
                        {review.details}
                      </h3>
                      {/*<p className = "text-base mb-4 text-[clamp(0.8rem,2vw,1.5rem)] max-xs:font-normal max-xs:text-[1rem]">*/}
                      {/*{review.text}*/}
                      {/*</p>*/}
                    </div>
                  </div>
                  <div className="flex-4 ">
                    <Image
                      src={review.image}
                      alt={`${review.name} - ${review.industry} ecommerce project showcase`}
                      width={800}
                      height={600}
                      className=" h-full w-full min-h-[300px] object-cover  rounded-r-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bars */}
          <div className="w-full flex flex-row mt-4 md:mt-8 lg:mt-12 xl:mt-15 items-center gap-5 md:justify-between justify-center md:px-4 px-0">
            <div className="flex w-auto flex-1 gap-2 justify-center px-4">
              {baseItems.map((_, i) => (
                <div
                  key={i}
                  className="flex-3 h-1.5 bg-gray-500 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full ${
                      i === activeIndex
                        ? "bg-white progress-active"
                        : "bg-white/0"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {/* PREV BUTTON (Rotated Arrow) */}
              <button
                onClick={() => go(-1)}
                className="group border border-white rounded-full h-12 w-12 md:h-18 md:w-18 flex items-center justify-center hover:bg-white transition-all duration-300"
                aria-label="Previous review"
              >
                <div className="relative w-5 h-5 md:w-8 md:h-8 overflow-hidden">
                  {/* Existing Arrow: Slides out to the LEFT */}
                  <Image
                    src="/arrow.png"
                    alt="Previous project"
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
                  />
                  {/* New Arrow: Slides in from the RIGHT */}
                  <Image
                    src="/arrow.png"
                    alt="Previous project hover state"
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0"
                  />
                </div>
              </button>

              {/* NEXT BUTTON (Normal Arrow) */}
              <button
                onClick={() => go(1)}
                className="group border border-white rounded-full h-12 w-12 md:h-18 md:w-18 flex items-center justify-center hover:bg-white transition-all duration-300"
                aria-label="Next review"
              >
                <div className="relative w-5 h-5 md:w-8 md:h-8 overflow-hidden">
                  {/* Existing Arrow: Slides out Top-Right */}
                  <Image
                    src="/arrow.png"
                    alt="Next project"
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out  group-hover:translate-x-full"
                  />
                  {/* New Arrow: Slides in from Bottom-Left */}
                  <Image
                    src="/arrow.png"
                    alt="Next project hover state"
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 "
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
