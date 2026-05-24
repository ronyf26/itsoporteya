import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { MainLayout } from '@/components/layouts/main-layout';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'ITSoporteYa - Soporte Técnico 24/7',
  description: 'Plataforma integral de soporte técnico 24/7. Expertos disponibles ahora para resolver tus problemas tecnológicos.',
  keywords: ['soporte técnico', 'IT', 'tecnología', 'asistencia remota', 'reparación PC'],
  authors: [{ name: 'ITSoporteYa' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://itsoporteya.com',
    title: 'ITSoporteYa - Soporte Técnico 24/7',
    description: 'Expertos disponibles ahora para resolver tus problemas tecnológicos',
    siteName: 'ITSoporteYa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSoporteYa - Soporte Técnico 24/7',
    description: 'Expertos disponibles ahora para resolver tus problemas tecnológicos',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
