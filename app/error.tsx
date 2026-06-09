"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * error.tsx — Next.js App Router error boundary
 *
 * MUST be a Client Component ("use client").
 * Renders when an unhandled error occurs in a route segment.
 * Does NOT replace not-found.tsx (that handles 404s separately).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log errors to an error reporting service in production
    // Example: Sentry.captureException(error);
    console.error("Route error:", error);
  }, [error]);

  return (
    <div
      className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 relative overflow-hidden"
      role="main"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-5 py-2 mb-8">
          <span className="text-red-400 text-[10px] font-bold uppercase tracking-widest">
            Something went wrong
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-5 tracking-tight leading-[0.95]">
          Technical{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
            }}
          >
            Intermission.
          </span>
        </h1>

        <p className="text-zinc-400 mb-3 text-sm md:text-base leading-relaxed">
          Even the best events hit an unexpected pause. We&apos;re on it.
        </p>
        {error?.digest && (
          <p className="text-zinc-700 mb-8 text-xs font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105"
            aria-label="Try loading this page again"
          >
            Try Again
          </button>
          <Link href="/">
            <button
              className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
              aria-label="Return to the Anchor Yash Soni homepage"
            >
              Go Home
            </button>
          </Link>
        </div>

        <div className="mt-10 text-zinc-700 text-xs">
          Persist? Contact:{" "}
          <a
            href="mailto:info@yashsoni.in"
            className="text-[#B5952F] hover:underline"
            aria-label="Email Anchor Yash Soni for support"
          >
            info@yashsoni.in
          </a>
        </div>
      </div>
    </div>
  );
}
