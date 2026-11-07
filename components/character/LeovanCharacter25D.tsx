'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LvMonogram } from '@/components/ui/LvLogo';

export type CharacterSceneVariant =
  | 'hero'
  | 'about'
  | 'stack'
  | 'projects'
  | 'achievements'
  | 'contact';

interface LeovanCharacter25DProps {
  variant?: CharacterSceneVariant;
  className?: string;
  captionCode?: string;
  interactive?: boolean;
}

export function LeovanCharacter25D({
  variant = 'hero',
  className = '',
  captionCode = 'PERSONA // LV-01',
  interactive = true,
}: LeovanCharacter25DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgSrc, setImgSrc] = useState('/images/leovan-main-character.png');

  useEffect(() => {
    if (!interactive) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth * 0.5)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight * 0.5)));
      setTilt({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Distinct compositions per route so every page feels uniquely staged
  const variantConfig: Record<
    CharacterSceneVariant,
    {
      frameClass: string;
      slashAngle: string;
      imgTransform: string;
      tagText: string;
      accentPosition: string;
    }
  > = {
    hero: {
      frameClass: 'min-h-[290px] sm:min-h-[380px] lg:min-h-[560px] py-4',
      slashAngle: '-rotate-12',
      imgTransform: 'scale-95 sm:scale-100',
      tagText: 'PROTAGONIST · LEOVAN',
      accentPosition: 'bottom-2 right-2 sm:bottom-6 sm:right-6',
    },
    about: {
      frameClass: 'min-h-[280px] sm:min-h-[360px] py-2',
      slashAngle: 'rotate-6',
      imgTransform: 'scale-95 sm:scale-105 -translate-y-1',
      tagText: 'ORIGIN · SUKAGUMIWANG',
      accentPosition: 'top-2 left-2 sm:top-6 sm:left-6',
    },
    stack: {
      frameClass: 'min-h-[240px] sm:min-h-[280px] py-2',
      slashAngle: '-rotate-6',
      imgTransform: 'scale-95 sm:scale-105 translate-x-1',
      tagText: 'ARSENAL · ARCHITECT',
      accentPosition: 'bottom-2 left-2 sm:bottom-4 sm:left-4',
    },
    projects: {
      frameClass: 'min-h-[250px] sm:min-h-[300px] py-2',
      slashAngle: 'rotate-12',
      imgTransform: 'scale-95 sm:scale-100',
      tagText: 'ARCHIVE · CREATOR',
      accentPosition: 'top-2 right-2 sm:top-4 sm:right-4',
    },
    achievements: {
      frameClass: 'min-h-[280px] sm:min-h-[380px] py-2',
      slashAngle: '-rotate-15',
      imgTransform: 'scale-95 sm:scale-105',
      tagText: 'RANK · IMMORTAL',
      accentPosition: 'bottom-2 left-2 sm:bottom-6 sm:left-6',
    },
    contact: {
      frameClass: 'min-h-[260px] sm:min-h-[340px] py-2',
      slashAngle: 'rotate-8',
      imgTransform: 'scale-95 sm:scale-100',
      tagText: 'SIGNAL · READY',
      accentPosition: 'top-2 left-2 sm:top-6 sm:left-6',
    },
  };

  const cfg = variantConfig[variant];

  return (
    <div
      ref={containerRef}
      data-testid={`character-25d-${variant}`}
      className={`relative flex items-center justify-center select-none overflow-hidden ${cfg.frameClass} ${className}`}
      style={{ perspective: '1100px' }}
    >
      {/* Layer 1: Deep Angular Crimson Backdrop Cutout */}
      <div
        aria-hidden="true"
        className="absolute inset-4 bg-[#080808] border border-white/10 transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${-tilt.y * 4}deg) rotateY(${tilt.x * 4}deg) translateZ(-40px)`,
          clipPath: 'polygon(6% 0%, 100% 4%, 94% 100%, 0% 96%)',
        }}
      >
        {/* Halftone / Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(#E60023 1.25px, transparent 1.25px), radial-gradient(#ffffff 0.75px, #080808 0.75px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        />
      </div>

      {/* Layer 2: Dramatic Red Diagonal Slash Beam */}
      <div
        aria-hidden="true"
        className={`absolute w-[135%] h-20 sm:h-28 bg-[#E60023] ${cfg.slashAngle} transition-transform duration-200 ease-out shadow-[0_0_50px_rgba(230,0,35,0.45)]`}
        style={{
          transform: `translate3d(${tilt.x * -14}px, ${tilt.y * -10}px, -15px)`,
          clipPath: 'polygon(0 20%, 100% 0%, 96% 85%, 4% 100%)',
        }}
      />

      {/* Layer 3: Secondary White/Black Comic Frame Cut */}
      <div
        aria-hidden="true"
        className="absolute w-[82%] h-[78%] border-2 border-white/80 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${tilt.x * -6}px, ${tilt.y * -6}px, 0px) skewX(-6deg)`,
        }}
      />

      {/* Layer 4: Shadow Silhouette Offset for 2.5D Depth */}
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc !== '/assets/aistudio/Picsart_26-11-07_12-37-25-519_7283776c.png') {
            setImgSrc('/assets/aistudio/Picsart_26-11-07_12-37-25-519_7283776c.png');
          }
        }}
        className={`relative z-10 w-full max-w-[460px] h-auto object-contain pointer-events-none opacity-45 brightness-0 invert-[0.15] sepia saturate-[80] hue-rotate-[345deg] transition-transform duration-200 ease-out ${cfg.imgTransform}`}
        style={{
          transform: `translate3d(${tilt.x * -18 + 14}px, ${tilt.y * -12 + 10}px, 10px)`,
        }}
      />

      {/* Layer 5: Exact User-Provided Main Character Artwork */}
      <img
        src={imgSrc}
        alt="LEOVAN, also known as Mohammad Sofandi — Main Character Digital Persona"
        referrerPolicy="no-referrer"
        onError={() => {
          if (imgSrc !== '/assets/aistudio/Picsart_26-11-07_12-37-25-519_7283776c.png') {
            setImgSrc('/assets/aistudio/Picsart_26-11-07_12-37-25-519_7283776c.png');
          }
        }}
        className={`absolute z-20 w-full max-w-[460px] h-auto object-contain pointer-events-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.92)] transition-transform duration-200 ease-out ${cfg.imgTransform}`}
        style={{
          transform: `rotateX(${-tilt.y * 5}deg) rotateY(${tilt.x * 6}deg) translate3d(${tilt.x * 12}px, ${tilt.y * 10}px, 35px)`,
        }}
      />

      {/* Layer 6: Foreground Editorial Technical Tag & LV Monogram */}
      <div
        className={`absolute z-30 ${cfg.accentPosition} flex items-center gap-2.5 bg-[#030303]/95 border border-[#E60023] px-3 py-1.5 shadow-lg transition-transform duration-200 ease-out`}
        style={{
          transform: `translate3d(${tilt.x * 16}px, ${tilt.y * 12}px, 55px)`,
        }}
      >
        <LvMonogram size={22} />
        <div className="flex flex-col">
          <span className="font-mono text-[10px] tracking-widest text-[#E60023] font-bold leading-none">
            {captionCode}
          </span>
          <span className="font-mono text-[11px] tracking-wider text-white font-semibold leading-tight mt-0.5">
            {cfg.tagText}
          </span>
        </div>
      </div>
    </div>
  );
}
