"use client";

import { CheckCircle } from "lucide-react";
import ContactForm from "./contactForm";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
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
                  "We'll sign an NDA if requested.",
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
                <a
                  href="mailto:hello@kytwo.com"
                  className="hover:text-white transition-colors text-2xl"
                >
                  hello@kytwo.com
                  <br />
                </a>
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
      <FAQSection
        featuredQuestion="What happens after I submit the form?"
        featuredAnswer="Within one business day, our team will review your details and reach out with next steps—usually to schedule a quick discovery call so we can understand your goals, timelines, and whether we're a good fit."
        faqItems={[
          {
            q: "Do you work under NDAs?",
            a: "Yes. If required, we'll sign your NDA before we dive into any sensitive details about your product or roadmap.",
          },
          {
            q: "What kind of projects do you take on?",
            a: "We partner with startups and growing brands on web apps, SaaS products, dashboards, and marketing sites that need both design and development.",
          },
          {
            q: "What's your typical project timeline?",
            a: "Most engagements start with a short discovery phase. From there, timelines depend on scope, but we'll always give you clear milestones and updates.",
          },
          {
            q: "Can we start small and expand later?",
            a: "Absolutely. Many clients start with a smaller scope—like an MVP or a single product area—and then continue working with us as they scale.",
          },
        ]}
      />
    </section>
  );
}
