import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Anchor Yash Soni",
  description:
    "The page you are looking for does not exist. Return to the homepage to explore Anchor Yash Soni's services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 relative overflow-hidden"
      role="main"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[30vw] font-black text-white/[0.015] leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* Gold badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8">
          <span className="text-[#B5952F] text-[10px] font-bold uppercase tracking-widest">
            404 — Page Not Found
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight leading-[0.95]">
          Wrong Stage.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
            }}
          >
            Right Host.
          </span>
        </h1>

        <p className="text-zinc-400 mb-3 text-sm md:text-base leading-relaxed">
          The page you&apos;re looking for has moved, been renamed, or never
          existed. Happens at even the best events.
        </p>
        <p className="text-zinc-600 mb-10 text-sm">
          Let&apos;s get you back to centre stage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button
              className="px-8 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 w-full sm:w-auto"
              aria-label="Return to the Anchor Yash Soni homepage"
            >
              Back to Homepage
            </button>
          </Link>
          <Link href="/contact">
            <button
              className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
              aria-label="Contact Anchor Yash Soni"
            >
              Contact Yash
            </button>
          </Link>
        </div>

        {/* Quick nav links */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-3 text-zinc-600 text-[10px] font-medium tracking-widest uppercase">
          {[
            { label: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
            { label: "Sangeet Host", href: "/sangeet-anchor-jaipur" },
            { label: "Corporate Events", href: "/corporate-event-anchor-jaipur" },
            { label: "About Yash", href: "/about" },
            { label: "Blog", href: "/blog" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#B5952F] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
