import { prisma } from '@prisma/prisma';
import { 
  OperacionCreateDTO, 
  ConfirmarOperacionDTO, 
  OperacionCheckoutDTO 
} from './dto';
import { EstadoOp } from '@prisma/prisma/enums';

export class OperacionService {
  
  // ==========================================
  // 🚀 OPERACIÓN COMPLETA (EL "ONE-SHOT")
  // ==========================================
  
  /**
   * Procesa todo el checkout en una sola transacción.
   * Valida stock, crea cabecera, crea detalles y descuenta inventario.
   */


  static async createCompleta(dato: OperacionCheckoutDTO) {
    return prisma.$transaction(async (tx) => {
      
      // 1. Validar Stock
      for (const item of dato.detalles) {
        const prod = await tx.productos.findUnique({
          where: { idProducto: item.idProducto },
          select: { stock: true, activo: true, nombre: true }
        });

        if (!prod || !prod.activo) throw new Error(`Producto ${item.idProducto} no disponible`);
        if (Number(prod.stock) < item.cantidad) throw new Error(`Stock insuficiente para: ${prod.nombre}`);
      }

      // 2. Crear la Operación (Ajustado a tu Schema real)
      const operacion = await tx.operaciones.create({
        data: {
          idCliente: dato.idCliente || null,
          // ❌ Eliminado idUsuario porque no existe en tu modelo 'Operaciones'
          estado: EstadoOp.CONFIRMADA,
          total: dato.total,
          confirmedAt: new Date(),
          operacionesDetalle: {
            create: dato.detalles.map(d => ({
              idProducto: d.idProducto,
              cantidad: d.cantidad,
              precioUnitario: d.precioUnitario,
              subtotal: d.cantidad * d.precioUnitario
            }))
          }
        },
        include: { operacionesDetalle: true }
      });

      // 3. Descontar Stock
      for (const item of dato.detalles) {
        await tx.productos.update({
          where: { idProducto: item.idProducto },
          data: { stock: { decrement: item.cantidad } }
        });
      }

      return operacion;
    });
  }

  // =========================
  // OPERACIÓN (Consultas)
  // =========================
  
  static async getById(idOperacion: number) {
    return prisma.operaciones.findUnique({
      where: { idOperacion },
      include: { operacionesDetalle: true, cliente: true },
    });
  }

  static async list() {
    return prisma.operaciones.findMany({
      include: { operacionesDetalle: true, cliente: true },
      orderBy: { idOperacion: 'desc' }
    });
  }

  static async listByIdCliente(idCliente: number, page: number, limit: number) {
    const [items, total] = await prisma.$transaction([
      prisma.operaciones.findMany({
        where: { idCliente },
        include: { operacionesDetalle: true, cliente: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { idOperacion: 'desc' }
      }),
      prisma.operaciones.count({ where: { idCliente } })
    ]);

    return { items, total };
  }

  static async delete(idOperacion: number) {
    return prisma.operaciones.delete({
      where: { idOperacion },
    });
  }

  // ==========================================
  // MÉTODOS DE SOPORTE / EDICIÓN MANUAL
  // ==========================================

  static async create(dato: OperacionCreateDTO) {
    return prisma.operaciones.create({
      data: {
        idCliente: dato.idCliente || null,
        estado: EstadoOp.BORRADOR,
        total: 0,
      },
    });
  }

  static async agregarDetalle(idOperacion: number, idProducto: number, cantidad: number, precioUnitario: number) {
    return prisma.$transaction(async (tx) => {
      const producto = await tx.productos.findUnique({
        where: { idProducto },
        select: { stock: true, activo: true },
      });

      if (!producto || !producto.activo) throw new Error('Producto no disponible');
      if (Number(producto.stock) < cantidad) throw new Error('Stock insuficiente');

      const detalle = await tx.operacionDetalle.create({
        data: {
          idOperacion,
          idProducto,
          cantidad,
          precioUnitario,
          subtotal: cantidad * precioUnitario,
        },
      });

      await this.#recalcularTotal(idOperacion, tx);
      return detalle;
    });
  }

  static async updateDetalle(idDetalle: number, data: { cantidad: number; precioUnitario: number }) {
    return prisma.$transaction(async (tx) => {
      const detalle = await tx.operacionDetalle.update({
        where: { idDetalle },
        data: {
          cantidad: data.cantidad,
          precioUnitario: data.precioUnitario,
          subtotal: data.cantidad * data.precioUnitario,
        },
      });

      await this.#recalcularTotal(detalle.idOperacion, tx);
      return detalle;
    });
  }

  static async removeDetalle(idDetalle: number) {
    return prisma.$transaction(async (tx) => {
      const detalle = await tx.operacionDetalle.delete({ where: { idDetalle } });
      await this.#recalcularTotal(detalle.idOperacion, tx);
      return detalle;
    });
  }

  static async confirmarOperacion(idOperacion: number, data: ConfirmarOperacionDTO) {
    return prisma.$transaction(async (tx) => {
      const operacion = await tx.operaciones.findUnique({ where: { idOperacion } });
      
      if (!operacion) throw new Error('Operación no encontrada');
      if (operacion.estado !== EstadoOp.BORRADOR) throw new Error('La operación ya fue procesada');

      const idClienteFinal = data.cliente?.idCliente || operacion.idCliente;

      await this.ajustarStock(idOperacion, false, tx);

      return tx.operaciones.update({
        where: { idOperacion },
        data: {
          estado: EstadoOp.CONFIRMADA,
          idCliente: idClienteFinal,
          confirmedAt: new Date(),
        },
        include: { operacionesDetalle: true, cliente: true },
      });
    });
  }

  // =========================
  // HELPERS PRIVADOS
  // =========================

  static async ajustarStock(idOperacion: number, incrementar: boolean, tx: any) {
    const detalles = await tx.operacionDetalle.findMany({ where: { idOperacion } });

    for (const item of detalles) {
      await tx.productos.update({
        where: { idProducto: item.idProducto },
        data: {
          stock: incrementar 
            ? { increment: item.cantidad } 
            : { decrement: item.cantidad }
        }
      });
    }
  }

  static async #recalcularTotal(idOperacion: number, tx: any) {
    const aggregate = await tx.operacionDetalle.aggregate({
      where: { idOperacion },
      _sum: { subtotal: true },
    });

    await tx.operaciones.update({
      where: { idOperacion },
      data: { total: aggregate._sum.subtotal || 0 },
    });
  }
}