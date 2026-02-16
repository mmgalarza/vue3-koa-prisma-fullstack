import { useSyncExternalStore } from 'react';
import { authController } from './controller';

export const useAuth = () => {
  const state = useSyncExternalStore(
    (callback) => authController.suscribir(callback),
    () => authController.estado
  );

  return {
    // Estado
    ...state,
    isLoggedIn: authController.isLoggedIn,
    isAdmin: authController.isAdmin,
    isClient: authController.isClient,
    
    // Acciones
    login: (payload: Parameters<typeof authController.login>[0]) => authController.login(payload),
    logout: () => authController.logout(),
    refreshToken: () => authController.refreshToken()
  };
};