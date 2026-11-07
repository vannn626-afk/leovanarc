'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { LvMonogram } from '@/components/ui/LvLogo';
import { CinematicButton } from '@/components/ui/CinematicButton';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { BRAND_IDENTITY, DEVELOPER_PROFILE } from '@/data/profile';
import { Play, FastForward, ArrowDown } from 'lucide-react';
import { soundManager } from '@/lib/sound';

const INTRO_SESSION_KEY = 'leovan_intro_completed_v1';

type IntroStage =
  | 'scene01_void'
  | 'scene02_awakens'
  | 'scene03_greeting'
  | 'scene04_identity'
  | 'scene05_constructing'
  | 'scene06_ready';

export function CinematicHeroExperience() {
  const [stage, setStage] = useState<IntroStage>('scene06_ready');
  const [isIntroActive, setIsIntroActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const completeIntroImmediately = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    setStage('scene06_ready');
    setIsIntroActive(false);
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
      } catch {
        // ignore storage errors
      }
    }
    if (rootRef.current) {
      gsap.set(rootRef.current.querySelectorAll('[data-hero-item]'), {
        clearProps: 'all',
      });
    }
  }, []);

  const startIntroSequence = useCallback(
    (forceReplay = false) => {
      if (typeof window === 'undefined') return;

      const params = new URLSearchParams(window.location.search);
      const autostart = params.get('autostart') === '1';
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let alreadyCompleted = false;
      try {
        alreadyCompleted = window.sessionStorage.getItem(INTRO_SESSION_KEY) === 'true';
      } catch {
        alreadyCompleted = false;
      }

      if (!forceReplay && (autostart || prefersReducedMotion || alreadyCompleted)) {
        completeIntroImmediately();
        return;
      }

      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      soundManager.playSlash();
      setIsIntroActive(true);
      setStage('scene01_void');

      const tl = gsap.timeline({
        onComplete: () => {
          completeIntroImmediately();
        },
      });
      timelineRef.current = tl;

      // Coordinated timeline across Scenes 01 -> 06 (~4.6 seconds total, fast & punchy, skippable anytime)
      tl.call(() => setStage('scene01_void'), [], 0)
        .call(() => {
          soundManager.playSlash();
          setStage('scene02_awakens');
        }, [], 0.75)
        .call(() => {
          soundManager.playHover();
          setStage('scene03_greeting');
        }, [], 1.65)
        .call(() => {
          soundManager.playSlash();
          setStage('scene04_identity');
        }, [], 2.75)
        .call(() => {
          setStage('scene05_constructing');
          if (rootRef.current) {
            const heroItems = rootRef.current.querySelectorAll('[data-hero-item]');
            gsap.fromTo(
              heroItems,
              { opacity: 0, y: 24, skewX: -6 },
              {
                opacity: 1,
                y: 0,
                skewX: 0,
                duration: 0.55,
                stagger: 0.06,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              }
            );
          }
        }, [], 3.75)
        .call(() => {
          completeIntroImmediately();
        }, [], 4.5);
    },
    [completeIntroImmediately]
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      startIntroSequence(false);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [startIntroSequence]);

  return (
    <section
      ref={rootRef}
      aria-label="LEOVAN Hero & Digital Persona Awakening"
      className="relative min-h-[calc(100vh-4.5rem)] w-full flex flex-col justify-center overflow-hidden py-10 sm:py-16 lg:py-20"
    >
      {/* CINEMATIC AWAKENING OVERLAY (SCENES 01 - 04) */}
      {isIntroActive && stage !== 'scene05_constructing' && stage !== 'scene06_ready' && (
        <div
          role="region"
          aria-label="The Digital Persona Awakening Intro"
          className="fixed inset-0 z-50 bg-[#030303] flex flex-col justify-between p-6 sm:p-10 overflow-hidden"
        >
          {/* Red Diagonal Slash Lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute top-1/2 -left-1/4 w-[150%] h-1 bg-[#E60023] -rotate-12 shadow-[0_0_30px_#E60023]" />
            <div className="absolute top-1/3 -left-1/4 w-[150%] h-16 bg-[#E60023]/15 -rotate-12" />
          </div>

          {/* Top Bar inside Intro: Technical Label + Skip Intro Button */}
          <div className="relative z-20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LvMonogram size={32} />
              <span className="font-mono text-xs tracking-widest uppercase text-[#E60023] font-bold">
                THE DIGITAL PERSONA — AWAKENING
              </span>
            </div>

            <button
              type="button"
              onClick={completeIntroImmediately}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E60023] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#990019] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
            >
              <span>SKIP INTRO</span>
              <FastForward className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center Dynamic Stage */}
          <div className="relative z-20 my-auto max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left / Center Stage Text */}
            <div className="lg:col-span-7 space-y-5">
              {stage === 'scene01_void' && (
                <div className="space-y-3 animate-fadeIn">
                  <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#E60023] uppercase font-bold">
                    INITIALIZING DIGITAL PERSONA...
                  </p>
                  <div className="w-48 h-1 bg-[#E60023]" />
                </div>
              )}

              {stage === 'scene02_awakens' && (
                <div className="space-y-3">
                  <p className="font-mono text-xs tracking-[0.22em] text-[#E60023] uppercase font-bold">
                    SCENE 02 · AWAKENING
                  </p>
                  <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    A NEW DIGITAL EXPERIENCE IS BEGINNING.
                  </h2>
                </div>
              )}

              {stage === 'scene03_greeting' && (
                <div className="space-y-4">
                  {/* Angular Comic-Inspired Dialogue Composition */}
                  <div
                    className="inline-block bg-white text-[#030303] px-5 py-3 font-display text-2xl sm:text-4xl font-black uppercase tracking-tight border-2 border-[#E60023] shadow-[8px_8px_0px_#E60023]"
                    style={{ transform: 'skewX(-6deg)' }}
                  >
                    &ldquo;HEY, WELCOME.&rdquo;
                  </div>
                  <div
                    className="block max-w-xl bg-[#080808] text-white px-5 py-3.5 border border-[#E60023] shadow-[6px_6px_0px_rgba(230,0,35,0.45)]"
                    style={{ transform: 'skewX(-4deg)' }}
                  >
                    <p className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wide text-[#E60023]">
                      &ldquo;SELAMAT DATANG DI DUNIA LEOVAN.&rdquo;
                    </p>
                    <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-white mt-1">
                      &ldquo;LET ME SHOW YOU SOMETHING.&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {stage === 'scene04_identity' && (
                <div className="space-y-2">
                  <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#A0A0A0] uppercase font-bold">
                    THIS IS...
                  </p>
                  <div className="flex items-center gap-4">
                    <LvMonogram size={56} />
                    <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">
                      LEOVAN
                    </span>
                  </div>
                  <p className="font-mono text-sm sm:text-base tracking-[0.18em] text-[#E60023] font-bold uppercase pt-2">
                    ALSO KNOWN AS MOHAMMAD SOFANDI.
                  </p>
                </div>
              )}
            </div>

            {/* Right Character Awakening Composition */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#E60023]/25 -rotate-6 scale-95 border border-[#E60023]"
                />
                <img
                  src={BRAND_IDENTITY.characterImage}
                  alt="LEOVAN Character Awakening"
                  referrerPolicy="no-referrer"
                  className={`relative z-10 w-full h-auto object-contain transition-all duration-500 ${
                    stage === 'scene01_void'
                      ? 'opacity-30 brightness-50 scale-95'
                      : 'opacity-100 brightness-100 scale-100'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Bottom Progress Indicator */}
          <div className="relative z-20 flex items-center justify-between text-xs font-mono text-[#A0A0A0]">
            <span>PERSONA SEQUENCE · {stage.toUpperCase()}</span>
            <span>PRESS SKIP INTRO FOR INSTANT ACCESS</span>
          </div>
        </div>
      )}

      {/* ASSEMBLED HERO SECTION (SCENES 05 & 06 — FINAL INTERACTIVE STATE) */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Diagonal Graphic Accent Behind Hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 w-72 h-72 bg-[#E60023]/10 blur-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* LEFT COLUMN: TYPOGRAPHIC HIERARCHY & IDENTITY */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 bg-[#030303]/90 sm:bg-[#030303]/80 p-4 sm:p-6 border border-white/10 shadow-2xl">
            {/* Welcome / Awakening Status Bar */}
            <div
              data-hero-item
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono tracking-widest uppercase"
            >
              <span className="text-[#E60023] font-bold">
                INDEPENDENT DEVELOPER / INDONESIA
              </span>
              <span aria-hidden="true" className="text-white/30 hidden xs:inline">
                /
              </span>
              <span className="text-[#A0A0A0] block xs:inline">WELCOME TO THE DIGITAL PERSONA.</span>
            </div>

            {/* Primary Brand Headline & 3D/SVG Monogram Lockup */}
            <div data-hero-item className="space-y-2">
              <div className="flex items-center gap-3 sm:gap-4">
                <LvMonogram size={40} className="shrink-0 sm:size-[52px]" />
                <h1 className="font-display text-4xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-white leading-[0.95]">
                  {BRAND_IDENTITY.primaryBrand}
                </h1>
              </div>

              {/* Official Real-Name Identity Line */}
              <p className="font-mono text-xs sm:text-base lg:text-lg tracking-[0.14em] uppercase text-[#E60023] font-bold">
                ALSO KNOWN AS MOHAMMAD SOFANDI.
              </p>
            </div>

            {/* Main Slogan in Editorial Slash Cutout */}
            <div data-hero-item className="inline-block">
              <div
                className="bg-white text-[#030303] px-3.5 py-1.5 sm:px-4 sm:py-2 border-2 border-[#E60023] shadow-[4px_4px_0px_#E60023] sm:shadow-[6px_6px_0px_#E60023]"
                style={{ transform: 'skewX(-6deg)' }}
              >
                <p className="font-display text-base sm:text-2xl font-black uppercase tracking-tight">
                  {BRAND_IDENTITY.mainSlogan}
                </p>
              </div>
            </div>

            {/* Biography Description & Exact Official Identity Statement */}
            <div data-hero-item className="space-y-2 max-w-2xl">
              <p className="text-sm sm:text-lg text-white/95 leading-relaxed">
                {BRAND_IDENTITY.heroDescription}
              </p>
              <p className="text-[11px] sm:text-sm font-mono text-[#A0A0A0]">
                {BRAND_IDENTITY.officialStatement} — {BRAND_IDENTITY.secondarySlogan}
              </p>
            </div>

            {/* Unboxed Metadata Status Strip (Zero-Pill Discipline) */}
            <div
              data-hero-item
              className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 font-mono text-xs sm:text-sm tracking-wider uppercase text-white border-t border-b border-white/15 py-2.5 sm:py-3"
            >
              <span className="text-[#E60023] font-bold">{DEVELOPER_PROFILE.shortStatus}</span>
              <span aria-hidden="true" className="text-white/30">
                /
              </span>
              <span>{DEVELOPER_PROFILE.focus}</span>
              <span aria-hidden="true" className="text-white/30">
                /
              </span>
              <span>{DEVELOPER_PROFILE.country}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-[#A0A0A0] tabular-nums">AGE {DEVELOPER_PROFILE.age}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-[#A0A0A0]">RANK: {DEVELOPER_PROFILE.rank}</span>
            </div>

            {/* CTA Buttons + Replay Intro Control */}
            <div data-hero-item className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <CinematicButton href="/projects" variant="primary" className="w-full xs:w-auto">
                DISCOVER MY WORK
              </CinematicButton>
              <CinematicButton href="/contact" variant="secondary" className="w-full xs:w-auto">
                CONTACT ME
              </CinematicButton>
              <button
                type="button"
                onClick={() => startIntroSequence(true)}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono tracking-widest uppercase text-[#A0A0A0] hover:text-white border border-transparent hover:border-white/20 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                aria-label="Replay Awakening Intro"
              >
                <Play className="w-3.5 h-3.5 text-[#E60023]" />
                <span>REPLAY INTRO</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: EXACT ORIGINAL CHARACTER ARTWORK IN 2.5D PARALLAX */}
          <div data-hero-item className="lg:col-span-5 w-full">
            <LeovanCharacter25D variant="hero" captionCode="PROTAGONIST · LV-01" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          data-hero-item
          className="mt-10 sm:mt-12 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-[#A0A0A0]"
        >
          <span>A MIND BEHIND THE CODE.</span>
          <a
            href="#behind-the-code-preview"
            className="inline-flex items-center gap-2 text-white hover:text-[#E60023] transition-colors uppercase tracking-widest"
          >
            <span>SCROLL TO EXPLORE UNIVERSE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E60023]" />
          </a>
        </div>
      </div>
    </section>
  );
}
