import Image from "next/image";

export default function Feedback() {
  return (
    <section className="container py-20 mt-0 md:mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-1 flex-col md:flex-col items-start w-full">
          <div className="flex items-center gap-3 md:flex-col md:items-start">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
              <Image
                src="/medal.png"
                alt="Best design and development agency award"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base text-gray-300">
              4.9/5 rating with 80+ reviews
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-2 text-left md:text-left">
          <p
            className="font-bold text-white leading-none md:[text-indent:8rem] lg:[text-indent:12rem]"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1",
            }}
          >
            We have partnered with hundreds of startups and growing businesses
            to help them reach their goals. The exceptional feedback we receive
            is our true reward.
          </p>
        </div>
      </div>
    </section>
  );
}
