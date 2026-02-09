import Router from '@koa/router';
import { CategoriaController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/categorias' });

// Publico: consultar categorías
router.get('/', CategoriaController.familias);           // familias → madres → hijas
router.get('/madres', CategoriaController.madres);       // madres por familia opcional
router.get('/hijas', CategoriaController.hijas);         // hijas por madre opcional
router.get('/:id', CategoriaController.get);             // detalle categoría

/* ───────────────────────────────
   RUTAS PRIVADAS
─────────────────────────────── */
const privateRouter = new Router();

privateRouter.use(authMiddleware, requireAdmin);

privateRouter.post('/', CategoriaController.create);
privateRouter.patch('/:id', CategoriaController.update);
privateRouter.patch('/:id/desactivar', CategoriaController.deactivate);
privateRouter.delete('/:id', CategoriaController.delete);

router.use(privateRouter.routes());

export default router;
