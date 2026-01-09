import Image from "next/image";

export default function Hero() {
  return (
    <section className="container py-10 lg:py-24">
      <div className="flex flex-col sm:flex-row items-stretch gap-8">
        {/* Left Content */}
        <div className=" flex flex-col sm:w-auto bg-[#3719ca] md:p-10 p-4 rounded-xl animate-rise-up">
          <h1 className="md:font-semibold text-white uppercase">
            DESIGN & TECH AGENCY TAKING BRANDS TO THE{" "}
            <span className="text-[#FDC448] font-bold whitespace-nowrap">
              TOP 1%
            </span>
          </h1>

          <hr className="my-4 border-gray-400" />

          <div className="flex items-center gap-2 justify-between">
            <div className="flex flex-1 items-center gap-2 max-w-[20rem] sm:max-w-[27rem] ">
              <Image
                src="/3d-fire.png"
                alt="Fire icon representing years of experience delivering B2B products"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 bg-transparent"
              />
              <p
                className="text-sm md:text-lg lg:text-3xl text-white"
                style={{ lineHeight: "1.25" }}
              >
                Years of delivering B2B products to brands
              </p>
            </div>

            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-lg lg:text-2xl font-bold text-black border border-black px-2 py-3 sm:px-6 sm:py-3 text-center transition-all duration-300 relative overflow-hidden"
            >
              <span className="max-xs:text-[0.75rem]">BOOK A CALL</span>
            </a>
          </div>
        </div>

        {/*/!* Right Side Placeholder *!/*/}
        {/*<div className="flex-1 w-full sm:max-w-2xl rounded-xl lg:h-auto bg-white min-h-82"></div>*/}
      </div>
    </section>
  );
}
