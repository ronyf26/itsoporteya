'use client';

import { motion } from 'framer-motion';
import { Users, Award, Zap, Globe } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/shared/animations';

const stats = [
  { icon: Users, value: '+5,000', label: 'Clientes Satisfechos' },
  { icon: Award, value: '99%', label: 'Tasa de Éxito' },
  { icon: Zap, value: '<5min', label: 'Tiempo de Respuesta' },
  { icon: Globe, value: '24/7', label: 'Disponibilidad' },
];

const features = [
  'Soporte técnico especializado 24/7',
  'Expertos certificados',
  'Asistencia remota inmediata',
  'Garantía de satisfacción',
  'Precios transparentes',
  'Seguridad y privacidad garantizadas',
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6">
                Sobre{' '}
                <span className="text-gradient">ITSoporteYa</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Somos una plataforma integral de soporte técnico que conecta a usuarios 
                con expertos calificados disponibles 24/7. Nuestra misión es proporcionar 
                soluciones tecnológicas rápidas, efectivas y accesibles para todos.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Con años de experiencia en la industria, nuestro equipo de profesionales 
                está capacitado para resolver desde problemas básicos hasta situaciones 
                técnicas complejas.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Column - Stats */}
          <div>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>

            {/* CTA Card */}
            <FadeIn delay={0.4} className="mt-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-2">¿Listo para comenzar?</h3>
                <p className="text-muted-foreground mb-4">
                  Únete a miles de clientes satisfechos y obtén soporte técnico 
                  cuando lo necesites.
                </p>
                <a href="#contacto" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Contactar Ahora
                  </motion.button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
