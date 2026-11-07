'use client';

import React, { useState, useMemo } from 'react';
import {
  ARSENAL_HEADER,
  TECHNOLOGIES,
  TECH_CATEGORIES,
  filterTechnologies,
  getCategoryCounts,
  type TechCategory,
} from '@/data/technologies';
import { TechIcon } from '@/components/ui/TechIcon';
import { LeovanCharacter25D } from '@/components/character/LeovanCharacter25D';
import { Search, X } from 'lucide-react';
import { soundManager } from '@/lib/sound';

export function TheArsenalSection() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryCounts = useMemo(() => getCategoryCounts(TECHNOLOGIES), []);
  const filteredItems = useMemo(
    () => filterTechnologies(TECHNOLOGIES, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  return (
    <section
      id="the-arsenal-section"
      aria-labelledby="heading-the-arsenal"
      className="relative z-10 py-16 sm:py-24 border-t border-white/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Editorial Banner + Character Aside Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/15 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase">
              <span className="text-[#E60023] font-bold">CHAPTER 02</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-white font-semibold">{ARSENAL_HEADER.badge}</span>
            </div>

            <h2
              id="heading-the-arsenal"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
            >
              {ARSENAL_HEADER.title}
            </h2>

            <p className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#E60023] font-bold">
              {ARSENAL_HEADER.subtitle}
            </p>

            <p className="text-base text-[#A0A0A0] max-w-2xl leading-relaxed">
              {ARSENAL_HEADER.description}
            </p>
          </div>

          {/* Character moves aside to create space for technology panels */}
          <div className="lg:col-span-4">
            <LeovanCharacter25D variant="stack" captionCode="ARSENAL // 67 TECH" />
          </div>
        </div>

        {/* Interactive Filter Controls & Search Bar */}
        <div className="space-y-6 bg-[#080808] border border-white/15 p-5 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="arsenal-search-input" className="sr-only">
                Search technologies
              </label>
              <Search className="w-4 h-4 text-[#E60023] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="arsenal-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages, frameworks, tools (e.g., Next.js, Python)..."
                className="w-full pl-10 pr-10 py-2.5 bg-[#030303] border border-white/20 focus:border-[#E60023] focus:outline-none text-sm text-white placeholder:text-[#A0A0A0] font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setSearchQuery('');
                  }}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#A0A0A0] hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Active Result Counter */}
            <div className="font-mono text-xs text-[#A0A0A0] uppercase tracking-wider">
              SHOWING{' '}
              <span className="text-white font-bold tabular-nums">{filteredItems.length}</span> OF{' '}
              <span className="text-white font-bold tabular-nums">{TECHNOLOGIES.length}</span>{' '}
              TECHNOLOGIES EXPLORED &amp; STUDIED
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="tablist"
            aria-label="Technology Categories"
            className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10"
          >
            {TECH_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count = categoryCounts[category];
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCategory(category);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 border ${
                    isSelected
                      ? 'bg-[#E60023] text-white border-[#E60023] font-bold'
                      : 'bg-[#030303] text-[#A0A0A0] border-white/15 hover:text-white hover:border-white/40'
                  }`}
                >
                  <span>{category}</span>
                  <span className="ml-1.5 opacity-80 tabular-nums">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology Panels Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#080808] border border-white/15 p-12 text-center space-y-4">
            <p className="font-display text-2xl font-bold uppercase text-white">
              NO TECHNOLOGIES MATCHING &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm font-mono text-[#A0A0A0]">
              Try clearing the search query or switching back to ALL categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#E60023] text-white font-mono text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((tech) => (
              <article
                key={tech.id}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative bg-[#080808] border border-white/15 hover:border-[#E60023] p-5 transition-transform duration-150 hover:-translate-y-1 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <TechIcon item={tech} className="w-11 h-11 shrink-0" />
                  <span className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-wider text-right">
                    {tech.category}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E60023] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">{tech.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
