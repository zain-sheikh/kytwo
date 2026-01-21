"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faqSchema";

interface FAQSectionProps {
  featuredQuestion: string;
  featuredAnswer: string;
  faqItems: FAQItem[];
}

export default function FAQSection({
  featuredQuestion,
  featuredAnswer,
  faqItems,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured FAQ on the left */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-28 lg:self-start rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white">
            <h2
              className="font-semibold text-white uppercase leading-none"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              FAQ
            </h2>
            <p
              className="font-semibold mb-4 mt-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              {featuredQuestion}
            </p>
            <p
              className="text-gray-200"
              style={{
                fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)",
              }}
            >
              {featuredAnswer}
            </p>
          </div>

          {/* FAQ list on the right */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                  className={`
          w-full text-left rounded-[1rem] px-5 py-4 md:px-6 md:py-5
          border transition-colors duration-300
          ${
            isActive
              ? "bg-white border-white/20"
              : "bg-white/5 border-white/10 hover:bg-white/10"
          }
        `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={`
              font-semibold
              ${isActive ? "text-black" : "text-white"}
              `}
                      style={{
                        fontSize: "clamp(1rem, 2.0vw, 2.0rem)",
                      }}
                    >
                      {item.q}
                    </p>
                    <span
                      className={
                        isActive
                          ? "text-black text-2xl md:text-3xl"
                          : "text-white text-lg md:text-2xl"
                      }
                      aria-hidden="true"
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </div>
                  {isActive && (
                    <p
                      className="mt-2  text-gray-700"
                      style={{
                        fontSize: "clamp(0.8rem, 1.4vw, 1.4rem)",
                      }}
                    >
                      {item.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
