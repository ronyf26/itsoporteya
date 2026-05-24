import { HeroSection, ServicesSection, PricingSection, AboutSection, FeaturesSection, ContactSection } from '@/components/sections';
import { generateSEO } from '@/lib/seo';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata = generateSEO({
  title: 'Inicio',
  description: 'Plataforma integral de soporte técnico 24/7. Expertos disponibles ahora para resolver tus problemas tecnológicos.',
  keywords: ['soporte técnico', 'IT', 'reparación PC', 'asistencia remota'],
});

export default async function HomePage({ searchParams }: HomeProps) {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
