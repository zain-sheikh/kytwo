import Image from "next/image";

const logos = [
  { src: "/tech-logos/tsm.png", alt: "True sea moss - Client logo" },
  { src: "/tech-logos/mscp.svg", alt: "Market street capital - Client logo" },
  { src: "/tech-logos/br.png", alt: "Bio Regene Wellness - Client logo" },
  { src: "/tech-logos/awp.svg", alt: "Arab watches - Client logo" },
  { src: "/tech-logos/lwp.png", alt: "Little word project - Client logo" },
  { src: "/tech-logos/jr.png", alt: "Jones road - Client logo" },
];
export default function Logos() {
  return (
    <section className="container py-8 text-white mb-10">
      <div className="relative">
        <div className="max-w-auto max-sm:max-w-[11.5rem] absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-color px-3  py-0.5 text-md font-medium text-gray-400 text-center">
          Trusted by global{" "}
          <span className="whitespace-nowrap">brands & Startups</span>
        </div>
        <div className="rounded-lg border border-gray-400 p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 items-center ">
            {logos.map((l) => (
              <Image
                key={l.src}
                src={l.src}
                alt={l.alt}
                width={120}
                height={40}
                className="mx-auto h-10 w-auto object-contain brightness-0 invert "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
