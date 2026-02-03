"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { submitVoucher } from "@/app/voucher/action";

export default function VoucherStrip() {
  const [state, formAction, isPending] = useActionState(submitVoucher, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section className="container mt-16">
      <div className="rounded-[2rem] bg-[#3b27cf] border border-white/10 px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="flex-1">
          <h2
            className="font-semibold text-white uppercase mb-3"
            style={{
              fontSize: "clamp(2.4rem, 3.4vw, 3.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Get a $300 Kytwo voucher 🎁
          </h2>
          <p
            className="text-gray-300"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
          >
            Claim a $300 voucher toward strategy, UX/UI design, or development
            work.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Prefer to learn more first?{" "}
            <Link
              href="/voucher"
              className="underline underline-offset-4 hover:text-white"
            >
              View full voucher details
            </Link>
            .
          </p>
        </div>

        <div className="w-full flex-1  bg-white rounded-[1.5rem] p-5 shadow-2xl">
          {state?.success && (
            <div
              className={`mb-4 p-3 rounded-xl flex items-start gap-3 border ${
                state.status === "expired"
                  ? "bg-red-50 border-red-200"
                  : state.status === "used"
                  ? "bg-green-50 border-green-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <CheckCircle
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  state.status === "expired" ? "text-red-600" : "text-green-600"
                }`}
              />
              <div>
                <p
                  className={`font-semibold text-sm ${
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
                <p
                  className={`text-xs mt-0.5 ${
                    state.status === "expired"
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  {state.message}
                </p>
              </div>
            </div>
          )}
          {state?.success === false && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <span className="text-red-600 text-sm font-bold">!</span>
              </div>
              <div>
                <p className="font-semibold text-red-900 text-sm">
                  Unable to issue voucher
                </p>
                <p className="text-red-700 text-xs mt-0.5">{state.message}</p>
              </div>
            </div>
          )}

          <form ref={formRef} className="space-y-5 sm:p-10" action={formAction}>
            <div className="relative border-b border-gray-300 pb-1">
              <input
                type="text"
                id="voucher_first_name"
                name="first_name"
                placeholder=" "
                className="peer w-full outline-none text-gray-800 bg-transparent pt-2"
              />
              <label
                htmlFor="voucher_first_name"
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
                id="voucher_email"
                name="email"
                required
                title="Please enter a valid email address"
                placeholder=" "
                className="peer w-full outline-none text-gray-800 bg-transparent pt-2"
              />
              <label
                htmlFor="voucher_email"
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

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <button
              className="w-full bg-[#3b27cf] hover:bg-[#2e1ea8] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-sm transition-all"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "SENDING..." : "GET $300 VOUCHER"}
            </button>

            <p className="text-[11px] text-gray-500 mt-1">
              By submitting, you agree to be contacted about working with Kytwo.
              We’ll never sell your data or spam you.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
