import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#FDC448]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-lg mb-8 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#FDC448] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
          >
            Go Back Home
          </Link>
          <Link
            href="/services"
            className="border-2 border-[#FDC448] text-[#FDC448] px-6 py-3 rounded-full font-bold hover:bg-[#FDC448] hover:text-black transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
