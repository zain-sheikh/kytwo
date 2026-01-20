import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  highlightText: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceHero({
  title,
  highlightText,
  subtitle,
  imageSrc = "/3d-fire.png",
  imageAlt = "Expert services",
  ctaText = "GET STARTED",
  ctaLink = "/contact",
}: ServiceHeroProps) {
  return (
    <section className="container py-10 lg:py-24">
      <div className="flex flex-col sm:flex-row items-stretch gap-8">
        <div className="flex flex-col sm:w-auto bg-[#3719ca] md:p-10 p-4 rounded-xl animate-rise-up">
          <h1 className="md:font-semibold text-white uppercase">
            {title}{" "}
            <span className="text-[#FDC448] font-bold ">{highlightText}</span>
          </h1>

          <hr className="my-4 border-gray-400" />

          <div className="flex items-center gap-2 justify-between">
            <div className="flex flex-1 items-center gap-2 ">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 bg-transparent"
              />
              <p
                className="text-sm md:text-lg lg:text-3xl text-white"
                style={{ lineHeight: "1.25" }}
              >
                {subtitle}
              </p>
            </div>

            <Link
              href={ctaLink}
              className="flex items-center justify-center gap-2 rounded-full bg-[#FDC448] hover:bg-white text-sm md:text-lg lg:text-2xl font-bold text-black border border-black px-2 py-3 sm:px-6 sm:py-3 text-center transition-all duration-300 relative overflow-hidden"
            >
              <span className="max-xs:text-[0.75rem]">{ctaText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
