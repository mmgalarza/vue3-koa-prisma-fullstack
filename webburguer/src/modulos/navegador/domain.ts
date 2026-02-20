import { ItemBrowserArraySchema, type ItemBrowserType } from './zod';

// Agregado de dominio
export class BrowserDomain {
  private readonly items: ItemBrowserType[];

  constructor(data: unknown) {
    console.log("BrowserDomain constructor received data:", data);
    const parseResult = ItemBrowserArraySchema.safeParse(data);
    if (!parseResult.success) {
      // lanzar error con detalle de validación
      throw new Error(JSON.stringify(parseResult.error.format(), null, 2));
    }
    this.items  = parseResult.data;
  }

  get getAll(): ItemBrowserType[] {
    return this.items;
  }

}