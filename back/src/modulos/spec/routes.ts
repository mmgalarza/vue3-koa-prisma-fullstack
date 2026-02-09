import Router from "@koa/router";
import { OpenApiController } from "./controller";

const router = new Router();

router.get("/docs/specs", OpenApiController.getSpecs);
router.get("/docs/specs/:module/:file",  OpenApiController.getSpecByModule);

export default router;
