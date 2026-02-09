export interface ApiError {
  status: number
  message: string
  details?: unknown
}

export interface ApiFetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>
}