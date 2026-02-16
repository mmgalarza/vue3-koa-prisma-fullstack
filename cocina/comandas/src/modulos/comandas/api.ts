/**
 * @file api.ts
 * @description Consolidación de utilidades Fetch y servicios del Módulo de Cocina.
 */

// --- UTILIDADES BASE ---

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token');
  //const apiUrl = (window as any).__API_URL__ || 'http://localhost:3000';
  const host = window.location.hostname;
  const apiUrl = (window as any).__API_URL__ || `http://${host}:3000`;  

  const res = await fetch(apiUrl + endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  });

  if (res.status === 204) return {} as T;

  const data = await res.json();
  if (!res.ok) throw data;

  return data;
}

function buildQuery(params?: Record<string, any>): string {
  if (!params || Object.keys(params).length === 0) return '';
  const cleanParams = Object.entries(params).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null) acc[key] = String(val);
    return acc;
  }, {} as Record<string, string>);
  
  return '?' + new URLSearchParams(cleanParams).toString();
}

export const http = {
  get: <T>(e: string, p?: Record<string, any>) => request<T>(e + buildQuery(p), { method: 'GET' }),
  post: <T>(e: string, b?: unknown) => request<T>(e, { method: 'POST', body: b ? JSON.stringify(b) : undefined }),
  patch: <T>(e: string, b?: unknown) => request<T>(e, { method: 'PATCH', body: b ? JSON.stringify(b) : undefined }),
  put: <T>(e: string, b?: unknown) => request<T>(e, { method: 'PUT', body: b ? JSON.stringify(b) : undefined }),
  del: <T>(e: string) => request<T>(e, { method: 'DELETE' })
};

// --- SERVICIOS DE COCINA ---

import type { 
  Comanda, 
  ComandaProducto, 
  AccionCogerProducto, 
  AccionServirProducto,
  EstadoComanda 
} from './schema.zod.2';

export const CocinaAPI = {
  /** Obtiene todas las comandas activas para el tablero */
  listarComandas: () => 
    http.get<Comanda[]>('/api/v1/comandas/'),

  /** Obtiene detalle de una comanda */
  obtenerDetalle: (id: number) => 
    http.get<Comanda>(`/api/v1/comandas/${id}`),

  /** Filtra por estado (PENDIENTE, PREPARACION, etc.) */
  filtrarPorEstado: (estado: EstadoComanda) => 
    http.get<Comanda[]>(`/api/v1/comandas/estado/${estado}`),

  /** Cocinero reclama un producto (Exclusividad) */
  cogerProducto: (datos: AccionCogerProducto) => 
    http.patch<ComandaProducto>('/api/v1/comandas/coger', datos),

  /** Actualiza cantidad servida */
  servirProducto: (datos: AccionServirProducto & { idCocinero: number }) => 
    http.patch<ComandaProducto>('/api/v1/comandas/servir', datos),

  /** Libera un producto de un cocinero */
  liberarProducto: (datos: AccionCogerProducto) => 
    http.patch<ComandaProducto>('/api/v1/comandas/liberar', datos),

  /** Anula una comanda completa */
  anularComanda: (id: number) => 
    http.del<void>(`/api/v1/comandas/${id}`),
};