'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const plans = [
  {
    name: 'Diagnóstico',
    price: '$5',
    period: 'por sesión',
    description: 'Análisis inicial de problemas',
    features: ['Evaluación completa', 'Reporte detallado', '~30 minutos', 'Email follow-up'],
    popular: false,
  },
  {
    name: 'Estándar',
    price: '$15',
    period: 'por sesión',
    description: 'Sesiones completas de soporte',
    features: ['Soporte completo', 'Reparación incluida', 'Hasta 45 minutos', 'Asesoramiento', 'Email follow-up'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$30',
    period: 'por mes',
    description: 'Soporte ilimitado',
    features: ['3 sesiones/mes', 'Prioridad', 'Descuentos extras', 'Chat 24/7', 'Mantenimiento preventivo'],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function PricingSection() {
  return (
    <section id="planes" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'border-2 border-cyan-400 md:scale-105 bg-gradient-to-br from-slate-900 to-slate-800 text-white'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className={plan.popular ? 'text-white' : ''}>{plan.name}</CardTitle>
                  <CardDescription className={plan.popular ? 'text-slate-300' : ''}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ml-2 ${plan.popular ? 'text-slate-300' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className={`text-sm ${plan.popular ? 'text-slate-100' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/auth/register" className="block">
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Seleccionar Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
