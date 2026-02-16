/*
    API Fetch Utility V2
    Soporta Query Params, PATCH y DELETE
*/

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token')
  const apiUrl = (window as any).__API_URL__ || 'http://localhost:3000'

  const res = await fetch(apiUrl + endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  })

  // Manejo de 204 No Content (típico en DELETE)
  if (res.status === 204) return {} as T

  const data = await res.json()
  if (!res.ok) throw data

  return data
}

/**
 * Helper para construir query strings
 */
function buildQuery(params?: Record<string, any>): string {
  if (!params || Object.keys(params).length === 0) return ''
  // Filtramos valores undefined o null
  const cleanParams = Object.entries(params).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null) acc[key] = String(val)
    return acc
  }, {} as Record<string, string>)
  
  return '?' + new URLSearchParams(cleanParams).toString()
}

export function get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
  return request<T>(endpoint + buildQuery(params), { method: 'GET' })
}

export function post<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined
  })
}

export function patch<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'PATCH',
    body: body ? JSON.stringify(body) : undefined
  })
}

export function del<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint, { method: 'DELETE' })
}

export function put<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined
  })
}