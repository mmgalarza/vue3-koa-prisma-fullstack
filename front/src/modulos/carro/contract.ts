export interface CarroItem {
  idProducto: number
  nombre: string
  cantidad: number
  precio: number
  imagen?: string
}

export interface CarroResumen {
  totalItems: number
  totalPrecio: number
}

export interface CarroItem {
  idProducto: number
  nombre: string
  cantidad: number
  precio: number
  subtotal: number
  imagen?: string
}

export interface OperacionDetalle {
  idDetalle: number
  idProducto: number
  cantidad: number
  precioUnitario: number
  subtotal: number
}

export interface Cliente {
  idCliente?: number
  nombre: string
  email: string
  calle?: string
  numero?: string
  ciudad?: string
  provincia?: string
  codigoPostal?: string
  pais?: string
  contacto?: string
}

export interface Operacion {
  idOperacion: number
  estado: 'BORRADOR' | 'CONFIRMADA' | 'ANULADA'
  total: number
  createdAt: string
  confirmedAt?: string
  cliente?: Cliente
  operacionesDetalle: OperacionDetalle[]
}
