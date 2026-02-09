import { prisma } from '@prisma/prisma';
import { TCategoria } from '@prisma/prisma/enums';
import { CategoriaCreateDTO, CategoriaUpdateDTO } from './dto.ts';

export class CategoriaService {

  /**
   * Crear categoría
   */
  static async create(data: CategoriaCreateDTO) {
    const { tipo, idCategoriaPadre } = data

    // ─────────────────────────────────────────────
    // Validación de jerarquía
    // ─────────────────────────────────────────────

    // FAMILIA → sin padre
    if (tipo === TCategoria.FAMILIA) {
      if (idCategoriaPadre !== null && idCategoriaPadre !== undefined) {
        throw new Error("Una categoría FAMILIA no puede tener padre")
      }
    }

    // MADRE / HIJA → padre obligatorio
    if ((tipo === TCategoria.MADRE || tipo === TCategoria.HIJA) && !idCategoriaPadre) {
      throw new Error(`Una categoría ${tipo} debe tener un padre`)
    }

    // Si hay padre, validarlo
    let padre = null

    if (idCategoriaPadre) {
      padre = await prisma.categorias.findUnique({
        where: { idCategoria: idCategoriaPadre },
      })

      if (!padre) {
        throw new Error("La categoría padre no existe")
      }

      if (!padre.activo) {
        throw new Error("La categoría padre está inactiva")
      }
    }

    // Validación por tipo
    if (tipo === TCategoria.MADRE && padre?.tipo !== TCategoria.FAMILIA) {
      throw new Error("Una categoría MADRE solo puede descender de una FAMILIA")
    }

    if (tipo === TCategoria.HIJA && padre?.tipo !== TCategoria.MADRE) {
      throw new Error("Una categoría HIJA solo puede descender de una MADRE")
    }

    // Un HIJA nunca puede tener descendencia
    if (padre?.tipo === TCategoria.HIJA) {
      throw new Error("Una categoría HIJA no puede tener subcategorías")
    }

    // ─────────────────────────────────────────────
    // Creación
    // ─────────────────────────────────────────────
    return prisma.categorias.create({
      data,
    })
  }
  /**
   * Obtener detalle de categoría
  */
  static async getById(idCategoria: number) {
    const categoria = await prisma.categorias.findUnique({
      where: { idCategoria }, 
      include: {
        subcategorias: { where: { activo: true } },
      },
    })
    if (!categoria) {
      throw new Error("La categoría no existe")
    }
    return categoria
  }

  /**
   * Actualizar categoría
   */
  static async update(idCategoria: number, data: CategoriaUpdateDTO) {

    const categoria = await prisma.categorias.findUnique({
      where: { idCategoria },
    })

    if (!categoria) {
      throw new Error("La categoría no existe")
    }

    // Cambio de padre
    if ("idCategoriaPadre" in data) {

      // FAMILIA no puede tener padre
      if (categoria.tipo === TCategoria.FAMILIA && data.idCategoriaPadre != null) {
        throw new Error("Una categoría FAMILIA no puede tener padre")
      }

      // MADRE / HIJA deben tener padre
      if (
        (categoria.tipo === TCategoria.MADRE || categoria.tipo === TCategoria.HIJA) &&
        !data.idCategoriaPadre
      ) {
        throw new Error(`Una categoría ${categoria.tipo} debe tener padre`)
      }

      if (data.idCategoriaPadre) {
        const nuevoPadre = await prisma.categorias.findUnique({
          where: { idCategoria: data.idCategoriaPadre },
        })

        if (!nuevoPadre) {
          throw new Error("La nueva categoría padre no existe")
        }

        if (!nuevoPadre.activo) {
          throw new Error("La nueva categoría padre está inactiva")
        }

        if (
          categoria.tipo === TCategoria.MADRE &&
          nuevoPadre.tipo !== TCategoria.FAMILIA
        ) {
          throw new Error("Una MADRE solo puede descender de una FAMILIA")
        }

        if (
          categoria.tipo === TCategoria.HIJA &&
          nuevoPadre.tipo !== TCategoria.MADRE
        ) {
          throw new Error("Una HIJA solo puede descender de una MADRE")
        }

        if (nuevoPadre.tipo === TCategoria.HIJA) {
          throw new Error("Una HIJA no puede tener subcategorías")
        }
      }
    }

    return prisma.categorias.update({
      where: { idCategoria },
      data,
    })
  }

  /**
   * Desactivar categoría (soft delete)
   */
  static async deactivate(idCategoria: number) {

    const categoria = await prisma.categorias.findUnique({
      where: { idCategoria },
      include: {
        subcategorias: true,
        productos: true,
      },
    })

    if (!categoria) {
      throw new Error("La categoría no existe")
    }

    if (categoria.subcategorias.length > 0) {
      throw new Error("No se puede desactivar una categoría con subcategorías")
    }

    if (categoria.productos.length > 0) {
      throw new Error("No se puede desactivar una categoría con productos")
    }

    return prisma.categorias.update({
      where: { idCategoria },
      data: { activo: false },
    })
  }


// obtener árbol completo de categorías

static async tree() {
  // Obtener todas las familias con sus descendientes
  return prisma.categorias.findMany({
    where: { tipo: TCategoria.FAMILIA, activo: true },
    include: {
      subcategorias: {
        where: { activo: true },
        include: {
          subcategorias: { where: { activo: true } }, // hijas
        },
      },
    },
  })
}

// Obtener categorías por tipo y opcionalmente por padre

static async getByTipo(tipo: TCategoria, idPadre?: number) {
  const where: any = { tipo, activo: true }
  if (idPadre) where.idCategoriaPadre = idPadre

  return prisma.categorias.findMany({
    where,
    include: {
      subcategorias:
        tipo === TCategoria.FAMILIA
          ? { where: { activo: true }, include: { subcategorias: { where: { activo: true } } } }
          : undefined,
    },
  })
}


  /**
   * Eliminación física (opcional, peligrosa)
   */
  static async delete(idCategoria: number) {

    const categoria = await prisma.categorias.findUnique({
      where: { idCategoria },
      include: {
        subcategorias: true,
        productos: true,
      },
    })

    if (!categoria) {
      throw new Error("La categoría no existe")
    }

    if (categoria.subcategorias.length > 0) {
      throw new Error("No se puede eliminar una categoría con subcategorías")
    }

    if (categoria.productos.length > 0) {
      throw new Error("No se puede eliminar una categoría con productos")
    }

    return prisma.categorias.delete({
      where: { idCategoria },
    })
  }
}
