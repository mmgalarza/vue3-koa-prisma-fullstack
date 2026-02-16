import { useSyncExternalStore } from 'react';
import { kioskero } from './controller.4';

export const useKioskero = () => {
  /**
   * useSyncExternalStore requiere:
   * 1. La función de suscripción (kioskero.suscribir)
   * 2. Una función que devuelva el estado actual (snapshot)
   */
  return useSyncExternalStore(
    (callback) => kioskero.suscribir(callback), // Suscripción
    () => kioskero.getEstado()                  // 👈 Ahora llamamos al método corregido
  );
};