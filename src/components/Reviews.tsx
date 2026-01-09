// components/ReviewsSEO.tsx
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
const reviews = [
  {
    id: 1,
    text: '"Kytwo" team did a great job. They was responsive, flexible, and worked through all requested changes to ensure we got what we needed. Happy with the final result!',
    name: "Amanda Abiassi",
    image: "/reviews/Amanda.png",
  },
  {
    id: 2,
    text: "People of Kytwo is easy to work with , they shares great ideas, and are very open to feedback. Would recommend. Thanks, you people did great job!",
    name: "Beatrice",
    image: "/reviews/Beatrice.png",
  },
  {
    id: 3,
    text: "Great experience overall. The redesign fixed major layout and mobile issues, with clear communication, fast turnaround, and an excellent final result.",
    name: "Anastasiia",
    image: "/reviews/Anastasiia.png",
  },
  {
    id: 4,
    text: "They was quick, efficient, and delivered exactly what I needed. Communication was smooth and a clear understanding of the requirements. ",
    name: "Alan Thereault",
    image: "/reviews/alan.jpeg",
  },
  {
    id: 5,
    text: "Kytwo agency transformed our online presence, our sales increased by 50% within weeks. Their attention to detail and strategic approach exceeded all expectations.",
    name: "Yaya Inv",
    image: "/reviews/Yaya.jpeg",
  },
];

const baseItems = [...reviews]; // server-visible items
const items = [...baseItems, ...baseItems, ...baseItems]; // triple for seamless looping

export default function ReviewsSEO() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState<number | null>(null);
  const [current, setCurrent] = useState(baseItems.length);
  const [withTransition, setWithTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartCurrentRef = useRef<number>(current);
  const [dragDeltaPx, setDragDeltaPx] = useState(0);

  // Measure item width + gap before first paint to avoid visual shift
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
  };

  const onTransitionEnd = () => {
    const len = baseItems.length;
    if (current >= len * 2) setCurrent((c) => c - len);
    else if (current < len) setCurrent((c) => c + len);
    setWithTransition(false);
  };

  // Pointer/drag handlers for mouse and touch
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (stepPx === null) return;
    setWithTransition(false);
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartCurrentRef.current = current;
    setDragDeltaPx(0);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || stepPx === null) return;
    const delta = e.clientX - dragStartXRef.current;
    setDragDeltaPx(delta);
  };

  const finishDrag = () => {
    if (!isDragging || stepPx === null) return;
    const movedSteps = Math.round(-dragDeltaPx / stepPx);
    setIsDragging(false);
    setWithTransition(true);
    setDragDeltaPx(0);
    setCurrent(dragStartCurrentRef.current + movedSteps);
  };

  const onPointerUp = () => finishDrag();
  const onPointerCancel = () => finishDrag();
  const onPointerLeave = () => finishDrag();
  // const [hearts, setHearts] = useState<
  //   {
  //     top: number;
  //     left: number;
  //     delay: number;
  //   }[]
  // >([]);

  // useLayoutEffect(() => {
  //   const generated = Array.from({ length: 30 }).map((_, i) => ({
  //     top: 10 + Math.random() * 40, // stays within 10%–90%
  //     left: 10 + Math.random() * 70, // stays within 10%–90%
  //     delay: i < 1 ? 0 : Math.random() * 3,
  //   }));
  //   setHearts(generated);
  // }, []);

  return (
    <section className=" w-full overflow-hidden flex flex-col items-center py-0 md:py-10 max-md:!pr-0">
      <div className=" container max-md:!pr-0 w-full flex flex-col md:flex-row gap-6 ">
        {/* Left Side */}
        <div className="relative w-full md:w-1/3 p-6 rounded-xl hidden md:block md:overflow-hidden overflow-visible">
          {/* {hearts.map((h, i) => (
          <img
            src="/love.png"
            alt="Heart"
              className="w-20 h-20"
              key={i}
            className="absolute text-pink-500  w-50 h-50"
              style={{
                top: `${h.top}%`,
                left: `${h.left}%`,
                animationDelay: `${h.delay}s`,
              }}
          ></img>
          ))} */}
          <div className="absolute bottom-6 right-6 z-10">
            <h2 className="relative left-2 z-10 font-medium !text-[5rem] mb-4 lg:!text-[6.5rem] leading-none">
              4.9{" "}
              <Image
                src="/star.png"
                alt=""
                width={36}
                height={36}
                className="inline-block align-middle"
                style={{
                  height: "0.7em",
                  width: "0.7em",
                  position: "relative",
                  top: "-0.05em",
                }}
              />
            </h2>
            <p
              className="font-medium text-white leading-none mb-6"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                lineHeight: "1.2",
              }}
            >
              All these clients loved our work. Chances are you’ll be impressed
              too.
            </p>

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
                    alt=""
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
                  />
                  {/* New Arrow: Slides in from the RIGHT */}
                  <Image
                    src="/arrow.png"
                    alt=""
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
                    alt=""
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out  group-hover:translate-x-full"
                  />
                  {/* New Arrow: Slides in from Bottom-Left */}
                  <Image
                    src="/arrow.png"
                    alt=""
                    width={32}
                    height={32}
                    className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 "
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side (Reviews Carousel) */}
        <div className="w-full md:w-3/4 flex flex-col items-center md:-mr-40  ">
          <div className="w-full overflow-hidden  md:px-4 md:rounded-4xl">
            <div
              ref={trackRef}
              className={`flex gap-4 will-change-transform ${
                stepPx === null ? "invisible" : "visible"
              }`}
              style={
                stepPx === null
                  ? undefined
                  : isDragging
                  ? {
                      transform: `translateX(${
                        -(dragStartCurrentRef.current * stepPx) + dragDeltaPx
                      }px)`,
                    }
                  : {
                      transform: `translateX(${-current * stepPx}px)`,
                      transition: withTransition
                        ? "transform 400ms ease"
                        : "none",
                    }
              }
              onTransitionEnd={onTransitionEnd}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              onPointerLeave={onPointerLeave}
            >
              {items.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="shrink-0 w-70 aspect-[3/4] md:w-100 md:aspect-[10/14] rounded-4xl flex flex-col items-left justify-between text-white md:px-10 md:py-8 px-6 py-4 bg-[#3719ca]"
                >
                  <div>
                    <div className="w-full flex flex-col items-start justify-center border-b border-gray-500 md:pt-4 md:pb-8 pt-2 pb-2">
                      <div className="relative z-10 text-[clamp(1.8rem,3.5vw,2.5rem)] max-xs:font-normal max-xs:text-[2rem] font-medium leading-none">
                        5.0{" "}
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Image
                            key={i}
                            src="/star.png"
                            alt=""
                            width={16}
                            height={16}
                            className="inline-block align-middle star-anim"
                            style={{
                              animationDelay: `${i * 0.15}s`,
                              height: "0.7em",
                              width: "0.7em",
                              position: "relative",
                              top: "-0.1em",
                              marginLeft: "0.1em",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mb-4 mt-4 text-[1rem] md:text-[1.3rem] uppercase max-xs:font-normal  font-semibold leading-relaxed ">
                      {review.text}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={review.image}
                      alt={`${review.name} - Client testimonial`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mb-2 object-cover"
                    />
                    <span className="text-sm font-semibold">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-6 md:hidden">
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
                  alt=""
                  width={32}
                  height={32}
                  className="absolute inset-0 w-full h-full object-contain rotate-180 invert group-hover:invert-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-full"
                />
                {/* New Arrow: Slides in from the RIGHT */}
                <Image
                  src="/arrow.png"
                  alt=""
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
                  alt=""
                  width={32}
                  height={32}
                  className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out  group-hover:translate-x-full"
                />
                {/* New Arrow: Slides in from Bottom-Left */}
                <Image
                  src="/arrow.png"
                  alt=""
                  width={32}
                  height={32}
                  className="absolute inset-0 w-full h-full object-contain invert group-hover:invert-0 transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 "
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
