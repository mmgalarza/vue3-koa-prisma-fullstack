/*
    API Fetch Utility
*/

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('token')

  const res = await fetch(__API_URL__ + endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  })

  const data = await res.json()

  if (!res.ok) throw data

  return data
}

// Funciones específicas de API
export function post<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined
  })
}

export function get<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint)
}
