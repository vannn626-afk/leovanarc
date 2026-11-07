import React from 'react';
import { UniverseShell } from '@/components/navigation/UniverseShell';
import { CinematicHeroExperience } from '@/components/hero/CinematicHeroExperience';
import { BehindTheCodeSection } from '@/components/about/BehindTheCodeSection';
import { TheArsenalSection } from '@/components/stack/TheArsenalSection';
import { TheArchiveSection } from '@/components/projects/TheArchiveSection';
import { BeyondDevelopmentSection } from '@/components/achievements/BeyondDevelopmentSection';
import { LetsConnectSection } from '@/components/contact/LetsConnectSection';

export default function HomePage() {
  return (
    <UniverseShell activeSection="home">
      {/* 01. Cinematic Character Introduction & Hero Section */}
      <CinematicHeroExperience />

      {/* 02. Behind The Code — Biography & Personal Journey */}
      <BehindTheCodeSection showFullPageCta />

      {/* 03. The Arsenal — Interactive Technology & Languages Collection */}
      <TheArsenalSection />

      {/* 04. The Archive — Selected Digital Creations */}
      <TheArchiveSection />

      {/* 05. Beyond Development & Off The Grid — Immortal Rank & Personality */}
      <BeyondDevelopmentSection />

      {/* 06. Let's Connect — Contact & Final Signature */}
      <LetsConnectSection />
    </UniverseShell>
  );
}
