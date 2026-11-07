import React from 'react';
import type { Metadata } from 'next';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { LetsConnectSection } from '@/components/contact/LetsConnectSection';
import { CinematicButton } from '@/components/ui/CinematicButton';

export const metadata: Metadata = {
  title: "Let's Connect — Contact LEOVAN (Mohammad Sofandi)",
  description:
    'Connect with LEOVAN, also known as Mohammad Sofandi, via email (vannn626@gmail.com), GitHub (vannn626-afk), or the official WhatsApp Channel.',
  alternates: {
    canonical: 'https://leovan.my.id/contact',
  },
};

export default function ContactPage() {
  return (
    <UniverseShell activeSection="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 flex flex-wrap items-center justify-between gap-4 bg-[#030303]/90 sm:bg-transparent">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            ROUTE // /CONTACT
          </p>
          <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LEOVAN — DIRECT TRANSMISSION
          </h1>
        </div>
        <CinematicButton href="/" variant="secondary" className="w-full sm:w-auto">
          RETURN TO HERO
        </CinematicButton>
      </div>

      <LetsConnectSection />
    </UniverseShell>
  );
}
