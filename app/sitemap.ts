import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vanshiv.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // add other pages here when needed
  ]
}
