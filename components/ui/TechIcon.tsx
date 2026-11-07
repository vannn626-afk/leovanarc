'use client';

import React from 'react';
import type { TechnologyItem } from '@/data/technologies';

export function TechIcon({ item, className = 'w-8 h-8' }: { item: TechnologyItem; className?: string }) {
  const { id, shortCode, accentColor, name } = item;

  // Render authentic recognizable vector geometry for major languages/tools,
  // with angular geometric monogram fallback for all 67 items.
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${name} logo`}
      role="img"
    >
      {/* Angular Outer Cutout */}
      <polygon
        points="24,2 45,12 40,41 24,46 8,41 3,12"
        fill="#080808"
        stroke={accentColor}
        strokeWidth="2"
      />
      {/* Corner Red/Accent Slash */}
      <polygon
        points="6,38 42,10 44,14 8,42"
        fill={accentColor}
        opacity="0.22"
      />

      {id === 'react' ? (
        <g stroke={accentColor} strokeWidth="1.8" fill="none">
          <ellipse cx="24" cy="24" rx="14" ry="5.5" />
          <ellipse cx="24" cy="24" rx="14" ry="5.5" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="14" ry="5.5" transform="rotate(120 24 24)" />
          <circle cx="24" cy="24" r="2.5" fill={accentColor} />
        </g>
      ) : id === 'nextjs' ? (
        <g>
          <path d="M16 32V16L32 34" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="square" />
          <path d="M31 16V26" stroke="#E60023" strokeWidth="2.8" strokeLinecap="square" />
        </g>
      ) : id === 'vuejs' ? (
        <g>
          <polygon points="12,15 24,35 36,15 31,15 24,27 17,15" fill="#4FC08D" />
          <polygon points="17,15 24,27 31,15 27,15 24,20 21,15" fill="#FFFFFF" />
        </g>
      ) : id === 'angular' ? (
        <g>
          <polygon points="24,11 13,33 17,33 24,18 31,33 35,33" fill="#DD0031" />
          <rect x="19" y="25" width="10" height="2.5" fill="#FFFFFF" />
        </g>
      ) : id === 'vercel' ? (
        <polygon points="24,12 36,33 12,33" fill="#FFFFFF" />
      ) : id === 'tailwindcss' ? (
        <path
          d="M14 22C15.5 18 18.5 17 22 19C24 20 25.5 21.5 28 21C30 20.5 31.5 19 33 17C31.5 21 28.5 22 25 20C23 19 21.5 17.5 19 18C17 18.5 15.5 20 14 22ZM11 29C12.5 25 15.5 24 19 26C21 27 22.5 28.5 25 28C27 27.5 28.5 26 30 24C28.5 28 25.5 29 22 27C20 26 18.5 24.5 16 25C14 25.5 12.5 27 11 29Z"
          fill="#06B6D4"
        />
      ) : id === 'docker' ? (
        <g fill="#2496ED">
          <rect x="14" y="22" width="4" height="4" />
          <rect x="19" y="22" width="4" height="4" />
          <rect x="24" y="22" width="4" height="4" />
          <rect x="19" y="17" width="4" height="4" />
          <rect x="24" y="17" width="4" height="4" />
          <path d="M12 27H35C35 32 30 35 23 35C16 35 12 32 12 27Z" />
        </g>
      ) : id === 'git' || id === 'github' || id === 'gitlab' ? (
        <g stroke={accentColor} strokeWidth="2.2">
          <circle cx="17" cy="17" r="3" fill="#080808" />
          <circle cx="31" cy="17" r="3" fill="#080808" />
          <circle cx="24" cy="32" r="3" fill="#080808" />
          <path d="M17 20V25L24 29M31 20V25L24 29" />
        </g>
      ) : (
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize={shortCode.length > 3 ? '10' : '12'}
          fontWeight="800"
          fontFamily="monospace"
          letterSpacing="0.04em"
        >
          {shortCode}
        </text>
      )}
    </svg>
  );
}
