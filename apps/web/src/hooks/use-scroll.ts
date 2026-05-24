'use client';

import { useEffect, useState } from 'react';

/**
 * Hook para manejar el estado de scroll y visibilidad del navbar
 */
export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled, scrollY };
}
