/**
 * GoldBorderCard — Effect 1
 * Mechanic: rotating conic-gradient border via CSS custom property animation.
 * Brand palette: Royal Gold (#D4AF37) → Ivory (#FAF7F0) → Sage Whisper (#B5C4AE)
 * 80/20 rule: Black panel dominant, gold border accent only.
 * Reserved for 1–2 standout hero elements per page.
 * Respects prefers-reduced-motion: animation paused at system level.
 */
"use client";

export default function GoldBorderCard({ children, className = "" }) {
  return (
    <div className={`gold-border-card ${className}`} aria-label="Signature card">
      <div className="gold-border-card__inner">{children}</div>
      <style jsx>{`
        @keyframes rotateBorder {
          from { --border-angle: 0deg; }
          to   { --border-angle: 360deg; }
        }

        @property --border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .gold-border-card {
          position: relative;
          border-radius: 1.25rem;
          padding: 1.5px;
          background: conic-gradient(
            from var(--border-angle),
            #2a2a18 0%,
            #D4AF37 12%,
            #FAF7F0 25%,
            #B5C4AE 38%,
            #D4AF37 50%,
            #FAF7F0 62%,
            #B5C4AE 75%,
            #D4AF37 88%,
            #2a2a18 100%
          );
          animation: rotateBorder 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-border-card {
            animation: none;
            background: linear-gradient(135deg, #D4AF37, #B5C4AE);
          }
        }

        .gold-border-card__inner {
          position: relative;
          border-radius: calc(1.25rem - 1.5px);
          background: #0a0a0a;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
