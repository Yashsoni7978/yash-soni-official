/**
 * GlowCard — Effect 3
 * Mechanic: dark card with a blurred dual-layer gold/ivory glow behind via
 * a pseudo-element, and a rotating gradient border on hover.
 * Brand palette: outer blur Royal Gold at low opacity, inner border gradient
 * Royal Gold → Sage Whisper. Used sparingly (credentials / "Why Yash" subsections).
 * Respects prefers-reduced-motion: border animation paused.
 */
"use client";

export default function GlowCard({ children, className = "" }) {
  return (
    <div className={`glow-card-wrapper ${className}`}>
      <div className="glow-card-body">{children}</div>
      <style jsx>{`
        @keyframes glowRotate {
          from { --glow-angle: 0deg; }
          to   { --glow-angle: 360deg; }
        }

        @property --glow-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .glow-card-wrapper {
          position: relative;
          border-radius: 1.25rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(212,175,55,0.3), rgba(181,196,174,0.15), rgba(212,175,55,0.08));
          isolation: isolate;
          transition: background 0.4s ease;
        }

        .glow-card-wrapper::after {
          content: '';
          position: absolute;
          inset: -16px;
          border-radius: 1.5rem;
          background: radial-gradient(ellipse at 40% 40%,
            rgba(212,175,55,0.12) 0%,
            rgba(181,196,174,0.06) 45%,
            transparent 70%
          );
          filter: blur(20px);
          z-index: -1;
          opacity: 0.8;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .glow-card-wrapper:hover::after {
          opacity: 1;
        }

        .glow-card-wrapper:hover {
          background: conic-gradient(
            from var(--glow-angle),
            rgba(212,175,55,0.05) 0%,
            rgba(212,175,55,0.5) 15%,
            rgba(181,196,174,0.35) 35%,
            rgba(212,175,55,0.5) 55%,
            rgba(181,196,174,0.35) 75%,
            rgba(212,175,55,0.5) 90%,
            rgba(212,175,55,0.05) 100%
          );
          animation: glowRotate 6s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-card-wrapper:hover {
            animation: none;
          }
          .glow-card-wrapper::after {
            display: none;
          }
        }

        .glow-card-body {
          position: relative;
          border-radius: calc(1.25rem - 1px);
          background: #0d0d0d;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
