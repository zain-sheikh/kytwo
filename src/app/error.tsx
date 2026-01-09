"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="bg-[#FDC448] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
