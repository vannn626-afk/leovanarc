import React from 'react';
import type { Metadata } from 'next';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { TheArchiveSection } from '@/components/projects/TheArchiveSection';
import { CinematicButton } from '@/components/ui/CinematicButton';

export const metadata: Metadata = {
  title: 'The Archive — Selected Digital Creations by LEOVAN',
  description:
    'Explore digital projects built by LEOVAN, also known as Mohammad Sofandi, including LEOVAN | TOOLS and LEOVAN | AI.',
  alternates: {
    canonical: 'https://leovan.my.id/projects',
  },
};

export default function ProjectsPage() {
  return (
    <UniverseShell activeSection="projects">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 bg-[#030303]/90 sm:bg-transparent">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            ROUTE // /PROJECTS
          </p>
          <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LEOVAN — PROJECT ARCHIVE
          </h1>
        </div>
        <CinematicButton href="/achievements" variant="secondary" className="w-full sm:w-auto">
          BEYOND DEVELOPMENT
        </CinematicButton>
      </div>

      <TheArchiveSection />
    </UniverseShell>
  );
}
