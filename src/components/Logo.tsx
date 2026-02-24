import React, { useId } from 'react';

export default function Logo({ className = "h-10" }: { className?: string }) {
  const id = useId();
  
  return (
    <svg 
      className={className} 
      viewBox="0 0 320 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`logo-orange-${id}`} x1="8" y1="55" x2="80" y2="5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
        <linearGradient id={`logo-dark-${id}`} x1="8" y1="5" x2="80" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <g transform="translate(8, 5)">
        {/* V1 (Left) */}
        <path d="M0 0 L24 50 L48 0 L36 0 L24 25 L12 0 Z" fill={`url(#logo-dark-${id})`} />
        {/* V2 (Right) */}
        <path d="M24 0 L48 50 L72 0 L60 0 L48 25 L36 0 Z" fill={`url(#logo-orange-${id})`} />
        {/* Interlocking Diamond (V1 over V2) */}
        <path d="M36 25 L30 12.5 L36 0 L42 12.5 Z" fill={`url(#logo-dark-${id})`} />
      </g>

      {/* Typography */}
      <text 
        x="92" 
        y="40" 
        fontFamily="Inter, system-ui, sans-serif" 
        fontWeight="900" 
        fontSize="32" 
        letterSpacing="0.04em"
      >
        <tspan fill="currentColor">WORK</tspan>
        <tspan fill="#EA580C">SHOP</tspan>
      </text>
    </svg>
  );
}
