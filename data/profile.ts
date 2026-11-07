export interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PersonalityTrait {
  id: string;
  category: string;
  value: string;
  caption: string;
  comicCode: string;
}

export const BRAND_IDENTITY = {
  primaryBrand: 'LEOVAN',
  realName: 'Mohammad Sofandi',
  officialStatement: 'LEOVAN, also known as Mohammad Sofandi.',
  aboutSummary:
    'LEOVAN, also known as Mohammad Sofandi, adalah seorang independent Web & App Developer berusia 14 tahun dari Sukagumiwang, Indramayu, Jawa Barat, Indonesia.',
  footerSignature: 'LEOVAN — ALSO KNOWN AS MOHAMMAD SOFANDI.',
  mainSlogan: 'CREATING BEYOND THE SCREEN.',
  secondarySlogan: 'FROM CURIOSITY TO CREATION.',
  additionalSignature: 'A MIND BEHIND THE CODE.',
  heroDescription:
    'Web & App Developer berusia 14 tahun dari Sukagumiwang, Indonesia. Berawal dari gabut, berkembang melalui eksperimen, coding, dan berbagai project digital.',
  characterImage: '/images/leovan-main-character.png',
  domain: 'https://leovan.my.id',
} as const;

export const DEVELOPER_PROFILE = {
  name: 'LEOVAN',
  alsoKnownAs: 'MOHAMMAD SOFANDI',
  age: 14,
  status: 'INDEPENDENT DEVELOPER',
  shortStatus: 'DEV',
  focus: 'APP & WEB',
  location: 'SUKAGUMIWANG, INDRAMAYU, JAWA BARAT',
  shortLocation: 'SUKAGUMIWANG, INDRAMAYU',
  country: 'INDONESIA',
  game: 'MOBILE LEGENDS: BANG BANG',
  rank: 'IMMORTAL',
} as const;

export const BIOGRAPHY_PARAGRAPHS: readonly string[] = [
  'Halo, gue LEOVAN, dikenal juga sebagai Mohammad Sofandi.',
  'Gue developer web dan app berusia 14 tahun asal Sukagumiwang, Indramayu, Jawa Barat.',
  'Awalnya cuma gabut, penasaran sama dunia coding, dan mulai mencoba vibe coding.',
  'Dari eksperimen kecil, akhirnya mulai membangun berbagai project digital sendiri.',
  'Sekarang gue terus belajar, bereksperimen, dan mengembangkan aplikasi, website, tools, serta pengalaman digital.',
  'Buat gue, coding bukan sekadar menulis kode. Tapi tentang menciptakan sesuatu yang bisa digunakan orang lain.',
  'Gue masih dalam proses belajar, berkembang, dan mengeksplorasi berbagai kemungkinan di dunia teknologi.',
] as const;

export const PERSONAL_JOURNEY: readonly JourneyStep[] = [
  {
    number: '01',
    title: 'CURIOSITY',
    subtitle: 'Initial interest in coding.',
    description:
      'Berawal dari rasa penasaran dan waktu luang di Sukagumiwang, mulai melihat bagaimana baris kode dapat membentuk tampilan interaktif di layar.',
  },
  {
    number: '02',
    title: 'EXPERIMENTATION',
    subtitle: 'Starting to explore vibe coding and digital tools.',
    description:
      'Mencoba vibe coding, membedah cara kerja web modern, dan bereksperimen dengan berbagai tools serta alur kerja kreatif.',
  },
  {
    number: '03',
    title: 'CREATION',
    subtitle: 'Beginning to build independent digital projects.',
    description:
      'Meluncurkan platform sendiri seperti LEOVAN | TOOLS dan LEOVAN | AI agar bisa diakses dan digunakan secara nyata.',
  },
  {
    number: '04',
    title: 'CONTINUOUS LEARNING',
    subtitle: 'Continuing to explore web development, app development, and technology.',
    description:
      'Terus memperdalam arsitektur aplikasi, antarmuka 3D interaktif, dan ekosistem teknologi modern secara mandiri.',
  },
] as const;

export const ACHIEVEMENT_DATA = {
  heading: 'BEYOND DEVELOPMENT.',
  subheading: 'ANOTHER SIDE OF LEOVAN.',
  game: 'MOBILE LEGENDS: BANG BANG',
  rank: 'IMMORTAL',
  description:
    'Di luar eksplorasi kode dan pengembangan aplikasi web, LEOVAN aktif bermain Mobile Legends: Bang Bang dan mencapai tier tertinggi IMMORTAL melalui fokus, ketahanan strategi, dan pengambilan keputusan cepat.',
} as const;

export const PERSONALITY_ITEMS: readonly PersonalityTrait[] = [
  {
    id: 'food',
    category: 'FAVORITE FOOD',
    value: 'MIE AYAM',
    caption: 'Comfort fuel terbaik saat sesi eksplorasi coding dan eksperimen malam.',
    comicCode: 'STAGE // FUEL-01',
  },
  {
    id: 'drink',
    category: 'FAVORITE DRINK',
    value: 'ES TEH',
    caption: 'Pendamping klasik yang wajib ada di meja kerja setiap hari.',
    comicCode: 'STAGE // ELIXIR-02',
  },
  {
    id: 'character',
    category: 'FAVORITE CHARACTER',
    value: 'SPIDER-MAN',
    caption: 'Simbol ketangkasan, tanggung jawab, dan identitas di balik topeng.',
    comicCode: 'STAGE // HERO-03',
  },
  {
    id: 'game',
    category: 'GAME',
    value: 'MOBILE LEGENDS',
    caption: 'Arena kompetitif tempat strategi dan mekanik diuji hingga tier IMMORTAL.',
    comicCode: 'STAGE // ARENA-04',
  },
] as const;
