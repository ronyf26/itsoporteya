import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
}

/**
 * Genera metadata SEO para páginas de la aplicación
 * Sigue las mejores prácticas de SEO técnico
 */
export function generateSEO({
  title,
  description,
  canonical = '',
  ogImage = '/og-image.jpg',
  keywords = [],
}: SEOProps): Metadata {
  const siteName = 'ITSoporteYa - Soporte Técnico 24/7';
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'soporte técnico',
      'IT',
      'tecnología',
      'asistencia remota',
      'reparación de computadoras',
      ...keywords,
    ],
    authors: [{ name: 'ITSoporteYa' }],
    creator: 'ITSoporteYa',
    publisher: 'ITSoporteYa',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    metadataBase: new URL('https://itsoporteya.com'),
    alternates: {
      canonical,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: canonical || 'https://itsoporteya.com',
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@itsoporteya',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

/**
 * Schema.org JSON-LD para LocalBusiness
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ITSoporteYa',
  description: 'Plataforma integral de soporte técnico 24/7',
  image: 'https://itsoporteya.com/og-image.jpg',
  telephone: '+1234567890',
  email: 'contacto@itsoporteya.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Principal 123',
    addressLocality: 'Ciudad',
    addressRegion: 'Estado',
    postalCode: '12345',
    addressCountry: 'US',
  },
  url: 'https://itsoporteya.com',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};
