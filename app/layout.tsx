import type { Metadata } from 'next';
import { Outfit, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const displayFont = Outfit({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leovan.my.id'),
  title: {
    default: 'LEOVAN — The Digital Persona | Developer Portfolio',
    template: '%s | LEOVAN — Also Known As Mohammad Sofandi',
  },
  description:
    'LEOVAN, also known as Mohammad Sofandi, is an independent Web & App Developer from Sukagumiwang, Indramayu, Indonesia. Explore digital projects, technologies, and creative experiences.',
  alternates: {
    canonical: 'https://leovan.my.id',
  },
  icons: {
    icon: '/icons/favicon.svg',
    shortcut: '/icons/favicon.svg',
  },
  openGraph: {
    title: 'LEOVAN — The Digital Persona | Developer Portfolio',
    description:
      'LEOVAN, also known as Mohammad Sofandi, is an independent Web & App Developer from Sukagumiwang, Indramayu, Indonesia. Explore digital projects, technologies, and creative experiences.',
    url: 'https://leovan.my.id',
    siteName: 'LEOVAN — The Digital Persona',
    type: 'website',
    images: [
      {
        url: '/images/leovan-main-character.png',
        width: 1200,
        height: 630,
        alt: 'LEOVAN, also known as Mohammad Sofandi — The Digital Persona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEOVAN — The Digital Persona | Developer Portfolio',
    description:
      'LEOVAN, also known as Mohammad Sofandi, is an independent Web & App Developer from Sukagumiwang, Indramayu, Indonesia. Explore digital projects, technologies, and creative experiences.',
    images: ['/images/leovan-main-character.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'LEOVAN',
    alternateName: 'Mohammad Sofandi',
    description:
      'LEOVAN, also known as Mohammad Sofandi, is an independent Web & App Developer from Sukagumiwang, Indramayu, Jawa Barat, Indonesia.',
    url: 'https://leovan.my.id',
    sameAs: [
      'https://github.com/vannn626-afk',
      'https://whatsapp.com/channel/0029VbEFmPM6buMLQgdlie1J',
      'https://leovandyz.web.id',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sukagumiwang, Indramayu',
      addressRegion: 'Jawa Barat',
      addressCountry: 'ID',
    },
  };

  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#030303] text-white font-sans antialiased selection:bg-[#E60023] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
