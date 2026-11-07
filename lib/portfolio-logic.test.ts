import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BRAND_IDENTITY,
  DEVELOPER_PROFILE,
  BIOGRAPHY_PARAGRAPHS,
  PERSONAL_JOURNEY,
  ACHIEVEMENT_DATA,
  PERSONALITY_ITEMS,
} from '../data/profile';
import {
  TECHNOLOGIES,
  TECH_CATEGORIES,
  filterTechnologies,
  getCategoryCounts,
} from '../data/technologies';
import { PROJECTS } from '../data/projects';
import { CONTACT_CHANNELS, CONTACT_DETAILS } from '../data/contacts';

test('Official brand identity preserves exact LEOVAN and Mohammad Sofandi statement', () => {
  assert.equal(BRAND_IDENTITY.primaryBrand, 'LEOVAN');
  assert.equal(BRAND_IDENTITY.realName, 'Mohammad Sofandi');
  assert.equal(BRAND_IDENTITY.officialStatement, 'LEOVAN, also known as Mohammad Sofandi.');
  assert.equal(BRAND_IDENTITY.mainSlogan, 'CREATING BEYOND THE SCREEN.');
  assert.equal(DEVELOPER_PROFILE.age, 14);
  assert.equal(DEVELOPER_PROFILE.rank, 'IMMORTAL');
  assert.equal(BIOGRAPHY_PARAGRAPHS.length, 7);
  assert.equal(PERSONAL_JOURNEY.length, 4);
});

test('Technology Arsenal contains all 67 required items across 7 categories and filters accurately', () => {
  const counts = getCategoryCounts(TECHNOLOGIES);
  assert.equal(counts['Programming Languages'], 16);
  assert.equal(counts['Frontend'], 10);
  assert.equal(counts['Backend'], 10);
  assert.equal(counts['Database & Infrastructure'], 9);
  assert.equal(counts['Development Tools'], 9);
  assert.equal(counts['Cloud & Deployment'], 7);
  assert.equal(counts['AI Ecosystem'], 6);
  assert.equal(counts.ALL, 67);
  assert.equal(TECH_CATEGORIES.length, 8);

  const aiItems = filterTechnologies(TECHNOLOGIES, 'AI Ecosystem', '');
  assert.equal(aiItems.length, 6);
  assert.ok(aiItems.some((item) => item.name === 'Gemini API'));
  assert.ok(aiItems.some((item) => item.name === 'Google AI Studio'));

  const searchNext = filterTechnologies(TECHNOLOGIES, 'ALL', 'Next.js');
  assert.equal(searchNext.length, 2);
  assert.equal(searchNext[0].id, 'nextjs');
  assert.equal(searchNext[1].id, 'vercel');

  const searchCategoryMismatch = filterTechnologies(TECHNOLOGIES, 'Backend', 'Next.js');
  assert.equal(searchCategoryMismatch.length, 0);
});

test('Projects Archive contains exact URLs and features for LEOVAN | TOOLS and LEOVAN | AI', () => {
  assert.equal(PROJECTS.length, 2);
  assert.equal(PROJECTS[0].number, '001');
  assert.equal(PROJECTS[0].name, 'LEOVAN | TOOLS');
  assert.equal(PROJECTS[0].url, 'https://leovan.my.id');
  assert.deepEqual(PROJECTS[0].features, ['React Tools', 'AM Premium', 'Preset Finder']);

  assert.equal(PROJECTS[1].number, '002');
  assert.equal(PROJECTS[1].name, 'LEOVAN | AI');
  assert.equal(PROJECTS[1].url, 'https://leovandyz.web.id');
});

test('Achievements and Off The Grid personality items match specification', () => {
  assert.equal(ACHIEVEMENT_DATA.game, 'MOBILE LEGENDS: BANG BANG');
  assert.equal(ACHIEVEMENT_DATA.rank, 'IMMORTAL');
  const values = PERSONALITY_ITEMS.map((item) => item.value);
  assert.deepEqual(values, ['MIE AYAM', 'ES TEH', 'SPIDER-MAN', 'MOBILE LEGENDS']);
});

test('Contact details include Email, GitHub, and WhatsApp Channel while omitting Instagram', () => {
  assert.equal(CONTACT_DETAILS.email, 'vannn626@gmail.com');
  assert.equal(CONTACT_DETAILS.github, 'https://github.com/vannn626-afk');
  assert.equal(
    CONTACT_DETAILS.whatsappChannel,
    'https://whatsapp.com/channel/0029VbEFmPM6buMLQgdlie1J'
  );
  assert.equal(CONTACT_CHANNELS.length, 3);
  assert.ok(!CONTACT_CHANNELS.some((c) => c.label.toLowerCase().includes('instagram')));
});
