import React from 'react';
import type { Metadata } from 'next';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { BeyondDevelopmentSection } from '@/components/achievements/BeyondDevelopmentSection';
import { CinematicButton } from '@/components/ui/CinematicButton';

export const metadata: Metadata = {
  title: 'Beyond Development — Immortal Rank & Off The Grid',
  description:
    'Discover another side of LEOVAN, also known as Mohammad Sofandi: Mobile Legends: Bang Bang IMMORTAL tier achievement and personal favorites.',
  alternates: {
    canonical: 'https://leovan.my.id/achievements',
  },
};

export default function AchievementsPage() {
  return (
    <UniverseShell activeSection="achievements">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 bg-[#030303]/90 sm:bg-transparent">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            ROUTE // /ACHIEVEMENTS
          </p>
          <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LEOVAN — ACHIEVEMENTS &amp; OFF THE GRID
          </h1>
        </div>
        <CinematicButton href="/contact" variant="primary" className="w-full sm:w-auto">
          LET&apos;S CONNECT
        </CinematicButton>
      </div>

      <BeyondDevelopmentSection />
    </UniverseShell>
  );
}
