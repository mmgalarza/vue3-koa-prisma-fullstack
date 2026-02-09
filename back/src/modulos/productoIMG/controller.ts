import { Context } from "koa";
import * as productoImagenService from "./service";
import { ProductoImagenCreateDTO, ProductoImagenUpdateDTO, ProductoImagenUpdateSchema, ProductoImagenCreateSchema } from "./dto";

export const getImagenes = async (ctx: Context) => {
  ctx.body = await productoImagenService.getAllImagenes();
};

export const getImagen = async (ctx: Context) => {
  const id = Number(ctx.params.id);

  if (isNaN(id)) {
    ctx.throw(400, "ID inválido");
  }

  const imagen = await productoImagenService.getImagenById(id);

  if (!imagen) {
    ctx.throw(404, "Imagen no encontrada");
  }

  ctx.body = imagen;
};


export const createImagen = async (ctx: Context) => {
  const dto: ProductoImagenCreateDTO = ProductoImagenCreateSchema.parse(ctx.request.body);
  ctx.body = await productoImagenService.createImagen(dto);
};

export const updateImagen = async (ctx: Context) => {
  const id = Number(ctx.params.id);
  const dto: ProductoImagenUpdateDTO = ProductoImagenUpdateSchema.parse(ctx.request.body);
  ctx.body = await productoImagenService.updateImagen(id, dto);
};

export const deleteImagen = async (ctx: Context) => {
  const id = Number(ctx.params.id);
  ctx.body = await productoImagenService.deleteImagen(id);
};
