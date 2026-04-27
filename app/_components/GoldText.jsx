"use client";

const GOLD = "#D4AF37";

export const GoldText = ({ children, animate = false, className = "" }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${animate ? "sparkle-text" : ""} ${className}`}
    style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", backgroundColor: GOLD }}
  >
    {children}
  </span>
);
