import { prisma } from '@prisma/prisma';
import { ProductoCreateDTO,
  ProductoUpdateDTO,
  PaginacionProductosDto,
  PaginacionResponse,
  Producto } from './dto';

export class ProductoService {

  // =========================
  // CRUD BÁSICO
  // =========================

  static async create(data: ProductoCreateDTO) {
    return prisma.productos.create({
      data,
    });
  }

  static async update(
    idProducto: number,
    data: Partial<ProductoUpdateDTO>
  ) {
    return prisma.productos.update({
      where: { idProducto },
      data,
    });
  }

  static async getById(idProducto: number) {
    return prisma.productos.findUnique({
      where: { idProducto },
      include: {
        categoria: true,
        imagenes: {
          where: { activo: true },
          orderBy: { orden: 'asc' },
        },
      },
    });
  }
  //
  // Lista productos con querystring page, limit, categoriaId
  //
  static async listarPaginado(params: PaginacionProductosDto): Promise<PaginacionResponse<Producto>> {
    const { page, limit, categoriaId } = params;
    const skip = (page - 1) * limit;
    
    // Construir WHERE clause
    const where: any = { activo: true };
    if (categoriaId) where.idCategoria = categoriaId;

    // Ejecutar consultas en paralelo
    const [total, productos] = await Promise.all([
      prisma.productos.count({ where }),
      prisma.productos.findMany({
        where,
        skip,
        take: limit,
        include: {
          categoria: {
            select: {
              idCategoria: true,
              nombre: true
            }
          },
          imagenes: {
            where: { activo: true },
            orderBy: { orden: 'asc' },
            take: 1,
            select: {
              idImagen: true,
              url: true,
              orden: true,
              activo: true
            }
          },
        },
        orderBy: {
          idProducto: 'desc'
        }
      })
    ]);

    // Convertir Decimal a Number para el frontend
    const items = productos.map(producto => ({
      ...producto,
      precios: Number(producto.precios)
    }));

    return { items, total };
  }

  static async list() {
    return prisma.productos.findMany({
      where: { activo: true },
      select: {
        idProducto: true,
        nombre: true,
        descripcion: true,
        precios: true,
        stock: true,
        activo: true,
        // Relación con Categoría
        categoria: {
          select: {
            idCategoria: true,
            nombre: true
          }
        },
        // Relación con Imágenes (Solo la principal/primera)
        imagenes: {
          where: { activo: true },
          orderBy: { orden: 'asc' },
          take: 1,
          select: {
            idImagen: true,
            url: true,
            orden: true,
            activo: true
          }
        }
      },
      orderBy: {
        idProducto: 'desc'
      }
    });
  }

  static async getByCategoria(_idCategoria: number) {
    return prisma.productos.findMany({
      where: {
        idCategoria: _idCategoria, // Aseguramos que sea número
        activo: true,
      },
      select: {        
        idProducto: true,
        nombre: true,
        descripcion: true,
        precios: true, // Se enviará como String, Zod lo transformará
        stock: true,
        activo: true,
        categoria: {
          select: {
            idCategoria: true,
            nombre: true
          }
        },
        imagenes: {
          where: { activo: true },
          orderBy: { orden: 'asc' },
          take: 1,
          select: {
            idImagen: true,
            url: true,
            orden: true,
            activo: true
          }
        }
      }
    });
  }

  static async delete(idProducto: number) {
    return prisma.productos.update({
      where: { idProducto },
      data: { activo: false },
    });
  }

  static async getAll() {
    return prisma.productos.findMany();
  }

  // =========================
  // MÉTODOS DE NEGOCIO
  // =========================

  /**
   * Actualizar precio del producto
   * Regla: el precio no puede ser negativo
   */
  static async updatePrecio(idProducto: number, nuevoPrecio: number) {
    if (nuevoPrecio < 0) {
      throw new Error('El precio no puede ser negativo');
    }

    return prisma.productos.update({
      where: { idProducto },
      data: { precios: nuevoPrecio },
    });
  }

  /**
   * Incrementar stock (compras, reposición, ajustes)
   */
  static async aumentarStock(idProducto: number, cantidad: number) {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor a cero');
    }

    return prisma.productos.update({
      where: { idProducto },
      data: {
        stock: {
          increment: cantidad,
        },
      },
    });
  }

  /**
   * Reducir stock (ventas, consumo)
   */
  static async reducirStock(idProducto: number, cantidad: number) {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor a cero');
    }

    const producto = await prisma.productos.findUnique({
      where: { idProducto },
    });

    if (!producto) {
      throw new Error('Producto no existe');
    }

    if (producto.stock < cantidad) {
      throw new Error('Stock insuficiente');
    }

    return prisma.productos.update({
      where: { idProducto },
      data: {
        stock: {
          decrement: cantidad,
        },
      },
    });
  }

  /**
   * Verificar si hay stock suficiente (útil para operaciones)
   */
  static async tieneStock(idProducto: number, cantidad: number): Promise<boolean> {
    const producto = await prisma.productos.findUnique({
      where: { idProducto },
      select: { stock: true, activo: true },
    });

    if (!producto || !producto.activo) return false;

    return producto.stock >= cantidad;
  }

  /**
   * Desactivar producto solo si no tiene stock
   * (regla típica de negocio)
   */
  static async desactivarSiSinStock(idProducto: number) {
    const producto = await prisma.productos.findUnique({
      where: { idProducto },
    });

    if (!producto) {
      throw new Error('Producto no existe');
    }

    if (producto.stock > 0) {
      throw new Error('No se puede desactivar un producto con stock');
    }

    return prisma.productos.update({
      where: { idProducto },
      data: { activo: false },
    });
  }
}
