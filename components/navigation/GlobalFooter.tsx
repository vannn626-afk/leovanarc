'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LvMonogram, LeovanWordmark } from '@/components/ui/LvLogo';
import { BRAND_IDENTITY, DEVELOPER_PROFILE } from '@/data/profile';
import { CONTACT_DETAILS } from '@/data/contacts';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { soundManager } from '@/lib/sound';

export function GlobalFooter() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setSoundEnabled(soundManager.isEnabled()));
  }, []);

  const handleToggleSound = () => {
    const next = soundManager.toggle();
    setSoundEnabled(next);
  };

  return (
    <footer className="relative z-10 bg-[#030303] border-t-2 border-[#E60023] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          {/* Column 1: Official Brand Signature */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <LvMonogram size={44} />
              <LeovanWordmark className="h-7 w-auto" />
            </div>
            <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#E60023] font-bold">
              {BRAND_IDENTITY.footerSignature}
            </p>
            <p className="text-sm text-[#A0A0A0] max-w-md leading-relaxed">
              {BRAND_IDENTITY.aboutSummary}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/80">
              <span>{BRAND_IDENTITY.mainSlogan}</span>
              <span aria-hidden="true" className="text-[#E60023]">
                ·
              </span>
              <span>{BRAND_IDENTITY.secondarySlogan}</span>
            </div>
          </div>

          {/* Column 2: Universe Directory */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
              UNIVERSE ROUTES
            </h2>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <Link href="/" className="text-[#A0A0A0] hover:text-white transition-colors">
                  01. HOME — HERO
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A0A0A0] hover:text-white transition-colors">
                  02. ABOUT — BEHIND THE CODE
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-[#A0A0A0] hover:text-white transition-colors">
                  03. STACK — THE ARSENAL
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#A0A0A0] hover:text-white transition-colors"
                >
                  04. PROJECTS — THE ARCHIVE
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-[#A0A0A0] hover:text-white transition-colors"
                >
                  05. ACHIEVEMENTS — IMMORTAL
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A0A0A0] hover:text-white transition-colors">
                  06. CONTACT — LET&apos;S CONNECT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Channels & Sound Control */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
              DIRECT CHANNELS
            </h2>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="inline-flex items-center gap-1.5 text-[#A0A0A0] hover:text-white transition-colors"
                >
                  <span>{CONTACT_DETAILS.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E60023]" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A0A0A0] hover:text-white transition-colors"
                >
                  <span>GITHUB / vannn626-afk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E60023]" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_DETAILS.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A0A0A0] hover:text-white transition-colors"
                >
                  <span>WHATSAPP CHANNEL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E60023]" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleToggleSound}
                aria-label={soundEnabled ? 'Mute UI sound effects' : 'Enable UI sound effects'}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#080808] border border-white/20 hover:border-[#E60023] text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#E60023]" />
                    <span>UI SOUND: ENABLED</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#A0A0A0]" />
                    <span>UI SOUND: MUTED</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Official Identity Statement */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A0A0A0]">
          <p>
            {BRAND_IDENTITY.officialStatement} — {DEVELOPER_PROFILE.location},{' '}
            {DEVELOPER_PROFILE.country}.
          </p>
          <p className="text-white/70">A MIND BEHIND THE CODE.</p>
        </div>
      </div>
    </footer>
  );
}
