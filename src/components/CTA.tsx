import { ArrowUpRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="mt-20">
      <div className="relative z-0 bg-gradient-to-br from-[#9866f2] to-[#3719ca] rounded-[0.7rem] md:rounded-[2rem] text-black">
        <div className="grid gap-4 md:gap-10  py-5 md:py-20 md:gap-2 lg:py-30 px-3 md:px-6 lg:px-10 m-0">
          <div className="flex flex-col w-[100%] md:w-[80%] lg:w-[70%] mx-auto items-center justify-center text-center relative border border-gray-200 rounded-[0.7rem] md:rounded-[1.5rem] p-3 md:p-10 pb-3 md:pb-5 bg-white">
            <h2 className="font-bold leading-[0.9] text-center mb-8 !text-[clamp(2.5rem,8vw,8rem)]">
              READY TO BUILD YOUR <br />
              <span className="text-[#FDC448]">ONLINE STORE?</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-10 text-center">
              We don&#39;t just build ecommerce stores; we build revenue-driving platforms.
              Let&#39;s turn your products into sales.
            </p>

            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#FDC448] hover:bg-white text-lg md:text-2xl font-bold text-black border border-black px-8 py-4 md:px-10 md:py-5 transition-all duration-300 transform hover:scale-105"
            >
              <span>START YOUR PROJECT</span>

              {/* Arrow Animation Container */}
              <div className="relative overflow-hidden w-6 h-6 md:w-8 md:h-8">
                {/* Arrow 1: Slides out to Top-Right */}
                <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />

                {/* Arrow 2: Slides in from Bottom-Left */}
                <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>
            {/* ANIMATED BUTTON ENDS HERE */}
          </div>
        </div>
      </div>
    </section>
  );
}
