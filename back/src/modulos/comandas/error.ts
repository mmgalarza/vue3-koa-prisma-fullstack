import errorsJson from './errors.json'

export type ErrorSeverity = 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL'

export class BaseError extends Error {
  public readonly code: number
  public readonly severity: ErrorSeverity

  constructor(code: number, message: string, severity: ErrorSeverity = 'ERROR') {
    super(message)
    this.code = code
    this.severity = severity
    this.name = 'BaseError'
  }
}

export class ComandasError extends BaseError {
  constructor(code: number) {
    const config = (errorsJson as Record<number, { message: string; severity: ErrorSeverity }>)[code] ?? {
      message: 'Error desconocido en comandas',
      severity: 'ERROR',
    }
    super(code, config.message, config.severity)
    this.name = 'ComandasError'
  }
}
