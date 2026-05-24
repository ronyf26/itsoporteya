'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, Headset } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg">
              <Headset className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl hidden sm:inline bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ITSoporteYa
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#servicios" className="text-sm hover:text-primary transition">
              Servicios
            </Link>
            <Link href="/#planes" className="text-sm hover:text-primary transition">
              Planes
            </Link>
            <Link href="/#contacto" className="text-sm hover:text-primary transition">
              Contacto
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-4">
                <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => logout()}
                  className="gap-2"
                >
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">Registrarse</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            variants={menuVariants}
            className="md:hidden pb-4 space-y-2 border-t border-slate-200 dark:border-slate-800"
          >
            <Link href="/#servicios" className="block px-4 py-2 hover:bg-accent rounded transition">
              Servicios
            </Link>
            <Link href="/#planes" className="block px-4 py-2 hover:bg-accent rounded transition">
              Planes
            </Link>
            <Link href="/#contacto" className="block px-4 py-2 hover:bg-accent rounded transition">
              Contacto
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-accent rounded transition">
                  Dashboard
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <div className="flex gap-2 px-4">
                <Link href="/auth/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/auth/register" className="flex-1">
                  <Button size="sm" className="w-full">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
