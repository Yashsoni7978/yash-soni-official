"use client";

import React, { useState, useEffect } from 'react';

// Helper to generate random box shadows
const generateBoxShadows = (n) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  }
  return value;
};

export default function StarsBackground({ speed = 1 }) {
  const [mounted, setMounted] = useState(false);
  const [shadows, setShadows] = useState({ small: '', medium: '', big: '' });

  useEffect(() => {
    setShadows({
      small: generateBoxShadows(700),
      medium: generateBoxShadows(200),
      big: generateBoxShadows(100)
    });
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-black -z-50" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-black -z-50 pointer-events-none">
      {/* Inline styles for animations */}
      <style>{`
        .bg-radial-space {
          background: radial-gradient(ellipse at bottom, #111111 0%, #000000 100%);
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>

      {/* Background Gradient (True Black) */}
      <div className="absolute inset-0 bg-radial-space z-0" />

      {/* Stars Layer 1 (Small) */}
      <div 
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent z-10 animate-[animStar_50s_linear_infinite]"
        style={{ 
          boxShadow: shadows.small,
          animationDuration: `${50 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[1px] h-[1px] bg-transparent"
          style={{ boxShadow: shadows.small }}
        />
      </div>

      {/* Stars Layer 2 (Medium) */}
      <div 
        className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent z-10 animate-[animStar_100s_linear_infinite]"
        style={{ 
          boxShadow: shadows.medium,
          animationDuration: `${100 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
          style={{ boxShadow: shadows.medium }}
        />
      </div>

      {/* Stars Layer 3 (Big) */}
      <div 
        className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent z-10 animate-[animStar_150s_linear_infinite]"
        style={{ 
          boxShadow: shadows.big,
          animationDuration: `${150 / speed}s`
        }}
      >
        <div 
          className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent"
          style={{ boxShadow: shadows.big }}
        />
      </div>
    </div>
  );
}
