import React from 'react';
import type { Metadata } from 'next';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { BehindTheCodeSection } from '@/components/about/BehindTheCodeSection';
import { BRAND_IDENTITY } from '@/data/profile';
import { CinematicButton } from '@/components/ui/CinematicButton';

export const metadata: Metadata = {
  title: 'Behind The Code — About LEOVAN (Mohammad Sofandi)',
  description: BRAND_IDENTITY.aboutSummary,
  alternates: {
    canonical: 'https://leovan.my.id/about',
  },
};

export default function AboutPage() {
  return (
    <UniverseShell activeSection="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 bg-[#030303]/90 sm:bg-transparent">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            ROUTE // /ABOUT
          </p>
          <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LEOVAN — ALSO KNOWN AS MOHAMMAD SOFANDI.
          </h1>
        </div>
        <CinematicButton href="/stack" variant="secondary" className="w-full sm:w-auto">
          EXPLORE THE ARSENAL
        </CinematicButton>
      </div>

      <BehindTheCodeSection />
    </UniverseShell>
  );
}
