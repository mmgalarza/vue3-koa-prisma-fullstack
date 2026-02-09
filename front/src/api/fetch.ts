import type { ApiError } from '@/contracts/apierror'
import { useAuthStore } from '@/stores/auth.store'
import router from '@/router'

function getToken(): string | null {
  return localStorage.getItem('token')
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & {
    params?: Record<string, string | number | boolean | undefined>
  } = {}
): Promise<T> {
  const { params, headers, ...fetchOptions } = options

  const query = params
    ? '?' +
      Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(
          ([k, v]) =>
            `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
        )
        .join('&')
    : ''

  const token = getToken()

  const response = await fetch(`${__API_URL__}${endpoint}${query}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    ...fetchOptions,
  })

  // Manejo automático de errores
  if (!response.ok) {
    let body: any = null
    try {
      body = await response.json()
    } catch {}

    // 👇 Manejo 401: token inválido o expirado
    if (response.status === 401) {
      const auth = useAuthStore()
      auth.logout()           // Limpia token y usuario
      router.push({ name: 'login' }) // Redirige a login
    }

    throw <ApiError>{
      status: response.status,
      message: body?.message || response.statusText,
      details: body,
    }
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
