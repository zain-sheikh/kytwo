interface ProcessStep {
  label: string;
  title: string;
  gradient: string;
  free?: boolean;
  mt: string;
}

interface ProcessSectionProps {
  title: string;
  highlightText: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  title,
  highlightText,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="container mt-20">
      <h2 className="relative left-0 right-0 z-10 font-semibold text-center justify-center !text-[clamp(1.7rem,7vw,5rem)] max-xs:!text-[2.5rem] mb-10 max-md:max-w-[70%] max-sm:max-w-[80%] max-md:mx-auto">
        {title} <br />
        <span className="md:bg-[linear-gradient(to_right,_#9866f2_0%,_#eda1f5_35%,_#ffffff_85%)] md:bg-clip-text md:text-transparent md:whitespace-nowrap">
          {highlightText}
        </span>
      </h2>

      <div className="relative bg-[#050d1a] p-0 md:p-8 overflow-hidden">
        <div className="relative">
          {/* Curved line (desktop only) */}
          <svg className="absolute inset-0 w-full h-full z-0 hidden md:block pointer-events-none">
            <path
              d="M 4% 55% Q 18% 48%, 32% 62% T 50% 55% T 68% 65% T 86% 58% T 96% 68%"
              fill="none"
              stroke="rgba(156, 102, 242, 0.35)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#050d1a] to-transparent pointer-events-none"></div>

          {/* Scroll Container */}
          <div
            className="relative z-10 overflow-x-auto md:overflow-visible pb-3
  scrollbar-thin
    [&::-webkit-scrollbar]:h-1
    [&::-webkit-scrollbar-track]:bg-gray-900
    [&::-webkit-scrollbar-thumb]:bg-white
"
          >
            <div className="flex flex-nowrap md:flex-row snap-x snap-mandatory">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="
              relative flex flex-col items-center
              flex-1 min-w-[150px] md:min-w-0
              snap-center
            "
                >
                  {/* Vertical divider (desktop only) */}
                  {i !== 0 && (
                    <div className="absolute left-0 top-0 h-full w-px bg-white/10 " />
                  )}

                  {/* Label + Title */}
                  <div className="mb-6 text-center flex flex-col items-center gap-2 justify-between h-[72px] md:h-[80px]">
                    <span
                      className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full ${
                        step.free
                          ? "bg-[#FDC448] text-black"
                          : "bg-white text-black"
                      }`}
                    >
                      {step.label}
                    </span>
                    <h3 className="text-white text-xs md:text-sm font-semibold leading-tight max-w-[150px] mx-auto">
                      {step.title}
                    </h3>
                  </div>

                  {/* Bar */}
                  <div
                    className="w-full max-w-[300px]"
                    style={{ marginTop: `${step.mt}px` }}
                  >
                    <div
                      className={`
                  w-full
                  rounded-full
                  bg-gradient-to-r ${step.gradient}
                  flex items-center justify-center px-5 py-2 md:py-1
                  shadow-lg
                `}
                    >
                      <span className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full bg-transparent text-black flex items-center justify-center text-lg font-semibold"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
