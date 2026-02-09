import { apiCategorias, apiProductos, apiImagenes } from './api'
import type { Categoria, Producto, ProductoImagen, ProductosPaginados } from './contract'

// --------------- CATEGORIAS ----------------
export const obtenerCategorias = (): Promise<Categoria[]> => apiCategorias.listar()
export const obtenerCategoriaPorId = (id: number): Promise<Categoria> => apiCategorias.detalle(id)
export const obtenerMadres = (idFamilia?: number) => apiCategorias.listarMadres(idFamilia)
export const obtenerHijas = (idMadre?: number) => apiCategorias.listarHijas(idMadre)

// --------------- PRODUCTOS ----------------
export const obtenerProductos = (): Promise<Producto[]> => apiProductos.listar()
export const obtenerProductosPorCategoria = (idCategoria: number): Promise<Producto[]> =>
  apiProductos.listarPorCategoria(idCategoria)
export const obtenerProductosPaginados = (params: {
  page: number
  limit: number
  categoriaId?: number | null
}): Promise<ProductosPaginados> =>
  apiProductos.listarPaginado(params)
export const obtenerProducto = (idProducto: number): Promise<Producto> => apiProductos.detalle(idProducto)

// --------------- IMAGENES ----------------
export const obtenerImagenesProducto = (idProducto: number): Promise<ProductoImagen[]> =>
  apiImagenes.listarPorProducto(idProducto)
