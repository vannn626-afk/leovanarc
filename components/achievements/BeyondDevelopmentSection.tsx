'use client';

import React from 'react';
import { ACHIEVEMENT_DATA, PERSONALITY_ITEMS } from '@/data/profile';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { Trophy, Flame, Utensils, CupSoda, ShieldAlert, Gamepad2 } from 'lucide-react';

export function BeyondDevelopmentSection() {
  const getTraitIcon = (id: string) => {
    switch (id) {
      case 'food':
        return <Utensils className="w-5 h-5 text-[#E60023]" />;
      case 'drink':
        return <CupSoda className="w-5 h-5 text-[#E60023]" />;
      case 'character':
        return <ShieldAlert className="w-5 h-5 text-[#E60023]" />;
      default:
        return <Gamepad2 className="w-5 h-5 text-[#E60023]" />;
    }
  };

  return (
    <section
      id="beyond-development-section"
      aria-labelledby="heading-beyond-development"
      className="relative z-10 py-16 sm:py-24 border-t border-white/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PART 1: SECTION 14 — ACHIEVEMENTS: BEYOND DEVELOPMENT */}
        <div className="space-y-12">
          <div className="border-b border-white/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E60023] font-bold">
                CHAPTER 04 · {ACHIEVEMENT_DATA.subheading}
              </p>
              <h2
                id="heading-beyond-development"
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
              >
                {ACHIEVEMENT_DATA.heading}
              </h2>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
              <Trophy className="w-4 h-4 text-[#E60023]" />
              <span>COMPETITIVE MILESTONE</span>
            </div>
          </div>

          {/* Oversized IMMORTAL Typography + Character Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080808] border-2 border-[#E60023] p-6 sm:p-10 relative overflow-hidden">
            {/* Diagonal Red Slash Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#E60023]/15 rotate-12"
            />

            <div className="lg:col-span-7 space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2.5 bg-[#030303] border border-white/20 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white">
                <Flame className="w-4 h-4 text-[#E60023]" />
                <span>GAME: {ACHIEVEMENT_DATA.game}</span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A0A0A0]">
                  HIGHEST COMPETITIVE TIER ACHIEVED
                </p>
                <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none drop-shadow-[6px_6px_0px_#E60023]">
                  {ACHIEVEMENT_DATA.rank}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                {ACHIEVEMENT_DATA.description}
              </p>

              <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15 font-mono text-xs">
                <div>
                  <dt className="text-[#A0A0A0]">TITLE / ARENA</dt>
                  <dd className="text-white font-bold mt-1">{ACHIEVEMENT_DATA.game}</dd>
                </div>
                <div>
                  <dt className="text-[#A0A0A0]">RANK STATUS</dt>
                  <dd className="text-[#E60023] font-bold mt-1">{ACHIEVEMENT_DATA.rank}</dd>
                </div>
              </dl>
            </div>

            {/* Character beside IMMORTAL typography */}
            <div className="lg:col-span-5 relative z-10">
              <LeovanCharacter25D variant="achievements" captionCode="RANK // IMMORTAL" />
            </div>
          </div>
        </div>

        {/* PART 2: SECTION 15 — PERSONALITY: OFF THE GRID */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-6">
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#E60023] font-bold">
                A LITTLE MORE ABOUT LEOVAN.
              </p>
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                OFF THE GRID.
              </h3>
            </div>
            <span className="font-mono text-xs text-[#A0A0A0] uppercase tracking-widest">
              COMIC DOSSIER // PERSONAL FAVORITES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONALITY_ITEMS.map((item) => (
              <article
                key={item.id}
                className="group relative bg-[#080808] border-2 border-white/20 hover:border-[#E60023] p-6 transition-transform duration-150 hover:-translate-y-1 flex flex-col justify-between gap-6"
              >
                {/* Abstract Original Geometric SVG Accent in Corner */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-widest">
                    {item.comicCode}
                  </span>
                  {getTraitIcon(item.id)}
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
                    {item.category}
                  </p>
                  <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    {item.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-1">
                    {item.caption}
                  </p>
                </div>

                {/* Original Abstract Web/Slash SVG Bar */}
                <svg
                  viewBox="0 0 160 12"
                  className="w-full h-3 opacity-60 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  <polygon points="0,10 140,2 160,6 10,12" fill="#E60023" />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
