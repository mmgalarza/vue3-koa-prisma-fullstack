import { get, post } from '@auth/api'
import type { Categoria, Producto, ProductoImagen, ProductosPaginados } from './contract.js'

// -------------------- CATEGORIAS --------------------
export const apiCategorias = {
  listar: async (): Promise<Categoria[]> => {
    const res = await get<{ familias: Categoria[] }>('/api/categorias')
    return res.familias
  },
  detalle: async (id: number): Promise<Categoria> => get(`/api/categorias/${id}`),
  listarMadres: async (idFamilia?: number) =>
    get<{ madres: Categoria[] }>(`/api/categorias/madres${idFamilia ? `?idFamilia=${idFamilia}` : ''}`).then(r => r.madres),
  listarHijas: async (idMadre?: number) =>
    get<{ hijas: Categoria[] }>(`/api/categorias/hijas${idMadre ? `?idMadre=${idMadre}` : ''}`).then(r => r.hijas)
}

// -------------------- PRODUCTOS --------------------
export const apiProductos = {
  listar: async (): Promise<Producto[]> => get('/api/productos'),
  listarPaginado: async (params: {
    page: number
    limit: number
    categoriaId?: number | null
  }): Promise<ProductosPaginados> => {
    const { page, limit, categoriaId } = params
    const res = await get<ProductosPaginados>('/api/productos' + `?page=${page}&limit=${limit}` + (categoriaId ? `&categoriaId=${categoriaId}` : ''))
    return res
  },  
  listarPorCategoria: async (idCategoria: number): Promise<Producto[]> =>
    get(`/api/productos/categoria/${idCategoria}`),
  detalle: async (id: number): Promise<Producto> => get(`/api/productos/${id}`)
}

// -------------------- IMAGENES --------------------
export const apiImagenes = {
  listarPorProducto: async (idProducto: number): Promise<ProductoImagen[]> =>
    get<ProductoImagen[]>('/api/productos/imagenes').then(imgs => imgs.filter((i: ProductoImagen) => i.idProducto === idProducto))
}
