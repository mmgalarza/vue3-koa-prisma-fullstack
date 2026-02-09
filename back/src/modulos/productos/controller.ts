import { Context } from 'koa';
import { ProductoService } from './service';
import {
  createProductoSchema,
  updateProductoSchema,
  PaginacionProductosDto,
  PaginacionProductosSchema
} from './dto';

export class ProductoController {

  // =========================
  // CRUD
  // =========================

  static async create(ctx: Context) {
    const data = createProductoSchema.parse(ctx.request.body);

    const producto = await ProductoService.create(data);

    ctx.status = 201;
    ctx.body = producto;
  }

  static async update(ctx: Context) {
    const idProducto = Number(ctx.params.id);
    const data = updateProductoSchema.parse(ctx.request.body);

    const producto = await ProductoService.update(idProducto, data);

    ctx.body = producto;
  }

  static async getById(ctx: Context) {
    const idProducto = Number(ctx.params.id);

    ctx.body = await ProductoService.getById(idProducto);
  }

  static async list(ctx: Context) {
    ctx.body = await ProductoService.list();
  }
  //
  // listar productos paginados
  //
  static async listarPaginado(ctx: Context) {
    const query: PaginacionProductosDto = PaginacionProductosSchema.parse(ctx.request.query);
    const productosPaginados = await ProductoService.listarPaginado(query);
    ctx.body = productosPaginados;
  }

  static async getByCategoria(ctx: Context) {
    const idCategoria = Number(ctx.params.idCategoria);

    ctx.body = await ProductoService.getByCategoria(idCategoria);
  }

  // eliminación lógica simple
  static async delete(ctx: Context) {
    const idProducto = Number(ctx.params.id);

    const producto = await ProductoService.delete(idProducto);

    ctx.body = producto;
  }

  // =========================
  // MÉTODOS DE NEGOCIO
  // =========================

  /**
   * Actualizar precio
   * PATCH /productos/:id/precio
   */
  static async updatePrecio(ctx: Context) {
    const idProducto = Number(ctx.params.id);
    const { precio } = ctx.request.body as { precio: number };

    const producto = await ProductoService.updatePrecio(idProducto, precio);

    ctx.body = producto;
  }

  /**
   * Aumentar stock
   * PATCH /productos/:id/stock/entrada
   */
  static async aumentarStock(ctx: Context) {
    const idProducto = Number(ctx.params.id);
    const { cantidad } = ctx.request.body as { cantidad: number };

    const producto = await ProductoService.aumentarStock(idProducto, cantidad);

    ctx.body = producto;
  }

  /**
   * Reducir stock
   * PATCH /productos/:id/stock/salida
   */
  static async reducirStock(ctx: Context) {
    const idProducto = Number(ctx.params.id);
    const { cantidad } = ctx.request.body as { cantidad: number };

    const producto = await ProductoService.reducirStock(idProducto, cantidad);

    ctx.body = producto;
  }

  /**
   * Desactivar producto si no tiene stock
   */
  static async desactivarSiSinStock(ctx: Context) {
    const idProducto = Number(ctx.params.id);

    const producto = await ProductoService.desactivarSiSinStock(idProducto);

    ctx.body = producto;
  }
}
