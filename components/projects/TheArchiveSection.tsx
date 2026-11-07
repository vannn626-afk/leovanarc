'use client';

import React, { useState } from 'react';
import { ARCHIVE_HEADER, PROJECTS, type ProjectItem } from '@/data/projects';
import { CinematicButton } from '@/components/ui/CinematicButton';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { LvMonogram } from '@/components/ui/LvLogo';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

function ProjectCard3DTilt({ project }: { project: ProjectItem }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: normX * 4, y: -normY * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      className="group relative bg-[#080808] border-2 border-white/20 hover:border-[#E60023] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between gap-8"
    >
      {/* Top Editorial Number & Category Metadata */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3 font-mono">
            <span className="text-2xl sm:text-3xl font-black text-[#E60023] tabular-nums">
              PROJECT {project.number}
            </span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span className="text-xs uppercase tracking-widest text-white font-bold">
              {project.category}
            </span>
          </div>

          <span className="font-mono text-xs text-[#A0A0A0] uppercase tracking-widest">
            {project.accentTag}
          </span>
        </div>

        {/* Project Visual Preview Composition (Original Graphic Preview + Character Integration) */}
        <div className="relative h-52 sm:h-60 w-full bg-[#030303] border border-white/15 overflow-hidden flex items-center justify-between p-6">
          {/* Diagonal Crimson Slash */}
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 w-64 h-64 bg-[#E60023]/20 rotate-12 pointer-events-none"
          />
          <div className="relative z-10 space-y-2 max-w-[65%]">
            <div className="flex items-center gap-2.5">
              <LvMonogram size={28} />
              <span className="font-mono text-xs text-[#E60023] font-bold uppercase tracking-widest">
                LIVE PRODUCTION DOMAIN
              </span>
            </div>
            <p className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {project.name}
            </p>
            <p className="font-mono text-xs text-[#A0A0A0] truncate">{project.url}</p>
          </div>

          {/* Character Visual Anchor inside Project Preview */}
          <img
            src="/images/leovan-main-character.png"
            alt={`${project.name} Character Preview`}
            referrerPolicy="no-referrer"
            className="relative z-10 h-44 sm:h-52 w-auto object-contain drop-shadow-[0_8px_16px_rgba(230,0,35,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Project Title & Description */}
        <div className="space-y-3">
          <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            {project.name}
          </h3>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            {project.description}
          </p>
          <p className="text-sm text-[#A0A0A0] leading-relaxed">{project.architectureNotes}</p>
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 pt-2">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
            KEY CAPABILITIES &amp; MODULES
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 bg-[#030303] border border-white/10 px-3 py-2 font-mono text-xs text-white"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E60023] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom External Link & Animated CTA */}
      <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#A0A0A0] hover:text-white transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-[#E60023]" />
          <span>{project.url}</span>
        </a>

        <CinematicButton href={project.url} external variant="primary">
          {project.cta}
        </CinematicButton>
      </div>
    </article>
  );
}

export function TheArchiveSection() {
  return (
    <section
      id="the-archive-section"
      aria-labelledby="heading-the-archive"
      className="relative z-10 py-16 sm:py-24 border-t border-white/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header + Character Archive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <p className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E60023] font-bold">
              CHAPTER 03 · {ARCHIVE_HEADER.subtitle}
            </p>
            <h2
              id="heading-the-archive"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
            >
              {ARCHIVE_HEADER.title}
            </h2>
            <p className="text-base text-[#A0A0A0] max-w-2xl leading-relaxed">
              Eksplorasi nyata yang dibangun secara independen oleh LEOVAN (Mohammad Sofandi) —
              menghadirkan platform digital tools dan aplikasi web berbasis AI.
            </p>
          </div>

          <div className="lg:col-span-4">
            <LeovanCharacter25D variant="projects" captionCode="ARCHIVE // 001-002" />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard3DTilt key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
