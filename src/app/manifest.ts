import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aaditya Mall',
    short_name: 'Aaditya Mall',
    description: 'Aaditya Mall',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/Aaditya.jpg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}