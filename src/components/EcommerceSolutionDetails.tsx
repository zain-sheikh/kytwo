import { ArrowUpRight, MailIcon } from "lucide-react";
import Link from "next/link";

export interface EcommerceSolutionDetail {
  name: string;
  label?: string;
  description: string;
  bullets: string[];
}

interface EcommerceSolutionDetailsProps {
  title: string;
  highlightText: string;
  solutions: EcommerceSolutionDetail[];
}

export default function EcommerceSolutionDetails({
  title,
  highlightText,
  solutions,
}: EcommerceSolutionDetailsProps) {
  const accentStyles = [
    {
      gradient: "from-[#9866f2] via-[#f9d1ff] to-[#f9d1ff]",
    },
    {
      gradient: "from-[#4fd1c5] via-[#6ce3ff] to-[#d7f3ff]",
    },
    {
      gradient: "from-[#ff9f43] via-[#ffd166] to-[#fff1d6]",
    },
    {
      gradient: "from-[#ff6b9b] via-[#fca5f1] to-[#ffe3ff]",
    },
  ];

  return (
    <section className="container relative py-10 lg:py-10 overflow-hidden">
      <h2 className="relative md:max-w-3xl mx-auto left-0 right-0 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        {title}{" "}
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent ">
          {highlightText}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {solutions.map((solution, index) => {
          const accent = accentStyles[index % accentStyles.length];
          return (
            <article
              key={solution.name}
              className={`relative group overflow-hidden rounded-[1.1rem] border border-white/10 bg-white text-black transition-transform duration-300 ease-out flex flex-col h-full`}
            >
              <div
                className={`absolute inset-x-0 top-0 mx-auto left-0 right-0 h-52 bg-gradient-to-br ${accent.gradient} opacity-20 blur-2xl`}
                aria-hidden
              />
              <Link
                href="/contact"
                target="_blank"
                aria-label="Contact us"
                className="relative p-6 md:p-7 lg:p-8 space-y-5 flex flex-col flex-1 "
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    {solution.label && (
                      <p className="inline-flex items-center rounded-full bg-white text-black text-[0.7rem] md:text-xs font-semibold tracking-[0.12em] uppercase px-3 py-1 mb-2 border border-white/10">
                        {solution.label}
                      </p>
                    )}
                    <h3 className="font-semibold text-2xl md:text-3xl text-black">
                      {solution.name}
                    </h3>
                  </div>
                  <div
                    className="border bg-white text-black group-hover:bg-black group-hover:text-white border-black rounded-full
    w-[52px] h-[52px]
    max-xs:w-[12vw] max-xs:h-[12vw] aspect-square
    flex items-center justify-center transition-all duration-300
    "
                  >
                    <div className="relative w-1/2 h-1/2 overflow-hidden">
                      <div className="relative overflow-hidden w-full h-full ">
                        <MailIcon className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full " />
                        <MailIcon className="absolute inset-0 w-full h-full -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 " />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-black">
                  {solution.description}
                </p>

                <div className="rounded-[0.9rem]  border border-black p-4 md:p-5 space-y-3 flex-1 flex flex-col">
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase  text-black">
                    What we deliver
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-black flex-1">
                    {solution.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-[0.2rem] h-2.5 w-2.5 rounded-full bg-gradient-to-br ${accent.gradient} flex-shrink-0`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
