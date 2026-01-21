import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="container py-4 text-xs md:text-sm text-gray-400"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-white hover:underline underline-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gray-100" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-gray-500">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
