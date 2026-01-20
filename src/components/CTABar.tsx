import Image from "next/image";
import Link from "next/link";

interface CTABarProps {
  message: string;
  href?: string;
  buttonText?: string;
}

export default function CTABar({
  message,
  href = "/contact",
  buttonText = "BOOK A CALL",
}: CTABarProps) {
  return (
    <section className="container">
      <div className="relative flex gap-5 md:gap-4 items-center justify-between bg-white border border-[#a698c54d] rounded-[0.9rem] md:rounded-[2rem] w-full mt-10 p-5 md:p-8 max-sm:flex-col max-sm:items-start overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[90%] bg-[radial-gradient(circle_at_top,_rgba(152,102,242,0.55),_transparent_60%)] blur-3xl"
          aria-hidden
        />

        <div className="relative flex items-center gap-3 md:gap-5">
          <Image
            src="/logo/logo-black.png"
            alt="Kytwo logo - Design and technology agency"
            width={72}
            height={72}
            className="w-12 h-auto object-contain sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 bg-transparent"
          />
          <p
            className="font-semibold text-black"
            style={{
              fontSize: "clamp(1rem, 2vw, 2rem)",
              lineHeight: "1.1",
            }}
          >
            {message}
          </p>
        </div>

        <Link
          href={href}
          className="relative flex items-center min-w-[7rem] max-sm:w-full justify-center rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-lg font-bold text-black border border-black px-4 py-3 sm:px-7 sm:py-3 text-center transition-all duration-300 overflow-hidden"
        >
          <span
            className="max-xs:text-[0.75rem] whitespace-nowrap"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.15rem)" }}
          >
            {buttonText}
          </span>
        </Link>
      </div>
    </section>
  );
}
