'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/shared/animations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Implementar envío al backend
    console.log('Form data:', data);
    reset();
    alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contacto@itsoporteya.com' },
    { icon: Phone, label: 'Teléfono', value: '+1 (234) 567-890' },
    { icon: MapPin, label: 'Ubicación', value: 'Disponible globalmente' },
    { icon: Clock, label: 'Horario', value: '24/7 todos los días' },
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Necesitas ayuda? Estamos disponibles 24/7 para asistirte
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre</label>
                      <input
                        {...register('name')}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Asunto</label>
                    <input
                      {...register('subject')}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Describe tu problema..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}

            {/* Additional Info */}
            <FadeIn delay={0.7}>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Soporte Prioritario</h3>
                  <p className="text-muted-foreground mb-4">
                    Obtén respuestas más rápidas con nuestro plan Premium. 
                    Soporte prioritario 24/7 con tiempo de respuesta garantizado.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Ver Planes Premium
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
