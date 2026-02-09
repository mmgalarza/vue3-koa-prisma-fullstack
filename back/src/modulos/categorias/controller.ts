// categoria.controller.ts
import { Context } from "koa"
import { CategoriaService } from "./service"
import { CategoriaCreateSchema, CategoriaUpdateSchema  } from "./dto"
import { TCategoria } from "@prisma/prisma/enums"

export class CategoriaController {
  // ───────────────────────────────
  // Crear categoría
  // ───────────────────────────────
  static async create(ctx: Context) {
    try {
      const dto = CategoriaCreateSchema.parse(ctx.request.body)
      const categoria = await CategoriaService.create(dto)
      ctx.status = 201
      ctx.body = categoria
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }
  // ───────────────────────────────
  // Obtener detalle categoría
  // ───────────────────────────────
  static async get(ctx: Context) {
    try {
      const id = parseInt(ctx.params.id)
      if (isNaN(id)) throw new Error("ID inválido")
      const categoria = await CategoriaService.getById(id)
      ctx.status = 200
      ctx.body = categoria
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    } 
  }

  // ───────────────────────────────
  // Actualizar categoría
  // ───────────────────────────────
  static async update(ctx: Context) {
    try {
      const id = parseInt(ctx.params.id)
      if (isNaN(id)) throw new Error("ID inválido")

      const dto = CategoriaUpdateSchema.parse(ctx.request.body)
      const categoria = await CategoriaService.update(id, dto)
      ctx.status = 200
      ctx.body = categoria
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }
  // ───────────────────────────────
  // Desactivar categoría (soft delete)
  // ───────────────────────────────
  static async deactivate(ctx: Context) {
    try {
      const id = parseInt(ctx.params.id)
      if (isNaN(id)) throw new Error("ID inválido")

      const categoria = await CategoriaService.deactivate(id)
      ctx.status = 200
      ctx.body = categoria
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }
  // ───────────────────────────────
  // Eliminar categoría (física)
  // ───────────────────────────────
  static async delete(ctx: Context) {
    try {
      const id = parseInt(ctx.params.id)
      if (isNaN(id)) throw new Error("ID inválido")

      const categoria = await CategoriaService.delete(id)
      ctx.status = 200
      ctx.body = { message: "Categoría eliminada", categoria }
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }

  // ───────────────────────────────
  // Árbol para frontend
  // ───────────────────────────────

  static async familias(ctx: Context) {
    try {
      const familias = await CategoriaService.tree() // Devuelve familias → madres → hijas
      ctx.status = 200
      ctx.body = { familias }
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }

  static async madres(ctx: Context) {
    try {
      const idFamilia = ctx.query.idFamilia ? parseInt(ctx.query.idFamilia as string) : undefined
      const madres = await CategoriaService.getByTipo(TCategoria.MADRE, idFamilia)
      ctx.status = 200
      ctx.body = { madres }
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }

  static async hijas(ctx: Context) {
    try {
      const idMadre = ctx.query.idMadre ? parseInt(ctx.query.idMadre as string) : undefined
      const hijas = await CategoriaService.getByTipo(TCategoria.HIJA, idMadre)
      ctx.status = 200
      ctx.body = { hijas }
    } catch (err: any) {
      ctx.status = 400
      ctx.body = { error: err.message }
    }
  }
}


