'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { LvMonogram } from '@/components/ui/LvLogo';
import { soundManager } from '@/lib/sound';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'STACK', href: '/stack' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ACHIEVEMENTS', href: '/achievements' },
] as const;

export function GlobalNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setSoundEnabled(soundManager.isEnabled()));
  }, []);

  useEffect(() => {
    queueMicrotask(() => setMobileMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleToggleSound = () => {
    const nextState = soundManager.toggle();
    setSoundEnabled(nextState);
  };

  return (
    <>
      <header className="sticky top-0 z-40 h-16 sm:h-[4.5rem] w-full bg-[#030303]/95 border-b border-white/15 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (One Line) */}
        <Link
          href="/"
          onClick={() => soundManager.playClick()}
          onMouseEnter={() => soundManager.playHover()}
          className="group flex items-center gap-3 text-xl font-display font-black tracking-tighter text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E60023]"
          aria-label="LEOVAN Home"
        >
          <LvMonogram size={34} animated />
          <span>LEOVAN</span>
        </Link>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-xs font-mono font-bold tracking-widest uppercase"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E60023] ${
                  isActive ? 'text-white' : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E60023] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Desktop CONTACT CTA / Mobile Menu Trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            onClick={() => soundManager.playClick()}
            onMouseEnter={() => soundManager.playHover()}
            aria-current={pathname === '/contact' ? 'page' : undefined}
            className={`hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors whitespace-nowrap shrink-0 border ${
              pathname === '/contact'
                ? 'bg-white text-[#030303] border-white'
                : 'bg-[#E60023] text-white border-[#E60023] hover:bg-[#990019]'
            }`}
          >
            <span>CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 bg-[#080808] text-white border border-white/20 hover:border-[#E60023] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E60023]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 top-16 z-50 bg-[#030303] flex flex-col justify-between p-6 overflow-y-auto md:hidden"
        >
          <nav aria-label="Mobile Navigation Links" className="flex flex-col gap-3 mt-4">
            {[...NAV_ITEMS, { label: 'CONTACT', href: '/contact' }].map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    soundManager.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 border transition-colors ${
                    isActive
                      ? 'bg-[#E60023] text-white border-[#E60023]'
                      : 'bg-[#080808] text-white border-white/15 hover:border-[#E60023]'
                  }`}
                >
                  <span className="font-display text-2xl font-black uppercase tracking-tight">
                    0{idx + 1}. {item.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#A0A0A0]">
              <p className="text-white font-bold">LEOVAN</p>
              <p>ALSO KNOWN AS MOHAMMAD SOFANDI.</p>
            </div>

            <button
              type="button"
              onClick={handleToggleSound}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#080808] border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:border-[#E60023] cursor-pointer whitespace-nowrap shrink-0"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#E60023]" />
                  <span>SFX: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#A0A0A0]" />
                  <span>SFX: OFF</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
