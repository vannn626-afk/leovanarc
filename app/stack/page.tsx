import React from 'react';
import type { Metadata } from 'next';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { TheArsenalSection } from '@/components/stack/TheArsenalSection';
import { ARSENAL_HEADER } from '@/data/technologies';
import { CinematicButton } from '@/components/ui/CinematicButton';

export const metadata: Metadata = {
  title: 'The Arsenal — Technology & Languages Collection',
  description: ARSENAL_HEADER.description,
  alternates: {
    canonical: 'https://leovan.my.id/stack',
  },
};

export default function StackPage() {
  return (
    <UniverseShell activeSection="stack">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 bg-[#030303]/90 sm:bg-transparent">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            ROUTE // /STACK
          </p>
          <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LEOVAN — TECHNOLOGY ARSENAL
          </h1>
        </div>
        <CinematicButton href="/projects" variant="secondary" className="w-full sm:w-auto">
          VIEW PROJECT ARCHIVE
        </CinematicButton>
      </div>

      <TheArsenalSection />
    </UniverseShell>
  );
}
