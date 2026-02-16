import { useSyncExternalStore } from 'react';
import { kioskero } from './controller';

export const useKioskero = () => {
  // Conectamos el almacén externo con el ciclo de vida de React
  return useSyncExternalStore(
    kioskero.suscribir,
    kioskero.obtenerSnapshot
  );
};