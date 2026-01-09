"use client";

import { useState } from "react";
import { CheckCircle, Paperclip, Send } from "lucide-react";
import ContactForm from "./contactForm";

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="container py-16">
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/3  p-4 rounded-xl  flex flex-row md:flex-col gap-5">
          <div>
            <h1
              className="font-semibold text-white uppercase leading-none"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              Let&#39;s Talk
            </h1>
            <div className="flex flex-row gap-10 lg:flex-col justify-between">
              <ul className="space-y-2 mt-10">
                {[
                  "We will respond to you within 24 hours.",
                  "We&#39;ll sign an NDA if requested.",
                  "Access to dedicated product specialists.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg opacity-90"
                    style={{
                      fontSize: "clamp(0.7rem, 1.3vw, 1.3rem)",
                    }}
                  >
                    <CheckCircle className="text-orange-400 w-6 h-6" />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="space-y-1 mt-10">
                <p className="text-md text-gray-400">Direct contact:</p>
                <p className="text-2xl">hello@kytwo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-2/3 lg:h-auto bg-white min-h-82  rounded-[2rem] p-8 lg:p-12 shadow-2xl relative animate-rise-up"
          style={{
            fontSize: "clamp(0.7rem, 1.4vw, 1.4rem)",
          }}
        >
          {/* LinkedIn Autofill Tag */}
          <ContactForm />
        </div>
      </div>
      {/* FAQ Section */}
      <div className="mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured FAQ on the left */}
          <div className="w-full lg:w-1/2  rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white">
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
              What happens after I submit the form?
            </p>
            <p
              className="text-gray-200"
              style={{
                fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)",
              }}
            >
              Within one business day, our team will review your details and
              reach out with next steps—usually to schedule a quick discovery
              call so we can understand your goals, timelines, and whether we&#39;re
              a good fit.
            </p>
          </div>

          {/* FAQ list on the right */}
          <div className="w-full lg:w-1/2 space-y-4">
            {[
              {
                q: "Do you work under NDAs?",
                a: "Yes. If required, we&#39;ll sign your NDA before we dive into any sensitive details about your product or roadmap.",
              },
              {
                q: "What kind of projects do you take on?",
                a: "We partner with startups and growing brands on web apps, SaaS products, dashboards, and marketing sites that need both design and development.",
              },
              {
                q: "What&#39;s your typical project timeline?",
                a: "Most engagements start with a short discovery phase. From there, timelines depend on scope, but we&#39;ll always give you clear milestones and updates.",
              },
              {
                q: "Can we start small and expand later?",
                a: "Absolutely. Many clients start with a smaller scope—like an MVP or a single product area—and then continue working with us as they scale.",
              },
            ].map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                  className="w-full text-left bg-white/5 border border-white/10 rounded-[1rem] px-5 py-4 md:px-6 md:py-5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className="font-semibold text-white"
                      style={{
                        fontSize: "clamp(1rem, 2.0vw, 2.0rem)",
                      }}
                    >
                      {item.q}
                    </p>
                    <span
                      className="text-white text-lg md:text-xl"
                      aria-hidden="true"
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </div>
                  {isActive && (
                    <p
                      className="text-gray-300 mt-2"
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
    </section>
  );
}
