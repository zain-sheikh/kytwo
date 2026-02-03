"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { submitVoucher } from "./action";

export default function VoucherPageClient() {
  const [state, formAction, isPending] = useActionState(submitVoucher, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section className="container py-16">
      <div className=" mx-auto flex flex-col md:flex-row items-stretch gap-8">
        {/* Left: Copy */}
        <div className="w-full lg:w-1/2 p-4 rounded-xl flex flex-col justify-center">
          <h1
            className="font-semibold text-white uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: "0.9",
              letterSpacing: "-0.02em",
            }}
          >
            Claim Your
            <br />
            $300 Voucher
          </h1>
          <p
            className="text-gray-300"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)" }}
          >
            Enter your email to receive a $300 voucher you can apply toward your
            next project with Kytwo. Use it for strategy, UX design, or
            development on Shopify, WooCommerce, or a custom platform.
          </p>
          <ul className="mt-6 space-y-2 text-gray-300">
            {[
              "Valid for 3 months from the date of issue.",
              "One voucher per person and per project.",
              "Applies to new projects and eligible retainers.",
              "We’ll follow up within one business day.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-orange-400 w-5 h-5" />
                <span
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 1rem)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Form */}
        <div
          className="w-full lg:w-1/2 bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative animate-rise-up"
          style={{
            fontSize: "clamp(0.8rem, 1.2vw, 1.2rem)",
          }}
        >
          {state?.success && (
            <div
              className={`mb-6 p-6 rounded-2xl animate-rise-up border ${
                state.status === "expired"
                  ? "bg-gradient-to-br from-red-50 to-rose-50 border-red-200"
                  : state.status === "used"
                  ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                  : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    state.status === "expired"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p
                      className={`font-semibold ${
                        state.status === "expired"
                          ? "text-red-900"
                          : "text-green-900"
                      }`}
                    >
                      {state.status === "used"
                        ? "Voucher already Redeemed"
                        : state.status === "expired"
                        ? "Voucher has been Expired"
                        : state.isExisting
                        ? "Existing Voucher Found"
                        : "New Voucher Issued"}
                    </p>
                    {state.status && (
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                          state.status === "issued"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : state.status === "expired"
                            ? "bg-white text-red-700 border-red-300"
                            : state.status === "used"
                            ? "bg-white text-green-700 border-green-300"
                            : "bg-blue-100 text-blue-700 border-blue-200"
                        }`}
                      >
                        {state.status === "used"
                          ? "REDEEMED"
                          : state.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-4 ${
                      state.status === "expired"
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    {state.message}
                  </p>

                  {state.voucherCode && (
                    <div className="mt-4 p-4 bg-white rounded-xl border border-green-200">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                            Voucher Code
                          </p>
                          <p className="text-lg font-mono font-bold text-gray-900 tracking-wider">
                            {state.voucherCode}
                          </p>
                        </div>
                        {(state.issueDate || state.expiryDate) && (
                          <div className="pt-3 border-t border-gray-200">
                            <div className="grid grid-cols-3 gap-4">
                              {state.issueDate && (
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                    Issued
                                  </p>
                                  <p className="text-sm font-medium text-gray-700">
                                    {state.issueDate}
                                  </p>
                                </div>
                              )}
                              {state.expiryDate && (
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                    Expires
                                  </p>
                                  <p className="text-sm font-medium text-gray-700">
                                    {state.expiryDate}
                                  </p>
                                </div>
                              )}
                              <div className="text-right">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                  Value
                                </p>
                                <p className="text-sm font-bold text-green-700">
                                  $300.00
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {state?.success === false && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-rise-up">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <span className="text-red-600 text-lg font-bold">!</span>
              </div>
              <div>
                <p className="font-semibold text-red-900 mb-1">
                  Unable to issue voucher
                </p>
                <p className="text-red-700 text-sm">{state.message}</p>
              </div>
            </div>
          )}

          <form ref={formRef} className="space-y-10 mt-2" action={formAction}>
            <div className="space-y-4">
              <div className="relative border-b border-gray-300 pb-1">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder=" "
                  className="peer w-full outline-none text-gray-800 bg-transparent pt-2"
                />
                <label
                  htmlFor="first_name"
                  className={`
                    absolute left-0 top-2 pointer-events-none
                    text-gray-400 origin-left
                    transition-all duration-200

                    scale-90
                    -translate-y-4 md:-translate-y-6

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:scale-90
                    peer-focus:-translate-y-4 md:peer-focus:-translate-y-6
                  `}
                >
                  First name (optional)
                </label>
              </div>

              <div className="relative border-b border-gray-300 pb-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
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
                    -translate-y-4 md:-translate-y-6

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:scale-90
                    peer-focus:-translate-y-4 md:peer-focus:-translate-y-6
                  `}
                >
                  Work email <span className="text-red-600">*</span>
                </label>
              </div>
            </div>

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <button
              className="w-full bg-[#3b27cf] hover:bg-[#2e1ea8] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold transition-all"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "SENDING..." : "GET $300 VOUCHER"}
            </button>

            <p className="text-xs text-gray-500 mt-2">
              By submitting, you agree to be contacted about working with Kytwo.
              We’ll never sell your data or spam you.
            </p>
          </form>
        </div>
      </div>

      <FAQSection
        featuredQuestion="How does the $300 voucher work?"
        featuredAnswer="Submit your work email on this page and we’ll email you a unique $300 voucher code. You can apply it toward eligible strategy, design, or development work with Kytwo within 3 months of issue."
        faqItems={[
          {
            q: "Does the voucher really expire in 3 months?",
            a: "Yes. Your voucher is valid for 3 calendar months from the date we issue it. After that date, it can’t be applied to new work.",
          },
          {
            q: "Can I get more than one voucher?",
            a: "We limit vouchers to one per person and one per project. If you’re working on multiple distinct projects, talk to us and we’ll see what makes sense.",
          },
          {
            q: "What can I use the $300 for?",
            a: "You can apply it toward strategy sessions, UX and UI design, implementation on Shopify or WooCommerce, or custom development work. We’ll confirm eligibility when we scope your project.",
          },
          {
            q: "Do I need to commit to a full project right away?",
            a: "No. Many clients start with a smaller engagement—like a discovery sprint or audit—and apply the voucher there. If we continue working together, we’ll credit it against the larger engagement.",
          },
        ]}
      />
    </section>
  );
}
