'use client';

import { useEffect, useState } from 'react';

/**
 * Hook para detectar el modo oscuro del sistema o preferencia del usuario
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Verificar preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Aplicar clase dark al documento
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, toggle };
}
