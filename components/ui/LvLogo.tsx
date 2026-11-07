'use client';

import React from 'react';

interface LvLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function LvMonogram({ className = '', size = 44, animated = false }: LvLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="LV Monogram Logo"
      role="img"
    >
      {/* Angular Shield Frame */}
      <polygon
        points="60,4 114,28 100,104 60,116 20,104 6,28"
        fill="#080808"
        stroke="#E60023"
        strokeWidth="3.5"
        className={animated ? 'transition-transform duration-300 origin-center group-hover:scale-105' : ''}
      />
      {/* Inner Geometric Hairline */}
      <polygon
        points="60,12 106,32 94,98 60,108 26,98 14,32"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.16"
        strokeWidth="1"
      />
      {/* Red Diagonal Slash */}
      <polygon
        points="14,88 106,22 110,30 18,96"
        fill="#E60023"
        opacity="0.9"
      />
      {/* Geometric L */}
      <path
        d="M26 28 L42 24 L36 82 L64 82 L60 96 L20 96 Z"
        fill="#FFFFFF"
      />
      {/* Geometric V */}
      <path
        d="M54 28 L70 28 L78 72 L92 28 L106 28 L84 96 L68 96 Z"
        fill="#E60023"
      />
      <path
        d="M56 28 L68 28 L77 76 L72 96 L68 96 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LeovanWordmark({ className = 'h-7 w-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="LEOVAN Wordmark"
      role="img"
    >
      <polygon points="8,68 412,12 416,22 12,76" fill="#E60023" />
      {/* L */}
      <path d="M18 14 H36 L30 56 H58 L55 70 H10 Z" fill="#FFFFFF" />
      {/* E */}
      <path d="M68 14 H116 L114 26 H83 L81 36 H108 L106 48 H79 L77 58 H112 L109 70 H60 Z" fill="#FFFFFF" />
      {/* O */}
      <path d="M130 14 H178 L170 70 H122 Z M144 26 L138 58 H156 L162 26 Z" fill="#FFFFFF" />
      {/* V */}
      <path d="M186 14 H204 L210 52 L226 14 H244 L216 70 H198 Z" fill="#E60023" />
      {/* A */}
      <path d="M262 14 H284 L298 70 H280 L277 56 H259 L253 70 H235 Z M270 28 L263 45 H275 Z" fill="#FFFFFF" />
      {/* N */}
      <path d="M310 14 H328 L346 48 L351 14 H368 L360 70 H343 L324 36 L319 70 H302 Z" fill="#FFFFFF" />
      <polygon points="382,14 406,14 394,42" fill="#E60023" />
    </svg>
  );
}
