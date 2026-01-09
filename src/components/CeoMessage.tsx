import Image from "next/image";

export default function CeoMessage() {
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-1 flex-col md:flex-col items-start order-2 md:order-1 w-full">
          <div className="flex items-center gap-3 md:flex-col md:items-start">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
              <Image
                src="/founder.png"
                alt="Founder of Kytwo design and technology agency"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base text-gray-300">Founder of Kytwo</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-2 order-1 md:order-2 text-left md:text-left">
          <p
            className="font-bold text-white leading-none md:[text-indent:8rem] lg:[text-indent:12rem]"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1",
            }}
          >
            Without a website, your business is invisible. Competitors with a
            strong online presence can leave you behind overnight. Don’t be
            Blockbuster—be Netflix. Adapt and go digital.
          </p>
        </div>
      </div>
    </section>
  );
}
