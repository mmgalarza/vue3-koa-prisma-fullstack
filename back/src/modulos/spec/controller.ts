import { Context } from "koa";
import { OpenApiService } from "./service";

const service = new OpenApiService();

export class OpenApiController {
  static getSpecs(ctx: Context) {
    ctx.body = service.getSpecsList();
  }

  static getSpecByModule(ctx: Context) {
    const { module, file } = ctx.params;

    const content = service.getSpecContent(module, file);

    if (!content) {
      ctx.status = 404;
      ctx.body = { error: "Spec not found" };
      return;
    }

    ctx.type = "yaml";
    ctx.body = content;
  }
}
