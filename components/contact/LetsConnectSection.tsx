'use client';

import React, { useState } from 'react';
import { CONTACT_HEADER, CONTACT_DETAILS, CONTACT_CHANNELS } from '@/data/contacts';
import { BRAND_IDENTITY } from '@/data/profile';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { CinematicButton } from '@/components/ui/CinematicButton';
import { LvMonogram } from '@/components/ui/LvLogo';
import { Mail, Copy, Check, ArrowUpRight, Radio } from 'lucide-react';
import { soundManager } from '@/lib/sound';

export function LetsConnectSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    soundManager.playClick();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_DETAILS.email);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="lets-connect-section"
      aria-labelledby="heading-lets-connect"
      className="relative z-10 py-16 sm:py-24 border-t border-white/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Chapter Header */}
        <div className="border-b border-white/15 pb-8 space-y-3">
          <p className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E60023] font-bold">
            CHAPTER 05 · {CONTACT_HEADER.secondaryHeadline} {CONTACT_HEADER.tertiaryHeadline}
          </p>
          <h2
            id="heading-lets-connect"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
          >
            {CONTACT_HEADER.mainHeadline}
          </h2>
        </div>

        {/* Main Grid: Contact Channels + Returning Character Signature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Cols: Interactive Contact Channels */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Email Card with Mailto & Copy Email Confirmation */}
            <div className="bg-[#080808] border-2 border-[#E60023] p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
                  DIRECT ELECTRONIC MAIL
                </span>
                <Mail className="w-5 h-5 text-[#E60023]" />
              </div>

              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-4xl font-black tracking-tight text-white break-all">
                  {CONTACT_DETAILS.email}
                </p>
                <p className="text-sm text-[#A0A0A0]">
                  Terbuka untuk diskusi ide project digital, pengembangan aplikasi web, dan
                  kolaborasi kreatif.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <CinematicButton href={`mailto:${CONTACT_DETAILS.email}`} variant="primary">
                  SEND EMAIL
                </CinematicButton>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-[#030303] border border-white/25 hover:border-[#E60023] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#E60023]" />
                      <span>EMAIL COPIED: {CONTACT_DETAILS.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#E60023]" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub & WhatsApp Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CONTACT_CHANNELS.filter((c) => c.id !== 'email').map((channel) => (
                <article
                  key={channel.id}
                  className="bg-[#080808] border border-white/15 hover:border-[#E60023] transition-colors p-6 flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs text-[#E60023] font-bold uppercase tracking-widest">
                      <span>{channel.label}</span>
                      <Radio className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-xl font-black uppercase text-white">
                      {channel.value}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">{channel.description}</p>
                  </div>

                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="inline-flex items-center justify-between px-4 py-3 bg-[#030303] border border-white/20 hover:border-[#E60023] text-xs font-mono font-bold uppercase tracking-widest text-white transition-colors"
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E60023]" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Final Character Composition & Final Signature */}
          <div className="lg:col-span-5 space-y-6">
            <LeovanCharacter25D variant="contact" captionCode="SIGNATURE // LEOVAN" />

            {/* Final Signature Block */}
            <div className="bg-[#080808] border border-white/15 p-6 space-y-2">
              <div className="flex items-center gap-3">
                <LvMonogram size={32} />
                <p className="font-display text-2xl font-black uppercase tracking-tight text-white">
                  {CONTACT_HEADER.finalSignatureBrand}
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#E60023] font-bold">
                {CONTACT_HEADER.finalSignatureIdentity}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-white/80">
                {CONTACT_HEADER.finalSignatureSlogan}
              </p>
              <p className="text-xs text-[#A0A0A0] pt-1">{BRAND_IDENTITY.officialStatement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
