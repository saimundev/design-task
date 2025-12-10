"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We encountered an error while loading this page. Please check your
        internet connection or try again later.
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
