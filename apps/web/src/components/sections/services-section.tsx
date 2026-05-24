'use client';

import { motion } from 'framer-motion';
import { 
  Monitor, 
  Shield, 
  Gauge, 
  Gamepad2, 
  Video, 
  Wrench 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn, StaggerContainer } from '@/components/shared/animations';

const services = [
  {
    icon: Monitor,
    title: 'Soporte PC',
    description: 'Diagnóstico y reparación completa de computadoras de escritorio y portátiles. Hardware y software.',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Protección contra malware, virus y configuración de antivirus profesionales. Limpieza completa.',
  },
  {
    icon: Gauge,
    title: 'Optimización',
    description: 'Mejora el rendimiento de tu equipo eliminando archivos basura y procesos innecesarios.',
  },
  {
    icon: Gamepad2,
    title: 'Configuración Gamer',
    description: 'Setup óptimo para juegos: drivers, gráficos y configuración avanzada para máximo FPS.',
  },
  {
    icon: Video,
    title: 'Soporte Remoto',
    description: 'Asistencia en vivo mediante chat, voz o videollamada con expertos disponibles 24/7.',
  },
  {
    icon: Wrench,
    title: 'Instalación',
    description: 'Instalación profesional de software, actualizaciones y herramientas especializadas.',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones completas para todos tus problemas tecnológicos
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
