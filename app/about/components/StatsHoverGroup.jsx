/**
 * StatsHoverGroup — Effect 2
 * Mechanic: flex column of stat cards — hovering one scales it up and
 * blurs siblings. Brand palette: Royal Gold, Rolex Green, Royal Hunter
 * as the three accent variants (never plain red/blue/green).
 * Respects prefers-reduced-motion: no scale/blur transitions.
 */
"use client";
import { useState } from "react";

const VARIANT_STYLES = {
  gold: {
    accent: "#D4AF37",
    glow: "rgba(212,175,55,0.18)",
    border: "rgba(212,175,55,0.3)",
    borderHover: "rgba(212,175,55,0.7)",
  },
  green: {
    accent: "#2D6A4F",   // Rolex Green
    glow: "rgba(45,106,79,0.18)",
    border: "rgba(45,106,79,0.3)",
    borderHover: "rgba(45,106,79,0.7)",
  },
  hunter: {
    accent: "#4A6741",   // Royal Hunter
    glow: "rgba(74,103,65,0.18)",
    border: "rgba(74,103,65,0.3)",
    borderHover: "rgba(74,103,65,0.7)",
  },
  sage: {
    accent: "#B5C4AE",   // Sage Whisper
    glow: "rgba(181,196,174,0.12)",
    border: "rgba(181,196,174,0.2)",
    borderHover: "rgba(181,196,174,0.5)",
  },
};

export default function StatsHoverGroup({ stats }) {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="stats-group">
        {stats.map((stat, i) => {
          const v = VARIANT_STYLES[stat.variant] || VARIANT_STYLES.gold;
          const isHovered = hovered === i;
          const isBlurred = hovered !== null && hovered !== i;

          return (
            <div
              key={i}
              className="stat-card"
              style={{
                "--accent": v.accent,
                "--glow": v.glow,
                "--border-color": isHovered ? v.borderHover : v.border,
                transform: isHovered ? "scale(1.04)" : isBlurred ? "scale(0.97)" : "scale(1)",
                filter: isBlurred ? "blur(1.5px) brightness(0.6)" : "blur(0px) brightness(1)",
                borderColor: isHovered ? v.borderHover : v.border,
                boxShadow: isHovered ? `0 0 30px ${v.glow}, 0 8px 32px rgba(0,0,0,0.4)` : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="group"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <p className="stat-value" style={{ color: v.accent }}>{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
              {stat.sub && <p className="stat-sub">{stat.sub}</p>}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .stats-group {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .stat-card {
          background: #0d0d0d;
          border: 1px solid transparent;
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          cursor: default;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.35s ease,
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card {
            transition: none !important;
            transform: none !important;
            filter: none !important;
          }
        }

        .stat-value {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          line-height: 1;
          font-family: var(--font-playfair, serif);
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #a3a3a3;
          font-weight: 600;
        }

        .stat-sub {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #525252;
          margin-top: 0.2rem;
        }
      `}</style>
    </>
  );
}
