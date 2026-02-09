import { prisma } from '@prisma/prisma';
import { OperacionCreateDTO, ConfirmarOperacionDTO } from './dto';

export class OperacionService {
  // =========================
  // OPERACIÓN
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
    });
  }
  // Listar operaciones por idCliente
  // paginacion: page, limit
  static async listByIdCliente(idCliente: number, page: number, limit: number) {
    // Ejecutamos ambas promesas en paralelo
    const [items, total] = await prisma.$transaction([
      prisma.operaciones.findMany({
        where: { idCliente },
        include: { operacionesDetalle: true, cliente: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { idOperacion: 'desc' } // Opcional: ver los últimos primero
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

  // =========================
  // Crear operación BORRADOR
  // =========================
  static async create(data: OperacionCreateDTO) {
    return prisma.operaciones.create({
      data: {
        estado: 'BORRADOR',
        total: 0,
      },
    });
  }

  // =========================
  // DETALLE DE OPERACIÓN
  // =========================
  static async updateDetalle(
    idOperacion: number,
    idDetalle: number,
    data: { cantidad: number; precioUnitario: number }
  ) {
    return prisma.operacionDetalle.update({
      where: { idDetalle },
      data: {
        cantidad: data.cantidad,
        precioUnitario: data.precioUnitario,
        subtotal: data.cantidad * data.precioUnitario,
      },
    });
  }

  static async removeDetalle(idOperacion: number, idDetalle: number) {
    return prisma.operacionDetalle.delete({
      where: { idDetalle },
    });
  }

  static async agregarDetalle(
    idOperacion: number,
    idProducto: number,
    cantidad: number,
    precioUnitario: number
  ) {
    return prisma.$transaction(async (tx) => {
      // Verificar stock
      const producto = await tx.productos.findUnique({
        where: { idProducto },
        select: { stock: true, activo: true },
      });

      if (!producto || !producto.activo) throw new Error('Producto no existe o no está activo');
      if (producto.stock < cantidad) throw new Error('Stock insuficiente');

      // Crear detalle
      const detalle = await tx.operacionDetalle.create({
        data: {
          idOperacion,
          idProducto,
          cantidad,
          precioUnitario,
          subtotal: cantidad * precioUnitario,
        },
      });

      // Actualizar total operación
      const totalAggregate = await tx.operacionDetalle.aggregate({
        where: { idOperacion },
        _sum: { subtotal: true },
      });

      await tx.operaciones.update({
        where: { idOperacion },
        data: { total: totalAggregate._sum.subtotal || 0 },
      });

      return detalle;
    });
  }

  // =========================
  // Confirmar operación
  // =========================
  static async confirmarOperacion(
    idOperacion: number,
    data: ConfirmarOperacionDTO
  ) {
    return prisma.$transaction(async (tx) => {
      const operacion = await tx.operaciones.findUnique({ where: { idOperacion } });
      if (!operacion) throw new Error('Operación no existe');
      if (operacion.estado !== 'BORRADOR') throw new Error('Solo operaciones BORRADOR se pueden confirmar');

      const clienteCreado = await tx.clientes.create({
        data: {
          nombre: data.cliente.nombre,
          email: data.cliente.email,
          calle: data.cliente.calle,
          numero: data.cliente.numero,
          ciudad: data.cliente.ciudad,
          provincia: data.cliente.provincia,
          codigoPostal: data.cliente.codigoPostal,
          pais: data.cliente.pais,
          contacto: data.cliente.contacto,
          activo: true,
          usuario: { connect: { idUsuario: data.usuarioId } },
        },
      });

      const operacionConfirmada = await tx.operaciones.update({
        where: { idOperacion },
        data: {
          estado: 'CONFIRMADA',
          idCliente: clienteCreado.idCliente,
          confirmedAt: new Date(),
        },
        include: { operacionesDetalle: true },
      });

      return operacionConfirmada;
    });
  }

  // =========================
  // Ajustar stock
  // =========================
  static async ajustarStock(idOperacion: number, incrementar: boolean = false) {
    return prisma.$transaction(async (tx) => {
      const detalles = await tx.operacionDetalle.findMany({
        where: { idOperacion },
        select: { idProducto: true, cantidad: true },
      });

      for (const detalle of detalles) {
        await tx.productos.update({
          where: { idProducto: detalle.idProducto },
          data: {
            stock: incrementar
              ? { increment: Number(detalle.cantidad) }
              : { decrement: Number(detalle.cantidad) },
          },
        });
      }
    });
  }
}
