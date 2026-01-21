import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  heading?: string;
  services: RelatedService[];
}

export default function RelatedServices({
  heading = "Related services",
  services,
}: RelatedServicesProps) {
  if (!services.length) return null;

  return (
    <section className="container py-10 lg:py-16">
      <div className="mb-6 md:mb-8">
        <h2 className="font-semibold !text-[clamp(1.5rem,3vw,2.25rem)]">
          {heading}
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl">
          Explore other ecommerce services that often pair well with this
          engagement.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-[1.2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200 p-5 md:p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#FDC448]">
                {service.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-gray-300">
                {service.description}
              </p>
            </div>
            <span className="mt-4 text-xs md:text-sm font-semibold text-gray-200 group-hover:text-white">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
