import type { ItemBrowserType } from '../../zod'
import { urlFor } from './api'

export const BrowserMapper = {
  /**
   * Transforma datos crudos de Sanity al tipo ItemBrowserType.
   * Unifica 'hijos' (categorías) y 'productos' en una sola lista.
   */
  toDomain(raw: any, nivel: 'familia' | 'madre' | 'hija' | 'producto' = 'familia'): ItemBrowserType {
    // 1. Procesamiento de Imagen
    let imagen = 'https://via.placeholder.com/400x300?text=Sin+Imagen';
    if (raw.imagen?.asset || raw.imagen?._ref) {
      try {
        const url = urlFor(raw.imagen)?.url();
        if (url) imagen = url;
      } catch (error) {
        console.warn(`Error en imagen para: ${raw.nombre}`, error);
      }
    }

    // 2. Generación de Slug
    const slugFallback = raw.nombre 
      ? raw.nombre.toLowerCase().trim().replace(/\s+/g, '-') 
      : `item-${Math.random().toString(36).substr(2, 5)}`;
    
    const slugFinal = (typeof raw.slug === 'object' ? raw.slug?.current : raw.slug) || slugFallback;

    // 3. Control de Niveles
    const mappingNiveles: Record<string, 'familia' | 'madre' | 'hija' | 'producto'> = {
      'familia': 'madre',
      'madre': 'hija',
      'hija': 'producto',
      'producto': 'producto'
    };
    const nextLevel = mappingNiveles[nivel] || 'producto';

    // 4. UNIFICACIÓN CRÍTICA: hijos + productos
    // Extraemos ambos arrays del JSON de Sanity
    const rawHijos = Array.isArray(raw.hijos) ? raw.hijos : [];
    const rawProductos = Array.isArray(raw.productos) ? raw.productos : [];

    // Mapeamos las subcategorías (mantienen la lógica de niveles)
    const hijosMapeados = rawHijos.map((h: any) => this.toDomain(h, nextLevel));
    
    // Mapeamos los productos (forzamos nivel 'producto')
    const productosMapeados = rawProductos.map((p: any) => this.toDomain(p, 'producto'));

    // Combinamos ambos en el campo 'hijos' de nuestro dominio
    const hijosFinales = [...hijosMapeados, ...productosMapeados];

    // 5. Retorno del objeto unificado
    return {
      id: raw._id || raw.id || `temp-${Math.random()}`,
      nombre: raw.nombre || 'Sin nombre',
      slug: slugFinal,
      nivel: nivel, 
      imagenUrl: imagen,
      hijos: hijosFinales,
      precio: raw.precio ? Number(raw.precio) : undefined
    };
  }
}