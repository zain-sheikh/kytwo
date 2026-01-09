export default function Achivements() {
  return (
    <section className="container py-16">
      <div className=" grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 grid-cols-3">
        <div className="rounded-2xl md:rounded-4xl flex flex-col items-left justify-between text-white lg:px-10  md:px-6 md:py-4 px-3 py-2  bg-[#382550cc] border border-[#a698c54d] ">
          <div>
            <div className="w-full flex flex-col items-start justify-center border-b border-gray-500 md:pt-4 md:pb-8 pt-2 pb-2">
              <div className=" tracking-tighter text-[#FDC448] relative z-10 text-[clamp(1.8rem,5.5vw,5.5rem)] font-medium md:font-semibold leading-none">
                14
              </div>
            </div>
            <p className="mb-2 mt-2 md:mt-4 text-[clamp(0.8rem,1.7vw,1.7rem)] md:max-w-[70%] sm:max-w-[80%] max-w-[100%]  max-xs:font-normal  font-semibold leading-relaxed md:text-gray-300">
              Team members
            </p>
          </div>
        </div>
        <div className="rounded-2xl md:rounded-4xl flex flex-col items-left justify-between text-white lg:px-10  md:px-6 md:py-4 px-3 py-2  bg-[#382550cc] border border-[#a698c54d] ">
          <div>
            <div className="w-full flex flex-col items-start justify-center border-b border-gray-500 md:pt-4 md:pb-8 pt-2 pb-2">
              <div className=" tracking-tighter text-[#FDC448] relative z-10 text-[clamp(1.8rem,5.5vw,5.5rem)] font-medium md:font-semibold leading-none">
                500+
              </div>
            </div>
            <p className="mb-2 mt-2 md:mt-4 text-[clamp(0.8rem,1.7vw,1.7rem)] md:max-w-[70%] sm:max-w-[80%] max-w-[100%]  max-xs:font-normal  font-semibold leading-relaxed md:text-gray-300">
              Projects Delivered
            </p>
          </div>
        </div>
        <div className="rounded-2xl md:rounded-4xl flex flex-col items-left justify-between text-white lg:px-10  md:px-6 md:py-4 px-3 py-2  bg-[#382550cc] border border-[#a698c54d] ">
          <div>
            <div className="w-full flex flex-col items-start justify-center border-b border-gray-500 md:pt-4 md:pb-8 pt-2 pb-2">
              <div className="tracking-tighter text-[#FDC448] relative z-10 text-[clamp(1.8rem,5.5vw,5.5rem)] font-medium md:font-semibold leading-none">
                300+
              </div>
            </div>
            <p className="mb-2 mt-2 md:mt-4 text-[clamp(0.8rem,1.7vw,1.7rem)] md:max-w-[70%] sm:max-w-[80%] max-w-[100%]  max-xs:font-normal  font-semibold leading-relaxed md:text-gray-300">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
