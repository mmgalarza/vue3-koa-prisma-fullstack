import { sanityClient } from './provider/sanity/api';
import { QUERY_ARBOL_NAVEGACION } from './provider/sanity/queries';
import { BrowserMapper } from './provider/sanity/mapper';

export const BrowserRepository = {
  /**
   * Obtiene el árbol de navegación completo desde Sanity.
   * Devuelve un array de ItemBrowserType (objetos planos procesados).
   */
  async getAll(): Promise<any[]> {
    try {
      // 1. Fetch de datos
      const response = await sanityClient.fetch(QUERY_ARBOL_NAVEGACION);

      // 2. Normalización de la respuesta
      // Sanity a veces envuelve el resultado en un objeto .result o devuelve el array directo
      const rawData = Array.isArray(response) 
        ? response 
        : response?.result || [];

      if (!rawData.length) {
        console.warn("BrowserRepository: No se encontraron datos en la consulta de Sanity.");
        return [];
      }

      // 3. Mapeo a objetos de dominio (Planos)
      // El Mapper se encarga de la recursividad de los hijos internamente
      return rawData.map((item: any) => BrowserMapper.toDomain(item));

    } catch (error) {
      console.error("Error crítico en BrowserRepository.getAll:", error);
      // Devolvemos un array vacío o re-lanzamos el error según prefieras
      throw new Error("No se pudo cargar el árbol de navegación.");
    }
  }
}