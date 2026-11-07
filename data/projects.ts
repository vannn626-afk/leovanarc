export interface ProjectItem {
  number: string;
  id: string;
  name: string;
  category: string;
  description: string;
  features: readonly string[];
  url: string;
  cta: string;
  architectureNotes: string;
  accentTag: string;
}

export const ARCHIVE_HEADER = {
  title: 'THE ARCHIVE.',
  subtitle: 'SELECTED DIGITAL CREATIONS.',
} as const;

export const PROJECTS: readonly ProjectItem[] = [
  {
    number: '001',
    id: 'leovan-tools',
    name: 'LEOVAN | TOOLS',
    category: 'WEB / DIGITAL TOOLS',
    description:
      'Platform digital tools yang menghadirkan berbagai kebutuhan dalam satu tempat.',
    features: ['React Tools', 'AM Premium', 'Preset Finder'],
    url: 'https://leovan.my.id',
    cta: 'EXPLORE PROJECT',
    architectureNotes:
      'Dirancang untuk menyatukan berbagai utilitas kreator dan developer dalam satu antarmuka web yang cepat dan mudah diakses.',
    accentTag: 'MULTI-UTILITY HUB',
  },
  {
    number: '002',
    id: 'leovan-ai',
    name: 'LEOVAN | AI',
    category: 'AI / WEB APPLICATION',
    description:
      'Platform AI untuk membantu pengguna menjawab pertanyaan, memahami masalah, mencari informasi, dan menemukan solusi.',
    features: [
      'Interactive Problem Solving',
      'Information Discovery',
      'Contextual Solution Engine',
    ],
    url: 'https://leovandyz.web.id',
    cta: 'EXPLORE PROJECT',
    architectureNotes:
      'Eksplorasi penerapan kecerdasan buatan pada antarmuka web modern untuk membantu pengguna menganalisis masalah secara interaktif.',
    accentTag: 'INTELLIGENT WEB PLATFORM',
  },
] as const;
