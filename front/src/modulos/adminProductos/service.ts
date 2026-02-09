import { apiProductos, apiCategorias } from './api';
import { 
  CreateProductoSchema, 
  type CreateProductoInput, 
  type Producto,
  type Categoria,
  type GetCategoriasMadresResponse,
  type GetCategoriasHijasResponse
} from './types';

export const serviceProductos = {
  async getListaPaginada(page: number = 1, limit: number = 10, categoriaId?: number) {
    try {
      return await apiProductos.getPaged({ page, limit, categoriaId });
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  async crearProducto(data: CreateProductoInput) {
    const validation = CreateProductoSchema.safeParse(data);
    if (!validation.success) {
      throw new Error(validation.error.issues[0].message);
    }
    try {
      return await apiProductos.create(data);
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  },

  async actualizarProducto(id: number, data: Partial<CreateProductoInput>) {
    try {
      // Nota: Si tienes un UpdateProductoSchema, valídalo aquí
      return await apiProductos.update(id, data); 
    } catch (error) {
      console.error('Error al actualizar:', error);
      throw error;
    }
  },

  async eliminarProducto(id: number) {
    try {
      return await apiProductos.delete(id);
    } catch (error) {
      console.error('Error al eliminar:', error);
      throw error;
    }
  },

  async getDetalle(id: number): Promise<Producto> {
    return await apiProductos.getById(id);
  }
};

export const serviceCategorias = {
  async getArbolCategorias(): Promise<Categoria[]> {
    try {
      const response = await apiCategorias.getTree();
      return response.familias;
    } catch (error) {
      console.error('Error al obtener árbol de categorías:', error);
      return [];
    }
  },

  async getCategoriasParaSelector(tipo: 'madres' | 'hijas', parentId?: number) {
    if (tipo === 'madres') {
      const res = await apiCategorias.getMadres({ idFamilia: parentId }) as GetCategoriasMadresResponse;
      return res.madres.map((cat: Categoria) => ({
        title: cat.nombre,
        value: cat.idCategoria
      }));
    } else {
      const res = await apiCategorias.getHijas({ idMadre: parentId }) as GetCategoriasHijasResponse;
      return res.hijas.map((cat: Categoria) => ({
        title: cat.nombre,
        value: cat.idCategoria
      }));
    }
  }
};