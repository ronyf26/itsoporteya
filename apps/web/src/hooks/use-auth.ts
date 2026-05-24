'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/auth-store';

/**
 * Hook personalizado para manejar autenticación
 * Proporciona estado de autenticación y métodos para login/logout
 */
export function useAuth() {
  const { user, isAuthenticated, token, login, logout, setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay una sesión activa al montar el componente
    const checkAuth = async () => {
      try {
        // Aquí se podría verificar la validez del token con el backend
        if (token && user) {
          // Token válido, mantener sesión
        } else {
          // No hay token o usuario, cerrar sesión
          logout();
        }
      } catch (error) {
        console.error('Error verificando autenticación:', error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    user,
    isAuthenticated,
    token,
    isLoading,
    login,
    logout,
    setUser,
  };
}
