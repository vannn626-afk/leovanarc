'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { soundManager } from '@/lib/sound';

interface CinematicButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function CinematicButton({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
  ariaLabel,
  type = 'button',
  disabled = false,
}: CinematicButtonProps) {
  const baseClasses =
    'group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E60023] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] whitespace-nowrap shrink-0 select-none overflow-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#E60023] text-white border border-[#E60023] hover:bg-[#990019]'
      : variant === 'secondary'
      ? 'bg-[#080808] text-white border border-white/25 hover:border-[#E60023] hover:text-white'
      : 'bg-transparent text-[#A0A0A0] border border-white/15 hover:text-white hover:border-[#E60023]';

  const handleMouseEnter = () => {
    soundManager.playHover();
  };

  const handleClick = () => {
    soundManager.playClick();
    if (onClick) onClick();
  };

  const content = (
    <>
      {/* Diagonal Red Wipe Overlay */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-full skew-x-[-18deg] transition-transform duration-200 ease-out group-hover:translate-x-0 ${
          variant === 'primary' ? 'bg-white/15' : 'bg-[#E60023]/20'
        }`}
      />
      {/* Corner Cut Accent */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#030303] translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-l border-[#E60023]"
      />
      <span className="relative z-10 flex items-center gap-2.5">
        <span>{children}</span>
        {external ? (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          className={`${baseClasses} ${variantClasses} ${className}`}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}
