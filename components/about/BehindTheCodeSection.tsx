'use client';

import React from 'react';
import {
  BRAND_IDENTITY,
  DEVELOPER_PROFILE,
  BIOGRAPHY_PARAGRAPHS,
  PERSONAL_JOURNEY,
} from '@/data/profile';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { CinematicButton } from '@/components/ui/CinematicButton';

export function BehindTheCodeSection({ showFullPageCta = false }: { showFullPageCta?: boolean }) {
  return (
    <section
      id="behind-the-code-preview"
      aria-labelledby="heading-behind-the-code"
      className="relative z-10 py-16 sm:py-24 border-t border-white/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div className="space-y-2">
            <p className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E60023] font-bold">
              CHAPTER 01 · BERAWAL DARI GABUT.
            </p>
            <h2
              id="heading-behind-the-code"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
            >
              BEHIND THE CODE.
            </h2>
          </div>

          <div className="font-mono text-xs sm:text-sm text-[#A0A0A0] md:text-right">
            <p className="text-white font-bold uppercase tracking-widest">
              {BRAND_IDENTITY.primaryBrand}
            </p>
            <p className="text-[#E60023] font-bold uppercase tracking-wider">
              ALSO KNOWN AS MOHAMMAD SOFANDI.
            </p>
          </div>
        </div>

        {/* Main Split: Character + Exact Indonesian Biography & Personal Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Character Composition */}
          <div className="lg:col-span-5">
            <LeovanCharacter25D variant="about" captionCode="IDENTITY // SOFANDI" />
            <div className="mt-4 p-4 bg-[#080808] border border-white/15">
              <p className="font-mono text-xs text-white/90 leading-relaxed">
                {BRAND_IDENTITY.aboutSummary}
              </p>
            </div>
          </div>

          {/* Right: Complete Indonesian Biography & Developer Profile Dossier */}
          <div className="lg:col-span-7 space-y-8">
            {/* Exact Indonesian Introduction from Section 02 */}
            <div className="bg-[#080808] border border-white/15 p-6 sm:p-8 space-y-4 relative">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 px-3 py-1 bg-[#E60023] text-white font-mono text-[11px] font-bold tracking-widest uppercase"
              >
                AUTHENTIC BIOGRAPHY
              </div>

              <div className="space-y-4 pt-2">
                {BIOGRAPHY_PARAGRAPHS.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0
                        ? 'font-display text-xl sm:text-2xl font-bold text-white'
                        : 'text-base text-white/85 leading-relaxed'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Personal Information Panel */}
            <div className="bg-[#080808] border border-white/15 p-6 sm:p-8">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[#E60023] font-bold mb-5">
                PERSONAL INFORMATION DOSSIER
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs sm:text-sm">
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">NAME:</dt>
                  <dd className="text-white font-bold text-right">{DEVELOPER_PROFILE.name}</dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">REAL NAME:</dt>
                  <dd className="text-[#E60023] font-bold text-right">
                    {DEVELOPER_PROFILE.alsoKnownAs}
                  </dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">AGE:</dt>
                  <dd className="text-white font-bold tabular-nums text-right">
                    {DEVELOPER_PROFILE.age}
                  </dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">STATUS:</dt>
                  <dd className="text-white font-bold text-right">
                    {DEVELOPER_PROFILE.shortStatus} ({DEVELOPER_PROFILE.status})
                  </dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">FOCUS:</dt>
                  <dd className="text-white font-bold text-right">{DEVELOPER_PROFILE.focus}</dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">LOCATION:</dt>
                  <dd className="text-white font-bold text-right">
                    {DEVELOPER_PROFILE.shortLocation}
                  </dd>
                </div>
                <div className="border-b border-white/10 pb-2.5 flex justify-between gap-4 sm:col-span-2">
                  <dt className="text-[#A0A0A0]">COUNTRY:</dt>
                  <dd className="text-white font-bold text-right">{DEVELOPER_PROFILE.country}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Visual Personal Journey (01 - 04) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              FROM CURIOSITY TO CREATION.
            </h3>
            <span className="font-mono text-xs text-[#E60023] uppercase tracking-widest font-bold">
              01 — 04 PERSONAL JOURNEY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAL_JOURNEY.map((step) => (
              <article
                key={step.number}
                className="group bg-[#080808] border border-white/15 hover:border-[#E60023] transition-colors p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-2xl font-black text-[#E60023] tabular-nums">
                      {step.number} —
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-[#A0A0A0]">
                      STAGE {step.number}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-black uppercase tracking-tight text-white">
                    {step.number} — {step.title}
                  </h4>
                  <p className="font-mono text-xs text-[#E60023] font-semibold">{step.subtitle}</p>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed pt-1">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {showFullPageCta && (
          <div className="flex justify-end">
            <CinematicButton href="/about" variant="secondary">
              OPEN FULL ABOUT DOSSIER
            </CinematicButton>
          </div>
        )}
      </div>
    </section>
  );
}
