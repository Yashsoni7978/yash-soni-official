/**
 * loading.tsx — Next.js App Router loading UI
 *
 * Renders as a React Suspense boundary fallback during server-side
 * data fetching / route transitions. Keeps perceived performance high
 * and prevents layout shift (CLS).
 */
export default function Loading() {
  return (
    <div
      className="min-h-screen bg-[#050505] flex items-center justify-center"
      role="status"
      aria-label="Loading page content"
      aria-live="polite"
    >
      {/* Gold pulse animation matching brand identity */}
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo mark */}
        <div className="relative">
          <div
            className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 animate-spin"
            style={{ borderTopColor: "#D4AF37" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-2 w-12 h-12 rounded-full border border-[#D4AF37]/10 animate-spin"
            style={{
              borderTopColor: "#B5952F",
              animationDirection: "reverse",
              animationDuration: "1.5s",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>
        </div>

        {/* Brand name */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-600 animate-pulse"
            aria-hidden="true"
          >
            ANCHOR YASH
          </span>
          <div
            className="h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
