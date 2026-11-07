import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leovan.my.id';
  const routes = ['', '/about', '/stack', '/projects', '/achievements', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-11-07'),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
