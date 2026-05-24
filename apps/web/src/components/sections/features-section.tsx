'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/shared/animations';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Soporte Inmediato',
    description: 'Conéctate con un experto en menos de 5 minutos. Sin esperas, sin complicaciones.',
    icon: '⚡',
  },
  {
    title: 'Expertos Verificados',
    description: 'Todos nuestros técnicos están certificados y verificados para garantizar calidad.',
    icon: '✓',
  },
  {
    title: 'Multi-Plataforma',
    description: 'Soporte para Windows, macOS, Linux, iOS, Android y más dispositivos.',
    icon: '🖥️',
  },
  {
    title: 'Seguridad Garantizada',
    description: 'Tus datos están protegidos con encriptación de extremo a extremo.',
    icon: '🔒',
  },
  {
    title: 'Precios Transparentes',
    description: 'Sin costos ocultos. Paga solo por el servicio que necesitas.',
    icon: '💰',
  },
  {
    title: 'Satisfacción Asegurada',
    description: 'Si no resolvemos tu problema, te devolvemos tu dinero.',
    icon: '😊',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ¿Por qué elegir{' '}
            <span className="text-gradient">ITSoporteYa</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Características diseñadas para brindarte la mejor experiencia 
            de soporte técnico
          </p>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.6} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para experimentar la diferencia?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Únete ahora y obtén tu primera consulta de diagnóstico gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Comenzar Ahora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Saber Más
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
