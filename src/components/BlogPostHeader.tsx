import Link from "next/link";

type BlogPostHeaderProps = {
  title: string;
  description: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  backHref?: string;
};

export default function BlogPostHeader({
  title,
  description,
  dateLabel,
  readingTime,
  category,
  backHref = "/blog",
}: BlogPostHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(1000px 500px at 20% 10%, rgba(152,102,242,0.45), transparent 60%), radial-gradient(900px 520px at 85% 20%, rgba(253,196,72,0.22), transparent 55%), radial-gradient(900px 520px at 50% 100%, rgba(55,25,202,0.30), transparent 60%)",
        }}
      />
      <div className="container pt-10 lg:pt-14 pb-8">
        <div className="max-w-3xl">
        <Link
          href={backHref}
          className="inline-flex items-center text-gray-200 text-sm underline underline-offset-4"
        >
          Back to blog
        </Link>

        <p className="mt-6 inline-flex w-fit text-xs tracking-[0.22em] uppercase font-semibold rounded-full px-3 py-1 border border-white/10 bg-white/5 text-gray-200/90">
          {category}
        </p>

        <h1 className="mt-3 text-white font-semibold leading-[1.05] !text-[clamp(2.2rem,5vw,4rem)]">
          {title}
        </h1>

        <p className="mt-4 text-gray-200 text-sm md:text-base">{description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm text-gray-200/80">
          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1">
            {dateLabel}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1">
            {readingTime}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1">
            KYTWO
          </span>
        </div>
      </div>
      </div>
    </header>
  );
}

