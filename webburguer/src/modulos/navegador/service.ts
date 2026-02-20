import { BrowserRepository } from './repository';
import { BrowserDomain } from './domain';
import type { ItemBrowserType } from './zod';

export class BrowserService {
  /**
   * Obtiene los datos del repositorio y los transforma en el Árbol de Dominio.
   */
  async getAll(): Promise<ItemBrowserType[]> {
    try {
      // 1. Obtenemos los objetos planos validados por el mapper/zod
      const itemsRaw = await BrowserRepository.getAll();

      // 2. Valida la raíz del dominio
      const aggregateDomain = new BrowserDomain(itemsRaw);
      // 3. Retorna el resultado ya validado y estructurado
      return aggregateDomain.getAll;
      
    } catch (error) {
      console.error("Error in BrowserService:", error);
      throw new Error("Failed to initialize the browser system.");
    }
  }
}