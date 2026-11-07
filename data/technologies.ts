export type TechCategory =
  | 'ALL'
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database & Infrastructure'
  | 'Development Tools'
  | 'Cloud & Deployment'
  | 'AI Ecosystem';

export interface TechnologyItem {
  id: string;
  name: string;
  category: Exclude<TechCategory, 'ALL'>;
  shortCode: string;
  summary: string;
  accentColor: string;
}

export const TECH_CATEGORIES: readonly TechCategory[] = [
  'ALL',
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database & Infrastructure',
  'Development Tools',
  'Cloud & Deployment',
  'AI Ecosystem',
] as const;

export const ARSENAL_HEADER = {
  title: 'THE ARSENAL.',
  subtitle: 'TECHNOLOGY & LANGUAGES COLLECTION.',
  badge: 'TECHNOLOGIES EXPLORED & STUDIED',
  description:
    'Koleksi bahasa pemrograman, framework, basis data, dan platform teknologi yang dieksplorasi serta relevan dengan minat pengembangan web dan aplikasi LEOVAN.',
} as const;

export const TECHNOLOGIES: readonly TechnologyItem[] = [
  // Programming Languages (16)
  { id: 'html5', name: 'HTML5', category: 'Programming Languages', shortCode: 'HTML', summary: 'Semantic document structure & web standards', accentColor: '#E34F26' },
  { id: 'css3', name: 'CSS3', category: 'Programming Languages', shortCode: 'CSS', summary: 'Visual styling, layouts, and responsive animations', accentColor: '#1572B6' },
  { id: 'javascript', name: 'JavaScript', category: 'Programming Languages', shortCode: 'JS', summary: 'Dynamic client & server runtime logic', accentColor: '#F7DF1E' },
  { id: 'typescript', name: 'TypeScript', category: 'Programming Languages', shortCode: 'TS', summary: 'Static type system for scalable applications', accentColor: '#3178C6' },
  { id: 'python', name: 'Python', category: 'Programming Languages', shortCode: 'PY', summary: 'AI scripting, backend services, and automation', accentColor: '#3776AB' },
  { id: 'java', name: 'Java', category: 'Programming Languages', shortCode: 'JV', summary: 'Object-oriented systems and enterprise architecture', accentColor: '#ED8B00' },
  { id: 'kotlin', name: 'Kotlin', category: 'Programming Languages', shortCode: 'KT', summary: 'Modern Android and multiplatform development', accentColor: '#7F52FF' },
  { id: 'php', name: 'PHP', category: 'Programming Languages', shortCode: 'PHP', summary: 'Server-side web scripting and dynamic backends', accentColor: '#777BB4' },
  { id: 'c', name: 'C', category: 'Programming Languages', shortCode: 'C', summary: 'Low-level memory and systems programming fundamentals', accentColor: '#A8B9CC' },
  { id: 'cpp', name: 'C++', category: 'Programming Languages', shortCode: 'C++', summary: 'High-performance computing and engine logic', accentColor: '#00599C' },
  { id: 'csharp', name: 'C#', category: 'Programming Languages', shortCode: 'C#', summary: 'Interactive software and game development ecosystem', accentColor: '#512BD4' },
  { id: 'go', name: 'Go', category: 'Programming Languages', shortCode: 'GO', summary: 'Concurrent cloud services and fast CLI tooling', accentColor: '#00ADD8' },
  { id: 'rust', name: 'Rust', category: 'Programming Languages', shortCode: 'RS', summary: 'Memory-safe systems and WebAssembly performance', accentColor: '#DEA584' },
  { id: 'dart', name: 'Dart', category: 'Programming Languages', shortCode: 'DT', summary: 'Cross-platform UI client development language', accentColor: '#0175C2' },
  { id: 'swift', name: 'Swift', category: 'Programming Languages', shortCode: 'SW', summary: 'Native Apple ecosystem application programming', accentColor: '#F05138' },
  { id: 'sql', name: 'SQL', category: 'Programming Languages', shortCode: 'SQL', summary: 'Relational database querying and data modeling', accentColor: '#E60023' },

  // Frontend (10)
  { id: 'react', name: 'React', category: 'Frontend', shortCode: 'RCT', summary: 'Component-driven interactive user interfaces', accentColor: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', shortCode: 'NXT', summary: 'Full-stack React framework with App Router', accentColor: '#FFFFFF' },
  { id: 'vuejs', name: 'Vue.js', category: 'Frontend', shortCode: 'VUE', summary: 'Progressive reactive frontend framework', accentColor: '#4FC08D' },
  { id: 'angular', name: 'Angular', category: 'Frontend', shortCode: 'NG', summary: 'Structured TypeScript web application platform', accentColor: '#DD0031' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', shortCode: 'SVT', summary: 'Compiler-first reactive UI components', accentColor: '#FF3E00' },
  { id: 'vite', name: 'Vite', category: 'Frontend', shortCode: 'VTE', summary: 'Next-generation frontend build and bundler tool', accentColor: '#646CFF' },
  { id: 'tailwindcss', name: 'Tailwind CSS', category: 'Frontend', shortCode: 'TW', summary: 'Utility-first styling and design system engine', accentColor: '#06B6D4' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', shortCode: 'BS', summary: 'Responsive grid and UI component toolkit', accentColor: '#7952B3' },
  { id: 'sass', name: 'Sass', category: 'Frontend', shortCode: 'SAS', summary: 'CSS preprocessor with variables and mixins', accentColor: '#CC6699' },
  { id: 'mui', name: 'Material UI', category: 'Frontend', shortCode: 'MUI', summary: 'Comprehensive React component design library', accentColor: '#007FFF' },

  // Backend (10)
  { id: 'nodejs', name: 'Node.js', category: 'Backend', shortCode: 'NDE', summary: 'Asynchronous JavaScript server runtime', accentColor: '#339933' },
  { id: 'expressjs', name: 'Express.js', category: 'Backend', shortCode: 'EXP', summary: 'Minimalist web routing and middleware framework', accentColor: '#FFFFFF' },
  { id: 'nestjs', name: 'NestJS', category: 'Backend', shortCode: 'NST', summary: 'Modular TypeScript server architecture', accentColor: '#E0234E' },
  { id: 'laravel', name: 'Laravel', category: 'Backend', shortCode: 'LRV', summary: 'Expressive PHP web application framework', accentColor: '#FF2D20' },
  { id: 'django', name: 'Django', category: 'Backend', shortCode: 'DJG', summary: 'Batteries-included Python web framework', accentColor: '#092E20' },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', shortCode: 'FAP', summary: 'High-performance Python API framework', accentColor: '#009688' },
  { id: 'flask', name: 'Flask', category: 'Backend', shortCode: 'FLK', summary: 'Lightweight Python WSGI web microframework', accentColor: '#FFFFFF' },
  { id: 'springboot', name: 'Spring Boot', category: 'Backend', shortCode: 'SPB', summary: 'Production-grade Java backend services', accentColor: '#6DB33F' },
  { id: 'restapi', name: 'REST API', category: 'Backend', shortCode: 'RST', summary: 'Standardized HTTP resource communication architecture', accentColor: '#E60023' },
  { id: 'graphql', name: 'GraphQL', category: 'Backend', shortCode: 'GQL', summary: 'Typed query language for flexible APIs', accentColor: '#E10098' },

  // Database & Infrastructure (9)
  { id: 'mysql', name: 'MySQL', category: 'Database & Infrastructure', shortCode: 'MYS', summary: 'Open-source relational database management', accentColor: '#4479A1' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database & Infrastructure', shortCode: 'PG', summary: 'Advanced enterprise-class relational database', accentColor: '#4169E1' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database & Infrastructure', shortCode: 'MGO', summary: 'Document-oriented NoSQL database engine', accentColor: '#47A248' },
  { id: 'firebase', name: 'Firebase', category: 'Database & Infrastructure', shortCode: 'FRB', summary: 'Real-time app backend and authentication suite', accentColor: '#FFCA28' },
  { id: 'supabase', name: 'Supabase', category: 'Database & Infrastructure', shortCode: 'SUP', summary: 'Open-source Postgres backend platform', accentColor: '#3ECF8E' },
  { id: 'redis', name: 'Redis', category: 'Database & Infrastructure', shortCode: 'RDS', summary: 'In-memory data store and low-latency cache', accentColor: '#DC382D' },
  { id: 'sqlite', name: 'SQLite', category: 'Database & Infrastructure', shortCode: 'SQLT', summary: 'Embedded serverless relational database engine', accentColor: '#003B57' },
  { id: 'prisma', name: 'Prisma', category: 'Database & Infrastructure', shortCode: 'PRM', summary: 'Next-generation TypeScript ORM and schema tool', accentColor: '#2D3748' },
  { id: 'drizzle', name: 'Drizzle ORM', category: 'Database & Infrastructure', shortCode: 'DRZ', summary: 'Type-safe lightweight SQL ORM for TypeScript', accentColor: '#C5F74F' },

  // Development Tools (9)
  { id: 'git', name: 'Git', category: 'Development Tools', shortCode: 'GIT', summary: 'Distributed version control and branching system', accentColor: '#F05032' },
  { id: 'github', name: 'GitHub', category: 'Development Tools', shortCode: 'GHB', summary: 'Code hosting, collaboration, and CI workflows', accentColor: '#FFFFFF' },
  { id: 'gitlab', name: 'GitLab', category: 'Development Tools', shortCode: 'GLB', summary: 'DevSecOps lifecycle and repository platform', accentColor: '#FC6D26' },
  { id: 'vscode', name: 'Visual Studio Code', category: 'Development Tools', shortCode: 'VSC', summary: 'Primary code editor and debugging environment', accentColor: '#007ACC' },
  { id: 'androidstudio', name: 'Android Studio', category: 'Development Tools', shortCode: 'AND', summary: 'Official IDE for native Android development', accentColor: '#3DDC84' },
  { id: 'intellij', name: 'IntelliJ IDEA', category: 'Development Tools', shortCode: 'IJ', summary: 'Intelligent JVM and polyglot development IDE', accentColor: '#FE315D' },
  { id: 'postman', name: 'Postman', category: 'Development Tools', shortCode: 'PMN', summary: 'API testing, inspection, and request automation', accentColor: '#FF6C37' },
  { id: 'figma', name: 'Figma', category: 'Development Tools', shortCode: 'FIG', summary: 'Interface design, wireframing, and vector prototyping', accentColor: '#F24E1E' },
  { id: 'docker', name: 'Docker', category: 'Development Tools', shortCode: 'DCK', summary: 'Containerized application packaging and deployment', accentColor: '#2496ED' },

  // Cloud & Deployment (7)
  { id: 'vercel', name: 'Vercel', category: 'Cloud & Deployment', shortCode: 'VCL', summary: 'Edge cloud deployment for Next.js and web apps', accentColor: '#FFFFFF' },
  { id: 'netlify', name: 'Netlify', category: 'Cloud & Deployment', shortCode: 'NTL', summary: 'Automated web hosting and serverless functions', accentColor: '#00C7B7' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'Cloud & Deployment', shortCode: 'CFL', summary: 'Global CDN, DNS, Workers, and edge security', accentColor: '#F38020' },
  { id: 'aws', name: 'AWS', category: 'Cloud & Deployment', shortCode: 'AWS', summary: 'Cloud compute, storage, and infrastructure services', accentColor: '#FF9900' },
  { id: 'gcp', name: 'Google Cloud', category: 'Cloud & Deployment', shortCode: 'GCP', summary: 'Scalable cloud hosting, APIs, and Cloud Run', accentColor: '#4285F4' },
  { id: 'azure', name: 'Microsoft Azure', category: 'Cloud & Deployment', shortCode: 'AZR', summary: 'Enterprise cloud computing and app services', accentColor: '#0078D4' },
  { id: 'firebasehosting', name: 'Firebase Hosting', category: 'Cloud & Deployment', shortCode: 'FBH', summary: 'Fast CDN hosting for modern web applications', accentColor: '#FFCA28' },

  // AI Ecosystem (6)
  { id: 'geminiapi', name: 'Gemini API', category: 'AI Ecosystem', shortCode: 'GMN', summary: 'Multimodal generative AI integration & reasoning', accentColor: '#8E75B2' },
  { id: 'googleaistudio', name: 'Google AI Studio', category: 'AI Ecosystem', shortCode: 'AIS', summary: 'Rapid prototyping and AI application building', accentColor: '#E60023' },
  { id: 'openaiapi', name: 'OpenAI API', category: 'AI Ecosystem', shortCode: 'OAI', summary: 'Language model endpoints and intelligent workflows', accentColor: '#10A37F' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI Ecosystem', shortCode: 'TF', summary: 'End-to-end machine learning model platform', accentColor: '#FF6F00' },
  { id: 'pytorch', name: 'PyTorch', category: 'AI Ecosystem', shortCode: 'PTC', summary: 'Deep learning tensors and neural network research', accentColor: '#EE4C2C' },
  { id: 'huggingface', name: 'Hugging Face', category: 'AI Ecosystem', shortCode: 'HF', summary: 'Open-source AI models, datasets, and spaces', accentColor: '#FFD21E' },
] as const;

export function filterTechnologies(
  items: readonly TechnologyItem[],
  category: TechCategory,
  searchQuery: string
): TechnologyItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'ALL' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.shortCode.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getCategoryCounts(items: readonly TechnologyItem[]): Record<TechCategory, number> {
  const counts: Record<TechCategory, number> = {
    ALL: items.length,
    'Programming Languages': 0,
    Frontend: 0,
    Backend: 0,
    'Database & Infrastructure': 0,
    'Development Tools': 0,
    'Cloud & Deployment': 0,
    'AI Ecosystem': 0,
  };
  for (const item of items) {
    counts[item.category] += 1;
  }
  return counts;
}
