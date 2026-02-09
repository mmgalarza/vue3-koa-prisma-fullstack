export interface Categoria {
  idCategoria: number
  nombre: string
  descripcion?: string
  tipo: 'FAMILIA' | 'MADRE' | 'HIJA'
  activo: boolean
  idCategoriaPadre?: number
  subcategorias?: Categoria[]
}

export interface Producto {
  idProducto: number
  nombre: string
  descripcion?: string
  precios: number
  stock: number
  activo: boolean
  idCategoria: number
  categoria?: Categoria
  imagenes?: ProductoImagen[] 
}

export interface ProductoImagen {
  id: number
  idProducto: number
  url: string
  orden: number
  principal: boolean
  activo: boolean
}

export interface TreeItem {
  id: number
  name: string
  children?: TreeItem[]
  selectable?: boolean
}

export interface FiltrosProducto {
  categoriaId?: number | null
  precioMin?: number
  precioMax?: number
  stockDisponible?: boolean
}
export interface ProductosPaginados {
  items: Producto[]
  total: number
}
