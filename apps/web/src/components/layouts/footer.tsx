'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Headset, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerLinks = {
  servicios: [
    { name: 'Soporte PC', href: '#servicios' },
    { name: 'Seguridad', href: '#servicios' },
    { name: 'Optimización', href: '#servicios' },
    { name: 'Configuración Gamer', href: '#servicios' },
    { name: 'Soporte Remoto', href: '#servicios' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Planes y Precios', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Blog', href: '/blog' },
  ],
  soporte: [
    { name: 'Centro de Ayuda', href: '/help' },
    { name: 'Términos de Servicio', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/itsoporteya', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/itsoporteya', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/itsoporteya', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/itsoporteya', label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg">
                <Headset className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ITSoporteYa
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Plataforma integral de soporte técnico 24/7. Conectamos usuarios 
              con expertos calificados para resolver problemas tecnológicos.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ITSoporteYa. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Términos
              </Link>
              <Link 
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </Link>
              <Link 
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
