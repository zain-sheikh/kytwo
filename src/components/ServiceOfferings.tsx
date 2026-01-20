interface OfferingItem {
  title: string;
  items: string[];
}

interface ServiceOfferingsProps {
  title: string;
  highlightText: string;
  offerings: OfferingItem[];
}

export default function ServiceOfferings({
  title,
  highlightText,
  offerings,
}: ServiceOfferingsProps) {
  return (
    <section className="container py-10">
      <h2 className="relative left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        {title}{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent ">
          {highlightText}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white rounded-[0.7rem] md:rounded-[1.5rem] p-6 md:p-10 text-black"
          >
            <h3 className="font-semibold text-2xl md:text-3xl mb-6">
              {offering.title}
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              {offering.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <span className="text-[#FDC448] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
