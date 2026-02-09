import { prisma } from '@prisma/prisma';
import {
  OperacionCreateDTO,
  OperacionDetalleCreateDTO,
  OperacionDetalleUpdateDTO,
  OperacionConfirmarDTO,
} from './dto';

export class OperacionService {

  // =========================
  // OPERACIÓN
  // =========================

  static async create(data: OperacionCreateDTO) {
    return prisma.operaciones.create({
      data: {
        idCliente: data.idCliente,
        estado: 'BORRADOR',
        total: 0,
      },
    });
  }

  static async getById(idOperacion: number) {
    return prisma.operaciones.findUnique({
      where: { idOperacion },
      include: {
        cliente: true,
        operacionesDetalle: {
          include: { producto: true },
        },
      },
    });
  }

  static async list() {
    return prisma.operaciones.findMany({
      include: {
        cliente: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async delete(idOperacion: number) {
    return prisma.operaciones.update({
      where: { idOperacion },
      data: { estado: 'ANULADA' },
    });
  }

  // =========================
  // DETALLE DE OPERACIÓN
  // =========================

  /** Agregar detalle */
  static async addDetalle(data: OperacionDetalleCreateDTO) {
    return prisma.$transaction(async (tx) => {
      // 1️⃣ verificar producto y stock
      const producto = await tx.productos.findUnique({
        where: { idProducto: data.idProducto },
      });
      if (!producto) throw new Error('Producto no existe');
      if (producto.stock < data.cantidad)
        throw new Error('Stock insuficiente');

      // 2️⃣ crear detalle con precio actual y subtotal
      const detalle = await tx.operacionDetalle.create({
        data: {
          idOperacion: data.idOperacion,
          idProducto: data.idProducto,
          cantidad: data.cantidad,
          precioUnitario: producto.precios,
          subtotal: producto.precios * data.cantidad,
        },
      });

      // 3️⃣ recalcular total de operación
      const total = await tx.operacionDetalle.aggregate({
        where: { idOperacion: data.idOperacion },
        _sum: { subtotal: true },
      });

      await tx.operaciones.update({
        where: { idOperacion: data.idOperacion },
        data: { total: total._sum.subtotal || 0 },
      });

      return detalle;
    });
  }

  /** Actualizar detalle */
  static async updateDetalle(
    idDetalle: number,
    data: OperacionDetalleUpdateDTO
  ) {
    return prisma.$transaction(async (tx) => {
      const detalle = await tx.operacionDetalle.findUnique({
        where: { idDetalle },
        include: { producto: true },
      });
      if (!detalle) throw new Error('Detalle no existe');

      const cantidad = data.cantidad ?? detalle.cantidad;

      // validar stock
      if (detalle.producto.stock < cantidad)
        throw new Error('Stock insuficiente');

      // actualizar subtotal
      const subtotal = cantidad * detalle.precioUnitario;

      await tx.operacionDetalle.update({
        where: { idDetalle },
        data: { cantidad, subtotal },
      });
