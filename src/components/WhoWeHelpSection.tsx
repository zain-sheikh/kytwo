type WhoWeHelpSectionProps = {
  title?: string;
  subtitle?: string;
  items: (string | React.ReactNode)[];
};

export default function WhoWeHelpSection({
  title = "Who we help",
  subtitle = "Best fit for these brands and teams.",
  items,
}: WhoWeHelpSectionProps) {
  return (
    <section className="container py-10 md:py-14">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left heading column (mirrors FAQSection layout) */}
        <div className="w-full lg:w-1/3 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-white">
          <h2
            className="font-semibold text-white uppercase leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "0.9",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
          <p
            className="mt-4 text-gray-200"
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Right list column (styled like FAQ cards, but static list) */}
        <div className="w-full lg:w-2/3 space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-[1rem] px-5 py-4 md:px-6 md:py-5 border bg-white/5 border-white/10 text-sm md:text-base text-gray-100 flex gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-[#FDC448] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
