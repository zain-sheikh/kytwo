"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "./action";
import { Send, CheckCircle, Phone } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <>
      {state?.success && (
        <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-[1.5rem] flex items-start gap-4 animate-rise-up">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p
              className="font-semibold text-green-900 mb-1"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
            >
              Message sent successfully!
            </p>
            <p
              className="text-green-700"
              style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
            >
              {state.message}
            </p>
          </div>
        </div>
      )}
      {state?.success === false && (
        <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-[1.5rem] flex items-start gap-4 animate-rise-up">
          <div className="w-6 h-6 flex-shrink-0 mt-0.5 flex items-center justify-center">
            <span className="text-red-600 text-xl font-bold">!</span>
          </div>
          <div>
            <p
              className="font-semibold text-red-900 mb-1"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
            >
              Submission failed
            </p>
            <p
              className="text-red-700"
              style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
            >
              {state.message}
            </p>
          </div>
        </div>
      )}
      <form ref={formRef} className="space-y-10 mt-4" action={formAction}>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Floating: Full Name */}
          <div className="relative border-b border-gray-300 pb-1">
            <input
              type="text"
              id="name"
              name="name"
              pattern="^[A-Za-z\s]+$"
              title="Name should only contain letters"
              placeholder=" "
              required
              className="peer w-full outline-none text-gray-800 bg-transparent pt-2"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 top-2 pointer-events-none text-gray-400 origin-left transition-all duration-200
                            scale-90-translate-y-4 md:-translate-y-8
                            peer-placeholder-shown:translate-y-0
                            peer-placeholder-shown:scale-100
                            peer-focus:scale-90
                            peer-focus:-translate-y-4 md:peer-focus:-translate-y-8`}
            >
              Full name <span className="text-red-600">*</span>
            </label>
          </div>

          {/* Floating: Email */}
          <div className="relative border-b border-gray-300 pb-1">
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              placeholder=" "
              className="peer w-full outline-none text-gray-800 bg-transparent pt-2"
            />
            <label
              htmlFor="email"
              className={`
  absolute left-0 top-2 pointer-events-none
  text-gray-400 origin-left
  transition-all duration-200

  scale-90
  -translate-y-4 md:-translate-y-8

  peer-placeholder-shown:translate-y-0
  peer-placeholder-shown:scale-100

  peer-focus:scale-90
  peer-focus:-translate-y-4 md:peer-focus:-translate-y-8
`}
            >
              Company email <span className="text-red-600">*</span>
            </label>
          </div>

          {/* Static: Phone (Label doesn't move) */}
          <div className="relative border-b border-gray-300 pb-1 flex items-center gap-2 pt-2">
            <span className="text-gray-800 flex items-center gap-1 min-w-fit">
              +
            </span>
            <input
              type="tel"
              name="contact"
              placeholder="1-201-555-0123"
              className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Static: Budget Dropdown (Label doesn't move) */}
          <div className="relative border-b border-gray-300 pb-1 group pt-2">
            <select
              name="budget"
              defaultValue=""
              required
              className="w-full outline-none text-gray-800 bg-transparent appearance-none cursor-pointer peer"
            >
              <option value="" disabled hidden>
                What is your budget? *
              </option>
              <option value="below $10k">below $10k</option>
              <option value="$10k - $20k">$10k - $20k</option>
              <option value="$20k - $50k">$20k - $50k</option>
              <option value="$50k+">$50k+</option>
            </select>
            {/* Custom Chevron Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating: Project Details */}
        <div className="relative border-b border-gray-300 pb-1 mt-4">
          <textarea
            id="about"
            name="about"
            placeholder=" "
            required
            rows={5}
            className="peer w-full outline-none text-gray-800 bg-transparent resize-none pt-2"
          ></textarea>
          <label
            htmlFor="about"
            className={`
  absolute left-0 top-2 pointer-events-none
  text-gray-400 origin-left
  transition-all duration-200

  scale-90
  -translate-y-4 md:-translate-y-8

  peer-placeholder-shown:translate-y-0
  peer-placeholder-shown:scale-100

  peer-focus:scale-90
  peer-focus:-translate-y-4 md:peer-focus:-translate-y-8
`}
          >
            About project <span className="text-red-600">*</span>
          </label>
        </div>
        <div className="flex flex-row md:flex-row items-center justify-end gap-6 pt-4">
          <div className="flex flex-row md:flex-row md:items-center gap-6">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <button
              className="bg-[#3b27cf] hover:bg-[#2e1ea8] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold transition-all group"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "SENDING..." : "SEND A MESSAGE"}
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <Send className="w-4 h-4 fill-white" />
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
