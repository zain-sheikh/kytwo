import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Feature {
  title: string;
  description: string | React.ReactNode;
  href?: string;
}

interface ServiceOverviewProps {
  title: string;
  highlightText: string;
  features: Feature[];
  showArrow?: boolean;
}

export default function ServiceOverview({
  title,
  highlightText,
  features,
  showArrow = false,
}: ServiceOverviewProps) {
  return (
    <section className="container py-10">
      <h2 className="relative left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        {title}{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
          {highlightText}
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 border-gray-300">
        {features.map((feature, index) => {
          // Mobile (2 cols): no right border on items 1, 3, 5 (index % 2 === 1)
          // Desktop (3 cols): no right border on items 2, 5 (index % 3 === 2)
          const isLastInRowMobile = index % 2 === 1;
          const isLastInRowDesktop = index % 3 === 2;

          // Last row detection
          const totalRowsMobile = Math.ceil(features.length / 2);
          const totalRowsDesktop = Math.ceil(features.length / 3);
          const rowMobile = Math.floor(index / 2);
          const rowDesktop = Math.floor(index / 3);
          const isInLastRowMobile = rowMobile === totalRowsMobile - 1;
          const isInLastRowDesktop = rowDesktop === totalRowsDesktop - 1;

          const cardContent = (
            <>
              {/* Title Container - Now automatically matches tallest in its row */}
              <div className="flex items-start gap-2 justify-between">
                <h3
                  className={`font-bold text-left !text-[clamp(1.2rem,2.5vw,1.8rem)] text-white leading-[1.2] ${
                    feature.href
                      ? "group-hover:text-black transition-colors"
                      : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                {showArrow && (
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[52px] h-[52px]
    max-xs:w-[12vw] max-xs:h-[12vw] aspect-square
    flex items-center justify-center transition-all duration-300
    "
                  >
                    <div className="relative w-1/2 h-1/2 overflow-hidden">
                      <div className="relative overflow-hidden w-full h-full ">
                        <ArrowUpRight className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full " />
                        <ArrowUpRight className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 " />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description Container */}
              <p
                className={`font-medium text-gray-400 text-[clamp(0.9rem,1.5vw,1.1rem)] ${
                  feature.href
                    ? "group-hover:text-black transition-colors"
                    : "text-gray-400"
                }`}
                style={{ lineHeight: "1.5", letterSpacing: "0.01em" }}
              >
                {feature.description}
              </p>
            </>
          );

          const cardClassName = `
                  group p-6 md:p-10
                  border-r border-b border-gray-800
                  ${isLastInRowMobile ? "border-r-0 md:border-r" : ""}
                  ${isLastInRowDesktop ? "md:border-r-0" : ""}
                  ${isInLastRowMobile ? "border-b-0 md:border-b" : ""}
                  ${isInLastRowDesktop ? "md:border-b-0" : ""}
                  
                  /* SUBGRID LOGIC */
                  grid row-span-2 grid-rows-subgrid gap-y-4
                  ${
                    feature.href
                      ? "cursor-pointer hover:bg-white hover:text-black transition-colors"
                      : ""
                  }
                `;

          if (feature.href) {
            return (
              <Link key={index} href={feature.href} className={cardClassName}>
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={index} className={cardClassName}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
