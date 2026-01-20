import Image from "next/image";
import Link from "next/link";

interface ServiceCTAProps {
  message: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceCTA({
  message,
  ctaText = "GET STARTED",
  ctaLink = "/contact",
}: ServiceCTAProps) {
  return (
    <section className="container py-10">
      <div className="relative flex gap-5 md:gap-3 items-center justify-between bg-[#382550cc] border border-[#a698c54d] rounded-[0.7rem] md:rounded-[2rem] text-black w-full h-[100px] p-5 md:p-10 lg:p-15 max-sm:flex-col max-sm:h-auto max-sm:items-start">
        <div className="flex items-center gap-2 md:gap-5">
          <Image
            src="/logo/logo-white.png"
            alt="Kytwo services"
            width={72}
            height={72}
            className="w-14 h-auto object-contain sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 flex-shrink-0 bg-transparent"
          />
          <p
            className="font-semibold text-white"
            style={{
              fontSize: "clamp(1rem, 2vw, 2rem)",
              lineHeight: "1",
            }}
          >
            {message}
          </p>
        </div>
        <Link
          href={ctaLink}
          className="flex items-center min-w-[6rem] max-sm:w-full justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-lg lg:text-2xl font-bold text-black border border-black px-2 py-3 sm:px-6 sm:py-3 text-center transition-all duration-300 relative overflow-hidden"
        >
          <span
            className="max-xs:text-[0.75rem] whitespace-nowrap"
            style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)" }}
          >
            {ctaText}
          </span>
        </Link>
      </div>
    </section>
  );
}
