import { Navbar } from './navbar';
import { Footer } from './footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de la aplicación
 * Incluye Navbar y Footer en todas las páginas
 */
export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
