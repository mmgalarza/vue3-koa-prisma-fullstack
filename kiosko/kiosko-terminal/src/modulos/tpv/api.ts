/**
 * API Fetch Utility - Adaptado para Kiosko React
 * Mantiene la estructura de tu modelo original de Vue.
 */

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token');
  // En React/Vite solemos usar import.meta.env, pero mantenemos tu fallback
  const apiUrl = (window as any).__API_URL__ || 'http://localhost:3000';

  const res = await fetch(apiUrl + endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  });

  // Manejo de 204 No Content
  if (res.status === 204) return {} as T;

  // Intentar parsear JSON, si falla (como en errores de servidor crudos), lanzar error genérico
  let data;
  try {
    data = await res.json();
  } catch (e) {
    data = { message: 'Error inesperado en el servidor' };
  }

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

export const api = {
  get: <T>(endpoint: string, params?: Record<string, any>) => 
    request<T>(endpoint + buildQuery(params), { method: 'GET' }),

  post: <T>(endpoint: string, body?: unknown) => 
    request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    }),

  patch: <T>(endpoint: string, body?: unknown) => 
    request<T>(endpoint, {
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined
    }),

  put: <T>(endpoint: string, body?: unknown) => 
    request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined
    }),

  del: <T>(endpoint: string) => 
    request<T>(endpoint, { method: 'DELETE' })
};