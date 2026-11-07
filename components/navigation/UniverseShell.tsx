'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { GlobalNavigation } from '@/components/navigation/GlobalNavigation';
import { GlobalFooter } from '@/components/navigation/GlobalFooter';

const LeovanUniverseCanvas = dynamic(
  () =>
    import('@/components/three/LeovanUniverseCanvas').then((mod) => mod.LeovanUniverseCanvas),
  { ssr: false }
);

interface UniverseShellProps {
  children: React.ReactNode;
  activeSection?: 'home' | 'about' | 'stack' | 'projects' | 'achievements' | 'contact';
}

export function UniverseShell({ children, activeSection = 'home' }: UniverseShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-white selection:bg-[#E60023] selection:text-white relative overflow-x-hidden">
      {/* Real 3D Three.js LV Monogram & Geometric Shards Background */}
      <LeovanUniverseCanvas activeSection={activeSection} />

      {/* Sticky 3-Zone Navigation Header */}
      <GlobalNavigation />

      {/* Main Content */}
      <main id="main-content" className="relative flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}
