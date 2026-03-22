"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import ErrorAnimation from "../../public/error-404.json";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-md mx-auto">
        <Lottie animationData={ErrorAnimation} loop={true} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity">
        Back to Home
      </Link>
    </div>
  );
}
